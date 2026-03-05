export const topic5Quizzes = [
  {
    "lessonId": "5-1",
    "question": "Qual UID o usuário root possui?",
    "options": [
      "1",
      "0",
      "1000",
      "999"
    ],
    "correct": 1,
    "explanation": "O usuário root sempre tem UID 0."
  },
  {
    "lessonId": "5-1",
    "question": "Qual comando permite que você execute comandos como root?",
    "options": [
      "sobre",
      "eu suo",
      "raiz",
      "administrador"
    ],
    "correct": 1,
    "explanation": "sudo executa um único comando com privilégios de root, usando sua senha."
  },
  {
    "lessonId": "5-1",
    "question": "su - (com o hífen) vai:",
    "options": [
      "Alterar apenas usuário",
      "Troque de usuário e carregue seu ambiente completo",
      "Crie um novo usuário",
      "Excluir um usuário"
    ],
    "correct": 1,
    "explanation": "su - simula um login completo do usuário alvo, carregando todas as variáveis ​​de ambiente."
  },
  {
    "lessonId": "5-1",
    "question": "/etc/sudoers é modificado com:",
    "options": [
      "anão",
      "vim",
      "visual",
      "chmod"
    ],
    "correct": 2,
    "explanation": "visudo é a maneira segura de editar /etc/sudoers: verifique a sintaxe antes de salvar."
  },
  {
    "lessonId": "5-1",
    "question": "O princípio do “menor privilégio” significa:",
    "options": [
      "Sempre dê raiz",
      "Dê apenas as permissões necessárias",
      "Não tenho senha",
      "Sempre use sudo"
    ],
    "correct": 1,
    "explanation": "Dê aos usuários e processos apenas os privilégios estritamente necessários para suas tarefas."
  },
  {
    "lessonId": "5-1",
    "question": "sudo comparado a su tem a vantagem de:",
    "options": [
      "Não peça senhas",
      "Seja rastreável nos logs",
      "Seja mais rápido",
      "Não peça privilégios"
    ],
    "correct": 1,
    "explanation": "sudo registra cada comando no log (/var/log/auth.log), tornando as ações rastreáveis."
  },
  {
    "lessonId": "5-1",
    "question": "O comando \"id\" mostra:",
    "options": [
      "O nome do host",
      "O UID, GID e grupos do usuário",
      "O PID",
      "A versão do kernel"
    ],
    "correct": 1,
    "explanation": "id mostra UID, GID e todos os grupos aos quais o usuário pertence."
  },
  {
    "lessonId": "5-1",
    "question": "Os usuários do sistema possuem UID:",
    "options": [
      "0",
      "De 1 a 999",
      "A partir de 1000",
      "Negativos"
    ],
    "correct": 1,
    "explanation": "Os usuários do sistema (daemons, serviços) geralmente possuem UIDs de 1 a 999."
  },
  {
    "lessonId": "5-1",
    "question": "O usuário \"ninguém\" é usado para:",
    "options": [
      "O administrador",
      "Processos que não requerem privilégios",
      "Os backups",
      "Login remoto"
    ],
    "correct": 1,
    "explanation": "ninguém (UID 65534) é usado para processos que devem ser executados com menos privilégios."
  },
  {
    "lessonId": "5-1",
    "question": "Os logs de autenticação estão localizados em:",
    "options": [
      "/var/log/auth.log",
      "/etc/log/auth",
      "/tmp/auth.log",
      "/home/log"
    ],
    "correct": 0,
    "explanation": "/var/log/auth.log (Debian) ou /var/log/secure (RHEL) contém logs de autenticação."
  },
  {
    "lessonId": "5-2",
    "question": "Em qual arquivo as senhas criptografadas são armazenadas?",
    "options": [
      "/etc/senha",
      "/etc/sombra",
      "/etc/grupo",
      "/etc/login"
    ],
    "correct": 1,
    "explanation": "/etc/shadow contém senhas criptografadas e pode ser lido apenas pelo root."
  },
  {
    "lessonId": "5-2",
    "question": "Qual comando cria um novo usuário com diretório inicial?",
    "options": [
      "adicionar usuário",
      "usuárioadd -m",
      "novo usuário",
      "usuário mkuser"
    ],
    "correct": 1,
    "explanation": "useradd -m cria o usuário e seu diretório inicial. -m é essencial."
  },
  {
    "lessonId": "5-2",
    "question": "O formato de /etc/passwd é:",
    "options": [
      "usuário:senha:home",
      "usuário:x:UID:GID:info:home:shell",
      "usuário:UID:shell",
      "nome:hash:sal"
    ],
    "correct": 1,
    "explanation": "user:x:UID:GID:gecos:home:shell — o x indica que a senha está em /etc/shadow."
  },
  {
    "lessonId": "5-2",
    "question": "usermod -aG usergroup faz:",
    "options": [
      "Remove o usuário do grupo",
      "Adiciona o usuário ao grupo adicional",
      "Alterar o grupo principal",
      "Crie um novo grupo"
    ],
    "correct": 1,
    "explanation": "-aG (anexar grupo) adiciona o usuário a um grupo adicional sem removê-lo dos outros."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/skel contém:",
    "options": [
      "Senhas",
      "Modelos para novos diretórios iniciais",
      "Os grupos",
      "Os registros"
    ],
    "correct": 1,
    "explanation": "/etc/skel contém os arquivos copiados para a página inicial de cada novo usuário (por exemplo, .bashrc)."
  },
  {
    "lessonId": "5-2",
    "question": "userdel -r remove:",
    "options": [
      "Somente o usuário",
      "O usuário e seu diretório inicial",
      "Somente a casa",
      "Apenas a senha"
    ],
    "correct": 1,
    "explanation": "-r também remove o diretório inicial e o spool de correio do usuário."
  },
  {
    "lessonId": "5-2",
    "question": "senha do usuário é usada para:",
    "options": [
      "Crie o usuário",
      "Alterar a senha do usuário",
      "Exclua o usuário",
      "Bloquear o usuário"
    ],
    "correct": 1,
    "explanation": "passwd altera a senha de um usuário. Root pode alterar o de qualquer usuário."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/group contém:",
    "options": [
      "Senhas de grupo",
      "A lista de grupos e seus membros",
      "Permissões de arquivo",
      "A configuração da rede"
    ],
    "correct": 1,
    "explanation": "/etc/group lista grupos de sistemas e seus membros adicionais."
  },
  {
    "lessonId": "5-2",
    "question": "groupadd nome do grupo criar:",
    "options": [
      "Um usuário",
      "Um novo grupo",
      "Um arquivo",
      "Um diretório"
    ],
    "correct": 1,
    "explanation": "groupadd cria um novo grupo no sistema."
  },
  {
    "lessonId": "5-2",
    "question": "Qual campo em /etc/passwd contém o shell de login?",
    "options": [
      "O primeiro",
      "O terceiro",
      "O penúltimo",
      "O último"
    ],
    "correct": 3,
    "explanation": "O último (7º) campo de /etc/passwd especifica o shell de login do usuário."
  },
  {
    "lessonId": "5-2",
    "question": "/sbin/nologin como um shell significa:",
    "options": [
      "Casca de raiz",
      "O usuário não pode fazer login interativamente",
      "Concha de emergência",
      "Shell sem senha"
    ],
    "correct": 1,
    "explanation": "/sbin/nologin impede login interativo (usado para contas de serviço)."
  },
  {
    "lessonId": "5-2",
    "question": "Cada usuário tem um grupo:",
    "options": [
      "Opcional",
      "Primário (obrigatório)",
      "Somente se administrador",
      "Só se ele tiver casa"
    ],
    "correct": 1,
    "explanation": "Cada usuário possui um grupo primário (GID em /etc/passwd) e pode ter grupos adicionais."
  },
  {
    "lessonId": "5-3",
    "question": "Qual valor octal corresponde às permissões rwxr-xr--?",
    "options": [
      "644",
      "755",
      "754",
      "764"
    ],
    "correct": 2,
    "explanation": "rwx=7, rx=5, r--=4 → 754."
  },
  {
    "lessonId": "5-3",
    "question": "Qual comando altera o proprietário de um arquivo?",
    "options": [
      "chmod",
      "chown",
      "chgrp",
      "chperm"
    ],
    "correct": 1,
    "explanation": "chown (alterar proprietário) altera o proprietário. chmod altera as permissões."
  },
  {
    "lessonId": "5-3",
    "question": "O que o comando chmod u+x script.sh faz?",
    "options": [
      "Remove permissão de execução",
      "Adiciona permissão de execução ao proprietário",
      "Adiciona permissão de execução a todos",
      "Alterar o proprietário"
    ],
    "correct": 1,
    "explanation": "u+x adiciona (+) permissão de execução (x) ao proprietário (u=usuário)."
  },
  {
    "lessonId": "5-3",
    "question": "Que permissão especial faz com que novos arquivos em um diretório herdem o grupo?",
    "options": [
      "Pedaços pegajosos",
      "SUID",
      "SGID",
      "LCA"
    ],
    "correct": 2,
    "explanation": "O SGID em um diretório faz com que novos arquivos herdem o grupo do diretório."
  },
  {
    "lessonId": "5-3",
    "question": "O valor octal de r (lido) é:",
    "options": [
      "1",
      "2",
      "4",
      "7"
    ],
    "correct": 2,
    "explanation": "r=4, w=2, x=1. Os valores somam: rw=6, rwx=7."
  },
  {
    "lessonId": "5-3",
    "question": "conjuntos chmod 644:",
    "options": [
      "rwxr-xr-x",
      "rw-r--r--",
      "rwx------",
      "rw-rw-rw-"
    ],
    "correct": 1,
    "explanation": "6=rw-, 4=r--, 4=r-- → rw-r--r-- (proprietário lê/escreve, outros apenas lêem)."
  },
  {
    "lessonId": "5-3",
    "question": "O Sticky Bit em /tmp evita:",
    "options": [
      "Lendo de outras pessoas",
      "A exclusão de arquivos de outras pessoas",
      "A escrita",
      "A execução"
    ],
    "correct": 1,
    "explanation": "O Sticky Bit impede que um usuário exclua arquivos que não são de sua propriedade em /tmp."
  },
  {
    "lessonId": "5-3",
    "question": "umask 022 produz permissões padrão para arquivos de:",
    "options": [
      "777",
      "755",
      "644",
      "600"
    ],
    "correct": 2,
    "explanation": "Para arquivos: 666 - 022 = 644 (rw-r--r--). Para diretórios: 777 - 022 = 755."
  },
  {
    "lessonId": "5-3",
    "question": "alterações no chgrp:",
    "options": [
      "O proprietário",
      "O grupo de propriedade",
      "As licenças",
      "O nome do arquivo"
    ],
    "correct": 1,
    "explanation": "chgrp (alterar grupo) altera o grupo que possui um arquivo."
  },
  {
    "lessonId": "5-3",
    "question": "O SUID em um executável faz com que ele seja executado com permissões:",
    "options": [
      "Do usuário que o executa",
      "Do proprietário do arquivo",
      "Sempre faça root",
      "Do grupo"
    ],
    "correct": 1,
    "explanation": "SUID faz o programa ser executado com as permissões do proprietário do arquivo (por exemplo, passwd tem SUID root)."
  },
  {
    "lessonId": "5-3",
    "question": "O arquivo chmod o-w remove:",
    "options": [
      "Escrevendo para todos",
      "Escrevendo para “outros”",
      "Lendo para \"outros\"",
      "Concorrendo a \"dono\""
    ],
    "correct": 1,
    "explanation": "o=outros, -w=remover escrita. Remova a permissão de gravação para “outros”."
  },
  {
    "lessonId": "5-3",
    "question": "ls -l exibe permissões no formato:",
    "options": [
      "Octal (755)",
      "Simbólico (rwxr-xr-x)",
      "Faixas",
      "Hexadecimal"
    ],
    "correct": 1,
    "explanation": "ls -l exibe permissões em formato simbólico: rwxr-xr-x."
  },
  {
    "lessonId": "5-3",
    "question": "Um arquivo com 700 permissões só pode ser acessado por:",
    "options": [
      "Todos",
      "O proprietário",
      "O grupo",
      "Raiz"
    ],
    "correct": 1,
    "explanation": "700 = rwx------ — apenas o proprietário tem permissões (e o root ignora tudo)."
  },
  {
    "lessonId": "5-4",
    "question": "Que tipo de link pode cruzar diferentes sistemas de arquivos?",
    "options": [
      "Links físicos",
      "Links simbólicos",
      "Ambos",
      "Ninguém"
    ],
    "correct": 1,
    "explanation": "Links simbólicos podem cruzar diferentes sistemas de arquivos. Links físicos não são."
  },
  {
    "lessonId": "5-4",
    "question": "O que acontece quando você exclui o arquivo de destino de um link físico?",
    "options": [
      "O link fica \"quebrado\"",
      "O arquivo permanece acessível através do link",
      "O link também foi excluído",
      "O sistema falha"
    ],
    "correct": 1,
    "explanation": "Com links físicos, o arquivo permanece acessível enquanto existir pelo menos um link para o inode."
  },
  {
    "lessonId": "5-4",
    "question": "O link de destino ln -s cria:",
    "options": [
      "Um link físico",
      "Um link simbólico",
      "Uma cópia",
      "Um apelido"
    ],
    "correct": 1,
    "explanation": "-s indica um link simbólico. Sem -s, ln cria um link físico."
  },
  {
    "lessonId": "5-4",
    "question": "Um link simbólico “quebrado” é aquele cujo:",
    "options": [
      "A permissão foi negada",
      "O arquivo de destino foi excluído",
      "Inode está corrompido",
      "O sistema de arquivos está cheio"
    ],
    "correct": 1,
    "explanation": "Um link simbólico fica \"quebrado\" quando o arquivo de destino não existe mais."
  },
  {
    "lessonId": "5-4",
    "question": "Um link físico aponta para:",
    "options": [
      "Um caminho",
      "Um inode",
      "Outro link",
      "Um diretório"
    ],
    "correct": 1,
    "explanation": "Um link físico é um nome adicional que aponta para o mesmo inode do arquivo original."
  },
  {
    "lessonId": "5-4",
    "question": "Você pode criar links físicos para diretórios?",
    "options": [
      "Sim, sempre",
      "Não (normalmente)",
      "Somente root pode",
      "Somente com -d"
    ],
    "correct": 1,
    "explanation": "Links físicos para diretórios não são permitidos para evitar loops no sistema de arquivos."
  },
  {
    "lessonId": "5-4",
    "question": "ls -i mostra:",
    "options": [
      "O tipo de arquivo",
      "O número do inode",
      "O proprietário",
      "A data de criação"
    ],
    "correct": 1,
    "explanation": "ls -i exibe o número do inode de cada arquivo."
  },
  {
    "lessonId": "5-4",
    "question": "readlink mostra:",
    "options": [
      "O conteúdo do arquivo",
      "O alvo de um link simbólico",
      "As licenças",
      "O proprietário"
    ],
    "correct": 1,
    "explanation": "readlink mostra o arquivo/caminho para o qual um link simbólico aponta."
  },
  {
    "lessonId": "5-4",
    "question": "Dois links físicos para o mesmo arquivo têm:",
    "options": [
      "Inodos diferentes",
      "O mesmo inode",
      "Conteúdos diferentes",
      "Proprietários diferentes"
    ],
    "correct": 1,
    "explanation": "Links físicos compartilham o mesmo inode. Eles são indistinguíveis do arquivo \"original\"."
  },
  {
    "lessonId": "5-4",
    "question": "Um link simbólico tem tamanho:",
    "options": [
      "Zero bytes",
      "Igual ao alvo",
      "Igual ao comprimento do caminho de destino",
      "4096 bytes"
    ],
    "correct": 2,
    "explanation": "O tamanho de um link simbólico é o comprimento do caminho de destino (por exemplo, /etc/passwd = 11 bytes)."
  }
];
