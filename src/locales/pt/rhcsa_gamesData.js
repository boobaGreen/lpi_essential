// RHCSA Games Data — Portuguese
// Used by useGameData() when courseId === 'rhcsa'

export const memoryGameData = [
  // Topic 1
  { command: 'grep -r "pattern" /etc/', description: 'Busca recursivamente um padrão em /etc/' },
  { command: 'tar -czvf archive.tar.gz /dir', description: 'Cria um arquivo compactado gzip' },
  { command: 'tar -xzvf archive.tar.gz', description: 'Extrai um arquivo tar.gz' },
  { command: 'find / -name "*.conf" -type f', description: 'Encontra todos os arquivos .conf no sistema' },
  { command: 'chmod 755 file', description: 'rwxr-xr-x — dono executa, outros leem/executam' },
  { command: 'chown mario:dev file', description: 'Altera o proprietário e o grupo de um arquivo' },
  { command: 'ln -s /real/src /symbolic/link', description: 'Cria um link simbólico' },
  { command: 'man -k "keyword"', description: 'Busca por uma palavra-chave nas páginas man' },
  // Topic 2
  { command: 'export VAR="value"', description: 'Torna uma variável disponível para subprocessos' },
  { command: 'RESULT=$(command)', description: 'Captura a saída de um comando em uma variável' },
  { command: '[ -f "$FILE" ]', description: 'Verifica se a variável aponta para um arquivo existente' },
  { command: '[ -d "$DIR" ]', description: 'Verifica se a variável aponta para um diretório existente' },
  { command: '[ -z "$VAR" ]', description: 'Verifica se uma string está vazia' },
  { command: 'for f in /etc/*.conf; do echo $f; done', description: 'Itera sobre todos os .conf em /etc/' },
  // Topic 3
  { command: 'systemctl enable --now sshd', description: 'Habilita e inicia sshd em um único comando' },
  { command: 'systemctl mask httpd', description: 'Evita completamente o início do serviço httpd' },
  { command: 'systemctl set-default multi-user.target', description: 'Define o target de boot padrão (CLI)' },
  { command: 'journalctl -u sshd -f', description: 'Acompanha logs do serviço sshd em tempo real' },
  { command: 'kill -9 PID', description: 'Envia SIGKILL para encerrar um processo à força' },
  { command: 'renice -n -5 -p PID', description: 'Altera a prioridade de um processo em execução' },
  // Topic 4
  { command: 'pvcreate /dev/sdb1', description: 'Inicializa uma partição como Volume Físico LVM' },
  { command: 'vgcreate datavg /dev/sdb1', description: 'Cria um Grupo de Volumes a partir de um PV' },
  { command: 'lvcreate -L 2G -n datalv datavg', description: 'Cria um Volume Lógico de 2GiB' },
  { command: 'lvextend -L +1G -r /dev/vg/lv', description: 'Estende LV e redimensiona o sistema de arquivos autom.' },
  { command: 'xfs_growfs /mountpoint', description: 'Expande um sistema de arquivos XFS montado' },
  // Topic 5
  { command: 'mkfs.xfs /dev/sdb1', description: 'Formata uma partição com o sistema de arquivos XFS' },
  { command: 'cryptsetup luksFormat /dev/sdc1', description: 'Formata uma partição com criptografia LUKS' },
  { command: 'cryptsetup open /dev/sdc1 vault', description: 'Abre um contêiner LUKS como /dev/mapper/vault' },
  { command: 'setfacl -m u:mario:rw file', description: 'Adiciona permissões ACL para o usuário mario' },
  { command: 'getfacl file', description: 'Mostra entradas ACL estendidas de um arquivo' },
  // Topic 6
  { command: 'dnf install package', description: 'Instala um pacote com todas as suas dependências' },
  { command: 'dnf provides /usr/bin/vim', description: 'Descobre qual pacote fornece um arquivo/comando' },
  { command: 'rpm -qf /usr/bin/passwd', description: 'Descobre qual pacote instalou determinado arquivo' },
  { command: 'rpm -ql package', description: 'Lista todos os arquivos incluídos em um pacote' },
  { command: 'grub2-mkconfig -o /boot/grub2/grub.cfg', description: 'Regera a configuração do GRUB2' },
  // Topic 7
  { command: 'nmcli con mod ens3 ipv4.addresses 192.168.1.100/24', description: 'Define um IP estático em uma conexão' },
  { command: 'nmcli con up ens3', description: 'Ativa e aplica a configuração de rede' },
  { command: 'firewall-cmd --add-service=http --permanent', description: 'Abre permanentemente a porta 80 do firewall' },
  { command: 'firewall-cmd --reload', description: 'Aplica regras permanentes do firewalld sem reiniciar' },
  { command: 'ssh-copy-id mario@server', description: 'Copia a chave pública SSH para o servidor remoto' },
  // Topic 8
  { command: 'useradd -m -s /bin/bash mario', description: 'Cria usuário com pasta home e shell bash' },
  { command: 'usermod -aG wheel mario', description: 'Adiciona mario ao grupo wheel (acesso sudo)' },
  { command: 'chage -M 90 mario', description: 'Define expiração de senha para 90 dias' },
  { command: 'visudo', description: 'Edita /etc/sudoers de forma segura com validação de sintaxe' },
  { command: 'userdel -r mario', description: 'Exclui o usuário e seu diretório home' },
  // Topic 9
  { command: 'getenforce', description: 'Exibe o modo SELinux atual' },
  { command: 'setenforce 0', description: 'Muda SELinux para o modo permissivo (temporário)' },
  { command: 'restorecon -Rv /path', description: 'Restaura contextos SELinux padrão recursivamente' },
  { command: 'setsebool -P httpd_can_network_connect on', description: 'Habilita um booleano do SELinux permanentemente' },
  { command: 'semanage port -a -t http_port_t -p tcp 8443', description: 'Adiciona porta 8443 ao tipo http_port_t' },
  // Topic 10
  { command: 'podman run -d --name web -p 8080:80 nginx', description: 'Inicia o contêiner nginx em segundo plano na porta 8080' },
  { command: 'podman exec -it container bash', description: 'Abre um shell bash em um contêiner em execução' },
  { command: 'podman build -t myapp:1.0 .', description: 'Constrói a imagem a partir do Containerfile neste diretório' },
]

