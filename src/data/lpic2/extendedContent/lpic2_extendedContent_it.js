export const lpic2_extendedContent_it = {
  'lpic2-200-1': {
    title: "Misurazione e Pianificazione delle Risorse",
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Analisi Profonda delle Risorse' },
      { type: 'paragraph', text: 'La pianificazione della capacità (Capacity Planning) non è solo "guardare i grafici", ma capire come il sistema reagisce sotto sforzo. Bisogna identificare se il collo di bottiglia è la CPU, la memoria, il sottosistema I/O o la rete.' },
      { type: 'heading', level: 3, emoji: '🧠', text: 'Memoria e Swap con vmstat' },
      { type: 'paragraph', text: 'Mentre `free -m` dà un\'istantanea, `vmstat` mostra il trend. I campi `si` (swap in) e `so` (swap out) sono i più critici: se sono costantemente sopra lo zero, il sistema sta facendo "thrashing", ovvero passa più tempo a spostare dati sul disco che a eseguire codice.' },
      { type: 'code', title: 'Monitoraggio dinamico', prompt: '$ vmstat 1 5', output: 'procs -----------memory---------- ---swap-- -----io---- -system-- ------cpu-----\n r  b   swpd   free   buff  cache   si   so    bi    bo   in   cs us sy id wa st\n 1  0      0 123456  78910 234567    0    0     5    10  123  456  2  1 96  1  0' },
      { type: 'heading', level: 3, emoji: '💾', text: 'Analisi I/O con iostat' },
      { type: 'paragraph', text: 'Il pacchetto `sysstat` fornisce `iostat`, fondamentale per capire se i tuoi dischi sono troppo lenti.' },
      { type: 'table', headers: ['Metrica', 'Descrizione', 'Soglia Critica'], rows: [
        ['%util', 'Percentuale di tempo in cui il disco è occupato', '> 80% indica saturazione'],
        ['await', 'Tempo medio (ms) di attesa per una richiesta', '> 10-20ms per dischi meccanici è alto'],
        ['svctm', 'Tempo medio di servizio effettivo del disco', 'Se vicino a await, il disco è ok ma carico'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Usa `iostat -xz 1` per vedere solo i dispositivi che hanno attività, con statistiche estese.' }
    ]
  },

  'lpic2-201-1': {
    title: 'Componenti e Compilazione del Kernel',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'L\'Architettura del Kernel Linux' },
      { type: 'paragraph', text: 'Il kernel non è un blocco unico, ma un insieme di sottosistemi pronti a gestire hardware, memoria e processi. Sapere come compilarlo permette di creare sistemi ottimizzati per hardware specifico.' },
      { type: 'heading', level: 3, emoji: '📦', text: 'Il Codice Sorgente' },
      { type: 'paragraph', text: 'I sorgenti si trovano solitamente in `/usr/src/linux`. Il file `.config` è il cuore della personalizzazione: contiene migliaia di opzioni che decidono cosa includere o escludere.' },
      { type: 'table', headers: ['Target Make', 'Descrizione'], rows: [
        ['make menuconfig', 'Interfaccia testuale (ncurses) per la configurazione'],
        ['make xconfig', 'Interfaccia grafica (Qt) per la configurazione'],
        ['make oldconfig', 'Aggiorna un vecchio .config con le nuove opzioni'],
        ['make bzImage', 'Compila l\'immagine compressa del kernel'],
        ['make modules', 'Compila i moduli separati'],
        ['make modules_install', 'Copia i moduli in /lib/modules/$(uname -r)'],
      ]},
      { type: 'code', title: 'Flusso di compilazione moderno', prompt: '# make bzImage\n# make modules\n# make modules_install\n# make install', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Non dimenticare mai di eseguire `make modules_install` prima di `make install`, altrimenti il nuovo kernel partirà ma non troverà i driver necessari per caricare il resto del sistema!' }
    ]
  },

  'lpic2-201-2': {
    title: 'Gestione a Runtime e Caricamento Moduli',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Moduli: Il Plug-and-Play del Kernel' },
      { type: 'paragraph', text: 'I moduli permettono di aggiungere funzionalità (come driver Wi-Fi o file system) senza riavviare.' },
      { type: 'table', headers: ['Comando', 'Funzione'], rows: [
        ['lsmod', 'Elenca i moduli attualmente caricati'],
        ['insmod', 'Carica un file .ko specifico (senza gestire dipendenze)'],
        ['rmmod', 'Rimuove un modulo'],
        ['modprobe', 'Il modo raccomandato: carica/rimuove gestendo le dipendenze'],
        ['modinfo', 'Mostra dettagli, parametri e licenza di un modulo'],
      ]},
      { type: 'code', title: 'Esempio modprobe', prompt: '# modinfo e1000\n# modprobe e1000\n# modprobe -r e1000', output: 'filename: /lib/modules/.../e1000.ko\nlicense: GPL\ndescription: Intel(R) PRO/1000 Network Driver' },
      { type: 'heading', level: 3, emoji: '📁', text: 'Persistenza dei Moduli' },
      { type: 'paragraph', text: 'Per caricare un modulo all\'avvio, aggiungilo a `/etc/modules` o crea un file in `/etc/modules-load.d/`. Per passare parametri, usa file in `/etc/modprobe.d/`.' }
    ]
  },

  'lpic2-201-3': {
    title: 'Personalizzazione e Patching',
    sections: [
      { type: 'heading', level: 2, emoji: '🩹', text: 'Mantenere il Kernel Aggiornato' },
      { type: 'paragraph', text: 'Spesso non serve scaricare tutto il kernel nuovo (GB di dati), ma basta applicare una "patch" per correggere bug o falle di sicurezza.' },
      { type: 'code', title: 'Applicare una patch', prompt: '$ bzcat patch-5.10.x.bz2 | patch -p1', output: 'patching file Makefile\npatching file arch/x86/Makefile\n...' },
      { type: 'infobox', variant: 'exam', content: 'L\'opzione `-p1` nel comando patch serve a "saltare" il primo livello di directory nel percorso del file contenuto nella patch, adattandolo alla tua directory corrente.' }
    ]
  },

  'lpic2-202-1': {
    title: 'Personalizzazione dell\'Avvio di Sistema',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Oltre il semplice Boot' },
      { type: 'paragraph', text: 'Capire come il sistema passa dal BIOS/UEFI al desktop o al server pronto è fondamentale per il recupero dei disastri.' },
      { type: 'heading', level: 3, emoji: '⚙️', text: 'SysVinit vs Systemd' },
      { type: 'paragraph', text: 'Anche se Systemd domina, LPIC-2 richiede ancora la conoscenza di SysVinit e dei runlevel. Ricorda che `/etc/inittab` è il file di controllo primario per SysVinit.' },
      { type: 'table', headers: ['Runlevel', 'Scopo'], rows: [
        ['0', 'Halt (spegnimento)'],
        ['1 / S', 'Single User Mode (manutenzione)'],
        ['2', 'Multi-utente senza rete (spesso Debian)'],
        ['3', 'Multi-utente con rete (CLI)'],
        ['5', 'Multi-utente con rete + Interfaccia Grafica'],
        ['6', 'Reboot'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'In Systemd, i runlevel sono mappati come "targets". Esempio: `multi-user.target` corrisponde solitamente al runlevel 3.' }
    ]
  },

  'lpic2-202-2': {
    title: 'Recupero del Sistema e Bootloader',
    sections: [
      { type: 'heading', level: 2, emoji: '🆘', text: 'Salvare un Sistema Compromesso' },
      { type: 'paragraph', text: 'Se il bootloader (GRUB) è corrotto, il sistema non parte. Devi saper usare una shell di emergenza o un disco live.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'GRUB 2' },
      { type: 'code', title: 'Ripristinare GRUB', prompt: '# grub-install /dev/sda\n# update-grub', output: 'Installing for i386-pc platform.\nInstallation finished. No error reported.' },
      { type: 'paragraph', text: 'Il file di configurazione generato è `/boot/grub/grub.cfg`, ma non deve mai essere modificato a mano. Usa invece `/etc/default/grub`.' }
    ]
  },

  'lpic2-202-3': {
    title: 'Bootloader Alternativi',
    sections: [
      { type: 'heading', level: 2, emoji: '🧭', text: 'SYSLINUX e ISOLINUX' },
      { type: 'paragraph', text: 'Usati spesso per chiavette USB e CD live per la loro leggerezza e semplicità.' },
      { type: 'table', headers: ['Variante', 'Utilizzo'], rows: [
        ['SYSLINUX', 'File system FAT (pennini USB)'],
        ['ISOLINUX', 'Standard ISO-9660 (CD/DVD)'],
        ['EXTLINUX', 'File system ext2/3/4 o btrfs'],
        ['PXELINUX', 'Avvio da rete via TFTP'],
      ]}
    ]
  },

  'lpic2-203-1': {
    title: 'Operazioni Avanzate sui Filesystem',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Gestione e Manutenzione' },
      { type: 'paragraph', text: 'Un amministratore deve saper creare, controllare e riparare i filesystem senza timore.' },
      { type: 'heading', level: 3, emoji: '🔍', text: 'Check e Riparazione' },
      { type: 'code', title: 'Controllare un disco (smontato!)', prompt: '# fsck -y /dev/sdb1\n# dumpe2fs /dev/sdb1 | head', output: 'Filesystem volume name:   Dati\nLast mounted on:          /mnt/dati\nFilesystem revision #:    1 (dynamic)' },
      { type: 'infobox', variant: 'warning', content: 'Non eseguire MAI `fsck` su un filesystem montato: rischi di corrompere i dati in modo irreversibile!' }
    ]
  },

  'lpic2-203-2': {
    title: 'Manutenzione dei Filesystem',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Ottimizzazione con tune2fs' },
      { type: 'paragraph', text: 'Puoi cambiare parametri come la frequenza dei controlli automatici o l\'etichetta del volume senza formattare.' },
      { type: 'table', headers: ['Comando', 'Effetto'], rows: [
        ['tune2fs -L "BACKUP" /dev/sdc1', 'Imposta l\'etichetta (label)'],
        ['tune2fs -m 1 /dev/sdc1', 'Riduce lo spazio riservato a root al 1%'],
        ['tune2fs -i 30d /dev/sdc1', 'Controllo forzato ogni 30 giorni'],
        ['xfs_admin -L "DATI_XFS" /dev/sdd1', 'Gestione per filesystem XFS'],
      ]}
    ]
  },

  'lpic2-203-3': {
    title: 'Gestione dei Dispositivi con udev',
    sections: [
      { type: 'heading', level: 2, emoji: '🔌', text: 'Il demone che vede tutto' },
      { type: 'paragraph', text: '`udev` gestisce i file in `/dev` in modo dinamico quando colleghi o scolleghi hardware.' },
      { type: 'heading', level: 3, emoji: '📝', text: 'Creare Regole Personalizzate' },
      { type: 'paragraph', text: 'Puoi decidere che la tua stampante abbia sempre lo stesso nome simbolico, indipendentemente dalla porta USB.' },
      { type: 'code', title: 'Esempio regola udev', prompt: '# /etc/udev/rules.d/99-custom.rules\nSUBSYSTEM=="usb", ATTR{idVendor}=="1234", SYMLINK+="miadispositivo"', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Usa `udevadm monitor` per vedere le azioni del kernel in tempo reale mentre inserisci una periferica.' }
    ]
  },

  'lpic2-204-1': {
    title: 'Configurazione RAID Avanzata',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Software RAID con mdadm' },
      { type: 'paragraph', text: 'In Linux, il software RAID permette di unire dischi diversi in un unico dispositivo robusto gestito dal kernel.' },
      { type: 'table', headers: ['Livello', 'Vantaggio', 'Tolleranza Guasti'], rows: [
        ['0 (Stripe)', 'Velocità pura', 'Nessuna (1 disco rotto = dati persi)'],
        ['1 (Mirror)', 'Sicurezza', 'Tollera il guasto di metà dei dischi'],
        ['5 (Parità)', 'Efficienza', 'Tollera il guasto di 1 disco (min. 3 dischi)'],
        ['6 (Doppia Parità)', 'Alta Disponibilità', 'Tollera il guasto di 2 dischi (min. 4 dischi)'],
        ['10 (1+0)', 'Best of both', 'Tollera guasti multipli (min. 4 dischi)'],
      ]},
      { type: 'code', title: 'Creare un RAID 5', prompt: '# mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sdb1 /dev/sdc1 /dev/sdd1\n# cat /proc/mdstat', output: 'Personalities : [raid6] [raid5] [raid4]\nmd0 : active raid5 sdd1[2] sdc1[1] sdb1[0]\n      2095104 blocks super 1.2 level 5, 512k chunk, algorithm 2 [3/3] [UUU]' },
      { type: 'infobox', variant: 'tip', content: 'Non dimenticare di salvare la configurazione in `/etc/mdadm/mdadm.conf` per far sì che il RAID venga montato correttamente all\'avvio!' }
    ]
  },

  'lpic2-204-2': {
    title: 'Regolazione e Ottimizzazione Storage',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Spremere le prestazioni' },
      { type: 'paragraph', text: 'Oltre al RAID, bisogna saper ottimizzare i singoli dischi, specialmente se si usano tecnologie moderne come NVMe o vecchi dischi che necessitano di tuning.' },
      { type: 'code', title: 'Hdparm e NVMe', prompt: '# hdparm -tT /dev/sda\n# nvme list', output: 'Timing cached reads:   15342 MB in  2.00 seconds = 7673.41 MB/sec\nTiming buffered disk reads:  540 MB in  3.01 seconds = 179.62 MB/sec' },
      { type: 'paragraph', text: 'Il comando `hdparm` è storico per i dischi SATA/IDE, mentre `nvme-cli` è lo standard per i dischi SSD di ultima generazione.' }
    ]
  },

  'lpic2-204-3': {
    title: 'Logical Volume Manager (LVM) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'L\'elasticità totale del disco' },
      { type: 'paragraph', text: 'LVM aggiunge uno strato di astrazione tra il disco fisico e la partizione che vedi. Questo ti permette di ingrandire o rimpicciolire i volumi "al volo".' },
      { type: 'table', headers: ['Componente', 'Nome Pieno', 'Significato'], rows: [
        ['PV', 'Physical Volume', 'Il disco o la partizione fisica (es: /dev/sda3)'],
        ['VG', 'Volume Group', 'Il "calderone" di spazio creato unendo più PV'],
        ['LV', 'Logical Volume', 'La partizione virtuale che formatti e monti'],
      ]},
      { type: 'code', title: 'Espandere un volume', prompt: '# lvextend -L +10G /dev/vg0/root\n# resize2fs /dev/vg0/root', output: 'Size of logical volume vg0/root changed from 20.00 GiB to 30.00 GiB.\nFilesystem at /dev/vg0/root is mounted on /; on-line resizing required' },
      { type: 'infobox', variant: 'exam', content: 'Ricorda: `lvextend` ingrandisce il contenitore, ma devi usare `resize2fs` (per ext4) o `xfs_growfs` (per XFS) per ingrandire effettivamente il filesystem all\'interno.' }
    ]
  },

  'lpic2-205-1': {
    title: 'Configurazioni di Rete Avanzate',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'Gestione Interfacce e Routing' },
      { type: 'paragraph', text: 'In LPIC-2, ifconfig è considerato deprecato. Lo standard è la suite `iproute2` (comando `ip`).' },
      { type: 'table', headers: ['Vecchio Comando', 'Nuovo Comando ip', 'Scopo'], rows: [
        ['ifconfig', 'ip addr', 'Mostra/Imposta indirizzi IP'],
        ['route', 'ip route', 'Mostra/Imposta la tabella di instradamento'],
        ['arp', 'ip neigh', 'Mostra la tabella ARP'],
        ['netstat -i', 'ip -s link', 'Statistiche dell\'interfaccia'],
      ]},
      { type: 'code', title: 'Impostare un IP e Rotte', prompt: '# ip addr add 192.168.1.50/24 dev eth0\n# ip route add default via 192.168.1.1', output: '' }
    ]
  },

  'lpic2-205-2': {
    title: 'Troubleshooting di Rete',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️‍♂️', text: 'Detective nel Traffico' },
      { type: 'paragraph', text: 'Quando la rete non va, bisogna saper "ascoltare" i cavi.' },
      { type: 'heading', level: 3, emoji: '👂', text: 'Tcpdump' },
      { type: 'code', title: 'Catturare pacchetti', prompt: '# tcpdump -i eth0 icmp', output: '12:00:01.123 IP 192.168.1.50 > 8.8.8.8: ICMP echo request\n12:00:01.145 IP 8.8.8.8 > 192.168.1.50: ICMP echo reply' },
      { type: 'paragraph', text: 'Puoi salvare le catture in un file con `-w file.pcap` per poi analizzarle comodamente con Wireshark.' },
      { type: 'infobox', variant: 'tip', content: 'Usa `ss -tulpn` per vedere istantaneamente quali processi stanno occupando quali porte sul server.' }
    ]
  },

  'lpic2-205-3': {
    title: 'Aggregazione e Bridging',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Bonding e Bridging' },
      { type: 'paragraph', text: 'Fondamentale per la virtualizzazione e l\'alta disponibilità.' },
      { type: 'table', headers: ['Tecnica', 'Scopo Princpale'], rows: [
        ['Bonding', 'Unire 2+ schede fisiche per ridondanza o velocità (LACP)'],
        ['Bridging', 'Creare uno switch virtuale per far comunicare le VM col mondo'],
      ]},
      { type: 'code', title: 'Controllare i ponti', prompt: '$ brctl show\n# ip link show type bridge', output: 'bridge name     bridge id               STP enabled     interfaces\nbr0             8000.001122334455       no              eth0\n                                                        vnet0' }
    ]
  },

  'lpic2-206-1': {
    title: 'Compilazione Software e Gestione Patch',
    sections: [
      { type: 'heading', level: 2, emoji: '🏗️', text: 'Sorgenti: Il Cuore del Software Libero' },
      { type: 'paragraph', text: 'Compilare da sorgente permette di personalizzare il software in modo estremo, abilitando solo le funzioni necessarie.' },
      { type: 'table', headers: ['Fase', 'Comando', 'Cosa Succede'], rows: [
        ['Configurazione', './configure', 'Controlla le librerie e crea il Makefile'],
        ['Compilazione', 'make', 'Trasforma il codice C in binari eseguibili'],
        ['Installazione', 'make install', 'Copia i binari nelle cartelle di sistema (solitamente /usr/local)'],
        ['Pulizia', 'make clean', 'Rimuove i file temporanei della compilazione'],
      ]},
      { type: 'heading', level: 3, emoji: '🩹', text: 'Gestione delle Patch' },
      { type: 'paragraph', text: 'Le patch sono file di testo che contengono solo le differenze tra due versioni di codice.' },
      { type: 'code', title: 'Creare e applicare patch', prompt: '$ diff -u file_originale.c file_modificato.c > correzione.patch\n$ patch -p1 < correzione.patch', output: '' }
    ]
  },

  'lpic2-206-2': {
    title: 'Strategie di Backup e Disaster Recovery',
    sections: [
      { type: 'heading', level: 2, emoji: '💾', text: 'Non Scommettere sui tuoi Dati' },
      { type: 'paragraph', text: 'Un amministratore senza backup è un amministratore che ha già perso il lavoro.' },
      { type: 'heading', level: 3, emoji: '🛡️', text: 'Rsync: Il Re del Backup Incrementale' },
      { type: 'code', title: 'Sincronizzazione Remota', prompt: '$ rsync -avz --delete -e ssh /data/ user@backup-server:/backups/', output: 'sending incremental file list\ndata/database.sql\n\nsent 5.6M bytes  received 2.1k bytes  1.2M bytes/sec' },
      { type: 'table', headers: ['Soluzione', 'Utilizzo Tipico'], rows: [
        ['Bacula / Bareos', 'Backup aziendale centralizzato complesso'],
        ['Amanda', 'Backup su nastri e gestione di rete'],
        ['Snapshot LVM', 'Backup "congelato" di sistemi attivi'],
      ]}
    ]
  },

  'lpic2-206-3': {
    title: 'Monitoraggio e Notifica Utenti',
    sections: [
      { type: 'heading', level: 2, emoji: '📢', text: 'Comunicare i Disservizi' },
      { type: 'paragraph', text: 'Prima di un intervento, è buona norma avvisare chi è collegato.' },
      { type: 'code', title: 'Messaggi di Sistema', prompt: '# wall "Il sistema verrà riavviato tra 10 minuti per manutenzione hardware."', output: '' },
      { type: 'paragraph', text: 'Il file `/etc/motd` (Message Of The Day) viene mostrato al login, mentre `/etc/issue` viene mostrato prima del prompt di login.' }
    ]
  },

  'lpic2-207-1': {
    title: 'DNS Base e Caching',
    sections: [
      { type: 'heading', level: 2, emoji: '📖', text: 'BIND: The Berkeley Internet Name Domain' },
      { type: 'paragraph', text: 'BIND è il server DNS più diffuso al mondo. Può fungere da server autoritativo o da semplice cache.' },
      { type: 'heading', level: 3, emoji: '🛠️', text: 'Configurazione named.conf' },
      { type: 'code', title: 'File principale', prompt: '$ cat /etc/bind/named.conf.options', output: 'options {\n  directory "/var/cache/bind";\n  recursion yes;\n  allow-query { 192.168.1.0/24; };\n  forwarders { 8.8.8.8; 1.1.1.1; };\n};' },
      { type: 'infobox', variant: 'exam', content: 'Ricorda: `named-checkconf` controlla gli errori di sintassi nei file di configurazione, mentre `named-checkzone` controlla i singoli file di zona.' }
    ]
  },

  'lpic2-207-2': {
    title: 'Gestione delle Zone DNS',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Forward e Reverse Lookup' },
      { type: 'paragraph', text: 'Una zona Forward traduce nomi in IP, una zona Reverse fa il contrario (fondamentale per i server mail).' },
      { type: 'table', headers: ['Record', 'Funzione'], rows: [
        ['SOA', 'Inizio dell\'autorità (parametri della zona)'],
        ['NS', 'Name Server autoritativi'],
        ['A', 'Associa nome a indirizzo IPv4'],
        ['AAAA', 'Associa nome a indirizzo IPv6'],
        ['PTR', 'Associa IP a nome (usato nel Reverse)'],
        ['MX', 'Mail Exchanger (server di posta)'],
        ['CNAME', 'Alias (un nome che punta a un altro nome)'],
      ]},
      { type: 'code', title: 'Esempio record SOA', prompt: '@  IN  SOA  ns1.esempio.it. root.esempio.it. (\n  2024030601 ; Serial\n  3600       ; Refresh\n  1800       ; Retry\n  604800     ; Expire\n  86400      ; Minimum TTL\n)', output: '' }
    ]
  },

  'lpic2-207-3': {
    title: 'Sicurezza DNS e DNSSEC',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Proteggere i Nomi' },
      { type: 'paragraph', text: 'Il DNS classico non è sicuro. DNSSEC aggiunge firme digitali per garantire che la risposta non sia stata intercettata e modificata.' },
      { type: 'infobox', variant: 'warning', content: 'DNSSEC protegge dall\'avvelenamento della cache (Cache Poisoning), ma non cripta i dati. Il traffico DNS rimane visibile in chiaro.' },
      { type: 'heading', level: 3, emoji: '🛡️', text: 'TSIG (Transaction Signatures)' },
      { type: 'paragraph', text: 'Usa chiavi segrete condivise per autenticare i trasferimenti di zona tra server Master e Slave.' }
    ]
  },

  'lpic2-208-1': {
    title: 'Configurazione Apache Avanzata',
    sections: [
      { type: 'heading', level: 2, emoji: '🏛️', text: 'Hosting Professionale con Apache' },
      { type: 'paragraph', text: 'Apache permette di gestire carichi elevati e configurazioni complesse tramite i VirtualHost e i moduli MPM (Multi-Processing Modules).' },
      { type: 'table', headers: ['Modulo MPM', 'Caratteristiche'], rows: [
        ['prefork', 'Un processo per ogni connessione (sicuro per moduli non-thread-safe come PHP)'],
        ['worker', 'Usa più processi e molti thread (più leggero di prefork)'],
        ['event', 'Ottimizzato per gestire molte connessioni persistenti (Keep-Alive)'],
      ]},
      { type: 'code', title: 'Verificare i moduli caricati', prompt: '# apache2ctl -M | grep -i mpm', output: ' mpm_event_module (shared)' },
      { type: 'heading', level: 3, emoji: '📂', text: 'DocumentRoot e Directory' },
      { type: 'paragraph', text: 'Usa la direttiva `<Directory>` per controllare l\'accesso ai file e abilitare funzioni come gli `.htaccess` tramite `AllowOverride`.' }
    ]
  },

  'lpic2-208-2': {
    title: 'Sicurezza Web e HTTPS',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Il Protocollo sicuro' },
      { type: 'paragraph', text: 'Configurare HTTPS non è più opzionale. In LPIC-2 devi conoscere come gestire i certificati manualmente.' },
      { type: 'code', title: 'Configurazione SSL in Apache', prompt: '<VirtualHost *:443>\n  ServerName miosito.it\n  SSLEngine on\n  SSLCertificateFile /etc/ssl/certs/miosito.crt\n  SSLCertificateKeyFile /etc/ssl/private/miosito.key\n</VirtualHost>', output: '' },
      { type: 'infobox', variant: 'warning', content: 'Proteggi sempre la chiave privata (.key) con permessi restrittivi: `chmod 600`. Se un hacker la ottiene, può decifrare tutto il traffico del sito!' }
    ]
  },

  'lpic2-208-3': {
    title: 'Nginx e Performance Scattanti',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Perché scegliere Nginx?' },
      { type: 'paragraph', text: 'Nginx eccelle nel servire file statici e nel fare da Reverse Proxy davanti ad altri server.' },
      { type: 'table', headers: ['Funzione', 'Direttiva Nginx'], rows: [
        ['Reverse Proxy', 'proxy_pass http://backend_server;'],
        ['Load Balancing', 'upstream backend { server s1; server s2; }'],
        ['Caching', 'proxy_cache_path /var/cache/nginx ...'],
        ['FastCGI (PHP)', 'fastcgi_pass unix:/var/run/php.sock;'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Nginx non legge i file `.htaccess`. Tutte le configurazioni devono essere fatte nei file principali in `/etc/nginx/sites-available/`.' }
    ]
  },

  'lpic2-209-1': {
    title: 'Samba: Integrazione Linux-Windows',
    sections: [
      { type: 'heading', level: 2, emoji: '🤝', text: 'File e Stampanti per Tutti' },
      { type: 'paragraph', text: 'Samba trasforma il tuo server Linux in un membro perfetto di un ufficio Windows.' },
      { type: 'heading', level: 3, emoji: '📝', text: 'Sezioni del file smb.conf' },
      { type: 'table', headers: ['Sezione', 'Significato'], rows: [
        ['[global]', 'Impostazioni generali del server (Workgroup, Security)'],
        ['[homes]', 'Crea automaticamente una condivisione per la cartella home di ogni utente'],
        ['[printers]', 'Gestisce la condivisione delle stampanti tramite CUPS'],
        ['[Dati]', 'Condivisione personalizzata di una cartella specifica'],
      ]},
      { type: 'code', title: 'Creare una condivisione', prompt: '[Dati]\n   path = /srv/samba/dati\n   writable = yes\n   browseable = yes\n   valid users = @tecnici', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Ricorda che gli utenti Samba devono avere anche un account di sistema Linux, ma non necessariamente una password di login Linux.' }
    ]
  },

  'lpic2-209-2': {
    title: 'NFS: Network File System',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Condivisione Nativa Unix' },
      { type: 'paragraph', text: 'NFS è incredibilmente veloce per condividere file tra server Linux in rete locale.' },
      { type: 'code', title: 'Esportare cartelle', prompt: '# cat /etc/exports\n/shared  192.168.1.0/24(rw,sync,no_root_squash)', output: '' },
      { type: 'paragraph', text: 'L\'opzione `no_root_squash` permette all\'utente root del client di avere poteri di root anche sulla cartella remota (pericoloso, da usare solo se necessario!).' }
    ],
  },

  'lpic2-210-1': {
    title: 'DHCP e Autoconfigurazione',
    sections: [
      { type: 'heading', level: 2, emoji: '📡', text: 'DHCP Avanzato' },
      { type: 'paragraph', text: 'Un server DHCP non serve solo a dare IP, ma può passare parametri complessi come server TFTP per il boot da rete o server NTP.' },
      { type: 'code', title: 'Configurazione subnet', prompt: 'subnet 192.168.1.0 netmask 255.255.255.0 {\n  range 192.168.1.100 192.168.1.200;\n  option routers 192.168.1.1;\n  next-server 192.168.1.10; # Per PXE boot\n}', output: '' },
      { type: 'infobox', variant: 'tip', content: 'Il comando `omshell` permette di interrogare e modificare il server DHCP di ISC mentre è in esecuzione, senza riavviarlo.' }
    ]
  },

  'lpic2-210-2': {
    title: 'PAM: Pluggable Authentication Modules',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'La Flessibilità del Login' },
      { type: 'paragraph', text: 'PAM permette di cambiare la politica di sicurezza di tutto il sistema modificando semplici file di testo in `/etc/pam.d/`.' },
      { type: 'table', headers: ['Modificatore', 'Effetto'], rows: [
        ['required', 'Il successo è necessario. Se fallisce, l\'utente fallisce ma scorre comunque gli altri moduli (per non dare indizi)'],
        ['requisite', 'Il successo è necessario. Se fallisce, interrompe subito lo stack'],
        ['sufficient', 'Se questo ha successo e nessun precedente "required" è fallito, l\'autenticazione è approvata subito'],
        ['optional', 'Il risultato viene ignorato a meno che non sia l\'unico modulo nello stack'],
      ]},
      { type: 'infobox', variant: 'warning', content: 'Un errore in un file PAM può chiuderti fuori dal sistema! Tieni sempre una sessione root aperta mentre fai esperimenti.' }
    ]
  },

  'lpic2-210-3': {
    title: 'LDAP: Directory Services',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Gestire migliaia di utenti' },
      { type: 'paragraph', text: 'LDAP non è un database relazionale, ma un servizio di directory ottimizzato per le letture rapide.' },
      { type: 'code', title: 'Struttura DN', prompt: 'dn: uid=claudio,ou=Users,dc=linuxquest,dc=it\nobjectClass: inetOrgPerson\ncn: Claudio\nsn: Dall\'Ara', output: '' }
    ]
  },

  'lpic2-211-1': {
    title: 'Postfix: Configurazione e Sicurezza SMTP',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Il Postino Digitale Professionale' },
      { type: 'paragraph', text: 'Postfix è progettato per essere sicuro. È diviso in più processi che comunicano tra loro, ognuno con privilegi minimi.' },
      { type: 'table', headers: ['Comando', 'Funzione'], rows: [
        ['postconf', 'Mostra o cambia i parametri di configurazione (es: postconf -n)'],
        ['postmap', 'Compila i database (es: file aliases o trasporti)'],
        ['postsuper', 'Operazioni sulla coda (cancellare mail bloccate)'],
        ['postqueue -f', 'Forza l\'invio istantaneo della coda'],
      ]},
    ]
  },

  'lpic2-211-2': {
    title: 'Dovecot e l\'Esecuzione Locale',
    sections: [
      { type: 'heading', level: 2, emoji: '📮', text: 'Accesso IMAP e POP3' },
      { type: 'paragraph', text: 'Mentre Postfix spedisce le mail, Dovecot permette agli utenti di leggerle.' },
      { type: 'infobox', variant: 'tip', content: 'Configura sempre Dovecot per usare SSL/TLS. Passare le password in chiaro su protocolli IMAP/POP3 standard è estremamente rischioso.' }
    ]
  },

  'lpic2-212-1': {
    title: 'Sicurezza di Rete e IPTables',
    sections: [
      { type: 'heading', level: 2, emoji: '🔥', text: 'Il Muro di Fuoco' },
      { type: 'paragraph', text: '`iptables` è l\'interfaccia classica per gestire `netfilter` nel kernel.' },
      { type: 'table', headers: ['Tabella', 'Scopo'], rows: [
        ['filter', 'Default per il filtraggio pacchetti'],
        ['nat', 'Per il cambio di indirizzi (Network Address Translation)'],
        ['mangle', 'Per alterare campi specifici dei pacchetti (TOS, TTL)'],
        ['raw', 'Per configurare pacchetti che non devono essere tracciati'],
      ]},
      { type: 'code', title: 'Regole tipiche', prompt: '# Blocca tutto il traffico in entrata\niptables -P INPUT DROP\n# Accetta traffico già stabilito\niptables -A INPUT -m conntrack --ctstate ESTABLISHED,RELATED -j ACCEPT', output: '' }
    ]
  },

  'lpic2-212-2': {
    title: 'Rilevamento Intrusioni e Audit',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️‍♂️', text: 'Sentinelle Tecnologiche' },
      { type: 'paragraph', text: 'Installare programmi come `Fail2Ban` o `AIDE` aiuta a prevenire e rilevare attacchi prima che sia troppo tardi.' },
      { type: 'table', headers: ['Strumento', 'Cosa monitora'], rows: [
        ['Fail2Ban', 'Log di sistema per bannare IP che fanno brute-force'],
        ['AIDE', 'Integrità dei file (vede se un file di sistema è cambiato)'],
        ['Lynis', 'Audit di sicurezza completo del sistema'],
        ['Nmap', 'Porte aperte e servizi visibili dall\'esterno'],
      ]}
    ]
  },
}
