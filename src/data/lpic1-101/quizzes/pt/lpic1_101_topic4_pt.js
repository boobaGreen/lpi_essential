// LPIC-1 101 — Topic 104: Dispositivos, Sistemas de Ficheiros, FHS — Quiz PT

export const lpic1_101_topic4_pt = [
  {
    id: 1,
    question: "Qual comando é utilizado para criar um sistema de ficheiros Ext4 numa partição?",
    options: ["fdisk", "mkfs.ext4", "fsck", "mount"],
    answer: "mkfs.ext4",
    explanation: "mkfs (make filesystem) é o comando que formata a partição com a estrutura desejada."
  },
  {
    id: 2,
    question: "Qual comando verifica e tenta reparar erros em sistemas de ficheiros Linux?",
    options: ["fdisk", "df", "fsck", "tune2fs"],
    answer: "fsck",
    explanation: "fsck (filesystem check) é a ferramenta de diagnóstico para partições corrompidas."
  },
  {
    id: 3,
    question: "Qual arquivo de configuração define as montagens automáticas de disco no arranque do sistema?",
    options: ["/etc/mtab", "/etc/fstab", "/proc/mounts", "/etc/mount.conf"],
    answer: "/etc/fstab",
    explanation: "O arquivo fstab (filesystem table) é vital para o boot correto do sistema operativo."
  },
  {
    id: 4,
    question: "Qual o identificador recomendado para usar no fstab em vez de nomes de dispositivos como /dev/sda1?",
    options: ["LABEL", "ID", "UUID", "SERIAL"],
    answer: "UUID",
    explanation: "O UUID é único e não muda se os cabos ou a ordem do hardware forem alterados."
  },
  {
    id: 5,
    question: "Qual comando exibe o espaço em disco usado e disponível em formato legível (GB/MB)?",
    options: ["du -sh", "df -h", "ls -l", "free -m"],
    answer: "df -h",
    explanation: "df (disk free) mostra o resumo de todas as partições montadas."
  },
  {
    id: 6,
    question: "A permissão octal 755 num ficheiro significa que:",
    options: [
      "O dono tem tudo, grupo e outros apenas ler e executar",
      "Todos têm permissão total",
      "Apenas o dono pode ler e escrever",
      "Ninguém pode executar o arquivo"
    ],
    answer: "O dono tem tudo, grupo e outros apenas ler e executar",
    explanation: "7 (rwx) para o dono, 5 (r-x) para o grupo e outros."
  },
  {
    id: 7,
    question: "Qual bit especial permite que um arquivo executável corra com os privilégios do dono do arquivo (root)?",
    options: ["Sticky Bit", "SGID", "SUID", "Umask"],
    answer: "SUID",
    explanation: "SUID (Set User ID) é frequentemente usado no comando 'passwd'."
  },
  {
    id: 8,
    question: "Qual comando cria uma ligação simbólica (soft link) entre dois nomes de ficheiros?",
    options: ["ln", "ln -s", "cp -l", "link"],
    answer: "ln -s",
    explanation: "-s (symbolic) cria um apontador, ao contrário do hard link que aponta para o inode."
  },
  {
    id: 9,
    question: "Segundo o FHS (Filesystem Hierarchy Standard), onde devem ficar os binários essenciais do sistema?",
    options: ["/home", "/var", "/bin", "/tmp"],
    answer: "/bin",
    explanation: "/bin e /usr/bin contêm as ferramentas fundamentais (ls, cp, etc)."
  },
  {
    id: 10,
    question: "Qual bit especial numa diretoria (como /tmp) impede que utilizadores apaguem ficheiros uns dos outros?",
    options: ["SUID", "SGID", "Sticky Bit", "Immutable bit"],
    answer: "Sticky Bit",
    explanation: "O Sticky bit restringe a eliminação apenas ao dono do arquivo ou ao root."
  }
];
