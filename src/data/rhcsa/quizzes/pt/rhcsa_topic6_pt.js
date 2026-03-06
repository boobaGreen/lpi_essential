// RHCSA Quiz — Topic 6: System Maintenance (Português) — 15 questions

export const rhcsaTopic6QuizzesPT = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Qual é a proclamação exata a se mandar no RHEL9 a fim de instalar limpo o cobiçado pacote "httpd" através do moderno gerenciador canônico?',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: 'A realeza da vez é `dnf install <pacote>`. Ele arrebanha o software e puxa suas sagradas depedências de rodo. Esqueça "yum", seu avô obsoleto.',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Bateu obsolência generaliazada. Qual comando desce o rolo compressor atualizando de ponta a ponta todos os pacotes velhos instalados em teu OS inteiro?',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'As alternativas A e B equivalem perfeitamente à mesmíssima coisa'],
    correct: 3,
    explanation: 'Na gramática moderna do Rhel9, tanto berrar `dnf update` ou pregar `dnf upgrade` evocará exata e internamente os idênticos engates para caçar versões frescas e varrer de atualização a máquina de cabo a rabo.',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Estás perplexo! Avistastes um alienígena arquivo binário solitário largado ali no chão `/usr/bin/vim`. De qual carapuça (Pacote Pai) esse orfão despencou?!',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'As premissas B e a antiquada ferramenta descrita em C solucionam primorosamente'],
    correct: 3,
    explanation: 'O soberbo `dnf provides` sonda a nuvem e o chão mapeando origens. Paralelamente a velha tesoura local `rpm -qf` (Query File) espremerá o banco de dados instalados te caguetando friamente de que arquivo.rpm mãe ele caiu.',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Você meteu um pendrive com um repósitorio ISO isolado sem internet no servidor! Agora tem que fazer o sistema burro enxergar e beber os pacotes locais enfiando o path "/etc/yum.repos.d/". Dite como se atam os grilhões locais?',
    options: [
      'Criar um arquivo fulano.repo escrevendo no peito a rotação de `baseurl=file:///ponto/demontagem`',
      'dnf addrepo file:///mount/point',
      'rpm --import /mount/point',
      'dnf config-manager --add-repo /mount/point',
    ],
    correct: 0,
    explanation: 'Repositórios engessados e obscuros (Locais ISO Dvd) prescrevem da criação textual braçal dum esqueleto .repo contendo baseurl encabeçado e colado no triplo prefixo `file:///` e desliguando preferencialmente verificação de gpgcheck=0.',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'O Diabo pede currículo: Liste no escárnio cru, aboslutamente tudo, a vasta milícia de todos os infindos pacotes atualmente cravados/instalados na máquina:',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'Tanto B quanto C arrotam com louvor essa mesma e imunda exata lista.'],
    correct: 3,
    explanation: 'No alto do clero dnf jorra bonito com `dnf list installed`, mas o velho e casudo peão veterano fará melhor figura escovando `rpm -qa` (Query All) que desaba uma chuvada crua legível pra greps!',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Dado um pacote hermeticamante já pre-estabelecido ("httpd"). Como apertá-lo fazendo o comando baixo nível extrair e esparramar qual lixo de arquivos e tralhas textuais ele semeia nos ventrecículos OS afora?',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: 'O canivete `rpm -ql` (Query List) disseca ao cru, expondo numa tripa reta a exata localização em path dos 458 arquivos largados por um software e suas manpages atadas.',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Paranóia aguda! Algum espião adulterou os binários instalados de um software outrora virgem nativo? Traga da prateleira a ferramenta rpm incumbente escanear Hashes md5 acusando arquivos mutacionados e alterados e fora do chassi rpm de fábrica original!',
    options: ['rpm -qi name', 'rpm -V name', 'rpm --check name', 'dnf verify name'],
    correct: 1,
    explanation: 'A Inquisição de Validade se porta atrávés de um `rpm -V` (Verify). Esta lenda insana puxa checksum, timestamp, tamanho de todos as limalhas do pacote e esparrama os que corromperem em código alertante encriptado de letras cruas.',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Você baixou um .rpm malígno largado isolado num pendrive. DNF chora falta de deps. Esmague e estupre a instalação à seco forçando o binário sujo a entrar no sistema ignorando e passando por cima das dependências faltantes cegamente:',
    options: ['rpm -i package.rpm', 'rpm -ivh package.rpm', 'rpm --nodeps -ivh package.rpm', 'dnf localinstall package.rpm'],
    correct: 2,
    explanation: 'A abominação `rpm -ivh pacotasso.rpm` tentaria com dignidade e verbose (v) e hashtag loading bar (h). Porém sem forçar a amarga bandeira atachada de exclusão `--nodeps` (No Dependencies), seu tiro falharia engasgado implorando dependencias que te faltam num cenário cego online.',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Nos miolos cavernosos de RHEL9, qual caverna e papiro alberga estritamente e unicamente as configurações mães de edição braçal segura que domam tempos e adornos (Settings Base) do tenebroso Bootloader GRUB2?',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: 'Só há um templo de edição à braço permitida aos profanos: O arquivo escuso estático em `/etc/default/grub`. Os precaríssimos e medonhos arquivões localizados em /boot.. da alternativa A.. são puramente lixo auto-compilado dinâmico, mortais de serem tocados diretamente humano.',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Você esgarçou as tripas escrevendo um novo custom timeout dentro seguro arquivo mãe `/etc/default/grub`. Com qual alavanca de martelada você re-gera e converte a tua escrita para forjar o real bruto auto-compilado de Grub pra bootar o servidão depois?',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: 'O artilheiro pesado cravado chancelado pela prova RHCSA Rhel: `grub2-mkconfig -o /boot/grub2/grub.cfg`. Ele recolhe tuas ideias em default/grub.. processa.. e vomita (-o Output) a obra prima auto-regulada pronta pro Boot carregar com perfeição milimétrica.',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Chefe maluco com pressa manda: "Baixe o Timeout do GRUB do boot para 5 segundos lerdão!". Como executas formidável e metodicamente sem explodir a máquina no reboot essa tarefa?',
    options: [
      'Entalhe e crava na dura rocha do papiro /etc/default/grub a linha cega amaldiçoada `GRUB_TIMEOUT=5`,  findado isto, feche,  salve e execute em compilação magna de revalidação o esmagador comando grub2-mkconfig pra sobrepor o arquivo final la no boot.',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: 'O bailado da morte: A regra não existe atalho porralouca de CLI. Altera a váriavel dura em texto crû /etc/default/grub e logo em sequência cimenta a compilação pro grubCfg auto-gerá-la fresquinha.',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Você meteu 3 versões diferentes de Linux Kernel nesse trambolhão e quer ver e checar o que entrará e estará disponível exposto na Tela Preta do Boot pra você escolher! Em qual bueiro de lodo o GRUB engessa no formato pronto a lista do Menu de Escolhas geradas?',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 1,
    explanation: 'O famigerado, e asqueroso ilegível monstruoso `/boot/grub2/grub.cfg` amontoa centenas de linhas auto geradas abrigando o texto das choices do teclado de boot pra escolher e cair pro kernel x ou kernel y no load da RAM.',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Qual encantamento do Dnf instilaria goela abaixo uma megacarreta cheia contendo uma cúpula ou Grupo gigante estático unindo centenas de pacotes em conjungação conjunta (Exemplo clássico do bolo "Development Tools")?',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'As encarnações obscuras de B colidindo ao legado de C são aceitas',
    ],
    correct: 3,
    explanation: 'Tanto invocar elegante moderno e segregado `dnf group install "Sua Coisa Maiúscula"` quanto o cimentado abestalhado avô `dnf groupinstall seu-bolo-minusculo-tudo-junto` descortinarão a mesma ação e trarão 400 compiladores ao PC de uma só tragada!',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Ataque de curiosidade extrema! Qual alfinete você soca pro famigerado RPM decapsular e te jogar na cara os Metadados sumários, Sinopse de bula, Versão exata arquitetônica e a sagrada Data fidedigna da instalação de um tralho previamente ali alocado ?',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: 'A luneta sagaz escavadeira `rpm -qi` (Query Info). Vai te vomitar na teta: versão, o Packager e um bônus da URL fabricante, bem como o ano mes de dia abençoado de instalação deste corpo estranho em sua VM ali.',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Missão espião local! Roube da nuvem sagrada pela via segura o pacote RPM do `httpd` salvando na tua aba mas aborte a fatídica e cega auto-instalação daquele que cai pro OS no dnf!',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: 'Rápido, o sorrateiro plugin invocado pelo sufixo cego `dnf download httpd` arrasta pro teu diretório presente `suapasta/` um bloco bruto `.rpm` ignorando implantações nativas. Exímio dom domador formidavel para transportar lixos à mainboards sem roteador web!',
  },
]
