// LPIC-1 101 Lesson Content — Portuguese

export const lpic1_101_lessonContent_pt = {
  // ─── TOPIC 1: Arquitetura do Sistema (101) ───
  'lpic1-101-1-1': {
    title: 'Determinar e Configurar Hardware',
    content: `
O Kernel Linux gere o hardware e fornece informações aos utilizadores através do sistema de ficheiros virtual \`/proc\` e ferramentas dedicadas.

### Diretórios Importantes
- \`/dev\`: Contém ficheiros especiais de dispositivos (ex: \`/dev/sda\` para discos, \`/dev/tty\` para terminais) que apontam para o hardware real. Estes nós são preenchidos dinamicamente pelo processo udev.
- \`/proc\`: Sistema de ficheiros virtual na RAM fornecendo informações do sistema (ex: \`/proc/cpuinfo\`, \`/proc/meminfo\`, \`/proc/interrupts\`).
- \`/sys\`: Preenchido nativamente pelo kernel listando classes de hardware, PCI e árvores de autocarros (sysfs).

### Comandos de Hardware
- **\`lsusb\`**: Lista o barramento USB e os dispositivos fisicamente conectados a ele.
- **\`lspci\`**: Exibe informações detalhadas sobre os barramentos PCI do sistema e os componentes conectados a eles.
- **\`lshw\`** (List Hardware): Gera um relatório amplo extraindo CPU, RAM e informações da placa-mãe.

### Módulos do Kernel (Drivers)
Os drivers no Linux são módulos compilados (\`.ko\`) que o kernel pode carregar de forma dinâmica.
- **\`lsmod\`** (List Modules): Analisa \`/proc/modules\` para mostrar quais módulos vivem atualmente ativamente na RAM.
- **\`modprobe\`**: Inteligente, carrega ou descarrega um módulo específico em simultâneo com a cadeia de dependências em falta que esse módulo necessita.
- **\`modinfo\`**: Lê o cabeçalho de um módulo, autor, descrição e parâmetros aceites antes mesmo de inseri-los no SO ativo.
    `,
  },
  'lpic1-101-1-2': {
    title: 'Inicialização do Sistema (Boot)',
    content: `
O processo de inicializar um servidor Linux envolve 4 fases críticas inflexíveis:
1. **Firmware POST (BIOS/UEFI)**: Inicialização de Hardware que termina com a pesquisa direcionada a uma unidade de arranquez.
2. **Bootloader (GRUB2)**: O firmware cede controlo ao GRUB2. Este exibe o menu do SO, aloja o Kernel e prepara o sistema de ficheiros RAM provisório vital \`initramfs\`.
3. **Inicialização do Kernel**: O Kernel monta o initramfs, e extrai todos os drivers fundamentais ausentes (Como RAID ou LVM) necessários para realmente detetar e montar a verdadeira e profunda partição raiz física no disco: a sua \`/\`.
4. **PID 1 (systemd / init)**: O kernel solta o controlo absoluto lançando o Pai supremo dos processos (frequentemente \`systemd\`) que começa a orquestrar utilizadores visuais, ligações de rede e os Servidores Web!

### Visualização dos Logs de Arranque
- **\`dmesg\`**: Extrai a folha de histórico instantânea do 'Kernel Ring Buffer'. Absolutamente crítico para intercetar o somatório trágico de hardware mal comportado, periféricos com deficiência e instabilidade severa nos drivers.
- \`journalctl -b\`: O padrão moderno num sistema systemd. Extrai o diário do boot (-b) contínuo.
- \`/var/log/messages\` ou \`/var/log/syslog\`: Ficheiros de diário de arquivo estático persistentes com todas as notificações permanentes que ocorreram no boot.
    `,
  },
  'lpic1-101-1-3': {
    title: 'Runlevels e Systemd Targets',
    content: `
O Sistema flui em modos de ambiente de transição! Inicialmente conhecidos no velho SysVinit por "Runlevels", modernizados hoje pela linguagem de "Targets" (Alvos) na fundação Systemd.

### Equivalentes de Alvos em Relação a Runlevels
| Runlevel V | Systemd | Explicação da Execução |
| :--- | :--- | :--- |
| **0** | \`poweroff.target\` | Encerramento de Todo o Computador Local (Halt/Poweroff). |
| **1** / **s** | \`rescue.target\` | Modo Single-User rigoroso seguro sem networking ou utilidades extras. |
| **3** | \`multi-user.target\` | Ambiente CLI Consola-Texto Purist Completo sem qualquer Gestor de Janelas e com Rede total. |
| **5** | \`graphical.target\` | GUI interface multi utilizador padrão e som gráfico. |
| **6** | \`reboot.target\` | Invocações bruscas de Reinicio a Quente. |

### Transições Systemctl
- \`systemctl get-default\`: Permite conhecer o que o boot fará amanha (Alvo Padrão).
- \`systemctl set-default multi-user.target\`: Tranca o modo puramente consola eternamente sem carregar vídeo GUI.
- \`systemctl isolate graphical.target\`: Executar isto saltará fisicamente em milissegundos deste nível para renderização gráfica imediata como os clássicos 'telinit 5'!

### Execuções de Ficheiros Físicos de Desligamento de Força
- \`shutdown -h now\`: Executa o "Halt" Imediato desligando instantaneamente e limpamente tudo!
- \`shutdown -r +20 "Manutenção!"\`: Alarma fortemente pela CLI via (\`wall\`) que as pessoas logadas devem evacuar o sistema e prepara The Reboot Programado a 20 minutos completos.
    `,
  },

  // ─── TOPIC 2: Instalação e Gestão de Pacotes (102) ───
  'lpic1-102-1-1': {
    title: 'Layout Numérico Rígido no Disco',
    content: `
Admins de servidor projetarão rigidamente os alicerces no metal cortando setores lógicos organizantes vitais as (Partições).

### Mapeamentos Primordiais Inalteráveis
- **MBR (Master Boot Record)**: Formato pré-histórico. Suporta apenas tamanhos menores que 2TB de armazenamento global máximo. Preso num máximo matemático inquebrável de possuir meras 4 partições Primárias absolutas totais. (Recorre-se desesperadamente às Partições Alargadas/Lógicas).
- **GPT (GUID Partition Table)**: Moderno (Frequentemente em UEFI Mainboards originais atuais). Com suporte inquebrável até limites imagináveis cósmicos imensos a níveis Terabytes absurdos nativos e 128 divisões de partições primárias de pura fábrica abençoada!

### Mapeamento Oculto FHS de Montagem
- \`/\` **(Root Raiz Suprema)**: A Mãe e base central de montagem unificadora total da árvore de ficheiros puras de UNIX C!
- \`/boot\`\`: Trancafiado fisicamente ao primeiro setor giratório por norma. Aloja rigidamente GRUB e o poderoso misterioso \`vmlinuz\` (O Linux Kernel em si). A placa UEFI irá pedir a partição rígida separada com o misterioso formarto "VFAT" vulgarizada EFI System Partition (ESP) lá!  
- \`/home\`\`: A gaveta social de pasta comum visual do utilzador da base local nativa de ficheiros. Particionados afastadamente para você instalar Ubuntu de zero mas sem erradicar as músicas base dos users!
- \`/var\`\`: Ficheiros Váriaveis orgânicos do dia base! Ex:(Logs web e email local e Bancos Base nativos de DB MySQL!). Ao separar purificamente este monstruoso buraco das devoradoras raízes lógicas '/' do seu OS principal... previne a esmagadora falha Kernel mortífera OS de encher por cento do servidor OS Root Principal por causa de ataques SQL nojentamente colossais base log nativo descontrolados!!
- **Swap**: Abismo invisível salvador sem raiz orgânica! A zona virtual bruta estática. Caso um desastre inunde sua RAM volátil do PC, a Swap aloja forçada a sobra ao longo impedindo acidentes fatais com esgotamento sem margem do Kernel Fatal Crash OOM.
    `,
  },
  'lpic1-102-1-2': {
    title: 'Gestor de Bootloader GRUB2',
    content: `
**GRUB2** coordena na hora negra terminal as diretrizes operacionais. Um multi gestor supremo (e base do Dual-Boot do mundo Linux e Windows no metal rígido do setor master MB Base e Efi).

### A Santíssima Trindade Conf de Regra Absoluta GRUB
- **/boot/grub/grub.cfg** (Centos/RHEL base /boot/grub2/grub.cfg): A Configuração Mestra Gerada Pura Robótica e sagrada. É Extremamente e restritivamente proibida a manipulação livre em texto pelo utilizador. Pise lá e na manhã seguinte a máquina a atualiza por scripting matando todas as notas originais mortas por sua teima e insolência cruéis.
- **/etc/default/grub**: É Aqui! Base Central limpa! Várias mudanças como contador do relógio Timeout local ou injetar códigos puros profundos ao núcleo antes que sequer lance: \`GRUB_CMDLINE_LINUX\`.
- **/etc/grub.d/**: Fragmentos dispersos base \`10_linux\` de códigos pesados lógicos e shell scripts automatizados que no final formarão os alicerces no código central mestre!

### Evocar Atualizações GRUB
Após qualquer suor gasto ao editar o \`/etc/default/grub\`, a recompilação forçada em todo OS necessita a geração local!
- RHEL/CentOS Nativo: \`grub2-mkconfig -o /boot/grub2/grub.cfg\`
- Família Debian: Wrapper \`update-grub\`.
- Instala a cabeça base dura sem apelo no Setor Base de Arranque de disco Master MBR Base Pura: \`grub-install /dev/sda\`
    `,
  },
  'lpic1-102-1-3': {
    title: 'Dependências de Bibliotecas Compartilhadas (Shared Obj)',
    content: `
A fim de prevenir binários puros monolíticos mastodônticos que gastem o infinito da Memória e PC de RAM locais do SO (Exemplo 4 aplicações de Media C tocadores exigem a base inteira gigante dos drivers MP3 separadas nos 4 puros e colossais). Unix partilha estas almalgamas base isolando o núcleo base em Partilháveis **Objetos (.so)**!

### Monitoramento LDD Profundo
- **\`ldd /bin/bash\`**: Extrai cirurgicamente sobre quem o próprio programa comando 'bash' necessita do exterior do ambiente OS (Exemplo listar \`libc.so\` do caminho C C++ vital para rodar vivo)!

### Gerir Caminhos Dinamicos (Linker e ldconfig)
Seria mortífero base e um crime forçar a placa giratória crua procurar todas em /usr do raiz total cada momento se um utilitário se abre lento ao local C base.
- **/etc/ld.so.conf**: Ficheiro texto nativo do sistema que guia e insere locais e subpastas (/etc/ld.so.conf.d/) ao Sistema OS base onde tem de ir escavar novos .So puros para a base dele.
- **\`ldconfig\`**: Comando mestre bruto supremo root sem base interativa. Sempre invocado após inserir ou despejar ao ar livre no servidor nova pasta com novas bibliotecas soltas extraídas na selva do /opt/ base puro!
- **/etc/ld.so.cache**: Produzido e recriado pelo seu comando local acima \`ldconfig\`. Base Pura compilação ultra sonicamente crua das libs baseadas rápidas de acesso.
    `,
  },
  'lpic1-102-1-4': {
    title: 'Debian e DPKG Packager',
    content: `
Nas ramificações derivadas de base de Debian e Ubuntu, a magia base e arquitetura puríssima terminal reside nas caixas do estilo mágico do `.deb` e de todos eles local APT!

### DPKG (Guerreiro solitário offline Low-level base)
\`dpkg\` está amarrado puramente a arquivos em estado solitário de armazenamento que tenhamos feito o sacode de uma PEN USB Base no sistema: NADA descarrega pela nuvem!
- \`dpkg -i file.deb\` : (Install). Injeta na raiz bruta. Morre afogado miseravelmente exibindo erros dependentes violentamente se base pacote precisa e exija outros que faltaram ao arrancar na USB Base!
- \`dpkg -r base\`: Remove base programa. As regras configs .confs secretas criadas do pacote pelo utilizador ficam em paz na escuridão por sobrevivência no servidor /etc.
- \`dpkg -P base\`: (Purge Base) Radicação suprema de base aniquilação! Limpar pacotes e destruir simultaneamente cruamente todo conteúdo originado na raiz configs em etc/base permanentemente.
- \`dpkg -l\`: Ligeira listagem completa visual pura.
- \`dpkg -S /bin/ls\`: Executa profunda pesquisa \`Mapeador (Search Base)\`. Encontra pacientemente debaixo de terra quem no mundo gerou a extração que lançou o /bin/ls da sua máquina original deb base pura e limpa final no sistema original sem rodeios!

### APT Gestante e Cloud (High-Level base puro)
Aptidão extrema e Inteligência! Descarregando base com links originais cravados de base nos anais e raízes mestras em:  **\`/etc/apt/sources.list\`**!!
- \`apt update\`: Exclusivamente para sacar o cabeçalho base de catálogo textuais puras novidades das novidades no servidor distante internet e do registo das livrarias locais sem extrair código um único pacote de si da atual base purista local OS de raiz!
- \`apt install pacote_X\`: Não questiona nem falha. Descarrega puramente ele. Encontra, empacota e engole de forma sublime os sub links em falta que dão problema do Dpkg puros e os instala em sequencia imperturbável mágica!
    `,
  },
  'lpic1-102-1-5': {
    title: 'YUM / RPM (Mundo RedHat)',
    content: `
O Mestre dos Red Hats, SUSE, E Rocky Base. Estes formam caixotes nativos com extensão mágica **.rpm**.

### RPM base do Gestor local baixo
- \`rpm -ivh file.rpm\` (Instalacao de pacote limpo + Verbose e Visual Hash base '#' formatação de barra).
- \`rpm -e pacote\`: Erradicar os resíduos puristas de pacote Base.
- \`rpm -qf /bin/bash\`: Query File limpa no núcleo (Como dpkg -S local purista). Identifica silenciosamente a família nativa originária de dono proprietário do RPM instalado raiz final.
- \`rpm -ql pacote\`: Lista nativa purista de forma base do que ficheiro atirou a base na máquina do seu Kernel nativo purista base.

### O Ancestral e as Torres YUM // Dandified YUM (DNF)
Yum rege redes bases altas RHEL de forma desastrológica base de dados lógicas com morosidade. Mas no Cêntos puro e Fedora 8 ascende sua força suprema base terminal originada no núcleo Dandified YUM purista de base veloz do **\`DNF\`**!
Configs em: **/etc/yum.repos.d/**.
- \`dnf search word\` : Espreita e extrai purezas puristas no servidor rede internet base isolada de buscas originais catalogadas limpas pacientemente local purista sem apelo e base purista sem demoras final e forte terminal nativo terminal.
- \`dnf remove pacotex\` : Apaga e dissolve puramente do kernel original tudo e rastreia por extripação a vida isolada orfã que base anterior pacotes sujos sujaram isolada nativa base de forma purista fina terminal de comando veloz sem limites de OS root base de permissões no terminal!
    `,
  },

  // ─── TOPIC 3: UNIX e Filtros Base (103) ───
  'lpic1-103-1-1': {
    title: 'Nomes Secretos de Ambientes Base Comandos',
    content: `
Ao atirar comandos puramente no vazio terminal Bash de Unix a mente original Linux OS navega num labirinto purista veloz de priorização originada!

### Identidade Nativa do Sistema de Ocultação Base Terminal
A Bash persegue cegamente por esta base e nível de escalão nativa isolada pura cega e cega no terminal de execução da raíz:
1) **Aliases**: Siglas nativas personalizadas (ex \`ll='ls -la'\`). Prioridade total originaria sem limite!
2) **Built-in de Shell**: Ficheiros fantasmagóricos originados cruamente da placa purista base residente local isoladamente purista que não tem nenhum arquivo originário isolado físico (\`cd\`  não existe num lugar fixo físico nativo no /bin e sim memória de RAM residente nativa ao lado do Kernel puramente base de shell puro e sem peso final no pc e uso).
3) **Rotas PATH Externa Binary**: Programas reais pesados reais originários físicos (C++) lançados como /bin/cat puristas local originário em nativa localização no OS base.

### Diagnósticos Rápidos Base de Córtex
- **\`which\`**: Restritivo. Sondando o cego purista do \`$PATH\` base terminal até trazer a versão física real oficial escondida externa do arquivo OS final binário (como \`/usr/bin/cat\` exclusivo base purista). Não fala mentiras puristas.
- **\`type\`**: Sábio nativo absoluto. Responde-te sem rodeios e segredos se base de originaria \`cd\` é um Built-in Shell ou uma externa do diretório local root de OS base linux.
    `,
  },
  'lpic1-103-2-1': {
    title: 'Trituradores e Filtradores Puros (Text Base)',
    content: `
O princípio inquebrável do universo absoluto base terminal purista Unix de origem e nativa terminal isolada: TUDO NO BASE LINUX SÃO MENSAGENS PURAS ABSOLUTAS TEXTUAIS ORIGINAIS LIMPAS!

### As Válvulas Nativas Originárias e Leitores de Inspeção 
- \`cat /etc/passwd\`: Liberta cegamente e na totalidade no originário terminal shell texto o seu vómito sem critério limpo.
- **\`tail -f auth.log\`**: Retira limpo a secção das últimas local final puras linhas do ficheiro nativo isolado. A magia inquebrável bruta suprema do (Follow \`-f\`), obriga o terminal bash puro congelar vivo escutando eternamente ao ficheiro final, jogando nativamente à vida na hora e milissegundo as próximas inserções de invasores puros e nativamente isolado as ações base dos logs na hora H puramente vivo e sem reiniciar o comando terminal original!!
- **\`wc\` (Word Count)**: Tira contagem purista base originaria de dados limpos. O sufixo modificado de Base (\`-l purista Lines\`) diz-lhe que só aceitará atirar sem cerimónias restabelecendo a devida contagem numeraria base apenas da quantidade originaria de filhas de linha de terminal e fecha velozmente nativa.
- **\`sort\`**: Larga as entranhas limpas e por ordem pura do alfabeto final. No originário de número ele quebra-se, até o argumento supremo \`-n\` os corrigir em verdadeira progressão aritmética originária terminal. O sufixo base \`-r\` os reverte a z/0 final terminal originária.
- **\`cut\`**: Gira as navalhas cirúrgicas puros base terminal de campos limpos \`-d:\` define e purifica que a dois pontinhos é a divisão (Delimiter) exclusiva originaria pura! e o purista flag cego mágico de \`-f\` corta ao alvo limpo da 1ª nativamente ou à base puramente e isolada das segundas linhas cegas na vida terminal pura. 
    `,
  },
  'lpic1-103-4-1': {
    title: 'Correntes, Canais, Pipes e Desvíos de Saídas Base Puras',
    content: `
Estes operam isolados a 3 rotas inquebráveis mestre puristas de origem vital:
- **0 - Stdin purista base**: Rotas originadas ao teclado isolada local terminal cega. Você escrevendo vida.
- **1 - Stdout purista nativo base**: Uma maravilha do programa original base purista dizendo as glórias e sucesso puras.
- **2 - Stderr originaria mestre**: Restrito canal limpo focado impiedosamente para atirar fatalidades puros sem incomodar o canal limpo 1 original e nativa de glórias base terminal.

### Lançar os Despejos base Originários sem Rumo base:
- \`find / -name "pass"\` **\`>\`** \`acertos.txt\`: Atira do monitor base o glorificado cego canal base limpo '1' a favor de substituir um ficheiro vazio purista. E esmaga sem pena o que ele tem e já era original e isolado.
- \`find / -name "pass"\` **\`>>\`** \`acertos.txt\`: Acrescenta carinhosamente e com paciência profunda puramente as conquistas ao debaixo base (Append originaria) originadas sem partir.
- **\`find / -name "lixo"\` \`2> /dev/null\`**: Ao procurar nas gavetas do ROOT a shell atiraria no ecrã e terminal mil sujas mensagens puras e base nativas cegas lógicas originadas de "Pass Negada limpa". Este golpe fatal diz: Pega no Lixo base 2 Stderr puro, atrai-o direto sem dó limpo ao Vazio Buraco Negro e cimentado Base do /dev/null original. E mantém intato a procura base dos acertos cego 1 a seu PC na tela.
    `,
  },
  'lpic1-103-5-1': {
    title: 'Matadores Vivos - Gestores de Jobs e Signals Invocáveis',
    content: `
Sempre há momentos que base a processar nativos isolados puros ficam rebeldes travando OS. A arma Pura: Sinal!

### As Cartas de Sentença "KILL" base purista:
Na caçada aos \`ps -aux\` de números PID limpos no cérebro puro originada base CPU.
1. **SIGTERM (\`kill -15 1520\` originário terminal)**: Sinal padrão gentil, calmo original base do mundo \`kill 1520\`. Avisa puramente por favores locais. Base App nativa grava sua memória terminal e decide que vai terminar pacificamente e cimentada! Pode ignorar a chamada base terminal se tiver com erro de sistema travado terminal. 
2. **SIGKILL (\`kill -9 1520\` o golpe impiedoso original base)**: Um demónio cego inquebrável. Invocado no terminal por base "-9" terminal. A guilhotina purista cai pura base e afiada ao ponto original da raiz cega originária Kernel e fatia a alimentação original RAM vital sem perdoar ou tentar negociar base ao Kernel puro da memória terminal isolado. Nada perdoa e fecha o travamento purista terminal base! (Aviso base puros: Podes perder OS sem salvarem log pura da atividade anterior). 

### Fugas Background \`&\` originárias:
Ao invés de chorar no bloqueio terminal, lançe pacotes e ferramentas puros adicionando ao fim da purista bash terminal o sinal final base terminal **\`&\`** \`tar -cvzf backup.tgz /etc & \`. Mágico! O Backup chora correndo isolado na noite obscura Background (bg), com você recuperando pura liberação instantânea ao teclado promt e cimentada pura original terminal.
Podes travar o programa já a bater lento teclando limpo **(Ctrl + Z)** puramente Suspends the Job, retornando com o BG (lança-o originário atrás puro nativos na raiz e bg de base CPU purista).
    `,
  },
  'lpic1-103-6-1': {
    title: 'Scheduling de NI (O Poder Original Nice e egoístas terminal)',
    content: `
Múltiplas vidas correm do Linux OS Terminal simultâneas! A balança de decisão pura de quem puxa e agarra com egoísmo força bruta base purista de "CPU TIME SLICE TIME" reside puramente na sua pontuação bondosa base do (Nice Pura NI). A gentileza de -20 a +19 terminal puro. Base originária Linux de lançamento cego limpa purista padrão de número puro (0).

### Os Anjos e Demónios Base
- Um índice no céu originário bondoso puríssimo de **+19** atinge santidade! Os utilitários baixam cabeças originárias terminal puros e entregam na raiz original da força base toda a folga e pedaços soltos de puros de pingo da sua CPU só nas horas livres pacíficas de base que faltam do SO mestre isoladamente e sem correr purista. (Isto serve e basta puramente originaria das tarefas backup crons soltas passivas noturna.) Users soltos podem puxar valores doces puros para a base de valores base altos sem pedir favor puro a base root sudo purista base.
- Já no abismo originário purista de um furioso valor numérico das profundezas como o impensável **-19** ou invencível máximo base **-20** ditarão ordens letais base originais de poder avassalador tirânico e egoístas base originária aos kernels Linux OS puro! Passarão e exigirão saltos aos demais base CPU puristas sem pena empurrando e esmagando os purista a lerdeza. (Dada esta malícia pura avassaladora base nativo... puramente os root supreme lords e sua base terminal podem empurrar os puros valores abaixo do 0!). Usa o poderoso originário comando **\`nice -n 12 basecomando\`**!
    `,
  },
  'lpic1-103-7-1': {
    title: 'Regex a Linguagem Original Universal Base',
    content: `
Grep nativo procura não base puramente letras. Mas regras absolutas lógicas inquebráveis puros lógicos na base terminal!

- **A Letra Morta Limpa (\`.\` Pontualidade)**: Simboliza como na lei uma única base exata restrita, unicamente e isoladamente livre de letra única pura do alfabeto base, cega ao teclado. Ex (B.la acha purista Bola e Bela limpos de OS).
- **O Falso Inquebrável (\`*\` Astériscos)**: A maior ilusão original que Linuxers atiram de Windows bases! Não serve original puramente e limpa no terminal como símbolo da palavra cega "Tudo"! Aqui, o poderoso base purista puramente pega a purista Letra exata ao lado do seu limite da mão esquerda base terminal puramente e a eleva e obriga a uma "Zero originária Omissões Puristas até Repetições e Clonações base Infinitas baseadas de sua forma origem Puras" da mesma pura cega terminal base isolada. ( \`.*\` puramente cria o "Qualquer purista e clone solto e originaria até infinitos sem base originaria e nada de puros terminais").
- **Tectos Puros Cimentado Limpos Originários (\`^\` Carets)**: Agarra violentamente puros acertos puramente às primeiras bases terminais puristas das esquerdas marginais puras. A fundação de linhas bases originais e nativamente de linhas iniciais cegas exatas!
- **As Fundações Últimas da Viela Purista (\`$\` Dollar de Linha terminal base pura limpas e firmes originais puristas terminais e firmadas fixas isoladamente)**.
    `,
  },
  
  // ─── TOPIC 4: Arquiteturas de Bases Filesystem e Montagens Puristas Finais (104) ───
  'lpic1-104-1-1': {
    title: 'Particionadores vs Formatações Puristas de Formato mkfs terminal Base',
    content: `
Os utilitários clássicos das facas fdisk originárias apenas limitam com réguas limpas de bases lógicas abstratas em lógicas cegas divisões puras limitantes de discos rígidos em puras pedras sem alma limitando fatias puros abstratas de forma cega de origem puras em linhas base de tabelas originárias puros terminal.

A sua essência final purista e inquebrável origem local ext4 purista final terminal, formadora de árvores diários root mestre Journaling limpos é derramada sem piedade após as tabelas via ferramentas de puro terminal de linhagem criadoras construtores bases terminais originárias de: MakeFile Sistema \`mkfs\`.
No terminal isolado: \`mkfs.ext4 /dev/sdb1\`.
Um erro fatal originaria sem puramente atenção: Partições limpas e baseadas do nada swap de base puros de OS, por não carregarem a originária puros e estrutura pastas organizadas nas pastas lógicas, isoladamente negam base Mkfs puro ext4 e requisitam a invenção da \`mkswap /dev/sdb2\`, e ligam ativadores puros base terminal da original cega \`swapon\`.
    `,
  },
  'lpic1-104-3-1': {
    title: 'Automatizações Santas Imutáveis (/etc/fstab)',
    content: `
Para evitar re-montagens brutas de Linux isolados via comandos manuais infinitos a fstab originária pura é lançada cruamente isoladamente e sem intervenções das suas mãos por bootloads no SO!
Possui cegas ordens e de 6 filas divinais limpas puras restritas de formatações base OS puros. (Destino Original \`/dev/sdb\`, Montagem purista \`/var/ftp\`, Arquitetura formato puro \`xfs\`, Direitos e Defaults puros OS \`ro\` ou \`rw\`, Backup Fiel terminal Base limpos, Scan Fsck base puros Inquebrável puros das passagens nativa 0 1 2).

O LPI exige puramente que paremos de mapear com puros nomes voláteis nativo terminal limpos \`sdb\` puristamente e fixamente na raiz originária, ou amanhã de puro pendrive conectado cruzará as USB e afogará seu SO puro boot falhando fatal e cimentado. Extrairemos com originais puros de terminal blkid as gigantes e colossais restritas UUID Universais Imutáveis de letras base fixadas pelo universo e deuses limpos puristas, enfeitando-as de origem e limpas fstab puro originais \`UUID=x86h6\`. Nunca desamparará e resistirá cegas de local originária física limpa terminal!
    `,
  },
  'lpic1-104-5-1': {
    title: 'Arquiteturas Octais Terminal de UNIX Permissões Puras Originais Base e Bits',
    content: `
Cada ficheiro base puro vive ao relento sobre 3 guardiões originais (The User Puros criador cego e isolado base. The Group amigos de chroot de cego Unix original limpo terminal puros, E the Others e originariamente The puros Restos mundiais sem base limitados originários OS puro inquebráveis e nativos globais terminal limpas e puramente bases cegas).
Matemática Pura 4=Lê de base Puros sem edições e vida original OS pura, 2=Grava puros puristas originaria da pasta OS, 1=Executa perigos.
Um 644 atira pura de U(Ler+Gravar limitados) G(Ler isolados e originária) e Other(Apenas lendo originais limitados).

Mas temos mutações terminal de OS Bits Especiais de Bases:  Exemplo o mágico **SUID OS terminal puro**: As originais OS travas impenetráveis da raiz password de /etc/shadow limitados isolados negam puros acessos aos operários sem os poderes mágicos Root puros! E como root limpo originará a passagem livre limitada puros puros puros de password sem eles chorarem o comando puro no OS OS terminal original linux OS de permissão raiz root puro purista?
SUID é fincado terminal OS puro no executáveis de comandos originários e mágicos como purista \`passwd\`! Isto injeta temporalmente pura nos utilizadores a magia de assumirem por uma nano execução terminal de purista originária OS root puro raiz sem OS e cimentados! OS de raiz base puro nativamente!
    `,
  },
  'lpic1-104-6-1': {
    title: 'Links Base: A batalha de originário Inodes Limpa vs Textos Shortcut Base',
    content: `
- *Symlinks Simbólicas Puras (ln -s base originais de SO puro e abstrativos lógicos terminam)*: Ficheirinhos vazios repletos e frágeis base que a sua única base de OS puro e OS purista reside de um apontar digital escrito à mão frágil limpo (Atalho como de Windows atalho puro OS base OS original). Rompam o original limite os caminhos OS originários originais do alvo mestre e o coitado órfão OS link desata fatal chorar o vermelho cego vazio da quebra de atalho no OS originário purista e puro de morte do terminal "Broken link base purista limpos originário puro e cego terminal limitados e puristas isoladamente sem bases terminal".
- *HardLinks Inquebráveis Puros (ln absolutos bases puros lógicos)*: Magia original do OS de bloco ext4 limitados. Nenhum os limpos origina originário ponteiros base limitados texto base limpos terminais cimentada cegas! Ele cruamente partilha a nativa e verdadeira identificação central \`Inode\` do seu criador imaculado base original e OS original OS nativos OS originário. Torna-se puramente original 2 clones de gémeos independentes inquebráveis ao mesmo tijolo bloco original da drive. Mata um num \`rm\` limite base puro? Não interessa! O Inode OS puro do HD isolado jamais limitará a destruição ou choro originário OS puro da base porque a copia 2 o defende como base a limitados os cegas OS original OS purista OS limpa de base viva e eterna puros.
  `
  }
}
