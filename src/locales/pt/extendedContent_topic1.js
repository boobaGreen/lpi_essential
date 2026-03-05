export const topic1Extended = {
  "1-1": {
    "title": "Evolução do Linux e dos sistemas operacionais",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏛️",
        "text": "Das Origens: Unix e a Revolução"
      },
      {
        "type": "timeline",
        "events": [
          {
            "year": "1969",
            "title": "Nasce Unix",
            "desc": "Dennis Ritchie e Ken Thompson creano Unix ai Bell Labs di AT&T. Scritto in C, un linguaggio portabile, Unix diventa il riferimento per i sistemi operativi."
          },
          {
            "year": "1983",
            "title": "Projeto GNU",
            "desc": "Richard Stallman lancia il progetto GNU per creare un sistema operativo completamente libero. Nasce la Free Software Foundation (FSF) nel 1985."
          },
          {
            "year": "1987",
            "title": "Minix",
            "desc": "Andrew Tanenbaum crea Minix per scopi didattici. Sarà l'ispirazione diretta per Linus Torvalds."
          },
          {
            "year": "1991",
            "title": "Linux!",
            "desc": "Linus Torvalds, studente finlandese di 21 anni, posta su comp.os.minix: \"Sto facendo un sistema operativo libero, solo un hobby, non sarà grande e professionale come GNU\". Nasce il kernel Linux 0.01."
          },
          {
            "year": "1992",
            "title": "Licença GPL",
            "desc": "Il kernel Linux adotta la licenza GPL v2, diventando ufficialmente software libero."
          },
          {
            "year": "2004",
            "title": "Ubuntu",
            "desc": "Mark Shuttleworth fonda Canonical e rilascia Ubuntu, rendendo Linux accessibile a tutti."
          },
          {
            "year": "Oggi",
            "title": "O Linux está em todo lugar",
            "desc": "Oltre il 90% dei server cloud, 100% dei supercomputer TOP500, miliardi di dispositivi Android. Linux è il kernel più usato al mondo."
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Linux x GNU/Linux",
        "content": "Tecnicamente, \"Linux\" é apenas o kernel. O sistema completo é chamado GNU/Linux porque inclui os utilitários GNU (gcc, bash, coreutils). No entanto, no uso comum, “Linux” significa todo o sistema operacional."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "As famílias de distribuição"
      },
      {
        "type": "paragraph",
        "text": "Uma distribuição Linux é um sistema completo que consiste em: kernel Linux + utilitários GNU + gerenciador de pacotes + software selecionado + configuração padrão. Existem centenas de distribuições, organizadas em “famílias” baseadas na linhagem e no gerenciador de pacotes."
      },
      {
        "type": "diagram",
        "title": "Árvore genealógica",
        "boxes": [
          {
            "label": "Debian",
            "color": "#e11d48",
            "children": [
              "Ubuntu",
              "Linux Mint",
              "Kali Linux",
              "Raspbian"
            ]
          },
          {
            "label": "Red Hat",
            "color": "#f59e0b",
            "children": [
              "RHEL",
              "Fedora",
              "CentOS Stream",
              "Rocky Linux"
            ]
          },
          {
            "label": "SUSE",
            "color": "#10b981",
            "children": [
              "SLES",
              "openSUSE Leap",
              "openSUSE Tumbleweed"
            ]
          },
          {
            "label": "Indipendenti",
            "color": "#8b5cf6",
            "children": [
              "Arch Linux",
              "Gentoo",
              "Slackware"
            ]
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Distribuição",
          "Básico",
          "Pacotes",
          "Liberar",
          "Uso típico"
        ],
        "rows": [
          [
            "Ubuntu",
            "Debian",
            "apto/.deb",
            "Fixo (6 meses)",
            "Desktop, nuvem, servidor"
          ],
          [
            "Fedora",
            "Chapéu Vermelho",
            "dnf/.rpm",
            "Fixo (6 meses)",
            "Desenvolvimento, Desktop"
          ],
          [
            "RHEL",
            "Chapéu Vermelho",
            "yum/dnf/.rpm",
            "LTS (10 anos)",
            "Empresa, Produção"
          ],
          [
            "ArchLinux",
            "Independente",
            "pacman",
            "Liberação contínua",
            "Usuários experientes"
          ],
          [
            "openSUSE",
            "SUSE",
            "zypper/.rpm",
            "Misturado",
            "Desktop, Corporativo"
          ],
          [
            "Debian",
            "Original",
            "apto/.deb",
            "Fixo (~2 anos)",
            "Servidor, Estabilidade"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "No exame LPI, você deverá reconhecer as famílias de distribuição, seus gerenciadores de pacotes (.deb vs .rpm) e as diferenças entre a versão fixa (Ubuntu) e a versão contínua (Arch)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📱",
        "text": "Linux no mundo incorporado e na nuvem"
      },
      {
        "type": "paragraph",
        "text": "Linux não é apenas para servidores e desktops. O kernel Linux é o coração de bilhões de dispositivos: smartphones Android, smart TVs, roteadores, sistemas de infoentretenimento automotivo, dispositivos IoT, drones e até mesmo o rover Perseverance em Marte usa um processador com Linux!"
      },
      {
        "type": "table",
        "headers": [
          "Setor",
          "Exemplo",
          "Por que Linux?"
        ],
        "rows": [
          [
            "Smartphones",
            "Android (mais de 3 bilhões de dispositivos)",
            "Kernel editável, licença gratuita"
          ],
          [
            "Nuvem",
            "AWS, Azure, GCP",
            "Mais de 90% das cargas de trabalho em nuvem usam Linux"
          ],
          [
            "Supercomputadores",
            "TOP500",
            "100% dos supercomputadores no ranking"
          ],
          [
            "IoT",
            "Raspberry Pi, casa inteligente",
            "Leve, personalizável, gratuito"
          ],
          [
            "Automotivo",
            "Tesla, Audi",
            "Em tempo real, confiável e personalizável"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Cenário: Por que a nuvem adora o Linux",
        "text": "Imagine que você é o CTO de uma startup. Você precisa escolher o sistema operacional para 100 servidores na nuvem. O Windows Server custa aproximadamente US$ 500/servidor/ano em licenças. Com Linux? Custo zero de licenciamento, controle total, enorme comunidade de suporte e você pode automatizar tudo com scripts Bash. É por isso que 90% da nuvem usa Linux."
      }
    ]
  },
  "1-2": {
    "title": "Aplicativos de código aberto",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Software de código aberto para todas as necessidades"
      },
      {
        "type": "paragraph",
        "text": "O mundo do código aberto oferece alternativas gratuitas e poderosas para quase todos os softwares comerciais. Conhecer essas aplicações é essencial para o exame LPI e para a vida profissional com Linux."
      },
      {
        "type": "table",
        "headers": [
          "Categoria",
          "Código aberto",
          "Equivalente proprietário"
        ],
        "rows": [
          [
            "Suítes de escritório",
            "LibreOffice",
            "Microsoft Office"
          ],
          [
            "Navegadores da web",
            "Raposa de fogo, cromo",
            "Chrome, Edge, Safari"
          ],
          [
            "Editor de imagens",
            "GIMP",
            "Adobe Photoshop"
          ],
          [
            "Modelagem 3D",
            "Liquidificador",
            "Maia, 3ds Max"
          ],
          [
            "Editor de vídeo",
            "Kdenlive, OpenShot",
            "Adobe Premiere"
          ],
          [
            "Editor de áudio",
            "Audácia",
            "Audições da Adobe"
          ],
          [
            "Cliente de e-mail",
            "Pássaro Trovão",
            "Panorama"
          ],
          [
            "Gráficos vetoriais",
            "Inkscape",
            "Adobe Ilustrador"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "Aplicativos de servidor"
      },
      {
        "type": "paragraph",
        "text": "Linux domina o mundo dos servidores. O software de servidor de código aberto lida com a maior parte do tráfego mundial da Internet."
      },
      {
        "type": "table",
        "headers": [
          "Função",
          "Programas",
          "Descrição"
        ],
        "rows": [
          [
            "Servidor Web",
            "Servidor HTTP Apache",
            "O servidor web mais usado historicamente"
          ],
          [
            "Servidor Web",
            "Nginx",
            "Alto desempenho, proxy reverso"
          ],
          [
            "Bancos de dados",
            "MariaDB/MySQL",
            "Banco de dados relacional mais popular"
          ],
          [
            "Bancos de dados",
            "PostgreSQL",
            "Banco de dados de nível empresarial"
          ],
          [
            "Compartilhamento de arquivos",
            "Samba",
            "Compartilhamento com clientes Windows (SMB/CIFS)"
          ],
          [
            "Compartilhamento de arquivos",
            "NFS",
            "Compartilhamento nativo de Unix/Linux"
          ],
          [
            "E-mail",
            "Postfix / Pombal",
            "Servidor MTA e IMAP/POP3"
          ],
          [
            "DNS",
            "VINCULAR",
            "Servidor DNS de referência"
          ],
          [
            "Recipiente",
            "Docker",
            "Plataforma de contêineres"
          ],
          [
            "Orquestração",
            "Kubernetes",
            "Orquestração de contêineres em escala"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI exige conhecimento dos principais aplicativos de código aberto para desktops e servidores, além da capacidade de distinguir entre software compilado (C, C++) e interpretado (Python, Bash, JavaScript)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💻",
        "text": "Linguagens de programação"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Preenchido",
          "items": [
            "C/C++ — desempenho máximo",
            "Compilado em código de máquina",
            "O programa resultante é um binário",
            "Você precisa recompilar para cada plataforma"
          ]
        },
        "right": {
          "title": "Interpretado",
          "items": [
            "Python, Perl, Ruby — versátil",
            "Feito linha por linha",
            "Eles precisam de um intérprete instalado",
            "Portátil entre plataformas sem modificações"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Java é um caso especial",
        "content": "Java é compilado em bytecode (.class), que é então executado pela JVM (Java Virtual Machine). Não é puramente compilado nem interpretado."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Gerenciamento de Pacotes"
      },
      {
        "type": "paragraph",
        "text": "Os gerenciadores de pacotes são o coração da manutenção de software no Linux. Eles instalam, atualizam e removem software enquanto gerenciam dependências automaticamente."
      },
      {
        "type": "table",
        "headers": [
          "Família",
          "Formatar",
          "Ferramenta de baixo nível",
          "Ferramenta de alto nível"
        ],
        "rows": [
          [
            "Debian/Ubuntu",
            ".deb",
            "dpkg",
            "apt/apt-get"
          ],
          [
            "Chapéu Vermelho/Fedora",
            ".rpm",
            "rpm",
            "hum / dnf"
          ],
          [
            "SUSE",
            ".rpm",
            "rpm",
            "Zíper"
          ],
          [
            "Arco",
            ".pkg.tar.zst",
            "pacman",
            "pacman"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemplos de gerenciamento de pacotes",
        "prompt": "#Debian/Ubuntu\n$ sudo apt update && sudo apt install nginx\n\n#Chapéu Vermelho/Fedora\n$ sudo dnf instalar nginx\n\n#SUSE\n$ sudo zypper instalar nginx",
        "output": ""
      }
    ]
  },
  "1-3": {
    "title": "Software e licenças de código aberto",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗽",
        "text": "As 4 liberdades do software livre"
      },
      {
        "type": "paragraph",
        "text": "Richard Stallman definiu 4 liberdades fundamentais que tornam o software “livre” (livre como em liberdade, não “livre”). Estas liberdades são a base filosófica de todo o movimento de código aberto."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Libertà 0",
            "desc": "Usare il programma per qualsiasi scopo, senza restrizioni"
          },
          {
            "term": "Libertà 1",
            "desc": "Studiare come funziona e adattarlo alle proprie necessità (richiede accesso al codice sorgente)"
          },
          {
            "term": "Libertà 2",
            "desc": "Ridistribuire copie per aiutare altri"
          },
          {
            "term": "Libertà 3",
            "desc": "Migliorare il programma e distribuire le modifiche alla community"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "\"Grátis\" não significa \"grátis\"",
        "content": "“Software livre” refere-se à LIBERDADE, não ao preço. Você pode vender software grátis! O código-fonte deve estar disponível, mas você pode solicitar remuneração pela distribuição, suporte ou customização."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Licenças de código aberto comparadas"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔒 Copyleft (GPL, AGPL)",
          "items": [
            "Derivativos DEVEM manter a mesma licença",
            "O código modificado deve permanecer de código aberto",
            "GPL: o mais usado (kernel Linux)",
            "AGPL: estende copyleft para serviços web/SaaS",
            "LGPL: permite vinculação com código proprietário"
          ]
        },
        "right": {
          "title": "🔓 Permissivo (MIT, BSD, Apache)",
          "items": [
            "Derivativos podem se tornar proprietários",
            "Poucas restrições: basta citar o autor",
            "MIT: o mais simples e mais curto",
            "BSD: Semelhante ao MIT, origem acadêmica",
            "Apache 2.0: Inclui concessões de patentes"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Licença",
          "Tipo",
          "Copyleft?",
          "Uso comercial",
          "Exemplo"
        ],
        "rows": [
          [
            "GPL v3",
            "Copyleft forte",
            "Sim",
            "Sim",
            "Kernel Linux, GCC"
          ],
          [
            "LGPL",
            "Copyleft fraco",
            "Parcial",
            "Sim",
            "glibc, Qt"
          ],
          [
            "AGPL",
            "Copyleft de rede",
            "Sim (+ SaaS)",
            "Sim",
            "MongoDB (antigo)"
          ],
          [
            "MIT",
            "Permissivo",
            "Não",
            "Sim",
            "jQuery, Node.js"
          ],
          [
            "Apache 2.0",
            "Permissivo",
            "Não",
            "Sim",
            "Android, Kubernetes"
          ],
          [
            "BSD",
            "Permissivo",
            "Não",
            "Sim",
            "FreeBSD, nginx"
          ],
          [
            "Creative Commons",
            "Isso varia",
            "Opcional",
            "Depende",
            "Documentação, mídia"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pede que você distinga entre licenças copyleft (GPL) e permissivas (MIT, BSD, Apache). Lembre-se: GPL = os derivativos devem permanecer GPL. MIT/BSD = derivativos podem se tornar proprietários."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💼",
        "text": "Modelos de negócios de código aberto"
      },
      {
        "type": "paragraph",
        "text": "Ao contrário da crença popular, as empresas podem ganhar dinheiro com código aberto. Aqui estão os principais modelos:"
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Supporto e Sottoscrizioni",
            "desc": "Red Hat vende supporto enterprise per RHEL. Il codice è libero, il servizio no."
          },
          {
            "term": "Dual Licensing",
            "desc": "Lo stesso software con licenza GPL (gratis) e commerciale (a pagamento per chi non vuole il copyleft)."
          },
          {
            "term": "SaaS",
            "desc": "Offri il software come servizio cloud (GitHub, GitLab)."
          },
          {
            "term": "Open Core",
            "desc": "Core open source + funzionalità premium proprietarie."
          },
          {
            "term": "Consulenza e Formazione",
            "desc": "Certificazioni LPI, RHCSA, corsi di formazione."
          }
        ]
      },
      {
        "type": "story",
        "title": "Cenário: Red Hat – da startup até US$ 34 bilhões",
        "text": "A Red Hat nasceu em 1993 distribuindo Linux em uma caixa. O modelo: o software é gratuito, mas as empresas pagam pelo suporte, atualizações certificadas e garantias legais. Em 2019, a IBM adquiriu a Red Hat por US$ 34 bilhões, provando que o código aberto pode criar um valor enorme."
      }
    ]
  },
  "1-4": {
    "title": "Habilidades em TIC e Linux",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Ambiente de trabalho"
      },
      {
        "type": "paragraph",
        "text": "O Linux oferece vários ambientes de desktop. Ao contrário do Windows e do macOS onde existe apenas um desktop, no Linux você pode escolher o seu!"
      },
      {
        "type": "table",
        "headers": [
          "Áreas de trabalho",
          "Kits de ferramentas",
          "Filosofia",
          "RAM mínima",
          "Distribuição típica"
        ],
        "rows": [
          [
            "GNOMO",
            "GTK",
            "Simplicidade, modernidade",
            "1 GB",
            "Ubuntu, Fedora"
          ],
          [
            "Plasma do KDE",
            "Quantidade",
            "Personalização total",
            "1 GB",
            "Kubuntu, openSUSE"
          ],
          [
            "XFCE",
            "GTK",
            "Leveza, eficiência",
            "256 MB",
            "Xubuntu, Manjaro"
          ],
          [
            "LXDE/LXQt",
            "GTK/Qt",
            "Ultraleve",
            "128 MB",
            "Lubuntu"
          ],
          [
            "Canela",
            "GTK",
            "Tradicional, fácil de usar",
            "512 MB",
            "Linux Mint"
          ],
          [
            "AMIGO",
            "GTK",
            "Fork do GNOME 2",
            "512 MB",
            "Ubuntu MATE"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "content": "Se o seu PC for antigo, o XFCE ou o LXQt são perfeitos. Se você deseja personalização máxima, escolha KDE Plasma. Se você prefere simplicidade, o GNOME é ideal."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "Privacidade e segurança online"
      },
      {
        "type": "paragraph",
        "text": "Na era digital, proteger a sua privacidade e segurança é crucial. Linux oferece ferramentas poderosas para proteção de dados."
      },
      {
        "type": "table",
        "headers": [
          "Ameaça",
          "O que ele faz",
          "Como se proteger"
        ],
        "rows": [
          [
            "Cookies de terceiros",
            "Eles rastreiam a navegação entre diferentes sites",
            "Bloqueie-os no navegador, use extensões (uBlock Origin)"
          ],
          [
            "Rastreadores da web",
            "Eles traçam o perfil dos hábitos do usuário",
            "Use o Firefox com proteção aprimorada contra rastreamento"
          ],
          [
            "Homem do meio",
            "Interceptar dados não criptografados",
            "Verifique HTTPS (cadeado), use VPN"
          ],
          [
            "Phishing",
            "Sites falsos para roubar credenciais",
            "Verifique URLs, não clique em links suspeitos"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Navegação Privada ≠ Anonimato",
        "content": "A “navegação anônima” NÃO torna você anônimo! Seu ISP, empresa e sites ainda podem ver o tráfego. Oculta apenas a história local. Para o verdadeiro anonimato você precisa do Tor."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "Criptografia"
      },
      {
        "type": "paragraph",
        "text": "A criptografia é essencial para proteger os dados em trânsito e em repouso. Linux oferece suporte a diferentes níveis de criptografia."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Criptografia Simétrica",
          "items": [
            "Apenas uma chave para criptografar e descriptografar",
            "Rápido, usado para grandes quantidades de dados",
            "Problema: Como compartilhar a chave?",
            "Algoritmos: AES, ChaCha20"
          ]
        },
        "right": {
          "title": "Criptografia Assimétrica",
          "items": [
            "Duas chaves: pública + privada",
            "Criptografia pública, descriptografada privada",
            "Resolve o problema de distribuição",
            "Algoritmos: RSA, Ed25519"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Instrumento",
          "Protege",
          "Como funciona"
        ],
        "rows": [
          [
            "TLS/SSL",
            "Conexões da Web (HTTPS)",
            "Criptografe o tráfego entre navegadores e servidores"
          ],
          [
            "SSH",
            "Conexões remotas",
            "Túnel criptografado para administração remota"
          ],
          [
            "GnuPG (GPG)",
            "Arquivos, e-mails, assinaturas digitais",
            "Criptografia assimétrica, rede de confiança"
          ],
          [
            "dm-crypt/LUKS",
            "Álbum inteiro",
            "Criptografia de disco completo no Linux"
          ],
          [
            "OpenVPN/WireGuard",
            "Tráfego de rede",
            "VPN para conexões seguras"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Criptografar um arquivo com GPG",
        "prompt": "#Gera um par de chaves\n$ gpg --gen-key\n\n# Criptografar um arquivo para um destinatário\n$ gpg --encrypt --recipient user@email.com arquivo.txt\n\n# Descriptografar\n$ gpg --decrypt arquivo.txt.gpg > arquivo.txt",
        "output": ""
      }
    ]
  }
};
