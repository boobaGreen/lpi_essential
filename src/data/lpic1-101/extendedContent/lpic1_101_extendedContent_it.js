// LPIC-1 101 Extended Content  Italian
// Rich structured sections for ExtendedContent.jsx

export const lpic1_101_extendedContent_it = {

  'lpic1-101-1-1': {
    title: 'Hardware e Periferiche — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'BIOS vs UEFI: Due Generazioni di Firmware' },
      { type: 'paragraph', text: 'Il firmware è il primo software che si esegue all\'accensione del computer. Inizializza l\'hardware e avvia il bootloader. Esistono due generazioni: BIOS (legacy) e UEFI (moderno).' },
      { type: 'comparison', left: {
        title: '🔧 BIOS (Legacy)',
        items: ['Basic Input/Output System — dal 1981', 'Solo modalità 16-bit real mode', 'Supporta solo MBR (max 2TB, 4 partizioni)', 'Interfaccia testuale (Setup)', 'Nessuna verifica del bootloader', 'Lento nel POST e inizializzazione']
      }, right: {
        title: '⚡ UEFI (Moderno)',
        items: ['Unified Extensible Firmware Interface', 'Modalità 32/64-bit protected mode', 'Supporta GPT (max 8ZiB, 128 partizioni)', 'Interfaccia grafica con mouse', 'Secure Boot: verifica firma digitale', 'Boot più veloce, driver modulari']
      }},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPIC-1 richiede di conoscere le differenze tra BIOS e UEFI, incluso il supporto per MBR/GPT, Secure Boot e la partizione ESP (EFI System Partition) formattata FAT32.' },

      { type: 'heading', level: 2, emoji: '📁', text: 'Le Directory Virtuali del Kernel' },
      { type: 'paragraph', text: 'Linux espone informazioni sul kernel e sull\'hardware attraverso filesystem virtuali (pseudo-filesystem). Non occupano spazio disco: sono generati dinamicamente dal kernel in RAM.' },
      { type: 'table', headers: ['Directory', 'Tipo', 'Contenuto Principale', 'Esempi'], rows: [
        ['/proc', 'procfs', 'Informazioni su processi e kernel', 'cpuinfo, meminfo, modules, cmdline'],
        ['/sys', 'sysfs', 'Gerarchia dispositivi/driver del kernel', 'class/block, devices, bus'],
        ['/dev', 'devtmpfs', 'Nodi dispositivo creati da udev', 'sda, tty, null, zero, random'],
        ['/run', 'tmpfs', 'Dati runtime (PID, socket)', 'systemd, udev, user'],
      ]},
      { type: 'code', title: 'Esplorare /proc e /sys', prompt: '# Informazioni CPU\n$ cat /proc/cpuinfo | head -5\n\n# Memoria disponibile\n$ cat /proc/meminfo | head -3\n\n# Parametri boot del kernel\n$ cat /proc/cmdline\n\n# Moduli caricati\n$ cat /proc/modules | wc -l\n\n# Dispositivi a blocchi via sysfs\n$ ls /sys/class/block/', output: 'processor : 0\nmodel name : Intel(R) Core(TM) i7-9750H\n\nMemTotal: 16384000 kB\nMemFree:  8192000 kB\n\nBOOT_IMAGE=/vmlinuz root=UUID=xxx ro quiet\n\n128\n\nsda sda1 sda2 sdb' },

      { type: 'heading', level: 2, emoji: '🔧', text: 'Gestione dei Moduli del Kernel' },
      { type: 'paragraph', text: 'Il kernel Linux è modulare: i driver possono essere caricati e scaricati a runtime senza riavviare il sistema. Questo permette di supportare hardware diverso con un unico kernel.' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Esempio'], rows: [
        ['lsmod', 'Lista moduli caricati', 'lsmod | grep snd'],
        ['modprobe modulo', 'Carica modulo + dipendenze', 'modprobe usb_storage'],
        ['modprobe -r modulo', 'Rimuove modulo e dipendenze', 'modprobe -r usb_storage'],
        ['modinfo modulo', 'Info dettagliate (autore, licenza, parametri)', 'modinfo ext4'],
        ['insmod file.ko', 'Carica modulo SENZA dipendenze', 'insmod ./mydriver.ko'],
        ['rmmod modulo', 'Rimuove modulo (senza dipendenze)', 'rmmod mydriver'],
        ['depmod', 'Rigenera database dipendenze moduli', 'depmod -a'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'modprobe vs insmod', content: 'Usa sempre modprobe invece di insmod! modprobe gestisce automaticamente le dipendenze tra moduli. insmod richiede di specificare il percorso completo del file .ko e non risolve dipendenze.' },
      { type: 'list', items: [
        { term: '/etc/modules-load.d/', desc: 'File che elencano moduli da caricare automaticamente al boot' },
        { term: '/etc/modprobe.d/', desc: 'File di configurazione per opzioni e blacklist dei moduli' },
        { term: '/lib/modules/$(uname -r)/', desc: 'Directory contenente tutti i moduli compilati per il kernel corrente' },
      ]},

      { type: 'heading', level: 2, emoji: '🔌', text: 'Comandi di Rilevamento Hardware' },
      { type: 'table', headers: ['Comando', 'Bus', 'Informazioni'], rows: [
        ['lspci', 'PCI/PCIe', 'Schede video, rete, controller, bridge'],
        ['lspci -v', 'PCI/PCIe', 'Dettagli estesi (driver, IRQ, memoria)'],
        ['lsusb', 'USB', 'Dispositivi USB (vendor:product ID)'],
        ['lsblk', 'Block devices', 'Dischi, partizioni, dimensioni, mount point'],
        ['lscpu', 'CPU', 'Architettura, core, thread, cache, frequenza'],
        ['lsmem', 'Memoria', 'Blocchi di memoria online/offline'],
      ]},
      { type: 'infobox', variant: 'note', title: 'udev — Il Gestore Dispositivi', content: 'udev è il sottosistema che gestisce dinamicamente i nodi in /dev. Quando un dispositivo viene connesso, il kernel genera un evento uevent, e udev crea/rimuove il nodo dispositivo applicando le regole in /etc/udev/rules.d/.' },
      { type: 'story', title: 'Scenario: Diagnostica hardware su un server', text: 'Un sysadmin riceve una segnalazione: il server non vede una nuova scheda di rete. Esegue lspci per verificare se la scheda è rilevata dal bus PCI. Risulta presente ma senza driver. Con modprobe e1000e carica il driver Intel. Poi verifica con lsmod che il modulo è attivo e con ip link vede la nuova interfaccia eth1. Per renderlo permanente, aggiunge "e1000e" in /etc/modules-load.d/nic.conf.' },
    ]
  },

  'lpic1-101-1-2': {
    title: 'Processo di Boot — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚡', text: 'Le 4 Fasi del Boot Linux' },
      { type: 'timeline', events: [
        { year: 'Fase 1', title: 'Firmware (BIOS/UEFI)', desc: 'POST (Power-On Self-Test): verifica CPU, RAM, periferiche. Cerca il dispositivo di boot secondo l\'ordine configurato. BIOS legge il MBR (primi 512 byte), UEFI cerca il bootloader nella ESP.' },
        { year: 'Fase 2', title: 'Bootloader (GRUB2)', desc: 'GRand Unified Bootloader v2. Presenta il menu di scelta. Carica il kernel (vmlinuz) e l\'initramfs in memoria. Passa parametri al kernel tramite la riga di comando.' },
        { year: 'Fase 3', title: 'Kernel Linux', desc: 'Si decomprime in memoria. Inizializza CPU, memoria, driver essenziali. Monta initramfs come root temporaneo. Cerca e monta il vero filesystem root. Avvia il primo processo utente.' },
        { year: 'Fase 4', title: 'init/systemd (PID 1)', desc: 'Primo processo utente (sempre PID 1). Avvia tutti i servizi secondo il target predefinito. Esegue il boot parallelo (systemd) o sequenziale (SysVinit).' },
      ]},

      { type: 'heading', level: 2, emoji: '🔧', text: 'GRUB2 — Configurazione' },
      { type: 'table', headers: ['File/Directory', 'Funzione', 'Modificabile?'], rows: [
        ['/boot/grub/grub.cfg', 'File generato con la configurazione completa', 'NO — generato automaticamente'],
        ['/etc/default/grub', 'Impostazioni personalizzabili (timeout, kernel params)', 'SÌ — file principale da editare'],
        ['/etc/grub.d/', 'Script che generano le voci del menu', 'SÌ — per voci personalizzate'],
      ]},
      { type: 'code', title: 'Gestione GRUB2', prompt: '# Personalizzare: editare /etc/default/grub\n$ sudo nano /etc/default/grub\n# GRUB_TIMEOUT=5\n# GRUB_CMDLINE_LINUX="quiet splash"\n\n# Rigenerare la configurazione\n$ sudo grub-mkconfig -o /boot/grub/grub.cfg\n# oppure su Debian/Ubuntu:\n$ sudo update-grub\n\n# Installare GRUB nel MBR\n$ sudo grub-install /dev/sda', output: '' },

      { type: 'heading', level: 2, emoji: '💿', text: 'MBR vs GPT' },
      { type: 'comparison', left: {
        title: 'MBR (Master Boot Record)',
        items: ['Primi 512 byte del disco', 'Max 4 partizioni primarie', 'Max 2 TB per disco', 'Nessun backup della tabella partizioni', 'Richiede BIOS per il boot', '446 byte codice + 64 byte tabella + 2 firma']
      }, right: {
        title: 'GPT (GUID Partition Table)',
        items: ['Tabella all\'inizio E alla fine del disco', 'Fino a 128 partizioni', 'Max 8 ZiB per disco (teorico)', 'Backup ridondante della tabella', 'Richiede UEFI per il boot', 'Ogni partizione ha un GUID unico']
      }},

      { type: 'heading', level: 2, emoji: '📋', text: 'initramfs e Log di Boot' },
      { type: 'paragraph', text: 'L\'initramfs (initial RAM filesystem) è un archivio cpio compresso caricato in RAM durante il boot. Contiene i driver e gli script necessari per montare il vero filesystem root (es: driver RAID, LVM, cifratura LUKS).' },
      { type: 'table', headers: ['Comando', 'Distribuzione', 'Funzione'], rows: [
        ['update-initramfs -u', 'Debian/Ubuntu', 'Rigenera l\'immagine initramfs'],
        ['dracut', 'RHEL/Fedora', 'Rigenera l\'immagine initramfs'],
        ['dmesg', 'Tutte', 'Mostra ring buffer del kernel (tutti i messaggi boot)'],
        ['journalctl -b', 'systemd', 'Log del boot corrente'],
        ['journalctl -b -1', 'systemd', 'Log del boot precedente'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede di conoscere: l\'ordine delle fasi di boot, i file GRUB2, la differenza tra MBR e GPT (dimensioni, partizioni), e i comandi dmesg/journalctl per i log di boot.' },
    ]
  },

  'lpic1-101-1-3': {
    title: 'Runlevel e Target systemd — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🎯', text: 'SysVinit Runlevel vs systemd Target' },
      { type: 'paragraph', text: 'Il concetto di "runlevel" definisce lo stato operativo del sistema. SysVinit usava numeri (0-6), systemd usa "target" con nomi descrittivi. I target sono più flessibili: possono avere dipendenze complesse tra servizi.' },
      { type: 'table', headers: ['Runlevel', 'Target systemd', 'Descrizione', 'Servizi Attivi'], rows: [
        ['0', 'poweroff.target', 'Spegnimento', 'Nessuno — sistema si spegne'],
        ['1', 'rescue.target', 'Single user (manutenzione)', 'Servizi base, filesystem montati'],
        ['2', 'multi-user.target', 'Multi-utente (Debian)', 'Rete, servizi — senza GUI'],
        ['3', 'multi-user.target', 'Multi-utente testo', 'Rete, servizi — senza GUI'],
        ['5', 'graphical.target', 'Multi-utente con GUI', 'Tutto + display manager'],
        ['6', 'reboot.target', 'Riavvio', 'Nessuno — sistema riavvia'],
        ['—', 'emergency.target', 'Emergenza', 'Solo / in read-only, shell minimale'],
      ]},

      { type: 'heading', level: 2, emoji: '⚙️', text: 'Comandi systemd Essenziali' },
      { type: 'table', headers: ['Comando', 'Azione', 'Equivalente SysVinit'], rows: [
        ['systemctl get-default', 'Mostra target predefinito', '(leggere /etc/inittab)'],
        ['systemctl set-default graphical.target', 'Imposta target di boot', 'Editare /etc/inittab'],
        ['systemctl isolate rescue.target', 'Cambia target al volo', 'telinit 1 / init 1'],
        ['systemctl list-units --type=target', 'Lista target attivi', '(non disponibile)'],
        ['runlevel', 'Mostra runlevel corrente (legacy)', 'runlevel'],
      ]},

      { type: 'heading', level: 2, emoji: '🔴', text: 'Shutdown, Reboot e Messaggi' },
      { type: 'code', title: 'Comandi di shutdown/reboot', prompt: '# Spegni immediatamente\n$ sudo shutdown -h now\n$ sudo poweroff\n$ sudo systemctl poweroff\n\n# Riavvia\n$ sudo shutdown -r now\n$ sudo reboot\n$ sudo systemctl reboot\n\n# Programma shutdown tra 10 minuti con messaggio\n$ sudo shutdown -r +10 "Manutenzione programmata"\n\n# Annulla shutdown programmato\n$ sudo shutdown -c\n\n# Messaggio a tutti gli utenti\n$ wall "Il server verrà riavviato tra 5 minuti"', output: '' },

      { type: 'comparison', left: {
        title: '🔧 rescue.target',
        items: ['Servizi base attivi', 'Filesystem montati (rw)', 'Rete generalmente disponibile', 'Password root richiesta', 'Per manutenzione ordinaria', 'Equivale a runlevel 1']
      }, right: {
        title: '🚨 emergency.target',
        items: ['NESSUN servizio attivo', 'Solo / montato in READ-ONLY', 'Nessuna rete', 'Password root richiesta', 'Per recovery estremo', 'Più restrittivo di rescue']
      }},
      { type: 'infobox', variant: 'warning', title: 'SysVinit e /etc/inittab', content: 'Nei sistemi SysVinit (ormai rari), il runlevel predefinito era definito in /etc/inittab con la riga "id:3:initdefault:". Con systemd questo file non è più usato: il target predefinito è un symlink /etc/systemd/system/default.target.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'Layout Disco — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '💾', text: 'Progettare il Layout del Disco' },
      { type: 'paragraph', text: 'Una buona pianificazione delle partizioni è fondamentale per la stabilità, sicurezza e manutenibilità del sistema. L\'esame LPIC-1 richiede di conoscere le partizioni raccomandate e le loro dimensioni.' },
      { type: 'table', headers: ['Partizione', 'Dimensione', 'Filesystem', 'Perché Separata?'], rows: [
        ['/ (root)', '15-30 GB', 'ext4/xfs', 'Contiene tutto il sistema — obbligatoria'],
        ['/boot', '250-512 MB', 'ext4', 'Kernel e initramfs — deve essere accessibile dal bootloader'],
        ['/boot/efi (ESP)', '100-500 MB', 'FAT32 (vfat)', 'Obbligatoria per UEFI — contiene bootloader EFI'],
        ['/home', 'Variabile', 'ext4/xfs', 'Dati utente — permette reinstallazione OS senza perdita dati'],
        ['swap', '1-2x RAM', 'swap', 'Memoria virtuale — necessario per ibernazione'],
        ['/var', '5-20 GB', 'ext4/xfs', 'Log e dati variabili — evita che log pieni blocchino /'],
        ['/tmp', '1-5 GB', 'ext4/tmpfs', 'File temporanei — isolamento di sicurezza'],
      ]},
      { type: 'heading', level: 2, emoji: '📦', text: 'LVM — Logical Volume Manager' },
      { type: 'paragraph', text: 'LVM aggiunge un livello di astrazione tra i dischi fisici e i filesystem, permettendo ridimensionamento dinamico, snapshot e spanning su più dischi.' },
      { type: 'diagram', title: 'Architettura LVM', boxes: [
        { label: 'Physical Volume (PV)', color: '#e11d48', children: ['/dev/sda1', '/dev/sdb1'] },
        { label: 'Volume Group (VG)', color: '#f59e0b', children: ['vg_sistema'] },
        { label: 'Logical Volume (LV)', color: '#10b981', children: ['lv_root', 'lv_home', 'lv_swap'] },
      ]},
      { type: 'code', title: 'Comandi LVM essenziali', prompt: '# Creare PV\n$ sudo pvcreate /dev/sdb1\n\n# Creare VG\n$ sudo vgcreate vg_data /dev/sdb1\n\n# Creare LV da 10GB\n$ sudo lvcreate -L 10G -n lv_files vg_data\n\n# Espandere un LV\n$ sudo lvextend -L +5G /dev/vg_data/lv_files\n$ sudo resize2fs /dev/vg_data/lv_files', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede di conoscere: partizioni raccomandate (/boot, /, /home, swap), differenze MBR/GPT, concetti LVM (PV→VG→LV), e il fatto che la ESP deve essere FAT32 per UEFI.' },
    ]
  },

  'lpic1-101-2-2': {
    title: 'Boot Manager GRUB2 — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'GRUB2 in Dettaglio' },
      { type: 'paragraph', text: 'GRUB2 (GRand Unified Bootloader v2) è il bootloader standard. Supporta menu grafici, boot da rete, cifratura, e multi-boot con altri sistemi operativi.' },
      { type: 'table', headers: ['File/Directory', 'Funzione', 'Editare?'], rows: [
        ['/etc/default/grub', 'Variabili di configurazione', 'SÌ — file principale'],
        ['/etc/grub.d/', 'Script generatori del menu', 'SÌ — per voci custom'],
        ['/boot/grub/grub.cfg', 'Configurazione generata', 'MAI — rigenerato automaticamente'],
      ]},
      { type: 'list', items: [
        { term: 'GRUB_TIMEOUT', desc: 'Secondi di attesa prima del boot automatico (default: 5)' },
        { term: 'GRUB_CMDLINE_LINUX', desc: 'Parametri passati al kernel (es: "quiet splash")' },
        { term: 'GRUB_DEFAULT', desc: 'Voce di menu predefinita (0 = prima, "saved" = ultima usata)' },
        { term: 'GRUB_DISABLE_OS_PROBER', desc: 'Disabilita rilevamento altri OS (true/false)' },
      ]},
      { type: 'infobox', variant: 'warning', title: 'Non editare grub.cfg!', content: 'grub.cfg viene rigenerato ogni volta che si esegue grub-mkconfig o update-grub. Le modifiche dirette vengono perse. Editare sempre /etc/default/grub e poi rigenerare.' },
    ]
  },

  'lpic1-101-2-3': {
    title: 'Librerie Condivise — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Come Funzionano le Librerie .so' },
      { type: 'paragraph', text: 'Le librerie condivise (.so = shared object) contengono codice riutilizzabile caricato in memoria una sola volta e condiviso tra tutti i processi che ne hanno bisogno. Risparmiano memoria e disco rispetto al linking statico.' },
      { type: 'comparison', left: {
        title: 'Linking Statico',
        items: ['Librerie incorporate nel binario', 'File eseguibile più grande', 'Non dipende da librerie esterne', 'Usato per binari portabili']
      }, right: {
        title: 'Linking Dinamico',
        items: ['Librerie caricate a runtime (.so)', 'File eseguibile piccolo', 'Dipende da librerie di sistema', 'Aggiornamenti libreria = tutti i programmi aggiornati']
      }},
      { type: 'table', headers: ['Comando', 'Funzione'], rows: [
        ['ldd /usr/bin/ls', 'Mostra librerie .so necessarie per ls'],
        ['ldconfig', 'Aggiorna la cache /etc/ld.so.cache'],
        ['export LD_LIBRARY_PATH=/opt/lib', 'Aggiunge directory di ricerca librerie'],
        ['cat /etc/ld.so.conf', 'File configurazione directory librerie'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame richiede di sapere: ldd per verificare dipendenze, ldconfig per aggiornare la cache, LD_LIBRARY_PATH per directory aggiuntive, e /etc/ld.so.conf per la configurazione.' },
    ]
  },

  'lpic1-101-2-4': {
    title: 'Pacchetti Debian (dpkg/apt) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Gestione Pacchetti Debian' },
      { type: 'table', headers: ['Livello', 'Tool', 'Comando', 'Funzione'], rows: [
        ['Basso', 'dpkg', 'dpkg -i pkg.deb', 'Installa pacchetto locale (SENZA dipendenze)'],
        ['Basso', 'dpkg', 'dpkg -r pkg', 'Rimuove pacchetto (mantiene config)'],
        ['Basso', 'dpkg', 'dpkg -P pkg', 'Rimuove pacchetto + configurazione (purge)'],
        ['Basso', 'dpkg', 'dpkg -l', 'Lista tutti i pacchetti installati'],
        ['Basso', 'dpkg', 'dpkg -S /path/file', 'Trova quale pacchetto possiede un file'],
        ['Basso', 'dpkg', 'dpkg -L pkg', 'Lista file installati dal pacchetto'],
        ['Alto', 'apt', 'apt update', 'Aggiorna lista pacchetti dai repository'],
        ['Alto', 'apt', 'apt install pkg', 'Installa CON dipendenze automatiche'],
        ['Alto', 'apt', 'apt upgrade', 'Aggiorna tutti i pacchetti'],
        ['Alto', 'apt', 'apt remove pkg', 'Rimuove (mantiene config)'],
        ['Alto', 'apt', 'apt purge pkg', 'Rimuove + config'],
        ['Alto', 'apt', 'apt search keyword', 'Cerca nei repository'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'apt vs apt-get', content: 'apt è il frontend moderno e user-friendly. apt-get è quello tradizionale (più stabile per script). Per l\'esame, conosci entrambi. I repository sono configurati in /etc/apt/sources.list e /etc/apt/sources.list.d/.' },
    ]
  },

  'lpic1-101-2-5': {
    title: 'Pacchetti RPM (rpm/dnf) — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Gestione Pacchetti RPM' },
      { type: 'table', headers: ['Livello', 'Tool', 'Comando', 'Funzione'], rows: [
        ['Basso', 'rpm', 'rpm -ivh pkg.rpm', 'Installa con verbose e progress bar'],
        ['Basso', 'rpm', 'rpm -e pkg', 'Rimuove pacchetto'],
        ['Basso', 'rpm', 'rpm -qa', 'Lista tutti i pacchetti installati'],
        ['Basso', 'rpm', 'rpm -qi pkg', 'Info dettagliate su un pacchetto'],
        ['Basso', 'rpm', 'rpm -qf /path/file', 'Trova pacchetto proprietario di un file'],
        ['Basso', 'rpm', 'rpm -V pkg', 'Verifica integrità del pacchetto'],
        ['Alto', 'dnf', 'dnf install pkg', 'Installa con dipendenze (Fedora/RHEL8+)'],
        ['Alto', 'dnf', 'dnf search keyword', 'Cerca nei repository'],
        ['Alto', 'dnf', 'dnf provides */file', 'Trova quale pacchetto fornisce un file'],
        ['Alto', 'yum', 'yum install pkg', 'Come dnf (RHEL7 e precedenti)'],
        ['Alto', 'zypper', 'zypper install pkg', 'Gestore pacchetti SUSE/openSUSE'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Differenza chiave: dpkg/rpm = basso livello (no dipendenze). apt/dnf/yum/zypper = alto livello (risolvono dipendenze automaticamente). Repository RPM: /etc/yum.repos.d/.' },
    ]
  },

  'lpic1-101-2-6': {
    title: 'Virtualizzazione Linux — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '☁️', text: 'Tipi di Virtualizzazione' },
      { type: 'comparison', left: {
        title: 'Hypervisor Tipo 1 (Bare-metal)',
        items: ['Esegue direttamente sull\'hardware', 'KVM, Xen, VMware ESXi, Hyper-V', 'Performance native', 'Usato in data center e cloud']
      }, right: {
        title: 'Hypervisor Tipo 2 (Hosted)',
        items: ['Esegue sopra un sistema operativo host', 'VirtualBox, VMware Workstation, QEMU', 'Overhead del sistema host', 'Usato per sviluppo e test']
      }},
      { type: 'heading', level: 2, emoji: '📦', text: 'VM vs Container' },
      { type: 'table', headers: ['Aspetto', 'VM (Virtual Machine)', 'Container (Docker/Podman)'], rows: [
        ['Isolamento', 'Completo (kernel separato)', 'Parziale (kernel condiviso)'],
        ['Overhead', 'Alto (intero OS)', 'Minimo (solo app + dipendenze)'],
        ['Avvio', 'Minuti', 'Secondi'],
        ['Dimensione', 'GB', 'MB'],
        ['Uso', 'Multi-OS, legacy apps', 'Microservizi, CI/CD'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Modelli Cloud' },
      { type: 'list', items: [
        { term: 'IaaS (Infrastructure as a Service)', desc: 'VM on demand — AWS EC2, Azure VM, GCP Compute Engine' },
        { term: 'PaaS (Platform as a Service)', desc: 'Piattaforma di sviluppo — Heroku, Google App Engine, Azure App Service' },
        { term: 'SaaS (Software as a Service)', desc: 'Applicazioni pronte — Gmail, Office 365, Salesforce' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede: differenza tra Tipo 1 e Tipo 2, VM vs container, i 3 modelli cloud (IaaS/PaaS/SaaS), e di riconoscere KVM come hypervisor tipo 1 integrato nel kernel Linux.' },
    ]
  },

  'lpic1-101-3-1-1': {
    title: 'Linea di Comando — Basi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '⌨️', text: 'La Shell Bash' },
      { type: 'paragraph', text: 'Bash (Bourne Again SHell) è la shell predefinita nella maggior parte delle distribuzioni Linux. È sia un interprete di comandi interattivo che un linguaggio di scripting.' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Esempio'], rows: [
        ['type cmd', 'Indica se builtin, alias o file', 'type cd → "cd is a shell builtin"'],
        ['which cmd', 'Mostra il percorso dell\'eseguibile', 'which ls → /usr/bin/ls'],
        ['whereis cmd', 'Trova binario, sorgente e manuale', 'whereis ls → ls: /usr/bin/ls /usr/share/man/man1/ls.1'],
        ['echo $PATH', 'Mostra le directory di ricerca comandi', 'echo $PATH → /usr/local/bin:/usr/bin:/bin'],
        ['uname -a', 'Informazioni complete sul sistema', 'uname -r → solo versione kernel'],
        ['man cmd', 'Manuale del comando', 'man ls → pagina di manuale di ls'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'Tab Completion', content: 'Premi Tab per l\'autocompletamento di comandi, file e directory. Doppio Tab mostra tutte le opzioni disponibili. Funziona anche con argomenti di comandi come apt install <Tab>.' },
      { type: 'list', items: [
        { term: 'Comandi interni (builtin)', desc: 'Integrati nella shell (cd, echo, export). Non creano un nuovo processo.' },
        { term: 'Comandi esterni', desc: 'File eseguibili nel PATH (/usr/bin/ls, /usr/bin/grep). Creano un processo figlio.' },
        { term: 'Alias', desc: 'Scorciatoie definite dall\'utente (alias ll="ls -la"). Hanno priorità sui comandi esterni.' },
      ]},
    ]
  },

  'lpic1-101-3-1-2': {
    title: 'Variabili e Quoting — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Variabili Shell e Ambiente' },
      { type: 'table', headers: ['Operazione', 'Sintassi', 'Esempio'], rows: [
        ['Assegnazione locale', 'VAR=valore', 'NAME="Linux"'],
        ['Esportazione (ambiente)', 'export VAR=valore', 'export EDITOR=vim'],
        ['Accesso variabile', '$VAR o ${VAR}', 'echo $HOME → /home/user'],
        ['Lista ambiente', 'env o printenv', 'env | grep LANG'],
        ['Rimuovi variabile', 'unset VAR', 'unset MYVAR'],
      ]},
      { type: 'heading', level: 2, emoji: '🔤', text: 'Quoting: Apici e Escape' },
      { type: 'comparison', left: {
        title: "'Apici singoli' (letterale)",
        items: ['Nessuna espansione', '$VAR resta $VAR', 'echo \'Costo: $100\' → Costo: $100', 'Usare quando si vuole testo letterale']
      }, right: {
        title: '"Apici doppi" (espansione)',
        items: ['Espande $VAR e $(cmd)', 'echo "Home: $HOME" → Home: /home/user', 'Espande $(date) → data corrente', 'Usare quando servono variabili nel testo']
      }},
      { type: 'heading', level: 2, emoji: '📚', text: 'History e Navigazione' },
      { type: 'table', headers: ['Scorciatoia', 'Azione'], rows: [
        ['↑ / ↓', 'Navigazione nella history'],
        ['Ctrl+R', 'Ricerca inversa nella history'],
        ['!!', 'Ripete l\'ultimo comando'],
        ['!n', 'Esegue il comando numero n della history'],
        ['!$', 'Ultimo argomento del comando precedente'],
        ['history', 'Mostra tutta la history (~/.bash_history)'],
        ['Ctrl+A / Ctrl+E', 'Vai a inizio/fine riga'],
      ]},
    ]
  },

  'lpic1-101-3-2-1': {
    title: 'Filtri di Testo — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'I Filtri di Testo Unix' },
      { type: 'paragraph', text: 'I filtri sono comandi che leggono da stdin, elaborano il testo e scrivono su stdout. La potenza di Unix sta nel combinarli con pipe (|) per creare pipeline di elaborazione dati.' },
      { type: 'table', headers: ['Filtro', 'Funzione', 'Esempio Pratico'], rows: [
        ['cat', 'Concatena/mostra file', 'cat file1 file2 > merged'],
        ['head -n N', 'Prime N righe', 'head -20 /var/log/syslog'],
        ['tail -n N', 'Ultime N righe', 'tail -f /var/log/syslog (follow live)'],
        ['sort', 'Ordina righe', 'sort -rn file (numerico inverso)'],
        ['uniq', 'Rimuove duplicati consecutivi', 'sort file | uniq -c (conta occorrenze)'],
        ['wc', 'Conta righe/parole/byte', 'wc -l file (solo righe)'],
        ['cut', 'Estrae campi/colonne', 'cut -d: -f1 /etc/passwd (usernames)'],
        ['tr', 'Traduce/cancella caratteri', 'tr a-z A-Z (maiuscolo)'],
        ['sed', 'Stream editor', 'sed "s/old/new/g" file'],
        ['awk', 'Elaborazione testo avanzata', 'awk -F: \'{print $1}\' /etc/passwd'],
        ['paste', 'Unisce righe di file', 'paste file1 file2'],
        ['split', 'Divide file in pezzi', 'split -l 1000 bigfile part_'],
        ['nl', 'Numera le righe', 'nl /etc/passwd'],
      ]},
      { type: 'code', title: 'Pipeline pratiche', prompt: '# Top 10 directory più grandi\n$ du -sh /* 2>/dev/null | sort -rh | head -10\n\n# Utenti con shell bash\n$ grep "/bin/bash$" /etc/passwd | cut -d: -f1 | sort\n\n# Conta file .conf in /etc\n$ find /etc -name "*.conf" 2>/dev/null | wc -l\n\n# IP più frequenti nei log Apache\n$ awk \'{print $1}\' /var/log/apache2/access.log | sort | uniq -c | sort -rn | head', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede di saper combinare filtri con pipe. Ricorda: uniq funziona solo su righe CONSECUTIVE — usa sempre sort | uniq. tail -f segue un file in tempo reale.' },
    ]
  },

  'lpic1-101-3-3-1': {
    title: 'Gestione File — Basi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📁', text: 'Comandi Essenziali per i File' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Opzioni Importanti'], rows: [
        ['ls', 'Lista contenuto directory', '-l (dettagli), -a (nascosti), -h (human), -R (ricorsivo), -i (inode)'],
        ['cp', 'Copia file/directory', '-r (ricorsivo), -p (preserva permessi), -i (conferma)'],
        ['mv', 'Sposta/rinomina', '-i (conferma sovrascrittura), -v (verbose)'],
        ['rm', 'Rimuove', '-r (ricorsivo), -f (forza), -i (conferma)'],
        ['mkdir', 'Crea directory', '-p (crea genitori), -m (permessi)'],
        ['touch', 'Crea vuoto / aggiorna timestamp', 'touch -t 202312251200 file'],
        ['file', 'Identifica tipo file', 'file /bin/ls → "ELF 64-bit"'],
        ['stat', 'Info dettagliate (inode, permessi, date)', 'stat file → tutte le informazioni'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'rm -rf è pericoloso!', content: 'rm -rf cancella tutto ricorsivamente senza conferma. MAI eseguire rm -rf / o rm -rf * senza verificare la directory corrente. Un errore di battitura può distruggere il sistema.' },
    ]
  },

  'lpic1-101-3-3-2': {
    title: 'Gestione File — Avanzata — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Globbing e Ricerca File' },
      { type: 'table', headers: ['Pattern', 'Significato', 'Esempio'], rows: [
        ['*', 'Zero o più caratteri', 'ls *.txt → tutti i .txt'],
        ['?', 'Esattamente un carattere', 'ls file?.txt → file1.txt, fileA.txt'],
        ['[abc]', 'Un carattere dal set', 'ls file[13].txt → file1.txt, file3.txt'],
        ['[a-z]', 'Range di caratteri', 'ls [a-f]* → file che iniziano con a-f'],
        ['[!abc]', 'Un carattere NON nel set', 'ls [!0-9]* → non inizia con cifra'],
      ]},
      { type: 'table', headers: ['Comando', 'Funzione', 'Velocità'], rows: [
        ['find /etc -name "*.conf"', 'Cerca in tempo reale nel filesystem', 'Lento (scansiona il disco)'],
        ['find / -type d -name log', 'Cerca solo directory', 'Lento ma preciso'],
        ['find / -size +100M', 'File maggiori di 100MB', 'Lento'],
        ['locate filename', 'Cerca nel database indicizzato', 'Velocissimo (usa mlocate.db)'],
        ['updatedb', 'Aggiorna il database di locate', 'Eseguito di solito da cron'],
      ]},
      { type: 'heading', level: 2, emoji: '📦', text: 'Archiviazione con tar' },
      { type: 'code', title: 'Comandi tar essenziali', prompt: '# Creare archivio .tar.gz\n$ tar -czvf archivio.tar.gz directory/\n\n# Estrarre archivio\n$ tar -xzvf archivio.tar.gz\n\n# Listare contenuto senza estrarre\n$ tar -tzvf archivio.tar.gz\n\n# tar con bzip2 (migliore compressione)\n$ tar -cjvf archivio.tar.bz2 directory/\n\n# tar con xz (massima compressione)\n$ tar -cJvf archivio.tar.xz directory/', output: '' },
    ]
  },

  'lpic1-101-3-4-1': {
    title: 'Redirect — Basi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'I 3 Stream Standard' },
      { type: 'paragraph', text: 'Ogni processo Linux ha 3 stream standard: stdin (0), stdout (1) e stderr (2). I redirect permettono di deviare questi stream verso file o altri comandi.' },
      { type: 'table', headers: ['Operatore', 'Significato', 'Esempio'], rows: [
        ['>', 'stdout → file (sovrascrive)', 'ls > lista.txt'],
        ['>>', 'stdout → file (append)', 'echo "new" >> log.txt'],
        ['2>', 'stderr → file', 'find / -name x 2> errori.txt'],
        ['&>', 'stdout + stderr → file', 'cmd &> tutto.txt'],
        ['2>&1', 'stderr dove va stdout', 'cmd > out.txt 2>&1'],
        ['<', 'file → stdin', 'sort < nomi.txt'],
        ['/dev/null', '"Buco nero" — scarta output', 'cmd 2>/dev/null'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede la differenza tra > (sovrascrive) e >> (append), come redirigere stderr con 2>, e come combinare stdout+stderr con &> o 2>&1.' },
    ]
  },

  'lpic1-101-3-4-2': {
    title: 'Pipe e Avanzati — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Pipe, tee e xargs' },
      { type: 'table', headers: ['Costrutto', 'Funzione', 'Esempio'], rows: [
        ['cmd1 | cmd2', 'stdout di cmd1 → stdin di cmd2', 'ls -la | grep ".txt"'],
        ['tee file', 'Scrive su file E su stdout', 'ls | tee lista.txt | wc -l'],
        ['xargs', 'Costruisce comandi da stdin', 'find . -name "*.tmp" | xargs rm'],
        ['<<EOF...EOF', 'Here document — input multilinea', 'cat <<EOF\\nriga1\\nriga2\\nEOF'],
        ['<<<string', 'Here string — una riga', 'grep "x" <<<$VAR'],
      ]},
      { type: 'code', title: 'Esempi avanzati con pipe', prompt: '# Trova i 5 file più grandi in /var\n$ find /var -type f -exec du -h {} + 2>/dev/null | sort -rh | head -5\n\n# Cancella tutti i file .tmp (usando xargs)\n$ find /tmp -name "*.tmp" -print0 | xargs -0 rm -f\n\n# tee: salva E mostra\n$ df -h | tee disk_report.txt\n\n# Pipeline complessa\n$ ps aux | awk \'{print $11}\' | sort | uniq -c | sort -rn | head', output: '' },
    ]
  },

  'lpic1-101-3-5-1': {
    title: 'Processi — Basi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Gestione dei Processi' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Opzioni Utili'], rows: [
        ['ps aux', 'Tutti i processi con dettagli', 'ps -ef (formato POSIX)'],
        ['top', 'Monitor real-time', 'q=esci, k=kill, r=renice'],
        ['htop', 'top migliorato (interattivo)', 'F5=albero, F9=kill'],
        ['pgrep nome', 'Trova PID per nome', 'pgrep -l ssh'],
        ['kill PID', 'Invia segnale (default SIGTERM)', 'kill -9 PID (SIGKILL)'],
        ['killall nome', 'Kill per nome processo', 'killall firefox'],
        ['pkill pattern', 'Kill per pattern del nome', 'pkill -u user1'],
      ]},
      { type: 'heading', level: 2, emoji: '📡', text: 'Segnali Unix' },
      { type: 'table', headers: ['Segnale', 'Numero', 'Azione', 'Intercettabile?'], rows: [
        ['SIGTERM', '15', 'Terminazione pulita (default di kill)', 'Sì'],
        ['SIGKILL', '9', 'Terminazione forzata immediata', 'NO — mai intercettabile'],
        ['SIGINT', '2', 'Interruzione (Ctrl+C)', 'Sì'],
        ['SIGHUP', '1', 'Hangup — sessione chiusa', 'Sì (nohup lo ignora)'],
        ['SIGTSTP', '20', 'Sospensione (Ctrl+Z)', 'Sì'],
        ['SIGCONT', '18', 'Riprendi processo sospeso', 'Sì'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'SIGKILL è l\'ultima risorsa', content: 'Usa sempre SIGTERM (kill PID) prima di SIGKILL (kill -9 PID). SIGTERM permette al processo di chiudere file, liberare risorse e salvare dati. SIGKILL lo termina brutalmente e può causare corruzione dati.' },
    ]
  },

  'lpic1-101-3-5-2': {
    title: 'Job Control — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Gestione dei Job' },
      { type: 'table', headers: ['Azione', 'Comando/Tasto', 'Esempio'], rows: [
        ['Esegui in background', 'comando &', 'sleep 100 &'],
        ['Sospendi processo', 'Ctrl+Z', 'Sospende il processo corrente'],
        ['Lista job', 'jobs', 'Mostra stato di ogni job'],
        ['Porta in foreground', 'fg %N', 'fg %1 → riporta il job 1'],
        ['Riprendi in background', 'bg %N', 'bg %1 → riprende in background'],
        ['Immune a SIGHUP', 'nohup cmd &', 'nohup script.sh &'],
        ['Sessione persistente', 'screen / tmux', 'tmux → nuova sessione'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'nohup vs screen/tmux', content: 'nohup rende un singolo comando immune alla chiusura del terminale. screen e tmux creano sessioni intere che sopravvivono alla disconnessione e possono essere riattaccate (tmux attach, screen -r).' },
    ]
  },

  'lpic1-101-3-6-1': {
    title: 'Priorità dei Processi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Nice e Renice' },
      { type: 'paragraph', text: 'Il valore di nice determina la priorità di scheduling di un processo. Range: -20 (massima priorità) a +19 (minima priorità). Default: 0. Solo root può impostare valori negativi.' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Chi può usarlo?'], rows: [
        ['nice -n 10 cmd', 'Avvia con priorità bassa (+10)', 'Tutti gli utenti'],
        ['nice -n -5 cmd', 'Avvia con priorità alta (-5)', 'Solo root'],
        ['renice -n 15 -p PID', 'Cambia priorità di un processo attivo', 'Utenti: solo aumentare'],
        ['renice -n -10 -p PID', 'Aumenta priorità', 'Solo root'],
        ['top → colonna NI', 'Mostra valore nice di ogni processo', 'Tutti'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Ricorda: -20 = massima priorità, +19 = minima. Gli utenti normali possono solo AUMENTARE il valore nice (ridurre priorità). Solo root può impostare valori negativi.' },
    ]
  },

  'lpic1-101-3-7-1': {
    title: 'Regex — Basi — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Regular Expressions di Base (BRE)' },
      { type: 'table', headers: ['Metacarattere', 'Significato', 'Esempio grep'], rows: [
        ['.', 'Qualsiasi carattere singolo', 'grep "h.t" → hat, hot, hit'],
        ['*', 'Zero o più del precedente', 'grep "ab*c" → ac, abc, abbc'],
        ['^', 'Inizio riga', 'grep "^root" /etc/passwd'],
        ['$', 'Fine riga', 'grep "bash$" /etc/passwd'],
        ['[abc]', 'Un carattere dal set', 'grep "[aeiou]" file'],
        ['[^abc]', 'Un carattere NON nel set', 'grep "[^0-9]" file'],
        ['[a-z]', 'Range di caratteri', 'grep "[A-Z]" file'],
        ['\\', 'Escape del metacarattere', 'grep "\\." file (cerca il punto)'],
      ]},
      { type: 'table', headers: ['Opzione grep', 'Funzione'], rows: [
        ['-i', 'Case-insensitive'],
        ['-n', 'Mostra numeri di riga'],
        ['-v', 'Righe che NON corrispondono (inverso)'],
        ['-c', 'Conta le righe corrispondenti'],
        ['-r', 'Ricorsivo nelle directory'],
        ['-l', 'Solo nomi dei file con match'],
      ]},
    ]
  },

  'lpic1-101-3-7-2': {
    title: 'Regex — Estese — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Extended Regular Expressions (ERE)' },
      { type: 'paragraph', text: 'Le ERE (attivate con grep -E o egrep) aggiungono operatori che in BRE richiedono l\'escape con backslash.' },
      { type: 'table', headers: ['Operatore', 'BRE', 'ERE', 'Significato'], rows: [
        ['+', '\\+', '+', 'Uno o più del precedente'],
        ['?', '\\?', '?', 'Zero o uno del precedente'],
        ['|', '\\|', '|', 'Alternativa (OR)'],
        ['()', '\\(\\)', '()', 'Raggruppamento'],
        ['{n,m}', '\\{n,m\\}', '{n,m}', 'Da n a m ripetizioni'],
      ]},
      { type: 'code', title: 'Esempi pratici regex', prompt: '# Trovare errori o warning nei log\n$ grep -E "error|warning" /var/log/syslog\n\n# IP address pattern\n$ grep -E "[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}\\.[0-9]{1,3}" log\n\n# Righe vuote\n$ grep -c "^$" file\n\n# Username che iniziano con a-m\n$ grep -E "^[a-m]" /etc/passwd', output: '' },
    ]
  },

  'lpic1-101-3-8-1': {
    title: 'vi/vim — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '✏️', text: 'L\'Editor vi/vim' },
      { type: 'paragraph', text: 'vi è l\'editor di testo standard Unix, presente su OGNI sistema Linux. vim (Vi IMproved) è la versione moderna con syntax highlighting e plugin. L\'esame LPIC-1 richiede la conoscenza dei comandi base.' },
      { type: 'table', headers: ['Modalità', 'Attivazione', 'Funzione'], rows: [
        ['Normal', 'Esc', 'Navigazione e comandi'],
        ['Insert', 'i, I, a, A, o, O', 'Inserimento testo'],
        ['Visual', 'v, V, Ctrl+V', 'Selezione testo'],
        ['Command', ':', 'Comandi ex (salva, esci, cerca)'],
      ]},
      { type: 'table', headers: ['Comando', 'Azione'], rows: [
        [':wq o ZZ', 'Salva e esci'],
        [':q!', 'Esci senza salvare'],
        [':w file', 'Salva con nome'],
        ['dd', 'Cancella riga'],
        ['yy', 'Copia riga'],
        ['p', 'Incolla dopo il cursore'],
        ['u', 'Annulla (undo)'],
        ['Ctrl+R', 'Ripristina (redo)'],
        ['/pattern', 'Cerca avanti'],
        ['n / N', 'Prossimo / precedente risultato'],
        [':s/old/new/g', 'Sostituisci nella riga corrente'],
        [':%s/old/new/g', 'Sostituisci in tutto il file'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame richiede: saper aprire un file, passare in modalità insert (i), tornare a normal (Esc), salvare (:wq), uscire senza salvare (:q!), cancellare (dd), copiare (yy), incollare (p) e cercare (/pattern).' },
    ]
  },

  'lpic1-101-4-1-1': {
    title: 'Partizioni e Filesystem — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '💿', text: 'Strumenti di Partizionamento' },
      { type: 'table', headers: ['Strumento', 'Supporto', 'Caratteristiche'], rows: [
        ['fdisk', 'MBR (e GPT)', 'Interattivo, salvare con w, annullare con q. Più usato storicamente.'],
        ['gdisk', 'Solo GPT', 'Come fdisk ma specifico per GPT. Supporta GUID di partizione.'],
        ['parted', 'MBR + GPT', 'ATTENZIONE: applica le modifiche IMMEDIATAMENTE (no buffer).'],
        ['cfdisk', 'MBR + GPT', 'Interfaccia ncurses (semi-grafica). Più user-friendly.'],
      ]},
      { type: 'heading', level: 2, emoji: '📂', text: 'Filesystem Linux' },
      { type: 'table', headers: ['Filesystem', 'Journaling', 'Max File', 'Max Volume', 'Uso Tipico'], rows: [
        ['ext4', 'Sì', '16 TB', '1 EB', 'Default su molte distro, stabile e maturo'],
        ['XFS', 'Sì', '8 EB', '8 EB', 'Default RHEL, ottimo per file grandi'],
        ['Btrfs', 'Copy-on-Write', '16 EB', '16 EB', 'Snapshot, compressione, RAID integrato'],
        ['FAT32 (vfat)', 'No', '4 GB', '2 TB', 'EFI System Partition, USB portabili'],
        ['swap', 'N/A', 'N/A', 'N/A', 'Memoria virtuale'],
      ]},
      { type: 'code', title: 'Creare filesystem e swap', prompt: '# Formattare con ext4\n$ sudo mkfs.ext4 /dev/sda1\n\n# Formattare con XFS\n$ sudo mkfs.xfs /dev/sda2\n\n# Creare e attivare swap\n$ sudo mkswap /dev/sda3\n$ sudo swapon /dev/sda3\n\n# Mostrare UUID dei dispositivi\n$ blkid', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Ricorda: parted applica modifiche immediatamente (fdisk/gdisk richiedono w per salvare). mkfs.ext4 crea ext4, mkfs.xfs crea XFS. blkid mostra UUID e tipo filesystem.' },
    ]
  },

  'lpic1-101-4-2-1': {
    title: 'Integrità del Filesystem — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Verifica e Manutenzione' },
      { type: 'table', headers: ['Comando', 'Filesystem', 'Funzione', 'Nota'], rows: [
        ['fsck', 'Generico', 'Verifica e ripara (wrapper)', 'Il filesystem DEVE essere smontato!'],
        ['e2fsck', 'ext2/3/4', 'Verifica specifica per ext', '-y per rispondere sì a tutto'],
        ['xfs_repair', 'XFS', 'Riparazione XFS', 'Non usare fsck su XFS'],
        ['tune2fs', 'ext2/3/4', 'Modifica parametri', '-c (check count), -i (check interval)'],
        ['dumpe2fs', 'ext2/3/4', 'Dump informazioni dettagliate', 'Info su blocchi, inode, journal'],
      ]},
      { type: 'heading', level: 2, emoji: '📊', text: 'Spazio Disco' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Opzioni Comuni'], rows: [
        ['df -h', 'Spazio dischi montati', '-T (tipo FS), -i (inode), --total'],
        ['du -sh dir/', 'Spazio usato da directory', '-a (tutti i file), --max-depth=1'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Mai fsck su filesystem montato!', content: 'Eseguire fsck su un filesystem montato può causare corruzione dei dati. Smontare prima con umount, oppure avviare in rescue mode se è il filesystem root.' },
    ]
  },

  'lpic1-101-4-3-1': {
    title: 'Montaggio Filesystem — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'mount, umount e /etc/fstab' },
      { type: 'code', title: 'Comandi di montaggio', prompt: '# Montare un dispositivo\n$ sudo mount /dev/sda1 /mnt\n\n# Montare specificando il tipo\n$ sudo mount -t ext4 /dev/sda1 /mnt\n\n# Montare con opzioni\n$ sudo mount -o ro,noexec /dev/sda1 /mnt\n\n# Smontare\n$ sudo umount /mnt\n\n# Montare tutto da fstab\n$ sudo mount -a', output: '' },
      { type: 'heading', level: 2, emoji: '📋', text: '/etc/fstab — 6 Campi' },
      { type: 'table', headers: ['Campo', 'Significato', 'Esempio'], rows: [
        ['1. Dispositivo', 'UUID o /dev/sdXN', 'UUID=xxxx-xxxx'],
        ['2. Mount point', 'Directory di montaggio', '/home'],
        ['3. Tipo', 'Filesystem', 'ext4, xfs, swap, vfat'],
        ['4. Opzioni', 'Opzioni di montaggio', 'defaults, noexec, nosuid, ro'],
        ['5. Dump', 'Backup con dump (0=no, 1=sì)', '0'],
        ['6. Pass', 'Ordine fsck (0=skip, 1=root, 2=altri)', '2'],
      ]},
      { type: 'code', title: 'Esempio /etc/fstab', prompt: 'UUID=a1b2c3d4  /        ext4  defaults        0  1\nUUID=e5f6g7h8  /home    ext4  defaults        0  2\nUUID=i9j0k1l2  /boot    ext4  defaults        0  2\nUUID=m3n4o5p6  none     swap  sw              0  0\n/dev/sr0        /media   iso9660  ro,noauto    0  0', output: '' },
      { type: 'list', items: [
        { term: 'defaults', desc: 'rw, suid, dev, exec, auto, nouser, async — opzioni predefinite' },
        { term: 'noexec', desc: 'Impedisce esecuzione di programmi dal filesystem' },
        { term: 'nosuid', desc: 'Ignora bit SUID/SGID (sicurezza)' },
        { term: 'nodev', desc: 'Ignora file dispositivo' },
        { term: 'ro', desc: 'Read-only (sola lettura)' },
        { term: 'noauto', desc: 'Non montare con mount -a (solo manuale)' },
      ]},
    ]
  },

  'lpic1-101-4-5-1': {
    title: 'Permessi e Proprietà — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Permessi Unix: rwx' },
      { type: 'paragraph', text: 'Ogni file ha 3 set di permessi: proprietario (u), gruppo (g), altri (o). Ogni set ha 3 bit: read (4), write (2), execute (1).' },
      { type: 'table', headers: ['Ottale', 'Permessi', 'Significato'], rows: [
        ['755', 'rwxr-xr-x', 'Owner: tutto. Group/Others: leggi+esegui'],
        ['644', 'rw-r--r--', 'Owner: leggi+scrivi. Group/Others: solo leggi'],
        ['700', 'rwx------', 'Solo owner ha accesso'],
        ['666', 'rw-rw-rw-', 'Tutti leggono e scrivono (no exec)'],
        ['777', 'rwxrwxrwx', 'Tutti possono tutto (PERICOLOSO)'],
      ]},
      { type: 'heading', level: 2, emoji: '⭐', text: 'Permessi Speciali' },
      { type: 'table', headers: ['Bit', 'Ottale', 'Su File', 'Su Directory', 'Esempio'], rows: [
        ['SUID', '4000', 'Esegue come proprietario', '—', '/usr/bin/passwd (esegue come root)'],
        ['SGID', '2000', 'Esegue come gruppo', 'Nuovi file ereditano il gruppo', 'chmod g+s /shared/'],
        ['Sticky', '1000', '—', 'Solo owner può cancellare', '/tmp (chmod +t /tmp)'],
      ]},
      { type: 'heading', level: 2, emoji: '🎭', text: 'umask' },
      { type: 'paragraph', text: 'umask definisce i permessi da TOGLIERE ai nuovi file. File default: 666, directory default: 777. Con umask 022: file = 644 (666-022), directory = 755 (777-022).' },
      { type: 'code', title: 'Comandi permessi', prompt: '# Cambiare permessi\n$ chmod 755 script.sh\n$ chmod u+x,g-w file\n\n# Cambiare proprietario\n$ chown user:group file\n$ chown -R user:group dir/\n\n# Verificare umask\n$ umask\n022\n\n# Trovare file SUID nel sistema\n$ find / -perm /4000 -type f 2>/dev/null', output: '' },
    ]
  },

  'lpic1-101-4-6-1': {
    title: 'Hard e Symbolic Link — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Hard Link vs Symbolic Link' },
      { type: 'comparison', left: {
        title: 'Hard Link',
        items: ['Stesso inode del file originale', 'Stesso filesystem obbligatoriamente', 'NON funziona con directory', 'Il file esiste finché c\'è almeno 1 link', 'Creazione: ln file hardlink', 'ls -i mostra lo stesso inode']
      }, right: {
        title: 'Symbolic Link (Symlink)',
        items: ['Inode diverso — punta al percorso', 'Funziona tra filesystem diversi', 'Funziona con directory', 'Si rompe se il target viene rimosso', 'Creazione: ln -s target symlink', 'ls -l mostra -> target']
      }},
      { type: 'code', title: 'Esempi pratici', prompt: '# Hard link\n$ ln /etc/hostname /tmp/hostname_link\n$ ls -li /etc/hostname /tmp/hostname_link\n# Stesso inode!\n\n# Symbolic link\n$ ln -s /var/log /tmp/log_link\n$ ls -l /tmp/log_link\n# log_link -> /var/log\n\n# Verificare inode\n$ stat file', output: '' },
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede: differenza tra hard e symbolic link, che hard link non funziona con directory né tra filesystem diversi, e che un symlink si rompe se il target viene eliminato.' },
    ]
  },

  'lpic1-101-4-7-1': {
    title: 'FHS e Localizzazione File — Approfondimento',
    sections: [
      { type: 'heading', level: 2, emoji: '🗂️', text: 'Filesystem Hierarchy Standard (FHS)' },
      { type: 'table', headers: ['Directory', 'Contenuto', 'Statico/Variabile'], rows: [
        ['/', 'Root — contiene tutto il filesystem', 'Statico'],
        ['/bin', 'Comandi essenziali (ls, cp, cat)', 'Statico'],
        ['/sbin', 'Comandi di sistema (fdisk, fsck, reboot)', 'Statico'],
        ['/etc', 'Configurazione di sistema', 'Statico'],
        ['/home', 'Home directory degli utenti', 'Variabile'],
        ['/root', 'Home di root', 'Variabile'],
        ['/var', 'Dati variabili: log, spool, cache', 'Variabile'],
        ['/var/log', 'File di log del sistema', 'Variabile'],
        ['/tmp', 'File temporanei (cancellati al reboot)', 'Variabile'],
        ['/usr', 'Programmi e librerie utente (read-only)', 'Statico'],
        ['/usr/local', 'Software installato localmente', 'Statico'],
        ['/opt', 'Pacchetti software opzionali (terze parti)', 'Statico'],
        ['/srv', 'Dati dei servizi (web, FTP)', 'Variabile'],
        ['/proc', 'Filesystem virtuale — processi', 'Virtuale'],
        ['/sys', 'Filesystem virtuale — dispositivi', 'Virtuale'],
        ['/dev', 'Nodi dispositivo', 'Virtuale'],
        ['/boot', 'Kernel, initramfs, GRUB', 'Statico'],
        ['/lib', 'Librerie condivise per /bin e /sbin', 'Statico'],
        ['/media', 'Mount point per media rimovibili', 'Variabile'],
        ['/mnt', 'Mount point temporaneo manuale', 'Variabile'],
      ]},
      { type: 'heading', level: 2, emoji: '🔍', text: 'Comandi per Trovare File' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Velocità'], rows: [
        ['find', 'Ricerca in tempo reale nel filesystem', 'Lento (scansione disco)'],
        ['locate', 'Ricerca nel database indicizzato', 'Velocissimo'],
        ['updatedb', 'Aggiorna il database di locate', 'Periodico (cron)'],
        ['whereis', 'Trova binario, sorgente, man page', 'Veloce (percorsi noti)'],
        ['which', 'Percorso dell\'eseguibile nel PATH', 'Veloce'],
        ['type', 'Tipo di comando (builtin, alias, file)', 'Istantaneo'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede di conoscere le directory principali FHS e la loro funzione. Ricorda: /var = variabile, /tmp = temporaneo, /etc = configurazione, /usr = programmi, /opt = software opzionale.' },
    ]
  }
}