export const trueFalseData = [
  // Nivel 1
  { text: 'O sistema de arquivos padrão no RHEL9 é o XFS.', answer: true, explanation: 'XFS é o FS padrão nas versões recentes do RHEL devido à sua escalabilidade.', difficulty: 1 },
  { text: '"systemctl enable sshd" inicia o serviço imediatamente.', answer: false, explanation: 'enable apenas configura o serviço para iniciar no boot. Use --now para iniciá-lo também.', difficulty: 1 },
  { text: 'O arquivo /etc/fstab controla os sistemas de arquivos montados no boot.', answer: true, explanation: 'O systemd lê /etc/fstab durante a inicialização do sistema.', difficulty: 1 },
  { text: 'Um valor "nice" igual a -20 indica a prioridade de CPU mais alta.', answer: true, explanation: 'A escala vai de -20 (mais favorável/alta) a +19 (mais baixa).', difficulty: 1 },
  { text: 'O sinal SIGKILL (9) pode ser bloqueado ou ignorado por um processo.', answer: false, explanation: 'SIGKILL nunca pode ser capturado, bloqueado ou ignorado. Ele termina o processo abruptamente.', difficulty: 1 },
  { text: '"pvcreate" cria um Volume Lógico no LVM.', answer: false, explanation: 'pvcreate inicializa um Volume Físico (PV). Volumes Lógicos são criados com lvcreate.', difficulty: 1 },
  { text: 'O SELinux no modo "permissive" bloqueia o acesso proibido.', answer: false, explanation: 'No modo permissivo, ele apenas registra avisos sobre a violação, não as bloqueia.', difficulty: 1 },
  { text: 'O Podman requer um daemon em execução contínua com privilégios de root.', answer: false, explanation: 'Podman não possui daemon (daemonless) e pode rodar contêineres e imagens (rootless).', difficulty: 1 },
  { text: '"restorecon" restaura os contextos de arquivo originais do SELinux.', answer: true, explanation: 'Ele lê a base de regras criadas com semanage fcontext.', difficulty: 1 },
  { text: 'Um UUID do disco rígido muda sempre que a máquina é reiniciada.', answer: false, explanation: 'O UUID é atribuído apenas no momento da formatação e é estático e permanente.', difficulty: 1 },
  // Nivel 2
  { text: '"lvextend -r" redimensiona automaticamente o sistema de arquivos de um LV recém-aumentado.', answer: true, explanation: 'A opção -r executa nos bastidores um resize2fs ou xfs_growfs (conforme for necessário).', difficulty: 2 },
  { text: '"firewall-cmd --add-port=8080/tcp" sem "--permanent" persiste após uma reinicialização.', answer: false, explanation: 'Sem --permanent a alteração é em tempo de execução e será redefinida na recarga ou reboot.', difficulty: 2 },
  { text: '"semanage fcontext" altera o contexto SELinux de arquivos imediatamente após executá-lo.', answer: false, explanation: 'Ele não aplica ao disco subjacente, você precisa executar restorecon em seguida.', difficulty: 2 },
  { text: '"usermod -G wheel mario" (sem -a) apagará outros grupos suplementares de mario.', answer: true, explanation: 'A opção -G (sem -a) estabelece todos os grupos de uma vez; excluindo os faltantes. Devemos usar -aG para manter os antigos.', difficulty: 2 },
  { text: 'Sistemas de arquivos XFS podem ser reduzidos ("shrinked") online.', answer: false, explanation: 'O XFS suporta APENAS AUMENTO DE TAMANHO de sua partição.', difficulty: 2 },
  { text: 'Configurar um booleano de SELinux sem a tag -P faz efeito ao rebotar o PC.', answer: false, explanation: 'A tag -P (Permanent) garante que o novo estado resista as reicializações do linux.', difficulty: 2 },
  { text: 'O parâmetro ":z" nos mapeamentos de volume do Podman modifica o rótulo do SELinux host partilhado.', answer: true, explanation: 'Isso é usado para resolver bloqueios do SELinux em pastas passadas para sub-contêineres (:z compartilhado, :Z privado).', difficulty: 2 },
  { text: '"journalctl -b" restringe a leitura de logs apenas a bootagem atual da máquina.', answer: true, explanation: 'Usa-se a flag -b para remover da saida os logs de tentativas mortas passadas no terminal.', difficulty: 2 },
  // Nivel 3
  { text: 'É necessário criar um arquivo na raiz "/.autorelabel" quando a palavra passe de root é trocada do zero.', answer: true, explanation: 'Como o /etc/shadow foi editado de um ambiente rd.break (sem SELinux ativado) é precisso remarcar seus status no reboot posterior.', difficulty: 3 },
  { text: 'A opção `noexec` em fstab diz respeito a desativar uso de binários numa montagem especifica.', answer: true, explanation: 'Verdade. Já nosuid é o que cessa escalamento de Root ou SysAdmin sobre partiçōes.', difficulty: 3 },
  { text: 'Se você ajustar seu pass fstab para pass=0 o fsck (analise) rodará paralelamente ao mount HD Root do servidor.', answer: false, explanation: 'A opção de PASS define se este é ou nao checado. 0=ignora, 2=sucessivo a montagem de prioridade 1 (/).', difficulty: 3 },
  { text: 'Você invoca "systemctl daemon-reload" no momento em que modifica um arquivo unit no seu terminal base.', answer: true, explanation: 'As configs carregadas ativas operam em buffer, precisão recarregar das pastad systemd manuamente.', difficulty: 3 },
  { text: 'Uma atualização ao "semanage port" tem efeitividade e exige "restoresystem-ports" a posterior.', answer: false, explanation: 'SeManage de porta ja funciona on-the-go após commit na base relacional do SELinux, nao precisa "restorecon" sobre arquivos e redes.', difficulty: 3 },
  { text: 'O comando de copiar ("cp") não preserva metadados SELinux, equanto o comando mover ("mv") transfere as tags host originais do arquivo alvo.', answer: true, explanation: 'Mv causa migrações imprevistas e com acessos falhos (requerendo relabel restorecon depois no novo destino).', difficulty: 3 },
]

