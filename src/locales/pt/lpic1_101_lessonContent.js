// LPIC-1 101 Lesson Content — Portuguese
// Conteúdo das 28 lições

export const lpic1_101_lessonContent_pt = {
  // ──── Topic 1: Arquitetura de Sistema ────
  'lpic1-101-1-1': {
    title: 'Hardware e Periféricos',
    comic: {
      title: 'Linux e Hardware: Um Casamento Perfeito 🤝',
      panels: [
        { emoji: '⚙️', text: 'No boot, o kernel escaneia os barramentos PCI e USB para encontrar cada componente.' },
        { emoji: '📁', text: 'Tudo é um arquivo! As informazioni de hardware aparecem em /proc e /sys.' },
        { emoji: '🔌', text: 'O udev cria os nós em /dev (ex: /dev/sda) para podermos usar os discos.' },
        { emoji: '🛠️', text: 'lspci e lsusb são seus microscópios para ver o que há sob o capô!' },
      ]
    },
    keyPoints: [
      { title: 'FS Virtuais', items: ['/proc — Informações dinâmicas (cpuinfo, meminfo)', '/sys — Estrutura de barramentos e drivers', '/dev — Arquivos especiais de dispositivos'] },
      { title: 'Ferramentas', items: ['lspci — Lista dispositivos PCI/PCIe', 'lsusb — Lista periféricos USB', 'lsblk — Vista em árvore de blocos (discos)'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | head -n 1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: 'Processo de Boot',
    comic: {
      title: 'Da Energização ao Desktop ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI: Executa o POST e procura o bootloader no MBR o partição ESP.' },
        { emoji: '🐧', text: 'GRUB2: O guarda de trânsito que carrega o Kernel e o initramfs na memória.' },
        { emoji: '🧠', text: 'Kernel: Inicializa o hardware e monta o sistema de arquivos raiz (/) final.' },
        { emoji: '🚀', text: 'Systemd: O primeiro processo (PID 1) que inicia todos os serviços.' },
      ]
    },
    keyPoints: [
      { title: 'Fases do Boot', items: ['Firmware → Bootloader → Kernel → Init', 'dmesg — Lê as mensagens do kernel no boot', 'journalctl -b — Logs do último boot'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci ...\nStartup finished in 4.7s' 
    },
  },

  'lpic1-101-1-3': { title: 'Runlevels e Targets systemd', terminal: { prompt: '$ systemctl get-default', output: 'graphical.target' } },

  // ──── Topic 2: Instalação e Gestão de Pacotes ────
  'lpic1-101-2-1': { title: 'Layout do Disco Rígido', terminal: { prompt: '$ lsblk', output: 'sda      8:0    0 238.5G   disk\n└─sda1   8:1    0   238G  part /' } },
  'lpic1-101-2-2': { title: 'Boot Manager (GRUB2)', terminal: { prompt: '$ update-grub', output: 'Generating grub configuration file...' } },
  'lpic1-101-2-3': { title: 'Bibliotecas Partilhadas', terminal: { prompt: '$ ldd /bin/ls', output: 'libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' } },
  'lpic1-101-2-4': { title: 'Pacotes Debian (dpkg/apt)', terminal: { prompt: '$ apt install nmap', output: 'Reading package lists... Done' } },
  'lpic1-101-2-5': { title: 'Pacotes RPM e YUM/DNF', terminal: { prompt: '$ dnf install nmap', output: 'Total download size: 5.4 M' } },
  'lpic1-101-2-6': { title: 'Virtualização Linux', terminal: { prompt: '$ kvm-ok', output: 'KVM acceleration can be used' } },

  // ──── Topic 3: Comandos GNU e Unix ────
  'lpic1-101-3-1-1': { title: 'Linha de Comando — Base', terminal: { prompt: '$ type cd', output: 'cd is a shell builtin' } },
  'lpic1-101-3-1-2': { title: 'Linha de Comando — Variáveis', terminal: { prompt: '$ export VAR=test', output: '' } },
  'lpic1-101-3-2-1': { title: 'Filtros de Texto', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 line1' } },
  'lpic1-101-3-3-1': { title: 'Gestão de Ficheiros — Base', terminal: { prompt: '$ ls -l', output: '-rw-r--r-- 1 user user ...' } },
  'lpic1-101-3-3-2': { title: 'Gestão de Ficheiros — Avançada', terminal: { prompt: '$ find . -name "*.txt"', output: './note.txt' } },
  'lpic1-101-3-4-1': { title: 'Redirecionamentos e Pipes — Base', terminal: { prompt: '$ ls > lista.txt', output: '' } },
  'lpic1-101-3-4-2': { title: 'Redirecionamentos e Pipes — Avançados', terminal: { prompt: '$ ls | xargs rm', output: '' } },
  'lpic1-101-3-5-1': { title: 'Processos — Base', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },
  'lpic1-101-3-5-2': { title: 'Processos — Job Control', terminal: { prompt: '$ jobs', output: '[1]+ Running ...' } },
  'lpic1-101-3-6-1': { title: 'Prioridade de Processos', terminal: { prompt: '$ nice -n 10 cmd', output: '' } },
  'lpic1-101-3-7-1': { title: 'Regex — Base', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },
  'lpic1-101-3-7-2': { title: 'Regex — Estendidas', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '' } },
  'lpic1-101-3-8-1': { title: 'Editor vi/vim', terminal: { prompt: 'vi ficheiro.txt', output: '[Abre o editor]' } },

  // ──── Topic 4: Dispositivos, Filesystems e Padrão FHS ────
  'lpic1-101-4-1-1': { title: 'Partições e Filesystems', terminal: { prompt: '$ sudo fdisk -l', output: 'Disk /dev/sda: 20 GiB...' } },
  'lpic1-101-4-2-1': { title: 'Integridade de Filesystems', terminal: { prompt: '$ df -h', output: '/dev/sda1 20G 75%' } },
  'lpic1-101-4-3-1': { title: 'Montagem e Desmontagem', terminal: { prompt: '$ mount /dev/sdb1 /mnt', output: '' } },
  'lpic1-101-4-5-1': { title: 'Permissões e Propriedade', terminal: { prompt: '$ chmod 755 script.sh', output: '' } },
  'lpic1-101-4-6-1': { title: 'Links Hard e Soft', terminal: { prompt: '$ ln -s original link', output: '' } },
  'lpic1-101-4-7-1': { title: 'FHS e Localização de Ficheiros', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
