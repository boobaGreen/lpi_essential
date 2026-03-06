// LPIC-1 101 Lesson Content — Italian
// Contenuto lezioni per tutte le 28 lezioni

export const lpic1_101_lessonContent = {
  // ──── Topic 1: Architettura di Sistema ────
  'lpic1-101-1-1': {
    title: 'Hardware e Periferiche',
    comic: {
      title: 'Linux e l\'Hardware: Un Matrimonio Perfetto 🤝',
      panels: [
        { emoji: '⚙️', text: 'Al boot, il kernel scansiona il bus PCI e USB per trovare ogni componente.' },
        { emoji: '📁', text: 'Tutto è un file! Le info hardware appaiono in /proc e /sys come file di testo.' },
        { emoji: '🔌', text: 'udev crea i nodi in /dev (es. /dev/sda) per permetterci di usare i dischi.' },
        { emoji: '🛠️', text: 'lspci e lsusb sono i tuoi spettroscopi per vedere cosa c\'è sotto il cofano!' },
      ]
    },
    keyPoints: [
      { title: 'FS Virtuali', items: ['/proc — Info dinamiche (cpuinfo, meminfo)', '/sys — Struttura bus e driver', '/dev — File speciali dei dispositivi'] },
      { title: 'Strumenti PCI/USB', items: ['lspci — Elenca dispositivi PCI/PCIe', 'lsusb — Elenca periferiche USB', 'lsblk — Vista ad albero dei blocchi (dischi)'] },
      { title: 'Kernel Modules', items: ['lsmod — Lista driver caricati', 'modprobe — Carica/rimuove moduli + dipendenze', 'modinfo — Dettagli tecnici di un driver'] },
    ],
    terminal: { 
      prompt: '$ lspci | grep -i vga\n$ cat /proc/cpuinfo | grep "model name" | head -1', 
      output: '00:02.0 VGA compatible controller: Intel Corporation...\nmodel name : Intel(R) Core(TM) i7-10700K CPU @ 3.80GHz' 
    },
  },

  'lpic1-101-1-2': {
    title: 'Processo di Boot',
    comic: {
      title: 'Dall\'accensione al Desktop ⚡',
      panels: [
        { emoji: '🏁', text: 'BIOS/UEFI: Esegue il POST e cerca il bootloader nel MBR o nella partizione ESP.' },
        { emoji: '🐧', text: 'GRUB2: Il vigile urbano che carica il Kernel e l\'initramfs in memoria.' },
        { emoji: '🧠', text: 'Kernel: Inizializza l\'hardware e monta il root filesystem (/) finale.' },
        { emoji: '🚀', text: 'Systemd: Il primo processo (PID 1) che avvia tutti i servizi del sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Fasi Boot', items: ['Firmware → Bootloader → Kernel → Init', 'dmesg — Legge i messaggi del kernel al boot', 'journalctl -b — Log dell\'ultimo avvio'] },
      { title: 'GRUB2', items: ['/etc/default/grub — Configurazione utente', 'grub-mkconfig — Genera il file finale', 'grub-install — Scrive il bootloader sul disco'] },
      { title: 'Initramfs', items: ['Filesystem temporaneo in RAM', 'Contiene i driver per montare il vero disco /', 'update-initramfs — Rigenera l\'immagine'] },
    ],
    terminal: { 
      prompt: '$ dmesg | grep -i "error"\n$ systemd-analyze', 
      output: '[ 0.123] pci 0000:00:01.0: can\'t claim BAR 1...\nStartup finished in 1.2s (kernel) + 3.5s (userspace) = 4.7s' 
    },
  },

  'lpic1-101-1-3': {
    title: 'Runlevel e Target systemd',
    comic: {
      title: 'Scegli la tua Modalità di Lavoro 🚦',
      panels: [
        { emoji: '🖥️', text: 'Runlevel 3 (multi-user): Solo testo, ideale per i server.' },
        { emoji: '🎨', text: 'Runlevel 5 (graphical): La scrivania completa per l\'utente desktop.' },
        { emoji: '🔧', text: 'Runlevel 1 (rescue): Modalità manutenzione per riparare il sistema.' },
        { emoji: '⏹️', text: 'Runlevel 0 e 6: I segnali di fine viaggio... o di ripartenza!' },
      ]
    },
    keyPoints: [
      { title: 'Target systemd', items: ['multi-user.target — Modalità testuale', 'graphical.target — Interfaccia grafica', 'rescue.target — Single user mode'] },
      { title: 'Gestione Stato', items: ['systemctl get-default — Vedi il default', 'systemctl set-default — Cambia il boot default', 'systemctl isolate — Cambia stato al volo'] },
      { title: 'Comandi Admin', items: ['wall — Messaggio a tutti gli utenti', 'shutdown -h +10 — Spegnimento programmato', 'reboot — Riavvio immediato'] },
    ],
    terminal: { 
      prompt: '$ systemctl get-default\n$ sudo systemctl isolate multi-user.target', 
      output: 'graphical.target\nPolicyKit daemon disconnected...' 
    },
  },

  // ──── Topic 2: Installazione e Gestione Pacchetti ────
  'lpic1-101-2-1': {
    title: 'Layout del Disco Rigido',
    comic: {
      title: 'Disegnare la Casa di Linux 🏗️',
      panels: [
        { emoji: '📐', text: 'Partizionare significa dividere il disco fisico in stanze logiche indipendenti.' },
        { emoji: '🏠', text: '/home separata? Ottima idea! Reinstalli Linux senza perdere i tuoi file.' },
        { emoji: '⚡', text: 'Swap: La stanza di riserva quando la RAM è piena. Meglio averla su SSD!' },
        { emoji: '🔗', text: 'LVM (Logical Volume Manager): Come pareti mobili, puoi ingrandire le stanze al volo.' },
      ]
    },
    keyPoints: [
      { title: 'Standard FHS', items: ['/boot — Kernel e bootloader (250-512MB)', '/bin e /sbin — Eseguibili di base', '/etc — Solo file di configurazione', '/var — Log, database e code di stampa'] },
      { title: 'Partizionamento', items: ['MBR — Vecchio standard, max 4 partizioni primarie', 'GPT — Moderno, 128 partizioni, supporta dischi > 2TB', 'ESP — Partizione EFI obbligatoria per UEFI'] },
      { title: 'LVM', items: ['PV (Physical Volume) — Il disco fisico', 'VG (Volume Group) — Unione di più dischi', 'LV (Logical Volume) — La partizione flessibile'] },
    ],
    terminal: { 
      prompt: '$ lsblk\n$ df -h /', 
      output: 'sda      8:0    0 238.5G  0 disk\n└─sda1   8:1    0   238G  0 part /\nFilesystem      Size  Used Avail Use% Mounted on\n/dev/sda1       234G   42G  180G  19% /' 
    },
  },

  'lpic1-101-2-2': {
    title: 'Boot Manager (GRUB2)',
    comic: {
      title: 'GRUB2: Il Direttore d\'Orchestra 🎼',
      panels: [
        { emoji: '🎹', text: 'GRUB2 legge la sua partizione e ti mostra il menu di scelta del sistema.' },
        { emoji: '📜', text: 'Non modificare /boot/grub/grub.cfg! È come uno spartito generato da un computer.' },
        { emoji: '✍️', text: 'Cambia le impostazioni in /etc/default/grub e poi lancia update-grub.' },
        { emoji: '🛠️', text: 'Puoi aggiungere opzioni al kernel per riparare il sistema in emergenza.' },
      ]
    },
    keyPoints: [
      { title: 'File Chiave', items: ['/boot/grub/grub.cfg — Il file di config principale (automatico)', '/etc/default/grub — Opzioni timeout, kernel, grafica', '/etc/grub.d/ — Script che creano le voci del menu'] },
      { title: 'Comandi', items: ['grub-install — Installa GRUB nel MBR o ESP', 'grub-mkconfig -o ... — Rigenera la configurazione', 'update-grub — Wrapper Debian per mkconfig'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/default/grub | grep TIMEOUT\n$ sudo update-grub', 
      output: 'GRUB_TIMEOUT=5\nGenerating grub configuration file...\nFound linux image: /boot/vmlinuz-...' 
    },
  },

  'lpic1-101-2-3': {
    title: 'Librerie Condivise',
    comic: {
      title: 'Codice in Comune 🔗',
      panels: [
        { emoji: '📚', text: 'Le librerie .so sono libri in una biblioteca pubblica: molti programmi li usano.' },
        { emoji: '🕵️', text: 'ldd è il detective: ti dice quali librerie mancano a un programma.' },
        { emoji: '🏎️', text: 'ldconfig aggiorna la cache per far trovare le librerie istantaneamente.' },
        { emoji: '🌍', text: 'LD_LIBRARY_PATH: Un sentiero extra per cercare librerie speciali.' },
      ]
    },
    keyPoints: [
      { title: 'Concetti', items: ['Static Linking — Codice incluso nell\'eseguibile (pesante)', 'Dynamic Linking — Codice caricato a runtime (.so)', 'ld.so — Il linker dinamico del sistema'] },
      { title: 'Strumenti', items: ['ldd — Lista dipendenze di un binario', 'ldconfig — Aggiorna /etc/ld.so.cache', '/etc/ld.so.conf — Elenco directory delle librerie'] },
    ],
    terminal: { 
      prompt: '$ ldd /bin/ls', 
      output: 'linux-vdso.so.1 => (0x00007...) \nlibselinux.so.1 => /lib/x86_64-linux-gnu/libselinux.so.1\nlibc.so.6 => /lib/x86_64-linux-gnu/libc.so.6' 
    },
  },

  'lpic1-101-2-4': {
    title: 'Pacchetti Debian (dpkg/apt)',
    comic: {
      title: 'L\'Ecosistema Debian 📦',
      panels: [
        { emoji: '📦', text: 'I file .deb sono pacchetti compatti con dentro app e istruzioni.' },
        { emoji: '🏗️', text: 'dpkg è the muratore: installa il singolo pacchetto ma non gestisce i vicini.' },
        { emoji: '🛰️', text: 'apt è l\'architetto: scarica dai repository e risolve tutte le dipendenze.' },
        { emoji: '📝', text: 'sources.list è la tua mappa dei magazzini online di software.' },
      ]
    },
    keyPoints: [
      { title: 'dpkg (Basso Livello)', items: ['dpkg -i — Installa pacchetto locale', 'dpkg -r — Rimuove pacchetto', 'dpkg -L — Mostra file installati da un pkg', 'dpkg -S — Cerca a quale pacchetto appartiene un file'] },
      { title: 'apt (Alto Livello)', items: ['apt update — Scarica liste nuovi pacchetti', 'apt upgrade — Installa versioni nuove', 'apt install — Installa risolvendo dipendenze', 'apt purge — Rimuove pacchetto e file di config'] },
      { title: 'Repository', items: ['/etc/apt/sources.list — Sorgenti principali', '/etc/apt/sources.list.d/ — Repository extra'] },
    ],
    terminal: { 
      prompt: '$ apt-cache search nmap\n$ sudo apt install nmap', 
      output: 'nmap - The Network Mapper\nReading package lists... Done\nBuilding dependency tree... Done\n0 upgraded, 1 newly installed...' 
    },
  },

  'lpic1-101-2-5': {
    title: 'Pacchetti RPM e YUM/DNF',
    comic: {
      title: 'Il Mondo Fedora e Red Hat 🔴',
      panels: [
        { emoji: '📦', text: 'RPM (Red Hat Package Manager) è lo standard per file .rpm.' },
        { emoji: '🤖', text: 'DNF è l\'evoluzione di YUM: intelligente, veloce e risolve ogni conflitto.' },
        { emoji: '🔑', text: 'Ogni pacchetto è firmato con GPG per garantire che non sia stato manomesso.' },
        { emoji: '🦎', text: 'Su openSUSE troverai Zypper, un cugino molto potente di DNF.' },
      ]
    },
    keyPoints: [
      { title: 'rpm (Basso Livello)', items: ['rpm -i — Installa pacchetto', 'rpm -qa — Mostra tutti i pacchetti installati', 'rpm -qf — Cerca chi ha installato un file', 'rpm -V — Verifica integrità pacchetti'] },
      { title: 'dnf (Alto Livello)', items: ['dnf install — Installa con dipendenze', 'dnf provides — Cerca pacchetto per comando/file', 'dnf repoquery — Info sui pacchetti nei repo', 'dnf history — Elenco azioni passate'] },
    ],
    terminal: { 
      prompt: '$ rpm -qa | grep bash\n$ sudo dnf provides /bin/ls', 
      output: 'bash-5.1.8-2.fc35.x86_64\ncoreutils-8.32-31.fc35.x86_64' 
    },
  },

  'lpic1-101-2-6': {
    title: 'Virtualizzazione Linux',
    comic: {
      title: 'Computer dentro Computer 💻',
      panels: [
        { emoji: '🧪', text: 'Macchine Virtuali: Un intero computer simulato con il suo BIOS e Kernel.' },
        { emoji: '📦', text: 'Container (Docker): Più leggeri, usano il Kernel dell\'host per correre.' },
        { emoji: '☁️', text: 'IaaS: Affitti l\'hardware vuoto. SaaS: Compri l\'account dell\'app già pronta.' },
        { emoji: '🐧', text: 'KVM: Trasforma il tuo Linux in un potente Hypervisor di Classe 1.' },
      ]
    },
    keyPoints: [
      { title: 'Tipi Virtualizzazione', items: ['Type 1 (Bare Metal) — KVM, Xen', 'Type 2 (Hosted) — VirtualBox, VMware', 'OS-Level (Containers) — Docker, LXC, Podman'] },
      { title: 'Cloud Models', items: ['IaaS — Infrastructure (VM, Storage)', 'PaaS — Platform (DB, Web Server)', 'SaaS — Software (Gmail, Office 365)'] },
      { title: 'Strumenti Cloud', items: ['Cloud-init — Configura istanze al primo boot', 'Virt-install — Crea VM da riga di comando', 'SSH Keys — Accesso standard nel cloud'] },
    ],
    terminal: { 
      prompt: '$ kvm-ok\n$ lscpu | grep Virtualization', 
      output: 'INFO: /dev/kvm exists\nKVM acceleration can be used\nVirtualization: VT-x' 
    },
  },

  // ──── Topic 3: Comandi GNU e Unix ────
  'lpic1-101-3-1-1': {
    title: 'Command Line — Base',
    comic: {
      title: 'Parlare con la Shell 🐚',
      panels: [
        { emoji: '⌨️', text: 'Scrivi un comando, premi Invio: la shell lo interpreta ed esegue l\'azione.' },
        { emoji: '🌊', text: 'Bash (Bourne Again Shell) è l\'oceano in cui nuotano quasi tutti i sysadmin.' },
        { emoji: '🔍', text: 'Il PATH è la mappa: se un comando non è lì, la shell non lo trova.' },
        { emoji: '💡', text: 'L\'autocompletamento con Tab è il tuo miglior amico!' },
      ]
    },
    keyPoints: [
      { title: 'Shell Basics', items: ['Bash — Shell predefinita standard POSIX', 'Tasti rapidi — Ctrl+U (cancella riga), Ctrl+C (interrompe)', 'History — Freccia su o comando history'] },
      { title: 'Utility', items: ['type — Ti dice se un comando è builtin o un file', 'which — Mostra il percorso completo di un eseguibile', 'uname -a — Info generali sul sistema'] },
    ],
    terminal: { prompt: '$ type cd\n$ which ls', output: 'cd is a shell builtin\n/usr/bin/ls' },
  },

  'lpic1-101-3-1-2': { title: 'Command Line — Variabili', keyPoints: [{ title: 'Definizione', items: ['LOCALE=valore — Visibile solo nella shell', 'export VAR — Visibile ai processi figli'] }], terminal: { prompt: '$ VAR=test\n$ echo $VAR', output: 'test' } },

  'lpic1-101-3-2-1': { title: 'Filtri di Testo', terminal: { prompt: '$ cat file | sort | uniq -c', output: ' 3 riga1\n 1 riga2' } },

  'lpic1-101-3-3-1': { title: 'Gestione File — Base', terminal: { prompt: '$ ls -l\n$ cp file.txt backup.txt', output: '-rw-r--r-- 1 user user ...' } },

  'lpic1-101-3-3-2': { title: 'Gestione File — Avanzata', terminal: { prompt: '$ find . -name "*.txt"\n$ tar -czf backup.tar.gz folder/', output: './note.txt\n./todo.txt' } },

  'lpic1-101-3-4-1': { title: 'Redirect e Pipe — Base', terminal: { prompt: '$ ls > lista.txt\n$ cat file | grep "test"', output: '...' } },

  'lpic1-101-3-4-2': { title: 'Redirect e Pipe — Avanzati', terminal: { prompt: '$ ls | xargs rm\n$ echo "hi" | tee file.txt', output: '...' } },

  'lpic1-101-3-5-1': { title: 'Processi — Base', terminal: { prompt: '$ ps aux | head', output: 'USER PID %CPU %MEM ...' } },

  'lpic1-101-3-5-2': { title: 'Processi — Job Control', terminal: { prompt: '$ sleep 100 &\n$ jobs', output: '[1]+ Running ...' } },

  'lpic1-101-3-6-1': { title: 'Priorità dei Processi', terminal: { prompt: '$ nice -n 10 cmd\n$ renice +5 -p 1234', output: '...' } },

  'lpic1-101-3-7-1': { title: 'Regex — Base', terminal: { prompt: '$ grep "^root" /etc/passwd', output: 'root:x:0...' } },

  'lpic1-101-3-7-2': { title: 'Regex — Estese', terminal: { prompt: '$ grep -E "a|b" file.txt', output: '...' } },

  'lpic1-101-3-8-1': { title: 'Editor vi/vim', terminal: { prompt: 'vi file.txt\n:wq', output: '[Salva ed esce]' } },

  // ──── Topic 4: Dispositivi, Filesystem Linux e Standard FHS ────
  'lpic1-101-4-1-1': {
    title: 'Partizioni e Filesystem',
    comic: {
      title: 'Preparare il Terreno 🌱',
      panels: [
        { emoji: '🚜', text: 'Fdisk / Gdisk: Definisci i confini del tuo disco rigido (MBR/GPT).' },
        { emoji: '🏗️', text: 'Mkfs: Formatta la "terra" creata con un filesystem (ext4, xfs, btrfs).' },
        { emoji: '🧼', text: 'Swap: Crea la partizione di servizio (mkswap) e attivala (swapon).' },
      ]
    },
    keyPoints: [
      { title: 'Tools Partizioni', items: ['fdisk — Gestione MBR legacy', 'gdisk — Gestione GPT moderna', 'parted — Scriptabile, supporta MBR e GPT'] },
      { title: 'Creazione FS', items: ['mkfs.ext4 — Crea filesystem standard Linux', 'mkfs.xfs — Ideale per file grandi', 'mkswap — Formatta una partizione come Swap'] },
    ],
    terminal: { 
      prompt: '$ sudo fdisk -l /dev/sda\n$ sudo mkfs.ext4 /dev/sda2', 
      output: 'Disk /dev/sda: 20 GiB...\nCreating filesystem with 5242880 4k blocks...' 
    },
  },

  'lpic1-101-4-2-1': { title: 'Integrità dei Filesystem', terminal: { prompt: '$ df -h\n$ du -sh /var/log', output: '/dev/sda1 20G 14G 75%\n245M /var/log' } },

  'lpic1-101-4-3-1': { title: 'Montaggio e Smontaggio', terminal: { prompt: '$ mount /dev/sdb1 /mnt\n$ cat /etc/fstab', output: '...' } },

  'lpic1-101-4-5-1': { title: 'Permessi e Proprietà', terminal: { prompt: '$ ls -l\n$ chmod 755 script.sh', output: '-rwxr-xr-x 1 user user ...' } },

  'lpic1-101-4-6-1': { title: 'Hard e Soft Link', terminal: { prompt: '$ ln -s original link\n$ ls -l link', output: 'lrwxrwxrwx ... link -> original' } },

  'lpic1-101-4-7-1': { title: 'FHS e Posizione File', terminal: { prompt: '$ ls -d /etc /var /usr', output: '/etc /var /usr' } },
}
