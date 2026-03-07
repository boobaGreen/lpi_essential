// LPIC-1 102 Quiz Pool — Portuguese — Topic 110 (Segurança)

export const lpic1_102_topic6Quizzes_pt = [
  // ─── 110.1 Realizar tarefas de administração de segurança (7 questões) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual comando permite encontrar todos os arquivos no sistema que têm o bit SUID definido ?",
    options: [
      'ls -lR | grep suid',
      'find / -perm /4000',
      'check-suid /',
      'locate --perm suid'
    ],
    correct: 1,
    explanation: "O find com -perm /4000 (ou -4000) pesquisa arquivos com o bit SUID ativado."
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual comando é altamente recomendado para editar o arquivo /etc/sudoers para evitar erros de sintaxe ?",
    options: [
      'nano /etc/sudoers',
      'visudo',
      'sudoedit',
      'vi /etc/sudoers'
    ],
    correct: 1,
    explanation: "O visudo realiza uma verificação de sintaxe antes de salvar, evitando erros que poderiam bloquear o acesso ao sudo."
  },
  {
    id: 'q-lpic1-102-6-003', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Qual comando exibe uma lista dos últimos usuários logados e seus horários ?",
    options: ['who', 'last', 'w', 'history'],
    correct: 1,
    explanation: "O comando `last` pesquisa no arquivo /var/log/wtmp para mostrar o histórico de login do usuário.",
  },
  {
    id: 'q-lpic1-102-6-004', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Como você concede privilégios administrativos a um usuário no arquivo /etc/sudoers usando um nome de grupo ?",
    options: ['ADMIN ALL=(ALL) ALL', '%admin ALL=(ALL) ALL', 'group admin: ALL', '@admin ALL=(ALL) ALL'],
    correct: 1,
    explanation: "O prefixo `%` no arquivo sudoers indica que o nome a seguir é um grupo do sistema.",
  },
  {
    id: 'q-lpic1-102-6-005', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Qual comando é usado para listar todos os arquivos abertos e os processos que os abriram, frequentemente usado durante auditorias de segurança ?",
    options: ['lsopen', 'fileshow', 'lsof', 'procview'],
    correct: 2,
    explanation: "O `lsof` (List Open Files) é uma ferramenta essencial para verificar qual processo está acessando arquivos ou sockets específicos.",
  },
  {
    id: 'q-lpic1-102-6-006', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual utilitário é used para restringir o número máximo de processos abertos por um usuário no shell atual ?",
    options: [
      'limit',
      'ulimit',
      'sysctl',
      'quota'
    ],
    correct: 1,
    explanation: "O ulimit (user limit) permite definir limites de recursos para o shell e seus processos filhos."
  },
  {
    id: 'q-lpic1-102-6-007', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Em qual arquivo você pode definir limites de recursos persistentes por usuário, como tamanho máximo de arquivo ou contagem de logins ?",
    options: ['/etc/limits', '/etc/security/limits.conf', '/etc/profile', '/etc/sysctl.conf'],
    correct: 1,
    explanation: "O /etc/security/limits.conf é usado pelo módulo pam_limits para aplicar recursos do sistema.",
  },

  // ─── 110.2 Configurar a segurança do host (6 questões) ───
  {
    id: 'q-lpic1-102-6-008', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Qual é o efeito do 'Sticky Bit' configurado em um diretório como /tmp ?",
    options: [
      "Torna os arquivos do diretório imutáveis",
      "Permite apenas que o proprietário do arquivo (ou root) exclua ou renomeie o arquivo",
      "Criptografa automaticamente todos os arquivos criados dentro dele",
      "Garante que o diretório sempre permaneça na RAM (memória)"
    ],
    correct: 1,
    explanation: "O Sticky Bit em diretórios com permissão de escrita global garante que os usuários não excluam os arquivos uns dos outros."
  },
  {
    id: 'q-lpic1-102-6-009', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Qual arquivo é usado para negar explicitamente o acesso a serviços protegidos pelo TCP Wrappers ?",
    options: [
      '/etc/deny.hosts',
      '/etc/hosts.deny',
      '/etc/network.deny',
      '/etc/firewall.deny'
    ],
    correct: 1,
    explanation: "O TCP Wrappers usa o /etc/hosts.allow e o /etc/hosts.deny para controle de acesso."
  },
  {
    id: 'q-lpic1-102-6-010', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual comando identifica quais portas de rede estão atualmente abertas e escutando em seu servidor ?",
    options: ['nmap localhost', 'ss -tuln', 'netstat -an', 'Todas as anteriores'],
    correct: 3,
    explanation: "`nmap`, `ss` e `netstat` podem ser usados para auditar serviços de rede em escuta.",
  },
  {
    id: 'q-lpic1-102-6-011', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Qual utilitário do GnuPG é usado para criptografar um arquivo simetricamente (por senha) ?",
    options: [
      'gpg --gen-key',
      'gpg -c arquivo',
      'gpg --encrypt arquivo',
      'gpg --sign arquivo'
    ],
    correct: 1,
    explanation: "A opção -c (symmetric) criptografa o arquivo solicitando uma frase secreta manual."
  },
  {
    id: 'q-lpic1-102-6-012', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Como listar todas as chaves públicas em seu chaveiro (keyring) GPG ?",
    options: ['gpg --show-keys', 'gpg --list-keys', 'gpg --keys-all', 'gpg -k'],
    correct: 1,
    explanation: "`gpg --list-keys` (ou `gpg -k`) exibe as chaves públicas atualmente em seu armazenamento local.",
  },
  {
    id: 'q-lpic1-102-6-013', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Qual problema de segurança nos arquivos /etc/passwd antigos as senhas 'shadow' resolvem ?",
    options: [
      "Elas impedem que os usuários façam login várias vezes",
      "Elas movem os hashes de senha criptografados para um arquivo legível apenas pelo root",
      "Elas impõem senhas complexas automaticamente",
      "Elas criptografam o nome de usuário"
    ],
    correct: 1,
    explanation: "O /etc/passwd é legível por todos, enquanto o /etc/shadow é restrito ao root, protegendo os hashes de ataques offline de quebra de senha."
  },

  // ─── 110.3 Configurar a segurança no nível do usuário (7 questões) ───
  {
    id: 'q-lpic1-102-6-014', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual é o efeito da configuração 'PermitRootLogin no' no arquivo sshd_config ?",
    options: [
      "Impede que qualquer usuário faça login como root via SSH",
      "Exige uma senha especial para o usuário root",
      "Permite acesso root apenas via chaves públicas",
      "Desativa completamente a conta root no sistema"
    ],
    correct: 0,
    explanation: "Esta diretiva impede ataques de força bruta contra a conta root através da rede."
  },
  {
    id: 'q-lpic1-102-6-015', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual é o objetivo do comando 'ssh-agent' ?",
    options: [
      "Criptografar todo o disco rígido",
      "Armazenar as chaves privadas descriptografadas para que você não precise digitar sua frase secreta em cada login",
      "Gerar um novo par de chaves SSH",
      "Monitorar tentativas de login SSH falhas"
    ],
    correct: 1,
    explanation: "O agente SSH mantém as chaves na memória durante a sessão do usuário."
  },
  {
    id: 'q-lpic1-102-6-016', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: "Qual ferramenta é usada para gerar um novo par de chaves SSH pública/privada ?",
    options: ['ssh-create', 'ssh-keygen', 'ssh-init', 'keytool'],
    correct: 1,
    explanation: "`ssh-keygen` é a ferramenta padrão para criar chaves de autenticação para o SSH.",
  },
  {
    id: 'q-lpic1-102-6-017', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Onde a chave pública de um usuário é normalmente armazenada em um servidor remoto para permitir o login sem senha ?",
    options: ['~/.ssh/id_rsa.pub', '~/.ssh/authorized_keys', '/etc/ssh/authorized_keys', '~/.ssh/known_hosts'],
    correct: 1,
    explanation: "O arquivo `authorized_keys` contém todas as chaves públicas autorizadas a fazer login como aquele usuário.",
  },
  {
    id: 'q-lpic1-102-6-018', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual é o nome de arquivo padrão para uma chave RSA privada de um usuário ?",
    options: ['id_rsa.pub', 'id_rsa', 'ssh_key', 'private_key'],
    correct: 1,
    explanation: "`id_rsa` é o nome padrão para a parte privada de um par de chaves RSA.",
  },
  {
    id: 'q-lpic1-102-6-019', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: "Qual comando é usado para copiar facilmente sua chave pública SSH para um servidor remoto ?",
    options: ['ssh-install', 'ssh-push-key', 'ssh-copy-id', 'scp-id'],
    correct: 2,
    explanation: "O `ssh-copy-id` gerencia a conexão e adiciona sua chave pública ao arquivo authorized_keys remoto.",
  },
  {
    id: 'q-lpic1-102-6-020', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: "Qual parâmetro no sshd_config deve ser definido como 'no' para impor APENAS a autenticação baseada em chave ?",
    options: ['PasswordAuthentication no', 'KeyOnly yes', 'DisablePasswords yes', 'PermitKeysOnly'],
    correct: 0,
    explanation: "Definir `PasswordAuthentication no` desativa logins baseados em senha, tornando as chaves a única opção."
  },
];
