// LPIC-1 102 Extended Content  Portuguese
// Rich structured sections for ExtendedContent.jsx

export const lpic1_102_extendedContent_pt = {

  // Topic 1: Shells and Shell Scripting
  'lpic1-102-105-1': {
    title: 'O Ambiente Shell — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Personalização do Ambiente Bash' },
      { type: 'paragraph', text: 'O ambiente da shell pode ser personalizado através de arquivos de inicialização, variáveis, alias e funções. O exame exige conhecer a ordem sagrada de execução desses arquivos.' },
      { type: 'table', headers: ['Arquivo', 'Tipo de Shell', 'Função'], rows: [
        ['/etc/profile', 'Login (Global)', 'Ajustes globais do sistema para todas as shells de login'],
        ['~/.bash_profile', 'Login (Usuário)', 'Precedência 1: ajustes do usuário (geralmente chama ~/.bashrc)'],
        ['~/.bash_login', 'Login (Usuário)', 'Precedência 2: é lido se ~/.bash_profile não existir'],
        ['~/.profile', 'Login (Usuário)', 'Precedência 3: arquivo genérico clássico (usado por sh/Bourne)'],
        ['/etc/bash.bashrc', 'Non-login (Global)', 'Ajustes globais para shells interativas sem login (terminais desktop)'],
        ['~/.bashrc', 'Non-login (Usuário)', 'Alias e funções locais do usuário (lido a cada nova tela de terminal desktop)'],
        ['~/.bash_logout', 'Logout (Usuário)', 'Executado ao sair (exit) de uma shell de login pura'],
      ]},
      { type: 'heading', level: 2, emoji: '📝', text: 'Variáveis de Ambiente Críticas' },
      { type: 'table', headers: ['Variável', 'Significado', 'Exemplo de Valor'], rows: [
        ['PATH', 'Diretórios onde a shell caça cegamente os binários dos comandos', '/usr/local/bin:/usr/bin:/bin'],
        ['PS1', 'Prompt primário (O texto piscante antes do cursor)', '"\\u@\\h:\\w\\$ " (usuario@host:dir$ )'],
        ['PS2', 'Prompt secundário (usado quando um comando precisa de múltiplas linhas)', '"> "'],
        ['HISTFILE', 'Onde salvar o histórico de comandos digitados', '~/.bash_history'],
        ['HISTSIZE', 'Número de linhas mantidas vivas na memória RAM', '1000'],
        ['HISTFILESIZE', 'Número máximo de linhas salvas diretamente no arquivo em disco', '2000'],
        ['HISTCONTROL', 'Controla buracos negros do histórico', 'ignoreboth (ignora comandos com espaço inicial e duplicatas coladas)'],
      ]},
      { type: 'code', title: 'Configurando variáveis e aliases LPIC', prompt: '# Tornar permanente um mestre alias utilitário (dentro do ~/.bashrc)\nalias update="sudo apt update && sudo apt upgrade"\n\n# Modificar e acrescentar pastas ao PATH (no ~/.profile ou ~/.bashrc)\nexport PATH="$PATH:$HOME/bin"\n\n# Aplicar imediatamente as mudanças do .bashrc recarregando-o\n$ source ~/.bashrc\n# Sintaxe de pontinho mais antiga equivalente:\n$ . ~/.bashrc', output: '' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Scripting em Bash — Fundamentos — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Estrutura Canônica de um Script' },
      { type: 'paragraph', text: 'Um script bash é um arquivão de texto contendo comandos rodados sequencialmente. O primeiríssimo elemento vital é a linha "shebang" (ou hashbang) que avisa ao Kernel qual será o motor interpretador para ler o texto.' },
      { type: 'table', headers: ['Variável Máxima Especial Cega', 'Significado'], rows: [
        ['$0', 'O Nome cego atual do script (ex: ./script.sh)'],
        ['$1, $2... $9', 'Os Argumentos injetados na chamada do script pelo Humano (ex: ./script.sh abacate verde)'],
        ['$#', 'Contador total de argumentos engolidos numéricos'],
        ['$@ e $*', 'Ambos cospem todos os argumentos. (O $* junta tudo numa string crua, $@ cuida das aspas individiduais)'],
        ['$?', 'O Código Sagrado de Saída Retorno do último comando rodado (0=Sucesso, Erros costumam ser 1, 2, 127)'],
        ['$$', 'PID (Process ID) atual do script rodando'],
        ['$!', 'PID do último filho disparado às costas no segundo plano (background &)'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'A Inversão Lógica do Comando ($?)', content: 'No bash LPIC puro, Estado 0 = Sucesso Maravilhoso e Perfeito. Diferente da matemática ou C onde 1 seria "True/Sucesso". No Bash, se algo dá erro, expele 1, 2 etc. Isso serve pro script saber exatamente COM QUAL ERRO ele travou dependendo do número.' },
      { type: 'code', title: 'Estruturas LPIC Vitais: if / case e For', prompt: '# Estrutura clássica if-then-elif-else-fi\nif [ -f "/etc/passwd" ]; then\n  echo "O Arquivo chave existe"\nelif [ -d "/etc" ]; then\n  echo "Pasta Cega"\nelse\n  echo "Perdido cego"\nfi\n\n# Laços de repetição FOR seq\n# Seq constrói listas cegas numéricas ao for engolir.\nfor i in $(seq 1 10); do\n  echo "Número $i"\ndone', output: '' },
    ]
  },

  // Topic 2: User Interfaces and Desktops
  'lpic1-102-106-1': {
    title: 'X11 vs Wayland (O Servidor Gráfico) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Display Servers (Motores de Vídeo)' },
      { type: 'paragraph', text: 'Sem um display server, o Linux não passará do terminal negro TTY1 clássico texto plano.' },
      { type: 'comparison', left: {
        title: 'X11 (X Window System)',
        items: ['Ancestral Arquitetura Cego Cliente-Servidor (As janelas enviam pedido pro Server pintar na tela nativa)', 'Extremamente aberto - Os Apps podem escutar todas as ações globais e gravar keystrokes (Inseguro base)', 'Encaminhamento pela rede fabuloso transparente (SSH -X Forwarding)', 'Configs Monolíticas base em /etc/X11/xorg.conf']
      }, right: {
        title: 'Wayland (O Moderno Limpo)',
        items: ['Arquitetura unificada direta, super seguro e blindado', 'Isolamento de Janelas nativo: Apps não conseguem gravar chaves (Keyloggers fumbam)', 'Responsabilidade de Pintar cai 100% sob os aplicativos limpos e modernos', 'Componente Compositor gerencia nativamente janelas sem gambiarras de screen-tearing.', 'XWayland resolve e garante rodar Apps x11 velhos na marra base de túnel temporário.']
      }},
      { type: 'infobox', variant: 'exam', content: 'Memoriza na mosca: X11 forwarda nativamente gráficos, possui a variável "$DISPLAY" cravada pra saber onde a GUI irá renderizar (geralmente ":0"). A autorização nativa velha perigosa entre portas para aplicativos roda por ordens de `xhost + IP` (o que escancara a tela toda) e do `xauth` (autenticado limpo via cookies de ~/ .Xauthority).' },
      { type: 'heading', level: 2, emoji: '🌐', text: 'Remoto Display Forwarding', },
      { type: 'paragraph', text: 'Para o LPIC, você tem de saber as bases atreladas ao Túnel Magico `ssh -X` que exporta a janela dócil de GUI dum servidor RHEL para a tela nua crua base Ubuntu e Mac locais com ssh.' },
    ]
  },

  'lpic1-102-106-2': {
    title: 'Acessibilidade Visomotora Universal (a11y) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Tecnologias Adaptativas Sociais Globais' },
      { type: 'table', headers: ['Modo Puxada Assistência Frio Cego Humano', 'Tradutor App ou Config Ciega do Pinguim'], rows: [
        ['Visões Extremas Prejudicadas (Lupas cegas)', 'Magnifiers (Kmags virtuais) base Zoom constante.'],
        ['Daltonismo (Troca Cega Visuais Colorida)', 'High Contrast Têmaticos base.'],
        ['Cegueira Completa Absoluta L', 'Leitores Brailles táteis interligados USB com o daemon BRLTTY ou o Mestre ditador de tela "Orca" e Orca-Espeak verbalizando.'],
      ]},
      { type: 'heading', level: 2, emoji: '⌨️', text: 'Mobilidades Motora Pura', },
      { type: 'list', items: [
        { term: 'Sticky Keys (As Super Teclas Grudentas Cegás)', desc: 'Precioso a mono-manuais. Você bate num "Ctrl," Solta a mao dele. Bate num "Alt", solta a máo. Delet. A Tela mágica unirá Ctrl+alt+del numa tacada divina global.' },
        { term: 'Slow Keys (A Prevenção Involuntária Parkinson Tremor)', desc: 'Desabilita e chuta fora tecladas aleatórios da mesma letra muito rápidas. A tecla real só é escrita na tela cega após manter premido firmemente por muitos milissegundos.' },
        { term: 'Bounce e Repeat Keys', desc: 'Preveem "Aaaaaaa" duplo ressaltos. Modifica o fator elástico tempo cego da digitação cega.' },
        { term: 'Screen/On-Screen Keyboards', desc: 'Clicks em tecla via Lápis ocular ou mouses trackballs interados cego visual.' },
      ]},
    ]
  },

  // Topic 3: Administrative Tasks
  'lpic1-102-107-1': {
    title: 'Gerenciamento Raiz de Contas e Usuários Cegos — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '👥', text: 'Os 4 Ficheiros do Templo Sagrado' },
      { type: 'paragraph', text: 'No pinguim, não há magia obscura em registro cego. Toda a essência da autenticação, senhas ocultas criptograficamente e as guildas e agrupamentos residem num banco colunar de simples arquivos mágicos textos puristas em `/etc`.' },
      { type: 'table', headers: ['Caminho Arquivo Texto Cru Master', 'Estrutura Divisão dos Campos Gêmeos Cegos'], rows: [
        ['/etc/passwd (Inocuo Read-All e base cega listatão public)', 'MãoDeObra:SenhaOculta:UID_numero:GID_grupo:Nome_completo_Gecos:/home/pasta_local:/bin/bash'],
        ['/etc/shadow (Tesouro trancafiado 600 Permission Cega Root)', 'MaoDeObra:AssinaturaHAshSAD(SHA512)$c:DadoDiaMudou:EstrategiasEnvelhecidas Senha limitadas MaxMin Cegas'],
        ['/etc/group (Sede dos Grupos cegos do HD)', 'Nome_Grupo_Mestre:SenhaGrupoVazia:GID_num:Lista_virgulada_usuarios_agregados,andres,marcos'],
        ['/etc/gshadow', 'Análogo de administração delegada a grupo cego com senhas obscuras (Pouco usado por sysadmins modernos base do Sudo).'],
      ]},
      { type: 'heading', level: 2, emoji: '🔐', text: 'O Arsenal Usermod / Useradd Base LPIC' },
      { type: 'code', title: 'Comandos Fogo Manipulantes do Administrador Base', prompt: '# 1. Bota andres no cobiçado grupo SUDO (Administradores Super Root)\n# O VITAL Exame: O `usermod` esmaga e tira os outros grupos de Andres, caso não ponha o "-a" (Append).\n$ sudo usermod -aG sudo andres\n\n# 2. Impedir Alguém Físico Vivo a não logar Terminal Bash, botando como Falsa Shell.\n$ sudo usermod -s /sbin/nologin funcionariodemitido_ghost\n\n# 3. Cria Juan, Força Fabricar Seu Quarto Vazio Home Dir (-m) e O Grupo extra (-G backup)\n$ sudo useradd -m -G backup juan', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Apagador (userdel Mágico)', content: 'Lembre-se LPIC cego: `userdel andres` não destrói o arquivo ou a pasta `/home/andres`. Seus dados perduram lixo solto pesando HD até aplicar o demolidor `userdel -r andres` (Remove o home file).' },
      { type: 'list', items: [
        { term: 'O Ficheiro Global Base Máquina /etc/login.defs', desc: 'Define UID minima e max (eg 1000 Debian), regras de hashing SHA e se vai ter "Create Mailbox Local".' },
        { term: 'A Semente Útero /etc/skel/ (Esqueletor)', desc: 'Tudo de arquivo vazio que ali morar: O pinguim dará ctrl+c clonado mágico jogando identicamente cego a cada User Novo seu respectivo ~/.bashrc ~/.profile e atalhos company ali nascidos pro Home limpos.' },
      ]},
    ]
  },

  'lpic1-102-107-2': {
    title: 'Agendamento e Cronogramas Cegos (Cron / At) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '⏲️', text: 'Daemon Cron: O Guardião de Tempo Perfeito' },
      { type: 'paragraph', text: 'A ferramenta imbatível que agenda e cospe scripts, atualizações e demolidoras rotinas passivas a cada lua madrugadora.' },
      { type: 'table', headers: ['Modo e Refúgio de Conf Text', 'Comandos y Diferenças LPIC Mortais Cegas'], rows: [
        ['/etc/crontab (O Relógio da Corte Raiz Mestre Global)', 'Requer 6 campos cegos! Ao rodar do sistema estático o sistema Pede de Joalhos o "nome do usuario" para botar rodar aquilo.'],
        ['crontab -e (Sua Agenda de Cidadão Individual do bash cego)', 'A de User comum não exige Campo "usuario" e guarda a cega no calabouço purista de listões "/var/spool/cron/crontabs/NOME".'],
        ['crontab -l', 'Consulta seus trabalhos atrelados vivos marcados cronogramas'],
      ]},
      { type: 'heading', level: 2, emoji: '📅', text: 'As Estrelas do Cronomante (5 Asteriscos base)' },
      { type: 'code', title: 'Min Hor DiaMês NumMes DiaSemana ComandoBase', prompt: '# 1. Asterisco cego = A cada pinhada daquilo.\n# 2. Virgulados (2,4) = Dia exato dois e exato quatro.\n# 3. Rota contínua dividida (/X) = De tantas a tantas pancadas divisoras no tick Cego.\n\n# Rodará todo dia Sagrado ás 02:00 am Cego Madrugada as terças cegas (2)\n0 2 * * 2 script.sh\n\n# Roda e executa puramente A CADA MEIA HORA (divisor cego) absoluto infinito dias\n*/30 * * * * bash report.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Comando Único Cego Lançante AT e Barreiras Allow/Deny' },
      { type: 'paragraph', text: 'AT diferente da repetição roda um comando cego pra amanhã, apaga a memória da máquina de compromissos e some. `at now + 1 hour` ou `at 11:30 PM`. Você vê a fila cega morta usando `atq` e cancela tiros `atrm`.' },
      { type: 'table', headers: ['O Muro Autorizante (/etc/cron.allow y /etc/cron.deny)', 'A Regra Cega de Jogo Exata (Vale para at.allow tbm)'], rows: [
        ['/etc/cron.allow Existe vivo?', 'Então ABSOLUTAMENTE ninguém do mundo pinguim executa NADA cron, exceto a elite descrita aí nele de privilégio cego.'],
        ['SÓ o /etc/cron.deny Existe vivo?', 'Todos os humanos são plenos e usufruem do `crontab -e` natural nativo livre, exceto os banidos citados neste banimento puro global.'],
      ]},
    ]
  },

  'lpic1-102-107-3': {
    title: 'Localização Mundial (i18n), Tempos Ocultos e TimeZones — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Variáveis Fuso Universal Envs Cegas' },
      { type: 'paragraph', text: 'A língua visual, formato numérico $ da bolsa cega vírgulas, moedas e calendários.' },
      { type: 'list', items: [
        { term: 'LANG (A Variável Fallback Original Cega)', desc: 'Seteia a base. Se tudo o mais fumaça o núcleo Linux assume essencia nela (ex: LANG=pt_BR.UTF-8).' },
        { term: 'LC_MESSAGES', desc: 'Seta e traduz se teu erro do comando Kernel dmesg vem em tupi guarani, rus ou ENG puro base cego global.' },
        { term: 'LC_ALL (O Deus Esquadrão Mestre)', desc: 'Ele esmaga as regras todas e pisa todos LCs nativos passivos impondo dominância cega general forçada da envs local de língua.' },
        { term: 'locale', desc: 'Comando lista em RAM tua config viva linguístico no exato momento. `locale -a` checa os suportados compuilados no HDD puro base.' },
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Gestores Geográficos Timezone' },
      { type: 'code', title: 'Atuando como Root Mestre Mundial do Tempo:', prompt: '# 1. Modo Universal Cego e Base Pura Legada OS\n# A maquina olha as horas de /etc/localtime que é na verdade um atalho SoftSymLink\n# pra /usr/share/zoneinfo/America/Sao_Paulo (Que é onde os datazones atômicos do ano pulso residem)\n$ ln -sf /usr/share/zoneinfo/America/Bogota /etc/localtime\n\n# 2. Usando A Mágica de Conversão de Bitmaps (UTF vs ISO antigos windows win1251)\n$ iconv -f iso-8859-1 -t utf-8 windowsvelho.txt -o portavelho_linux.txt', output: '' },
    ]
  },

  // Topic 4: Essential System Services
  'lpic1-102-108-1': {
    title: 'A Hora do Sistema e Sincronia NTP — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: 'Hardware Clock (BIOS) frente ao System Clock (Núcleo)' },
      { type: 'paragraph', text: 'Os corações pulsantes de frequência Cega do PC são Dois e distintos. O Relógio Vivo da Placa Mãe (Bateria Lithium cravada na chassi da máquina eterna), contra o Relógio Artificial Temporário Efêmero nascido do Kernel a cada BOOT ligar.' },
      { type: 'comparison', left: {
        title: 'Hardware Clock (CMOS/RTC Real Time)',
        items: ['Guardião Físico Mudo. Jamais tem fuso horário futil humano, rola por padrão cego UTC (Tempo Universal de Cima Coordenação pura).', 'Só é questionado de verdade pelo Kernel em uma única fração microscópica no Ato Inicial do Ligar a Máquina.', 'O comando sagrado ajustador físico: hwclock (-w grava sistema na BIOS base).']
      }, right: {
        title: 'System Clock Lógico Máquina D',
        items: ['É um construto da RAM cega viva purista efêmera. Desligou PC: morreu e zera. Renasce lendo o HardwareClock Pós boot puro denovo.', 'Aqui se esbarra y dita Regra Humana TimeZone Regional Cega (Tu aplica o Brasilia Fuso nele, e não no PC).', 'Único Culpado de estampar data e Inodos de Criação de Archivos no HD do Linux purista.', 'Ferramenta Humana Consulta: date.']
      }},
      { type: 'heading', level: 2, emoji: '⏱️', text: 'NTP: Maestros Orquestradores de Fuso Fino e Atomicidade' },
      { type: 'table', headers: ['Demonios Provedores NTP Mundiais', 'Config Base Ficheiro Mestre Purista', 'Características e Alvos Exibidos Ocultos'], rows: [
        ['ntpd (Network Time Protocol Legacy Daemon Ancestral)', '/etc/ntp.conf', 'Estático Cego Conservador Clássico. Para grandes Monólitos Datacenter 24/7. Lento arrastar ponteiros passivamente cego compensador desvios drift nativos. Consulta peers remotos global: ntpq -p.'],
        ['chrony (O Jovem Rei do Tempo Veloz Fria Moderno Rápido)', '/etc/chrony.conf', 'Criado e focado especialmente em reatar tempo quebrado cego de Notebooks/Laptops humanos em suspensão de tampa fechada base que ligam meses depois cegos. Padrão RHEL.'],
        ['systemd-timesyncd', '/etc/systemd/timesyncd.conf', 'Não é Provedor. Apenas um leitor cliente passivo cego "SNTP". Beba da fonte mas nunca alimentes máquinas com tua hora. Base leve total em Ubuntus cegos.'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'Entendimento Mágico do Estrato (Stratum)', content: 'No ntpq -p o Kernel cospe a palavra divina cega Stratum 1 a diante. Stratum zero é o próio sol satélite atômico universal NASA Cego inacessível web. Stratum 1 é o SuperComputador militar cravado atado ao Satélite atômico vivo fisicamente. E Stratum 2 seria você e os Roteadores mundiais pendurados na aba virtual cegos dos Stratum 1. LPIC puro Exame Base.' },
    ]
  },

  'lpic1-102-108-2': {
    title: 'Central Diário Mística Syslog & Journalctl Vivo — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Catadores de Caos Lixo Universal (Rsyslogd Clássico)' },
      { type: 'paragraph', text: 'Quando um Apache trava cego o servidor ou alguém erra três senhas Ssh, a quem o programa desabafa suas magoas dor? Eles sibilam avisos em streams Kernel aos Registradores Base Gerais (Loggers Vivos). A versão Texto Plano em /var/log/ de 100 anos se chama SysLog cego (ou moderno Rsyslogd puro).' },
      { type: 'table', headers: ['Configurador rsylog mestre facility (Fonte cega Óxigenio A) /etc/rsyslog.conf', 'Grau de Priodidade Urgência Alerta Letal Morte Cega', 'Destino Arquivo Cego Vivo'], rows: [
        ['mail (Provedores Correios) / authpriv (Login Senhas e Falhas Cegas SSH Sudos) / cron / daemon.', 'Do mais Trivial inútil ao Letal Pânico Cego: debug, info, notice, warn, err, crit, alert, emerg.', 'mail.err   /var/log/maillog.log (Sálvame de Info, não liga lixo de mail debug nem notice Cego, guarda aí todos erros pra cima mortais crit emerg. Letal).'],
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'Inquisição Forense de Systemd: Journalctl O Novo Deus Binário' },
      { type: 'paragraph', text: 'Systemd esconde magiamente os logs do século XXI em base puramente formato Binária indexada veloz oculta (sem utilidade o vim e cat em pastas systemd journal). O Auditor Sysadmin evoca a fera purista cega do comando universal Journalctl:' },
      { type: 'code', title: 'Operando A Divindade Cega e Vendo Histórias Mortas:', prompt: '# 1. Quero testemunhar apenas o que o Demônio SSH vomitou cegamente de queixa (-u unit). Somente Ele puro limpo.\n$ journalctl -u sshd\n\n# 2. Mostre Cego Seguidor em Tempo Vivo Cego Cauda (Equivalente Tail -f purista ancestral)\n$ journalctl -f\n\n# 3. Ler Mágico Todo O log varrido da Terra Do BOOT Mestre Pura de HOJE Apenas.\n$ journalctl -b\n\n# Bônus: Ferramenta manual e script humana "logger". Força vc botar mensagens cegas de texto custom na linha universal do arquivo Systema Central Logs syslog falso.\n$ logger -p user.warn "Falha de disco Cego de Teste Humano 1"', output: '' },
    ]
  },

  'lpic1-102-108-3': {
    title: 'Carreiros de Papel Raízes Correio Postfix (MTA / Aliases) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Mensageiros Base Cego Servidor Raiz MTA' },
      { type: 'paragraph', text: 'Não confundir o Leitor MUA seu do Thunderbird do Windows com a locomotiva gigante demonio de Transito Server nativa cera "Postfix ou Sendmail legado" que repulsam e redirecionam roteando envelopes cego na Porta secreta 25 ao mundo Google Mail externo MTA base cego.' },
      { type: 'heading', level: 2, emoji: '🔗', text: 'Desvios Internos Sagrados Base Cega LPIC (/etc/aliases)' },
      { type: 'paragraph', text: 'Sysadmins normais cegos evitam abrir o Desktop logados fisicamente cegos no monstro "ROOT" divino local. Por tanto, quem checará puramente as caixas inboxes diárias do pão de pânico e crash enviadas de servidor locais pela máquina para o carteiro Inbox de Root? Você redireciona as caixas cegas na parede Aliases global do Linux cegos!' },
      { type: 'table', headers: ['Etapas Mágicas Base Ciega (Lembrete Exame Físico LPIC1)', 'Justificativas e Razoes Práticas Bases'], rows: [
        ['1. O Administrador Edita Humano Cego o plano /etc/aliases', 'Postmaster: root ; E Bota raiz cravada abaixo base: root: joaozinho_admin_verdadeiro'],
        ['2. O Postfix / Sendmail NAO LÊ Esse Papiro Texto Humano Lento em Vivo.', 'Jamais confiam. Eles buscam os "Hash.dbs" cegos binarios compilados da CPU rápidos /etc/aliases.db .'],
        ['3. Como Salvar Força? O Comando Santo de Cego Universal `newaliases`', 'Você finaliza sua edição de texto vim salva! Típia mágicamente comando newaliases e Ele re-compila o arquivo humano ao cego binario banco pra atualizar.'],
        ['4. O Pátio ~/.forward de usuário cego básico', 'Joãozinho faz arquivo texto mudo cego oculto "forward", põe email google. E o Linuix Cego forwardeia seu inbox base para rua.'],
      ]},
    ]
  },

  'lpic1-102-108-4': {
    title: 'A Prensa Escurecedora e Papel (CUPS / Protocolo IPP Base) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'Apple Criador CUPS Impressores Ocultos Fila G' },
      { type: 'paragraph', text: 'O gestor magico de PDF spool filas de papel universal Linux na Porta 631 base cegos. Arquivados nas bibliotecas puristas de raiz /etc/cups/. Acessa-se por local cego http web cego do browser: `localhost:631`.' },
      { type: 'list', items: [
        { term: 'Ação Cega do LP Comando Cego Imprimir Tinta File Pura Base', desc: 'Sintaxes lp / lpr base ataca a File Cego de documentos. $ lp -d ImpressoraMestra relatorio_sujo_cego.txt' },
        { term: 'A Fila Morta Abstrata Lpq', desc: 'Revela Identificador Unicos Numericos Cego Job Numbers das filas cegas engasgados.' },
        { term: 'Morte Aniquilamento Papel Cancel Pura Cancel', desc: 'Joga ao abismo o papel enganchado na fila puxando Job cego number (cancel JOBID32).' },
        { term: 'Accept/Reject (A Barricada Lógica Portão de Ouro)', desc: 'Bloqueia cego de Servir Fila de Carga. Retorna gritos cegos a usuarios de Rede Longe "Lotação Servidor Cego Papel Rejeitado Oculto". O Rolo continua imprimindo de boas o velho já guardado em RAM sem novidades.' },
        { term: 'Enable/Disable (O Trava Máquinas Rolo Cego Físico Duro)', desc: 'Disable pausa e freia a Maquina de Tinta. O servidor mágico continua enchendo e estufando HD Mágico das filas RAM cegos aceitando novos pdfs gigantes infinitos, paralisantes mudos travados.' },
      ]},
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: 'Alicerce Cegos Globais Ip e Protocolos V4/Mascaras (CIDR Base Subnetting Cego) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Cortar e Segregar O Fio IP Máscaras Bits Cegos Inocência' },
      { type: 'paragraph', text: 'A mascara de Rede Mágica purista divide cegando o Chassi IPv4 (Eg: 255.255.255.0 magicos puros cego ou a notação /24 bit acesos esquerdos cegos puros) definindo qual metade é o Condomínio Gigante (Network Fixa Intocável Cega) e qual casa pequena do Condominio (Host Final Mudo).' },
      { type: 'table', headers: ['Classificador Mundial Global Místico IANA', 'Primeiros 8 Bits do Octeto Mágico Puro Limitar e Padrão', 'Mascara Cega Mística Herdada Cega Natural Original Pura'], rows: [
        ['Clase A Global Universal', 'Início Cego Magico Pescando (1 al purista 126 cego)', '/8 Fogo Cego de Mascsra 255.0.0.0'],
        ['Clase B Cega De Rede Médias Emrpesarial Base Foco', '128 Pescando até Base cega Universal 191.', '/16 Cego Universal Dois Octetos Blindad.'],
        ['Clase C (Sua Casa Residência Domestica Modem Wifi Cega Pura)', '192 cegos até base 223.', '/24 Fogo base cego triplo 255 .0 final.'],
      ]},
      { type: 'heading', level: 2, emoji: '🔒', text: 'Isolamento Absoluto (Fugitivos Mundiais IP Privada Cega Não Roteavelmente Segura APIPAs)' },
      { type: 'list', items: [
        { term: 'Privatização Cefa Pura Base Cega: Rota Zero Net', desc: '10.0.0.0 e 192.168 cegos absolutos nunca atravessam puros internet oceanos sem Mascaramento Tradutores de Base Cegos de NAT Router global cegos publico vivo.' },
        { term: 'Abismo da Falha Pura APIPA Cega', desc: '169.254 magicos cegos. Seu servidor DHCP Morreu vivo Queimado de vez local. O Computador chora gerando sozinho do desespero vivo Mágico esse bloco de endereço isolante cego Link-Local.' },
      ]},
    ]
  },

  'lpic1-102-109-2': {
    title: 'Textos Fundadores Configurações Clássicas Roteo e Nome Cego DNS Files — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Documentos do Voo de Fogo Pura DNS Mestre' },
      { type: 'paragraph', text: 'Na arca de Debian, configuração estática velha se guarda a chave mística e fogo fixo perene dentro da biblioteca arquivo /etc/network/interfaces. E em todas distros pinguins gerais puras do universo cegos os nomes atrelados:' },
      { type: 'table', headers: ['Oculto Ficheiro Purista Texto LPIC Cego Físico', 'Açambarcamento Vital Resolutivo Físico Cego'], rows: [
        ['/etc/resolv.conf', 'Nomes de Deus Cego Servidores (Nameservers). Quando a tela browser clama um DNS IP externo global de google, seu linux vai de joelhos a estes magos IPs (eg 8.8.8.8) consultar enciclopedias mundiais vivas cegos publicos reais.'],
        ['/etc/hosts', 'O Burlador Dicionario Fake Dev Falsificação Velocidade. Traduz de casa pra casa Cega interna "127.0.0.1 db-local". Corta caminho e o OS jamais pede e chateia DNS Internet proferindo velocidade pura.'],
        ['/etc/nsswitch.conf', 'O Árbitro Controlador Ordem Cega NameSwitch! Dita "Primeiro tu olha pro velho Host Files falsificador, pra depois tu mandar o IP fora pro DNS Resolver Cego. (hosts -> dns místico).'],
        ['/etc/services', 'Nao é firewall, é Enciclopeda pasiva purista tradutora humana da relação mágica numerica ("80 tcp corresponde visualmente = http" cego do netstat cego humano).'],
      ]},
    ]
  },

  'lpic1-102-109-3': {
    title: 'Troubleshooting Purista Caçador Físico E Detetive Protocolar de Tráfego Vivos — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Armamento Detetive Interrogador TCP Ping e Rotas Físicas e Cegas' },
      { type: 'table', headers: ['Arsenal Tático Purista Ping/Hop Cego Diagnósticador', 'Aplicação Direçionada Letal Médica Cega Física LPIC Top'], rows: [
        ['ping Magico cego e Universal Ping6 Fuga IPv6', 'Echoes Cego de Gritos Físicos Request ICMP purista obligando Reply Echo. Útil pra ver milissegundo trancas vivo latências. Lembrar o freio de segurança limitador magico param `-c 4` pra impedir loucura spam no terminal bash solto vivo cego.'],
        ['traceroute Vivo Padrão Fuga HOP/ tracepath', 'Detetive Cego das Estações Trens de Routers mundiais Hops Limitantes vivo pura TTL Cegas de saltos moribundos a cada parada. Mapeia e diz em qual pais roteador doido cego travou toda tua conexão até a Amazon cloud cego destino magica.'],
        ['Puros Escavões de DNS dig e Fuga host/nslookup', 'Ataca unicamente e testa puros portões de Cegas 53 de Internet Magos DNS. Pede pro Google resolver pra ti que IP ta o Cname A do teu site. O dig Cego mostra o chassi e motor completo cache da busca.'],
      ]},
      { type: 'code', title: 'Domador Master de Escutas Socket Netstat vs Fuga Moderna Mestre "SS"', prompt: '# 1. SS Padrão ouro Cego Moderno e Audidor Porta Aberto Hack Mapeado:\n# Bandeiras LPIC mágicas cravadas no comando: \n# -t tcp focado puro \n# -u udp atrelado ao time cego mágico ntp\n# -l ouçam pasivas listenings cego puro \n# -p purista mágico que mostra o Processo Assassino do dono da Porta e -n Negador de traduções nomes lerdos lentos puramente cega IP numeral cru e numero cego porta crua\n$ ss -tulpn\n$ netstat -tulpn\n\n# Bônus: Netcat cego `nc -zv 10.10.1.1 80` testa se há porta aberta forçada nua e crua sem enviar dado nem loggar na shell de nmap complexo. Excelente purista diagnostico cego rápido tcp.', output: '' },
    ]
  },

  // Topic 6: Security
  'lpic1-102-110-1': {
    title: 'Auditorias, Permissões Letais (SGID / SUID) Forense Físico e GPG Protecionismo PGP Cegas Base — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'SetUser Id Magico Cego e Troyans Universais Fuga Root Pura Base Oculta' },
      { type: 'paragraph', text: 'Atacar as permissões do Linux Octal base /4000 (o SetUID cego suid de bits) é o pilar mestre forense do Audit de Servidor cego pinguim. Entregar um Bash mágico binário de Frio cego contendo a assinatura letal flag SUID autoriza passivamente o plebe mortal local comum usuário Linux magico puro rodar executando Aquele programa mestre vestindo momentaneamente o Deus Root Autor sem saber ou ter senhas root vivas. (Bom para o passwd humano binario deixar humanos mudarem shadow, O Fim do Universo Perfeito Hack cego se der Suid Bit ao Nano Mestre Editor Vim de configuração cego deixado vivo nas pastas).' },
      { type: 'code', title: 'Varredura Suprema LPIC Exam Localizador de Fantasmas Mortais Cego Find', prompt: '# Auditeando Binarios SUID Frios Magicos Cegos do Disco Base:\n# Exija sempre de memoria estes cinco param limitantes mestre exame:\n# 1) Permiso letal Magico Base Cego Octal -perm /4000 (O Ou cego barra) ou -perm -4000\n# 2) Do Deus Tipo Físico Mestre Criador Raízes Purista -user root\n# 3) E Tipo de arquivo puro Type (Arquitetudo Regular -type f cego oculto)\n# 4) Silencie ao dev nullo ruidosos erros de ler diretórios feios 2>/dev/null cegos puro. \n$ find / -perm /4000 -user root -type f -exec ls -l {} \\; 2>/dev/null', output: '' },
      { type: 'heading', level: 2, emoji: '🔑', text: 'Cripto asimetria Fundamental Global PGP GNU Magica Encriptador Fria Base' },
      { type: 'table', headers: ['Chave Mágica Pública de Lançamento Cego Universal ao Ar livre Mundões', 'Chave Secreta Padrão PrIvada Puramente Esculta Cofre Cega Magica Fria Ocultismo HD Local'], rows: [
        ['Você Atira sem Do pro Mundo GitHub Servidores Llaveros cegos (Permite Deuses e amados doentes Encriptar a Fuego Magico os Texto puros pra TI. Te permite também que os Ouros confirmem as Tuas Firmas Cegás puras. )', 'Gera-se do PC nunca sai do PC. A única Matemática do Sistema Solar que Detonará a Armadura Reversível pra te devolver o Documento puramente criptografado por alguém.'],
      ]},
      { type: 'code', title: 'Manobras Cegas GPG Comandos Funcionais Puramente Livres Práticos:', prompt: '# Generar sementes Cegas Magica Vida Pura GPG chaves (A Dupla Pública e Secreta Par):\n$ gpg --gen-key base\n\n# Sacar y Expirar publicamente chave purista sua pra exportarla texto Humano Mágico Armor (-a asc cego texto plano vivo)\n$ gpg -a --export mialtura@amim > chave.asc cega puro mágico\n\n# Embutir Engolir Importando no teus registros ram a Publica Chave de um Estranho Magico puramente pra Criptar a Ele dps Mágico :\n$ gpg --import amigo.asc\n\n# Encriptar e Blindar pra ele cegamente puro com "-e" e destinatario Receptor blindado Cego Receptor Recipient "-r" Magico Fogo Purista.\n$ gpg -e -r amigo_mail doc.txt', output: '' },
    ]
  },

  'lpic1-102-110-2': {
    title: 'Limites de Força Cegas (Chage Senhas vs Ulimit Ram) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🛂', text: 'Desgastes Místicos Puramente Frios Envelhecimentos Cegas Age (Shadow Limit)' },
      { type: 'table', headers: ['Modificador Cego Purista "Chage Comando Físico Executável Magico"', 'O Parametro que Toca No Cofre De Deus Frio Mágico /etc/shadow Purista Cego Colunar Absoluto'], rows: [
        ['-l (List Listage Oculta Visível Mão Cega Pura Humana do Usuário)', 'Enxergador passivo base pura de limites cegas expirativos.'],
        ['-M (Max) dias Absolutos puros forçados de limitação', 'Corta Vidas. Expira obrigatoriamente forçado Reseta a Password Magica de 90 dias base cegos mortos.'],
        ['-m (Minimo Limite Base Tolerante)', 'Tranca Trolls. Usuários cegos de zueira tentam mudar a senha e regreassar pra atual burlar 90 dias. Mas com 10 min, só deixará resetar apoś rodar 10 dias vividos reais.'],
        ['-W (Warning Alertas Chatas Popups Magicos Login SSH)', '7. Com 7 dias mortais puros da validade limite, avisa os Desktops humanos pra trocar.'],
      ]},
      { type: 'heading', level: 2, emoji: '👮', text: 'Coleiras Puristas Mágicas De Vida Ulimit Base Máquina TTY Cega' },
      { type: 'paragraph', text: 'Você mata um Unix raiz se deixares TTY base usuários cegos puros jogarem loops cego Fork Bombs (:(){ :|:& };:) puramente forçados clonadores consumindo Arquivos NF infinitos. Usa -se as travas `ulimits` cegas passivas da shell base e config magica central de mestre.' },
      { type: 'list', items: [
        { term: 'Terminal Cego Visual Puxador Excuta Vivo ulimit -a Limit.', desc: 'Imprime na Cega Ram da sua sessão as regras absolutas vigentes soft purista.' },
        { term: 'O Documento Configurante Supremo do PAM Limitadores Puros Limits_conf cego /etc/security/limits.conf', desc: 'Edita a chapa purista em regras hard cego forçado do servidor boot global.' },
        { term: 'Batalha Cega do Domínio de Céus Hard Lim vs Terreno Cego Soft Limt.', desc: 'O Soft Limite Frio Purista: Você humano Mágico dono user pode diminuir ou pisar crescer teu limite cego DE BOAS. Mas tu BATE CABEÇA cego contra um teto Inquebrável (Hard Limits CEGOS). Só o Deus ROOT Administrador magico pode mover Aumentar as travas do Hard Limit absolutos forçado Mágico no conf!' },
      ]},
    ]
  },

  'lpic1-102-110-3': {
    title: 'Fechaduras do Mar Castelo Demônios SSHD Cego e Hosts.Allow de Muralhas (TCP Wrappers Base Ocultas) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'A Cidadela Oculta Fria Magica Ssh Cega (OpenSSH /etc/ssh/ Base)' },
      { type: 'paragraph', text: 'Diferencial do Suplicante Cliente config ssh_config purista magico. Nós blindamos o `sshd_config` servidor receptor cego! Que roda no porteiro 22 Mestre Oculto do mundo.' },
      { type: 'table', headers: ['As Cordas Configs Magia Do SSHD_CONFIG Cegos Mortos', 'Relevância Defensa Cega Absolutamente Purista Inquebrável Frio.'], rows: [
        ['Port 2355 Mágico Falso Camuflado Base', 'Limpa o Logvar cego de ataques script kiddy mundiais magos port 22 básicos globais forçados puros cegos limpos mortos.'],
        ['PermitRootLogin Cego Magico `no`', 'Regra 1 dos deuses de Segurança Magica Mundo base. Jamais Deixe o Brute Force Frio mundo login cego root.'],
        ['PasswordAuthentication no cego base.', 'Corta a linha da Letra Digítavel Senhas humanas. Libera o portal e acesso exclusivo Cego Frio unicamente as Chaves privadas PGP Certificadas Cegamente Base Passkeys vivas do pen drvive RSA ed25519 puros mortos do .ssh base. Sem chave = Drop da Porta direto e Ban Fixo Mágico Cego.'],
      ]},
      { type: 'code', title: 'Arsenais e Escoltas Cegas Puristas Do OpenSsh Lpic chaves Mágicas Vida', prompt: '# 1. Padrão ssh-keygen (Gerador magico puro do par base Chaves publicas vivas RSA/ Ed25). Criadouro de cofres.\n# 2. Caminhao cego Voador Magico "ssh-copy-id" Mestre Frio. Ele se logga seguro usando a velha password ao servidor gringo amador cego, transfere Mágica Segura Purista da sua Chave PublicKey .pub da sua PC local vivo, e escreve e anexa lá e cola cravado limpo dentro do Templo Base Authorized_keys magico servidor. Blindando e destrancado pra voce sem repetiçoes pra sempre eterno vivo remoto passivo no SSH.\n$ ssh-copy-id root@server_gringo_cego', output: '' },
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Barreiras Passivas e Wrappers Envolvedoras Mortais TCP Cegás (Muralhas Moles Cegas)' },
      { type: 'paragraph', text: 'A antes da filtragem brutal de iptables frias cegos puros bases do SO Mágico. Envolvíamos e Envolvemos as chamadas de Apps como SSH cego puros com Ficheiros Texto Limitadores De Rede base Ocultos TCP base:' },
      { type: 'list', items: [
        { term: 'O Documento /etc/hosts.allow Vivo Privilegio de Elitismo Oculto Cego', desc: 'Se um pacote cruza e seu IP origem estiver perdoado Mágico e listado aqui no Allow (eg `sshd: 192.168.0.`), o Castelo de Linus abre magía puros os braços sem consultar firewall pra cima do serviço. Oculto cego básico permitive.' },
        { term: 'O Documento /etc/hosts.deny Machado Ceifeiro Oculto Matador Cego Frio', desc: 'Tudo do mundo vivo não atado ao Mágico Allow de Cima, Baterará brutal a porta e o Demonio Rejeitará cego conexão crua poupando CPU mágica purista e TCP SYN Cegas infinitos (eg: `sshd: ALL` bloqueio absolutista Cego Extremo pro Mundo e Internet Morto de Base SSH). Padrão cego Lpic mágico antigo.' },
      ]},
    ]
  },

}
