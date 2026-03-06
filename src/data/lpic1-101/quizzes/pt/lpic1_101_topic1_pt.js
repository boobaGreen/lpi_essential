// LPIC-1 101 — Topic 101: Arquitetura do Sistema — Quiz PT

export const lpic1_101_topic1_pt = [
  {
    id: 1,
    question: "Qual diretório contém arquivos de dispositivos dinâmicos e nós de hardware no Linux?",
    options: ["/etc", "/dev", "/proc", "/sys"],
    answer: "/dev",
    explanation: "O diretório /dev (devices) contém ficheiros especiais que representam o hardware do sistema."
  },
  {
    id: 2,
    question: "Qual comando exibe informações detalhadas sobre os dispositivos e barramento PCI?",
    options: ["lsusb", "lspci", "lshw", "lsmod"],
    answer: "lspci",
    explanation: "O comando lspci é utilizado para listar todos os dispositivos ligados ao barramento PCI."
  },
  {
    id: 3,
    question: "Onde o kernel armazena informações sobre interrupções (IRQs) em tempo real?",
    options: ["/proc/interrupts", "/etc/interrupts", "/sys/irq", "/var/log/irq"],
    answer: "/proc/interrupts",
    explanation: "/proc é um sistema de ficheiros virtual que fornece informações do kernel e do hardware em tempo real."
  },
  {
    id: 4,
    question: "Qual comando carrega um módulo do kernel e resolve automaticamente as suas dependências?",
    options: ["insmod", "rmmod", "modprobe", "lsmod"],
    answer: "modprobe",
    explanation: "modprobe é mais inteligente que o insmod pois verifica e carrega as dependências necessárias do módulo."
  },
  {
    id: 5,
    question: "Qual a ordem correta das fases de inicialização (Boot) do Linux?",
    options: [
      "BIOS/UEFI -> Bootloader -> Kernel -> Init/Systemd",
      "Kernel -> BIOS -> Bootloader -> Init",
      "Bootloader -> Kernel -> BIOS -> Systemd",
      "Init -> Kernel -> Bootloader -> BIOS"
    ],
    answer: "BIOS/UEFI -> Bootloader -> Kernel -> Init/Systemd",
    explanation: "O firmware (BIOS/UEFI) inicia o bootloader, que carrega o kernel, que por sua vez inicia o primeiro processo (PID 1)."
  },
  {
    id: 6,
    question: "Qual comando exibe o histórico de mensagens do kernel (ring buffer)?",
    options: ["logshow", "dmesg", "kernellog", "syslog"],
    answer: "dmesg",
    explanation: "dmesg (display message) é essencial para diagnosticar problemas de hardware detetados pelo kernel."
  },
  {
    id: 7,
    question: "No systemd, qual 'target' corresponde ao antigo runlevel 3 (modo multi-utilizador em texto)?",
    options: ["graphical.target", "rescue.target", "multi-user.target", "reboot.target"],
    answer: "multi-user.target",
    explanation: "multi-user.target é o modo padrão para servidores, sem interface gráfica (GUI)."
  },
  {
    id: 8,
    question: "Qual comando do systemd permite mudar para um novo target sem reiniciar?",
    options: ["systemctl change", "systemctl isolate", "systemctl switch", "systemctl jump"],
    answer: "systemctl isolate",
    explanation: "O comando isolate pára os serviços do target atual e inicia os do novo target selecionado."
  },
  {
    id: 9,
    question: "Como se solicita um encerramento (halt) imediato do sistema via linha de comandos?",
    options: ["shutdown -h now", "shutdown -r now", "shutdown -s now", "halt -wait"],
    answer: "shutdown -h now",
    explanation: "-h significa halt (parar) e now indica execução imediata."
  },
  {
    id: 10,
    question: "Qual arquivo de configuração define o target padrão (default) no systemd?",
    options: ["/etc/systemd/system/default.target", "/etc/inittab", "/boot/grub/grub.cfg", "/etc/runlevel"],
    answer: "/etc/systemd/system/default.target",
    explanation: "Este link simbólico aponta para o target que o sistema deve carregar automaticamente no boot."
  }
];
