export const lpic2_lessonContent = {
  // Topic 200: Capacity Planning
  'lpic2-200-1': {
    title: 'Monitoraggio e Risorse',
    comic: {
      title: 'Dottore, il server scotta! 🩺',
      panels: [
        { emoji: '📉', text: 'Capacity Planning: non aspettare che il server esploda. Prevedi il carico prima che accada!' },
        { emoji: '🧠', text: 'CPU e RAM: mpstat e vmstat sono i tuoi stetoscopi per sentire il battito del sistema.' },
        { emoji: '🚥', text: 'I/O Wait: se il disco è lento, la CPU si annoia e tutto il sistema rallenta.' },
        { emoji: '📊', text: 'Analisi storica: usa collectd o sar per vedere come cambia il carico nel tempo.' },
      ]
    },
    keyPoints: [
      { title: 'Monitoraggio CPU/RAM', items: ['uptime — Carico medio (1, 5, 15 min)', 'vmstat — Statistiche memoria virtuale e swap', 'mpstat — Report dettagliato per ogni core CPU'] },
      { title: 'Monitoraggio I/O e Rete', items: ['iostat — Utilizzo dei dischi e throughput', 'ss / netstat — Stato delle connessioni e socket', 'iftop / nload — Traffico di rete in tempo reale'] },
      { title: 'Analisi Predittiva', items: ['sar (sysstat) — Database storico delle performance', 'Benchmarks — Misurare le prestazioni massime teoriche'] },
    ],
    terminal: { 
      prompt: '$ vmstat 1 5\n$ iostat -xz 1', 
      output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78901 234567    0    0    10    20  100  200  5  2 92  1  0' 
    },
  },

  'lpic2-200-2': {
    title: 'Prevedere i Bisogni Futuri',
    comic: {
      title: 'La Sfera di Cristallo del SysAdmin 🔮',
      panels: [
        { emoji: '📅', text: 'Trend Analysis: se i dati crescono del 10% al mese, quando finirà lo spazio?' },
        { emoji: '📈', text: 'Strumenti Grafici: Cacti, MRTG e Graphite trasformano i numeri in grafici comprensibili.' },
        { emoji: '🔔', text: 'Alerting: imposta soglie critiche. Meglio una mail oggi che un crash domani!' },
        { emoji: '🏗️', text: 'Scaling: decidi se aggiungere potenza (Vertical) o più server (Horizontal).' },
      ]
    },
    keyPoints: [
      { title: 'Monitoraggio Centralizzato', items: ['Collectd — Demone leggero per raccogliere dati', 'Prometheus — Sistema moderno di monitoring e time-series', 'Nagios / Zabbix — Piattaforme di monitoraggio e alerting'] },
      { title: 'Visualizzazione', items: ['Grafana — Dashboard spettacolari per i tuoi dati', 'Cacti — Basato su RRDTool, ideale per grafici storici'] },
    ],
    terminal: { 
      prompt: '$ sar -u -f /var/log/sysstat/sa01', 
      output: '12:00:01 AM     CPU     %user     %nice   %system   %iowait    %steal    %idle\n12:10:01 AM     all      4.50      0.00      1.20      0.10      0.00     94.20' 
    },
  },

  // Topic 201: Linux Kernel
  'lpic2-201-1': {
    title: 'Componenti del Kernel',
    comic: {
      title: 'Cosa c\'è dentro un Kernel? 🧠',
      panels: [
        { emoji: '📦', text: 'Immagine del Kernel: vmlinuz è il cuore compresso e avviabile del sistema.' },
        { emoji: '🏗️', text: 'Initramfs: il piccolo zaino con i driver necessari per montare il vero filesystem.' },
        { emoji: '🧩', text: 'Moduli: perché caricare tutto subito? I moduli (.ko) si caricano solo quando servono.' },
        { emoji: '🩹', text: 'Patching: aggiorna il kernel senza doverlo riscrivere da zero.' },
      ]
    },
    keyPoints: [
      { title: 'Immagini e File', items: ['vmlinuz — Immagine del kernel compressa', 'System.map — Tabella dei simboli per il debug', 'config-X — Opzioni usate durante la compilazione'] },
      { title: 'Avvio e RAM Disk', items: ['initrd / initramfs — Filesystem temporaneo per caricare i moduli root', 'dracut / mkinitrd — Strumenti per generare l\'initramfs'] },
    ],
    terminal: { 
      prompt: '$ ls /boot\n$ file /boot/vmlinuz-$(uname -r)', 
      output: 'vmlinuz-5.15.0-generic: Linux kernel x86 boot executable bzImage, RO-rootFS, swap_dev 0x3, Normal VGA' 
    },
  },

  'lpic2-201-2': {
    title: 'Compilazione del Kernel',
    comic: {
      title: 'Sartoria su misura: Compila il tuo Kernel! 🧵',
      panels: [
        { emoji: '📐', text: 'make menuconfig: scegli con cura quali driver abilitare e quali scartare.' },
        { emoji: '⚙️', text: 'Compilazione: trasforma il codice sorgente in un binario ottimizzato per la tua CPU.' },
        { emoji: '📦', text: 'Installazione: copia i file in /boot e i moduli in /lib/modules.' },
        { emoji: '🚀', text: 'Aggiornamento GRUB: il bootloader deve sapere che c\'è un nuovo pilota in città!' },
      ]
    },
    keyPoints: [
      { title: 'Target di Configurazione', items: ['make menuconfig — Interfaccia grafica (ncurses)', 'make oldconfig — Usa la configurazione del kernel attuale', 'make localmodconfig — Abilita solo i moduli attualmente caricati'] },
      { title: 'Fasi di Build', items: ['make — Compila kernel e moduli', 'make modules_install — Installa in /lib/modules', 'make install — Installa in /boot e aggiorna bootloader'] },
    ],
    terminal: { 
      prompt: '$ make menuconfig\n$ make -j $(nproc)', 
      output: '  HOSTCC  scripts/kconfig/mconf.o\n  HOSTLD  scripts/kconfig/mconf\nscripts/kconfig/mconf  Kconfig\n...' 
    },
  },

  'lpic2-201-3': {
    title: 'Gestione del Kernel a Runtime',
    comic: {
      title: 'Chirurgia a cuore aperto 🩺',
      panels: [
        { emoji: '🔌', text: 'Modinfo: rivela i segreti di un driver prima ancora di caricarlo.' },
        { emoji: '🔧', text: 'Sysctl: modifica i parametri del kernel (rete, memoria) mentre il sistema corre.' },
        { emoji: '⚠️', text: 'Dmesg: ascolta i sussurri (o le urla) del kernel in tempo reale.' },
        { emoji: '💾', text: '/proc/sys: la porta d\'accesso diretta alle viscere del sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Strumenti Moduli', items: ['lsmod — Mostra moduli caricati', 'insmod / rmmod — Carica/Rimuove (senza dipendenze)', 'modprobe -v — Carica con dettagli e dipendenze'] },
      { title: 'Kernel Parameters', items: ['sysctl -a — Elenca tutti i parametri', 'sysctl -w net.ipv4.ip_forward=1 — Abilita il routing', '/etc/sysctl.conf — Rendi le modifiche permanenti'] },
    ],
    terminal: { 
      prompt: '$ modprobe -v xfs\n$ sysctl kernel.hostname', 
      output: 'insmod /lib/modules/5.15.0/kernel/fs/xfs/xfs.ko\nkernel.hostname = linux-server' 
    },
  },

  // Topic 202: System Startup
  'lpic2-202-1': {
    title: 'Personalizzare SysVinit',
    comic: {
      title: 'Il vecchio saggio: SysVinit 🧙‍♂️',
      panels: [
        { emoji: '📜', text: '/etc/inittab: lo spartito che dice al sistema come avviarsi riga per riga.' },
        { emoji: '🔢', text: 'Runlevel: dal nudo e crudo livello 1 (single-user) al lussuoso livello 5 (grafico).' },
        { emoji: '🚦', text: 'Script K e S: chi si ferma e chi parte in ogni livello d\'esecuzione.' },
        { emoji: '🔄', text: 'Telinit q: ricarica la configurazione senza dover riavviare l\'intero villaggio!' },
      ]
    },
    keyPoints: [
      { title: 'File e Directory', items: ['/etc/inittab — Configurazione principale', '/etc/init.d/ — Directory degli script di servizio', '/etc/rc[0-6].d/ — Link simbolici per i runlevel'] },
      { title: 'Comandi Classici', items: ['runlevel — Mostra i livelli attuale e precedente', 'init 6 — Riavvia il sistema', 'telinit q — Ricarica /etc/inittab'] },
    ],
    terminal: { 
      prompt: '$ runlevel\n$ grep :initdefault: /etc/inittab', 
      output: 'N 5\nid:5:initdefault:' 
    },
  },

  'lpic2-202-2': {
    title: 'Recupero del Sistema',
    comic: {
      title: 'Squadra di Soccorso Linux 🚑',
      panels: [
        { emoji: '⌨️', text: 'GRUB Edit: premi \'e\' all\'avvio per dare ordini d\'emergenza al kernel.' },
        { emoji: '🔧', text: 'init=/bin/bash: prendi il controllo del sistema prima ancora che carichi i servizi.' },
        { emoji: '📀', text: 'Live CD / Rescue Mode: monta il tuo sistema ferito in /mnt e opera con chroot.' },
        { emoji: '🛠️', text: 'LILO: il vecchio antenato di GRUB che ancora resiste in alcuni angoli oscuri.' },
      ]
    },
    keyPoints: [
      { title: 'Parametri Boot', items: ['1, s, single — Avvia in modalità utente singolo', 'systemd.unit=rescue.target — Equivalente moderno', 'rd.break — Ferma l\'avvio nell\'initramfs'] },
      { title: 'Tecniche di Recovery', items: ['chroot — Cambia la root directory per riparare il sistema dall\'esterno', 'fsck — Ripara i filesystem danneggiati che impediscono il boot'] },
    ],
    terminal: { 
      prompt: '# mount -o remount,rw /\n# passwd root', 
      output: 'Enter new UNIX password: \nRetype new UNIX password: \npasswd: password updated successfully' 
    },
  },

  'lpic2-202-3': {
    title: 'Bootloaders Avanzati',
    comic: {
      title: 'I Signori del Boot 👑',
      panels: [
        { emoji: '💿', text: 'UEFI vs BIOS: il passaggio dai vecchi settori MBR alle moderne partizioni ESP.' },
        { emoji: '📦', text: 'GRUB 2: flessibile, potente e capace di caricare kernel da quasi ogni filesystem.' },
        { emoji: '🌐', text: 'PXE: avvia il tuo esercito di server direttamente dalla rete, senza dischi locali!' },
        { emoji: '🔑', text: 'Secure Boot: firma digitalmente il tuo kernel per bloccare intrusi indesiderati.' },
      ]
    },
    keyPoints: [
      { title: 'Componenti GRUB 2', items: ['/boot/grub/grub.cfg — File finale (non editare a mano!)', '/etc/default/grub — Variabili di configurazione utente', 'grub-mkconfig — Genera il file finale'] },
      { title: 'Standard Moderni', items: ['GPT — Nuova tabella partizioni per dischi > 2TB', 'ESP — EFI System Partition (FAT32)', 'systemd-boot — Alternativa leggera per sistemi UEFI'] },
    ],
    terminal: { 
      prompt: '$ efibootmgr\n$ grub-install /dev/sda', 
      output: 'BootCurrent: 0001\nBootOrder: 0001,0002\nInstalling for x86_64-efi platform.' 
    },
  },

  // Topic 203: Filesystem and Devices
  'lpic2-203-1': {
    title: 'Operare sui Filesystem',
    comic: {
      title: 'L\'Architetto dei Dischi 🏗️',
      panels: [
        { emoji: '📏', text: 'Tune2fs: regola i parametri dei filesystem ext2/3/4 senza formattare nulla.' },
        { emoji: '🏷️', text: 'LABEL e UUID: dai un nome ai tuoi dischi per non perderli mai nel caos di /dev.' },
        { emoji: '💾', text: 'XFS_info: esplora le geometrie avanzate dei filesystem XFS ad alte prestazioni.' },
        { emoji: '🔧', text: 'Mount -o: aggiungi superpoteri come "noatime" per velocizzare la lettura.' },
      ]
    },
    keyPoints: [
      { title: 'Strumenti di Tuning', items: ['tune2fs -L DATA /dev/sdb1 — Imposta etichetta', 'xfs_admin — Gestisce parametri XFS', 'dumpe2fs — Mostra dettagli tecnici del filesystem'] },
      { title: 'Identificazione', items: ['blkid — Mostra UUID e TYPE di tutti i blocchi', 'findmnt — Vista ad albero dei mount attuali'] },
    ],
    terminal: { 
      prompt: '$ tune2fs -l /dev/sda2 | grep "Filesystem features"', 
      output: 'Filesystem features:      has_journal ext_attr resize_inode dir_index filetype ...' 
    },
  },

  'lpic2-203-2': {
    title: 'Manutenzione Filesystem',
    comic: {
      title: 'Il Meccanico del File 🛠️',
      panels: [
        { emoji: '🔍', text: 'Fsck: il chirurgo che ripara le ferite del filesystem dopo un crash improvviso.' },
        { emoji: '🧠', text: 'SMART: ascolta i presagi del disco rigido prima che muoia definitivamente.' },
        { emoji: '🧹', text: 'Badblocks: scansiona ogni angolo del disco in cerca di settori difettosi.' },
        { emoji: '🧪', text: 'Debugfs: entra nelle viscere del filesystem per recuperare file cancellati.' },
      ]
    },
    keyPoints: [
      { title: 'Salute del Disco', items: ['smartctl -a /dev/sda — Report completo salute hardware', 'smartctl -t short — Avvia un test rapido'] },
      { title: 'Riparazione', items: ['fsck.ext4 -v /dev/sdb1 — Verifica e ripara con dettagli', 'xfs_repair — Strumento specifico per XFS'] },
    ],
    terminal: { 
      prompt: '# smartctl -H /dev/sda', 
      output: '=== START OF READ SMART DATA SECTION ===\nSMART overall-health self-assessment test result: PASSED' 
    },
  },

  'lpic2-203-3': {
    title: 'Gestione dei Dispositivi con udev',
    comic: {
      title: 'Udev: il Vigile Urbano del Kernel 🚨',
      panels: [
        { emoji: '⚡', text: 'Hotplug: inserisci una chiavetta e udev la riconosce in un battito di ciglia.' },
        { emoji: '📜', text: 'Regole Personalizzate: "Se inserisco questo disco, montalo sempre in /backup".' },
        { emoji: '🔍', text: 'Udevadm: lo strumento per interrogare udev e testare le tue nuove regole.' },
        { emoji: '📁', text: '/dev: dove udev crea i nodi per permetterci di parlare con l\'hardware.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione', items: ['/etc/udev/rules.d/ — Dove scrivi le tue regole', '/lib/udev/rules.d/ — Regole di sistema (non toccare)'] },
      { title: 'Comandi di Debug', items: ['udevadm monitor — Guarda gli eventi hardware in tempo reale', 'udevadm info -a -p /sys/class/net/eth0 — Ottieni tutti gli attributi per una regola'] },
    ],
    terminal: { 
      prompt: '$ udevadm monitor --property', 
      output: 'KERNEL[123.456] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)\nUDEV  [123.480] add      /devices/pci0000:00/0000:00:14.0/usb1/ (usb)' 
    },
  },

  // Topic 204: Advanced Storage Device Administration
  'lpic2-204-1': {
    title: 'Configurazione RAID',
    comic: {
      title: 'L\'Unione fa la Forza (e la Sicurezza) 🛡️',
      panels: [
        { emoji: '💿', text: 'RAID: perché affidarsi a un solo disco quando puoi averne un esercito?' },
        { emoji: '⚡', text: 'RAID 0 (Stripe): raddoppia la velocità, ma se un disco muore, perdi tutto!' },
        { emoji: '🪞', text: 'RAID 1 (Mirror): ogni dato ha un gemello. Massima sicurezza, metà spazio.' },
        { emoji: '🏗️', text: 'RAID 5/6: il magico equilibrio tra velocità, spazio e tolleranza ai guasti.' },
      ]
    },
    keyPoints: [
      { title: 'Livelli RAID comuni', items: ['RAID 0 — Prestazioni pure (no ridondanza)', 'RAID 1 — Duplicazione (alta disponibilità)', 'RAID 5 — Parità distribuita (tollera 1 guasto)', 'RAID 6 — Doppia parità (tollera 2 guasti)'] },
      { title: 'Strumenti Software RAID', items: ['mdadm — Il comando universale per il software RAID in Linux', '/proc/mdstat — Finestra in tempo reale sullo stato degli array'] },
    ],
    terminal: { 
      prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', 
      output: 'md0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' 
    },
  },

  'lpic2-204-2': {
    title: 'Regolazione Dispositivi di Storage',
    comic: {
      title: 'Ottimizzazione estrema 🚀',
      panels: [
        { emoji: '🏎️', text: 'Hdparm: sposta i limiti del tuo vecchio disco meccanico per spremerne ogni goccia.' },
        { emoji: '🌠', text: 'NVMe: entra nell\'era del flash con protocolli nati per la velocità pura.' },
        { emoji: '⚡', text: 'SD Card / SSD: gestisci i parametri di scrittura per allungare la vita delle tue memorie.' },
        { emoji: '🛠️', text: 'Smartctl (ancora lui): perché prevenire è meglio che piangere sui dati persi.' },
      ]
    },
    keyPoints: [
      { title: 'Ottimizzazione', items: ['hdparm -tT /dev/sda — Test di velocità lettura (cache e disco)', 'hdparm -S 120 /dev/sda — Imposta lo standby del disco (10 minuti)'] },
      { title: 'Tecnologie Moderne', items: ['nvme-cli — Strumento per gestire i moderni dischi NVMe', 'SSD Trim — Mantieni le prestazioni nel tempo liberando i blocchi inutilizzati'] },
    ],
    terminal: { 
      prompt: '$ hdparm -I /dev/sda | grep "Model Number"', 
      output: 'Model Number:       WDC WDS250G2B0A-00SM50' 
    },
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM)',
    comic: {
      title: 'Dischi come Mattoncini Lego 🧱',
      panels: [
        { emoji: '📦', text: 'PV (Physical Volume): trasforma i tuoi dischi rigidi in materia prima.' },
        { emoji: '🏗️', text: 'VG (Volume Group): unisci i PV in un unico grande calderone di spazio.' },
        { emoji: '🍰', text: 'LV (Logical Volume): taglia le fette che ti servono e ingrandiscile a piacere.' },
        { emoji: '📸', text: 'Snapshot: ferma il tempo e scatta una foto al tuo sistema prima di un aggiornamento rischioso.' },
      ]
    },
    keyPoints: [
      { title: 'Gerarchia LVM', items: ['pvcreate / pvdisplay — Gestione dischi fisici', 'vgcreate / vgextend — Gestione gruppi di volumi', 'lvcreate / lvextend — Gestione volumi logici'] },
      { title: 'Vantaggi', items: ['Resize Online — Ingrandisci le partizioni senza riavviare', 'Snapshots — Backup consistenti e test rapidi'] },
    ],
    terminal: { 
      prompt: '# pvs\n# vgs\n# lvs', 
      output: 'PV         VG    Fmt  Attr PSize   PFree \n /dev/sda3  vg0   lvm2 a--  230.00g 4.00g\n LV      VG   Attr       LSize  \n root    vg0  -wi-ao---- 40.00g\n home    vg0  -wi-ao---- 186.00g' 
    },
  },

  // Topic 205: Network Configuration
  'lpic2-205-1': {
    title: 'Configurazioni di Rete Base',
    comic: {
      title: 'Cittadini della Rete 🌐',
      panels: [
        { emoji: '📍', text: 'Indirizzamento: ogni macchina ha bisogno di un nome e di un posto dove stare.' },
        { emoji: '🗺️', text: 'Routing: "Se non sai dove andare, chiedi al Gateway predefinito".' },
        { emoji: '🔌', text: 'Interfacce: Ethernet, Wi-Fi o interfacce virtuali per container e VM.' },
        { emoji: '🛠️', text: 'Iproute2: la nuova potente suite che ha mandato in pensione il vecchio ifconfig.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione IP', items: ['ip addr show — Visualizza indirizzi e interfacce', 'ip route show — Visualizza la tabella di routing', 'ip -6 addr — Configurazione IPv6'] },
      { title: 'Persistenza', items: ['Debian/Ubuntu: /etc/network/interfaces o Netplan', 'RHEL/CentOS: /etc/sysconfig/network-scripts/ o NetworkManager'] },
    ],
    terminal: { 
      prompt: '$ ip addr show eth0\n$ ip route', 
      output: 'inet 192.168.1.50/24 brd 192.168.1.255 scope global eth0\ndefault via 192.168.1.1 dev eth0 proto dhcp metric 100' 
    },
  },

  'lpic2-205-2': {
    title: 'Configurazioni di Rete Avanzate',
    comic: {
      title: 'Ponti e Canali 🌉',
      panels: [
        { emoji: '🔗', text: 'Bonding: unisci più schede di rete per avere il doppio della banda o tolleranza ai guasti.' },
        { emoji: '🌉', text: 'Bridging: crea un ponte virtuale per far comunicare le tue Macchine Virtuali col mondo.' },
        { emoji: '📡', text: 'Wi-Fi Professionale: gestisci le tue connessioni senza fili tramite la riga di comando.' },
        { emoji: '🚀', text: 'Traffic Control (tc): rallenta i download dei colleghi per dare priorità ai tuoi server!' },
      ]
    },
    keyPoints: [
      { title: 'Tecniche Avanzate', items: ['Bonding — Aggregazione di link (LACP, Round-robin)', 'Bridging — Usato tipicamente in virtualizzazione (br0)'] },
      { title: 'Wireless', items: ['iw / iwconfig — Strumenti per interfacce 802.11', 'wpa_supplicant — Gestore autenticazione WPA/WPA2'] },
    ],
    terminal: { 
      prompt: '$ ip link add name br0 type bridge\n$ iw dev wlan0 scan', 
      output: 'BSS 00:11:22:33:44:55 (on wlan0)\n  SSID: Ufficio_Linux\n  signal: -45.00 dBm' 
    },
  },

  'lpic2-205-3': {
    title: 'Troubleshooting di Rete',
    comic: {
      title: 'Detective dei Pacchetti 🕵️‍♂️',
      panels: [
        { emoji: '👂', text: 'Tcpdump: ascolta ogni singolo bit che passa sulla tua scheda di rete.' },
        { emoji: '🔬', text: 'Wireshark: il microscopio per analizzare i pacchetti con un\'interfaccia grafica.' },
        { emoji: '📡', text: 'Nmap: bussa a ogni porta del server per vedere chi risponde.' },
        { emoji: '🔎', text: 'Netstat/SS: chi sta ascoltando? Controlla quali processi aprono socket.' },
      ]
    },
    keyPoints: [
      { title: 'Analisi Traffico', items: ['tcpdump -i eth0 -n — Analisi live (senza risoluzione DNS)', 'nc (netcat) — Il coltellino svizzero della rete'] },
      { title: 'Scansione e Socket', items: ['nmap -sV target — Scansione porte e versioni servizi', 'ss -tulpn — Visualizza socket in ascolto con PID'] },
    ],
    terminal: { 
      prompt: '# tcpdump -c 2 -i eth0\n# nmap -p 80,443 google.com', 
      output: 'IP 192.168.1.50.5566 > 8.8.8.8.53: 123+ A? google.com\nPORT    STATE SERVICE\n80/tcp  open  http\n443/tcp open  https' 
    },
  },

  // Topic 206: System Maintenance
  'lpic2-206-1': {
    title: 'Compilazione e Installazione',
    comic: {
      title: 'Sarto Digitale: Compila il tuo Software 🧵',
      panels: [
        { emoji: '📦', text: 'Sorgenti: scarica il codice grezzo (tarball) per avere l\'ultima versione disponibile.' },
        { emoji: '🛠️', text: './configure: controlla se hai tutti gli strumenti necessari per costruire il programma.' },
        { emoji: '⚙️', text: 'Make: trasforma migliaia di righe di codice in un binario pronto all\'uso.' },
        { emoji: '🚀', text: 'Make install: piazza il programma nelle directory di sistema come /usr/local/bin.' },
      ]
    },
    keyPoints: [
      { title: 'Fasi di Compilazione', items: ['./configure — Configura e controlla dipendenze', 'make — Compila il codice sorgente', 'make install — Installa i file binari'] },
      { title: 'Gestione Sorgenti', items: ['tar -xvf — Estrae l\'archivio dei sorgenti', 'patch — Applica correzioni al codice esistente'] },
    ],
    terminal: { 
      prompt: '$ ./configure --prefix=/opt/myapp\n$ make && sudo make install', 
      output: 'checking for gcc... yes\nchecking for X11... yes\ncreating Makefile\n... Installation complete.' 
    },
  },

  'lpic2-206-2': {
    title: 'Operazioni di Backup',
    comic: {
      title: 'L\'Assicurazione sulla Vita dei Dati 💾',
      panels: [
        { emoji: '🛡️', text: 'Backup: non chiederti SE il disco morirà, ma QUANDO. Sii pronto!' },
        { emoji: '🔄', text: 'Rsync: il genio che copia solo le parti di file che sono cambiate, risparmiando tempo.' },
        { emoji: '📦', text: 'Tar: impacchetta interi filesystem in un unico file, pronto per l\'archiviazione.' },
        { emoji: '☁️', text: 'Off-site: tieni una copia dei dati lontano dal server (es: nel cloud o in un altro edificio).' },
      ]
    },
    keyPoints: [
      { title: 'Tipi di Backup', items: ['Full — Copia completa di tutti i dati', 'Incremental — Solo ciò che è cambiato dall\'ultimo backup', 'Differential — Solo ciò che è cambiato dall\'ultimo full'] },
      { title: 'Strumenti', items: ['rsync -avz — Sincronizzazione atomica e compressa', 'tar -cvf — Crea archivi di file e directory', 'mt — Gestisce i nastri magnetici (legacy)'] },
    ],
    terminal: { 
      prompt: '$ rsync -av /home/ /backup/home/', 
      output: 'sending incremental file list\nuser1/file.txt\nuser2/photo.jpg\n\nsent 1,234 bytes  received 56 bytes  2,580 bytes/sec' 
    },
  },

  'lpic2-206-3': {
    title: 'Notifiche agli Utenti',
    comic: {
      title: 'L\'Araldo del Sistema 📢',
      panels: [
        { emoji: '🔔', text: 'Wall: urla un messaggio a tutti gli utenti collegati in questo momento.' },
        { emoji: '📅', text: '/etc/motd: il messaggio del giorno che gli utenti leggono a ogni login.' },
        { emoji: '📔', text: '/etc/issue: la scritta di benvenuto prima ancora di inserire la password.' },
        { emoji: '🛑', text: 'Shutdown: avvisa tutti che il server sta per andare a nanna per manutenzione.' },
      ]
    },
    keyPoints: [
      { title: 'Messaggi Diretti', items: ['wall — Messaggio a tutti i terminali aperti', 'write — Messaggio a un singolo utente specifico'] },
      { title: 'Messaggi Statici', items: ['/etc/motd — Message Of The Day (dopo il login)', '/etc/issue — Banner pre-login (locale)', '/etc/issue.net — Banner pre-login (remoto/SSH)'] },
    ],
    terminal: { 
      prompt: '# wall "Manutenzione prevista alle 22:00"', 
      output: 'Broadcast message from root@linux-server (pts/0) (Wed Mar  6 21:00:00 2024):\nManutenzione prevista alle 22:00' 
    },
  },

  // Topic 207: Domain Name Server
  'lpic2-207-1': {
    title: 'Configurazione Base DNS',
    comic: {
      title: 'L\'Elenco Telefonico del Web 📖',
      panels: [
        { emoji: '🌐', text: 'DNS: trasforma nomi mnemonici (google.it) in indirizzi numerici (IP).' },
        { emoji: '🏗️', text: 'BIND: il server DNS più diffuso e potente della storia di Internet.' },
        { emoji: '🗺️', text: 'Gerarchia: dai server Root (.) ai domini di primo livello (.it) e oltre.' },
        { emoji: '🔎', text: 'Query: chiedi ricorsivamente a chi sa finché non trovi la risposta giusta.' },
      ]
    },
    keyPoints: [
      { title: 'Componenti BIND', items: ['named — Il demone del servizio DNS', '/etc/bind/named.conf — Configurazione principale', 'rndc — Strumento di controllo remoto del servizio'] },
      { title: 'Tipi di Server', items: ['Master — Contiene la zona originale e modificabile', 'Slave — Copia la zona dal master per ridondanza (Zone Transfer)'] },
    ],
    terminal: { 
      prompt: '$ dig google.it\n# systemctl status bind9', 
      output: ';; ANSWER SECTION:\ngoogle.it.		300	IN	A	142.250.184.67' 
    },
  },

  'lpic2-207-2': {
    title: 'Creare e Gestire Zone',
    comic: {
      title: 'Il Catasto dei Domini 🗺️',
      panels: [
        { emoji: '📝', text: 'Record A: il collegamento base tra un nome e un indirizzo IPv4.' },
        { emoji: '📛', text: 'CNAME: un soprannome per un host che ha già un nome principale.' },
        { emoji: '📧', text: 'MX: indica al mondo quale server deve ricevere la posta per il tuo dominio.' },
        { emoji: '🔄', text: 'SOA: l\'atto di nascita della zona con i tempi di refresh e seriale.' },
      ]
    },
    keyPoints: [
      { title: 'Record DNS Comuni', items: ['A / AAAA — Nome -> IPv4 / IPv6', 'PTR — IP -> Nome (Zona Inversa)', 'TXT — Testo libero (usato per SPF, DKIM)', 'NS — Indica i Name Servers autoritativi'] },
      { title: 'Gestione Zone', items: ['Standard serial: AAAAMMGGNN (es. 2024030601)', 'named-checkzone — Verifica gli errori prima di caricare la zona'] },
    ],
    terminal: { 
      prompt: '# named-checkzone esempio.it /etc/bind/db.esempio.it', 
      output: 'zone esempio.it/IN: loaded serial 2024030601\nOK' 
    },
  },

  'lpic2-207-3': {
    title: 'Sicurezza e DNS Avanzato',
    comic: {
      title: 'DNS sotto Scudo 🛡️',
      panels: [
        { emoji: '🔐', text: 'DNSSEC: firma digitalmente le zone per evitare che qualcuno ti mandi su siti falsi.' },
        { emoji: '🚫', text: 'Access Control: decidi chi può fare query o chiedere trasferimenti di zona.' },
        { emoji: '🔭', text: 'TSIG: usa chiavi segrete per autenticare la comunicazione tra Master e Slave.' },
        { emoji: '🏰', text: 'Chroot: chiudi BIND in una prigione virtuale per proteggere il resto del sistema.' },
      ]
    },
    keyPoints: [
      { title: 'Protezione', items: ['allow-query — Limita chi può interrogare il server', 'allow-transfer — Limita chi può copiare la zona (molto importante!)'] },
      { title: 'Meccanismi Avanzati', items: ['Split DNS — Mostra dati diversi agli utenti interni rispetto a quelli esterni', 'TSIG — Chiavi per Zone Transfer sicuri'] },
    ],
    terminal: { 
      prompt: '$ rndc stats\n$ dig @localhost example.it AXFR', 
      output: '; Transfer failed. (Permesso negato se configurato bene!)' 
    },
  },

  // Topic 208: Web Services
  'lpic2-208-1': {
    title: 'Configurazione Apache',
    comic: {
      title: 'L\'Host del Sito 🏠',
      panels: [
        { emoji: '🌐', text: 'Apache HTTP Server: il re dei web server, flessibile e intramontabile.' },
        { emoji: '📂', text: 'VirtualHost: ospita cento siti diversi sullo stesso server senza che si diano noia.' },
        { emoji: '🧩', text: 'Moduli: abilita rewrite, proxy o php con un semplice comando.' },
        { emoji: '🔎', text: 'Log: spia chi visita il tuo sito e scopri perché quella pagina dà errore 404.' },
      ]
    },
    keyPoints: [
      { title: 'Struttura Apache', items: ['/etc/apache2/ (Debian) o /etc/httpd/ (RHEL)', 'apache2ctl configtest — Verifica la sintassi prima di riavviare'] },
      { title: 'Virtual Hosting', items: ['Name-based VirtualHost — Più siti su un unico IP', 'ServerName / ServerAlias — Definisci i nomi del sito'] },
    ],
    terminal: { 
      prompt: '# a2ensite miosito.conf\n# systemctl reload apache2', 
      output: 'Enabling site miosito.\nTo activate the new configuration, you need to run:\n  systemctl reload apache2' 
    },
  },

  'lpic2-208-2': {
    title: 'HTTPS e Sicurezza Web',
    comic: {
      title: 'Il Lucchetto Verde 🔒',
      panels: [
        { emoji: '🔐', text: 'SSL/TLS: cripta la conversazione tra browser e server per tenere i segreti al sicuro.' },
        { emoji: '📜', text: 'Certificati: la carta d\'identità del tuo sito, rilasciata da un\'autorità fidata.' },
        { emoji: '🏎️', text: 'HTTP/2: la nuova corsia preferenziale per rendere il caricamento delle pagine fulmineo.' },
        { emoji: '🛡️', text: 'HSTS: obbliga il browser a usare sempre e solo connessioni sicure.' },
      ]
    },
    keyPoints: [
      { title: 'Certificati', items: ['CSR (Certificate Signing Request) — La richiesta per l\'ente', 'SSLCertificateFile / SSLCertificateKeyFile — Configurazione Apache'] },
      { title: 'Strumenti', items: ['OpenSSL — Il coltellino svizzero per generare chiavi e certificati', 'Let\'s Encrypt — Certificati gratuiti e automatici'] },
    ],
    terminal: { 
      prompt: '$ openssl x509 -in cert.crt -text -noout', 
      output: 'Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: ...\n        Subject: CN = miosito.it' 
    },
  },

  'lpic2-208-3': {
    title: 'Nginx e Proxy Reversì',
    comic: {
      title: 'L\'Alternativa scattante: Nginx ⚡',
      panels: [
        { emoji: '🚀', text: 'Nginx: leggero, asincrono e nato per gestire migliaia di connessioni simultanee.' },
        { emoji: '🔀', text: 'Reverse Proxy: metti Nginx davanti ai tuoi server per proteggerli e bilanciare il carico.' },
        { emoji: '💨', text: 'Caching: salva i file statici in memoria per servire le immagini in un millesimo di secondo.' },
        { emoji: '🛡️', text: 'WAF: usa Nginx come scudo contro attacchi web comuni.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione Nginx', items: ['/etc/nginx/nginx.conf — Configurazione globale', 'server { ... } — Definizione del sito (simile al VirtualHost)'] },
      { title: 'Reverse Proxy', items: ['proxy_pass — Inoltra la richiesta a un altro server (es: Node.js o Java)'] },
    ],
    terminal: { 
      prompt: '$ nginx -t\n# systemctl restart nginx', 
      output: 'nginx: the configuration file /etc/nginx/nginx.conf syntax is ok\nnginx: configuration file /etc/nginx/nginx.conf test is successful' 
    },
  },

  // Topic 209: File Sharing
  'lpic2-209-1': {
    title: 'Samba: il Ponte tra Linux e Windows',
    comic: {
      title: 'Due Mondi, Uno Stesso Disco 🤝',
      panels: [
        { emoji: '🌉', text: 'Samba: il protocollo SMB che permette a Windows di vedere Linux come un server di file.' },
        { emoji: '👥', text: 'Domain Controller: gestisci utenti e permessi centralizzati con Active Directory.' },
        { emoji: '📂', text: 'Condivisioni: definisci quali cartelle sono pubbliche e quali riservate.' },
        { emoji: '📝', text: 'Smb.conf: il cuore della configurazione di Samba.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione', items: ['[global] — Impostazioni di rete e sicurezza', '[share] — Definizione della cartella condivisa'] },
      { title: 'Strumenti', items: ['testparm — Verifica la sintassi del file smb.conf', 'smbpasswd -a user — Aggiungi un utente a Samba'] },
    ],
    terminal: { 
      prompt: '$ testparm\n# smbstatus', 
      output: 'Load smb config files from /etc/samba/smb.conf\nLoaded services file OK.\n\nSamba version 4.15.5\nPID     Username     Group        Machine' 
    },
  },

  'lpic2-209-2': {
    title: 'NFS: Condivisione Nativa Linux',
    comic: {
      title: 'Network File System: Trasparenza Pura 📁',
      panels: [
        { emoji: '🔌', text: 'NFS: monta dischi remoti sulla tua rete locale come se fossero interni.' },
        { emoji: '🛡️', text: 'Exports: decidi quali IP possono accedere e con quali permessi (read-only o rw).' },
        { emoji: '🧱', text: 'RPC: i piccoli messaggeri che permettono a NFS di parlare tra i server.' },
        { emoji: '⚡', text: 'NFSv4: l\'evoluzione moderna con miglior sicurezza e gestione firewall.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione', items: ['/etc/exports — Il registro delle cartelle condivise e permessi', 'exportfs -a — Applica le modifiche alle esportazioni'] },
      { title: 'Opzioni Mount', items: ['soft/hard — Decide cosa succede se il server si scollega', 'proto=tcp — Usa il protocollo TCP invece di UDP'] },
    ],
    terminal: { 
      prompt: '# exportfs -v\n$ mount -t nfs server:/data /mnt/remoto', 
      output: '/data  192.168.1.0/24(rw,wdelay,no_root_squash,no_subtree_check)' 
    },
  },

  // Topic 210: Network Client Management
  'lpic2-210-1': {
    title: 'DHCP: Indirizzi in automatico',
    comic: {
      title: 'Benvenuti nel Condominio IP 🏢',
      panels: [
        { emoji: '📡', text: 'DHCP: il portiere che assegna una stanza (IP) a ogni nuovo ospite del sistema.' },
        { emoji: '⏱️', text: 'Lease Time: l\'IP è tuo solo per un po\'. Non dimenticare di rinnovare il contratto!' },
        { emoji: '📍', text: 'Prenotazioni: "Quel server deve avere sempre la stanza 101". Usa il suo MAC address.' },
        { emoji: '📝', text: 'Dhcpd.conf: la tabella dove scrivi le regole di assegnazione.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione DHCP', items: ['subnet { ... } — Definisce il range di IP', 'option routers — Indica il gateway predefinito', 'option domain-name-servers — Indica i DNS'] },
      { title: 'Relay Agent', items: ['dhcrelay — Permette di far passare le richieste DHCP attraverso diversi segmenti di rete'] },
    ],
    terminal: { 
      prompt: '# tail -f /var/lib/dhcp/dhcpd.leases', 
      output: 'lease 192.168.1.100 {\n  starts 5 2024/03/06 10:00:00;\n  ends 6 2024/03/07 10:00:00;\n  hardware ethernet 00:11:22:33:44:55;\n}' 
    },
  },

  'lpic2-210-2': {
    title: 'Autenticazione con PAM',
    comic: {
      title: 'PAM: il Buttafuori Modulare 🛡️',
      panels: [
        { emoji: '🚪', text: 'PAM (Pluggable Authentication Modules): un unico sistema per gestire ogni tipo di login.' },
        { emoji: '🧩', text: 'Moduli: cambia il modo di autenticarti senza dover riscrivere i programmi.' },
        { emoji: '📋', text: 'Stack: "Prima chiedi la password, poi controlla se l\'utente è nel gruppo giusto".' },
        { emoji: '🔐', text: 'Sicurezza: forza password robuste e blocca gli utenti dopo troppi errori.' },
      ]
    },
    keyPoints: [
      { title: 'Tipi di Modulo', items: ['auth — Verifica l\'identità (password)', 'account — Controlla se l\'account è valido/scaduto', 'password — Gestisce il cambio password', 'session — Operazioni pre/post login'] },
      { title: 'Configurazione', items: ['/etc/pam.d/ — Directory con le configurazioni per ogni servizio (sshd, login, etc)'] },
    ],
    terminal: { 
      prompt: '$ cat /etc/pam.d/common-auth', 
      output: 'auth    required    pam_unix.so nullok_secure\nauth    optional    pam_cap.so' 
    },
  },

  'lpic2-210-3': {
    title: 'Client LDAP',
    comic: {
      title: 'L\'Anagrafe Centralizzata 📂',
      panels: [
        { emoji: '📋', text: 'LDAP: un elenco super efficiente per trovare utenti e gruppi in tutta l\'azienda.' },
        { emoji: '🔍', text: 'Query: trova subito chi è il responsabile IT o qual è la mail di Mario.' },
        { emoji: '🌐', text: 'Single Sign-On: una sola password per accedere a tutti i computer dell\'ufficio.' },
        { emoji: '⚡', text: 'NSS: spiega a Linux di cercare gli utenti non solo in /etc/passwd, ma anche su LDAP.' },
      ]
    },
    keyPoints: [
      { title: 'Strumenti LDAP', items: ['ldapsearch — Interroga il database LDAP da terminale', 'ldapadd / ldapmodify — Gestisci i dati nel database'] },
      { title: 'Servizio NSS', items: ['/etc/nsswitch.conf — Configura l\'ordine di ricerca degli utenti (files ldap)'] },
    ],
    terminal: { 
      prompt: '$ ldapsearch -x -b "dc=esempio,dc=it" "(uid=mario)"', 
      output: 'dn: uid=mario,ou=People,dc=esempio,dc=it\nobjectClass: posixAccount\nuid: mario\nmail: mario@esempio.it' 
    },
  },

  'lpic2-210-4': {
    title: 'OpenVPN',
    comic: {
      title: 'Tunnel Privati sul Web 🚇',
      panels: [
        { emoji: '🌫️', text: 'VPN (Virtual Private Network): crea un tunnel sicuro attraverso l\'Internet pubblico.' },
        { emoji: '🔐', text: 'Crittografia: nessuno può spiare i dati che passano dentro il tunnel.' },
        { emoji: '🏠', text: 'Smart-working: lavora da casa come se fossi seduto alla tua scrivania in ufficio.' },
        { emoji: '🔑', text: 'Certificati TLS: usa le chiavi per garantire che solo i dispositivi autorizzati entrino.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione OpenVPN', items: ['/etc/openvpn/server.conf — Impostazioni server', '/etc/openvpn/client.conf — Impostazioni client'] },
      { title: 'Modalità', items: ['Tun (Routing) — Crea un tunnel IP (più comune)', 'Tap (Bridging) — Simula una scheda di rete Ethernet'] },
    ],
    terminal: { 
      prompt: '# systemctl start openvpn@server\n$ ip addr show tun0', 
      output: 'tun0: <POINTOPOINT,MULTICAST,NOARP,UP,LOWER_UP> mtu 1500 qdisc ...\n    inet 10.8.0.1 peer 10.8.0.2/32 scope global tun0' 
    },
  },

  // Topic 211: E-Mail Services
  'lpic2-211-1': {
    title: 'Server SMTP (Postfix)',
    comic: {
      title: 'Il Postino Digitale 📩',
      panels: [
        { emoji: '📨', text: 'SMTP: il protocollo che spedisce le tue lettere digitali da un server all\'altro.' },
        { emoji: '🏤', text: 'Postfix: affidabile, veloce e facilissimo da configurare rispetto al vecchio Sendmail.' },
        { emoji: '🛑', text: 'Anti-Spam: blocca le tonnellate di mail indesiderate prima che arrivino agli utenti.' },
        { emoji: '📋', text: 'Main.cf: il file dove istruisci il postino su come comportarsi.' },
      ]
    },
    keyPoints: [
      { title: 'Configurazione Postfix', items: ['myhostname — Il nome del tuo server di posta', 'mynetworks — Chi è autorizzato a spedire mail senza password', 'relayhost — Invia la posta tramite un altro server (es. provider)'] },
      { title: 'Alias e Code', items: ['/etc/aliases — Indirizzi fittizi (es: info -> mario)', 'mailq — Controlla la coda delle mail in attesa di invio'] },
    ],
    terminal: { 
      prompt: '$ postconf -n\n$ mailq', 
      output: 'myhostname = mail.esempio.it\ndestinations = $myhostname, localhost\nMail queue is empty' 
    },
  },

  'lpic2-211-2': {
    title: 'Gestione Delivery e Filtri',
    comic: {
      title: 'Smistamento Pacchi 📦',
      panels: [
        { emoji: '🧹', text: 'Procmail/Sieve: il sistema automatico che sposta le mail nelle cartelle giuste.' },
        { emoji: '⚖️', text: 'Quotas: non lasciare che un solo utente riempia tutto il disco del server!' },
        { emoji: '🚫', text: 'SpamAssasin: analizza il contenuto della mail e assegna un punteggio di "pericolosità".' },
        { emoji: '🦠', text: 'ClamAV: scansiona ogni allegato in cerca di virus nascosti.' },
      ]
    },
    keyPoints: [
      { title: 'Delivery', items: ['Maildir/ — Un file per ogni mail (moderno e veloce)', 'mbox — Tutte le mail in un unico file (vecchio stile)'] },
      { title: 'Protocolli Accesso', items: ['IMAP — Le mail restano sul server (ottimo per più dispositivi)', 'POP3 — Scarichi le mail e le togli dal server'] },
    ],
    terminal: { 
      prompt: '$ cat .forward\n$ doveconf -n', 
      output: '"|/usr/bin/procmail"\n# Dovecot v2.3.16 configuration' 
    },
  },

  'lpic2-211-3': {
    title: 'Accedere alla Posta (Dovecot)',
    comic: {
      title: 'La tua Cassetta delle Lettere 📮',
      panels: [
        { emoji: '🗝️', text: 'Dovecot: il server che apre la tua cassetta delle lettere quando usi Outlook o Thunderbird.' },
        { emoji: '🔐', text: 'IMAPS/POPS: proteggi la tua password con la crittografia durante la lettura.' },
        { emoji: '💼', text: 'Shared Folders: condividi una cartella di posta tra più colleghi.' },
        { emoji: '📊', text: 'Monitoraggio: tieni d\'occhio quanti utenti sono collegati contemporaneamente.' },
      ]
    },
    keyPoints: [
      { title: 'Ruolo di Dovecot', items: ['MDA (Mail Delivery Agent) — Consegna la mail sul disco', 'MRA (Mail Retrieval Agent) — Permette al client di leggerla'] },
      { title: 'Autenticazione', items: ['Può usare gli utenti di sistema o integrarsi con database LDAP/MySQL'] },
    ],
    terminal: { 
      prompt: '$ openssl s_client -connect localhost:993', 
      output: '* OK [CAPABILITY IMAP4rev1 SASL-IR ...] Dovecot ready.' 
    },
  },

  // Topic 212: System Security
  'lpic2-212-1': {
    title: 'Configurare un Firewall (iptables)',
    comic: {
      title: 'Le Mura della Città 🏰',
      panels: [
        { emoji: '🛡️', text: 'Iptables/Netfilter: il muro di fuoco che decide quali dati possono entrare o uscire.' },
        { emoji: '🚦', text: 'Chain: INPUT (per il server), OUTPUT (dal server), FORWARD (attraverso il server).' },
        { emoji: '🛑', text: 'Target: ACCEPT (lascia passare), DROP (ignora), REJECT (rifiuta e avvisa).' },
        { emoji: '⚡', text: 'Stateful: il firewall ricorda chi ha iniziato la conversazione e lascia passare le risposte.' },
      ]
    },
    keyPoints: [
      { title: 'Tabelle e Catene', items: ['Filter (default) — Per il filtraggio pacchetti', 'NAT — Per cambiare gli indirizzi (es: router)', 'INPUT / OUTPUT / FORWARD: Catene principali'] },
      { title: 'Sintassi', items: ['iptables -A INPUT -p tcp --dport 22 -j ACCEPT — Apri SSH', 'iptables -P INPUT DROP — Chiudi tutto il resto'] },
    ],
    terminal: { 
      prompt: '# iptables -L -n -v', 
      output: 'Chain INPUT (policy DROP 10 packets, 600 bytes)\n pkts bytes target     prot opt in     out     source               destination         \n  500 40000 ACCEPT     all  --  lo     *       0.0.0.0/0            0.0.0.0/0' 
    },
  },

  'lpic2-212-2': {
    title: 'Sicurezza Locale e Intrusioni',
    comic: {
      title: 'Sentinelle Digitali 👮',
      panels: [
        { emoji: '👁️', text: 'Fail2Ban: guarda chi sbaglia troppe password e banna il loro IP automaticamente.' },
        { emoji: '🕵️‍♂️', text: 'Rootkit Hunter: cerca tracce di hacker che potrebbero essersi nascosti nel sistema.' },
        { emoji: '📜', text: 'Logwatch: ti riassume ogni mattina via mail tutto ciò che è successo di strano sul server.' },
        { emoji: '🔒', text: 'Sudoers: non dare chiavi universali, dai solo i permessi che servono veramente.' },
      ]
    },
    keyPoints: [
      { title: 'Strumenti di Difesa', items: ['rkhunter / chkrootkit — Scansione alla ricerca di malware', 'aide / tripwire — Controlla se i file di sistema sono stati modificati'] },
      { title: 'Monitoraggio Accessi', items: ['last — Ultime persone loggate', 'faillog — Report dei login falliti'] },
    ],
    terminal: { 
      prompt: '# rkhunter --check', 
      output: '[...] Checking for rootkits... [ None found ]\n[...] Checking system commands... [ OK ]' 
    },
  },

  'lpic2-212-3': {
    title: 'Sicurezza SSH Avanzata',
    comic: {
      title: 'Una Serratura Blindata 🔑',
      panels: [
        { emoji: '🚪', text: 'SSH: il tuo tunnel segreto per gestire il server da lontano.' },
        { emoji: '🚫', text: 'No Password: usa le chiavi Pubbliche/Private. Molto più sicuro e comodo!' },
        { emoji: '🕵️‍♂️', text: 'Audit: registra ogni comando eseguito per sapere chi ha fatto cosa.' },
        { emoji: '🛡️', text: 'Configurazione Hardening: cambia porta, disabilita il login diretto di root.' },
      ]
    },
    keyPoints: [
      { title: 'Hardening SSH', items: ['PermitRootLogin no — Vieta il login diretto come root', 'PasswordAuthentication no — Forza l\'uso delle chiavi', 'Port 2222 — Cambia la porta di default'] },
      { title: 'Gestione Chiavi', items: ['ssh-keygen — Genera la tua coppia di chiavi', 'ssh-copy-id — Invia la tua chiave pubblica al server'] },
    ],
    terminal: { 
      prompt: '$ ssh-copy-id user@server\n# grep "FAILED" /var/log/auth.log', 
      output: '/usr/bin/ssh-copy-id: INFO: 1 key(s) remained to be installed\nuser@server\'s password: \nNumber of key(s) added: 1' 
    },
  },
}