export const fillGapData = [
  // Difficulty 1
  { prompt: 'systemctl _____ sshd', answer: 'enable --now', hint: 'habilitar e iniciar ao mesmo tempo', difficulty: 1 },
  { prompt: 'dnf _____ httpd', answer: 'install', hint: 'instalar o pacote', difficulty: 1 },
  { prompt: 'useradd -m -s /bin/bash _____', answer: 'mario', hint: 'nome do usuário', difficulty: 1 },
  { prompt: 'pvcreate _____', answer: '/dev/sdb1', hint: 'cominho da partição para inicializar', difficulty: 1 },
  { prompt: 'getenforce', answer: 'getenforce', hint: 'verificar status do SELinux', difficulty: 1 },
  { prompt: 'firewall-cmd --add-service=http _____', answer: '--permanent', hint: 'fazer a exceção de porta ser salva', difficulty: 1 },
  { prompt: 'podman _____ -it ubi9 /bin/bash', answer: 'run', hint: 'construir/processar um container', difficulty: 1 },
  { prompt: 'tar -czvf backup.tar.gz _____', answer: '/etc/ssh/', hint: 'diretório que se pretende agrupar', difficulty: 1 },
  { prompt: 'passwd _____', answer: 'mario', hint: 'usuário cujo password será trocado', difficulty: 1 },
  { prompt: 'systemctl _____ httpd', answer: 'status', hint: 'checar se esta vivo ou não o processo', difficulty: 1 },
  // Difficulty 2
  { prompt: 'vgcreate datavg _____', answer: '/dev/sdb1', hint: 'volume fisico atrelado a ele', difficulty: 2 },
  { prompt: 'lvcreate _____ 2G -n datalv datavg', answer: '-L', hint: 'letra paramatrizadora de tamanho lógico', difficulty: 2 },
  { prompt: 'lvextend -L +1G _____ /dev/datavg/datalv', answer: '-r', hint: 'fazer update automatico do sistema XFS/EXT', difficulty: 2 },
  { prompt: 'setenforce _____', answer: '0', hint: 'trocar onthefly e sem travas para o teste livre do processo', difficulty: 2 },
  { prompt: 'usermod _____ wheel mario', answer: '-aG', hint: 'atribuir usuario mario ao grupo sudo/admin sem formatar origens', difficulty: 2 },
  { prompt: 'chage _____ 90 mario', answer: '-M', hint: 'máximo num de dias', difficulty: 2 },
  { prompt: 'firewall-cmd _____', answer: '--reload', hint: 'fazer a leitura nova on line', difficulty: 2 },
  { prompt: 'ssh-keygen -t _____', answer: 'ed25519', hint: 'protocolo de hash curvo mais robusto no RHEL9', difficulty: 2 },
  { prompt: 'cryptsetup _____ /dev/sdc1', answer: 'luksFormat', hint: 'parametros de disco trancafiado e segredo', difficulty: 2 },
  { prompt: 'grub2-mkconfig -o _____', answer: '/boot/grub2/grub.cfg', hint: 'destido root master da confg do inicio de sessao das partiçoes', difficulty: 2 },
  // Difficulty 3
  { prompt: 'semanage fcontext -a -t httpd_sys_content_t "_____"', answer: '/web(/.*)?', hint: 'regex de cascata full diretorio global do linux master folder var web local bin source etc system', difficulty: 3 },
  { prompt: 'restorecon _____ /var/www/html', answer: '-Rv', hint: 'flags atreladas as restauros do seu filesystem e logs para ver erro se tiver', difficulty: 3 },
  { prompt: 'setsebool _____ httpd_can_network_connect on', answer: '-P', hint: 'persistir mesmo que no reboot o linux master limpa os flags temporários gerais', difficulty: 3 },
  { prompt: 'podman run -v /data:/data:_____ nginx', answer: 'Z', hint: 'tag SELinux em volume podman/docker nao root exclusiva restrita do grupo em foco atencao se private', difficulty: 3 },
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'comando que troca o foco de runlevel sem reboot e dropa sessões graficas', difficulty: 3 },
]

