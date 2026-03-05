export const topic4Extended = {
  '4-1': {
    title: 'Scelta di un Sistema Operativo',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Categorie di Sistemi Operativi' },
      { type: 'paragraph', text: 'La scelta del sistema operativo dipende dal caso d\'uso. Linux offre soluzioni per ogni scenario, dalla workstation desktop al data center enterprise, dai dispositivi IoT al cloud.' },
      { type: 'table', headers: ['Categoria', 'Caratteristiche', 'Distribuzioni tipiche', 'Esempio d\'uso'], rows: [
        ['Desktop', 'GUI, multimedia, produttività', 'Ubuntu, Mint, Fedora', 'Ufficio, sviluppo, uso personale'],
        ['Server', 'Headless, servizi 24/7, stabilità', 'RHEL, Ubuntu Server, Debian', 'Web server, database, email'],
        ['Enterprise', 'Supporto LTS, certificazioni, SLA', 'RHEL, SLES', 'Banche, ospedali, governi'],
        ['Embedded', 'Leggero, specifico, real-time', 'Yocto, Buildroot, Android', 'Router, IoT, automotive'],
        ['Container/Cloud', 'Minimale, immutabile', 'Alpine, CoreOS, Flatcar', 'Microservizi, Kubernetes'],
      ]},

      { type: 'heading', level: 2, emoji: '☁️', text: 'Cloud Computing e Linux' },
      { type: 'paragraph', text: 'Il cloud computing è la fornitura on-demand di risorse IT via rete. Linux domina il cloud: oltre il 90% dei workload pubblici gira su kernel Linux.' },
      { type: 'table', headers: ['Modello', 'Tu gestisci', 'Il provider gestisce', 'Esempio'], rows: [
        ['IaaS', 'SO, app, dati', 'Hardware, rete, storage', 'AWS EC2, Azure VM'],
        ['PaaS', 'App, dati', 'SO, runtime, middleware', 'Heroku, Google App Engine'],
        ['SaaS', 'Solo i dati', 'Tutto il resto', 'Gmail, Salesforce, Office 365'],
      ]},

      { type: 'heading', level: 2, emoji: '🏗️', text: 'Virtualizzazione e Container' },
      { type: 'comparison', left: {
        title: '🖥️ Virtual Machine',
        items: ['Emula un intero computer', 'Ha il suo kernel SO', 'Isolamento completo', 'Pesante (GB di RAM)', 'Boot in minuti', 'Hypervisor: KVM, VMware, VirtualBox']
      }, right: {
        title: '📦 Container',
        items: ['Condivide il kernel dell\'host', 'Solo le librerie dell\'app', 'Isolamento a livello di processo', 'Leggero (MB di RAM)', 'Start in secondi', 'Runtime: Docker, Podman, containerd']
      }},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede di distinguere tra IaaS, PaaS e SaaS, e tra virtualizzazione (VM con hypervisor) e containerizzazione (Docker). Conosci anche KVM come hypervisor Linux nativo.' },

      { type: 'heading', level: 2, emoji: '📜', text: 'Percorso Certificazioni LPI' },
      { type: 'diagram', title: 'Percorso di Certificazione', boxes: [
        { label: 'Linux Essentials', color: '#10b981', children: ['Esame 010-160', '1 solo esame', 'Nessun prerequisito'] },
        { label: 'LPIC-1', color: '#3b82f6', children: ['Esami 101 + 102', 'Sysadmin base', '5 anni validità'] },
        { label: 'LPIC-2', color: '#f59e0b', children: ['Esami 201 + 202', 'Sysadmin avanzato', 'Richiede LPIC-1'] },
        { label: 'LPIC-3', color: '#ef4444', children: ['Specialità: Security/Virt/HA', 'Livello enterprise', 'Richiede LPIC-2'] },
      ]},
    ]
  },

  '4-2': {
    title: 'Hardware del Computer',
    sections: [
      { type: 'heading', level: 2, emoji: '🧠', text: 'Componenti Hardware e Comandi Linux' },
      { type: 'paragraph', text: 'Linux vede tutto l\'hardware attraverso file virtuali in /proc e /sys. Ogni componente ha comandi dedicati per interrogarlo.' },
      { type: 'table', headers: ['Componente', 'Comando', 'File virtuale', 'Info mostrate'], rows: [
        ['CPU', 'lscpu', '/proc/cpuinfo', 'Modello, core, velocità, cache'],
        ['RAM', 'free -h', '/proc/meminfo', 'Totale, usata, libera, swap'],
        ['Dischi', 'lsblk', '/proc/partitions', 'Dispositivi, partizioni, mount'],
        ['Spazio disco', 'df -h', '/proc/mounts', 'Spazio usato/libero per filesystem'],
        ['Dimensione dir', 'du -sh dir/', '—', 'Spazio occupato dalla directory'],
        ['PCI', 'lspci', '/proc/bus/pci', 'Schede video, rete, controller'],
        ['USB', 'lsusb', '/proc/bus/usb', 'Dispositivi USB connessi'],
        ['Kernel', 'uname -a', '/proc/version', 'Versione kernel e architettura'],
      ]},

      { type: 'heading', level: 2, emoji: '💽', text: 'Storage: HDD vs SSD vs NVMe' },
      { type: 'table', headers: ['Tipo', 'Tecnologia', 'Velocità lettura', 'Latenza', 'Prezzo/GB', 'Durata'], rows: [
        ['HDD', 'Piatti magnetici rotanti', '100-200 MB/s', '5-10 ms', '€0.02', 'Meccanico (usura)'],
        ['SSD SATA', 'Flash NAND, bus SATA', '500-550 MB/s', '0.1 ms', '€0.08', 'Elettronico (cicli scrittura)'],
        ['NVMe', 'Flash NAND, bus PCIe', '3-7 GB/s', '0.02 ms', '€0.10', 'Elettronico (più veloce)'],
      ]},

      { type: 'heading', level: 2, emoji: '🔒', text: 'RAID — Redundant Array of Independent Disks' },
      { type: 'paragraph', text: 'RAID combina più dischi fisici per ottenere ridondanza (protezione dati) e/o prestazioni.' },
      { type: 'table', headers: ['Livello', 'Tecnica', 'Min. dischi', 'Ridondanza', 'Prestazioni', 'Capacità utile'], rows: [
        ['RAID 0', 'Striping', '2', '❌ Nessuna', '⚡ Lettura/scrittura veloci', '100%'],
        ['RAID 1', 'Mirroring', '2', '✅ 1 disco', '⚡ Lettura veloce', '50%'],
        ['RAID 5', 'Striping + parità', '3', '✅ 1 disco', '⚡ Lettura veloce', '(N-1)/N'],
        ['RAID 6', 'Striping + 2 parità', '4', '✅ 2 dischi', '⚡ Lettura veloce', '(N-2)/N'],
        ['RAID 10', 'Mirror + Stripe', '4', '✅ 1 per mirror', '⚡⚡ Massime', '50%'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'RAID NON è backup!', content: 'RAID protegge da guasti hardware dei dischi, ma NON è un backup! Se cancelli un file, viene cancellato da tutti i dischi RAID. Il backup è una copia separata dei dati.' },
    ]
  },

  '4-3': {
    title: 'Kernel, Processi e Log',
    sections: [
      { type: 'heading', level: 2, emoji: '🎯', text: 'Il Kernel Linux' },
      { type: 'paragraph', text: 'Il kernel è il cuore del sistema operativo. Gestisce CPU, memoria, I/O, rete e dispositivi. Il kernel Linux è monolitico ma modulare: puoi caricare/scaricare moduli senza riavviare.' },
      { type: 'diagram', title: 'Sequenza di Boot', boxes: [
        { label: '1. BIOS/UEFI', color: '#ef4444', children: ['POST hardware', 'Cerca bootloader'] },
        { label: '2. GRUB', color: '#f59e0b', children: ['Menu di boot', 'Carica kernel'] },
        { label: '3. Kernel', color: '#10b981', children: ['Inizializza hardware', 'Monta root filesystem'] },
        { label: '4. systemd (PID 1)', color: '#3b82f6', children: ['Avvia servizi', 'Target multi-user'] },
      ]},

      { type: 'heading', level: 2, emoji: '⚙️', text: 'Gestione dei Processi' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Uso tipico'], rows: [
        ['ps aux', 'Lista tutti i processi', 'Panoramica processi in esecuzione'],
        ['top / htop', 'Monitor real-time', 'Vedere CPU/RAM in tempo reale'],
        ['kill PID', 'Invia segnale al processo', 'Terminare un processo gentilmente'],
        ['kill -9 PID', 'Forza terminazione (SIGKILL)', 'Processo bloccato che non risponde'],
        ['bg / fg', 'Background / foreground', 'Spostare processi tra bg e fg'],
        ['jobs', 'Lista processi in background', 'Vedere cosa gira in background'],
        ['nohup cmd &', 'Processo sopravvive al logout', 'Comandi che devono continuare'],
        ['pgrep nome', 'Trova PID per nome', 'Cercare processi specifici'],
        ['pkill nome', 'Termina per nome', 'Uccidere per nome anziché PID'],
      ]},

      { type: 'heading', level: 2, emoji: '👻', text: 'Segnali Unix' },
      { type: 'table', headers: ['Segnale', 'Numero', 'Azione', 'Intercettabile?'], rows: [
        ['SIGTERM', '15', 'Termina (gentile, cleanup)', '✅ Sì'],
        ['SIGKILL', '9', 'Termina (forzato, immediato)', '❌ No'],
        ['SIGHUP', '1', 'Hangup / Ricarica config', '✅ Sì'],
        ['SIGINT', '2', 'Interrupt (Ctrl+C)', '✅ Sì'],
        ['SIGSTOP', '19', 'Sospendi il processo', '❌ No'],
        ['SIGCONT', '18', 'Riprendi il processo sospeso', '✅ Sì'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede la differenza tra SIGTERM (15, intercettabile) e SIGKILL (9, non intercettabile). Usa sempre SIGTERM prima di SIGKILL.' },

      { type: 'heading', level: 2, emoji: '📋', text: 'Log di Sistema' },
      { type: 'table', headers: ['File/Comando', 'Contenuto', 'Formato'], rows: [
        ['/var/log/syslog', 'Log generale del sistema', 'Testo (rsyslog)'],
        ['/var/log/auth.log', 'Login, sudo, autenticazione', 'Testo'],
        ['/var/log/kern.log', 'Messaggi del kernel', 'Testo'],
        ['/var/log/dmesg', 'Boot e hardware', 'Ring buffer kernel'],
        ['journalctl', 'Tutti i log (systemd journal)', 'Binario (systemd)'],
        ['journalctl -u nginx', 'Log di un servizio specifico', 'Filtrato per unit'],
        ['journalctl -f', 'Segui i log in tempo reale', 'Come tail -f'],
      ]},
    ]
  },

  '4-4': {
    title: 'Networking',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'Concetti Fondamentali di Rete' },
      { type: 'paragraph', text: 'Ogni dispositivo in rete ha bisogno di un indirizzo IP, una subnet mask (per definire la rete locale), un gateway (per uscire dalla rete) e un server DNS (per tradurre nomi in IP).' },

      { type: 'heading', level: 2, emoji: '🔢', text: 'IPv4 — Indirizzi e Subnet' },
      { type: 'paragraph', text: 'IPv4 usa indirizzi a 32 bit, rappresentati come 4 gruppi decimali da 0 a 255 (es. 192.168.1.100).' },
      { type: 'table', headers: ['Range', 'Tipo', 'Classe', 'Network/Host'], rows: [
        ['10.0.0.0/8', 'Privato', 'A', '16M indirizzi'],
        ['172.16.0.0/12', 'Privato', 'B', '1M indirizzi'],
        ['192.168.0.0/16', 'Privato', 'C', '65K indirizzi'],
        ['127.0.0.0/8', 'Loopback', '—', 'localhost (la macchina stessa)'],
        ['0.0.0.0', 'Default route', '—', 'Tutti gli indirizzi non specificati'],
        ['255.255.255.255', 'Broadcast', '—', 'Tutti nella rete locale'],
      ]},
      { type: 'infobox', variant: 'note', title: 'Notazione CIDR', content: '/24 significa che i primi 24 bit sono la parte "rete" e gli ultimi 8 bit la parte "host". 192.168.1.0/24 = rete da 192.168.1.0 a 192.168.1.255 (256 indirizzi, 254 utilizzabili).' },

      { type: 'heading', level: 2, emoji: '🌐', text: 'IPv6' },
      { type: 'paragraph', text: 'IPv6 usa indirizzi a 128 bit, scritti in esadecimale (es. 2001:0db8:85a3::8a2e:0370:7334). Risolve il problema dell\'esaurimento IPv4 (4 miliardi di indirizzi vs 340 undecilioni).' },

      { type: 'heading', level: 2, emoji: '🔤', text: 'DNS e Porte' },
      { type: 'table', headers: ['Porta', 'Protocollo', 'Servizio', 'Descrizione'], rows: [
        ['20/21', 'TCP', 'FTP', 'File Transfer Protocol'],
        ['22', 'TCP', 'SSH', 'Accesso remoto sicuro'],
        ['23', 'TCP', 'Telnet', 'Accesso remoto NON sicuro'],
        ['25', 'TCP', 'SMTP', 'Invio email'],
        ['53', 'TCP/UDP', 'DNS', 'Traduzione nomi → IP'],
        ['80', 'TCP', 'HTTP', 'Web non criptato'],
        ['110', 'TCP', 'POP3', 'Ricezione email'],
        ['143', 'TCP', 'IMAP', 'Gestione email remota'],
        ['443', 'TCP', 'HTTPS', 'Web criptato (TLS)'],
        ['3306', 'TCP', 'MySQL', 'Database MySQL/MariaDB'],
      ]},

      { type: 'heading', level: 2, emoji: '🛠️', text: 'Comandi di Rete' },
      { type: 'code', title: 'Comandi di diagnostica rete', prompt: '# Mostra indirizzi IP delle interfacce\n$ ip addr show\n\n# Mostra la tabella di routing\n$ ip route show\n\n# Testa connettività\n$ ping -c 4 google.com\n\n# Traccia il percorso dei pacchetti\n$ traceroute google.com\n\n# Mostra porte in ascolto\n$ ss -tuln\n\n# Query DNS\n$ dig google.com\n$ nslookup google.com\n\n# Mostra configurazione DNS\n$ cat /etc/resolv.conf', output: '' },
      { type: 'table', headers: ['File', 'Funzione'], rows: [
        ['/etc/hosts', 'Mappatura statica nome → IP (priorità su DNS)'],
        ['/etc/resolv.conf', 'Server DNS del sistema (nameserver 8.8.8.8)'],
        ['/etc/hostname', 'Nome host della macchina'],
        ['/etc/nsswitch.conf', 'Ordine di risoluzione nomi (files → dns)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede le porte standard (22=SSH, 80=HTTP, 443=HTTPS, 53=DNS) e i file di configurazione rete (/etc/resolv.conf, /etc/hosts). Conosci anche la differenza tra IPv4 (32 bit) e IPv6 (128 bit).' },
    ]
  },
}
