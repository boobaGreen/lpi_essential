export const topic5Extended = {
  "5-1": {
    "title": "Segurança e tipos de usuários",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "👑",
        "text": "O usuário root – o superusuário"
      },
      {
        "type": "paragraph",
        "text": "O usuário root (UID 0) tem acesso irrestrito ao sistema. Ele pode ler, gravar e excluir qualquer arquivo, encerrar qualquer processo, alterar qualquer configuração. Por esse motivo, você nunca deve trabalhar como root por padrão."
      },
      {
        "type": "table",
        "headers": [
          "Tipo de usuário",
          "UID",
          "Escopo",
          "Conecte-se?"
        ],
        "rows": [
          [
            "raiz",
            "0",
            "Administração completa do sistema",
            "Somente quando necessário"
          ],
          [
            "Usuários normais",
            "≥ 1000",
            "Usuários humanos com contas pessoais",
            "Sim, com casca própria"
          ],
          [
            "Usuários do sistema",
            "1-999",
            "Serviços e daemons (www-data, mysql)",
            "Não (/sbin/nologin)"
          ],
          [
            "ninguém",
            "65534",
            "Processos com menos privilégios",
            "Não"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "su vs sudo – Duas abordagens para segurança"
      },
      {
        "type": "comparison",
        "left": {
          "title": "ativado (trocar usuário)",
          "items": [
            "Mudar de usuário completamente",
            "Requer senha ROOT",
            "su - = login completo (ambiente raiz)",
            "Nenhum registro de comando detalhado",
            "Menos seguro: você precisa compartilhar senhas de root"
          ]
        },
        "right": {
          "title": "sudo (superusuário DO)",
          "items": [
            "Execute UM comando como root",
            "Requer SUA senha",
            "Cada comando é registrado",
            "Controle granular (quem pode fazer o quê)",
            "Mais seguro: ninguém sabe a senha do root"
          ]
        }
      },
      {
        "type": "code",
        "title": "su vs sudo basicamente",
        "prompt": "# su: torne-se root (pede senha ROOT)\n$ acima -\nSenha: [senha raiz]\n#uau\nraiz\n\n# sudo: execute um comando como root (pede SUA senha)\n$ sudo atualização apt\n[sudo] senha para mario: [senha de mario]\n\n# Veja quem pode usar o sudo\n$ sudo -l # Suas permissões\n$ cat /etc/sudoers # Arquivo de configuração (use visudo!)",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Use sempre o visudo!",
        "content": "/etc/sudoers deve ser editado SOMENTE com o comando visudo, que verifica a sintaxe antes de salvar. Um erro no sudoers pode bloquear o acesso ao sistema!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛡️",
        "text": "Princípio do Menor Privilégio"
      },
      {
        "type": "paragraph",
        "text": "O Princípio do Menor Privilégio é a regra de ouro da segurança: cada usuário e processo deve ter APENAS as permissões estritamente necessárias para realizar sua tarefa. Nada mais."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Non lavorare come root",
            "desc": "Usa sudo solo quando serve, poi torna al tuo utente"
          },
          {
            "term": "Servizi dedicati",
            "desc": "Ogni servizio gira con il proprio utente (www-data, mysql)"
          },
          {
            "term": "sudo granulare",
            "desc": "In /etc/sudoers puoi limitare QUALI comandi un utente può eseguire con sudo"
          },
          {
            "term": "Audit trail",
            "desc": "sudo logga tutto in /var/log/auth.log — tracciabilità completa"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame LPI pergunta sobre a diferença entre su e sudo, o princípio do menor privilégio e onde os logs de autenticação estão localizados (/var/log/auth.log ou /var/log/secure)."
      }
    ]
  },
  "5-2": {
    "title": "Gerenciamento de usuários e grupos",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📒",
        "text": "Arquivos de registro do Linux"
      },
      {
        "type": "table",
        "headers": [
          "Arquivo",
          "Proprietário",
          "Permissões",
          "Contente"
        ],
        "rows": [
          [
            "/etc/senha",
            "raiz",
            "644 (legível por todos)",
            "Informações do usuário: nome, UID, GID, home, shell"
          ],
          [
            "/etc/sombra",
            "raiz",
            "640 (somente raiz)",
            "Senhas e políticas criptografadas"
          ],
          [
            "/etc/grupo",
            "raiz",
            "644",
            "Grupos e membros adicionais"
          ],
          [
            "/etc/gshadow",
            "raiz",
            "640",
            "Senhas de grupo (raro)"
          ],
          [
            "/etc/skel",
            "raiz",
            "755",
            "Modelo para novos diretórios iniciais"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Formato de /etc/passwd"
      },
      {
        "type": "code",
        "title": "Anatomia de uma linha /etc/passwd",
        "prompt": "mario:x:1000:1000:Mario Rossi:/home/mario:/bin/bash\n  │ │ │ │ │ │ │\n  │ │ │ │ │ │ └── Concha de login\n  │ │ │ │ │ └── Diretório inicial\n  │ │ │ │ └── Campo GECOS (informações do usuário)\n  │ │ │ └── GID (ID do grupo principal)\n  │ │ └── UID (ID do usuário)\n  │ └── \"x\" = senha em /etc/shadow\n  └── Nome de usuário",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Por que \"x\" na senha?",
        "content": "No passado, as senhas estavam em /etc/passwd (legíveis por todos!). Por segurança eles foram movidos para /etc/shadow (legível apenas pelo root). O “x” indica que a senha está no arquivo shadow."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Comandos para gerenciar usuários e grupos"
      },
      {
        "type": "table",
        "headers": [
          "Comando",
          "Função",
          "Opções importantes"
        ],
        "rows": [
          [
            "usuárioadd -m usuário",
            "Criar usuário com home",
            "-m criar home, -s shell, -G grupos"
          ],
          [
            "usermod -aG grp usuário",
            "Editar usuário",
            "-aG Anexar grupo, -L bloquear, -U desbloquear"
          ],
          [
            "userdel -r usuário",
            "Excluir usuário + página inicial",
            "-r também remove o diretório inicial"
          ],
          [
            "usuário com senha",
            "Alterar a senha",
            "-l bloquear, -u desbloquear, -e forçar mudança"
          ],
          [
            "nome de adição de grupo",
            "Criar grupo",
            "-g GID específico"
          ],
          [
            "grupo do nome",
            "Excluir grupo",
            "Somente se nenhum usuário o tiver como principal"
          ],
          [
            "usuário de grupos",
            "Mostrar grupos de usuários",
            "Lista de grupos de membros"
          ],
          [
            "ID do usuário",
            "Mostrar UID/GID/grupos",
            "Informações completas do usuário"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Fluxo de trabalho: crie um usuário completo",
        "prompt": "#1. Criar usuário com diretório inicial\n$ sudo useradd -m -s /bin/bash -c \"Mario Rossi\" mario\n\n#2. Defina sua senha\n$ sudo senha mario\n\n#3. Adicionar a grupos adicionais\n$ sudo usermod -aG sudo,docker mario\n\n#4. Verifique\n$ id do mario\nuid=1001(mario) gid=1001(mario) grupos=1001(mario),27(sudo),999(docker)\n\n$ ls -la /home/mario/\n# Contém arquivos copiados de /etc/skel/",
        "output": ""
      }
    ]
  },
  "5-3": {
    "title": "Permissões de arquivo",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "O sistema de permissão Unix"
      },
      {
        "type": "paragraph",
        "text": "Cada arquivo e diretório no Linux possui três conjuntos de permissões (proprietário, grupo, outros) e três tipos de permissões (leitura, gravação, execução). Isso cria uma matriz de 9 permissões."
      },
      {
        "type": "table",
        "headers": [
          "Permitir",
          "Em arquivo",
          "Em diretórios",
          "Valor octal"
        ],
        "rows": [
          [
            "r (ler)",
            "Leia o conteúdo",
            "Listando arquivos (ls)",
            "4"
          ],
          [
            "w (escrever)",
            "Edite o conteúdo",
            "Criar/excluir arquivos",
            "2"
          ],
          [
            "x (executar)",
            "Execute conforme programado",
            "Digite (cd) o diretório",
            "1"
          ],
          [
            "- (Ninguém)",
            "Sem acesso",
            "Sem acesso",
            "0"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Leia permissões com ls -l",
        "prompt": "$ ls -l /etc/passwd\n-rw-r--r-- 1 raiz raiz 2847 5 de março /etc/passwd\n│├──┤├──┤├──┤\n││ │ │\n││ │ └── outros: r-- (somente leitura)\n││ └── grupo: r-- (somente leitura)\n│└── proprietário: rw- (ler + escrever)\n└── tipo: - = arquivo (d = diretório, l = link)",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "Notação Octal vs Simbólica"
      },
      {
        "type": "table",
        "headers": [
          "octal",
          "Simbólico",
          "Significado",
          "Uso típico"
        ],
        "rows": [
          [
            "755",
            "rwxr-xr-x",
            "O proprietário faz tudo, outros leem/executam",
            "Scripts, diretórios"
          ],
          [
            "644",
            "rw-r--r--",
            "O proprietário lê/escreve, outros apenas leem",
            "Arquivo de texto, configuração"
          ],
          [
            "700",
            "rwx------",
            "Somente o proprietário tem acesso",
            "Arquivos privados, chaves SSH"
          ],
          [
            "600",
            "r-------",
            "Somente o proprietário lê/grava",
            "Arquivos secretos"
          ],
          [
            "777",
            "rwxrwxrwx",
            "Todos podem fazer tudo",
            "⚠️NUNCA use em produção!"
          ],
          [
            "750",
            "rwxr-x---",
            "Proprietário + grupo lêem, outros não",
            "Diretórios compartilhados"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚡",
        "text": "Autorizações Especiais"
      },
      {
        "type": "table",
        "headers": [
          "Permitir",
          "octal",
          "Em arquivo",
          "Em diretórios",
          "Exemplo"
        ],
        "rows": [
          [
            "SUID",
            "4xxx",
            "Execute com permissões de proprietário",
            "-",
            "/usr/bin/passwd (SUID raiz)"
          ],
          [
            "SGID",
            "2xxx",
            "Execute com permissões de grupo",
            "Novos arquivos herdam o grupo",
            "Diretórios de projetos compartilhados"
          ],
          [
            "Pedaços pegajosos",
            "1xxx",
            "-",
            "Somente o proprietário pode cancelar",
            "/tmp (permissões 1777)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame pergunta: ls -l exibe permissões em formato simbólico (rwxr-xr-x). chmod usa octal (755) ou simbólico (u+x). umask 022 produz 755 permissões para diretórios e 644 permissões para arquivos."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎭",
        "text": "umask — A máscara das permissões"
      },
      {
        "type": "paragraph",
        "text": "umask define as permissões que são REMOVIDAS ao criar um novo arquivo ou diretório. O valor padrão para usuários normais é 022."
      },
      {
        "type": "table",
        "headers": [
          "umask",
          "Permissões de arquivo (máscara 666)",
          "Permissões de diretório (máscara 777)"
        ],
        "rows": [
          [
            "022",
            "644 (rw-r--r--)",
            "755 (rwxr-xr-x)"
          ],
          [
            "077",
            "600 (rw-------)",
            "700 (rwx------)"
          ],
          [
            "002",
            "664 (rw-rw-r--)",
            "775 (rwxrwxr-x)"
          ]
        ]
      }
    ]
  },
  "5-4": {
    "title": "Arquivos e links especiais",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Link físico vs link simbólico"
      },
      {
        "type": "paragraph",
        "text": "Links são \"atalhos\" no sistema de arquivos. Compreender a diferença entre links físicos e links simbólicos é essencial para o exame LPI e para o trabalho diário com Linux."
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔗 Link físico",
          "items": [
            "Aponte diretamente para o inode",
            "Indistinguível do original",
            "O arquivo sobrevive à exclusão do original",
            "NÃO PODE atravessar sistemas de arquivos",
            "NÃO PODE vincular diretórios",
            "Mesmo inode, contagem de links +1",
            "No arquivo hardlink"
          ]
        },
        "right": {
          "title": "➡️ Link Simbólico (Link Simbólico)",
          "items": [
            "Aponta para um PATH (nome do arquivo)",
            "É um arquivo especial (tipo \"l\")",
            "Torna-se \"quebrado\" se o alvo for excluído",
            "PODE atravessar sistemas de arquivos",
            "PODE vincular diretórios",
            "Inode diferente, tamanho = comprimento do caminho",
            "ln -s link simbólico de destino"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💡",
        "text": "O que são inodes?"
      },
      {
        "type": "paragraph",
        "text": "Um inode é uma estrutura de dados do sistema de arquivos que contém informações sobre um arquivo: permissões, proprietário, tamanho, carimbo de data/hora, blocos de dados. O arquivo NAME não está no inode — está no diretório que aponta para o inode. É por isso que vários nomes (hard links) podem existir para o mesmo inode."
      },
      {
        "type": "diagram",
        "title": "Estrutura de Inode e Link",
        "boxes": [
          {
            "label": "Directory",
            "color": "#3b82f6",
            "children": [
              "file.txt → inode 42",
              "hardlink.txt → inode 42",
              "symlink.txt → \"file.txt\""
            ]
          },
          {
            "label": "Inode 42",
            "color": "#10b981",
            "children": [
              "Permessi: rw-r--r--",
              "Owner: mario",
              "Size: 1024 bytes",
              "Link count: 2"
            ]
          },
          {
            "label": "Blocchi Dati",
            "color": "#f59e0b",
            "children": [
              "Block 100",
              "Block 101",
              "(contenuto effettivo)"
            ]
          }
        ]
      },
      {
        "type": "code",
        "title": "Trabalhando com links",
        "prompt": "# Crie um link físico\n$ ln original.txt hardlink.txt\n$ ls -li # -i mostra o número do inode\n42 -rw-r--r-- 2 mario mario 1024 original.txt\n42 -rw-r--r-- 2 mario mario 1024 hardlink.txt\n# Mesmo inode (42)! Contagem de links = 2\n\n# Crie um link simbólico\n$ ln -s /etc/passwd link_passwd\n$ ls -l link_passwd\nlrwxrwxrwx 1 mario mario 11 link_passwd -> /etc/passwd\n# Inode diferente, tamanho = 11 (comprimento \"/etc/passwd\")\n\n# Encontrando o alvo de um link simbólico\n$ readlinklink_passwd\n/etc/senha\n\n# Encontre todos os links simbólicos quebrados\n$ encontrar /home -xtype l",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📁",
        "text": "Arquivos temporários"
      },
      {
        "type": "table",
        "headers": [
          "Diretórios",
          "Escopo",
          "Persistência",
          "Notas"
        ],
        "rows": [
          [
            "/tmp",
            "Arquivos temporários para todos",
            "Limpo na reinicialização",
            "Sticky bit: apenas o proprietário pode excluir seus arquivos"
          ],
          [
            "/var/tmp",
            "Arquivos temporários persistentes",
            "Eles sobrevivem à reinicialização",
            "Para dados necessários entre reinicializações"
          ],
          [
            "~/.cache",
            "Cache do usuário",
            "Persistente",
            "Cache do navegador, aplicativos"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "O exame pergunta: Hard link = mesmo inode, não atravessa sistema de arquivos, nenhum diretório. Symlink = inode diferente, atravessa sistemas de arquivos, pode vincular diretórios, pode ficar \"quebrado\". ln -s cria link simbólico, ln sem sinalizador cria link físico."
      }
    ]
  }
};
