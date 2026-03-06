// RHCSA Quiz — Topic 5: File System (Português) — 20 questions

export const rhcsaTopic5QuizzesPT = [
  // ─── ext4 e XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Qual comando forja e instaura do zero um sistema de arquivos do tipo "ext4" sobre a partição bruta física /dev/sdb1?',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'Exatamente a instrução A quanto a B surtem o idêntico efeito'],
    correct: 3,
    explanation: 'A diretiva "mkfs.ext4" não passa de um atalho cômodo e alias direto para o extenso "mkfs -t ext4". Ambas moldarão a lama inerte de blocos numa grelha operável ext4 perfeitamente.',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Para a homologada família RHEL9 (ecosistema Red Hat), qual é imperiosamente o File System de adoção nativa e padrão matriz predeterminado em particionamentos limpos?',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: 'Desde a era glaciária do RHEL7 até o moderno RHEL9, a supremacia imbatível pertence estritamente ao bombástico XFS, louvado ferrenhamente por sua escabilidade irrestrita perante montanhas monstruosas de dados e performance paralela assustadora em multi-cores.',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Traz a tona estatísticas obscuras. Qual sentinela despeja a autópsia detalhada contendo contagem de blocos, arquitetura de setores e saúde atômica de um filesystem exclusvo "XFS" ancorado e já rodando em /data?',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: 'O soberano `xfs_info <PontoDeMontagemAtivo>` radiografa o XFS vomitando tudo de seus parâmetros vitais. Nota de segurança: Utilitários como tune2fs e dumpe2fs são farramentas atreladas exclusivas às dinastias ext2/3/4 somente.',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Tragédia! Queda bruta de luz rasgou a integridade do XFS. Qual a ferramenta espartana de artilharia pesada capaz de restaurar pontes e metadados lógicos partidos num FileSystem XFS tombado de vez?',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: 'A UTI exclusiva se materializa no `xfs_repair /dev/caminhoFisico`. ADVERTÊNCIA CARDINAL: A partição XFS defeituosa e cadavérica jamáis pode estar montada ao girar essa manivela (Unmount estrito requerido).',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Sua pasta de pendrive montada tá presa pra ejetar. Qual engenhosa tag paramétrica inserida nas options de montagens forçaria sibilantemente tal unidade a se desenganchar e desligar automática e passivamente caso ninguém toque nela depois de um mero tempo ocioso?',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: 'A magia atrelada do `x-systemd.automount` atua com delegacia pesada no SystemD para interceptar os contatos na pasta engatilhando as aberturas apenas sob demanda pura (Acesos on Demand), e também suporta recolher atirando em idle (x-systemd.idle-timeout=Tempo) sem a intervenção humana trancando lixo pendurado à toa.',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Paranoia total! Você cata a fatia recém talhada /dev/sdc1 e decide selá-la brutalmente. Qual comando ergue lá paredes blindadas convertendo o interior físico numa caixa-forte militar de formato de encliptação LUKS?',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: 'O inclemente `cryptsetup luksFormat /caminhoFisico` incinera perigosamente o HD derretendo a antiga lama instilando o formidável Cabeçalho de encriptação primário LUKS. Exigirá "YES (maiusculo cravado longo obrigatoriamente)" de aceitação para avançar e a doação inicial de uma rica passphrase mestre.',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Trunfo na mão, o HD tem formato LUKS. Falta abrir a arca para despejar utilidade! Que comando engole e exige tua senha verbal destrancando milagrosamente o cofre /dev/sdc1 amarrando-o ao dispositivo pass-by exposto na superfície lógica clara e chamuscada agora por "datadisk"?',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'As premissas de formatação conjugada descritas em A e na arcaica B',
    ],
    correct: 3,
    explanation: 'Tanto o moderno curtíssimo `open` quanto seu avô barbudo `luksOpen` farão o utiliticom cryptsetup engolir teus toques do secretão criando incontinente ponte transparente para as lógicas claras no endereço montado de uso de passagem e despejo limpo na esteira `/dev/mapper/datadisk`.',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Automagia macabra! Sem ter um peão pra digitar a senha no porão à madrugada num boot seco sem tela, por onde SysAdmins amordaçam UUIDs mesclados em confinguração atrelando os volumes a arquivos chaves textuais (Keyfiles guardadas longe), afim d\'o OS LUKS se destravancar silenciosamente de supetão no boot?',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: 'Fstab monta os discos inocentes DEPOIS deles existirem claros. Mas o sombrio e precursor arquivo pré-montatório `/etc/crypttab` levanta voo BEM ANTES. É alí onde jaz mapeado o [Nome] [UUID_Encripitado_Fonte] e o [LocalDoKeyfileDaSenha] incumbidos severamente de rachar e explodir debaixo pro cima o cofre cru LUKS atado transformando em bloco de dev e abrindo caminho pras montagens sequentes.',
  },

  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Redes em frangalhos (Network Filesystem)! Que humilde peão e pacote binário vital é absolutamente basilar a se implantar por dnf antes da gente conseguir espelhar e engatar maravilhas lógicas provenientes de storages servidores NFS nas patas deste Linux RHEL9 aqui?',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: 'O kit-suíço utilitário essencial se engloba maciço no pacote titular `nfs-utils`. Sem ele na carne, seu mount engasga e vomita "Bad Filesystem Type nfs". (O CIFS utils orbita pra domar bestas provenientes de caixas rubras de Windows Samba via SMB).',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Coragem sintática em /etc/fstab: Construa em silêncio o papiro exato pra pendurar fixamente sempre no boot as entranhas sujas exportadas de "/data" advindas do servidor gordo 192.168.1.10, e amarre e ancore ele à sua pastinha vazia em "/mnt/data":',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Cânone absoluto: <Doador/Exportador/Server>:<MergulhoAbsolutoSource> <PontoLocalSujo> <Tipo (nfs ou nfs4)> <Defaults> 0 0. A magia ali emite de cara o "dois pontos :" separando covardemente o IP do chassi de pasta hospedeira de fuga.',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'O mágico da cortina: (AutoFS). Nele as montagens flutuam ondemand, o pino mestre é o Master Map. Em qual pergaminho eclesial sagrado e base precursora tu inscreves pesadamente o diretório pai baliza raiz e mandatório (Ex: /misc) onde as mágicas filhas e as demais amarrações ramificadas despontarão on-fly de acordo contido nos ditos do arquivo secundário irmão?',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 0,
    explanation: 'O deus pai absoluto invocador raiz, ele reina como `/etc/auto.master`. Dentro de seus muros e linhas ele prega: "Atenção: A magia brotará no Mountpoint Raiz Pai `/misc` mas, as minúcias e IPs secundários leiam e acatem lendo as escrituras do que o outro papiro `/etc/auto.misc` ditar." ',
  },

  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Listas obscenas de permissão de acesso estendido (ACL): O bico fino do dev chato de nome "mario" clama por regalias sujas exigindo escrever/ler na pasta do time /project sem precisar virar root nem dono formal. Conceda brutalmente a chupeta suja e isolada unicamente a ele sem estragar os perms padróes:',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: 'A punção `setfacl -m` (Modify/Inserir).  Ele dita a regra crua: `u:` de usuário (ou g: p/ grupo), acompanhado impiedoso do nome :`mario`, culminado incólume nos bits desejados :`rw`. Bizarramente eficaz furando e ultrapassando as 3 leis retrógradas normais de octal rwx de chmod clássico rústico de pedra.',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'A tela sangrou com um sinal sonoro fático de (+) adjunto aos perms num ls -l! Peste fina. Suspeita-se dum enraizado ACL atuante no arquivo oculto! Oculte a espada euxe a lupa... Revele ao vivo aos céus o grid inteiro de quem está sorrateiramente sendo abençoado pelas Listas ACL estendidas dali?',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: 'O holofote sagaz `getfacl` esparrama em prosa vertical, explícito e prolixo todo o organograma de quem usurpa ler/escrever via malhas furtivas de acl secundárias. O velho ls -l apenas entrega miseravelmente e em porco pio aviso o cego e fútil icônico sufixo do "+".',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Maldição parental do (Set GID Bit)! Qual o nefasto, sutil, mas milagroso feitiço passivo incrustrado que herdam do nada pastas recém forjuscadas por membros plebeus num diretório banhado brutalmente pelo banho do Set GID "s" nos flags de Grupo?',
    options: [
      'Executam binários encarnando a aura soberana de deuses Roots ali dentro',
      'Filhos (arquivos) e netos germinados dentro da cova de paredes manchadas vão sumariamente abdicar das linhagem de seus procriadores puxando pra si e ostentando eternamente com rigor o estandarte e o brasão do estrito grupo atrelado do da Própria Pasta Mãe na testa.',
      'So root loga e caga naquele buraco',
      'Toda a horda que ali deposita, perde o condão e a pasta resiste ao apago forçado em RM.',
    ],
    correct: 1,
    explanation: 'A bruxaria do Bit setGID (cravada com `chmod g+s nomepasta`) é um poço de gravidade colaborativa: Qualquer usuário perambulino que forca a caligrafa de novos arquivos lá no oco não impõe a ele o flag primitivo rústico de seu grupo privado chato! Não! A cria rouba instantânea, imperiosa e passivamente a chancelaria colante cravada do GID oficial da prória pasta mãe abrigada em uníssono de harmonia de partilha de time de desenvolvedores.',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'O chefão ruge: "Desejo feitiçaria duradora! Torna-se vitalício, perpétuo e eterno na pasta /shared, que toda futura meretriz de arquivo ou pasta que lá ainda venha um dia a nascer puxe compulsoriamente pro rabo uma aura e um dote vitalício de direito de ACL `mario:rw` para gozo do Mario!" Que comando sela maldição hereditária em ACL?',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'As encarnações obscuras de A colidindo unísso à C são irrefutáveis',
    ],
    correct: 3,
    explanation: 'A profética letra `d:` (Default) metida antes do bloco enclítico `u:mario..` contamina hereditamente o pântano pai e amarra que no parir de novos grãozinhos alí.. mario nasça lendo-o as entranhas passivamente sem que ninguém nunca mais clame o dev para arrumar a burrice do setfacl toda santa manhã recozinhado ali. A tag `--default` também substituiu e espelha a manobra compacta.',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Caso ext4 seja turrão cego em versões idosas Linux e resmugue "Operação negada" perante choro do teu setfacl limpo ali. Traga na caneta, em que preceito opcional engessado de amarração do Mount de Partição FSTAB reside o feixe basilar do flag pra liberar os poderes mágicos de estutura permissiva das Listas Sujas perante a formatação?',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'Em kernels passados jurássicos, sem explicitar a string curta e óbvia `acl` atirada grosseiramente em meio ao mar amontoado do quadrante de options no fstab (`defaults,acl`), a táboa de formatação era seca e cega a tais artes ocultas POSIX de acessibilidades estendidas do ext3/ext4.',
  },

  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Escudo na trindade! Blindar O Oco transitório temporal das imundices baixadas do "/tmp" se preza obritagório. Adicione amarras de grades FSTAB pra asfixiar a CPU travando-a a não em hipotése alguma se permitir e engatar forçosamente arranques maliciosos de programas em binários scriptados postados ardilosamente por la!',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: 'A couçaca vital `noexec` (No Execute) posta espartanamente no flag option no mount da partição esmaga e cega a CPU em rodar seja la o que for baixado la de executável ou shell scripts, abortando o payload vivo, blindado a área vital inteira com sucesso e castrando crackers. Exterminando-lhes permissão pura da execução (x).',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'O alarme do Zabbix geme "Disko Torrando em 95%!". Puxe da algibeira e martele cirurgicamente nas tripas a lupa basilar simplória rápida que atesta duma só vez unificando tamanhos, gigas devorados e porcentagens de asfixia pra fôlego livre de TODOS caminhos de pastas formatadas engatados lá agora?',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: 'O soberano e magnânimo `df -h` (Disk Free humanized format) arrola majestosamente numa grade colunar legível qual estátistica total oca livre do poço e o quanto pesa de porções alocantes imundas afogando o file-system engatado lá.',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'O Pendrive lixo do chefão do almoxarifado atolou teu fstab /data pra engaste automático! Todavia, no boot de manhã gelada ele esqueceu o lixo fora! Consequência: Horror: Reboot crashado na Cova Emergency Mode Kernel morto da silva pedindo intervenção cega. Que flag milagrosa opcional no FSTAB evitaria tal pânico Kernel perante "HD externo esquecido", pulando ele sorrateiro e suavemente subindo liso os outros serviços no ato de boot?',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: 'O anjo protetor das cordas flácidas `nofail`. Jogue-o esmagado no bloco options. Ele prega pro cão enfurecido do Systemd Mount target ao inicializar: "Caso cego te depares com cabos rompidos buscando esse dev inexistente /dev/sdd ali em fstab, omite choro, abafa sua ira, feche o olho com brandura, perdoe em ignorância e despache a continuidade de Boot pro OS subir sem pestanejar!" . Salvação absoluta pra HDs pendrive transientes!',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'O chifre esmagou! LUKS abriu a caixa! O luksOpen mastigou teu pass-phrase e materializou limpo o /dev/mapper/volume_name escancarado ao léu! Tu olhas aquele bloco bruto virgem. Qual pancada primordial se invoca no terminal p\\ formatá-lo a vera forjando lá e enrraizando sobre este mapeadomento virtual uma gloriosa trindade EXT4 pra finalmente o Sysadmin jogar dados sujos dele?!',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/volume_name',
      'cryptsetup mkfs /dev/mapper/volume_name',
      'luks-mkfs /dev/mapper/volume_name',
    ],
    correct: 1,
    explanation: 'A fogueira da base formotatória eclesial engole única e espartanamente o "atalho lógico da vitrine descritiva perfeitamente transparente" recém destrancando desabrochando após sua chave lá no luks : a invocação esmagadora do utilitário `mkfs.ext4` perante o atalho limpo e aberto no caminho fictício  `/dev/mapper/volume_name` . Esqueções loucas e bizarras no físico adormecido encriptoclado original /sdb ali arrebentariam tragédias rasgando os metadados LUKS jogando sua encriptação pra óbito e abismo perdendo-se os dados preclusos permanentemente!',
  },
]