export const dragDropData = [
  {
    id: 'dd-lvm-order',
    category: 'Sequência de Criação de LVM',
    question: 'Coloque os comandos LVM na ordem correta:',
    items: [
      { text: 'lvcreate -L 2G -n datalv datavg', order: 3 },
      { text: 'mkfs.xfs /dev/datavg/datalv', order: 4 },
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
    ],
  },
  {
    id: 'dd-selinux-modes',
    category: 'Status de Operação do SELinux',
    question: 'Associe a função principal ao seu perfil ou status correspondente:',
    items: [
      { text: 'Bloqueia e envia falhas críticas a audit.log dos pacotes/servico.', matches: 'Enforcing' },
      { text: 'Apenas audita para diagnóstico nos logs, mas deixa processar os arquivos', matches: 'Permissive' },
      { text: 'Substitui todas os atributos das tags nativas SELinux anulando proteções nos kernel.', matches: 'Disabled' },
    ],
  },
  {
    id: 'dd-systemd-match',
    category: 'Correspondência de Boot Systemd',
    question: 'Vincule os alvos runlevel ao seu target novo Linux SystemD equivalente:',
    items: [
      { text: 'multi-user.target', matches: 'Runlevel 3 (CLI / Terminal Somente)' },
      { text: 'graphical.target', matches: 'Runlevel 5 (GUI / Gráfico Ativo Pleno)' },
      { text: 'rescue.target', matches: 'Runlevel 1 (Admin root unico e solado Local System sem REDE etc.)' },
    ],
  },
  {
    id: 'dd-firewall-cmds',
    category: 'Tipos Regras Firewalld',
    question: 'Ordene em Temporário contra Permanente:',
    items: [
      { text: 'firewall-cmd --add-service=http', category: 'Temporário' },
      { text: 'firewall-cmd --add-service=http --permanent', category: 'Permanente' },
      { text: 'firewall-cmd --add-port=8080/tcp', category: 'Temporário' },
      { text: 'firewall-cmd --add-port=8080/tcp --permanent', category: 'Permanente' },
    ],
  },
]

