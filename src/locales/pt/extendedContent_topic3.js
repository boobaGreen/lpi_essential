export const topic3Extended = {
  "3-1": {
    "title": "Arquivamento e compactação",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗜️",
        "text": "Compressão vs Armazenamento"
      },
      {
        "type": "paragraph",
        "text": "Arquivamento e compactação são duas operações distintas frequentemente usadas juntas. Arquivar significa agrupar vários arquivos em um. Compactar significa reduzir o tamanho dos dados. arquivo tar, compactação gzip/bzip2/xz."
      },
      {
        "type": "comparison",
        "left": {
          "title": "📦 Armazenamento (alcatrão)",
          "items": [
            "Agrupe vários arquivos/diretórios em um",
            "NÃO comprime (tamanho ≈ igual)",
            "Preservar permissões, carimbos de data e hora, estrutura",
            "Produz arquivos .tar"
          ]
        },
        "right": {
          "title": "🗜️ Compressão (gzip, bzip2, xz)",
          "items": [
            "Reduz o tamanho de UM arquivo",
            "Algoritmos matemáticos para eliminar redundância",
            "Quanto mais você comprime, mais lento fica",
            "Produz .gz, .bz2, .xz"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "Comparação de algoritmos"
      },
      {
        "type": "table",
        "headers": [
          "Algoritmo",
          "Extensão",
          "Velocidade",
          "Compressão",
          "Comando",
          "Descompressão"
        ],
        "rows": [
          [
            "gzip",
            ".gz",
            "⚡ Rápido",
            "⭐⭐⭐",
            "arquivos gzip",
            "arquivo gunzip.gz"
          ],
          [
            "bzip2",
            ".bz2",
            "🐌 Médio",
            "⭐⭐⭐⭐",
            "arquivos bzip2",
            "arquivo bunzip2.bz2"
          ],
          [
            "xz",
            ".xz",
            "🐢 Lento",
            "⭐⭐⭐⭐⭐",
            "arquivos xz",
            "arquivo unxz.xz"
          ],
          [
            "zip",
            ".zip",
            "⚡ Rápido",
            "⭐⭐⭐",
            "arquivo zip arch.zip",
            "descompacte arch.zip"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Quando usar qual?",
        "content": "gzip para uso diário (rápido e bom). xz para distribuir software (compressão máxima). O bzip2 está caindo em desuso em favor do xz."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Bandeiras de alcatrão – a receita"
      },
      {
        "type": "table",
        "headers": [
          "Bandeiras",
          "Significado",
          "Mnemônico"
        ],
        "rows": [
          [
            "-c",
            "Criar (criar arquivo)",
            "C = Criar"
          ],
          [
            "-x",
            "Extrair",
            "X = extrair"
          ],
          [
            "-t",
            "Lista (mostrar conteúdo)",
            "T = listaT"
          ],
          [
            "-f",
            "Arquivo (especifique o nome)",
            "F = Arquivo (sempre por último!)"
          ],
          [
            "-z",
            "gzip",
            "Z é para Zip"
          ],
          [
            "-j",
            "bzip2",
            "J é para bJip2"
          ],
          [
            "-J",
            "xz",
            "J maiúsculo = XZ (mais poderoso)"
          ],
          [
            "-v",
            "Verboso (mostrar progresso)",
            "V = detalhado"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemplos práticos com alcatrão",
        "prompt": "# Cria um arquivo compactado gzip\n$ tar -czf backup.tar.gz /home/user/docs/\n\n# Extrai arquivo\n$ tar -xzf backup.tar.gz\n\n# Extrai para um diretório específico\n$ tar -xzf backup.tar.gz -C /tmp/\n\n# Lista o conteúdo sem extrair\n$ tar -tzf backup.tar.gz\n\n# Crie com xz (compactação máxima)\ndiretório $ tar -cJf archive.tar.xz/",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pede os sinalizadores tar para criar (-czf) e extrair (-xzf) e saber a diferença entre -z (gzip), -j (bzip2) e -J (xz). Lembre-se: gzip é o mais usado por padrão."
      }
    ]
  },
  "3-2": {
    "title": "Redirecionamento de E/S e Pipe",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "0️⃣",
        "text": "Os três descritores de arquivo padrão"
      },
      {
        "type": "paragraph",
        "text": "Cada processo Linux possui três canais de E/S abertos por padrão. Compreender esses canais é fundamental para redirecionamentos e pipes."
      },
      {
        "type": "diagram",
        "title": "Fluxo de E/S padrão",
        "boxes": [
          {
            "label": "stdin (0)",
            "color": "#10b981",
            "children": [
              "Tastiera (default)",
              "File (<)",
              "Pipe output"
            ]
          },
          {
            "label": "stdout (1)",
            "color": "#3b82f6",
            "children": [
              "Schermo (default)",
              "File (>)",
              "Pipe input"
            ]
          },
          {
            "label": "stderr (2)",
            "color": "#ef4444",
            "children": [
              "Schermo (default)",
              "File (2>)",
              "/dev/null"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "➡️",
        "text": "Operadores de redirecionamento"
      },
      {
        "type": "table",
        "headers": [
          "Operador",
          "Função",
          "Exemplo"
        ],
        "rows": [
          [
            "> arquivos",
            "stdout → arquivo (sobrescrever)",
            "ls > lista.txt"
          ],
          [
            ">> arquivos",
            "stdout → arquivo (anexar)",
            "echo \"nova linha\" >> log.txt"
          ],
          [
            "<arquivo",
            "arquivo → stdin",
            "ordenar <números.txt"
          ],
          [
            "2> arquivos",
            "stderr → arquivo",
            "encontre / -nome \"x\" 2> erros.txt"
          ],
          [
            "2>&1",
            "stderr → mesma saída que stdout",
            "cmd> tudo.log 2>&1"
          ],
          [
            "&> arquivos",
            "stdout + stderr → arquivo",
            "cmd &> saída.log"
          ],
          [
            "/dev/nulo",
            "“Buraco negro” – descarte tudo",
            "cmd 2>/dev/nulo"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Cenários comuns de redirecionamento",
        "prompt": "# Salva a saída do comando\n$ ls -la /etc > list_etc.txt\n\n# Ignorar erros\n$ find / -name \"config\" 2>/dev/null\n\n# Salva tudo (stdout + stderr)\n$ apt atualização &> update.log\n\n# Pendure em um tronco\n$ echo \"$(data): backup concluído\" >> /var/log/backup.log",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Pipe – O Poder da Composição"
      },
      {
        "type": "paragraph",
        "text": "O pipe (|) é o conceito mais poderoso da linha de comando do Unix. Ele conecta o stdout de um comando ao stdin do próximo, permitindo construir pipelines complexos a partir de comandos simples."
      },
      {
        "type": "code",
        "title": "Pipeline: do simples ao complexo",
        "prompt": "# Conta quantos arquivos estão em /etc\n$ls /etc | wc-l\n\n# Encontre os 5 processos que usam mais RAM\n$ps aux | ordenar -k4 -rn | cabeça -5\n\n#Conte quantas vezes “erro” aparece nos logs\n$ gato /var/log/syslog | erro grep -i | wc-l\n\n# Extraia nomes de usuário exclusivos que efetuaram login\n$último | awk '{imprimir $1}' | classificar | único -c | classificar -rn",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Operadores Lógicos entre Comandos"
      },
      {
        "type": "table",
        "headers": [
          "Operador",
          "Significado",
          "Exemplo"
        ],
        "rows": [
          [
            "cmd1 && cmd2",
            "Execute cmd2 SOMENTE se cmd1 for bem-sucedido (saída 0)",
            "diretório mkdir && diretório cd"
          ],
          [
            "cmd1 || cmd2",
            "Execute cmd2 SOMENTE se cmd1 falhar (saída ≠ 0)",
            "host de ping || eco \"Off-line\""
          ],
          [
            "cmd1; cmd2",
            "Execute cmd2 SEMPRE, independentemente",
            "data ; uau"
          ],
          [
            "cmd &",
            "Execute o cmd em segundo plano",
            "durma 100 e"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Cenário: Automatizando um Backup",
        "text": "Você é um administrador de sistema e precisa fazer um backup diário. Com o pipeline: tar -czf /backup/$(date +%F).tar.gz /home/ 2>/dev/null && echo \"Backup OK\" >> /var/log/backup.log || echo \"Backup ERROR\" >> /var/log/backup.log — Crie um arquivo, salve o resultado no log. Se falhar, registre o erro."
      }
    ]
  },
  "3-3": {
    "title": "Grep e expressões regulares",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔎",
        "text": "grep — O canivete suíço do texto"
      },
      {
        "type": "table",
        "headers": [
          "Opção",
          "Função",
          "Exemplo"
        ],
        "rows": [
          [
            "-o",
            "Não diferencia maiúsculas de minúsculas",
            "grep -i “erro” log.txt"
          ],
          [
            "-v",
            "Correspondência reversa (linhas que NÃO correspondem)",
            "grep -v \"^#\"config.txt"
          ],
          [
            "-r / -R",
            "Pesquisar diretórios recursivamente",
            "grep -r \"TODO\"src/"
          ],
          [
            "-n",
            "Mostrar número da linha",
            "grep -n programa \"principal\".c"
          ],
          [
            "-c",
            "Conte as linhas encontradas",
            "grep -c “erro” syslog"
          ],
          [
            "-o",
            "Mostrar apenas nomes de arquivos",
            "grep -rl “senha” /etc/"
          ],
          [
            "-c",
            "Combine apenas palavras inteiras",
            "grep -w “é” arquivo (não “este”)"
          ],
          [
            "-E",
            "Regex estendida (egrep)",
            "grep -E registro \"err|avisar\""
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌟",
        "text": "Metacaracteres Regex"
      },
      {
        "type": "table",
        "headers": [
          "Metacaractere",
          "Significado",
          "Exemplo",
          "Corresponder"
        ],
        "rows": [
          [
            ".",
            "Qualquer caractere único",
            "c.t.",
            "gato, corte, berço"
          ],
          [
            "^",
            "Início da linha",
            "^Erro",
            "Erro no início da linha"
          ],
          [
            "$",
            "Fim da linha",
            "fim$",
            "o fim"
          ],
          [
            "*",
            "Zero ou mais que o anterior",
            "abc",
            "ac, abc, abc"
          ],
          [
            "[ ]",
            "Um dos personagens do conjunto",
            "[aeiou]",
            "Vogal única"
          ],
          [
            "[^]",
            "Qualquer um, exceto os personagens do conjunto",
            "[^0-9]",
            "Não é um número"
          ],
          [
            "\\",
            "Fuga curinga",
            "\\.",
            "Um ponto literal"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Exemplos práticos com regex",
        "prompt": "# Linhas começando com # (comentários)\n$ grep \"^#\" /etc/ssh/sshd_config\n\n# Linhas vazias\n$ grep \"^$\" arquivo.txt\n\n# endereços IP (padrão simples)\n$ grep -E \"[0-9]+\\.[0-9]+\\.[0-9]+\\.[0-9]+\" acesso.log\n\n# NÃO linhas vazias e NÃO comentários\n$ grep -v \"^#\" configuração | grep -v \"^$\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "✂️",
        "text": "Manipulação de Texto: o Power Toolkit"
      },
      {
        "type": "table",
        "headers": [
          "Comando",
          "Função",
          "Exemplo chave"
        ],
        "rows": [
          [
            "corte",
            "Extrair colunas/campos",
            "cortar -d: -f1 /etc/passwd"
          ],
          [
            "organizar",
            "Classifique as linhas",
            "classificar -n (numérico) -r (reverso)"
          ],
          [
            "único",
            "Remover duplicatas adjacentes",
            "classificar arquivo | uniq -c"
          ],
          [
            "banheiro",
            "Contar linhas, palavras, bytes",
            "wc -l (linhas) -w (palavras)"
          ],
          [
            "cabeça",
            "Primeiras N linhas",
            "head -n 20 arquivos"
          ],
          [
            "cauda",
            "Últimas N linhas",
            "tail -f syslog (seguir)"
          ],
          [
            "tr",
            "Traduz personagens",
            "tr 'a-z' 'A-Z' (maiúsculas)"
          ],
          [
            "sed",
            "Editor de fluxo",
            "arquivo sed 's/antigo/novo/g'"
          ],
          [
            "estranho",
            "Colunas de processo",
            "arquivo awk '{print $1, $3}'"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI testa grep com -i, -v, -r e as expressões regulares básicas (^, $, ., *). Você também conhece cortar, classificar, wc e a diferença entre cabeça e cauda."
      }
    ]
  },
  "3-4": {
    "title": "Scripts Bash",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "Anatomia de um script Bash"
      },
      {
        "type": "code",
        "title": "Estrutura básica de um script",
        "prompt": "#!/bin/bash\n#Este é um comentário\n# O shebang (primeira linha) informa ao sistema qual intérprete usar\n\n# Variáveis\nNAME=\"LinuxQuest\"\nVERSÃO=2.0\n\n# Imprimir\necho \"Bem-vindo ao $NAME v$VERSION!\"\necho \"Usuário: $(whoami), Data: $(data +%F)\"\n\n# Código de saída: 0 = sucesso\nsaída 0",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Não se esqueça de chmod +x!",
        "content": "Um script não é executável por padrão. Você precisa adicionar permissão de execução: chmod +x script.sh. Em seguida, execute-o com ./script.sh (o ./ é necessário se o diretório atual não estiver no PATH)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📥",
        "text": "Variáveis ​​Especiais em Scripts"
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
            "US$ 0",
            "Nome do roteiro",
            "./backup.sh → backup.sh"
          ],
          [
            "$ 1, $ 2, ...",
            "Argumentos posicionais",
            "./script.sh olá → $1=olá"
          ],
          [
            "$#",
            "Número de tópicos",
            "Se você ligar com 3 argumentos → $#=3"
          ],
          [
            "$@",
            "Todos os tópicos (separados)",
            "\"$@\" = \"$1\" \"$2\" \"$3\""
          ],
          [
            "$*",
            "Todos os tópicos (mesclados)",
            "\"$*\" = \"$1$2$3\""
          ],
          [
            "$?",
            "Sair do último comando do código",
            "0 = sucesso, outro = erro"
          ],
          [
            "$$",
            "PID do script atual",
            "Útil para arquivos temporários"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔀",
        "text": "Condições e Ciclos"
      },
      {
        "type": "code",
        "title": "Se-então-senão",
        "prompt": "#!/bin/bash\nif [ -f \"/etc/passwd\"]; então\n    echo \"O arquivo existe!\"\nelif [ -d \"/etc\"]; então\n    echo \"É um diretório\"\nmais\n    eco \"Não encontrado\"\nfi",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "Teste",
          "Significado",
          "Tipo"
        ],
        "rows": [
          [
            "[-f arquivo]",
            "O arquivo existe e é um arquivo normal",
            "Arquivo"
          ],
          [
            "[-d diretório]",
            "O diretório existe",
            "Arquivo"
          ],
          [
            "[ -e caminho ]",
            "O caminho existe (qualquer tipo)",
            "Arquivo"
          ],
          [
            "[-r arquivo]",
            "O arquivo é legível",
            "Permissões"
          ],
          [
            "[-x arquivo]",
            "O arquivo é executável",
            "Permissões"
          ],
          [
            "[ -z \"$ var\" ]",
            "A string está vazia",
            "Corda"
          ],
          [
            "[ \"$a\" = \"$b\" ]",
            "Sequências iguais",
            "Corda"
          ],
          [
            "[ $a -eq $b ]",
            "Números iguais",
            "Número"
          ],
          [
            "[$a -lt $b]",
            "a < b (menos que)",
            "Número"
          ],
          [
            "[$a -gt $b]",
            "a > b (maior que)",
            "Número"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Loops for e while",
        "prompt": "#For loop em uma lista\npara arquivo em *.txt; fazer\n    echo \"Processo: $arquivo\"\n    wc -l \"$arquivo\"\nfeito\n\n# For loop com intervalo numérico\npara i em $(seq 1 10); fazer\n    echo \"Iteração $i\"\nfeito\n\n# Enquanto loop\ncontador=1\nenquanto [$contador -le 5]; fazer\n    echo \"Contador: $contador\"\n    contador=$((contador + 1))\nfeito",
        "output": ""
      },
      {
        "type": "story",
        "title": "Cenário: Script de Backup Automático",
        "text": "Crie um script backup.sh que: 1) Verifique se o diretório de backup existe (se -d), 2) Crie um arquivo tar.gz com data no nome, 3) Conta backups antigos e os exclui se houver mais de 7 (para + rm), 4) Registra o resultado. Este é o tipo de automação que todo administrador de sistema faz diariamente!"
      }
    ]
  }
};
