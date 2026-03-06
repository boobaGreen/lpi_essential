// RHCSA Quiz — Topic 3: Running System Management (Português)
// 22 MCQ questions

export const rhcsaTopic3QuizzesPT = [
  // ─── Lesson 3.1: Boot and systemd Targets (6 questions) ───
  {
    id: 'q-rhcsa-3-1-001', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Qual "target" do systemd corresponde de forma idêntica ao antigo runlevel 3 (sistema multi-usuário, estritamente texto/CLI sem ambiente gráfico)?',
    options: ['graphical.target', 'multi-user.target', 'rescue.target', 'default.target'],
    correct: 1,
    explanation: 'O multi-user.target representa o obsoleto runlevel 3 (Modo Texto/CLI). Já o graphical.target abraça o antigo runlevel 5 (Interface Gráfica GUI).',
  },
  {
    id: 'q-rhcsa-3-1-002', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Como você altera para valer e permanentemente o alvo (target) de inicialização padrão do sistema operacional?',
    options: [
      'systemctl set-default multi-user.target',
      'systemctl default multi-user.target',
      'echo "multi-user" > /etc/systemd/default',
      'target set multi-user.target',
    ],
    correct: 0,
    explanation: 'O comando superior é `systemctl set-default <alvo>`. Ele modifica o padrão de boot esculpindo (substituindo) o atalho simbólico permanentemente em /etc/systemd/system/default.target.',
  },
  {
    id: 'q-rhcsa-3-1-003', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Durante a tensão do boot, qual parâmetro cirúrgico do kernel você adiciona lá na tela do GRUB visando brutalmente interromper o bootloader para cair numa concha bruta emergencial (RHCSA rescue password reset)?',
    options: ['single', 'rd.break', 'init=/bin/bash', 'emergency'],
    correct: 1,
    explanation: 'O argumento magno `rd.break` estraçalha a continuidade do boot na prematura e embrionária fase do initramfs, bem antes mesmo do /sysroot oficial ser montado. Absoluto para o reset da senha Root no RHEL9.',
  },
  {
    id: 'q-rhcsa-3-1-004', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Após quebrar as travas usando "rd.break" para resetar vitalmente a famigerada senha root no RHEL9 abrigado com SELinux habilitado, que última magia imperativa você joga no terminal de chroot antes da máquina reiniciar?',
    options: [
      'restorecon /sysroot/etc/shadow',
      'touch /.autorelabel',
      'setenforce 0',
      'chcon -t shadow_t /etc/shadow',
    ],
    correct: 1,
    explanation: 'Como o filesystem estava com os contadores selinux anestesiados, escrever novo hash de senha mancha o shadow. O `touch /.autorelabel` grifa pro kernel no re-boot que ele terá a longa pena de reetiquetar globalmente todo disco físico corrigindo essa lacuna.',
  },
  {
    id: 'q-rhcsa-3-1-005', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Da cadeira acolchoada e num SO perfeitamente rodando, que comando teletransporta e desliga agressivamente quase todos os daemons e derruba a máquina despencando ela em puro modo de resgate monousuário (rescue target) livre de reboots?',
    options: [
      'systemctl isolate rescue.target',
      'systemctl switch rescue.target',
      'init 1',
      'telinit rescue',
    ],
    correct: 0,
    explanation: 'O punitivo `systemctl isolate <alvo>` despenca a barreira e esmaga o estado do sistema transmutando na marra o alvo escolhido e matando todos os demais serviços redundantes e inúteis para o isolamento em andamento.',
  },
  {
    id: 'q-rhcsa-3-1-006', lessonId: 'rhcsa-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Como consultar a bola de cristal para exibir o nome do target padrão enraizado atual?',
    options: [
      'systemctl get-default',
      'systemctl show-default',
      'cat /etc/systemd/default.target',
      'runlevel',
    ],
    correct: 0,
    explanation: 'O manso `systemctl get-default` revela passivamente e elegantemente em tela qual link o default.target se espelha.',
  },

  // ─── Lesson 3.2: Process Management (6 questions) ───
  {
    id: 'q-rhcsa-3-2-001', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Se as palavras pedirem tréguas e falharem, que brutal força natural o "kill -9 <PID>" desencadeia fisicamente no kernel?',
    options: ['SIGTERM (15) — término carinhoso de shutdown', 'SIGKILL (9) — execução totalitária imediata na nuca', 'SIGHUP (1) — reler adocicadamente a config', 'SIGSTOP (19) — congelamento obreiro suspenso'],
    correct: 1,
    explanation: 'O impiedoso sinal SIGKILL (9) estraçalha a vida do processo. Nenhuma instrução do código do app preve isto. Ele sequer dá tchau, morre instantaneamente pelo carrasco kernel.',
  },
  {
    id: 'q-rhcsa-3-2-002', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'A aplicação com PID 1234 já está girando morosa em vida. Comando divino para alavancar a prioridade deste processo em voo cravando o índice de "nice" em -5 (requer poderes supremos)?',
    options: ['nice -5 1234', 'renice -5 -p 1234', 'renice -n -5 1234', 'nice --pid 1234 -5'],
    correct: 2,
    explanation: 'Enquanto o "nice" apenas embala processos que SEQUER NASCERAM ainda, o utilitário médico `renice -n <valor> -p <PID>` opera cirurgicamente e transmuta em voo a gravidade e prioridade daquele ser que já habita o escalonador Linux.',
  },
  {
    id: 'q-rhcsa-3-2-003', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Na corda bamba dos recursos CPU, qual limite de variação paramétrica do NICENESS acusa estar gozando de altíssima "Prios Máxima Extrema VIP"?',
    options: ['100 (valor numérico alto=prio grande)', '-20 (valor profundamente negativo = extrema arrogância / alta prioridade VIP)', '+19 (teto máximo numérico)', '0 (Neutro default)'],
    correct: 1,
    explanation: 'Paradoxo de Unix: Valores esmagados negativos representam fome de CPU, logo `-20` suga todo escalonador como se o rei da máquina fosse (só root consegue forjar valores negativos). Já +19 o estagna dócil como escravo do fundão implorando recursos vagos.',
  },
  {
    id: 'q-rhcsa-3-2-004', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'O chefão pede a lista exaustiva varrendo TODOS e quaisquer mortais usuários com TODAS extensas métricas processuais no terminal. Traz à tona o papiro do comando:',
    options: ['ps', 'ps -e', 'ps aux', 'ps -x'],
    correct: 2,
    explanation: 'Diga aos ventos: "ps aux" — Onde `a`=todos mortais usuários, `u`=formatação voltada humana do tráfego PID/USER/CPU%, `x`=puxa sem piedade processos das catacumbas sem vínculos TTY nenhum.',
  },
  {
    id: 'q-rhcsa-3-2-005', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Tua laia de Apache (httpd) entupiu. Dispare de bote pronto um sinal de morte leve SIGTERM alvejando exclusivamente na palavra por texto do app "httpd" sem precisar olhar antes o maldito númerozinho de PID dele.',
    options: ['kill httpd', 'killall httpd', 'kill -name httpd', 'pkill -TERM httpd'],
    correct: 1,
    explanation: 'O matador em massa `killall nome_do_processo` espalha a praga do SIGTERM nativo (15) esmagando todos e varrendo as entidades que ostentam tal nominação de execução de peito aberto.',
  },
  {
    id: 'q-rhcsa-3-2-006', lessonId: 'rhcsa-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Mágica de teclado shell. Você apertou CTRL+Z estapeando um job para o esquecimento suspensivo (job número %2). Qual o feitiço de necromancia trará a tarefa revigorada arrastada e berrando novamente em primeiro plano TTY terminal seu?',
    options: ['bg %2', 'fg %2', 'resume %2', 'jobs -f %2'],
    correct: 1,
    explanation: 'O `fg %2` (foreground job 2) puxa violentamente das sombras processuais das gavetas pro seu plano da tela quente de teclado (STDIN). O `bg %` reanimaria, porém sem se atrelar ao teclado rodando escondido fadigando.',
  },

  // ─── Lesson 3.3: systemctl Services (5 questions) ───
  {
    id: 'q-rhcsa-3-3-001', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Chega de ditar comandos espátulas em dobro. Amarre de uma vez o SSH pra viver auto-startado na eternidade nos reboots MAS acendendo desde já ele vivo na sua cara (um tiro único poderoso).',
    options: [
      'systemctl enable sshd; systemctl start sshd',
      'systemctl enable --now sshd',
      'systemctl start --boot sshd',
      'service sshd enable start',
    ],
    correct: 1,
    explanation: 'O argumento bombardeiro `--now` chancelado ao termo de enraizamento systemctl `enable` conjura e funde dois verbos: Habilite auto-reboot e Ligue essa fornalha vivamente AGORA em uníssono.',
  },
  {
    id: 'q-rhcsa-3-3-002', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Destrinche aos sábios: Em quê infernos difere esbravejar um `systemctl stop` contrastante a urrar na pedreira por um `systemctl disable` num coitado serviço Daemon?',
    options: [
      'Zero milímetros de distanciamento, apenas sintáxes análogas',
      'O "stop" estingue o fogo vital estanque no instante que roda; Contudo "disable" arranca ele formalmente dos registros do SystemD o prevenindo de queimar num futuro amanhecer elétrico de re-boot',
      '"Disable" apaga sumariamente agora a fogo cruzado e "stop" derrete as premissas unit de diretório',
      'O stop exclui fisicamente o pacote binário',
    ],
    correct: 1,
    explanation: 'Stop chuta ele da memória AGORA. Todavia se as raízes do Enable existirem o boot amanhã acenderá sozinho devolta. Disable APENAS quebra a promessa futura, varrendo a dependecia symlink dele arrancar solote, mas podendo deixá-lo vivo se já rodava.',
  },
  {
    id: 'q-rhcsa-3-3-003', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Segurança extrema: Qual cadeado você arruína num serviço impobido a rodar, proibindo qualquer um mesmo por engano de ligá-lo manualmente no sistema?',
    options: ['systemctl disable', 'systemctl stop', 'systemctl mask', 'systemctl block'],
    correct: 2,
    explanation: 'Ao invocar o esmagador `systemctl mask meudaemon`, os alicerces cimentam o unit symbol point link d\'ele cegamente apontando rumo ao sumidouro do lixo nuclear `/dev/null`. Torna-se estático inválido inapelável até um digno e abençoado "unmask".',
  },
  {
    id: 'q-rhcsa-3-3-004', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Diga perante o grande systemd para lhe apresentar o raio-X detalhado, status corpóreo, se tá ativado autostart, e cuspida das últimas 10 logagens do paciente daemon "httpd".',
    options: ['systemctl info httpd', 'systemctl status httpd', 'systemctl check httpd', 'service httpd status'],
    correct: 1,
    explanation: 'É de praxe rotineira Sysadmin. Um solene e vasto `systemctl status httpd` que entrega colorações verde para ativos, arvoressa processo-filhos e arremessa de quebra traços do syslog journal atados ele.',
  },
  {
    id: 'q-rhcsa-3-3-005', lessonId: 'rhcsa-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Você meteu as mãos escandalosamente por cat/vi e rasgurou o arquivo interno .service de algum daemon sagrado. O Daemon despirocou não enxergando nada novo. Como reavivar os miolos de escópia do chefão arquiteto SystemD?',
    options: [
      'systemctl restart service',
      'systemctl daemon-reload',
      'systemctl reload-config',
      'systemd --reload',
    ],
    correct: 1,
    explanation: 'Qualquer rasura braçal nas folhas entalhadas sob /etc/systemd/... obrigam de forçosa forma perant e o mestre com a pancada surda do famigerado `systemctl daemon-reload` senão, sua ignorância continuará em cache persistindo teias em falsas métricas ou ignorando chaves cruciais da novidade.',
  },

  // ─── Lesson 3.4: Logging and Scheduling (5 questions) ───
  {
    id: 'q-rhcsa-3-4-001', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Bancando de sentinela da matrix: Comande para que todos os murmúrios das entranhas do Journal systemD espumem e decorem tua vista perante novas linhas caóticas textuais ao vivo "live / real time".',
    options: ['journalctl -f', 'journalctl --live', 'tail /var/log/journal', 'syslog -f'],
    correct: 0,
    explanation: 'Pela adereção sublime do `-f` (sigla crassa pra `follow` / Seguir o rastro da cauda incansavelmente), o magestoso journalctl fica escuta cativa em tela esparramando sangrias de logs quentíssimos ao nascer.',
  },
  {
    id: 'q-rhcsa-3-4-002', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Mergulhe no mar turvo dos relatórios mastodônticos do journalctl, e filtre minuciosamente escavando e trazendo tão e APENAS os resmungos advindos estritamente sob resguardo da chave unita do "sshd".',
    options: [
      'journalctl sshd',
      'journalctl -u sshd',
      'journalctl --service sshd',
      'journalctl /usr/sbin/sshd',
    ],
    correct: 1,
    explanation: 'A crivagem com a pinça cirúrgica `-u` (Unit Filter) força journalctl a extrair relatórios cirurgicamente esmagados das entranhas binárias que pertencem estritamente da fatia e coroa do daemon unit requisitado, isolando todo lixo avulso indesejato exótico.',
  },
  {
    id: 'q-rhcsa-3-4-003', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Memória abalada: Em RHEL se a luz falta os logs do Journal evapóram na neblina volátil por estar em RAM amnésica. Qual folha pétrea mística deve o sysadmin forçar talhando a regalia "Storage=persistent"?',
    options: ['/etc/rsyslog.conf', '/etc/systemd/journald.conf', '/var/log/journal/', '/etc/journal.conf'],
    correct: 1,
    explanation: 'Mausoléu de arquivos `journald.conf` sob escopo `/etc/systemd/`. Abrí-lo e tirar cerceamentos de hashtags impondo Storage persistent ou Auto assegura de forjar pastas e despejar o peso mortório a disco imortal `/var/log/journal/`.',
  },
  {
    id: 'q-rhcsa-3-4-004', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Sua tarefa é simples e escrupulosamente contínua automação temporal. Ferramental padrão para descortinar num formoso editor shell os seus agendamos de usuário logado (Aba de cronograma CRON)?',
    options: [
      'sudo vi /etc/cron.d/myjob',
      'crontab -e',
      'vi /var/spool/cron/username',
      'systemctl edit cron',
    ],
    correct: 1,
    explanation: 'Malandros abrem paths raiz pra furto, Sysadmin puros conjuram `crontab -e` (edit/edição). Esse comando evoca polidamente o editor perante os rolos secretos de seu próprio nome atrelado no submundo cronológico, selados na devida sintaxe de calendário rigoroso.',
  },
  {
    id: 'q-rhcsa-3-4-005', lessonId: 'rhcsa-3-4', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Ataque programado (Cron Job Format): Das opções abaixo escuras de sintaxe temporal astrológica perante estrelares pontilhados, identifice e revele qual destas encarna invocar e acordar o dragão /script.sh inflexivelmente a exatas segundas feiras, às pesadelessas madrugadas nas cravadas de ponto "3:30 AM" cegas?!',
    options: [
      '30 3 * * 1 /script.sh',
      '3 30 1 * * /script.sh',
      '30 3 1 * * /script.sh',
      '* * * * 1 /script.sh',
    ],
    correct: 0,
    explanation: 'Minuto: 30, Hora militar 24hr: 3(am), Dia mês: * (todos), Mês calendário: * (todo bendito mes), Dia semaneiro: 1(Segunda feira/Monday). É a anatomia impenetrável do deísmo e culto CRON clássico do linux eterno e brutal de sempre!',
  },
]
