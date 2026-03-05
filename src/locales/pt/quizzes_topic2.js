export const topic2Quizzes = [
  {
    "lessonId": "2-1",
    "question": "Qual shell é o padrão na maioria das distribuições Linux?",
    "options": [
      "zsh",
      "peixe",
      "festa",
      "csh"
    ],
    "correct": 2,
    "explanation": "Bash (Bourne Again Shell) é o shell padrão na maioria das distribuições Linux."
  },
  {
    "lessonId": "2-1",
    "question": "Qual símbolo indica um usuário root no prompt?",
    "options": [
      "$",
      "#",
      "@",
      "!"
    ],
    "correct": 1,
    "explanation": "O símbolo # indica o usuário root, enquanto $ indica um usuário normal."
  },
  {
    "lessonId": "2-1",
    "question": "O que a citação faz com aspas duplas (\")?",
    "options": [
      "Impede qualquer expansão",
      "Permite expansão variável, mas não globbing",
      "Não tem efeito",
      "Execute o conteúdo como um comando"
    ],
    "correct": 1,
    "explanation": "As aspas duplas permitem a expansão de variáveis ​​($VAR), mas evitam o globbing (* e ?)."
  },
  {
    "lessonId": "2-1",
    "question": "Aspas simples (') no bash:",
    "options": [
      "Eles expandem as variáveis",
      "Eles tratam tudo como texto literal",
      "Eles executam comandos",
      "Eles são equivalentes a duplos"
    ],
    "correct": 1,
    "explanation": "Aspas simples tratam todo o conteúdo como texto literal, sem expansão."
  },
  {
    "lessonId": "2-1",
    "question": "Qual personagem permite escapar de um único personagem?",
    "options": [
      "/",
      "~",
      "\\",
      "!"
    ],
    "correct": 2,
    "explanation": "A barra invertida (\\) escapa do próximo caractere."
  },
  {
    "lessonId": "2-1",
    "question": "O comando \"type\" no bash mostra:",
    "options": [
      "O tipo de arquivo",
      "Como um comando é interpretado",
      "O tipo de sistema de arquivos",
      "Os tipos de usuários"
    ],
    "correct": 1,
    "explanation": "type mostra se um comando é um programa interno, alias, função ou externo."
  },
  {
    "lessonId": "2-1",
    "question": "Qual comando mostra o usuário atual?",
    "options": [
      "Quem",
      "uau",
      "eu ia",
      "Usuários"
    ],
    "correct": 1,
    "explanation": "whoami imprime o nome do usuário atual."
  },
  {
    "lessonId": "2-1",
    "question": "Qual arquivo define o shell padrão de um usuário?",
    "options": [
      "/etc/conchas",
      "/etc/senha",
      "/etc/bashrc",
      "/etc/perfil"
    ],
    "correct": 1,
    "explanation": "O último campo de /etc/passwd especifica o shell padrão do usuário."
  },
  {
    "lessonId": "2-1",
    "question": "O que “echo $SHELL” imprime?",
    "options": [
      "A concha atual",
      "O shell de login padrão",
      "Todos os shells instalados",
      "A versão bash"
    ],
    "correct": 1,
    "explanation": "$SHELL contém o caminho para o shell de login padrão do usuário."
  },
  {
    "lessonId": "2-1",
    "question": "Qual comando exibe informações sobre o sistema operacional?",
    "options": [
      "sem nome -a",
      "os-info",
      "informações do sistema",
      "informações do host"
    ],
    "correct": 0,
    "explanation": "uname -a exibe kernel, nome do host, arquitetura e outras informações do sistema."
  },
  {
    "lessonId": "2-1",
    "question": "A substituição de comando $(command) é equivalente a:",
    "options": [
      "$(comando)",
      "\"comando\"",
      "`comando`",
      "{comando}"
    ],
    "correct": 2,
    "explanation": "Os crases `command` e $(command) são equivalentes para substituição de comando."
  },
  {
    "lessonId": "2-1",
    "question": "Qual chave permite o preenchimento automático no bash?",
    "options": [
      "Digitar",
      "Guia",
      "Ctrl+C",
      "Esc"
    ],
    "correct": 1,
    "explanation": "A tecla Tab permite o preenchimento automático de comandos, arquivos e diretórios."
  },
  {
    "lessonId": "2-2",
    "question": "Qual comando exibe o valor da variável PATH?",
    "options": [
      "mostrar CAMINHO",
      "echo $PATH",
      "imprimir CAMINHO",
      "CAMINHO do gato"
    ],
    "correct": 1,
    "explanation": "echo $PATH imprime o valor da variável de ambiente PATH."
  },
  {
    "lessonId": "2-2",
    "question": "Qual comando disponibiliza uma variável local para processos filhos?",
    "options": [
      "compartilhar",
      "exportar",
      "definir",
      "empurrar"
    ],
    "correct": 1,
    "explanation": "export disponibiliza uma variável local como uma variável de ambiente para processos filhos."
  },
  {
    "lessonId": "2-2",
    "question": "Como você atribui um valor a uma variável no bash?",
    "options": [
      "NOME = \"valor\"",
      "NOME=\"valor\"",
      "definir NOME = \"valor\"",
      "deixe NOME = \"valor\""
    ],
    "correct": 1,
    "explanation": "Nas atribuições do bash NÃO devem ter espaços iguais: NOME = \"valor\"."
  },
  {
    "lessonId": "2-2",
    "question": "A variável HOME contém:",
    "options": [
      "O diretório raiz /",
      "O diretório inicial do usuário",
      "O caminho para bater",
      "O nome do host"
    ],
    "correct": 1,
    "explanation": "$HOME contém o caminho para o diretório pessoal do usuário (por exemplo, /home/user)."
  },
  {
    "lessonId": "2-2",
    "question": "O comando \"env\" mostra:",
    "options": [
      "Somente variáveis ​​locais",
      "Variáveis ​​de ambiente",
      "Os comandos disponíveis",
      "Variáveis ​​do sistema"
    ],
    "correct": 1,
    "explanation": "env mostra todas as variáveis ​​de ambiente exportadas."
  },
  {
    "lessonId": "2-2",
    "question": "Qual arquivo é lido ao iniciar uma sessão interativa do bash?",
    "options": [
      "/etc/senha",
      "~/.bashrc",
      "/etc/motd",
      "~/.bash_logout"
    ],
    "correct": 1,
    "explanation": "~/.bashrc é lido toda vez que um shell bash interativo sem login é aberto."
  },
  {
    "lessonId": "2-2",
    "question": "Como você exclui uma variável?",
    "options": [
      "excluir VAR",
      "remover VAR",
      "cancelar VAR",
      "limpar VAR"
    ],
    "correct": 2,
    "explanation": "unset VAR remove a variável do ambiente shell."
  },
  {
    "lessonId": "2-2",
    "question": "A variável LANG define:",
    "options": [
      "A linguagem de programação",
      "O idioma e localização do sistema",
      "O layout do teclado",
      "A rede LAN"
    ],
    "correct": 1,
    "explanation": "LANG define o idioma e a localização do sistema (por exemplo, it_IT.UTF-8)."
  },
  {
    "lessonId": "2-2",
    "question": "PATH contém:",
    "options": [
      "Arquivos recentes",
      "Os diretórios onde procurar comandos",
      "Senhas",
      "Os caminhos da rede"
    ],
    "correct": 1,
    "explanation": "PATH é uma lista de diretórios separados por: onde o shell procura executáveis."
  },
  {
    "lessonId": "2-2",
    "question": "Qual arquivo é lido para TODOS os usuários no login?",
    "options": [
      "~/.bashrc",
      "~/.profile",
      "/etc/perfil",
      "/etc/bashrc"
    ],
    "correct": 2,
    "explanation": "/etc/profile é o arquivo de perfil global lido no login para todos os usuários."
  },
  {
    "lessonId": "2-2",
    "question": "eco $? mostrar:",
    "options": [
      "O PID atual",
      "O código de saída do último comando",
      "O usuário atual",
      "O diretório atual"
    ],
    "correct": 1,
    "explanation": "$? contém o código de saída do último comando executado (0 = sucesso)."
  },
  {
    "lessonId": "2-3",
    "question": "Qual comando mostra um manual de comando do Linux?",
    "options": [
      "comando de ajuda",
      "comando do homem",
      "informações de comando",
      "--ajuda comando"
    ],
    "correct": 1,
    "explanation": "man (manual) exibe a página de manual completa de um comando."
  },
  {
    "lessonId": "2-3",
    "question": "Qual comando procura um arquivo no sistema de arquivos por nome?",
    "options": [
      "procurar",
      "grep",
      "encontrar",
      "visual"
    ],
    "correct": 2,
    "explanation": "find procura por arquivos e diretórios no sistema de arquivos. Ex: find / -name \"arquivo.txt\""
  },
  {
    "lessonId": "2-3",
    "question": "A seção 1 do homem contém:",
    "options": [
      "Arquivos de configuração",
      "Comandos do usuário",
      "Chamadas do sistema",
      "Comandos de administrador"
    ],
    "correct": 1,
    "explanation": "Seção 1 = comandos do usuário. 5 = formatos de arquivo. 8 = comandos administrativos."
  },
  {
    "lessonId": "2-3",
    "question": "O comando \"apropos\" faz:",
    "options": [
      "Pesquise páginas de manual por palavra-chave",
      "Instalar pacotes",
      "Mostrar versão",
      "Listar usuários"
    ],
    "correct": 0,
    "explanation": "apropos pesquisa descrições de páginas de manual. Equivalente a man -k."
  },
  {
    "lessonId": "2-3",
    "question": "Qual comando mostra onde um executável está localizado?",
    "options": [
      "encontrar",
      "localizar",
      "qual",
      "onde"
    ],
    "correct": 2,
    "explanation": "que mostra o caminho para o executável que seria executado (procure no PATH)."
  },
  {
    "lessonId": "2-3",
    "question": "\"locate\" é mais rápido que \"find\" porque:",
    "options": [
      "Use menos RAM",
      "Use um banco de dados pré-preenchido",
      "Está escrito em C",
      "É um recurso embutido"
    ],
    "correct": 1,
    "explanation": "localizar pesquisa um banco de dados atualizado por atualizadob, por isso é muito rápido."
  },
  {
    "lessonId": "2-3",
    "question": "A seção 5 do homem contém:",
    "options": [
      "Comandos do usuário",
      "Jogos",
      "Formatos de arquivo e configuração",
      "Comandos de administrador"
    ],
    "correct": 2,
    "explanation": "A Seção 5 documenta formatos de arquivo e arquivos de configuração."
  },
  {
    "lessonId": "2-3",
    "question": "encontrar /home -type f -name \"*.txt\" pesquisar:",
    "options": [
      "Diretórios .txt",
      "Arquivo .txt na página inicial",
      "Link .txt",
      "Processos txt"
    ],
    "correct": 1,
    "explanation": "-type f = arquivos normais, -name \"*.txt\" = nome terminando em .txt."
  },
  {
    "lessonId": "2-3",
    "question": "Qual opção de comando mostra uma ajuda curta?",
    "options": [
      "--homem",
      "--informações",
      "--ajuda",
      "--doc"
    ],
    "correct": 2,
    "explanation": "Quase todos os comandos suportam --help para ajuda concisa."
  },
  {
    "lessonId": "2-3",
    "question": "O comando \"whatis\" mostra:",
    "options": [
      "Tipo de arquivo",
      "Breve descrição do comando",
      "Versão do sistema",
      "Diretório atual"
    ],
    "correct": 1,
    "explanation": "whatis exibe a linha de descrição da página man para um comando."
  },
  {
    "lessonId": "2-4",
    "question": "Em qual diretório estão localizados os arquivos de configuração do sistema?",
    "options": [
      "/bin",
      "/etc",
      "/var",
      "/optar"
    ],
    "correct": 1,
    "explanation": "/etc contém arquivos de configuração do sistema."
  },
  {
    "lessonId": "2-4",
    "question": "Qual comando cria um diretório incluindo diretórios pais ausentes?",
    "options": [
      "mkdir-f",
      "mkdir -r",
      "mkdir-p",
      "mkdir -a"
    ],
    "correct": 2,
    "explanation": "mkdir -p cria o diretório e quaisquer diretórios pais necessários."
  },
  {
    "lessonId": "2-4",
    "question": "Qual padrão glob corresponde a qualquer caractere?",
    "options": [
      "*",
      "?",
      "[]",
      "#"
    ],
    "correct": 1,
    "explanation": "? corresponde exatamente a um único caractere. * corresponde a zero ou mais caracteres."
  },
  {
    "lessonId": "2-4",
    "question": "O diretório /var contém:",
    "options": [
      "Comandos básicos",
      "Dados variáveis ​​(log, spool, mail)",
      "Configuração",
      "Núcleo"
    ],
    "correct": 1,
    "explanation": "/var contém dados que mudam durante a operação: log, cache, mail."
  },
  {
    "lessonId": "2-4",
    "question": "O comando \"ls -a\" mostra:",
    "options": [
      "Somente arquivos grandes",
      "Até mesmo arquivos ocultos (começando com .)",
      "Arquivos classificados por data",
      "Somente arquivos executáveis"
    ],
    "correct": 1,
    "explanation": "-a (todos) também mostra arquivos ocultos começando com ponto (.)."
  },
  {
    "lessonId": "2-4",
    "question": "\" . \" (ponto único) em um caminho indica:",
    "options": [
      "A raiz",
      "O diretório atual",
      "A casa",
      "Um arquivo oculto"
    ],
    "correct": 1,
    "explanation": ". representa o diretório atual. .. representa o diretório pai."
  },
  {
    "lessonId": "2-4",
    "question": "Qual diretório contém a página inicial dos usuários?",
    "options": [
      "/raiz",
      "/Usuários",
      "/lar",
      "/usr"
    ],
    "correct": 2,
    "explanation": "/home contém os diretórios iniciais dos usuários normais. /root é a raiz inicial."
  },
  {
    "lessonId": "2-4",
    "question": "O globo [abc] corresponde a:",
    "options": [
      "A string abc",
      "Um único caractere: a, b ou c",
      "Qualquer personagem",
      "Três personagens"
    ],
    "correct": 1,
    "explanation": "[abc] corresponde a um único caractere que é a, b ou c."
  },
  {
    "lessonId": "2-4",
    "question": "toque no nome do arquivo criar:",
    "options": [
      "Um diretório",
      "Um link",
      "Um arquivo vazio (ou carimbo de data/hora de atualização)",
      "Um processo"
    ],
    "correct": 2,
    "explanation": "touch cria um arquivo vazio se ele não existir ou atualiza o carimbo de data/hora se existir."
  },
  {
    "lessonId": "2-4",
    "question": "/tmp é usado para:",
    "options": [
      "Arquivos temporários",
      "Arquivos do sistema",
      "Cópias de segurança",
      "Configuração"
    ],
    "correct": 0,
    "explanation": "/tmp contém arquivos temporários que podem ser excluídos na reinicialização."
  },
  {
    "lessonId": "2-4",
    "question": "cp -r é usado para:",
    "options": [
      "Copiar apenas arquivos",
      "Copiar diretórios recursivamente",
      "Renomear arquivos",
      "Compactar arquivos"
    ],
    "correct": 1,
    "explanation": "cp -r copia recursivamente um diretório e todo o seu conteúdo."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl + C no bash:",
    "options": [
      "Fecha a casca",
      "Interrompe o comando atual (SIGINT)",
      "Copiar texto",
      "Exclua a linha"
    ],
    "correct": 1,
    "explanation": "Ctrl+C envia SIGINT para o processo em primeiro plano, eliminando-o."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl + D no bash significa:",
    "options": [
      "Fim da entrada (EOF)",
      "Cancelamento",
      "Um novo terminal",
      "Conclusão do comando"
    ],
    "correct": 0,
    "explanation": "Ctrl+D envia EOF (End Of File), fechando o shell se não houver entrada."
  },
  {
    "lessonId": "2-2",
    "question": "A variável PS1 controla:",
    "options": [
      "O CAMINHO",
      "O prompt do shell",
      "A senha",
      "Os processos"
    ],
    "correct": 1,
    "explanation": "PS1 define a aparência do prompt do shell (por exemplo, \\u@\\h:\\w$ )."
  },
  {
    "lessonId": "2-3",
    "question": "A palavra-chave man -k é equivalente a:",
    "options": [
      "o que é",
      "a propósito",
      "onde está",
      "qual"
    ],
    "correct": 1,
    "explanation": "man -k e apropos pesquisam descrições de páginas de manual para palavras-chave."
  },
  {
    "lessonId": "2-3",
    "question": "A seção 8 do homem contém:",
    "options": [
      "Comandos do usuário",
      "Chamadas do sistema",
      "Jogos",
      "Comandos administrativos"
    ],
    "correct": 3,
    "explanation": "A seção 8 contém comandos de administração do sistema (por exemplo, mount, useradd)."
  },
  {
    "lessonId": "2-4",
    "question": "/usr contém:",
    "options": [
      "Arquivos pessoais de usuário",
      "Programas e bibliotecas instaladas",
      "Arquivos temporários",
      "Registros do sistema"
    ],
    "correct": 1,
    "explanation": "/usr (Recursos do Sistema Unix) contém programas, bibliotecas e documentação."
  },
  {
    "lessonId": "2-4",
    "question": "/dev contém:",
    "options": [
      "Documentação",
      "Arquivos de dispositivo",
      "Ferramentas de desenvolvimento",
      "Firmware"
    ],
    "correct": 1,
    "explanation": "/dev contém arquivos especiais que representam dispositivos de hardware."
  },
  {
    "lessonId": "2-4",
    "question": "O globo [!abc] corresponde a:",
    "options": [
      "Os caracteres a, b, c",
      "Qualquer caractere EXCETO a, b, c",
      "A string !abc",
      "Nenhum personagem"
    ],
    "correct": 1,
    "explanation": "[!abc] ou [^abc] corresponde a um único caractere que NÃO é a, b ou c."
  },
  {
    "lessonId": "2-4",
    "question": "rm -r é usado para:",
    "options": [
      "Renomear arquivos",
      "Excluir arquivos recursivamente",
      "Restaurar arquivos",
      "Girar registro"
    ],
    "correct": 1,
    "explanation": "rm -r exclui recursivamente diretórios e seu conteúdo."
  },
  {
    "lessonId": "2-4",
    "question": "Qual diretório contém bibliotecas compartilhadas?",
    "options": [
      "/bin",
      "/lib",
      "/etc",
      "/src"
    ],
    "correct": 1,
    "explanation": "/lib e /lib64 contêm as bibliotecas compartilhadas necessárias aos programas."
  }
];
