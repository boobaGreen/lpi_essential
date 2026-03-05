export const dragDropData = [
  {
    "title": "Comandos Básicos",
    "pairs": [
      {
        "left": "ls",
        "right": "Lista de arquivos"
      },
      {
        "left": "cd",
        "right": "Alterar diretório"
      },
      {
        "left": "pwd",
        "right": "Diretório atual"
      },
      {
        "left": "cp",
        "right": "Copiar arquivos"
      },
      {
        "left": "rm",
        "right": "Excluir arquivos"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Diretórios Linux",
    "pairs": [
      {
        "left": "/etc",
        "right": "Configuração do sistema"
      },
      {
        "left": "/home",
        "right": "Casa dos usuários"
      },
      {
        "left": "/var",
        "right": "Dados variáveis ​​(log)"
      },
      {
        "left": "/tmp",
        "right": "Arquivos temporários"
      },
      {
        "left": "/boot",
        "right": "Kernel e gerenciador de inicialização"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Distribuições Linux",
    "pairs": [
      {
        "left": "Ubuntu",
        "right": "Baseado em Debian"
      },
      {
        "left": "Fedora",
        "right": "Base para RHEL"
      },
      {
        "left": "Arch",
        "right": "Liberação contínua"
      },
      {
        "left": "CentOS",
        "right": "Derivado de RHEL"
      },
      {
        "left": "openSUSE",
        "right": "Usar Zypper"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Aplicativos de código aberto",
    "pairs": [
      {
        "left": "LibreOffice",
        "right": "Pacote de escritório"
      },
      {
        "left": "Firefox",
        "right": "Navegadores da web"
      },
      {
        "left": "GIMP",
        "right": "Editor de imagens"
      },
      {
        "left": "Blender",
        "right": "Modelagem 3D"
      },
      {
        "left": "Audacity",
        "right": "Editor de áudio"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Licenças de software",
    "pairs": [
      {
        "left": "GPL",
        "right": "Copyleft forte"
      },
      {
        "left": "MIT",
        "right": "Permissivo, muito curto"
      },
      {
        "left": "Apache 2.0",
        "right": "Permissiva + patentes"
      },
      {
        "left": "LGPL",
        "right": "Vinculando com o proprietário"
      },
      {
        "left": "AGPL",
        "right": "Copyleft para SaaS"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Gerenciadores de pacotes",
    "pairs": [
      {
        "left": "apt",
        "right": "Debian/Ubuntu"
      },
      {
        "left": "dnf",
        "right": "Fedora/RHEL"
      },
      {
        "left": "pacman",
        "right": "ArchLinux"
      },
      {
        "left": "zypper",
        "right": "openSUSE"
      },
      {
        "left": "snap",
        "right": "Pacotes Universais (Canônicos)"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Permissões de arquivo (numérico)",
    "pairs": [
      {
        "left": "777",
        "right": "Ler, escrever, atuar para todos"
      },
      {
        "left": "755",
        "right": "O proprietário faz tudo, outros leem/executam"
      },
      {
        "left": "644",
        "right": "O proprietário lê/escreve, outros leem"
      },
      {
        "left": "600",
        "right": "Somente o proprietário lê e escreve"
      },
      {
        "left": "400",
        "right": "Somente o proprietário pode ler"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Símbolos bash",
    "pairs": [
      {
        "left": ">",
        "right": "Redirecionar saída (sobrescrever)"
      },
      {
        "left": ">>",
        "right": "Redirecionar saída (anexar)"
      },
      {
        "left": "|",
        "right": "Pipe (comandos de conexão)"
      },
      {
        "left": "&",
        "right": "É executado em segundo plano"
      },
      {
        "left": "$$",
        "right": "PID do shell atual"
      }
    ],
    "difficulty": 3
  },
  {
    "title": "Serviços do sistema",
    "pairs": [
      {
        "left": "systemd",
        "right": "Sistema de inicialização moderno"
      },
      {
        "left": "sshd",
        "right": "Servidor SSH"
      },
      {
        "left": "cron",
        "right": "Planejamento demoníaco"
      },
      {
        "left": "cups",
        "right": "Servidor de impressão"
      },
      {
        "left": "rsyslog",
        "right": "Gerenciamento de log do sistema"
      }
    ],
    "difficulty": 3
  }
];

export const fillGapData = [
  {
    "prompt": "Para criar um diretório: _____ dirname",
    "answer": "mkdir",
    "hint": "Criar diretório",
    "difficulty": 1
  },
  {
    "prompt": "Para excluir um arquivo: _____ nome do arquivo",
    "answer": "rm",
    "hint": "Remover",
    "difficulty": 1
  },
  {
    "prompt": "Para copiar um arquivo: _____ origem destino",
    "answer": "cp",
    "hint": "Cópia",
    "difficulty": 1
  },
  {
    "prompt": "Para mover um arquivo: _____ origem destino",
    "answer": "mv",
    "hint": "Mover",
    "difficulty": 1
  },
  {
    "prompt": "Para ver o diretório atual: _____",
    "answer": "pwd",
    "hint": "Imprimir diretório de trabalho",
    "difficulty": 1
  },
  {
    "prompt": "Para criar um arquivo vazio: _____ nome do arquivo",
    "answer": "touch",
    "hint": "Toque/crie",
    "difficulty": 1
  },
  {
    "prompt": "Para mostrar o conteúdo: _____ nome do arquivo",
    "answer": "cat",
    "hint": "Concatenar",
    "difficulty": 1
  },
  {
    "prompt": "Para ler o manual: _____ ls",
    "answer": "man",
    "hint": "Manual",
    "difficulty": 1
  },
  {
    "prompt": "Para imprimir o texto: _____ \"Olá, mundo\"",
    "answer": "echo",
    "hint": "Eco/imprimir",
    "difficulty": 1
  },
  {
    "prompt": "Para listar arquivos com detalhes: _____ -la",
    "answer": "ls",
    "hint": "Lista",
    "difficulty": 1
  },
  {
    "prompt": "Para ver os processos: _____ aux",
    "answer": "ps",
    "hint": "Status do Processo",
    "difficulty": 2
  },
  {
    "prompt": "Para alterar as permissões: _____ 755 script.sh",
    "answer": "chmod",
    "hint": "Alterar modo",
    "difficulty": 2
  },
  {
    "prompt": "Para alterar a propriedade: _____ usuário:arquivo de grupo",
    "answer": "chown",
    "hint": "Alterar proprietário",
    "difficulty": 2
  },
  {
    "prompt": "Para pesquisar texto: _____ arquivo \"pattern\".txt",
    "answer": "grep",
    "hint": "Impressão de Expressão Regular Global",
    "difficulty": 2
  },
  {
    "prompt": "Para extrair um arquivo tar.gz: tar _____ archive.tar.gz",
    "answer": "-xzf",
    "hint": "Extrair arquivo gZip",
    "difficulty": 2
  },
  {
    "prompt": "Para adicionar um usuário: _____ -m newuser",
    "answer": "useradd",
    "hint": "Adicionar usuário",
    "difficulty": 2
  },
  {
    "prompt": "Para ver o espaço em disco: _____ -h",
    "answer": "df",
    "hint": "Disco grátis",
    "difficulty": 2
  },
  {
    "prompt": "Para procurar arquivos no sistema de arquivos: _____ / -name \"*.log\"",
    "answer": "find",
    "hint": "Pesquise o sistema de arquivos",
    "difficulty": 2
  },
  {
    "prompt": "Para mostrar as primeiras linhas: _____ -n 5 arquivo.txt",
    "answer": "head",
    "hint": "Cabeça/início",
    "difficulty": 2
  },
  {
    "prompt": "Para mostrar as últimas linhas: _____ -n 5 arquivo.txt",
    "answer": "tail",
    "hint": "Cauda/fim",
    "difficulty": 2
  },
  {
    "prompt": "Para montar um sistema de arquivos: _____ /dev/sda1 /mnt",
    "answer": "mount",
    "hint": "Montar",
    "difficulty": 2
  },
  {
    "prompt": "Para testar a conectividade: _____ google.com",
    "answer": "ping",
    "hint": "Enviar pacote ICMP",
    "difficulty": 2
  },
  {
    "prompt": "Para baixar um arquivo do URL: _____ http://example.com/file",
    "answer": "wget",
    "hint": "WebGet",
    "difficulty": 2
  },
  {
    "prompt": "Para encerrar um processo: _____ -9 PID",
    "answer": "kill",
    "hint": "Finalizar processo",
    "difficulty": 3
  },
  {
    "prompt": "Para seguir um registro em tempo real: tail _____ /var/log/syslog",
    "answer": "-f",
    "hint": "Seguir",
    "difficulty": 3
  },
  {
    "prompt": "Para criar um link simbólico: ln _____ link de destino",
    "answer": "-s",
    "hint": "Simbólico",
    "difficulty": 3
  },
  {
    "prompt": "Para editar o texto embutido: _____ -i arquivo \"s/antigo/novo/g\"",
    "answer": "sed",
    "hint": "Editor de fluxo",
    "difficulty": 3
  },
  {
    "prompt": "Para contar linhas/palavras/bytes: _____ -l arquivo.txt",
    "answer": "wc",
    "hint": "Contagem de palavras",
    "difficulty": 3
  },
  {
    "prompt": "Para classificar linhas: _____ -rn data.txt",
    "answer": "sort",
    "hint": "Ordem",
    "difficulty": 3
  },
  {
    "prompt": "Para cortar colunas: _____ -d: -f1 /etc/passwd",
    "answer": "cut",
    "hint": "Cortar/extrair",
    "difficulty": 3
  },
  {
    "prompt": "Para sincronizar arquivos: _____ -avz src/dest/",
    "answer": "rsync",
    "hint": "Sincronização remota",
    "difficulty": 3
  },
  {
    "prompt": "Para extrair colunas padronizadas: arquivo _____ '{print $1}'",
    "answer": "awk",
    "hint": "Linguagem de processamento",
    "difficulty": 3
  },
  {
    "prompt": "Para mostrar arquivos abertos: _____ -i :80",
    "answer": "lsof",
    "hint": "Listar arquivos abertos",
    "difficulty": 3
  },
  {
    "prompt": "Para gerenciar serviços systemd: _____ reinicie o nginx",
    "answer": "systemctl",
    "hint": "Controle do sistema",
    "difficulty": 3
  },
  {
    "prompt": "Para editar o crontab: _____ -e",
    "answer": "crontab",
    "hint": "Tabela Cron",
    "difficulty": 3
  },
  {
    "prompt": "Para ver as conexões de rede: _____ -tuln",
    "answer": "ss",
    "hint": "Estatísticas de soquete",
    "difficulty": 3
  },
  {
    "prompt": "Para traduzir caracteres: echo \"hello\" | _____ a-z A-Z",
    "answer": "tr",
    "hint": "Traduzir",
    "difficulty": 3
  }
];

export const memoryGameData = [
  {
    "command": "ls",
    "description": "Lista de arquivos e diretórios"
  },
  {
    "command": "cd",
    "description": "Alterar diretório"
  },
  {
    "command": "pwd",
    "description": "Mostrar diretório atual"
  },
  {
    "command": "cp",
    "description": "Copiar arquivos"
  },
  {
    "command": "mv",
    "description": "Mover ou renomear arquivos"
  },
  {
    "command": "rm",
    "description": "Excluir arquivos"
  },
  {
    "command": "cat",
    "description": "Ver o conteúdo do arquivo"
  },
  {
    "command": "mkdir",
    "description": "Criar diretório"
  },
  {
    "command": "touch",
    "description": "Criar arquivo vazio"
  },
  {
    "command": "echo",
    "description": "Imprimir texto em stdout"
  },
  {
    "command": "man",
    "description": "Mostrar o manual"
  },
  {
    "command": "sudo",
    "description": "Execute como root"
  },
  {
    "command": "whoami",
    "description": "Mostrar usuário atual"
  },
  {
    "command": "exit",
    "description": "Fecha a casca"
  },
  {
    "command": "chmod",
    "description": "Alterar permissões de arquivo"
  },
  {
    "command": "grep",
    "description": "Procure padrões no texto"
  },
  {
    "command": "find",
    "description": "Procure por arquivos no sistema de arquivos"
  },
  {
    "command": "tar",
    "description": "Arquivar e compactar arquivos"
  },
  {
    "command": "chown",
    "description": "Alterar proprietário do arquivo"
  },
  {
    "command": "df",
    "description": "Mostrar espaço livre em disco"
  },
  {
    "command": "du",
    "description": "Tamanho de arquivo e diretório"
  },
  {
    "command": "top",
    "description": "Monitore processos em tempo real"
  },
  {
    "command": "ps",
    "description": "Lista de processos ativos"
  },
  {
    "command": "kill",
    "description": "Terminar um processo"
  },
  {
    "command": "ssh",
    "description": "Conexão remota segura"
  },
  {
    "command": "scp",
    "description": "Copie arquivos via SSH"
  },
  {
    "command": "ln",
    "description": "Crie links para arquivos"
  },
  {
    "command": "head",
    "description": "Primeiras linhas de um arquivo"
  },
  {
    "command": "tail",
    "description": "Últimas linhas de um arquivo"
  },
  {
    "command": "wc",
    "description": "Contar linhas, palavras, bytes"
  },
  {
    "command": "sort",
    "description": "Classificar linhas de texto"
  },
  {
    "command": "mount",
    "description": "Monte um sistema de arquivos"
  },
  {
    "command": "umount",
    "description": "Desmontar um sistema de arquivos"
  },
  {
    "command": "awk",
    "description": "Processar texto por colunas"
  },
  {
    "command": "sed",
    "description": "Editor de fluxo de texto"
  },
  {
    "command": "xargs",
    "description": "Constrói argumentos de stdin"
  },
  {
    "command": "crontab",
    "description": "Agende tarefas periódicas"
  },
  {
    "command": "iptables",
    "description": "Configurar firewall Linux"
  },
  {
    "command": "rsync",
    "description": "Sincronize arquivos remotos"
  },
  {
    "command": "cut",
    "description": "Extraia colunas do texto"
  },
  {
    "command": "tr",
    "description": "Traduzir/excluir caracteres"
  },
  {
    "command": "tee",
    "description": "Saída para arquivo e stdout"
  },
  {
    "command": "useradd",
    "description": "Adiciona um usuário"
  },
  {
    "command": "passwd",
    "description": "Alterar senha do usuário"
  },
  {
    "command": "groupadd",
    "description": "Crie um novo grupo"
  },
  {
    "command": "netstat",
    "description": "Estatísticas de conexão de rede"
  },
  {
    "command": "ifconfig",
    "description": "Configurar interface de rede"
  },
  {
    "command": "ping",
    "description": "Testar a conectividade da rede"
  },
  {
    "command": "wget",
    "description": "Baixe arquivos do URL"
  },
  {
    "command": "curl",
    "description": "Transferir dados do URL"
  }
];

export const terminalChallengeData = [
  {
    "prompt": "Mostra o conteúdo do diretório atual",
    "answer": "ls",
    "hints": [
      "Um comando de 2 letras",
      "Começa com \"l\""
    ],
    "accept": [
      "ls",
      "ls -la",
      "ls -l"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mude o diretório para a página inicial do usuário",
    "answer": "cd ~",
    "hints": [
      "Usar CD...",
      "O símbolo ~ representa a casa"
    ],
    "accept": [
      "cd ~",
      "cd",
      "cd $HOME"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostrar diretório atual (caminho absoluto)",
    "answer": "pwd",
    "hints": [
      "Imprimir funcionando...",
      "3 letras"
    ],
    "accept": [
      "pwd"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Crie um diretório chamado \"projeto\"",
    "answer": "mkdir progetto",
    "hints": [
      "Criar diretório...",
      "mkdir + nome"
    ],
    "accept": [
      "mkdir progetto"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostra o conteúdo do arquivo /etc/hostname",
    "answer": "cat /etc/hostname",
    "hints": [
      "comCATenate...",
      "ch + caminho"
    ],
    "accept": [
      "cat /etc/hostname"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostra o ID do usuário atual",
    "answer": "id",
    "hints": [
      "Um comando muito curto",
      "2 letras"
    ],
    "accept": [
      "id",
      "whoami"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Crie um arquivo vazio chamado test.txt",
    "answer": "touch test.txt",
    "hints": [
      "Não é gato...",
      "toque + nome"
    ],
    "accept": [
      "touch test.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostra as primeiras 10 linhas de um arquivo log.txt",
    "answer": "head log.txt",
    "hints": [
      "O oposto de \"cauda\"",
      "cabeça + arquivo"
    ],
    "accept": [
      "head log.txt",
      "head -10 log.txt",
      "head -n 10 log.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostrar o manual do comando ls",
    "answer": "man ls",
    "hints": [
      "Manual...",
      "homem + comando"
    ],
    "accept": [
      "man ls"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Exclua o arquivo obsoleto.txt",
    "answer": "rm obsoleto.txt",
    "hints": [
      "Remover...",
      "rm + nome"
    ],
    "accept": [
      "rm obsoleto.txt",
      "rm -f obsoleto.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Copie o arquivo config.txt para backup.txt",
    "answer": "cp config.txt backup.txt",
    "hints": [
      "Cópia...",
      "destino de origem cp"
    ],
    "accept": [
      "cp config.txt backup.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Mostrar histórico de comandos",
    "answer": "history",
    "hints": [
      "A HISTÓRIA dos comandos",
      "7 letras"
    ],
    "accept": [
      "history"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Procure a palavra “erro” no arquivo syslog",
    "answer": "grep error /var/log/syslog",
    "hints": [
      "Expressão Regular Global...",
      "arquivo de padrão grep"
    ],
    "accept": [
      "grep error /var/log/syslog",
      "grep \"error\" /var/log/syslog",
      "grep -i error /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Torne o script hello.sh executável",
    "answer": "chmod +x hello.sh",
    "hints": [
      "Alterar modo...",
      "chmod + alguma coisa"
    ],
    "accept": [
      "chmod +x hello.sh",
      "chmod u+x hello.sh",
      "chmod 755 hello.sh"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Crie um arquivo tar.gz da pasta docs/",
    "answer": "tar -czf docs.tar.gz docs/",
    "hints": [
      "alcatrão -c...",
      "c=criar z=gzip f=arquivo"
    ],
    "accept": [
      "tar -czf docs.tar.gz docs/",
      "tar czf docs.tar.gz docs/",
      "tar -czf docs.tar.gz docs"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Mostra o espaço em disco usado em formato legível",
    "answer": "df -h",
    "hints": [
      "Disco grátis...",
      "df + sinalizadores"
    ],
    "accept": [
      "df -h"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Conte as linhas no arquivo /etc/passwd",
    "answer": "wc -l /etc/passwd",
    "hints": [
      "Contagem de palavras...",
      "wc-l"
    ],
    "accept": [
      "wc -l /etc/passwd"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Mostra processos em execução em tempo real",
    "answer": "top",
    "hints": [
      "3 letras",
      "Um monitor de sistema"
    ],
    "accept": [
      "top",
      "htop"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Conecte-se via SSH ao host 192.168.1.10",
    "answer": "ssh 192.168.1.10",
    "hints": [
      "Concha segura...",
      "ssh + endereço"
    ],
    "accept": [
      "ssh 192.168.1.10",
      "ssh root@192.168.1.10",
      "ssh user@192.168.1.10"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Alterar o proprietário do arquivo para o usuário “admin”",
    "answer": "chown admin file",
    "hints": [
      "Alterar proprietário...",
      "arquivo de usuário chown"
    ],
    "accept": [
      "chown admin file",
      "sudo chown admin file"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Mostra o tamanho do diretório /var/log",
    "answer": "du -sh /var/log",
    "hints": [
      "Uso de disco...",
      "du -sh"
    ],
    "accept": [
      "du -sh /var/log",
      "du -h /var/log"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Siga o arquivo /var/log/syslog em tempo real",
    "answer": "tail -f /var/log/syslog",
    "hints": [
      "cauda com uma bandeira...",
      "f = seguir"
    ],
    "accept": [
      "tail -f /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Crie um link simbólico de /etc/hosts em /tmp/",
    "answer": "ln -s /etc/hosts /tmp/hosts",
    "hints": [
      "Com uma bandeira...",
      "-s = simbólico"
    ],
    "accept": [
      "ln -s /etc/hosts /tmp/hosts",
      "ln -s /etc/hosts /tmp/"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Procure o comando ifconfig no PATH",
    "answer": "which ifconfig",
    "hints": [
      "Qual ifconfig...",
      "qual + comando"
    ],
    "accept": [
      "which ifconfig"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Encontre todos os arquivos .log em /var maiores que 10 MB",
    "answer": "find /var -name \"*.log\" -size +10M",
    "hints": [
      "encontrar + -nome + -tamanho",
      "M = megabytes"
    ],
    "accept": [
      "find /var -name \"*.log\" -size +10M",
      "find /var -name *.log -size +10M"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Classifique o arquivo data.txt em ordem numérica inversa",
    "answer": "sort -rn data.txt",
    "hints": [
      "classificar -r = reverso, -n = numérico",
      "classificar + sinalizar"
    ],
    "accept": [
      "sort -rn data.txt",
      "sort -nr data.txt",
      "sort -r -n data.txt"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Mostrar apenas o primeiro campo de /etc/passwd (nome de usuário)",
    "answer": "cut -d: -f1 /etc/passwd",
    "hints": [
      "cortar com delimitador:...",
      "cortar -d: -f1"
    ],
    "accept": [
      "cut -d: -f1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Agende um cron job diário às 3h",
    "answer": "0 3 * * *",
    "hints": [
      "minuto hora dia mês semana_dia",
      "0 3 ..."
    ],
    "accept": [
      "0 3 * * *"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Substitua “foo” por “bar” em um arquivo usando sed",
    "answer": "sed -i s/foo/bar/g file",
    "hints": [
      "sed -i \"s/antigo/novo/g\"",
      "Editor de fluxo"
    ],
    "accept": [
      "sed -i s/foo/bar/g file",
      "sed -i 's/foo/bar/g' file",
      "sed s/foo/bar/g file"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Mostra conexões de rede ativas",
    "answer": "ss -tuln",
    "hints": [
      "Estatísticas de soquete...",
      "ss + bandeira"
    ],
    "accept": [
      "ss -tuln",
      "ss -tulnp",
      "netstat -tuln",
      "ss"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Extraia a segunda coluna separada por espaço com awk",
    "answer": "awk '{print $2}'",
    "hints": [
      "ah impressão...",
      "$2 = segunda coluna"
    ],
    "accept": [
      "awk '{print $2}'",
      "awk '{print $2}'"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Mostra a tabela de roteamento da rede",
    "answer": "ip route",
    "hints": [
      "ip...",
      "rota/tabela de roteamento"
    ],
    "accept": [
      "ip route",
      "route",
      "ip route show",
      "netstat -r"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Mostrar arquivos abertos por processo com PID 1234",
    "answer": "lsof -p 1234",
    "hints": [
      "Listar arquivos abertos...",
      "lsof + sinalizadores"
    ],
    "accept": [
      "lsof -p 1234"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Reinicie o serviço nginx com systemd",
    "answer": "systemctl restart nginx",
    "hints": [
      "sistemactl...",
      "reiniciar + nome do serviço"
    ],
    "accept": [
      "systemctl restart nginx",
      "sudo systemctl restart nginx"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Adicione o usuário “mario” ao grupo “sudo”",
    "answer": "usermod -aG sudo mario",
    "hints": [
      "mod de usuário...",
      "-aG = anexar grupo"
    ],
    "accept": [
      "usermod -aG sudo mario",
      "sudo usermod -aG sudo mario"
    ],
    "difficulty": 3
  }
];

export const trueFalseData = [
  {
    "text": "O comando “ls” exibe os arquivos no diretório atual.",
    "answer": true,
    "explanation": "Correto! ls (lista) lista arquivos e diretórios.",
    "difficulty": 1
  },
  {
    "text": "/etc contém arquivos de configuração do sistema.",
    "answer": true,
    "explanation": "Correto! /etc é o diretório padrão para configurações.",
    "difficulty": 1
  },
  {
    "text": "O comando chmod altera o proprietário de um arquivo.",
    "answer": false,
    "explanation": "chmod altera as permissões. chown muda de proprietário.",
    "difficulty": 1
  },
  {
    "text": "O Android usa o kernel Linux.",
    "answer": true,
    "explanation": "Correto! O Android usa um kernel Linux modificado pelo Google.",
    "difficulty": 1
  },
  {
    "text": "root sempre tem UID 0.",
    "answer": true,
    "explanation": "Correto! O usuário root sempre tem UID 0 em todos os sistemas Unix/Linux.",
    "difficulty": 1
  },
  {
    "text": "O pipe (|) grava a saída em um arquivo.",
    "answer": false,
    "explanation": "O tubo passa a saída para o próximo. > grava em um arquivo.",
    "difficulty": 1
  },
  {
    "text": "Ubuntu é baseado no Debian.",
    "answer": true,
    "explanation": "Correto! Ubuntu deriva do Debian.",
    "difficulty": 1
  },
  {
    "text": "O símbolo ~ indica o diretório /tmp.",
    "answer": false,
    "explanation": "~ indica o diretório inicial do usuário, não /tmp.",
    "difficulty": 1
  },
  {
    "text": "Bash é o shell padrão na maioria das distribuições Linux.",
    "answer": true,
    "explanation": "Correto! Bash (Bourne Again Shell) é o shell padrão.",
    "difficulty": 1
  },
  {
    "text": "O caractere # em um script bash indica um comentário.",
    "answer": true,
    "explanation": "Correto! Linhas que começam com # são comentários no bash.",
    "difficulty": 1
  },
  {
    "text": "A tecla Tab completa automaticamente comandos e nomes de arquivos.",
    "answer": true,
    "explanation": "Correto! O preenchimento automático de guias é um recurso principal do shell.",
    "difficulty": 1
  },
  {
    "text": "O diretório /home contém a página inicial do usuário root.",
    "answer": false,
    "explanation": "A casa raiz é /root. /home contém as casas dos usuários normais.",
    "difficulty": 1
  },
  {
    "text": "A licença GPL permite que você crie código derivado proprietário.",
    "answer": false,
    "explanation": "A GPL (copyleft) força os derivados a manterem a mesma licença.",
    "difficulty": 2
  },
  {
    "text": "A licença MIT é uma licença permissiva.",
    "answer": true,
    "explanation": "O MIT é muito permissivo: permite quase qualquer uso.",
    "difficulty": 2
  },
  {
    "text": "SSH usa a porta 443 por padrão.",
    "answer": false,
    "explanation": "SSH usa a porta 22. A porta 443 é para HTTPS.",
    "difficulty": 2
  },
  {
    "text": "O shebang #!/bin/bash deve estar na primeira linha do script.",
    "answer": true,
    "explanation": "Correto! O shebang informa ao sistema qual intérprete usar.",
    "difficulty": 2
  },
  {
    "text": "O RAID 1 cria uma cópia espelhada dos dados.",
    "answer": true,
    "explanation": "Correto! O RAID 1 duplica dados em dois discos.",
    "difficulty": 2
  },
  {
    "text": "O DNS traduz nomes de domínio em endereços IP.",
    "answer": true,
    "explanation": "Correto! O DNS resolve nomes para IPs.",
    "difficulty": 2
  },
  {
    "text": "O comando “find” procura texto dentro dos arquivos.",
    "answer": false,
    "explanation": "find procura por arquivos no sistema de arquivos. grep procura texto dentro de arquivos.",
    "difficulty": 2
  },
  {
    "text": "/etc/shadow pode ser lido por todos os usuários.",
    "answer": false,
    "explanation": "/etc/shadow é legível apenas pelo root. Contém senhas com hash.",
    "difficulty": 2
  },
  {
    "text": "O comando \"exportar\" disponibiliza uma variável para processos filhos.",
    "answer": true,
    "explanation": "Correto! export exporta a variável como uma variável de ambiente.",
    "difficulty": 2
  },
  {
    "text": "O arquivo /etc/passwd contém senhas de usuários em texto não criptografado.",
    "answer": false,
    "explanation": "/etc/passwd não contém mais senhas reais. Eles estão em /etc/shadow como hashes.",
    "difficulty": 2
  },
  {
    "text": "O glob * também corresponde a arquivos ocultos (começando com ponto).",
    "answer": false,
    "explanation": "O glob * não inclui arquivos que começam com ponto. Você precisa de opções como dotglob.",
    "difficulty": 2
  },
  {
    "text": "NFS é um protocolo para compartilhamento de arquivos entre sistemas Unix/Linux.",
    "answer": true,
    "explanation": "Correto! NFS (Network File System) compartilha arquivos em uma rede entre sistemas Unix.",
    "difficulty": 2
  },
  {
    "text": "O comando “cat” pode concatenar vários arquivos.",
    "answer": true,
    "explanation": "Correto! cat (concatenar) une o conteúdo de vários arquivos: cat arquivo1 arquivo2.",
    "difficulty": 2
  },
  {
    "text": "apt é o gerenciador de pacotes usado pelo Fedora.",
    "answer": false,
    "explanation": "O Fedora usa dnf (ou yum). apt é para Debian/Ubuntu.",
    "difficulty": 2
  },
  {
    "text": "Linux é um sistema operacional completo.",
    "answer": false,
    "explanation": "Linux é apenas o kernel. GNU/Linux é o sistema operacional completo.",
    "difficulty": 3
  },
  {
    "text": "Um link físico pode apontar para um diretório.",
    "answer": false,
    "explanation": "Links físicos não podem apontar para diretórios (para evitar loops).",
    "difficulty": 3
  },
  {
    "text": "O comando tar -czf extrai um arquivo.",
    "answer": false,
    "explanation": "-czf cria um arquivo gzip. Para extrair use -xzf.",
    "difficulty": 3
  },
  {
    "text": "$1 em um script Bash indica o primeiro argumento.",
    "answer": true,
    "explanation": "Correto! $1 = primeiro argumento, $2 = segundo, etc.",
    "difficulty": 3
  },
  {
    "text": "Links simbólicos sobrevivem à exclusão do alvo.",
    "answer": false,
    "explanation": "Se você excluir o alvo, o link simbólico ficará \"quebrado\".",
    "difficulty": 3
  },
  {
    "text": "SIGKILL (9) pode ser interceptado pelo processo.",
    "answer": false,
    "explanation": "SIGKILL não pode ser interceptado. Termine imediatamente.",
    "difficulty": 3
  },
  {
    "text": "192.168.0.0/16 é um intervalo de IPs privados.",
    "answer": true,
    "explanation": "Correto! É um dos três intervalos privados definidos pela RFC 1918.",
    "difficulty": 3
  },
  {
    "text": "O sistema de arquivos ext4 suporta diários.",
    "answer": true,
    "explanation": "Correto! ext4 é um sistema de arquivos com registro em diário.",
    "difficulty": 3
  },
  {
    "text": "O comando “nice” altera a prioridade de um processo.",
    "answer": true,
    "explanation": "Correto! nice define a prioridade de agendamento.",
    "difficulty": 3
  },
  {
    "text": "TCP é um protocolo sem conexão.",
    "answer": false,
    "explanation": "TCP é orientado a conexão. UDP não tem conexão.",
    "difficulty": 3
  },
  {
    "text": "O comando “crontab -e” modifica os trabalhos agendados do usuário.",
    "answer": true,
    "explanation": "Correto! crontab -e abre o editor de tarefas cron do usuário.",
    "difficulty": 3
  },
  {
    "text": "Um processo em estado zumbi está usando muita CPU.",
    "answer": false,
    "explanation": "Um processo zumbi foi encerrado, mas o pai não leu seu status de saída. Não utiliza recursos.",
    "difficulty": 3
  },
  {
    "text": "/dev/null descarta tudo enviado para ele.",
    "answer": true,
    "explanation": "Correto! /dev/null é o “buraco negro” do Linux: ele descarta todos os dados.",
    "difficulty": 3
  },
  {
    "text": "O arquivo /etc/fstab define sistemas de arquivos que são montados automaticamente na inicialização.",
    "answer": true,
    "explanation": "Correto! fstab (tabela do sistema de arquivos) contém informações de montagem automática.",
    "difficulty": 3
  },
  {
    "text": "O comando “df” exibe o tamanho de um único arquivo.",
    "answer": false,
    "explanation": "df mostra o espaço em disco do sistema de arquivos. Para tamanhos de arquivo, use du ou ls -l.",
    "difficulty": 3
  },
  {
    "text": "systemd é o sistema init usado pela maioria das distribuições modernas.",
    "answer": true,
    "explanation": "Correto! systemd substituiu SysVinit na maioria das distros.",
    "difficulty": 3
  },
  {
    "text": "O arquivo ~/.bash_history contém comandos digitados pelo usuário.",
    "answer": true,
    "explanation": "Correto! O histórico dos comandos bash é salvo em ~/.bash_history.",
    "difficulty": 3
  },
  {
    "text": "O comando “grep -r” pesquisa diretórios recursivamente.",
    "answer": true,
    "explanation": "Correto! grep -r (ou -R) procura padrões em todos os arquivos do diretório e subdiretórios.",
    "difficulty": 3
  },
  {
    "text": "O sticky bit impede que os usuários excluam arquivos de outras pessoas em diretórios compartilhados.",
    "answer": true,
    "explanation": "Correto! O sticky bit (t) em /tmp impede que os usuários excluam arquivos de outras pessoas.",
    "difficulty": 3
  }
];