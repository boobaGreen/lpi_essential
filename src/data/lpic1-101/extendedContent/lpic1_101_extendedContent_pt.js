// LPIC-1 101 Extended Content — Portuguese

export const lpic1_101_extendedContent_pt = {
  // ─── TOPIC 1 ───
  'lpic1-101-1-1': `
### Anatomia do Comando \`lspci\`

O comando \`lspci\` extrai informações diretamente do kernel (através do sysfs e /proc/bus/pci). Sem opções, ele fornece um resumo rápido. Com \`-v\`, \`-vv\`, ou \`-vvv\`, a verbosidade aumenta, focando em:

*   **IRQs (Interrupt Requests)**: Linhas de interrupção usadas pelo hardware para chamar a atenção da CPU.
*   **Endereços de I/O e Memória**: Como o dispositivo mapeia sua memória na RAM principal.
*   **Módulos em Uso**: Qual driver do kernel está atualmente controlando a placa (ex: \`Kernel driver in use: e1000e\`).

O parâmetro \`-k\` é um dos favoritos no LPIC-1 pois mostra exatamente qual módulo (\`Kernel modules: ...\`) o hardware suporta e qual está em uso atualmente, muito útil na resolução de problemas!
  `,
  'lpic1-101-1-2': `
### Os Parâmetros do Kernel Ocultos no GRUB

Quando o sistema inicia, o GRUB passa "opções" (parâmetros de linha de comando) para o Kernel Linux. Estas podem ser vistas inspecionando \`cat /proc/cmdline\`. Parâmetros comuns incluem:

*   \`ro\`: O sistema de arquivos raiz é montado inicialmente como Somente Leitura (Read-Only) por segurança durante a inicialização, antes de ser remontado como leitura e escrita (rw) mais tarde.
*   \`quiet\`: Suprime as mensagens amigáveis de hardware no console (daí a necessidade de usar o \`dmesg\` depois!).
*   \`nomodeset\`: Diz ao kernel para não tentar carregar drivers de vídeo de alta resolução até que o gerenciador de janelas completo (X11/Wayland) seja iniciado. Fundamental se a tela ficar preta após a instalação em placas de vídeo NVIDIA antigas.
  `,
  'lpic1-101-1-3': `
### Tabelas de Alvos do systemd

\`systemd\` substituiu o antigo modelo de init (SysVinit) por "targets". Um target agrupa diferentes serviços que devem ser iniciados em paralelo.

1.  \`poweroff.target\` (0): Força o desligamento.
2.  \`rescue.target\` (1): Semelhante ao single-user mode. Monta apenas o sistema raiz, não inicia serviços de rede.
3.  \`multi-user.target\` (3): O modo servidor clássico. Rede e suporte a múltiplos usuários estão ativos, mas sem GUI.
4.  \`graphical.target\` (5): Engloba todo o multi-user, mas aciona o GDM/LightDM/SDDM para iniciar a interface de desktop.
5.  \`reboot.target\` (6): Reinicia a máquina.

A diretiva \`systemctl isolate <target>\` permite transições em tempo real sem a necessidade de reiniciar o contador de tempo de atividade (uptime) do servidor!
  `,

  // ─── TOPIC 2 ───
  'lpic1-102-1-1': `
### MBR vs GPT: Limitações Estruturais

O **MBR (Master Boot Record)** escreve a sua tabela de roteamento no minúsculo Setor 0 do seu disco rígido (512 bytes). 
*   Pode possuir apenas **4 partições Primárias**.
*   Para ultrapassar este limite, inventaram a *Partição Estendida* (uma "caixa" fictícia que consome uma das 4 partições primárias) dentro da qual podem existir várias *Partições Lógicas*.

O **GPT (GUID Partition Table)** é novo, baseado no UEFI e imenso:
*   Aceita **128 partições primárias** nativamente.
*   Elimina o limite de "2 Terabytes" por partição estabelecido pelas matemáticas restritivas antigas do MBR.
*   Retém uma cópia de segurança (backup) oculta da tabela de partições no final exato do disco rígido!
  `,
  'lpic1-102-1-2': `
### Como o \`grub2-mkconfig\` funciona?

Um erro clássico dos recém-chegados ao Linux é editar manualmente o grande arquivo \`/boot/grub/grub.cfg\`. Este é um arquivo de "Leitura Apenas" gerado por scripts na nuvem. Mas como ele é gerado?

O instalador usa \`grub2-mkconfig\`, que executa scripts em cascata encontrados em \`/etc/grub.d/\`:
*   \`00_header\`: Lê as definições estáticas do administrador do arquivo \`/etc/default/grub\` (tempo limite, opções passadas ao Kernel).
*   \`10_linux\`: Lê e inspeciona a partição local \`/boot\` procurando kernels Linux compatíveis (\`vmlinuz-xxx\`).
*   \`30_os-prober\`: Muito famoso! Verifica (probe) *outras* partições não-Linux no disco em busca de inicializadores de Inicialização Dupla, como a Partição UEFI do Windows, inserindo-os perfeitamente no menu gerado!
  `,
  'lpic1-102-1-3': `
### Cache LDD e LDConfig Dinâmico

Quando um programa em C é compilado de forma dinâmica, ele contém apenas marcadores de posição para as instruções padrão do SO (para não poluir cada app de calculadora com o driver de som C).

Essas sub-rotinas vivem como "Objetos Partilhados" (Shared Objects, .so), normalmente na grande biblioteca C (\`libc.so\`). 
Se você escrever um script de alto nível que adicione manualmente novos \`.so\` na rota \`/opt/biblioteca_da_minha_empresa\`:
Mesmo apontando \`ldd\`, o sistema **NÃO A ENCONTRARÁ**.

Isso porque o indexador Linux usa uma busca rápida armazenada em cache!
Passo 1: Escreva o novo caminho em texto em \`/etc/ld.so.conf.d/empresa.conf\`.
Passo 2: Execute como root o comando \`ldconfig\`. Este software atualizará o arquivo binário \`/etc/ld.so.cache\` permitindo o carregamento ultra-rápido global dos seus programas a partir desse momento.
  `,
  'lpic1-102-1-4': `
### DPKG: Purging vs. Removing

No universo Debian, o dpkg age nos bastidores locais. A distinção crítica de segurança:
*   **Remove** (\`-r\`): Apenas desinstala os binários do aplicativo. Exceção de segurança: Deixa *intacta* a configuração do usuário e regras em \`/etc\` com a ideia de que você só retirou o aplicativo momentaneamente.
*   **Purge** (\`-P\` ou \`--purge\`): A Bomba Termonuclear completa. Desinstala a estrutura, entra em diretórios de configuração locais \`/etc\` e apaga brutalmente qualquer arquivo de configuração ou diário de rota que este pacote escreveu!

Eles operam sempre localmente sem baixar nada dependente e a opção \`-i\` avança com a instalação dos arquivos \`.deb\` inseridos mecanicamente no prompt.
  `,
  'lpic1-102-1-5': `
### A Força Envolvida pelo Ecossistema YUM e DNF

Ao gerenciar servidores da família Red Hat, usar e extrair relatórios com RPM base muitas vezes carece da capacidade de acessar atualizações na nuvem automaticamente.

É para isso que entra o YUM (ou o seu reescrito sucessor super-rápido e limpo: **DNF**). Todo o seu conhecimento de "onde" localizar e baixar a instalação reside na pasta \`/etc/yum.repos.d/\`. 

*   O \`dnf search [nome]\` varre a internet para encontrar resultados.
*   O comando \`dnf provides [arquivo_caminho]\` (ou instintivamente: \`rpm -qf\`) diz "A qual pacote online pertence o exato sub-arquivo /usr/bin/tar?". Ele responde perfeitamente sem ter instalado nada e relata a quem os dados pertencem.
  `,
  'lpic1-102-1-6': `
### Containers em Linux vs. Hypervisors Tradicionais

Por que o Docker conquistou o mercado empresarial moderno num servidor? E por que se enquadra na virtualização Tipo-2 (Sistema de Nível de SO)?
Uma máquina virtual clássica precisa emular virtualmente e alocar com força um Kernel Linux Físico completo isolado (ex. VMware), dedicando uma porção rigorosa de RAM imutável e tempo valioso de processamento da CPU.

O **Container** explora dois recursos puros do Kernel já ativos do Host Linux anfitrião que você usa debaixo do terminal:
*   **Namespaces**: Dá ao processo (ex: mysql) a ilusão mágica cega de acreditar que a sua RAM e o seu ambiente não podem ver ou interagir com os outros aplicativos vizinhos (Nível de Rede e Processos Cegos).
*   **cGroups**: Uma ferramenta impositiva do kernel para regular limites reais para aquela "bolha cega" em relação à CPU e cotas em gigabytes!
Resultado: Compartilham todo o Linux Host e arrancam em microsegundos em vez de alocar OS do zero!
  `,

  // ─── TOPIC 3 ───
  'lpic1-103-1-1': `
### PATH e a Origem Oculta dos Comandos (which vs type)

Quando escreves o nome \`ls\` e logo dás \`Enter\`, porque é que funciona embora estejas num diretório isolado do teu \`/home\` onde \`ls\` nem devia existir na pasta atual? O ecossistema procura implicitamente na Super Variável Global **\$PATH**!

Para ter certeza do que escreves à máquina:
*   **\`which\`**: Procura apenas no PATH binários executáveis reais. Ex. retorna o caminho completo físico \`/usr/bin/cat\`.
*   **\`type\`**: Mais sábio! Identifica a genealogia oculta do prompt; se o comando é um verdadeiro "programa com atalho na RAM c-built" do próprio bash terminal vazio (por ex. cd ou echo) ou apenas um alias malicioso modificado.
  `,
  'lpic1-103-1-2': `
### Bash Variables: Local Environment Inheritance

As variáveis declaradas abertamente como: \`PASSWD="abcd"\` formam apenas blocos fixos presos dentro do isolamento "Local" daquela simples sessão específica do seu processo Terminal atual.

Sempre que a sua shell Linux aciona a necessidade de lançar um comando extra subjacente complexo (ex. aciona novo nodeJS script) cria um Child-Process na memória inferior! Aquela mini sub-sessão nasce do zero e falhará miseravelmente ao tentar aceder a $PASSWD (ela veria vazio e daria falha).

Para curar isto, invocas \`export PASSWD="abcd"\`. Agora ela não só pertence a ti, o processo pai, como vai fluir passivamente descendo diretamente, exportando-se de forma enraizada (Environment) a heranças e instâncias infindáveis base. \`env\` ou \`printenv\` documentam o espelho das instâncias exportáveis ligadas!
  `,
  'lpic1-103-2-1': `
### Redirecionamento 1 e 2 - Stdin, Stdout, Stderr

No UNIX, qualquer comando pode ver textualmente a saída nos ecrãs de monitor utilizando fluxos padronizados com números universais e canais secretos!

*   Canal **0 (Stdin)**: Input - o que chega vindo do seu rato ou terminal prompt!
*   Canal **1 (Stdout)**: O fluxo de texto "saudável"! Exibe o eco das ações do aplicativo e vitórias processuais diárias!
*   Canal **2 (Stderr)**: Um tubo que a arquitetura Linux utiliza discretamente SOMENTE para atirar texto violento relacionado a fatalidades ou queixas impenetráveis por permissões de erros "Negado", garantindo assim que mensagens ruins puras não manchem os números bons exatos recolhidos pelo Stdout antes da partilha!

Para juntá-los usa-se a re-ancoragem mágica de redirecionamento, \`cat files > log 2>&1\` (Atira 1 no ficheiro texto log, e o 2 é colado na cola da ponte final do fluxo 1 fechando firmemente).
  `,
  'lpic1-103-3-1': `
### Pipelines e o Misterioso Utilitário Tee

Uma conduta Pipe (\`|\`) agarra todos os despejos gerados pelo fluxo Stdout (1) na cauda esquerda de um comando antes finalizado, evitando exibi-los nos olhos do ecrã e, simultaneamente, disparando o líquido puramente num despejo da direita transformando-o como Stdin da entrada num programa de filtragem (como \`grep\` ou \`wc\`).

Mas o Linux introduz \`tee\`. Funciona perfeitamente como hardware em T para encanamentos domésticos!
\`\`\`bash
ls /etc | tee index.txt | grep "*.conf"
\`\`\`
Enquanto o líquido de 'ls' flui pela torneira inteiramente com alta força natural até bater nas extremidades atentas de \`grep\`, o "Tee" divide cirurgicamente para as bordas do meio, escavando no seu SSD físico todo esse material copiando numa página bruta chamada \`index.txt\`, prosseguindo a rota viva principal adiante sem perturbar o andamento constante.
  `,
  'lpic1-103-3-2': `
### Manipulação Eficaz: Find e Xargs

\`find\` desce e caça implacavelmente através da arvore profunda Linux, demorando em cada folha dos diretórios em busca de presas (arquivos -name ou tamanho), tornando Locate um processo muito rápido da tabela BD.

E se quisesses remover ativamente todos juntos o que acabaste de descobrir? 
Múltiplas execuções separadas criariam engarrafamentos pesados nos IO's da máquina na CPU! \`Xargs\` recebe a lista quilométrica dos retornos, quebra a lista formatada no prompt natural de linha única e cria perfeitamente grandes espaços concatenados unindo execuções limpas como \`rm\` reduzindo o encargo a apenas poucas evocações gerais fortes: \`find /var/log -user root | xargs rm\`.
  `,
  'lpic1-103-4-1': `
### Hierarquia e Agendamentos de Sinais de CPU

Matar violentamente ou comunicar ordens processuais de emergência faz-se disparando intermitentes fluxos UNIX Signal diretamente pelo Kernel.
*   **SIGTERM (15)**: O botão oficial gentil de Stop do mundo Linux (usado padrão por ex \`kill 322\`). Um pedido ao software em si. O processo avisa suavemente ligações à net subjacentes "vou descansar", descarrega registos parciais dos logs, esvazia pacientemente o RAM e termina passivamente sozinho nas nuvens sem perigo. 
*   **SIGKILL (9)**: É uma sentença direta ao Sistema Nervoso central sem compaixão e salvação ( \`kill -9 322\` ). Usado apenas contra processos zombies rebeldes travados que não respondem ao 15. O Gestor de SO guilhotina qualquer processo de memória e varre-o repentinamente da face do OS causando a perda de salvamentos permanentes da aplicação. Nenhuma aplicação tem privilégios para recusar submeter-se e impedir de reagir a um 9 puro!
  `,
  'lpic1-103-4-2': `
### Nice & Renice (NI: Níveis Prioritários de Generosidade)

Tendo muitas portas abertas para dezenas de cálculos ao rodar, o Linux distribui "Tempos da Janela Mestra (Time Slices)" para quem usa o processador. Baseia-se em fatores limitados chamados NI. Ele rege a simpatia (Niceness) onde -20 até +19 mudam as exigências.
Valor Standard ao lançamento = 0.
*   Os que requerem os **Maiores Privilégios Extremos (-20)**: Impiedoso monopolizador, ele força o kernel a saltar todos e atirar a maior carga a favor dele para não se perturbar, espremer outros à exaustão e escassez do servidor. REQUER OBRIGADO O PODER DO ROOT ADMIN PARA INSTALAR ESTE VALOR IMPONENTE.
*   As Pessoas Exageradamente Boas **Extremo Generoso (+19)**: Total submissão passiva onde adia suas atividades cedendo sempre todos os processos passantes do ecossistema prioridades até obter sobras tranquilas e livres puras do ecossistema base e das restantes funções e processamentos de hardware inativos que já deram frutos pesados a vizinhos superiores locais pacientemente, um valor ótimo para scripts chatos de cron sem limite fixo de horas (Utilizadores regulares são permitidos sem su sudo só submeter processos próprios da bondade).
  `,
  'lpic1-103-5-1': `
### Regex Base - A Arquitetura Selvagem

No mundo UNIX o uso literal exaustivo foi abandonado no meio-século, com uma matriz teórica implementada global e estritamente chamada RE.
No caso primário do *Basic Regular Expressions*, o código traduz letras do alfabeto numa força descritiva visual do texto.
*   **\`^\` e \`$\`**: Representam localizações inquebrável precisas! Respectivamente diz "apenas a primeira borda marginal a esquerda exata do ecrãn terminal pode possuir compatibilidade de análise visual inicial do parágrafo total em teste" do mesmo ou final (lado limítrofe vazio a última extremidade direita).
*   **\`.\`**: Equivalente restritivo a UM caráter qualquer! Exacto (não importa letra ou número excêntrico misterioso final único). \`b.ta\` (corresponde a bota e bata, etc).
*   **\`*\` O Estranho Astro (ASTERISC):** Aqui choca brutal a regra Windows. Nunca será algo de si próprio! Serve perfeitamente o seu mestre antecessor duplicando brutalmente as réplicas lógicas de quantidade, ele traduz para "Tanto um 0 nada no espaço da mesma letra, ou talvez milhar infinito". Em conjunto: \`.*\` = "Tudo".
  `,
  'lpic1-103-5-2': `
### Vi Modes e Comandos Letais Core 

Vi ignora completamente seleções em GUI e o botão backspace não perdoa e estraga ordens visuais. Tudo num plano e ambiente duro puramente para texto, possuindo três atmosferas cruas separadas.

É no *Command Modality* em que você mergulha à revelia sempre sem inserir digitações comuns, assumindo manipulação na base e corte: \`yy\` puxa a linha mestra subjacente local da sua posição física no disco para armazenamento flutuante volátil RAM (Yank). \`p\` o empunha largando as tintas por baixo da sua área inferior final, invocando a arte da clonagem de colagem mágica do Put para expandir do editor o duplicador. E para purificar o seu último comando errôneo sujo basta ditar docemente a singela \`u\` a re-encarnação salvífica suprema (undo).
  `,
  'lpic1-103-6-1': `
### Compressões Extremas - O Motor Oculto

Linux prefere ter processos atômicos curtos (Ferramenta 1 não tenta inventar cópia medíocre barata da Ferramenta 2 e por isso se apoiam mutualmente juntos).
Ao criar dezenas de pacotes .tar puros para fins globais limpos e intatos eles se juntaram massivamente de grandes proporções da memória pesada!
Se o admin necessita diminuir, adicionará a compressão final e agressiva e atirando como bandeiras opcionais invocatórias extras do Gzip, ou num exemplo para o esmagador XZ super apertado de Bzip2 :
Usando GZip (\`-z\` = .tar.gz), comprime em níveis leves poupando muita leitura processadora de CPU! O XZ invocação e o forte utilitário (por ex bandeiras lógicas \`-J\`= .tar.xz) estraçalhará arquivos originais reduzindo drasticamente aos confins pesados limites do seu processador bruto final!
  `,
  
  // ─── TOPIC 4 ───
  'lpic1-104-1-1': `
### Formatação Profunda vs Ferramentas de Tabela

\`fdisk\` apenas corta politicamente os bolos do disco duro em pedaços e desenha os setores divisórios base no seu primeiro mapa setor numérico digital na cabeça fina da peça. Ele não deixa os setores aptos a serem armazenamentos compreensíveis de um kernel vivo local na floresta e matagal virtual.
Você forjará a criação de Inodes, hierarquia diário ext4 Journaling puro formatar utilizando um comando superior atrelado a Linux OS! A estrutura formadora do **M**a**K**e **F**ile**S**ystem cria magia. (mkfs.xfs e suas irmãs robustas dedicadas mkfs.ext4/etc), permitindo finalmente o disco possuir sua identidade formativa orgulhosa para salvar blocos Linux operacionais corretos em sua memória perfeitamente segura viva com sua árvore robusta de proteção interna estrutural montada inteiramente nas bases reais profundas!
  `,
  'lpic1-104-2-1': `
### Montar Automático Permanente /etc/fstab Cuidado Crítico Superior!

Esta base sagrada do ficheiro que carrega perigos puros é onde repousa tudo ( fstab ). O Bootloader envia Kernel e em si as entranhas invocatórias dependem disto! Errar na sintaxe do ponto 3 de campos pode destruir toda uma maquina irreparavelmente virtual!

Um administrador nunca ousará especificar partições por designações hardware (\`/dev/sdb1\`), pois essas ordens numéricas flutuam desorientadamente de sdb para sdc quando inserir e extrair de cabos nos seus hubs laterais do hardware local USB's que interferem com a nomeação exata nativa anterior base inicial física.
No LPIC-1 usarás eternamente o **Universally Unique ID** identificador inalterável vitalício profundo 30 números (UUID) originária física gravado à placa formatada que é puxável pela tela terminal ao usar \`blkid\` na consola antes preencher nas ordens oficiais fstab superiores finais nas arquiteturas operacionais de sua base local pura sem hesitar e com exatidão! Mapeamento inerte imbatível livre de avarias hardware lógicas conectivas base! Mágico não?
  `,
  'lpic1-104-3-1': `
### Inodes e Limitação Oculta da Partição

O Kernel rastreia arquivos não pelos seus nomes humanos compridos complexos coloridos, mas pelos seus IDs abstratos fundamentais de tabelas mestras denominados nativamente INODES ext4. (Index Nodes listados pesadamente). 

A tabela contém privilégios de metadados, criadores, dados, tudo exato! Contudo, o espaço dessa tabela mestre nativa base cria-se LIMITADO na hora do mkfs originário de instalação em si! Por quê? Mesmo com puros Terabytes 100% perfeitamente VAZIOS puristas totais gigantes e livres disponíveis ainda de parte real de disco crua... caso grave por exemplo, seu banco log base enlouquecer crônicos e despejar estupendos Milhões massivos de nanométricos micro-arquivos inúteis de 0bytes soltos puristas lixos da nuvem no disco do sistema do servidor mestre Linux ativo terminal do PC isoladamente base, os slots minúsculos Inodes se extinguiriam fatal, sem deixar você extrair novas gravações mesmo indicando no sistema df mil Terabytes de sobra e livres no seu comando - isso chama-se o Erro Silencioso do Disco Inode Ext4 Esgotado! Uma das caças vitais finais nos sistemas base Linux.
  `,
  'lpic1-104-5-1': `
### SUID, SGID e a Revolução Sticky BiT

A Permissão UNIX básica é dividia no clã restrito U(ser) G(roup) O(thers). Com leitura (read 4) e gravações e execução soltas de base terminal nativa restrita normal padrão normal sem riscos profundos nas mãos de iniciantes nas linhas isoladamente seguras padrão normais limitados em pastas!
Porém, senhas são cravadas fundo isoladas e encriptadas impenetráveis à força na arvore /etc/shadow blindada ao Root supremo apenas inquebrável por simples bases puras de arquiteturas padrões de uso normal.

Logo o programa para trocá-las ( *o binário limpo nativo 'passwd'* das consolas do seu user normal ) exige do Kernel acesso de autoridade final bruta divina invencível! Como? 
Injetando o perigo mortal poderoso Set User ID (Mod Octal elevado de '4') no S (s minúsculo no binário rws r-x --- base terminal).
Isto eleva temporalmente a vida passageira solitária de quem tocou e ativou o aplicativo por milissegundos precisos temporários ao estatuto invisível irrestritamente final como se o Dono verdadeiro ROOT de Linux encorpora-se do fantasma executando as permissões completas, que por segurança puras se esfumam logo quando terminar as ações do alvo e fechar o uso final básico inicial em sua linha terminal originária normal!
  `
};

