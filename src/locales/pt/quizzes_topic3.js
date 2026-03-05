export const topic3Quizzes = [
  {
    "lessonId": "3-1",
    "question": "Qual algoritmo de compactação geralmente produz os arquivos menores?",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "comprimido"
    ],
    "correct": 2,
    "explanation": "xz oferece a melhor taxa de compactação, mas também é a mais lenta."
  },
  {
    "lessonId": "3-1",
    "question": "Qual comando cria um arquivo tar compactado?",
    "options": [
      "tar -czf arquivo.tar.gz diretório/",
      "tar -xzf arquivo.tar.gz diretório/",
      "diretório gzip/",
      "zip -r arquivo.tar.gz diretório/"
    ],
    "correct": 0,
    "explanation": "tar -czf: c=criar, z=gzip, f=arquivo."
  },
  {
    "lessonId": "3-1",
    "question": "Qual extensão indica um arquivo compactado com bzip2?",
    "options": [
      ".gz",
      ".bz2",
      ".xz",
      ".zip"
    ],
    "correct": 1,
    "explanation": "bzip2 produz arquivos com extensão .bz2."
  },
  {
    "lessonId": "3-1",
    "question": "O sinalizador -t no tar é usado para:",
    "options": [
      "Criar arquivo",
      "Extrair arquivo",
      "Conteúdo da lista",
      "Testar integridade"
    ],
    "correct": 2,
    "explanation": "tar -tf archive.tar.gz lista o conteúdo sem extrair."
  },
  {
    "lessonId": "3-1",
    "question": "tar -xjf extrai um arquivo compactado com:",
    "options": [
      "gzip",
      "bzip2",
      "xz",
      "lz4"
    ],
    "correct": 1,
    "explanation": "-j indica bzip2. -z indica gzip. -J indica xz."
  },
  {
    "lessonId": "3-1",
    "question": "Qual sinalizador tar indica compactação xz?",
    "options": [
      "-z",
      "-j",
      "-J",
      "-x"
    ],
    "correct": 2,
    "explanation": "-J indica xz. -z indica gzip. -j indica bzip2."
  },
  {
    "lessonId": "3-1",
    "question": "O comando \"gunzip\" é equivalente a:",
    "options": [
      "gzip -d",
      "gzip -c",
      "gzip -r",
      "gzip -l"
    ],
    "correct": 0,
    "explanation": "gunzip e gzip -d descompacte um arquivo .gz."
  },
  {
    "lessonId": "3-1",
    "question": "gzip compacta um arquivo e:",
    "options": [
      "Mantém o original",
      "Substitui o original por .gz",
      "Faça uma cópia",
      "Move para /tmp"
    ],
    "correct": 1,
    "explanation": "gzip substitui o arquivo original pela versão .gz. Use -k para manter o original."
  },
  {
    "lessonId": "3-1",
    "question": "Qual deles é mais rápido na compactação?",
    "options": [
      "xz",
      "bzip2",
      "gzip",
      "lzma"
    ],
    "correct": 2,
    "explanation": "gzip é o mais rápido, mas compacta menos. xz é o mais lento, mas comprime mais."
  },
  {
    "lessonId": "3-1",
    "question": "tar sem compactação produz um arquivo:",
    "options": [
      ".tar.gz",
      ".alcatrão",
      ".gz",
      ".zip"
    ],
    "correct": 1,
    "explanation": "tar sem sinalizadores de compactação (-z/-j/-J) cria um arquivo .tar simples descompactado."
  },
  {
    "lessonId": "3-2",
    "question": "Qual operador redireciona o stdout sobrescrevendo o arquivo?",
    "options": [
      ">>",
      ">",
      "<",
      "|"
    ],
    "correct": 1,
    "explanation": "> redireciona stdout para um arquivo, sobrescrevendo-o. >> trava."
  },
  {
    "lessonId": "3-2",
    "question": "Qual operador redireciona stderr?",
    "options": [
      "1>",
      "2>",
      "0>",
      "3>"
    ],
    "correct": 1,
    "explanation": "2> redireciona stderr (descritor de arquivo 2)."
  },
  {
    "lessonId": "3-2",
    "question": "O que o tubo (|) faz?",
    "options": [
      "Grava em um arquivo",
      "Conecta o stdout de um comando ao stdin do próximo",
      "Executa dois comandos em paralelo",
      "Crie um link simbólico"
    ],
    "correct": 1,
    "explanation": "O pipe (|) passa a saída de um comando como entrada para o próximo comando."
  },
  {
    "lessonId": "3-2",
    "question": ">> ao contrário > faz:",
    "options": [
      "Substituições",
      "Acrescenta ao arquivo",
      "Lê do arquivo",
      "Exclua o arquivo"
    ],
    "correct": 1,
    "explanation": ">> acrescenta ao final do arquivo sem substituir o conteúdo existente."
  },
  {
    "lessonId": "3-2",
    "question": "/dev/nulo é:",
    "options": [
      "Um disco virtual",
      "Um “buraco negro” que descarta tudo",
      "Um arquivo de registro",
      "Um diretório temporário"
    ],
    "correct": 1,
    "explanation": "/dev/null descarta quaisquer dados gravados. Útil para eliminar saídas indesejadas."
  },
  {
    "lessonId": "3-2",
    "question": "<redirecionamentos:",
    "options": [
      "stdin de um arquivo",
      "stdout para um arquivo",
      "stderr para um arquivo",
      "Ninguém"
    ],
    "correct": 0,
    "explanation": "<redirecionar stdin: o comando lê a entrada do arquivo especificado."
  },
  {
    "lessonId": "3-2",
    "question": "O comando \"tee\" faz:",
    "options": [
      "Lê dois arquivos",
      "Grava stdout na tela e em um arquivo",
      "Divide um arquivo em dois",
      "Mescla dois arquivos"
    ],
    "correct": 1,
    "explanation": "tee é um \"divisor T\": ele exibe a saída na tela e a salva em um arquivo ao mesmo tempo."
  },
  {
    "lessonId": "3-2",
    "question": "&> redirecionamentos:",
    "options": [
      "Somente saída padrão",
      "Apenas Stderr",
      "Tanto stdout quanto stderr",
      "O plano de fundo"
    ],
    "correct": 2,
    "explanation": "&> redireciona stdout (1) e stderr (2) para o mesmo arquivo."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 && cmd2 executa cmd2 somente se:",
    "options": [
      "cmd1 falha",
      "cmd1 foi bem-sucedido (saída 0)",
      "Sempre",
      "Nunca"
    ],
    "correct": 1,
    "explanation": "&& executa o segundo comando somente se o primeiro tiver código de saída 0 (sucesso)."
  },
  {
    "lessonId": "3-2",
    "question": "cmd1 || cmd2 executa cmd2 somente se:",
    "options": [
      "cmd1 foi bem-sucedido",
      "cmd1 falha",
      "Sempre",
      "cmd1 não existe"
    ],
    "correct": 1,
    "explanation": "|| executa o segundo comando somente se o primeiro falhar (código de saída ≠ 0)."
  },
  {
    "lessonId": "3-2",
    "question": "xargs converte:",
    "options": [
      "Arquivos em diretórios",
      "stdin em argumentos de linha de comando",
      "Texto em números",
      "Comandos com script"
    ],
    "correct": 1,
    "explanation": "xargs lê stdin e constrói argumentos para outro comando."
  },
  {
    "lessonId": "3-2",
    "question": "O descritor de arquivo 0 representa:",
    "options": [
      "saída padrão",
      "stderr",
      "stdin",
      "arquivos do sistema"
    ],
    "correct": 2,
    "explanation": "0 = stdin (teclado), 1 = stdout (tela), 2 = stderr (erros)."
  },
  {
    "lessonId": "3-3",
    "question": "Qual opção grep executa uma pesquisa que não diferencia maiúsculas de minúsculas?",
    "options": [
      "-r",
      "-o",
      "-v",
      "-c"
    ],
    "correct": 1,
    "explanation": "grep -i ignora a distinção entre maiúsculas e minúsculas."
  },
  {
    "lessonId": "3-3",
    "question": "Na regex, o que significa o curinga \".\" significar? ?",
    "options": [
      "Fim da linha",
      "Um ponto literal",
      "Qualquer caractere único",
      "Início da linha"
    ],
    "correct": 2,
    "explanation": "O ponto final (.) em regexes corresponde a qualquer caractere único."
  },
  {
    "lessonId": "3-3",
    "question": "grep -v mostra:",
    "options": [
      "Somente a primeira linha",
      "As linhas que NÃO correspondem ao padrão",
      "O número de ocorrências",
      "Arquivos binários"
    ],
    "correct": 1,
    "explanation": "-v (inverter) mostra linhas que não correspondem ao padrão."
  },
  {
    "lessonId": "3-3",
    "question": "Na regex, ^ significa:",
    "options": [
      "Fim da linha",
      "Qualquer personagem",
      "Início da linha",
      "Negação"
    ],
    "correct": 2,
    "explanation": "^ (caret) indica o início da linha em uma expressão regular."
  },
  {
    "lessonId": "3-3",
    "question": "$ em uma regex significa:",
    "options": [
      "Variável",
      "Fim da linha",
      "Início da linha",
      "Dólar literal"
    ],
    "correct": 1,
    "explanation": "$ indica o fim da linha em expressões regulares."
  },
  {
    "lessonId": "3-3",
    "question": "cut -d: -f1 /etc/passwd extrai:",
    "options": [
      "O arquivo inteiro",
      "O primeiro campo (nome de usuário)",
      "A última linha",
      "A primeira linha"
    ],
    "correct": 1,
    "explanation": "-d: use: como delimitador, -f1 seleciona o primeiro campo."
  },
  {
    "lessonId": "3-3",
    "question": "O comando \"sort -n\" classifica:",
    "options": [
      "Alfabeticamente",
      "Numericamente",
      "Por data",
      "Coincidentemente"
    ],
    "correct": 1,
    "explanation": "-n classifica por valor numérico, não alfabético."
  },
  {
    "lessonId": "3-3",
    "question": "uniq funciona corretamente apenas em:",
    "options": [
      "Arquivos grandes",
      "Linhas já classificadas",
      "Arquivos binários",
      "Qualquer arquivo"
    ],
    "correct": 1,
    "explanation": "uniq remove duplicatas apenas se forem adjacentes. Use classificação antes de uniq."
  },
  {
    "lessonId": "3-3",
    "question": "wc -l conta:",
    "options": [
      "As palavras",
      "Os personagens",
      "As linhas",
      "Os arquivos"
    ],
    "correct": 2,
    "explanation": "wc -l conta linhas. -w conta palavras, -c conta bytes."
  },
  {
    "lessonId": "3-3",
    "question": "head -n 5 mostra:",
    "options": [
      "As últimas 5 linhas",
      "As primeiras 5 linhas",
      "5 linhas aleatórias",
      "A cada 5 linhas"
    ],
    "correct": 1,
    "explanation": "head -n 5 mostra as 5 primeiras linhas de um arquivo ou entrada."
  },
  {
    "lessonId": "3-3",
    "question": "grep -r pesquisa:",
    "options": [
      "Somente no arquivo especificado",
      "Recursivamente em diretórios",
      "Somente em arquivos .txt",
      "Em variáveis"
    ],
    "correct": 1,
    "explanation": "-r (recursivo) procura o padrão em todos os arquivos dos diretórios."
  },
  {
    "lessonId": "3-3",
    "question": "sed é um editor de:",
    "options": [
      "Arquivos binários",
      "Fluxo de texto (não interativo)",
      "Imagens",
      "Bancos de dados"
    ],
    "correct": 1,
    "explanation": "sed (Stream EDitor) edita texto de forma não interativa."
  },
  {
    "lessonId": "3-4",
    "question": "Qual linha deve ser a primeira em um script Bash?",
    "options": [
      "#!/bin/bash",
      "#/bin/bash",
      "//bin/bash",
      "!#/bin/bash"
    ],
    "correct": 0,
    "explanation": "#!/bin/bash é o shebang: informa ao sistema qual intérprete usar."
  },
  {
    "lessonId": "3-4",
    "question": "Como você acessa o primeiro argumento passado para um script?",
    "options": [
      "US$ 0",
      "US$ 1",
      "$#",
      "$@"
    ],
    "correct": 1,
    "explanation": "$1 é o primeiro argumento. $0 é o nome do script. $# é o número de argumentos."
  },
  {
    "lessonId": "3-4",
    "question": "$# contém:",
    "options": [
      "O nome do roteiro",
      "Todos os tópicos",
      "O número de tópicos",
      "O código de saída"
    ],
    "correct": 2,
    "explanation": "$# contém o número de argumentos passados ​​para o script."
  },
  {
    "lessonId": "3-4",
    "question": "$0 em um script contém:",
    "options": [
      "O primeiro tópico",
      "O nome do roteiro",
      "O usuário",
      "O PID"
    ],
    "correct": 1,
    "explanation": "$0 é o nome sob o qual o script foi invocado."
  },
  {
    "lessonId": "3-4",
    "question": "saída 0 significa:",
    "options": [
      "Erro",
      "Sucesso",
      "Reinício",
      "Rescisão forçada"
    ],
    "correct": 1,
    "explanation": "exit 0 indica saída bem-sucedida. Valores diferentes de 0 indicam erro."
  },
  {
    "lessonId": "3-4",
    "question": "Para tornar um script executável:",
    "options": [
      "mv script.sh /bin",
      "chmod +x script.sh",
      "execute script.sh",
      "script executivo.sh"
    ],
    "correct": 1,
    "explanation": "chmod +x adiciona permissão de execução ao script."
  },
  {
    "lessonId": "3-4",
    "question": "Em um if bash, a sintaxe é:",
    "options": [
      "se (condição) {}",
      "se [cond]; então...fi",
      "se cond: ... fim",
      "se {cond} fizer ... concluído"
    ],
    "correct": 1,
    "explanation": "A sintaxe correta é: if [condição]; então...fi"
  },
  {
    "lessonId": "3-4",
    "question": "O loop for no bash:",
    "options": [
      "para eu na lista; fazer ... feito",
      "para (eu na lista) {}",
      "foreach eu listo fim",
      "para i = lista; fim"
    ],
    "correct": 0,
    "explanation": "para variável na lista; Eu dou ordens; feito"
  },
  {
    "lessonId": "3-4",
    "question": "$@ representa:",
    "options": [
      "Todos os argumentos como strings separadas",
      "O número de tópicos",
      "O PID",
      "O código de saída"
    ],
    "correct": 0,
    "explanation": "$@ expande para todos os argumentos passados, cada um como uma string separada."
  },
  {
    "lessonId": "3-4",
    "question": "O teste [ -f file ] verifica se:",
    "options": [
      "O arquivo é um diretório",
      "O arquivo existe e é um arquivo normal",
      "O arquivo está vazio",
      "O arquivo é executável"
    ],
    "correct": 1,
    "explanation": "-f verifica se o caminho existe e é um arquivo normal (não diretório/link)."
  },
  {
    "lessonId": "3-4",
    "question": "Qual teste verifica se existe um diretório?",
    "options": [
      "[-f diretório]",
      "[-d diretório]",
      "[ -e dir ]",
      "[-r diretório]"
    ],
    "correct": 1,
    "explanation": "-d verifica se o caminho existe e é um diretório."
  },
  {
    "lessonId": "3-4",
    "question": "# em um script bash indica:",
    "options": [
      "Um comando raiz",
      "Um comentário",
      "Uma diretiva",
      "Um erro"
    ],
    "correct": 1,
    "explanation": "# inicia um comentário — tudo depois disso é ignorado (exceto o shebang na primeira linha)."
  }
];
