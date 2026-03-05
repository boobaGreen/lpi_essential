export const lessonContent = {
  "1-1": {
    "comic": {
      "title": "O Nascimento do Linux 🐧",
      "panels": [
        {
          "emoji": "🏛️",
          "text": "1969 — Unix, um sistema operacional revolucionário, nasce nos laboratórios da AT&T..."
        },
        {
          "emoji": "👨‍💻",
          "text": "1991 — Um jovem estudante finlandês, Linus Torvalds, começa a desenvolver um kernel livre..."
        },
        {
          "emoji": "🐧",
          "text": "“Estou fazendo um sistema operacional gratuito, só um hobby…” — O post que mudou tudo!"
        },
        {
          "emoji": "🌍",
          "text": "Hoje o Linux está em todo lugar: servidores, nuvem, smartphones (Android), IoT, supercomputadores!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Famílias de Distribuição",
        "items": [
          "Debian → Ubuntu, Mint",
          "Chapéu Vermelho → RHEL, Fedora, CentOS",
          "SUSE → SLES, openSUSE"
        ]
      },
      {
        "title": "Gerenciadores de pacotes",
        "items": [
          "Debian: dpkg, apt (.deb)",
          "Red Hat: rpm, yum, dnf (.rpm)",
          "SUSE: rpm, zypper (.rpm)"
        ]
      },
      {
        "title": "Sistemas embarcados",
        "items": [
          "Android = kernel Linux modificado",
          "Raspberry Pi + Raspbian",
          "Linux em 90% da nuvem pública"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /etc/os-release",
      "output": "NAME=\"Ubuntu\"\nVERSION=\"22.04 LTS\"\nID=ubuntu\nID_LIKE=debian"
    }
  },
  "1-2": {
    "comic": {
      "title": "O mundo dos aplicativos de código aberto 📦",
      "panels": [
        {
          "emoji": "📝",
          "text": "LibreOffice: Writer, Calc, Impress — o pacote gratuito que desafia o Microsoft Office!"
        },
        {
          "emoji": "🌐",
          "text": "Firefox e Chromium: navegadores gratuitos e poderosos."
        },
        {
          "emoji": "🖥️",
          "text": "Apache e Nginx: os servidores web que fazem a Internet funcionar!"
        },
        {
          "emoji": "💻",
          "text": "C, Java, Python, Bash: as linguagens que dão vida ao Linux."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Aplicativos de desktop",
        "items": [
          "LibreOffice, GIMP, Blender, VLC, Audacity"
        ]
      },
      {
        "title": "Servidor de aplicativos",
        "items": [
          "Apache, Nginx (web)",
          "MariaDB, PostgreSQL (banco de dados)",
          "Samba, NFS (compartilhamento de arquivos)"
        ]
      },
      {
        "title": "Idiomas",
        "items": [
          "Compilado: C, Java",
          "Interpretado: Python, Perl, JavaScript, Bash"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ apt pesquisar libreoffice",
      "output": "libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor"
    }
  },
  "1-3": {
    "comic": {
      "title": "As 4 liberdades do software 🔓",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "Liberdade 0: Use o programa para qualquer finalidade!"
        },
        {
          "emoji": "1️⃣",
          "text": "Liberdade 1: Estude como funciona e mude!"
        },
        {
          "emoji": "2️⃣",
          "text": "Liberdade 2: Redistribua cópias para outras pessoas!"
        },
        {
          "emoji": "3️⃣",
          "text": "Freedom 3: Distribua suas versões modificadas!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Licenças copyleft",
        "items": [
          "GPL: o código derivado deve permanecer GPL",
          "LGPL: permite links proprietários",
          "AGPL: Estende GPL para SaaS"
        ]
      },
      {
        "title": "Licenças Permissivas",
        "items": [
          "MIT: Muito curto e indulgente",
          "BSD: semelhante ao MIT",
          "Apache 2.0: concessão de patente"
        ]
      },
      {
        "title": "Código aberto para negócios",
        "items": [
          "Suporte (Chapéu Vermelho)",
          "Licença dupla",
          "SaaS, Certificações"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ head -5 /usr/share/common-licenses/GPL-3",
      "output": "GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation"
    }
  },
  "1-4": {
    "comic": {
      "title": "Privacidade e Segurança Digital 🔒",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "GNOME ou KDE? Escolha o seu ambiente de trabalho!"
        },
        {
          "emoji": "🍪",
          "text": "Tenha cuidado com cookies de terceiros: eles rastreiam você em qualquer lugar!"
        },
        {
          "emoji": "🔒",
          "text": "HTTPS = HTTP + TLS. Procure o cadeado no seu navegador!"
        },
        {
          "emoji": "🔑",
          "text": "GnuPG: Criptografia assimétrica. Chave pública para criptografar, chave privada para descriptografar."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Ambiente de trabalho",
        "items": [
          "GNOME (GTK) — Simplicidade",
          "KDE (Qt) — Personalização",
          "XFCE, LXDE – Leve"
        ]
      },
      {
        "title": "Privacidade",
        "items": [
          "Cookies de terceiros = rastreamento",
          "DNT ≠ garantia de privacidade",
          "Navegação privada ≠ anonimato"
        ]
      },
      {
        "title": "Criptografia",
        "items": [
          "TLS/SSL para conexões",
          "GnuPG para arquivos/e-mail",
          "dm-crypt/LUKS para discos"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gpg --list-keys",
      "output": "pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>"
    }
  },
  "2-1": {
    "comic": {
      "title": "Bem-vindo à Shell! 💻",
      "panels": [
        {
          "emoji": "⌨️",
          "text": "O shell é a sua janela para o sistema. Escreva comandos, obtenha resultados!"
        },
        {
          "emoji": "🐚",
          "text": "Bash = Bourne novamente Shell. O shell mais usado no Linux!"
        },
        {
          "emoji": "💲",
          "text": "O prompt $ indica um usuário normal. O # indica raiz — tome cuidado!"
        },
        {
          "emoji": "🔤",
          "text": "Citando: \"duplos\" expandem $ variáveis, 'singles' interpretam tudo literalmente."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Tipos de casca",
        "items": [
          "bash – padrão",
          "zsh – avançado (macOS)",
          "peixe – fácil de usar",
          "sh — base POSIX"
        ]
      },
      {
        "title": "Comandos Básicos",
        "items": [
          "pwd – diretório atual",
          "whoami – usuário atual",
          "nome do host – nome da máquina",
          "uname -a — informações do sistema"
        ]
      },
      {
        "title": "Citando",
        "items": [
          "\"dobra\" → expande $VAR",
          "'solteiros' → literal",
          "\\barra invertida → escape único"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo \"Olá, sou $(whoami) em $(hostname)\"",
      "output": "Ciao, sono studente su linux-pc"
    }
  },
  "2-2": {
    "comic": {
      "title": "Variáveis: Memória Shell 🧠",
      "panels": [
        {
          "emoji": "📦",
          "text": "Variáveis ​​são contêineres que armazenam valores: NAME=\"John\""
        },
        {
          "emoji": "🌐",
          "text": "As variáveis ​​de ambiente são globais. PATH informa ao shell onde procurar os comandos!"
        },
        {
          "emoji": "📤",
          "text": "export torna uma variável local acessível a processos filhos."
        },
        {
          "emoji": "🔍",
          "text": "env mostra todas as variáveis ​​de ambiente. echo $HOME sua casa!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Variáveis ​​locais",
        "items": [
          "NOME=\"valor\" (sem espaços!)",
          "echo $NAME para ler",
          "desmarque NAME para excluir"
        ]
      },
      {
        "title": "Variáveis ​​de ambiente",
        "items": [
          "PATH — caminhos de comando",
          "HOME — diretório pessoal",
          "USUÁRIO - nome de usuário",
          "LANG – idioma do sistema"
        ]
      },
      {
        "title": "Persistência",
        "items": [
          "~/.bashrc — login interativo",
          "~/.profile — login inicial",
          "/etc/ambiente — global"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo $PATH",
      "output": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
  "2-3": {
    "comic": {
      "title": "Ajuda! Homem e Informação 📚",
      "panels": [
        {
          "emoji": "📖",
          "text": "homem é seu melhor amigo! man ls conta tudo sobre ls."
        },
        {
          "emoji": "🔢",
          "text": "As seções do man: 1=Comandos do usuário, 5=Arquivo de configuração, 8=Comandos do administrador."
        },
        {
          "emoji": "🔎",
          "text": "a propósito de comandos de pesquisa por descrição: a propósito \"copiar arquivos\""
        },
        {
          "emoji": "📁",
          "text": "find procura por arquivos no sistema de arquivos. localizar é mais rápido, mas usa um banco de dados."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Documentação",
        "items": [
          "comando man - manual completo",
          "informações de comando - formato GNU",
          "Comando --help — ajuda curta",
          "palavra-chave apropriada - pesquisa"
        ]
      },
      {
        "title": "Seções Homem",
        "items": [
          "1 — Comandos do usuário",
          "5 — Formatos de arquivo",
          "8 — Comandos Sysadmin"
        ]
      },
      {
        "title": "Encontrar arquivos",
        "items": [
          "encontre / -nome \"*.txt\"",
          "encontrar / -type d -name logs",
          "localizar nome do arquivo (banco de dados)",
          "qual comando (no PATH)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$man -k \"copiar arquivos\"",
      "output": "cp (1)    - copy files and directories\nscp (1)   - secure copy (remote file copy)\nrsync (1) - a fast, versatile file copying tool"
    }
  },
  "2-4": {
    "comic": {
      "title": "A árvore do sistema de arquivos 🌳",
      "panels": [
        {
          "emoji": "/",
          "text": "Tudo começa na raiz /. A árvore cresce para baixo!"
        },
        {
          "emoji": "📂",
          "text": "/home — suas coisas pessoais. /etc — configuração do sistema."
        },
        {
          "emoji": "💾",
          "text": "/var — dados variáveis ​​(log, mail). /tmp — arquivos temporários."
        },
        {
          "emoji": "⚙️",
          "text": "/bin e /sbin — comandos essenciais. /usr — programas instalados."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Diretórios importantes",
        "items": [
          "/bin — comandos básicos",
          "/etc — configuração",
          "/home — usuários",
          "/var — dados variáveis"
        ]
      },
      {
        "title": "Navegação",
        "items": [
          "cd /caminho – muda de direção",
          "ls -la — lista detalhada",
          "pwd - onde eles estão",
          ". (atual) .. (pai)"
        ]
      },
      {
        "title": "Gerenciamento de arquivos",
        "items": [
          "cp, mv, rm — copiar, mover, remover",
          "mkdir -p — cria diretórios",
          "touch – cria arquivo vazio",
          "Globulação: * ? [abc]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ls/",
      "output": "bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var"
    }
  },
  "3-1": {
    "comic": {
      "title": "Comprimir e arquivar! 📦",
      "panels": [
        {
          "emoji": "🗜️",
          "text": "tar = Arquivo de fita. Agrupe vários arquivos em um arquivo!"
        },
        {
          "emoji": "💨",
          "text": "gzip → .gz (rápido). bzip2 → .bz2 (compacta mais). xz → .xz (comprime melhor!)"
        },
        {
          "emoji": "📋",
          "text": "tar -czf = Criar + gzip + Arquivo. O trio mágico!"
        },
        {
          "emoji": "📂",
          "text": "tar -xzf = extrair + gzip + arquivo. Descompacte tudo!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Algoritmos",
        "items": [
          "gzip (.gz) — rápido, bom",
          "bzip2 (.bz2) — mais lento, melhor",
          "xz (.xz) — muito lento, excelente"
        ]
      },
      {
        "title": "Comandos tar",
        "items": [
          "tar -czf arch.tar.gz diretório/",
          "tar -cjf arch.tar.bz2 diretório/",
          "tar -xzf arch.tar.gz",
          "tar -tf arch.tar.gz (lista)"
        ]
      },
      {
        "title": "Arquivos únicos",
        "items": [
          "arquivo gzip → arquivo.gz",
          "arquivo gunzip.gz → arquivo",
          "bzip2 / bunzip2",
          "xz / unxz"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ tar -czf backup.tar.gz /home/user/docs/",
      "output": ""
    }
  },
  "3-2": {
    "comic": {
      "title": "Pipes e redirecionamentos: o fluxo de dados 🔀",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "stdin (0) = entrada. saída padrão (1) = saída. stderr (2) = erros."
        },
        {
          "emoji": "➡️",
          "text": "> grava em um arquivo (sobrescreve). >> trava no final."
        },
        {
          "emoji": "🔗",
          "text": "| (pipe) conecta a saída de um comando à entrada do próximo!"
        },
        {
          "emoji": "🔇",
          "text": "2>/dev/null — envia erros para o “buraco negro” do Linux!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Descritores de arquivos",
        "items": [
          "0 = stdin (teclado)",
          "1 = saída padrão (tela)",
          "2 = stderr (erros)"
        ]
      },
      {
        "title": "Redirecionar",
        "items": [
          "> arquivo (sobrescrever)",
          ">> arquivo (anexar)",
          "2> erros.log",
          "&> all.log (stdout + stderr)"
        ]
      },
      {
        "title": "Tubulações e Comandos",
        "items": [
          "cmd1 | cmd2 (tubo)",
          "arquivo tee (divisor T)",
          "xargs (stdin → argumentos)",
          "cmd1 && cmd2 (se estiver ok)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gato /var/log/syslog | erro grep | wc-l",
      "output": "42"
    }
  },
  "3-3": {
    "comic": {
      "title": "Grep e os super-heróis do texto 🦸",
      "panels": [
        {
          "emoji": "🔎",
          "text": "grep procura padrões no texto. O detetive da linha de comando!"
        },
        {
          "emoji": "✂️",
          "text": "cortar colunas de cortes. classificar classificar. uniq remove duplicatas."
        },
        {
          "emoji": "📊",
          "text": "wc conta linhas (-l), palavras (-w), caracteres (-c)."
        },
        {
          "emoji": "🌟",
          "text": "Regex: ^ início da linha, $ fim, . qualquer, * repetir, [abc] definido."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "grep",
        "items": [
          "arquivo de padrão grep",
          "grep -i (não diferencia maiúsculas de minúsculas)",
          "grep -r (recursivo)",
          "grep -v (correspondência reversa)"
        ]
      },
      {
        "title": "Manuseio",
        "items": [
          "cortar -d: -f1 (campo 1)",
          "classificar -n (numérico)",
          "uniq -c (contagem)",
          "cabeça/cauda -n 5"
        ]
      },
      {
        "title": "Regex Básico",
        "items": [
          "^ início da linha",
          "$ fim da linha",
          ". qualquer caractere",
          "* zero ou mais",
          "intervalo [a-z]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep -i \"erro\" /var/log/syslog | cauda -5",
      "output": "Mar 5 10:23:01 pc kernel: [error] disk I/O\nMar 5 10:25:33 pc nginx: error connecting"
    }
  },
  "3-4": {
    "comic": {
      "title": "Script Bash: Automatize tudo! 🤖",
      "panels": [
        {
          "emoji": "📜",
          "text": "#!/bin/bash — a coisa toda! Diz ao sistema: \"Use bash para este script!\""
        },
        {
          "emoji": "🔄",
          "text": "for, while, if/then/else — as construções para controlar o fluxo."
        },
        {
          "emoji": "📥",
          "text": "$1 = primeiro argumento, $# = quantos, $@ = todos. O poder dos parâmetros!"
        },
        {
          "emoji": "✅",
          "text": "saída 0 = sucesso. saída 1 = erro. Cada comando tem um código de saída!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Estrutura do roteiro",
        "items": [
          "#!/bin/bash (shebang)",
          "chmod +x script.sh",
          "./script.sh para executar"
        ]
      },
      {
        "title": "Variáveis ​​Especiais",
        "items": [
          "$0 – nome do script",
          "$1, $2... — argumentos",
          "$# — número de argumentos",
          "$? — código de saída último cmd"
        ]
      },
      {
        "title": "Construções",
        "items": [
          "se [cond]; então...fi",
          "para eu na lista; fazer...feito",
          "enquanto [cond]; fazer...feito",
          "case $var no padrão)...esac"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gato olá.sh",
      "output": "#!/bin/bash\necho \"Ciao, $1!\"\necho \"Oggi è $(date)\"\nexit 0"
    }
  },
  "4-1": {
    "comic": {
      "title": "Onde o Linux é executado? Em todos os lugares! 🌐",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "Desktop: Ubuntu, Fedora, Mint — Linux para todos!"
        },
        {
          "emoji": "🏢",
          "text": "Empresarial: RHEL, SLES — suporte, certificações, SLAs!"
        },
        {
          "emoji": "☁️",
          "text": "Nuvem: 90% dos servidores web rodam Linux. AWS, Azure, GCP adoram!"
        },
        {
          "emoji": "📱",
          "text": "Móvel e IoT: Android = Linux! Smart TVs, carros, drones... tudo Linux!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Desktop vs Servidor",
        "items": [
          "Desktop: GUI, multimídia",
          "Servidor: sem cabeça, serviços 24 horas por dia, 7 dias por semana",
          "Empresa: suporte LTS"
        ]
      },
      {
        "title": "Nuvem e Virtualização",
        "items": [
          "KVM/QEMU — virtualização",
          "Docker – contêineres",
          "Kubernetes – orquestração",
          "IaaS, PaaS, SaaS"
        ]
      },
      {
        "title": "Certificações",
        "items": [
          "Fundamentos do LPI Linux",
          "LPIC-1 (base administrativa)",
          "LPIC-2 (administrador avançado)",
          "RHCSA, RHCE (Chapéu Vermelho)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ unome -a",
      "output": "Linux server01 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
    }
  },
  "4-2": {
    "comic": {
      "title": "Hardware: Ferro no Linux ⚙️",
      "panels": [
        {
          "emoji": "🧠",
          "text": "CPU, RAM, disco, placa de rede — o Linux vê tudo em /proc e /sys!"
        },
        {
          "emoji": "💽",
          "text": "HDD = mecânico, lento. SSD = flash, rápido. NVMe = super rápido!"
        },
        {
          "emoji": "🔒",
          "text": "RAID 0 = velocidade. RAID 1 = segurança. RAID 5 = equilíbrio."
        },
        {
          "emoji": "🖨️",
          "text": "Periféricos hot-plug: USB, Thunderbolt. O kernel os reconhece imediatamente!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Componentes",
        "items": [
          "CPU: lscpu",
          "RAM: grátis -h",
          "Disco: lsblk, df -h",
          "PCI: lspci, USB: lsusb"
        ]
      },
      {
        "title": "Armazenar",
        "items": [
          "HDD – pratos magnéticos",
          "SSD – memória flash NAND",
          "NVMe – barramento PCIe direto",
          "RAID — redundância/desempenho"
        ]
      },
      {
        "title": "Níveis de RAID",
        "items": [
          "RAID 0 — stripe (sem backup)",
          "RAID 1 — espelho (cópia)",
          "RAID 5 — faixa + paridade",
          "RAID 10 — espelho + faixa"
        ]
      }
    ],
    "terminal": {
      "prompt": "$lsblk",
      "output": "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 238.5G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n└─sda2   8:2    0   238G  0 part /"
    }
  },
  "4-3": {
    "comic": {
      "title": "Kernels, Processos e Demônios 👻",
      "panels": [
        {
          "emoji": "🎯",
          "text": "O kernel é o coração do Linux. Gerencia CPU, RAM, E/S e rede."
        },
        {
          "emoji": "🌱",
          "text": "systemd = PID 1, o pai de todos os processos. Gerencia a inicialização!"
        },
        {
          "emoji": "👻",
          "text": "Demônios = processos em segundo plano. Terminando com “d”: sshd, httpd, crond."
        },
        {
          "emoji": "💀",
          "text": "kill -9 PID = a arma definitiva! Encerre qualquer processo."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Inicialização e kernel",
        "items": [
          "BIOS/UEFI → carregador de inicialização",
          "GRUB → carregar o kernel",
          "Kernel → montar raiz",
          "systemd → iniciar serviços"
        ]
      },
      {
        "title": "Processos",
        "items": [
          "ps aux – lista de processos",
          "top/htop — monitor em tempo real",
          "bg/fg — plano de fundo/primeiro plano",
          "& - comece em segundo plano"
        ]
      },
      {
        "title": "Sinais",
        "items": [
          "SIGTERM (15) – termina limpo",
          "SIGKILL (9) – finalização forçada",
          "SIGHUP (1) – recarregar configuração",
          "SIGSTOP (19) – suspender"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ps aux | cabeça -5",
      "output": "USER  PID %CPU %MEM  COMMAND\nroot    1  0.0  0.1  /sbin/init\nroot    2  0.0  0.0  [kthreadd]\nuser 1234  1.2  2.3  /usr/bin/firefox"
    }
  },
  "4-4": {
    "comic": {
      "title": "Rede: Linux na Net 🌐",
      "panels": [
        {
          "emoji": "📡",
          "text": "IP, máscara de sub-rede, gateway — as coordenadas da sua máquina na rede!"
        },
        {
          "emoji": "🔤",
          "text": "DNS traduz nomes em IPs. google.com → 142.250.180.14"
        },
        {
          "emoji": "🔐",
          "text": "SSH (porta 22) = acesso remoto seguro. A porta da frente do administrador de sistema!"
        },
        {
          "emoji": "🌐",
          "text": "HTTP(80), HTTPS(443), FTP(21), SMTP(25) — as portas que executam a Internet!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Configuração",
        "items": [
          "endereço IP – mostra IP",
          "rota ip — mostra rota",
          "/etc/resolv.conf — DNS",
          "/etc/hosts — nomes locais"
        ]
      },
      {
        "title": "IPs privados",
        "items": [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "IPv6: fc00::/7 (ULA)"
        ]
      },
      {
        "title": "Portas Comuns",
        "items": [
          "22 – SSH",
          "80 – HTTP",
          "443 – HTTPS",
          "53 – DNS"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ endereço IP mostrar eth0",
      "output": "inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ninet6 fe80::1/64 scope link"
    }
  },
  "5-1": {
    "comic": {
      "title": "Root: o super-herói do Linux 🦸",
      "panels": [
        {
          "emoji": "👑",
          "text": "root = UID 0. Pode fazer TUDO. Com grandes poderes, grandes responsabilidades!"
        },
        {
          "emoji": "🔑",
          "text": "sudo = \"Superusuário DO\". Execute um comando como root com SUA senha."
        },
        {
          "emoji": "⚠️",
          "text": "Nunca trabalhe como root o tempo todo! Use sudo somente quando necessário."
        },
        {
          "emoji": "📋",
          "text": "/etc/sudoers define quem pode usar o sudo e para quais comandos."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Usuários",
        "items": [
          "root = UID 0 (superusuário)",
          "Usuários normais: UID ≥ 1000",
          "Usuários do sistema: UID 1-999",
          "ninguém = UID 65534"
        ]
      },
      {
        "title": "Comandos",
        "items": [
          "up - (trocar usuário)",
          "Comando sudo (executar como root)",
          "uau (quem sou eu?)",
          "id (UID, GID, grupos)"
        ]
      },
      {
        "title": "Segurança",
        "items": [
          "Princípio do menor privilégio",
          "sudo > su (rastreável)",
          "/etc/sudoers (visudo)",
          "Registro: /var/log/auth.log"
        ]
      }
    ],
    "terminal": {
      "prompt": "$id",
      "output": "uid=1000(studente) gid=1000(studente) groups=1000(studente),27(sudo),100(users)"
    }
  },
  "5-2": {
    "comic": {
      "title": "Usuários e Grupos: o Registro Linux 👥",
      "panels": [
        {
          "emoji": "📒",
          "text": "/etc/passwd — o registro de todos os usuários. Nome, UID, casa, shell."
        },
        {
          "emoji": "🔒",
          "text": "/etc/shadow — senhas criptografadas. Somente o root pode lê-lo!"
        },
        {
          "emoji": "👥",
          "text": "/etc/group — os grupos. Cada usuário possui um grupo principal e pode fazer parte de outros."
        },
        {
          "emoji": "🛠️",
          "text": "useradd, usermod, userdel — as ferramentas para gerenciar o registro!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Arquivo-chave",
        "items": [
          "/etc/passwd — informações do usuário",
          "/etc/shadow — senha com hash",
          "/etc/group — grupos",
          "/etc/skel — página inicial do modelo"
        ]
      },
      {
        "title": "Gerenciamento de usuários",
        "items": [
          "useradd -m usuário (criar)",
          "usermod -aG grupo de usuários",
          "userdel -r usuário (excluir)",
          "senha do usuário (senha)"
        ]
      },
      {
        "title": "Formato de senha",
        "items": [
          "usuário:x:UID:GID:info:home:shell",
          "x → senha sombra",
          "UID 0 → raiz",
          "/sbin/nologin → sem login"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep estudante /etc/passwd",
      "output": "studente:x:1000:1000:Studente Linux:/home/studente:/bin/bash"
    }
  },
  "5-3": {
    "comic": {
      "title": "Permissões: quem pode fazer o quê? 🔐",
      "panels": [
        {
          "emoji": "📊",
          "text": "r=ler(4) w=escrever(2) x=executar(1). Três conjuntos: Proprietário, Grupo, Outros."
        },
        {
          "emoji": "🔢",
          "text": "chmod 755 = rwxr-xr-x. O dono faz tudo, os outros leem."
        },
        {
          "emoji": "✏️",
          "text": "chmod u+x = adiciona execução ao proprietário. Notação simbólica!"
        },
        {
          "emoji": "⚡",
          "text": "SUID, SGID, Sticky Bit — permissões especiais para casos especiais!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Permissões básicas",
        "items": [
          "r (ler) = 4",
          "w (escrever) = 2",
          "x (executar) = 1",
          "--- = 0, rwx = 7"
        ]
      },
      {
        "title": "Comandos",
        "items": [
          "arquivo chmod 644 (octal)",
          "arquivo chmod u+x (simbólico)",
          "usuário chown: arquivo de grupo",
          "grupo de arquivos chgrp"
        ]
      },
      {
        "title": "Especiais",
        "items": [
          "SUID (4xxx) — executado como proprietário",
          "SGID (2xxx) — grupo herdado",
          "Fixo (1xxx) — protege /tmp",
          "umask 022 – padrão 755"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ls -la /etc/passwd /tmp",
      "output": "-rw-r--r-- 1 root root 2847 /etc/passwd\ndrwxrwxrwt 15 root root 4096 /tmp"
    }
  },
  "5-4": {
    "comic": {
      "title": "Link: Atalhos no sistema de arquivos 🔗",
      "panels": [
        {
          "emoji": "🔗",
          "text": "Hard link: dois nomes para o mesmo arquivo (inode). Indistinguível!"
        },
        {
          "emoji": "➡️",
          "text": "Link simbólico: um atalho. Aponta para um caminho, não para um inode."
        },
        {
          "emoji": "💔",
          "text": "Se você excluir o alvo de um link simbólico, ele ficará \"quebrado\". O link físico sobrevive!"
        },
        {
          "emoji": "📁",
          "text": "Links simbólicos podem atravessar sistemas de arquivos. Links físicos não são."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Links físicos",
        "items": [
          "No arquivo hardlink",
          "Mesmo inode",
          "Não atravessa sistemas de arquivos",
          "Nenhum link de diretório"
        ]
      },
      {
        "title": "Links Simbólicos",
        "items": [
          "ln -s link simbólico de destino",
          "Inode diferente",
          "Atravessar sistema de arquivos",
          "Pode vincular diretórios"
        ]
      },
      {
        "title": "Comparação",
        "items": [
          "Difícil: robusto, limitado",
          "Sym: flexível, frágil",
          "ls -li mostra o inode",
          "readlink mostrar alvo"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ln -s /etc/passwd link_passwd && ls -l link_passwd",
      "output": "lrwxrwxrwx 1 user user 11 link_passwd -> /etc/passwd"
    }
  }
};
