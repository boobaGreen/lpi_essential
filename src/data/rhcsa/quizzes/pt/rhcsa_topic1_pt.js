// RHCSA Quiz — Topic 1: Essential Tools (Português)
// 25 MCQ questions for Topic 1

export const rhcsaTopic1QuizzesPT = [
  // ─── Lesson 1.1: Shell and I/O Redirection (8 questions) ───
  {
    id: 'q-rhcsa-1-1-001', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual operador redireciona o stdout E o stderr para o mesmo ficheiro (arquivo)?',
    options: ['>', '>>', '2>', '&>'],
    correct: 3,
    explanation: '&> redireciona tanto a saída padrão (fd 1) quanto o erro padrão (fd 2) para o mesmo arquivo.',
  },
  {
    id: 'q-rhcsa-1-1-002', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'O que faz o comando `ls -la /etc >> /tmp/output.txt`?',
    options: [
      'Sobrescreve o /tmp/output.txt com o conteúdo do /etc',
      'Adiciona a saída do ls ao final do /tmp/output.txt',
      'Redireciona os erros do ls para /tmp/output.txt',
      'Cria um hard link entre /etc e /tmp/output.txt',
    ],
    correct: 1,
    explanation: '>> adiciona a saída ao final do arquivo (append), sem sobrescrever o conteúdo atual.',
  },
  {
    id: 'q-rhcsa-1-1-003', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Você deseja executar `find / -name "*.log"` suprimindo apenas os erros de "Permission denied". Qual comando você usa?',
    options: [
      'find / -name "*.log" > /dev/null',
      'find / -name "*.log" 2> /dev/null',
      'find / -name "*.log" &> /dev/null',
      'find / -name "*.log" 1> /dev/null',
    ],
    correct: 1,
    explanation: '2> /dev/null redireciona o stderr (descritor de arquivo 2) para /dev/null, descartando silenciosamente apenas os erros.',
  },
  {
    id: 'q-rhcsa-1-1-004', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'O que o pipe `|` faz em `ps aux | grep httpd`?',
    options: [
      'Salva a saída de ps aux em um arquivo chamado "grep httpd"',
      'Passa a saída de ps aux como entrada (input) para o grep httpd',
      'Executa ps aux e grep httpd em paralelo sem conectá-los',
      'Redireciona os erros do ps aux para o grep',
    ],
    correct: 1,
    explanation: 'O pipe | conecta o stdout do primeiro comando ao stdin do segundo comando, permitindo o "piping" ou canalização de dados.',
  },
  {
    id: 'q-rhcsa-1-1-005', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando envia tanto o stdout quanto o stderr para /dev/null (silêncio total)?',
    options: [
      'command > /dev/null 2>&1',
      'command 2> /dev/null',
      'command > /dev/null',
      'command >> /dev/null',
    ],
    correct: 0,
    explanation: '> /dev/null redireciona o stdout e 2>&1 redireciona o stderr para onde o stdout está apontando (ou seja, /dev/null). Equivalente a &>/dev/null.',
  },
  {
    id: 'q-rhcsa-1-1-006', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Qual descritor de arquivo corresponde ao stderr (erro padrão)?',
    options: ['0', '1', '2', '3'],
    correct: 2,
    explanation: 'Descritores de arquivo padrão: 0=stdin (entrada), 1=stdout (saída), 2=stderr (erro).',
  },
  {
    id: 'q-rhcsa-1-1-007', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'O que representa `/dev/null`?',
    options: [
      'Um arquivo vazio que só pode conter texto',
      'Um dispositivo especial que descarta silenciosamente tudo o que recebe',
      'O arquivo de log padrão do kernel',
      'Um link simbólico para o diretório home',
    ],
    correct: 1,
    explanation: '/dev/null é um dispositivo especial (buraco negro ou null device) que descarta toda e qualquer entrada.',
  },
  {
    id: 'q-rhcsa-1-1-008', lessonId: 'rhcsa-1-1', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Como você usa o `tee` para ver a saída na tela E gravá-la em um arquivo simultaneamente?',
    options: [
      'ls | tee output.txt',
      'ls > tee > output.txt',
      'ls 2>&1 output.txt',
      'ls >> tee output.txt',
    ],
    correct: 0,
    explanation: 'O utilitário `tee` lê do stdin, escreve para o stdout (tela) e para o arquivo especificado ao mesmo tempo. Muito útil em pipelines.',
  },

  // ─── Lesson 1.2: grep and Regex (7 questions) ───
  {
    id: 'q-rhcsa-1-2-001', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual opção do grep realiza uma pesquisa ignorando maiúsculas e minúsculas (case-insensitive)?',
    options: ['-n', '-i', '-v', '-r'],
    correct: 1,
    explanation: '-i (ignore-case) torna o grep insensível a maiúsculas/minúsculas: `grep -i "error" file`.',
  },
  {
    id: 'q-rhcsa-1-2-002', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando mostra as linhas de /etc/passwd que NÃO contêm a palavra "nologin"?',
    options: [
      'grep "nologin" /etc/passwd',
      'grep -v "nologin" /etc/passwd',
      'grep -n "nologin" /etc/passwd',
      'grep -r "nologin" /etc/passwd',
    ],
    correct: 1,
    explanation: '-v (invert-match) mostra as linhas que NÃO correspondem ao padrão fornecido.',
  },
  {
    id: 'q-rhcsa-1-2-003', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Em uma expressão regular (regex), com o que o padrão `^root` corresponde?',
    options: [
      'A palavra "root" em qualquer parte da linha',
      'Linhas que começam estritamente com a palavra "root"',
      'Linhas que terminam com "root"',
      'Qualquer caractere seguido de "root"',
    ],
    correct: 1,
    explanation: 'O ^ é uma âncora que indica o início da linha. `^root` só casa com linhas que iniciam com "root".',
  },
  {
    id: 'q-rhcsa-1-2-004', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual opção do grep retorna apenas a CONTAGEM do número de linhas que contêm o padrão?',
    options: ['-n', '-l', '-c', '-E'],
    correct: 2,
    explanation: '-c (count) imprime apenas o número total de linhas que coincidem com o padrão, em vez de imprimir o texto das linhas em si.',
  },
  {
    id: 'q-rhcsa-1-2-005', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando utiliza Expressões Regulares Estendidas (Extended Regex)?',
    options: ['grep "pattern"', 'grep -E "pattern"', 'grep -n "pattern"', 'grep -v "pattern"'],
    correct: 1,
    explanation: '-E (ou a ferramenta egrep) habilita as Expressões Regulares Estendidas, suportando metacarcteres como +, ?, |, () sem precisar de "escaping" (\).',
  },
  {
    id: 'q-rhcsa-1-2-006', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'hard', type: 'mcq',
    question: 'Qual comando grep localiza todas as linhas que começam com um dígito numérico?',
    options: [
      'grep "^[0-9]" file',
      'grep "$[0-9]" file',
      'grep "[0-9]$" file',
      'grep ".[0-9]" file',
    ],
    correct: 0,
    explanation: '`^` = início da linha, `[0-9]` = faixa (range) representando qualquer dígito numérico. Unidos, procuram dígitos exatamente no começo da linha.',
  },
  {
    id: 'q-rhcsa-1-2-007', lessonId: 'rhcsa-1-2', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual opção instrui o grep a pesquisar recursivamente dentro de todos os subdiretórios?',
    options: ['-n', '-i', '-r', '-c'],
    correct: 2,
    explanation: '-r (recursive) faz com que o grep desça automaticamente e vasculhe o conteúdo de arquivos em todos os subdiretórios de uma pasta, como /etc/.',
  },

  // ─── Lesson 1.3: Permissions and Links (5 questions) ───
  {
    id: 'q-rhcsa-1-3-001', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual notação octal corresponde ao conjunto de permissões `rwxr-xr-x`?',
    options: ['644', '755', '777', '700'],
    correct: 1,
    explanation: 'rwx (4+2+1)=7, r-x (4+0+1)=5, r-x (4+0+1)=5 → Resultado: 755. Esta é a permissão típica para binários executáveis e diretórios normais.',
  },
  {
    id: 'q-rhcsa-1-3-002', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando cria um link simbólico (symbolic link/symlink) do arquivo /etc/hosts diretório /tmp/?',
    options: [
      'ln /etc/hosts /tmp/hosts',
      'ln -s /etc/hosts /tmp/hosts',
      'cp -l /etc/hosts /tmp/',
      'link /etc/hosts /tmp/',
    ],
    correct: 1,
    explanation: 'A opção `-s` faz com que o ln crie um link simbólico. Sem esse parâmetro, seria criado um "hard link" rígido direto para o inode do arquivo original.',
  },
  {
    id: 'q-rhcsa-1-3-003', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual é a diferença brutal e principal entre um "hard link" e um link simbólico (symlink)?',
    options: [
      'Links simbólicos operam mais rápido na leitura.',
      'Hard links compartilham e habitam o mesmo Inode; links simbólicos são um atalho apontando para o caminho do arquivo.',
      'Hard links operam através de diferentes sistemas de arquivos; links simbólicos não.',
      'Links simbólicos não podem apontar para arquivos regulares (textos).',
    ],
    correct: 1,
    explanation: 'Hard links grudam no mesmo Inode (mesmos descritores físicos de dados, precisando estar na mesma partição). Symlinks apontam para o caminho URL e podem estar em discos diferentes.',
  },
  {
    id: 'q-rhcsa-1-3-004', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual comando adiciona permissão de execução (x) APENAS para o dono (owner) do arquivo, abandonando os outros grupos intactos?',
    options: ['chmod 755 file', 'chmod u+x file', 'chmod a+x file', 'chmod +x file'],
    correct: 1,
    explanation: 'A diretiva `u+x` garante execução (x) somente pro user proprietário (u). Utilizar a+x (all) outorgaria as diretivas p/ todos.',
  },
  {
    id: 'q-rhcsa-1-3-005', lessonId: 'rhcsa-1-3', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Você deseja mudar tanto o usuário proprietário quanto o grupo de um arquivo de uma só vez (Ex: mario e dev). Qual comando executa isso?',
    options: [
      'chown mario file && chgrp dev file',
      'chown mario:dev file',
      'chmod mario:dev file',
      'usermod mario:dev file',
    ],
    correct: 1,
    explanation: 'A sintaxe moderna e ideal para este fim é invocar estritamente o `chown usuario:grupo nome_do_arquivo` num estalo.',
  },

  // ─── Lesson 1.4: Archives and Compression (3 questions) ───
  {
    id: 'q-rhcsa-1-4-001', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando cria do zero um arquivo arquivado tar que também é comprimido com "gzip", de nome backup.tar.gz a partir do conteúdo de /home/mario?',
    options: [
      'tar -xzvf backup.tar.gz /home/mario',
      'tar -czvf backup.tar.gz /home/mario',
      'tar -tzvf backup.tar.gz /home/mario',
      'gzip -c /home/mario > backup.tar.gz',
    ],
    correct: 1,
    explanation: 'As letrinhas chave: c=create(criar), z=gzip(zipar), v=verbose, f=file. Sintaxe correta `tar -czvf nomedoarquivo.tar.gz pastadeorigem`.',
  },
  {
    id: 'q-rhcsa-1-4-002', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Qual parâmetro exclusivo do comando Tar indica para ele socar a compactação baseada no agressivo algoritmo "bzip2"?',
    options: ['z', 'j', 'J', 'b'],
    correct: 1,
    explanation: 'A letra `j` = compressor bzip2 (arquivos em .tar.bz2). `z` = compressor gzip (.tar.gz) e o majestoso `J` maiúsculo = xz (.tar.xz).',
  },
  {
    id: 'q-rhcsa-1-4-003', lessonId: 'rhcsa-1-4', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'Deseja-se despejar / extrair o conteúdo íntegro dum arquivão "archive.tar.gz" diretamente p/ dentro do diretório absoluto `/opt/`, mas sem entrar nele por comando cd antes.',
    options: [
      'tar -xzf archive.tar.gz /opt/',
      'tar -xzf archive.tar.gz -C /opt/',
      'tar -xzf archive.tar.gz --to=/opt/',
      'cd /opt/ && tar -xzf archive.tar.gz',
    ],
    correct: 1,
    explanation: 'A grandiosa chave Opcional maiúscula `-C` (Change directory) exige um caminho especificando um destino absoluto para extração de todos os dejetos.',
  },

  // ─── Lesson 1.5: Documentation (2 questions) ───
  {
    id: 'q-rhcsa-1-5-001', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'easy', type: 'mcq',
    question: 'Certo comando puxa magicamente os textos da seção número 5 (Configurações e formatos) relativos aos manuais de sistema do aplicativo "passwd". Qual deles?',
    options: ['man passwd', 'man 5 passwd', 'man -5 passwd', 'info 5 passwd'],
    correct: 1,
    explanation: 'A sintaxe `man <Numero da Secao> comando` expõe apenas ela. Seção 1=comandos diretos pro user, Seção 5=Arquivos de configurações, e 8=ferramentas natas exclusivas de SysAdmins.',
  },
  {
    id: 'q-rhcsa-1-5-002', lessonId: 'rhcsa-1-5', topicId: 1, difficulty: 'medium', type: 'mcq',
    question: 'O habitual da distro RHEL. Onde residem normalmente espalhados as valiosas "README" file extensions e manuais textuais auxiliares arrastados pós a instalação de um pacote RPM?',
    options: ['/etc/doc/', '/usr/share/doc/', '/var/log/doc/', '/opt/share/doc/'],
    correct: 1,
    explanation: 'Se tem doc de aplicativo, tem sob `/usr/share/doc/<nomedoprograma>/`. Recheado de README textuais, exemplos (examples) em PDF, TXT e guias brutos.',
  },
]
