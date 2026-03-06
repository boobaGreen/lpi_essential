// LPIC-1 101 Extended Content  Portuguese
// Rich structured sections for ExtendedContent.jsx

export const lpic1_101_extendedContent_pt = {

  'lpic1-101-1-1': {
    title: 'Componentes Físicos e BIOS/UEFI — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Hardware Principal e Comandos de Diagnóstico' },
      { type: 'paragraph', text: 'Em um sistema Linux, todo o hardware conectado é detectado pelo kernel durante o boot (ou a quente) e a informação é exportada para o pseudo-sistema de arquivos /sys e /proc.' },
      { type: 'table', headers: ['Componente', 'Comando de Diagnóstico', 'Caminho/Arquivo Relevante'], rows: [
        ['CPU', 'lscpu', '/proc/cpuinfo'],
        ['RAM', 'free -m, dmidecode -t memory', '/proc/meminfo'],
        ['PCI / Placas', 'lspci', '/sys/bus/pci/devices/'],
        ['USB', 'lsusb', '/sys/bus/usb/devices/'],
        ['Discos', 'lsblk, fdisk -l', '/dev/sda, /dev/nvme0n1'],
      ]},
      { type: 'heading', level: 2, emoji: '🔄', text: 'BIOS vs UEFI' },
      { type: 'paragraph', text: 'O firmware pré-OS inicializa o hardware e carrega o gerenciador de inicialização. A transição de BIOS para UEFI traz diferenças fundamentais.' },
      { type: 'comparison', left: {
        title: 'BIOS Clássico',
        items: ['Arquitetura de 16 bits', 'Usa esquema de partição MBR (Max 2TB)', 'Executa o bootloader alojado no primeiro setor do disco', 'Não possui controle nativo do firmware operacional']
      }, right: {
        title: 'UEFI',
        items: ['Arquitetura de 32 ou 64 bits', 'Usa esquema de partição GPT (Até 9.4 ZB)', 'Requer uma partição especial EFI (ESP, FAT32)', 'Suporta Secure Boot']
      }},
      { type: 'infobox', variant: 'exam', content: 'Para o exame: Lembre-se que lsusb e lspci extraem informações em tempo real, enquanto os arquivos em /proc e /sys são diretamente lidos por esses e outros utilitários. O comando lsmod serve para listar módulos (drivers) carregados, e modprobe para carregá-los.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'O Processo de Boot — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Do Botão de Energia ao Kernel' },
      { type: 'paragraph', text: 'O processo de inicialização do Linux segue passos sequenciais. Se um falhar, o sistema não inicia.' },
      { type: 'list', items: [
        { term: '1. POST e Firmware', desc: 'Ligar, teste de hardware, busca pelo dispositivo de boot.' },
        { term: '2. Bootloader (GRUB2)', desc: 'Carregado a partir do MBR ou da partição EFI. GRUB apresenta o menu e carrega o kernel na memória.' },
        { term: '3. Kernel e Initramfs', desc: 'O kernel Linux é executado, monta o initramfs (um disco temporário em RAM) para carregar módulos críticos de armazenamento.' },
        { term: '4. Pivô Raiz', desc: 'O kernel muda a raiz do initramfs para o disco rígido real.' },
        { term: '5. Processo Init (Systemd)', desc: 'O kernel executa o PID 1 (systemd ou SysVinit), que inicia todos os serviços do usuário.' },
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'dmesg e o Buffer de Anel do Kernel' },
      { type: 'paragraph', text: 'Todas as mensagens que o kernel gera durante o boot (e pós-boot) são salvas em um buffer em memória.' },
      { type: 'code', title: 'Comandos para leitura de logs do kernel', prompt: '# Ler todo o dmesg\n$ dmesg\n\n# Filtrar dmesg para erros relacionados a USB\n$ dmesg | grep -i usb\n\n# Limpar o buffer ring do kernel\n$ dmesg -c\n\n# Ver todos os arquivos de logs persistentes\n$ ls /var/log/messages', output: '' },
    ]
  },

  'lpic1-101-3-1': {
    title: 'Runlevels e Systemd Targets — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🚦', text: 'SysVinit: Os 7 Runlevels Clássicos' },
      { type: 'table', headers: ['Runlevel (Nível)', 'Descrição', 'Equivalente em Systemd Target'], rows: [
        ['0', 'Desligar / Halt', 'poweroff.target'],
        ['1, s, S', 'Modo Monousuário (Resgate)', 'rescue.target'],
        ['2', 'Multi-usuário sem rede', 'multi-user.target'],
        ['3', 'Multi-usuário FULL (só texto / servidor)', 'multi-user.target'],
        ['4', 'Não utilizado/Livre', 'multi-user.target'],
        ['5', 'Multi-usuário FULL Gráfico (Modo desktop)', 'graphical.target'],
        ['6', 'Reiniciar / Reboot', 'reboot.target'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Systemd: Gerenciamento de Targets' },
      { type: 'paragraph', text: 'Systemd, o init moderno padrão, substitui os runlevels por arquivos `.target`.' },
      { type: 'code', title: 'Comandos de estado e alteração de nível', prompt: '# Obter o target padrão (no qual o PC inicia)\n$ systemctl get-default\n\n# Alterar o target padrão para modo texto\n$ sudo systemctl set-default multi-user.target\n\n# Alterar na hora para o modo gráfico sem reiniciar\n$ sudo systemctl isolate graphical.target', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Rescue vs Emergency', content: 'rescue.target (runlevel 1) monta o sistema de arquivos local e pede a senha de root. emergency.target é ainda mais drástico: monta a raiz como somente leitura e NÃO inicia rede nem serviços secundários.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'Esquemas de Particionamento e Mount — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '💽', text: 'Layout do Disco Rígido (Hard Disk Layout)' },
      { type: 'paragraph', text: 'O instalador do Linux exige o particionamento do disco. Embora seja possível instalar tudo em uma única partição raiz (/), o exame LPIC-1 exige conhecer as melhores práticas estruturais para servidores.' },
      { type: 'table', headers: ['Ponto de Montagem', 'Uso/Conteúdo', 'Por que separar?'], rows: [
        ['/ (Root)', 'Arquivos do sistema operacional principal', 'Mínimo necessário para inicializar o sistema.'],
        ['/boot', 'Kernel e bootloader estáticos', 'Arquivos de boot seguros; pode requerer Ext4 clássico dependendo da configuração.'],
        ['/home', 'Dados e arquivos pessoais dos usuários', 'Se você reinstalar o sistema, mantém seus arquivos.'],
        ['/var', 'Logs do sistema, bancos de dados, spools', 'Evita que um log descontrolado encha a partição raiz e trave a máquina.'],
        ['swap', 'Memória virtual estendida (partição cega)', 'Previne travamentos quando a memória RAM física estiver cheia.'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Diretórios Intocáveis', content: 'Atenção! Existem diretórios vitais que não podem ser separados em partições diferentes de /. São eles: /bin, /sbin, /lib, /etc e /dev. Eles contêm utilitários e bibliotecas que o próprio processo de montagem de partições necessita antes de montá-las.' },
    ]
  },

  'lpic1-102-2-1': {
    title: 'Gerenciador de Inicialização (Bootloaders) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'GRUB2 (GRand Unified Bootloader)' },
      { type: 'paragraph', text: 'O bootloader padrão moderno que domina os sistemas Linux e substituiu o GRUB Legacy.' },
      { type: 'list', items: [
        { term: 'Localização BIOS/MBR', desc: 'Sua parte inicial (Stage 1) mora nos primeiros 512 bytes de puro disco.' },
        { term: 'Partição EFI', desc: 'Em sistemas padrão UEFI, reside no diretório montado /boot/efi/EFI/ubuntu/grubx64.efi.' },
        { term: 'Configuração Humana', desc: '/etc/default/grub (Onde determinamos a resolução gráfica e parâmetros forçados do Kernel).' },
        { term: 'Pasta de Scripts', desc: '/etc/grub.d/ (Scripts de geradores nativos de procura automática de OS).' },
        { term: 'O Arquivo Binário Intocável', desc: '/boot/grub/grub.cfg (JAMAIS EDITAR na mão. Sobreescrito pelo comando compilador).' },
      ]},
      { type: 'code', title: 'Interação e Compilação Clássica', prompt: '# Regenerando o GRUB cfg principal compilado final (Debian/Ubuntu)\n$ sudo update-grub\n\n# Comando universal subjacente real (RHEL e resto)\n$ sudo grub-mkconfig -o /boot/grub/grub.cfg\n\n# Instalando GRUB (reparação do stage 1 mbr em disco cru)\n$ sudo grub-install /dev/sda', output: '' },
      { type: 'table', headers: ['Interface e Menu Dinâmico do GRUB', 'Funcionalidade'], rows: [
        ['Apertar a Tecla "e"', 'Enquanto focado na linha do Sistema Operacional, a tela se abre em um campo de texto provisório para que você adicione e modifique a string do parâmetro do Kernel em memória volátil antes do BOOT. (Útil para injetar flag init=/bin/bash).'],
        ['Apertar a Tecla "c"', 'Abre o prompt de comando bruto (shell grub), com poderes sobre initrd, linux e boot.'],
      ]},
    ]
  },

  'lpic1-102-3-1': {
    title: 'Bibliotecas Compartilhadas — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '📚', text: 'Os Objetos Partilhados (.so)' },
      { type: 'paragraph', text: 'Equivalentes as famosas Bibliotecas Dinâmicas de Linkagem (DLLs) do Windows, no Linux chamam-se (Shared Objects). Moram e descansam principalmente em /lib, /usr/lib e o espaço experimental em /usr/local/lib.' },
      { type: 'code', title: 'Comandos Focais e LPIC Essencial', prompt: '# 1. LDD (List Dynamic Dependencies): Verificando o que falta para um executável funcionar\n$ ldd /bin/ls\n      linux-vdso.so.1 (0x00...)\n      libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00...)\n\n# 2. LDCONFIG: Atualizador de cache e ponteiro cego\n# Varre o /etc/ld.so.conf procurando novas bibliotecas físicas instaladas\n$ sudo ldconfig', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Cenário LPIC: Você compilou e arrastou a biblioteca libnova.so.1 na pasta /usr/local/lib do servidor, mas seu aplicativo aborta com falha e diz não encontrar libnova. Resolução: Você precisa rodar o comando `ldconfig` forçando o Kernel a atualizar as indexações apontadas de `ld.so.cache`.' },
      { type: 'list', items: [
        { term: 'A Variável Divina: LD_LIBRARY_PATH', desc: 'É o coringa (Override). Você a exporta no console forçando o núcleo a olhar nela e priorizar essa pasta custom primeiramente, buscando versões desatualizadas da biblioteca (export LD_LIBRARY_PATH=/opt/app_antigo/libs/)' },
      ]},
    ]
  },

  'lpic1-102-4-1': {
    title: 'Gerenciador de Pacotes Debian (APT/dpkg) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Ferramente Básica de Baixo Nível (dpkg)' },
      { type: 'paragraph', text: 'Dpkg não tem internet e carece do poder de resolução de dependências, lida puramente cru e cegamente com arquivos físicos `.deb` baixados pelo humano.' },
      { type: 'table', headers: ['Sintaxe de Batalha (dpkg)', 'Resultado e Comportamento', 'Fio Vermelho LPIC'], rows: [
        ['dpkg -i pacote.deb', 'Instalador oficial primário', 'Instala/Atualiza pacote local cego, ou joga erro massivo de dependência de lib.'],
        ['dpkg -r vim', 'Remoção Média (Remove)', 'Remove os bits executáveis mas preserva config customizado humano do /etc/.'],
        ['dpkg -P apache2', 'Remoção Genocida (Purge)', 'Exclui do FileSystem incluindo apagando todas as Configs puristas.'],
        ['dpkg -l', 'Listar todos softwares', 'Mostra instalado local. `dpkg -l | grep ssh` é útil.'],
        ['dpkg -S /bin/bash', 'Motor de Busca a Reversa (Search)', 'Retorna como output `bash: /bin/bash`. Diz quem instalou aquele arquivo misterioso na pasta.'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Gerenciador Global Automático (APT Tool suite)' },
      { type: 'list', items: [
        { term: 'apt-get update', desc: 'Lê listas em repositórios URLs hospedados en /etc/apt/sources.list e atualiza estritamente os repositórios locais e a tabela de hash info em RAM, não baixa binários.' },
        { term: 'apt-get upgrade', desc: 'Instala atualizações não complexas seguras.' },
        { term: 'apt-get dist-upgrade', desc: 'Ferramenta brava que força a resolução desinstalação automática da velha framework inteira para abraçar novos núcleos de bibliotecas alterados.' },
        { term: 'apt-cache search', desc: 'O motor de encontrar (Query) se aquele software existe em alguma mirror mundial online.' },
      ]},
      { type: 'infobox', variant: 'tip', title: 'O "Oops" de configuração', content: 'Quebrou com permissões, e perdeu a config default roxa interativa clásica dum Debian? Rode: `dpkg-reconfigure pacote_exato`' },
    ]
  },

  'lpic1-102-5-1': {
    title: 'Gerenciador de Pacotes Red Hat (Yum/RPM) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🎩', text: 'Mundo Clássico RPM (.rpm files)' },
      { type: 'paragraph', text: 'A análogia de DPkg no reino de CentOS e Fedora. O comando "rpm" lida baixado primário, enquanto "YUM" ou "DNF" é a teia moderna URL resolvível (repos en /etc/yum.repos.d/).' },
      { type: 'table', headers: ['Comando RPM', 'Ação', 'Observação Extra Vital'], rows: [
        ['rpm -i pacote.rpm', 'Instalador Base', 'Install.'],
        ['rpm -U pacote.rpm', 'Ato Conjunto de Update e Install', 'É o preferencial. Se não tem atualiza instalando. Se já tem, puxa o Update natural. (Over-rulear).'],
        ['rpm -e pacote', 'Erase', 'Erase, equivalente da Remoção'],
        ['rpm -qa', 'Query All', 'Listar geral.'],
        ['rpm -qf /bin/ls', 'Query File (Dono Mão File)', 'Assim como dpkg -S da família apt.'],
        ['rpm -V binario', 'Verify (Vital Forense Cego Exame)', 'RPM verifica o pacote estático checando os CheckSum MD5. Se o dono da máquina trocou conf na calada, ele "chilla" S.5... T indicando adulteramento do timestamp interno.'],
      ]},
      { type: 'code', title: 'Arsenal YUM (Sucedido por DNF modernamente)', prompt: '# Encontrar um pacote online mundialmente:\n$ yum search nmap\n\n# Aplicar Instalação Cega e Auto Yes e aceitos de GPG firmas Keys\n$ yum install -y apache-httpd\n\n# Ver lista de Atualizações Pendentes Globais do OS Host\n$ yum check-update\n\n# Limpador Global Cache Total Memória Lixo Repositórios velhos\n$ yum clean all', output: '' },
    ]
  },

  'lpic1-101-3-1-1': {
    title: 'O Comando de Janela Shell e Variáveis (Bash) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '⌨️', text: 'CLI vs Interativo GUI' },
      { type: 'paragraph', text: 'A interface de linha de comando (CLI) injetora GNU bash é a padrão do pinguim.' },
      { type: 'table', headers: ['Variável de Ambiente Base Geração Exp.', 'Significado Humano Cru LPIC', 'Alteração Momentânea ou Inspeção'], rows: [
        ['$PATH', 'Onde o sistema garimpará o /bin ou /sbin atrás de invocações (ls, rm) alheias sem tipear toda a rota no teclado cego', 'echo $PATH ; export PATH=$PATH:/usr/local/go/bin/'],
        ['$HOME e $USER', 'A Casinha Tilde (~) de login do sujeito logado (root ou mortal).', 'echo $HOME'],
        ['$HISTFILE / $HISTSIZE', 'Arquivo Histórico do ~/.bash_history e Cap Máximo Ram', 'env | grep HIST'],
      ]},
      { type: 'code', title: 'Domador de Variáveis BASH / Exporting Globais', prompt: '# 1. Set mostra uma chuva letal gigante de Variáveis Funcionais Privadas (locais a essa shell PID viva).\n$ set\n\n# 2. ENV Mostra o Padrão do Exportado Universal (Herdáveis a Subshells processos filhos bash).\n$ env\n\n# 3. Elevar um alias fraco a Universal Global a seus scripts subjacentes filhos PID\n$ export MEU_AVISO="Cuidado Mundo"\n\n# Burlar silenciosamente a gravação oculta do HISTFILE (Começando com "Espaço em branco" antes do comando pwd)\n$ export HISTCONTROL=ignorespace', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Debes dominar também de cabeça no exame que comandos atípicos como o `uptime` (Load Averages Cpu) e `uname -a` (OS Linux release versão kernel base), estão cravados vivos no exame. Avalie sempre comandos "bash-internos" (type cd = is a shell builtin) contra "externos" (`type ls` aponta pasta).' },
    ]
  },

  'lpic1-101-3-2-1': {
    title: 'Processamento de Canais, Redireções (Pipes) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🚰', text: 'Os "Standard Streams" I/O Naturais' },
      { type: 'table', headers: ['O Canal (Stream Numérico ID)', 'Significado Nativo Linux Standard Cego', 'Redireção Operacional Símbolo Shell'], rows: [
        ['0 (STDIN - Standard In)', 'A Entrada Cega Teclado. (Espera Injeção Humana Ocular)', '< (Engole um arquivo: tr a-z A-Z < minusculo.txt)'],
        ['1 (STDOUT - Standard Out)', 'A Saída Perfeita. O "Sucesso" do Comando rodado C Cpp (Listagem Limpa)', '> (Sobrescreve Matador overwrite). >> (Gruda ao Fim da Linha Cego Append)'],
        ['2 (STDERR - Standard Err)', 'As Ojerizas Erros, Faltas de Permissions e Queixas Desespero Processo', '2> tacho.log (Apaga da Tela y Manda O Cão a Baú cego texto da Lixeira)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔗', text: 'Tubos e Encanador Bash Pipe (|)' },
      { type: 'paragraph', text: 'A barra vertical PIPE conecta e costura milagragremente a SAÍDA (1 STDOUT Vômito limpo) do comando esquerdo como a ENTRADA (0 STDIN da Fome Base) do comando executor logo à extrema direita do tubo.' },
      { type: 'code', title: 'Comandos Mágicos Piped LPIC', prompt: '# Mandar o Saída Sucesso e o Erro ao lixo separadamente\n$ ls -l /fake /ok > sucessos.txt 2> erro.log\n\n# Mandar tudo embolado 1 e 2 fundido a cega (Método Legacy UNIX T&C)\n$ ls /fake > combinados.txt 2>&1\n\n# O Moderno Bash Ampersand Maior (&>)\n$ ls /fake &> todos.log\n\n# Pegar dmesg lixo gigante, canalizar menos no paginador `less`:\n$ dmesg | less', output: '' },
      { type: 'infobox', variant: 'warning', title: 'O Míssil xargs do Pipe', content: 'Muitias vezes, o STDIN encanado vindo do Esq Pipe não encaixa no Comando Direito que odeia ler STDIN puros vazios (eg. kill, rm, cp). Ao botar `ls *.bak | xargs rm` vossa majestade xargs estraçalha a saída e a monta de parâmetro em parâmetro (rm file1 file2 file3).' },
    ]
  },

  'lpic1-101-3-3-1': {
    title: 'Processamento Básico Gnu (Filtros Textuais Sed/Awk leves) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '✂️', text: 'Mestre Carpinteiro de Textos GNU CLI Basics' },
      { type: 'table', headers: ['O Fogo da Ação Pura', 'O Porquê Funcional LPIC Prático', 'Comando Específico Mestre Local Pura'], rows: [
        ['cat contra tac', 'Cat imprime corrido limpo total a cima a baixo cego. Tac Lê de Ponta cabeça Z a A lendo reverse file.', 'tac revertido.log'],
        ['head / tail', 'Imprime n Linhas do Topo Início ou Fin da base.', 'tail -f apache.log (A cauda viva acompanhando Monitor Append Mode em tempo real vivo).'],
        ['sort / uniq', 'Ordenamento (-n Númerico e -r reverso), UniQ janta linhas Cegas Repetidas (Obrigra usar Sort prévio).', 'sort a.txt | uniq -c (Conta Repetições).'],
        ['wc (Word Counter)', 'Pesos Cuentáveis File: -l(Linhas Cegas), -w(Palavras string), -c(Bytes crudos Puros)', 'wc -l /etc/shadow'],
        ['cut / paste', 'Navalha Fatiadora Matadora. O Paste mescla colunas verticais.', 'cut -d: -f 1,7 /etc/passwd (D = delimiter pontos ":" F = extraia Coluna Humana Name Y Coluna 7 Bash)'],
      ]},
      { type: 'code', title: 'Comandos Bizarros Textuais Exame Gnu Linux', prompt: '# 1. Traduza tudo cego letra pequena STD IN (Cat) para ALTAS MAIUSCULA\n$ cat p.txt | tr "a-z" "A-Z"\n# Truque Exame: tr NUNCA toma arquivo file argumento nativo puro do path final (ex: tr ar.txt ERRO).\n\n# 2. Expanda o cego duro tabulamento (Tab Space bytes) para brancos absolutos fofos:\n$ expand -t4 arquivo_tabulado.txt\n\n# 3. Numerar linhas cegamente visual sem alterar vim ou cat original:\n$ nl arquivo.conf', output: '' },
    ]
  },

  'lpic1-101-3-4-1': {
    title: 'Processamento de Texto Avançado (sed / awk) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'O Motor de Matança Stream Editor (Sed)' },
      { type: 'paragraph', text: 'Ferramenta canivete suíço manipuladora de textos em fluxo constante. Nunca escreve ao disco por padrão (só expele visualmente em STDOUT alterado). Só mata a fogo o arquivo na HD salvando se invocar flag suicida `-i` (In-Place Edit).' },
      { type: 'code', title: 'Comandos Bárbaros e Cruéis LPIC SED', prompt: '# 1. Padrão Global Substituidor S/Lixo/Ouro/g\n# O -g Flag ordena a repetição na frase pra não estagnar na 1° ocorrência linha.\n$ sed "s/vermelho/azul/g" documento.txt\n\n# 2. Deletância (D) de Linhas Encontradas Místicas (eg. Sumir com as Linhas que contem "ERROR")\n$ sed "/ERROR/d" dmesg_feio.log\n\n# 3. Mago das Barras Slasher. Mudar caminho URLs Sem usar Barras Pânicas Escapadas (\\/var\\/)\n$ sed -i.bak "s#/var/www#/opt/nginx#g" config_master.conf', output: '' },
      { type: 'heading', level: 2, emoji: '📊', text: 'Analítico Textual Colunar (Awk)' },
      { type: 'table', headers: ['Awk Sintaxe Fio Condutor', 'Propósito Prático do Awk'], rows: [
        ['awk \'{print $1}\'', 'Lê cegamente cada Linha e Imprime isolado semente Espaço-Coluna 1 a esquerda cega.'],
        ['awk -F":" \'{print $3}\'', 'Flag Crucial F (FieldSeparator). Força e ensina que o limitador da coluna humana do /etc/passwd é o Ponto e Virg. Imprime campo 3 da linha.'],
        ['$0 VS NF Internas', 'Awk $0 não é argumento e sim variável mágica (Printa a Linha Crua inteira intacta). NF significa Number File Field Limit (Último Canto).'],
      ]},
    ]
  },

  'lpic1-101-3-5-1': {
    title: 'Monitoramento de Entidades, Threads e Abate (PS/KILL) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Sistemas Oculares de Vigilância Ativa: (ps e top)' },
      { type: 'paragraph', text: 'Na base pura de Linux Kernel a varredura visual de PID (Process IDentifier Number) mora oculta viva na virtualidade RAM /proc/pasta_ID_numero. Comandos decifram puros a pasta em tela limpa.' },
      { type: 'table', headers: ['Comando Visão de Comando Linux', 'O Que Expele Cego', 'Atrozenos Modificadores Vitais LPIC'], rows: [
        ['ps (Process Snapshot)', 'A Foto estática 1 Segundo Vivo Morto. Base do Terminal Shell cego.', '-ef (BSD Sysv Padrão) ou puro free style "aux" (All usuários tty list x).'],
        ['top (Monitor de Montanha FPS)', 'Painel dinâmico Cego atualizável (Frenquency hz 3 seg). Come puramente RAM. Press P pra Memory % Max. Press N por Numero Inocente.', 'top -d 1 (Força atualização ao 1 sec limit). H (Habilita as Sub Threads Múltiplas Visíveis)'],
        ['free', 'Totalizadores de Memória da Ram Viva (Fria) y Buffers Cache (Lixo Rápida)', '-m (Megas Bytes), -h (Humano Legível).'],
        ['uptime / w', 'Conta Lenta de Vidas Dias da Máquina Ligada no Relógio', 'Mostra os Sagrados Loads Averages CPUs: (Último 1 minuto Médio / 5 min / 15 minudos cego).'],
      ]},
      { type: 'code', title: 'Mata-Leão e Signais de Assato. (Sinais Kill Básico a Demônios)', prompt: '# 1. Assinato Cortês Pedido Pacífico (SIGTERM - Sinal 15 N° - Terminate Limpo):\n# Deixa o Aplcativo varrer as sujeiras dele RAM e guardar Estado DB.\n$ kill 1334\n$ kill -15 1334 (Igual Acima Base Padrão Cego)\n\n# 2. Tiro de Escopeta Brutal Kernel Físico Oblitera Ciego (SIGKILL - Sinal 9 N° - Mata Certo Fogo Duro):\n# O Kernel varre no braço estourando dados e aborta forçando corrupção file lido.\n$ kill -9 1334\n\n# 3. O Signal Anjo Renovador (SIGHUP - Sinal 1 N° - Demônio Recarga Arquivos Vivos Config)\n# Sem Derrubar portas SSH conexões vivas filhos clientes: o Master Process só recarrega config.\n$ kill -HUP 887', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Matadores por Corda String (Killall vs Pgrep)', content: '`kill` normal precisa religiosamente ditar puros numeros PIDs cego de RAM. Já a máquina `killall apache2` mata os 40 Filhos cegos abertos nominais inteiros em bala de prata (Mata pelo Nome). Já o pgrep busca qual ID número pertenece a essa String.' },
    ]
  },

  'lpic1-101-3-6-1': {
    title: 'Prioridade CPU, Nice & Renice (Bondade do Kernel) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚖️', text: 'Os Modais de Nice (Bom Samaritano do Processamento)' },
      { type: 'paragraph', text: 'Na fila maluca circular rápida e infinita ociosa CPU "Schedule Base Kernel" Threads disputam bytes e Hertz do clock. Ser "Nice" (amigável) é Ceder o teu Tíquete na Fila priorizando teus irmãos. Nice MAIOR Alto (+19) = Tu Processo LENTO e Pacato Cego. Nice Baixo Escroto (-20) = Super Rápido Dominador Ocupando a CPU inteiramente egoísta Mestre.' },
      { type: 'table', headers: ['O Fator Matematico Físico', 'Valor Clássico Real Base Padrão', 'Resultado Funcional Limitante'], rows: [
        ['Escala Inteira de Valores', 'Range -20 extremista egoista pesado ATÉ +19 super lento fofo doador cedente.', '0 (Absoluto Default Base Lançante Nascido Inocente). Todos Processo Normal Herda Níveo 0.'],
        ['O Fator "Pioridade" (PR Top)', 'Calculo do Kernel Base (Sempre soma 20 Cego Fixo Numeral Base Orgânico).', 'PR 20 (Equivalencia a NI 0).'],
      ]},
      { type: 'code', title: 'Engatilhadores e Manipuladores de Prioridade (Nice versus Renice)', prompt: '# Criar um Demônio Lento Doce de Base Novo Fresco (Opção -n dita e clava Base de Valor)\n$ nice -n 10 tar -czf backup.tar /var/log_enormous\n\n# Modificar um Ator já VIVO correndo enraizado na RAM Ciega via PID\n$ sudo renice -n 15 -p 1234\n\n# A Lei Sagrada Universal do Deus Cego da Maquina Root Supremo\n# MORTAIS (Humanos) = Apenas pioram as próprias tarefas lentas e Boas positivas (+1 a +19)\n# DEUS ROOT (Admins) = Podem Acelerar Fogo Exremo Roubantes de Tarefa a Negativos Egoístas Cegos\n$ sudo nice -n -5 ./mialarm_cripto.sh', output: '' },
    ]
  },

  'lpic1-101-3-7-1': {
    title: 'Expressões Regulares GNU Extrema (Regex SED/GREP/AWK) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'O Alfabeto Criptográfico Mágico (Regex Básico Fixo)' },
      { type: 'paragraph', text: 'Ferramentas do Dia a Dia de caça grep não lêem strings puros humanos, buscam linguagens metacarateres cegos. Existem o Básico Regex (BRE) e Extendidas puristas de programador (ERE via grep -E ex "egrep").' },
      { type: 'table', headers: ['Metacarater Fixo Lógico String', 'Mágica de Fogo', 'Tradução Cega Exemplo LPIC Top'], rows: [
        ['. (Ponto)', 'Acha ABSOLUTAMENTE QUALQUER UM ÚNICO Letra Carater Mundo (Um Espaço cego)', 'A.. (Pega Ano, Aba, A x)'],
        ['* (Asterisco Selvagem)', 'Multiplica 0 ou Infinitos Puros caráteres do Item Letra Exatamente Imediata Á Esquerda Sua', 'Ca*t (Pega Caaat, Ct Cego vazio de A, e Cat)'],
        ['^ (V ou Circunflexo / Chapel)', 'Ancora a Corda Lógica Cega ao Muro INICIO ZERO da Linha Inteira Esquerda.', '^root: (Linhas que brotem o Root só no Canto Começo Físico).'],
        ['$ (Dolar de Dinheiro)', 'Ancora Totalmente Lógica de Batente Cego ao Paredão DIREITO FIM da Linha.', 'bash$ (Só as que a última letra morta for aletra bash nula).'],
        ['[ ] (O Casulo Das Classes)', 'Encontra A PENAS UMA Letra Cega entre os Encarcerados no Chaveamento limitante duro.', '[gG]ato (Acha gato com G Gzão MAIUSCULO ou Baixa pura). [a-z] só puros letreiros letras. [0-9] nums.'],
        ['[^ ] (Negacionismo Chave)', 'Acha MUNDO, MENOS O CEGO dentro das chaves (Cuidado ao circunflexo estar INVERTENDO).', '[^0-9] (Linhas com ABSOLUTAMENTE tudo menos numéricos sujos).'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Filtros cravados cego para o LPIC 1 Exato de Cabeça: Cale o Filtro Branco Vazio linhas mortas que poluem e atrapalham log: `grep -v "^$"` (Apenas o que NÃO -v for o Muro Esquerda atrelado solteiro no Muro Direita imediata). Filtrar Anotações Mistas Comentários do Arquivo: `grep -v "^#" arquivo_config.conf` (Tira todo o Lixo Informativo "#").' },
    ]
  },

  'lpic1-101-3-8-1': {
    title: 'Edição Terminal Purista Ancestral e Ágil (Vi / Vim / Nano) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Os Fases Cósmicos de Existência do Editor "VI"' },
      { type: 'paragraph', text: 'O Exame lpic 1 dita o entendimento profundo dos 3 Mundos Modais Alternáveis absolutos do Vi original cego que assustam inciantes pela total ausencia inicial Falsa de atajos de flechas Mouse Control s cruzetas absolutos.' },
      { type: 'table', headers: ['Modo Pura Base Fase Físico Estático', 'Tecla Invocação Gatilhadora', 'Para O Que Cazzo Serve no Fim Dia'], rows: [
        ['Comissionado Operacional Normal Mode (Comando Cego)', 'O ESC repetidas fúrias volta pra casa Raiz (Lugar Base Original Nascimento).', 'Copiar (Yank), Destruir Cortar (Delete dd), Ir Fim Linha Rota, Pular Linha Ciega.'],
        ['Insersor Digígrafo Typeamento Humano Livre (Insert Mode)', 'Pulsar as puras teclas "i" (Injeta cá esq) / "a" (Adiciona ala DirCega) e "o" (O Novo Andar abaixo Open Cego Livre).', 'Aí sim ativas o teclado digita palavras vivas do universo literal.'],
        ['Linha de Mando Extrema Cega Mortal (EX Mode / Dois Pontos)', 'Apertando ":" fixo na raíz base Normal Inicial.', 'SalvarArquivo e Sair, Buscar Maciçamente RegEx (/), Buscar Trocas Sed em lote em todo documento Cego puramente.'],
      ]},
      { type: 'code', title: 'Botando a Mão da Fuga Vi Exit:', prompt: '# EX MODE SALVADOR (DE BUNDA NA CADEIRA FUGITIVO)\n:wq   # (Write Cego and Quit) A Salvação Universal Pura.\n:x    # (Atalho Supremo do :wq encurtado magico)\n:q!   # Fúria Fuga Destrua Alterações Não Grave Abandonar Sem Registro a Ferros Duros Cego.\n\n# NO MUNDO MODE NORMAL (O TECLADO LOUCO ESQ DIR):\ndd    # Tesoura (Corta apaga Linha Cega de vez e joga Clipboard Virtual buffer)\nyy    # Copiame Yankee Pura (Copie Linha)\np     # Paster Supremo (Colete a Linha Abaixa Cega buffer)\nu     # Mundo Cego Undo Desfazer Burro do Zero Inicial (Control Z do Linux Feroz)', output: '' },
      { type: 'infobox', variant: 'tip', title: 'O Leme Fantasma Morto Ancestral HJKL', content: 'Tevêmonos máquinas puras em séculos passados onde nenhúma Flecha Setinha Subir Descer existia nos teclados ferros Cegos Cpp. Para subir e mexer-se a mão devia fincar cegamente base: `h` Esq / `j` Abajo / `k` Zezinho Arriba Cega Topo / `l` Direita Leste Pura. (Manha Exame Lpic clássica, O J cego parece Lógico Físico Seta Anzois cego apontado pra Fundos cego Abaixo Pura).' },
    ]
  },

  'lpic1-101-4-1-1': {
    title: 'Partições e Sistemas de Arquivos — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '💿', text: 'Ferramentas de Particionamento Clássico (MBR & GPT)' },
      { type: 'table', headers: ['Comando / Aplicativo', 'Suporte Global', 'Modo Operante Físico'], rows: [
        ['fdisk', 'Tabelas antigas MBR (e GPT moderna com patches)', 'Puro Shell interativo, onde "p" imprime sua visualização local cega de ram, "m" ensina atalhos, "d" exclui. Apenas escreve firme ao disco na tecla Master Final "w", caso derrotes apertas "q" o disco sobrevive imaculado intacto inicial.'],
        ['gdisk', 'Nobremente e Somente GPT (GUID Tabela Absoluta)', 'Semelhante clone fdisk direcionado a Discos maiores de 2TB do tipo GPT. Capaz de converter formatar MBR puros a GPT cegos.'],
        ['parted', 'O Rei (Suporta todas: MBR cego+GPT)', 'CUIDADO MAXIMO. Ferramenta fria de execução de partição no OS e Discos síncrono online na hora sem redentor teclado "w" nem rede de segurança RAM Buffer. Deleta partição no segundo imediato do enter.'],
        ['cfdisk', 'MBR+GPT', 'Mapeamento bonitinho (ncurses) desenhando quadrados interativos visuais com setas tecladas de peso no console SSH.'],
      ]},
      { type: 'heading', level: 2, emoji: '📂', text: 'Formatadores Naturais Criação Sistema de Arquivos (Mkfs)' },
      { type: 'table', headers: ['Filesystem Name (Format Typo)', 'Existência Journaling Seguro (Bitácora de Acidentes Apagões RAM)', 'Linguagem Operação Formato a Disco Duro Cruo'], rows: [
        ['ext4', 'Sim (Perfeito e Standard default 90% Servidores)', 'sudo mkfs.ext4 /dev/sdb1'],
        ['XFS', 'Sim (Altamente otimizado a bilhões de arquivos inodos pequenos y robusto de casa RHEL Centos).', 'sudo mkfs.xfs /dev/sdX'],
        ['btrfs', 'Multi-Copy/COW / Snapshots do Sistema Operacional Lógico ao vivo.', 'mkfs.btrfs /dev/sdX1'],
        ['vfat (FAT32 universal cego)', 'Não (- Péssima a travamentos de energía sem bateria UPS)', 'Exigido religiosamente em minúscula partição de 500mb /boot/efi pelas Mothesboards puristas UEFI modernas para arrancar Kernel.'],
      ]},
      { type: 'code', title: 'Comandos do Dia a Dia', prompt: '# 1. Descobrir os Números UUID Absolutos e Nomes Label dos Discos Formatos a Fogo:\n$ blkid\n\n# 2. Fabricando Memória SWAP e Anexando ao OS:\n$ sudo mkswap /dev/nvme0n1p2\n$ sudo swapon /dev/nvme0n1p2', output: '' },
    ]
  },

  'lpic1-101-4-2-1': {
    title: 'Integridade do Filesystem Físico (Fsck / Ext4) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Reparadores (Corruptores Inocentes)' },
      { type: 'paragraph', text: 'A ferramenta rainha mestre global abstrata para consertar pedaços magnéticos lógicos inodos cruzados (Lost+Found) perdidos pela energia cortada é fsck (File System Consistency Check).' },
      { type: 'table', headers: ['Reparador de Sistema / Tune', 'O Comando Puro Limitador Especial do Fazer', 'Sintaxe Letal Obrigatória LPIC'], rows: [
        ['fsck (Genérico wrapper de Todos)', 'Varre o Inodo da Partição em prol recuperar Orphans Files para /lost+found/ resgatando seus megabytes perdidos', 'SÓ FUNCIONA EM OFF! Partição Offline Vazia (`umount /dev/sdb1`), caso tentar reparar / disco ativo vivo acarreta em Destruição Aniquilação Fatal de metadatos da Distro Kernal Systema inteiro.'],
        ['e2fsck', 'Focado cru oclusivamente a Ext2/3 e Ext4.', 'e2fsck -y /dev/sdb1 (força "Yes" ignorando pausamento milenário de interrogação a todo tick byte).'],
        ['xfs_repair', 'Comando Reparador EXCLUSIVO do Formato Red Hat Gigante', 'Nunca rodar fsck num HD xfs, usa ele o seu.'],
      ]},
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Afiadores (Tuner: tune2fs e dumpe2fs)' },
      { type: 'list', items: [
        { term: 'tune2fs / dumpe2fs Ext4', desc: 'Comandos que escaveiam metadatos do Disco sem quebrá-lo na unha.' },
        { term: 'dumpe2fs -h /dev/sdb', desc: 'Saca a tabela descritiva total física "SuperBlock" da vida (Total Inodos Gasto, Total de blocos libres, Checksums, Assinatura de OS, e data finalização formato)' },
        { term: 'tune2fs -l', desc: 'Mismo que o de cima, mais enxuto.' },
        { term: 'tune2fs -i 30d / tune2fs -c 10', desc: 'Para configurar forzando a UEFI bootar um check automático fsck "A cada 30 dias temporários" ou -c "A cada 10 rodilhos acendimentos físicos da PC."' },
      ]},
    ]
  },

  'lpic1-101-4-3-1': {
    title: 'Montagem de Sistemas de Arquivos (Fstab / Mount) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'O Famoso /etc/fstab (Eixo Mestre Automount)' },
      { type: 'paragraph', text: 'O comando `mount` e seu reverso (atenção ao "n" ausente em inglês) `umount` juntam um USB em /mnt/ disco livre temporal provisorio en RAM volátil. Desliga PC e isso zera. Fstab converte perene eterno o fato.' },
      { type: 'table', headers: ['Posição do Campo 1 a 6 FSTab String', 'Significado Arquitetônico do Fstab Linha', 'Notação Clássical Prática Exam'], rows: [
        ['1. Dispositivo (The What)', 'Qual File Disco Real a amarrar no OS (Usa Label de texto o UUID cego ID preferido pra nunca errar cabos sata Cruzados).', 'UUID=f32-ab1 ou /dev/sdX1'],
        ['2. Ponto Direcional Canasta Montura', 'Lugar da Pasta Vazia na Árvore Filesystem Local', '/opt/jogos_locais/'],
        ['3. Typo Filesystem Engine', 'Como o Kernel Trata a Lingua de dados e Bit. Swap para Mem Ram cega', 'xfs / ext4 / swap'],
        ['4. Opções Limitantes Mount Commands', 'Somas Virguladas Cegas de Restringimentos Forçados e Ativados.', 'defaults,noexec,ro'],
        ['5. Dump Num', 'Legacy de Comando de Cinta Backup de años 90.', 'Deixas em "0" cego e surdo.'],
        ['6. Pass/fsck Número Checkagem Reparador de Boot', 'A Ordem Prioridade se o pc morre. Sistema Boot levanta y pasa Fsck neste disco.', '"0" Ignorá e o deixa sujo. "1" Exclusívo de Root (/). "2" Provas HDs extras.'],
      ]},
      { type: 'heading', level: 2, emoji: '📋', text: 'Defaults Mágico e Limitantes Segurança Monturas' },
      { type: 'code', title: 'Valores Implícitos "defaults" LPIC Primes', prompt: 'defaults = rw(Lecto-Escritura viva), suid(Bits super-suid permitidos), dev(Mestre de aparelhos dev crudos interpretables), exec(Aceita rodar Binarios App C), auto(Entra na caça general de mount -a), nouser(Um mero usuário local Zezinho humano sem sudo não desmontara esse disco USB pendrive), async(Escritura de RAM pro File assíncrona).\n\n# Montar forçado algo a fuego de disco ISO 9660\n$ sudo mount -o loop /home/j/juego.iso /mnt/iso\n# Se pendrive vírus da tua mãe chegar:\n$ sudo mount -o noexec,nosuid /dev/sdUSB /mnt/', output: '' },
    ]
  },

  'lpic1-101-4-5-1': {
    title: 'Permissões e Propriedade Mestre (Chown/Chmod) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Permissões Clássicas Base e Matemática Unixa' },
      { type: 'paragraph', text: 'Tanto Chmod quanto Umask definem. Chown dita do Dono e do Grupo-Setor Cego do arquivo. r=4 w=2 e x=1. Multiplicados a Usuario(u), Group(g) e Universo Global Other (o).' },
      { type: 'table', headers: ['Numeração Binária Octal Resumiva Chmod', 'Equivalente de String " ls -l" visual.', 'Explicação de Impacto Físico Linux.'], rows: [
        ['755 (Files App / Pastas Geral Aberto L.', 'rwxr-xr-x', 'Eu (User Dono) Faço o Que quero (Leio, Modifico e Acendo Fogo 7 executável). Grupo da Rede Intranet: Só Le, e Abre CD. O Mundo resto de estranho igualzinho a eles só ve. Normal Cego Padrão Diretório.'],
        ['644 (Textos Cegos Sem Shell bash)', 'rw-r--r--', 'Todos normais. User Modifica Txt mas Linux Impede tentar de roda-lo como magica cega de App Binario (Evita troyano bash cego).'],
        ['777 / 666', 'rwxrwxrwx', 'Rompimento general de muralha de Tróia y Veto.'],
      ]},
      { type: 'heading', level: 2, emoji: '⭐', text: 'Bit de Permissão de Blindagem Esdrúxula Especial (SUID SGID)' },
      { type: 'list', items: [
        { term: 'SUID (+s Usuário / 4xxx)', desc: 'Escalada Temporal Privilégio (Set User ID). Quem ejecuta o script file toma os poderes plenos nativos do verdadeiro Criador daquele binário enquanto vivo na memória. (Permite o passwd nativo a alterar crudos Shadow de Senhas do sistema).' },
        { term: 'SGID (+s Group / 2xxx)', desc: 'Modo Ficheiro: Parecelado SUID mas rouba os traços de Pertença do Grupo em comum geral de empresa (Admins_dev). Modo Carpeta Dir: TUDO arquivo nascido do útero desta pasta herdara FORÇADAMENTE e PISARÁ as configurações orgânicas nativas do Usuário Inseritor. Magia Absoluta compartilhada corporativa de Samba.' },
        { term: 'Sticky Bit (+t ou 1xxx) O Grande Veto Guardião', desc: 'Sendo em diretórios, iníbe deleção de arquivos. No diretório /tmp, de todos do Linux, ninguém paga pela fúria de ter seus lixos varridos da memória alheios por humanos do resto da equipe vizinhos de sistema (apenas ROOT y Criador Nativo Dono do Arquivínho podem).' },
      ]},
    ]
  },

  'lpic1-101-4-6-1': {
    title: 'Hardlinks e Symlinks — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Dois Mundos do Clone e Espelho (Ln)' },
      { type: 'comparison', left: {
        title: 'Ligação e Fio Condutor Direto Inodo Cego Físico Duro Máximo (Hard Link Comando PURO (ln orig clon))',
        items: ['Clonagem Divina: Tem rigorosamente Exato o Mesmíssimo e Gêmeo INODE ID Número (Veja com ls -li).', 'Restringido e amaldiçoado cego de ficar Apenas e Únicamente vivo perante um Arquivo (Se chillas, Filesystem de erro). NADA de Pastas.', 'Sem Pulo de HD: Você jamais cruzará pra lincar o disco de MNT sdb a SDa raiz. Ele não brinca.', 'Imortal. Removeste, Mataste, Suicadaste o Script1 Raíz Master do Desktop? Teu HardLink Clone escondido ali no canto escuro continua vivasso funcional de boas com seu dado em bytes ocupando bloco de disco eterno até você achar ele.']
      }, right: {
        title: 'Ligamento Aéreo Macio Volátil Simbólico (Soft / Symlink - ln -s matriz destino_clown)',
        items: ['Nova Alma em Máquina. Ganha de presente Inode Distinto do Mataderio Raiz, e vira um Tipo Arquivo (l de link na permissão).', 'Brinca sobre Cercas HDDs. Cruza File Systems Monturas Samba NFS Ciffs Remoto Etc.', 'Acapara simetricamente os Arquivos e as Pastas gigantesças do Mundo (Simples como Atalho Win).', 'Morte súbita de Caco vermelho Quebrado GUI se o MasterTarget morre / se move / se deleta. Cega seu ponteiro louco apotando a fumo e ar que não existe mais.']
      }},
    ]
  },

  'lpic1-101-4-7-1': {
    title: 'Filesystem Hierarchy Standard (FHS) e Caçadores (Find) — Aprofundamento',
    sections: [
      { type: 'heading', level: 2, emoji: '🗂️', text: 'Hierarquia FHS Normativa Linux Foundation Essencial' },
      { type: 'table', headers: ['Diretório Raízo / Nível 1', 'Destino Objeto'], rows: [
        ['/ (Root Geral)', 'Deus Fundo absoluto. Ponto Zero.'],
        ['/boot/', 'Casinha blindada MBR do Grube y vmliunz kernels de partida.'],
        ['/etc', 'Configuração de texto livre de aplicativos (Não ponha e nem caia arquivos Binarios sh de app aqui adentro).'],
        ['/bin & /sbin', 'Sbin = Binarios Exclusivos Fogo e Forca de Admin Sistema Cru / Bin (Cego usuario general pwd vim nano etc).'],
        ['/tmp', 'Área desovada varrida magica da Ram OS a reboots com bit Sticky activo cego natural.'],
        ['/var', 'Crescimento desordenado violento constante. Logs pesados Dbs, Webservers nginx publicos.'],
        ['/usr/local', 'Tierras Libres Não Oficial do OS. Compilas um Git no make e ele suja limpo aqui (sem sujad /bin core).'],
      ]},
      { type: 'heading', level: 2, emoji: '🔍', text: 'Localizadores e Motores Find / Locate' },
      { type: 'list', items: [
        { term: 'locate lpic1.txt', desc: 'Rápido igual relampago divino. Porquê? Por que o demônio crond acorda as 4 am (cmd `updatedb`) indexando o mundo varrido em HD a um database fixo de texto local da Ram Linux cego varrendo do HD original pesadamente. E você apenas lê esse listado velho rapido. NUNCA DEVE encontrar coisas da última hora de um USB salvo 1 min atrás.' },
        { term: 'find /var -size +1G', desc: 'I/O Lento mas Tempo Real Vivo (Lê de verdade o bit Inodo disco Vivo crudo). Poderoso Mágico infinito flag `-mmin +60` (Arquivos maiores de hora viejos alteração). `-type f` `-user root` `-perm /4000` `-exec rm {} \\;` (Deleta no fim de caçá-los).' },
      ]},
    ]
  },

}