export const terminalChallengeData = [
  { id: 'tc-rhcsa-1', description: 'Veja status geral SELinux', prompt: 'getenforce', expectedOutput: 'Enforcing', hint: 'Comando simples SElinux print status no monitor', difficulty: 1 },
  { id: 'tc-rhcsa-2', description: 'Olhe onde sistema incia default (get)', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Systemd de checkagem boot default', difficulty: 1 },
  { id: 'tc-rhcsa-3', description: 'Sabe listar blocos sem file path ls?', prompt: 'lsblk', expectedOutput: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNT.', hint: 'Block listar comodos block name maj de disco nvme', difficulty: 1 },
  { id: 'tc-rhcsa-4', description: 'De onde veio no yum dnf o vim editor?', prompt: 'dnf provides */vim', expectedOutput: 'vim-enhanced', hint: 'Providos pacote base nome bin de dnf info req res', difficulty: 2 },
  { id: 'tc-rhcsa-5', description: 'RPM base pacote nome origem pass em bash root?', prompt: 'rpm -qf /usr/bin/passwd', expectedOutput: 'passwd-', hint: 'Red Hat Package check e filter full file root source query origin f', difficulty: 1 },
  { id: 'tc-rhcsa-6', description: 'O que SELinux pensa da porta 8080 local do Apache Web (http port)?', prompt: 'semanage port -l | grep http_port_t', expectedOutput: 'http_port_t', hint: 'Semanage no porto l e grepeia com pipe pra limpar de ruido de listagem enorme sys config tcp e de udp', difficulty: 2 },
  { id: 'tc-rhcsa-7', description: 'Checkar por nome o ssh daemon qta ativo sys pid.', prompt: 'pgrep sshd', expectedOutput: '[0-9]+', hint: 'Nome bin check daemon nome e extrai a pid', difficulty: 1 },
  { id: 'tc-rhcsa-8', description: 'Espaço em discos base human file tag.', prompt: 'df -Th', expectedOutput: 'Filesystem', hint: 'Disk File h human Type t de output file', difficulty: 1 },
  { id: 'tc-rhcsa-9', description: 'Vê as configs nmcli de device list.', prompt: 'nmcli connection show', expectedOutput: 'NAME', hint: 'nmli c s ou o todo con show device id up e names down da lista geral v4 e device link auto', difficulty: 2 },
  { id: 'tc-rhcsa-10', description: 'Checkagem Docker nativo/Podman processo lista de imagens e id.', prompt: 'podman ps', expectedOutput: 'CONTAINER ID', hint: 'A mesma que do docker, rodar com infos de processo a list id start name status de portas host pass no user env limit', difficulty: 1 },
  { id: 'tc-rhcsa-11', description: 'Quero listar onoff SELinux bool flags httpd flags.', prompt: 'getsebool -a | grep httpd', expectedOutput: 'httpd_', hint: 'Get se status check bool all c filter pipe de httpd', difficulty: 2 },
  { id: 'tc-rhcsa-12', description: 'Ver config directory file context ctx flag linux de raiz z status -d.', prompt: 'mkdir /test && ls -Zd /test', expectedOutput: 'default_t', hint: 'criar e concatenar list directory em -Z', difficulty: 3 },
  { id: 'tc-rhcsa-13', description: 'Comando q resume disk group LVM na hora', prompt: 'vgs', expectedOutput: 'VG', hint: 'Comando tres letrass resum do de splay VG', difficulty: 2 },
  { id: 'tc-rhcsa-14', description: 'Logs da net confg do 10 num unit filter por ssh daemon logs root check journal of sys num de logs.', prompt: 'journalctl -u sshd -n 10', expectedOutput: 'sshd', hint: 'Log manager num var tail no file de ctl no ssh num do ultimos -n', difficulty: 2 },
]
