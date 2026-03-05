export const topic2Extended = {
  "2-1": {
    "title": "Nozioni di Base sulla Command Line",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🐚",
        "text": "O que é Concha?"
      },
      {
        "type": "paragraph",
        "text": "O shell é um programa que interpreta comandos do usuário e os passa ao kernel para execução. É a interface de texto entre você e o sistema operacional. Cada vez que você abre um terminal, você inicia um shell."
      },
      {
        "type": "table",
        "headers": [
          "Concha",
          "Arquivo",
          "Características",
          "Distribuição"
        ],
        "rows": [
          [
            "Bash",
            "/bin/bash",
            "Scripting poderoso e mais popular, preenchimento de guia",
            "Quase todos eles"
          ],
          [
            "Zsh",
            "/bin/zsh",
            "Avançado, plug-ins (Oh My Zsh), tema personalizável",
            "padrão do macOS"
          ],
          [
            "Peixe",
            "/usr/bin/peixe",
            "Fácil de usar, destaque de sintaxe, sugestões automáticas",
            "Alternativa moderna"
          ],
          [
            "Traço",
            "/bin/traço",
            "Inicialização mínima e rápida POSIX, usada pelo Debian para /bin/sh",
            "Debian/Ubuntu"
          ],
          [
            "eh",
            "/bin/sh",
            "Shell POSIX original, compatibilidade máxima",
            "Todos os Unixes"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pergunta qual é o shell padrão na maioria das distribuições: é o Bash (Bourne Again Shell). Lembre-se também de que $SHELL mostra o shell de login, não necessariamente aquele em uso."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💲",
        "text": "O prompt e seus símbolos"
      },
      {
        "type": "paragraph",
        "text": "O prompt é a linha que o terminal exibe quando está pronto para receber comandos. Contém informações úteis."
      },
      {
        "type": "code",
        "title": "Anatomia do prompt",
        "prompt": "usuário@nome do host:~/documentos$\n│ │ │ │\n│ │ │ └── $ = usuário normal (# = root)\n│ │ └── diretório atual (~ = home)\n│ └── nome da máquina\n└── nome de usuário",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "$ versus #",
        "content": "O símbolo $ indica um usuário normal. O símbolo # indica o usuário root. Se você vir # no prompt, você está operando com privilégios totais – tome cuidado!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "Citação: aspas e escape"
      },
      {
        "type": "paragraph",
        "text": "A cotação controla como o shell interpreta caracteres especiais. É um dos conceitos mais testados no exame LPI."
      },
      {
        "type": "table",
        "headers": [
          "Tipo",
          "Sintaxe",
          "Expandir $VAR?",
          "Expandir *?",
          "Exemplo"
        ],
        "rows": [
          [
            "Aspas duplas",
            "\"texto\"",
            "✅ Sim",
            "❌ Não",
            "\"Olá $USER\" → Olá Mário"
          ],
          [
            "Aspas simples",
            "'texto'",
            "❌ Não",
            "❌ Não",
            "'Olá $USER' → Olá $USER"
          ],
          [
            "Barra invertida",
            "\\personagem",
            "Fuga única",
            "Fuga única",
            "eco \\$HOME → $HOME"
          ],
          [
            "Ninguém",
            "texto",
            "✅ Sim",
            "✅ Sim",
            "echo * → lista todos os arquivos"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemplos práticos de citação",
        "prompt": "$ echo \"Minha casa é $HOME\"\nMinha casa é /casa/estudante\n\n$ echo 'Minha casa é $HOME'\nMinha casa é $HOME\n\n$ echo \"Existem arquivos $(ls | wc -l)\"\nExistem 42 arquivos",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⌨️",
        "text": "Atalhos de teclado essenciais"
      },
      {
        "type": "table",
        "headers": [
          "Atalho",
          "Ação",
          "Quando usar"
        ],
        "rows": [
          [
            "Guia",
            "Preenchimento automático",
            "Comandos completos e caminhos de arquivo"
          ],
          [
            "Guia Guia",
            "Mostrar todas as opções",
            "Quando há mais possibilidades"
          ],
          [
            "Ctrl+C",
            "Comando de parada (SIGINT)",
            "Para interromper um processo bloqueado"
          ],
          [
            "Ctrl+D",
            "Fim do arquivo (EOF)",
            "Para fechar o shell ou entrada"
          ],
          [
            "Ctrl+L",
            "Limpa a tela",
            "Equivalente a limpar"
          ],
          [
            "Ctrl+R",
            "Histórico de pesquisa",
            "Para encontrar comandos anteriores"
          ],
          [
            "↑ / ↓",
            "Histórico de navegação",
            "Para repetir comandos recentes"
          ],
          [
            "Ctrl+A / Ctrl+E",
            "Início/Fim da linha",
            "Para mover-se rapidamente através do comando"
          ]
        ]
      }
    ]
  },
  "2-2": {
    "title": "Variáveis ​​e Ambiente",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Variáveis ​​Locais vs. Variáveis ​​Ambientais"
      },
      {
        "type": "paragraph",
        "text": "Existem dois tipos de variáveis ​​no bash. Variáveis ​​locais existem apenas no shell atual. As variáveis ​​de ambiente são exportadas e ficam disponíveis para todos os processos filhos."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Variáveis ​​locais",
          "items": [
            "NOME=\"valor\" (SEM espaços ao redor =)",
            "Visível apenas no shell atual",
            "Não herdado de processos filhos",
            "Ruas com NAME não definido"
          ]
        },
        "right": {
          "title": "Variáveis ​​de ambiente",
          "items": [
            "exportar NOME = \"valor\"",
            "Visível para todos os processos filhos",
            "Herdar automaticamente",
            "Visível com ambiente"
          ]
        }
      },
      {
        "type": "code",
        "title": "Variáveis ​​locais versus ambiente",
        "prompt": "$ LOCALE=\"somente aqui\" #variável local\n$ export GLOBAL=\"everywhere\" # variável de ambiente\n$echo $LOCAL $GLOBAL\nsó aqui em todo lugar\n\n$ bash -c 'echo $LOCAL $GLOBAL' # novo shell filho\nem todos os lugares\n#LOCALE não é visível no shell filho!",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Preste atenção aos espaços!",
        "content": "No bash, NAME=\"value\" com espaços em torno de igual NÃO funciona! Bash interpretará NAME como um comando. A sintaxe correta é NAME=\"value\" sem espaços."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛤️",
        "text": "A variável PATH"
      },
      {
        "type": "paragraph",
        "text": "PATH é a variável mais importante no Linux. Contém a lista de diretórios onde o shell procura executáveis ​​quando você digita um comando. Os diretórios são separados por: (dois pontos)."
      },
      {
        "type": "code",
        "title": "Como funciona o PATH",
        "prompt": "$ echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\n# Quando você digita \"ls\", o shell pesquisa em ordem:\n# 1. /usr/local/sbin/ls (não encontrado)\n# 2. /usr/local/bin/ls (não encontrado)\n#3. /usr/sbin/ls (não encontrado)\n# 4. /usr/bin/ls ← ENCONTREI! Isso faz isso.\n\n# Para adicionar um diretório ao PATH:\n$ export PATH=\"$PATH:/opt/meuprograma/bin\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌍",
        "text": "Variáveis ​​Ambientais Importantes"
      },
      {
        "type": "table",
        "headers": [
          "Variável",
          "Contente",
          "Exemplo"
        ],
        "rows": [
          [
            "$HOME",
            "O diretório inicial do usuário",
            "/casa/aluno"
          ],
          [
            "$USUÁRIO",
            "Nome de usuário atual",
            "estudante"
          ],
          [
            "$SHELL",
            "Concha de login",
            "/bin/bash"
          ],
          [
            "$PATH",
            "Diretório para executáveis",
            "/usr/bin:/bin:..."
          ],
          [
            "$LANG",
            "Idioma e localização",
            "it_IT.UTF-8"
          ],
          [
            "$PWD",
            "Diretório atual",
            "/home/aluno/docs"
          ],
          [
            "$HOSTNAME",
            "Nome da máquina",
            "linux-pc"
          ],
          [
            "PS1",
            "Formato de prompt",
            "\\u@\\h:\\w\\$"
          ],
          [
            "$?",
            "Sair do último comando do código",
            "0 (sucesso)"
          ],
          [
            "$$",
            "PID do shell atual",
            "1234"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📄",
        "text": "Arquivo de configuração do shell"
      },
      {
        "type": "paragraph",
        "text": "Bash lê diferentes arquivos de configuração dependendo de como é iniciado:"
      },
      {
        "type": "table",
        "headers": [
          "Arquivo",
          "Quando é lido",
          "Escopo",
          "Uso típico"
        ],
        "rows": [
          [
            "/etc/perfil",
            "Login do Shell (todos os usuários)",
            "Global",
            "Variáveis ​​de ambiente globais"
          ],
          [
            "~/.bash_profile",
            "Login de shell",
            "Usuário",
            "Login de configuração (chame .bashrc)"
          ],
          [
            "~/.profile",
            "Login do shell (se .bash_profile não existir)",
            "Usuário",
            "Alternativas para .bash_profile"
          ],
          [
            "~/.bashrc",
            "Shell interativo sem login",
            "Usuário",
            "Aliases, prompts, funções"
          ],
          [
            "/etc/bash.bashrc",
            "Shell interativo (todos)",
            "Global",
            "Configuração global do bash"
          ],
          [
            "~/.bash_logout",
            "Sair",
            "Usuário",
            "Limpeza, mensagens de saída"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pergunta quais arquivos são lidos no login e no shell interativo. Lembre-se: login → /etc/profile + ~/.bash_profile. Interativo → ~/.bashrc."
      }
    ]
  },
  "2-3": {
    "title": "Obtenha ajuda",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📖",
        "text": "As páginas de manual"
      },
      {
        "type": "paragraph",
        "text": "O comando man é o sistema de documentação integrado do Linux. Cada comando, arquivo de configuração e chamada de sistema tem (ou deveria ter) uma página de manual."
      },
      {
        "type": "table",
        "headers": [
          "Seção",
          "Contente",
          "Exemplo"
        ],
        "rows": [
          [
            "1",
            "Comandos do usuário",
            "homem 1 ano"
          ],
          [
            "2",
            "Chamadas do sistema (kernel)",
            "homem 2 aberto"
          ],
          [
            "3",
            "Funções da biblioteca C",
            "homem 3 imprimir"
          ],
          [
            "4",
            "Arquivos especiais (/dev)",
            "homem 4 nulo"
          ],
          [
            "5",
            "Formatos de arquivo e configuração",
            "homem 5 senha"
          ],
          [
            "6",
            "Jogos",
            "homem 6 fortunas"
          ],
          [
            "7",
            "Variado",
            "homem 7 ip"
          ],
          [
            "8",
            "Comandos de administração",
            "homem 8 montar"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Comandos para obter ajuda",
        "prompt": "$ man ls # Manual completo do ls\n$ man -k \"copiar arquivo\" # Pesquise por palavra-chave (= a propósito)\n$ man 5 passwd # Seção 5: Formato do arquivo\n$ whatis ls # Breve descrição\n$ info coreutils # Documentação detalhada do GNU\n$ ls --help # Ajuda integrada do comando",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Navegue dentro do homem",
        "content": "Dentro de uma página de manual: Espaço = avançar, b = voltar, /text = pesquisar, q = sair. O homem usa o programa \"less\" como pager."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔍",
        "text": "Procure arquivos no sistema"
      },
      {
        "type": "comparison",
        "left": {
          "title": "encontrar (tempo real)",
          "items": [
            "Pesquise o sistema de arquivos em tempo real",
            "Lento em sistemas de arquivos grandes",
            "Poderoso: pesquise por nome, tipo, tamanho, data, permissões",
            "Sempre atualizado"
          ]
        },
        "right": {
          "title": "localizar (banco de dados)",
          "items": [
            "Pesquise um banco de dados pré-indexado",
            "Muito rápido",
            "Limitado: pesquise apenas por nome",
            "Banco de dados atualizado com atualizadob (geralmente diariamente)"
          ]
        }
      },
      {
        "type": "code",
        "title": "Exemplos de pesquisa de arquivos",
        "prompt": "$ find /home -name \"*.txt\" # arquivo .txt em /home\n$ find / -type d -name \"config\" # Diretórios chamados config\n$ find /var -size +10M # Arquivos maiores que 10MB\n$ encontrar. -mtime -7 # Modificado nos últimos 7 dias\n$ encontrar. -perm 755 # Com 755 permissões\n\n$ localizar senha # Pesquise no banco de dados\n$ which python # Onde está no PATH\n$ whereis ls # Binário, fonte e homem",
        "output": ""
      }
    ]
  },
  "2-4": {
    "title": "Navegação e gerenciamento de arquivos",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌳",
        "text": "FHS — Padrão de hierarquia de sistema de arquivos"
      },
      {
        "type": "paragraph",
        "text": "O FHS define a estrutura de diretórios padrão do Linux. Todas as distribuições seguem essas convenções, tornando previsível onde encontrar cada tipo de arquivo."
      },
      {
        "type": "table",
        "headers": [
          "Diretórios",
          "Contente",
          "Exemplo"
        ],
        "rows": [
          [
            "/",
            "Root — raiz de todo o sistema de arquivos",
            "Tudo começa aqui"
          ],
          [
            "/bin",
            "Comandos essenciais para todos os usuários",
            "ls, cp, mv, gato, bash"
          ],
          [
            "/sbin",
            "Comandos do sistema para o administrador",
            "montar, fdisk, iptables"
          ],
          [
            "/etc",
            "Arquivo de configuração do sistema",
            "senha, fstab, nginx.conf"
          ],
          [
            "/lar",
            "Diretórios pessoais dos usuários",
            "/home/mario, /home/aluno"
          ],
          [
            "/raiz",
            "Início do usuário root",
            "Separado de /home por segurança"
          ],
          [
            "/var",
            "Dados variáveis ​​(log, spool, cache)",
            "/var/log/syslog, /var/www"
          ],
          [
            "/tmp",
            "Arquivos temporários (excluídos na reinicialização)",
            "Arquivos de sessão, downloads temporários"
          ],
          [
            "/usr",
            "Programas e bibliotecas instaladas",
            "/usr/bin, /usr/lib, /usr/share"
          ],
          [
            "/optar",
            "Software opcional/de terceiros",
            "Navegadores, IDEs, aplicativos personalizados"
          ],
          [
            "/dev",
            "Arquivos de dispositivo",
            "/dev/sda (disco), /dev/null"
          ],
          [
            "/proc",
            "Sistema de arquivos virtual — informações do kernel/processo",
            "/proc/cpuinfo, /proc/meminfo"
          ],
          [
            "/sys",
            "Sistema de arquivos virtual – informações de hardware",
            "Informações do dispositivo e do driver"
          ],
          [
            "/bota",
            "Kernel e gerenciador de inicialização",
            "vmlinuz, initramfs, grub"
          ],
          [
            "/lib",
            "Bibliotecas compartilhadas essenciais",
            "libc.so, libpthread.so"
          ],
          [
            "/mnt, /mídia",
            "Pontos de montagem para dispositivos",
            "USB, CD-ROM, discos externos"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧭",
        "text": "Caminhos Absolutos vs Relativos"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Caminho Absoluto",
          "items": [
            "Sempre começa com /",
            "Identifica um arquivo exclusivamente",
            "Independente da sua localização atual",
            "Exemplo: /home/mario/documenti/file.txt"
          ]
        },
        "right": {
          "title": "Caminho Relativo",
          "items": [
            "NÃO começa com /",
            "Relativo ao diretório atual (pwd)",
            "EUA. (atual) e .. (pai)",
            "Exemplo: ../documents/file.txt"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔠",
        "text": "Globbing – correspondência de padrões"
      },
      {
        "type": "paragraph",
        "text": "Globbing permite selecionar arquivos usando padrões especiais. O shell expande o padrão antes de passá-lo para o comando."
      },
      {
        "type": "table",
        "headers": [
          "Padrões",
          "Significado",
          "Exemplo",
          "Resultado"
        ],
        "rows": [
          [
            "*",
            "Zero ou mais caracteres",
            "é *.txt",
            "arquivo.txt, relatório.txt"
          ],
          [
            "?",
            "Exatamente um personagem",
            "é arquivo?.txt",
            "arquivo1.txt, arquivoA.txt"
          ],
          [
            "[abc]",
            "Um de a, b ou c",
            "ls arquivo[123].txt",
            "arquivo1.txt, arquivo2.txt"
          ],
          [
            "[a-z]",
            "Um personagem ao alcance",
            "ls [a-c]*.txt",
            "abc.txt, beta.txt"
          ],
          [
            "[!abc]",
            "Qualquer EXCETO a, b, c",
            "é [!0-9]*",
            "arquivo.txt (não 1 arquivo)"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Comandos essenciais para gerenciar arquivos",
        "prompt": "$ mkdir -p project/src/main # Cria com todos os diretórios pais\n$ cp -r src/ backup/ # Cópia recursiva\n$ mv old.txt new.txt # Renomear (ou mover)\n$ rm -rf obsolete_directory/ # Excluir recursivamente (AVISO!)\n$ touch new.txt # Crie um arquivo vazio ou atualize o carimbo de data/hora\n$ ls -la # Lista detalhada com arquivos ocultos",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "rm -rf é perigoso!",
        "content": "O comando rm -rf exclui tudo recursivamente SEM pedir confirmação. Um erro como \"rm -rf /\" pode destruir todo o sistema. Sempre use com extremo cuidado!"
      }
    ]
  }
};
