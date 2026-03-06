// LPIC-1 101 — Topic 102: Instalação e Gestão de Pacotes — Quiz PT

export const lpic1_101_topic2_pt = [
  {
    id: 1,
    question: "Qual o limite de partições primárias numa tabela de partições MBR (Master Boot Record)?",
    options: ["2", "4", "128", "Ilimitado"],
    answer: "4",
    explanation: "O MBR permite no máximo 4 partições primárias. Para ter mais, é necessário usar uma partição estendida."
  },
  {
    id: 2,
    question: "Qual tecnologia moderna suporta partições maiores que 2TB e até 128 partições primárias?",
    options: ["MBR", "LVM", "GPT", "FAT32"],
    answer: "GPT",
    explanation: "GPT (GUID Partition Table) é o padrão moderno utilizado em sistemas UEFI."
  },
  {
    id: 3,
    question: "A partição /var é recomendada para ser separada da raiz (/) num servidor porque:",
    options: [
      "Contém arquivos binários do sistema",
      "Contém ficheiros que crescem (logs/email) e podem encher o disco",
      "É onde os utilizadores guardam os seus documentos",
      "É necessária para o bootloader GRUB"
    ],
    answer: "Contém ficheiros que crescem (logs/email) e podem encher o disco",
    explanation: "Separa o /var para que ficheiros de log descontrolados não bloqueiem o sistema operativo raiz."
  },
  {
    id: 4,
    question: "Qual comando instala o GRUB no primeiro disco rígido (MBR)?",
    options: ["grub-mkconfig", "grub-install /dev/sda", "update-grub", "grub-setup"],
    answer: "grub-install /dev/sda",
    explanation: "grub-install grava o código base do bootloader no Master Boot Record do disco físico."
  },
  {
    id: 5,
    question: "Qual comando exibe as bibliotecas partilhadas (.so) necessárias para um executável binário?",
    options: ["ldd", "ldconfig", "lsmod", "apt show"],
    answer: "ldd",
    explanation: "O comando ldd (list dynamic dependencies) mostra o mapa de bibliotecas necessárias."
  },
  {
    id: 6,
    question: "No Debian/Ubuntu, qual a principal diferença entre 'remove' e 'purge' no dpkg?",
    options: [
      "Remove apaga tudo, Purge apenas o binário",
      "Purge apaga o binário e os arquivos de configuração (/etc), Remove apenas o binário",
      "Não há diferença entre eles",
      "Purge descarrega da internet o pacote"
    ],
    answer: "Purge apaga o binário e os arquivos de configuração (/etc), Remove apenas o binário",
    explanation: "O purge é a remoção completa da aplicação e das suas definições locais."
  },
  {
    id: 7,
    question: "Qual comando do APT atualiza as listas de catálogos e versões dos repositórios?",
    options: ["apt upgrade", "apt update", "apt dist-upgrade", "apt search"],
    answer: "apt update",
    explanation: "O update sincroniza os ficheiros dos repositórios locais com as novidades da internet."
  },
  {
    id: 8,
    question: "Qual comando RPM diz a qual pacote pertence um determinado ficheiro no sistema (ex: /bin/ls)?",
    options: ["rpm -ql", "rpm -qa", "rpm -qf", "rpm -p"],
    answer: "rpm -qf",
    explanation: "O flag -f (file) faz a query reversa para encontrar o dono do ficheiro original."
  },
  {
    id: 9,
    question: "Qual arquivo contém a lista de repositórios oficiais no Debian/Ubuntu?",
    options: ["/etc/yum.repos.d/", "/etc/apt/sources.list", "/boot/grub/grub.cfg", "/etc/dpkg.cfg"],
    answer: "/etc/apt/sources.list",
    explanation: "sources.list define de onde o comando apt deve descarregar os pacotes."
  },
  {
    id: 10,
    question: "No Fedora/RHEL, qual comando moderno substituiu o YUM para gestão de pacotes?",
    options: ["apt", "dnf", "zypper", "pacman"],
    answer: "dnf",
    explanation: "DNF (Dandified YUM) é a evolução mais rápida e limpa do gestor YUM."
  }
];
