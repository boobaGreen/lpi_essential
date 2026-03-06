// RHCSA Quiz — Topic 4: Local Storage — LVM (Português)
// 20 MCQ questions

export const rhcsaTopic4QuizzesPT = [
  // ─── Lesson 4.1: GPT Partitions (5 questions) ───
  {
    id: 'q-rhcsa-4-1-001', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual utilitário mágico exibe os dispositivos de bloco (discos) instalados e plota maravilhosamente a hierarquia esquelética (árvore) de como as partições pendem debaixo de cada disco?',
    options: ['fdisk -l', 'lsblk', 'blkid', 'df -h'],
    correct: 1,
    explanation: 'O soberano `lsblk` (list block devices) monta uma frondosa árvore amigável listando o tronco (Disco sda), galhos (partições sda1 sda2), e frutos pendurados (montagens LVM e caminhos de Mount points) mastigado e perfeitinho.',
  },
  {
    id: 'q-rhcsa-4-1-002', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Qual é o bisturi cirúrgico oficialmente chancelado e glorificado pela RHEL9 para você se arriscar criar as vitais tabelas novas de partição do tipo GPT (Guid Partition Table)?',
    options: ['fdisk', 'parted', 'mkfs', 'gdisk'],
    correct: 1,
    explanation: 'Embora o dinossauro fdisk tenha criado dentes e suporte GPT tardiamente, The RedHat Way recomenda brutal e ostensivamente o GNU `parted` como o cinzel titular homologado para entalhar e gerenciar fatiamentos nativos do tipo GPT.',
  },
  {
    id: 'q-rhcsa-4-1-003', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Eis o sintagma do `parted`. Qual fómula executa o cinzelamento violento na forja do terminal criando uma nova partição primária ocupando o miolo cravado em 1GiB até o ponto focal de 2GiB sobre o disco `/dev/sdb`?',
    options: [
      'parted /dev/sdb mkpart primary ext4 1GiB 2GiB',
      'parted /dev/sdb add 1G 2G',
      'parted /dev/sdb create 1GiB 2GiB',
      'parted /dev/sdb partition 1-2GiB',
    ],
    correct: 0,
    explanation: 'Sintaxe pesada do Parted: Primeiro a ferramenta e o disco afetado `parted /dev/sdb`. Então o ritual criador: `mkpart <tipo: primary> <rotulo de FS: ext4> <ComeçoAbsolutoMbyte> <FimAbsolutoMByte>`. Obs: O FS (ext4 ali) é mero rótulo inerte e fútil, quem de fato formata a lama é o utilitário mkfs depois.',
  },
  {
    id: 'q-rhcsa-4-1-004', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Você periga corromper o /etc/fstab se digitar errado. Logo, exija agora do terminal qual o UUID magnético e a estampa descritiva do Sistema de Arquivos (ext4/xfs) formam e jazem em certas partições?',
    options: ['lsblk -f', 'blkid', 'df -T', 'Tanto A quanto B realizam a mágica'],
    correct: 3,
    explanation: 'A luneta `blkid` lança a verdade em formato duro e bruto (nome da partição de rodo no UUID e TYPE="xfs"). E o pomposo `lsblk -f (Filesystem)` faz o mesmo jogando a tabela em rastro charmoso pro humano analisar.',
  },
  {
    id: 'q-rhcsa-4-1-005', lessonId: 'rhcsa-4-1', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Bateu martelo! Você retalhou com `parted` um fatiamento denso em /dev/sdb... Mas! O lerdão Kernel Linux não desceu pro subnível nem refrescou suas entranhas! Que grito estridente atualiza imperiosamente a tabela do kernel forçando-o a reler o mapa particionário sem exigir o sacrifício mortal de um reboot?',
    options: ['partprobe /dev/sdb', 'udevadm trigger', 'kpartx -a /dev/sdb', 'modprobe partition'],
    correct: 0,
    explanation: 'O pontapé na canela salvador `partprobe <disco>` informa violentamente e cutuca as tripas em cash do Kernel de que o terreno do /sdb mudou gravemente, remapeando os descritores das novas fatias /dev/sdb1 a quente na hora.',
  },

  // ─── Lesson 4.2: LVM — PV and VG (5 questions) ───
  {
    id: 'q-rhcsa-4-2-001', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Qual é o cânone da trindade inviolável e da cronologia matemática de maturação abstrata na criação de discos de ponta, partindo do "Tijolo inicial cru" até a maleável "Esponja fina formatada de Volume Lógico" no LVM?',
    options: [
      'lvcreate → vgcreate → pvcreate',
      'pvcreate → vgcreate → lvcreate',
      'vgcreate → pvcreate → lvcreate',
      'mkfs → pvcreate → lvcreate',
    ],
    correct: 1,
    explanation: 'Ordem cosmológica LVM: Primeiro purificas o Tijolo hostil de disco cru no banho santo do (PV) Physical Volume (`pvcreate`). Pós, tu derretes as escórias agrupando-as num mega oceano contínuo de pool aglutinado o (VG) Volume Group (`vgcreate`). Da banheira cheia, estilizas o formato enxuto finamente o (LV) Logical Volume puxando o quanto queres da massa de modelar LVM (`lvcreate`).',
  },
  {
    id: 'q-rhcsa-4-2-002', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Básico brutal: Acabas de espetar /dev/sdb1 na baia. Com que carimbo você batiza (formata e instila a alma de metadados LVM) nessa crua partição recém-assada, a introduzindo perante as hostes como um legítimo LVM Physical Volume (PV)?',
    options: ['vgcreate /dev/sdb1', 'pvcreate /dev/sdb1', 'lvm init /dev/sdb1', 'lvminit /dev/sdb1'],
    correct: 1,
    explanation: 'Sob regozijo em sua tela, `pvcreate` marca a farta massa disforme da partição como digna e engida a abrigar alicerce (fundação metálica) de volume físico.',
  },
  {
    id: 'q-rhcsa-4-2-003', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Como aglutinar misticamente num grande baldão batizado de "datavg" (Volume Group) a soma volumosa conjungada de dois humildes e rudes PVs soltos: /dev/sdb1 e /dev/sdc1 ?',
    options: [
      'vgcreate datavg /dev/sdb1 /dev/sdc1',
      'lvmcreate -g datavg /dev/sdb1 /dev/sdc1',
      'pvcreate datavg /dev/sdb1 /dev/sdc1',
      'vg new datavg /dev/sdb1,/dev/sdc1',
    ],
    correct: 0,
    explanation: 'A caldeirada é `vgcreate <Batismo_do_VG> <Ingrediente1> <Ingrediente2> ...`. Isso liquidifica (engloba) a união dos blocos de dois modestos HDs avulsos fundindo a fumaça resultante e abrigados majestosamente por debaixo do formosório grande escopo e do balde nomeado datavg.',
  },
  {
    id: 'q-rhcsa-4-2-004', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'A banheira VG "datavg" tá rasamente entupida! Você espetou a pressa um espetacular e obeso disco novo /dev/sdd1 e deseja expandir o fundo mar a ele. O que dizes?',
    options: [
      'vgadd datavg /dev/sdd1',
      'vgextend datavg /dev/sdd1',
      'pvextend datavg /dev/sdd1',
      'lvm add datavg /dev/sdd1',
    ],
    correct: 1,
    explanation: 'Com `vgextend <NomeGrupoVolumePiscinaMãe> <Pedrone_Gordo_Disco_Físico>`, amplias passivamente seu reservatório principal para ele poder acatar gotejamentos das expansões de lógicas filhas a posteriori.',
  },
  {
    id: 'q-rhcsa-4-2-005', lessonId: 'rhcsa-4-2', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Como arrancar pela goela sumariamente do sistema a ficha técnica dos Grupos de Volume (VG), exigindo na exaustão relatórios que me abram qual a metragem em Giga Total, os Pe(Physical Extends) vazios livres vagando e de que malditos HDs originais eles compoem essa salada mista?',
    options: ['pvdisplay', 'vgdisplay', 'lvdisplay', 'lsblk --vg'],
    correct: 1,
    explanation: 'A majestosa exibição do `vgdisplay` jorra profusamente linhas vitais da volumetria, de metadados como a contabilidade exata de quantos Physical Extents sobram no balde (Free PE) pra se esculpir LVs, assim como o nome das crias geradas e as matrizes que sustentam as pernas de cada balde volumêtrico.',
  },

  // ─── Lesson 4.3: LVM — LVs and Expansion (5 questions) ───
  {
    id: 'q-rhcsa-4-3-001', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Sua massa maleável agora grita na forma do enorme balde (VG) "datavg". Agora, esculpa finamente arrastando pra o lado uma lasca isolada flexível em formato puro de "Volume Lógico (LV)", rotulando-o pomposamente de "datalv" e reservando extamente 2GiB pra ele desta argila mãe?',
    options: [
      'lvcreate -L 2G -n datalv datavg',
      'lvcreate -s 2G datavg datalv',
      'vgcreate -L 2G -n datalv datavg',
      'lvcreate 2G datavg/datalv',
    ],
    correct: 0,
    explanation: 'O supremo `lvcreate` esculpe milagres finitos da piscina infinita. Use o maiúsculo `-L` pra engolir unidades imperiais absolutas GigaByte/MegaByte (-L 2G), o `-n` (Name) chancelando uma etiqueta/placa de nome (datalv) e fechando com maestria o recipiente de balde mãe provedora e nutriz de toda essa terra (datavg).',
  },
  {
    id: 'q-rhcsa-4-3-002', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Chegou o aperto, o LV "datalv" entupiu a beiça do talo. Tais LV ostenta o vetusto sistema de formatação ext4. Tais te incumbindo de estica-lo em abstenção volumosa de +1GiB, como fazer essa proeza infland-o na base abstrata LV concomitantemente a elastecidade das malhas do EXT4 do FS que lá pousa numa pancada (um round) só?',
    options: [
      'lvextend -L +1G /dev/datavg/datalv; resize2fs /dev/datavg/datalv',
      'lvextend -L +1G -r /dev/datavg/datalv',
      'lvresize -L +1G /dev/datavg/datalv',
      'Tanto A pelas rotas paralelas estilhaçadas, assecurada o brilhantismo atômico do parâmero no unissonâmo na alternativa B',
    ],
    correct: 3,
    explanation: 'Você pode penar brutalmente digitando o A. Fervilhando de elastecer a abstração (lvextend) e prosseguir engordando o grid físico ext4 com `resize2fs`. Poréeeem... Na alternativa mágica (B) o fútil argumento enxuto e microscópico `-r` (resize-file-system) dentro já do comando nativo lvextend acopla, aciona e estira milimetricamente seu grid simultaneamente a inflassão LVM num só relampejo fatal mitigando o trabalho em dobro.',
  },
  {
    id: 'q-rhcsa-4-3-003', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'ATENÇÃO REDOBRADA. No cenário do milagre anterior tu inflasse a camada LV LVM majestosamente com `lvextend`. Mas... Suponha infelizmnete que tua FS que veste o corpo ali é o rígido maluco (XFS). Se esquecesse o utilitário milagroso (-r), qual o canhão espartano de artilharia separada exigido unicamente pro XFS a fim de expandi-lo em tempo real forçando o grid e as pastas a beber o novo espaço da fenda lvm?',
    options: ['resize2fs /dev/vg/lv', 'xfs_growfs /mount/point', 'fsck.xfs /dev/vg/lv', 'xfs_repair -L /dev/vg/lv'],
    correct: 1,
    explanation: 'Morte sumária de prova no RHCSA se vacilar nisso. XFS amaldiçoa e recusa terminantemente e amargamente o obsoleto e antiquado utilítico e formatador resize2fs. O demônio exigente demanda cirurgicamente o comando de elastecimento vivo e nativo da cúpola xfs (`xfs_growfs`) E QUE EXIGE IMPERIALMENTE engolir em suas garras unicamente O NOME DO DIRETÓRIO DE MONTÁGEM DO PONTO FÍSICO (Ex: `xfs_growfs /var/www`) e não, em hipótese da desgraça absoluta alguma a invocação abstracionada do diretórão do disco (/dev/mapper../)! Atento!',
  },
  {
    id: 'q-rhcsa-4-3-004', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Esculpido perfeitamento no gesso grosso, o Lógico "datalv" dentro do recipiente de barro maior mãe do vg (Volume group base) o "datavg". Diga-nos fisicamente pela ótica gélida do dev aonde o pino metálico e escravo desse volume recai sob as hierárquicas fileiras da root do kernel para uso e formatação (/dev/...)?',
    options: ['/dev/lvm/datavg/datalv', '/dev/datavg/datalv', '/dev/mapper/datalv', '/lvm/datavg/datalv'],
    correct: 1,
    explanation: 'No subnicho do /dev/ LVM ajeita suas coisas alocando as gavetinhas com os Nomes de Suas Maes VGs. Por conseguinte, ele joga o elo amigável sob a prateleira /dev/<NOME_DA_MÃE_VG>/<NOME_DA_CRIA_LF>. Entáo: `/dev/datavg/datalv` ! Outra formatação verídica tolerada seria seu link esquisito e feio na catacumba `/dev/mapper/<NOMEVG>-<NOMELV>`.',
  },
  {
    id: 'q-rhcsa-4-3-005', lessonId: 'rhcsa-4-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Querias bater os olhos sem frescuras numa relatoria simplória, resumindo numa parca miéira de dados vitais o desfiladeiro maciço e unificado de TODOS Seus benditos e profusos Volumes Lógicos da caixa?',
    options: ['vgdisplay -v', 'lvdisplay', 'lvs', 'A junção bífida das premissas B e a abreviação sucinta ríspida da sua irmã C.'],
    correct: 3,
    explanation: 'Se anseais detalhes monoliticamente dissecados engoles de rodo o `lvdisplay`. Contudo a elegância, a perspicácia espartana concisa e pragmática do minimalístico `lvs` enfileirará suas fileiras num painel Excel-Like de nomes, VG de base do pai, GigaByte total faturado... um bálsamo as vistas!',
  },

  // ─── Lesson 4.4: Mount, fstab and Swap (5 questions) ───
  {
    id: 'q-rhcsa-4-4-001', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Você é um esteta da arte Sysadmin. A tabuleta cravada nas costas do `fstab` clama por referências robustas. Explique por que tu és punido socialmente se montar pastas usando a designação cega do Disco (/dev/sda1)? Porque forja-se os grilhões das amarrações valendo-se eternamente da estigma sagrado e unívoco das tatuagens em formato UUID?',
    options: [
      'O UUID acorta a digitação do monstro',
      'Despertar o monstro usando (/dev/sdb2) te cega na instabilidade, tal letrismo discal muda perigosamente num revés caótico ao despruigar controladoras ou reiniciar servidores em baías, logo tatuagens de UUID são imutáveis permanentemente unindo as pontas blindadamente perante o inferno do kernel.',
      'O Rhel9 só aceita UUID, o outro cai na ilegalidade da compilação',
      'Alenta magicamente as entranhas na melhora do tempo de resposta da CPU em 5%.',
    ],
    correct: 1,
    explanation: 'Discos rodando bailam os seus slots ao adentrar baías quentes, hoje /sdb amanhã ao ligar vira um deturpado /sdc colidindo montagens cruciais rasgando ao meior servidores e corrompendo sistemas ao ligar! Para blindar tal abominação e atar firme o casamento das montagens impodera-se sempre do selo maciço uníco geracional UUID do metadado intrínseco. Imortal, invariável e fixo!',
  },
  {
    id: 'q-rhcsa-4-4-002', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Tu cavas a unha novas diretrizes lábios sujos e empoeirados do tabernáculo sagrado `/etc/fstab`. O teu cu refrata num arrepio o medo eclesial dO SERVIDOR NÃO SUBIR NA BOOTAGEM ACUSANDO ENGENHARIA DE MONTAGEM CORROMPIDA NOS TEUS LOGS GRAVADOS LÁ. Como simulas o choque e abalo sem pestanejar e sem cometer o sacripantas erro profano de ter de reiniciar para homologar suas linhas escuras recém escritas?',
    options: ['mount -a', 'fstab --test', 'systemctl fsck', 'mountall'],
    correct: 0,
    explanation: 'A benção `mount -a` (Mount All/All fstabs on config!) força e puxa na canela no ato vivo O KERNEL TENTAR BRUTAMENTE MONTAR TUDOO AQUILO QUE CÓPIA OS CÂNONES do FSTAB (tirando ignorando as q já rodavam ok). Se ele calar, teu FSSTAB recem editado está homologado, ungido e seguro de subir incólume na próxima bootação gélida. Retorno sujo/letras rubras? Tens um erro bizarro nas regras que queixou no teste a quente. Erro que teria ferrado a máquina brutalmente ao iniciar caso desligasse ela cego!',
  },
  {
    id: 'q-rhcsa-4-4-003', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Mostre as tripas de tua habilidade sintática enraigada. Que papiro dita de pronto sem pestanejos e corretamente a engenhosa injeção rústica dum arquiteto que fará fundir e amarrar indômitamente e fixo ao boot a alvenária escrava LVM localizada em "/dev/mapper/datavg-datalv", colando-a ferreamente e atada pra verter suco na pasta física e montículo "/data", de pele vestida num filesystem (ext4) sob égida de opções de vanilla nativa basais defauts sem lixo escaneatário extra?',
    options: [
      '/dev/mapper/datavg-datalv /data ext4 defaults 0 0',
      '/data /dev/mapper/datavg-datalv ext4 defaults 0 0',
      '/dev/mapper/datavg-datalv /data ext4 defaults 1 1',
      'UUID=xxx /data ext4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Regras da casa de fundição Fstab: 1-<CaminhoDevOuUUID> 2-<PontoNaCarneDaPastaLocalDaMontagem> 3-<FilhoDaPutaDoSeuFormatoDeFS> 4-<RegaliasAduaneiras(Defaults)> 5-<Backapeável_dump> 6-<Numberação_OrdemVarredura_FSCK>. A cauda final e fútil repousada no `0`  `0` ignora backups de dumps, nem escanerará a trilha (fsck) pesadamente no pre-ambiente. Matadoro!',
  },
  {
    id: 'q-rhcsa-4-4-004', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'A memória viva agoniza asfixiada, RAM derretendo. Desvende quais encantamentos na ordem cronológica de batizagem correta você lança na fatia vazia renegada e sombria `/dev/sdb2`, transmutando-a perante o juízo para um reservatório mudo e denso para queimar e receber sobras abissais de blocos inativos sujas da ram principal (SWAP), ativando o bife esmagando o escarcéu e trazendo alívio instantêneo respirando os aflições OOM Killers de Kernel em tempo imedíato de execução de stress?!',
    options: [
      'mkfs.swap /dev/sdb2; swapon /dev/sdb2',
      'mkswap /dev/sdb2; swapon /dev/sdb2',
      'format -t swap /dev/sdb2; mount -t swap /dev/sdb2',
      'swapinit /dev/sdb2; swapon -a',
    ],
    correct: 1,
    explanation: 'Magia de escape térmico RAM e sangria: O místico `mkswap /caminho` rasga nas engrenagens das trincheiras o carimbo da alma de swap no disco duro da fatiada e prepara seu subsolo gélido. Feito o leito abissal, O ressoante clamor `swapon /caminho` aciona como uma alavanca atreladora que escancara e amarra na veia do servidor aquele pântano sujo pra dragar e absorver detritos das memorias virtuais do OS em fogueira no afã daquele presente micro-segundo.',
  },
  {
    id: 'q-rhcsa-4-4-005', lessonId: 'rhcsa-4-4', topicId: 4, difficulty: 'easy', type: 'mcq',
    question: 'Você desconfia de uma fatia mal injetada de swap falsa ou nula em teu setup. Dispare pro ar pra visualizar espalhafalto e provar de cabo a rabo na retina se tem e de que tamanho grotesco pulula o sumidouro infernal ativo em swap na contabilidade da CPU.',
    options: ['swapon --show', 'cat /proc/swap', 'free -h', 'O banquete formidável reside igualmente dissecado e exposto sobre as pratas abarcadas integralmente de todos as premissas e sentenças vertidas pelas três esferas citatadas magistralmente alí e enrredadas uníssanamente neste leque opcional da divina alternativa universal onipontedade.'],
    correct: 3,
    explanation: 'Ao conjurar livres `free -h` te cospe métricas amigáveis RAM/Swap. O ruidoso `swapon --show` engasga detalhes do rabo e nome exato gélido do drive físico encarregado perante tamanho e o feio `cat /proc/swap` cospe lixo e matriz direta espelhando do subsolo do Kernel as prioridades que giram a roda ali atroladamente.',
  },
]
