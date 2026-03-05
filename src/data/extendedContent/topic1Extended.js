export const topic1Extended = {
  '1-1': {
    title: 'Evoluzione di Linux e Sistemi Operativi',
    sections: [
      { type: 'heading', level: 2, emoji: '🏛️', text: 'Dalle Origini: Unix e la Rivoluzione' },
      { type: 'timeline', events: [
        { year: '1969', title: 'Nasce Unix', desc: 'Dennis Ritchie e Ken Thompson creano Unix ai Bell Labs di AT&T. Scritto in C, un linguaggio portabile, Unix diventa il riferimento per i sistemi operativi.' },
        { year: '1983', title: 'GNU Project', desc: 'Richard Stallman lancia il progetto GNU per creare un sistema operativo completamente libero. Nasce la Free Software Foundation (FSF) nel 1985.' },
        { year: '1987', title: 'Minix', desc: 'Andrew Tanenbaum crea Minix per scopi didattici. Sarà l\'ispirazione diretta per Linus Torvalds.' },
        { year: '1991', title: 'Linux!', desc: 'Linus Torvalds, studente finlandese di 21 anni, posta su comp.os.minix: "Sto facendo un sistema operativo libero, solo un hobby, non sarà grande e professionale come GNU". Nasce il kernel Linux 0.01.' },
        { year: '1992', title: 'Licenza GPL', desc: 'Il kernel Linux adotta la licenza GPL v2, diventando ufficialmente software libero.' },
        { year: '2004', title: 'Ubuntu', desc: 'Mark Shuttleworth fonda Canonical e rilascia Ubuntu, rendendo Linux accessibile a tutti.' },
        { year: 'Oggi', title: 'Linux è ovunque', desc: 'Oltre il 90% dei server cloud, 100% dei supercomputer TOP500, miliardi di dispositivi Android. Linux è il kernel più usato al mondo.' },
      ]},
      { type: 'infobox', variant: 'note', title: 'Linux vs GNU/Linux', content: 'Tecnicamente "Linux" è solo il kernel. Il sistema completo si chiama GNU/Linux perché include le utility GNU (gcc, bash, coreutils). Tuttavia, nell\'uso comune "Linux" indica l\'intero sistema operativo.' },

      { type: 'heading', level: 2, emoji: '📦', text: 'Le Famiglie di Distribuzioni' },
      { type: 'paragraph', text: 'Una distribuzione Linux è un sistema completo composto da: kernel Linux + utility GNU + gestore pacchetti + software selezionato + configurazione predefinita. Esistono centinaia di distribuzioni, organizzate in "famiglie" basate sulla derivazione e sul gestore pacchetti.' },
      { type: 'diagram', title: 'Albero delle Famiglie', boxes: [
        { label: 'Debian', color: '#e11d48', children: ['Ubuntu', 'Linux Mint', 'Kali Linux', 'Raspbian'] },
        { label: 'Red Hat', color: '#f59e0b', children: ['RHEL', 'Fedora', 'CentOS Stream', 'Rocky Linux'] },
        { label: 'SUSE', color: '#10b981', children: ['SLES', 'openSUSE Leap', 'openSUSE Tumbleweed'] },
        { label: 'Indipendenti', color: '#8b5cf6', children: ['Arch Linux', 'Gentoo', 'Slackware'] },
      ]},
      { type: 'table', headers: ['Distribuzione', 'Base', 'Pacchetti', 'Rilascio', 'Uso tipico'], rows: [
        ['Ubuntu', 'Debian', 'apt / .deb', 'Fisso (6 mesi)', 'Desktop, Cloud, Server'],
        ['Fedora', 'Red Hat', 'dnf / .rpm', 'Fisso (6 mesi)', 'Sviluppo, Desktop'],
        ['RHEL', 'Red Hat', 'yum/dnf / .rpm', 'LTS (10 anni)', 'Enterprise, Produzione'],
        ['Arch Linux', 'Indipendente', 'pacman', 'Rolling Release', 'Utenti esperti'],
        ['openSUSE', 'SUSE', 'zypper / .rpm', 'Misto', 'Desktop, Enterprise'],
        ['Debian', 'Originale', 'apt / .deb', 'Fisso (~2 anni)', 'Server, Stabilità'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Nell\'esame LPI ti verrà chiesto di riconoscere le famiglie di distribuzioni, i loro gestori pacchetti (.deb vs .rpm) e le differenze tra rilascio fisso (Ubuntu) e rolling release (Arch).' },

      { type: 'heading', level: 2, emoji: '📱', text: 'Linux nel Mondo Embedded e Cloud' },
      { type: 'paragraph', text: 'Linux non è solo per server e desktop. Il kernel Linux è il cuore di miliardi di dispositivi: smartphone Android, smart TV, router, sistemi di infotainment per auto, dispositivi IoT, droni e persino il rover Perseverance su Marte usa un processore con Linux!' },
      { type: 'table', headers: ['Settore', 'Esempio', 'Perché Linux?'], rows: [
        ['Smartphone', 'Android (3+ miliardi di dispositivi)', 'Kernel modificabile, licenza libera'],
        ['Cloud', 'AWS, Azure, GCP', '90%+ dei workload cloud usa Linux'],
        ['Supercomputer', 'TOP500', '100% dei supercomputer della classifica'],
        ['IoT', 'Raspberry Pi, Smart Home', 'Leggero, personalizzabile, gratuito'],
        ['Automotive', 'Tesla, Audi', 'Real-time, affidabile, personalizzabile'],
      ]},
      { type: 'story', title: 'Scenario: Perché il Cloud ama Linux', text: 'Immagina di essere il CTO di una startup. Devi scegliere il SO per 100 server nel cloud. Windows Server costa circa $500/server/anno in licenze. Con Linux? Zero costo di licenza, pieno controllo, enorme community di supporto, e puoi automatizzare tutto con script Bash. Ecco perché il 90% del cloud usa Linux.' },
    ]
  },

  '1-2': {
    title: 'Applicazioni Open Source',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Software Open Source per Ogni Esigenza' },
      { type: 'paragraph', text: 'Il mondo open source offre alternative gratuite e potenti a quasi ogni software commerciale. Conoscere queste applicazioni è fondamentale per l\'esame LPI e per la vita professionale con Linux.' },
      { type: 'table', headers: ['Categoria', 'Open Source', 'Equivalente Proprietario'], rows: [
        ['Suite Office', 'LibreOffice', 'Microsoft Office'],
        ['Browser Web', 'Firefox, Chromium', 'Chrome, Edge, Safari'],
        ['Editor Immagini', 'GIMP', 'Adobe Photoshop'],
        ['Modellazione 3D', 'Blender', 'Maya, 3ds Max'],
        ['Editor Video', 'Kdenlive, OpenShot', 'Adobe Premiere'],
        ['Editor Audio', 'Audacity', 'Adobe Audition'],
        ['Email Client', 'Thunderbird', 'Outlook'],
        ['Grafica Vettoriale', 'Inkscape', 'Adobe Illustrator'],
      ]},

      { type: 'heading', level: 2, emoji: '🌐', text: 'Applicazioni Server' },
      { type: 'paragraph', text: 'Linux domina il mondo dei server. I software server open source gestiscono la maggior parte del traffico Internet mondiale.' },
      { type: 'table', headers: ['Funzione', 'Software', 'Descrizione'], rows: [
        ['Web Server', 'Apache HTTP Server', 'Il server web più usato storicamente'],
        ['Web Server', 'Nginx', 'Alto performance, reverse proxy'],
        ['Database', 'MariaDB / MySQL', 'Database relazionale più diffuso'],
        ['Database', 'PostgreSQL', 'Database enterprise-grade'],
        ['File Sharing', 'Samba', 'Condivisione con client Windows (SMB/CIFS)'],
        ['File Sharing', 'NFS', 'Condivisione nativa Unix/Linux'],
        ['Email', 'Postfix / Dovecot', 'MTA e server IMAP/POP3'],
        ['DNS', 'BIND', 'Server DNS di riferimento'],
        ['Container', 'Docker', 'Piattaforma container'],
        ['Orchestrazione', 'Kubernetes', 'Orchestrazione container su scala'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI richiede di conoscere le principali applicazioni open source per desktop e server, e di saper distinguere tra software compilato (C, C++) e interpretato (Python, Bash, JavaScript).' },

      { type: 'heading', level: 2, emoji: '💻', text: 'Linguaggi di Programmazione' },
      { type: 'comparison', left: {
        title: 'Compilati',
        items: ['C / C++ — massima performance', 'Compilati in codice macchina', 'Il programma risultante è un binario', 'Bisogna ricompilare per ogni piattaforma']
      }, right: {
        title: 'Interpretati',
        items: ['Python, Perl, Ruby — versatili', 'Eseguiti riga per riga', 'Servono un interprete installato', 'Portabili tra piattaforme senza modifiche']
      }},
      { type: 'infobox', variant: 'note', title: 'Java è un caso speciale', content: 'Java viene compilato in bytecode (.class), che viene poi eseguito dalla JVM (Java Virtual Machine). Non è né puramente compilato né interpretato.' },

      { type: 'heading', level: 2, emoji: '📦', text: 'Gestione dei Pacchetti' },
      { type: 'paragraph', text: 'I gestori pacchetti sono il cuore della manutenzione software su Linux. Installano, aggiornano e rimuovono software gestendo automaticamente le dipendenze.' },
      { type: 'table', headers: ['Famiglia', 'Formato', 'Tool basso livello', 'Tool alto livello'], rows: [
        ['Debian/Ubuntu', '.deb', 'dpkg', 'apt / apt-get'],
        ['Red Hat/Fedora', '.rpm', 'rpm', 'yum / dnf'],
        ['SUSE', '.rpm', 'rpm', 'zypper'],
        ['Arch', '.pkg.tar.zst', 'pacman', 'pacman'],
      ]},
      { type: 'code', title: 'Esempi gestione pacchetti', prompt: '# Debian/Ubuntu\n$ sudo apt update && sudo apt install nginx\n\n# Red Hat/Fedora\n$ sudo dnf install nginx\n\n# SUSE\n$ sudo zypper install nginx', output: '' },
    ]
  },

  '1-3': {
    title: 'Software Open Source e Licenze',
    sections: [
      { type: 'heading', level: 2, emoji: '🗽', text: 'Le 4 Libertà del Software Libero' },
      { type: 'paragraph', text: 'Richard Stallman ha definito 4 libertà fondamentali che rendono un software "libero" (free as in freedom, non "gratuito"). Queste libertà sono la base filosofica di tutto il movimento open source.' },
      { type: 'list', items: [
        { term: 'Libertà 0', desc: 'Usare il programma per qualsiasi scopo, senza restrizioni' },
        { term: 'Libertà 1', desc: 'Studiare come funziona e adattarlo alle proprie necessità (richiede accesso al codice sorgente)' },
        { term: 'Libertà 2', desc: 'Ridistribuire copie per aiutare altri' },
        { term: 'Libertà 3', desc: 'Migliorare il programma e distribuire le modifiche alla community' },
      ]},
      { type: 'infobox', variant: 'tip', title: '"Free" non significa "gratuito"', content: '"Free software" si riferisce alla LIBERTÀ, non al prezzo. Puoi vendere software libero! Il codice sorgente deve essere disponibile, ma puoi chiedere un compenso per la distribuzione, il supporto o la personalizzazione.' },

      { type: 'heading', level: 2, emoji: '📋', text: 'Licenze Open Source a Confronto' },
      { type: 'comparison', left: {
        title: '🔒 Copyleft (GPL, AGPL)',
        items: ['I derivati DEVONO mantenere la stessa licenza', 'Il codice modificato deve restare open source', 'GPL: la più usata (kernel Linux)', 'AGPL: estende il copyleft ai servizi web/SaaS', 'LGPL: permette il linking con codice proprietario']
      }, right: {
        title: '🔓 Permissive (MIT, BSD, Apache)',
        items: ['I derivati possono diventare proprietari', 'Pochi vincoli: basta citare l\'autore', 'MIT: la più semplice e breve', 'BSD: simile a MIT, origine accademica', 'Apache 2.0: include concessione di brevetti']
      }},
      { type: 'table', headers: ['Licenza', 'Tipo', 'Copyleft?', 'Uso commerciale', 'Esempio'], rows: [
        ['GPL v3', 'Strong Copyleft', 'Sì', 'Sì', 'Kernel Linux, GCC'],
        ['LGPL', 'Weak Copyleft', 'Parziale', 'Sì', 'glibc, Qt'],
        ['AGPL', 'Network Copyleft', 'Sì (+ SaaS)', 'Sì', 'MongoDB (old)'],
        ['MIT', 'Permissiva', 'No', 'Sì', 'jQuery, Node.js'],
        ['Apache 2.0', 'Permissiva', 'No', 'Sì', 'Android, Kubernetes'],
        ['BSD', 'Permissiva', 'No', 'Sì', 'FreeBSD, nginx'],
        ['Creative Commons', 'Varia', 'Opzionale', 'Dipende', 'Documentazione, media'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede di distinguere tra licenze copyleft (GPL) e permissive (MIT, BSD, Apache). Ricorda: GPL = i derivati devono restare GPL. MIT/BSD = i derivati possono diventare proprietari.' },

      { type: 'heading', level: 2, emoji: '💼', text: 'Modelli di Business Open Source' },
      { type: 'paragraph', text: 'Contrariamente a quanto si pensa, le aziende possono fare soldi con l\'open source. Ecco i modelli principali:' },
      { type: 'list', items: [
        { term: 'Supporto e Sottoscrizioni', desc: 'Red Hat vende supporto enterprise per RHEL. Il codice è libero, il servizio no.' },
        { term: 'Dual Licensing', desc: 'Lo stesso software con licenza GPL (gratis) e commerciale (a pagamento per chi non vuole il copyleft).' },
        { term: 'SaaS', desc: 'Offri il software come servizio cloud (GitHub, GitLab).' },
        { term: 'Open Core', desc: 'Core open source + funzionalità premium proprietarie.' },
        { term: 'Consulenza e Formazione', desc: 'Certificazioni LPI, RHCSA, corsi di formazione.' },
      ]},
      { type: 'story', title: 'Scenario: Red Hat — da startup a $34 miliardi', text: 'Red Hat nacque nel 1993 distribuendo Linux in scatola. Il modello: il software è gratuito, ma le aziende pagano per supporto, aggiornamenti certificati e garanzie legali. Nel 2019 IBM ha acquisito Red Hat per 34 miliardi di dollari, dimostrando che l\'open source può creare enorme valore.' },
    ]
  },

  '1-4': {
    title: 'Competenze ICT e Linux',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Desktop Environment' },
      { type: 'paragraph', text: 'Linux offre diversi ambienti desktop. A differenza di Windows e macOS dove il desktop è uno, su Linux puoi scegliere il tuo!' },
      { type: 'table', headers: ['Desktop', 'Toolkit', 'Filosofia', 'RAM minima', 'Distribuzione tipica'], rows: [
        ['GNOME', 'GTK', 'Semplicità, modernità', '1 GB', 'Ubuntu, Fedora'],
        ['KDE Plasma', 'Qt', 'Personalizzazione totale', '1 GB', 'Kubuntu, openSUSE'],
        ['XFCE', 'GTK', 'Leggerezza, efficienza', '256 MB', 'Xubuntu, Manjaro'],
        ['LXDE/LXQt', 'GTK/Qt', 'Ultra-leggero', '128 MB', 'Lubuntu'],
        ['Cinnamon', 'GTK', 'Tradizionale, user-friendly', '512 MB', 'Linux Mint'],
        ['MATE', 'GTK', 'Fork di GNOME 2', '512 MB', 'Ubuntu MATE'],
      ]},
      { type: 'infobox', variant: 'tip', content: 'Se il tuo PC è vecchio, XFCE o LXQt sono perfetti. Se vuoi la massima personalizzazione, scegli KDE Plasma. Se preferisci semplicità, GNOME è l\'ideale.' },

      { type: 'heading', level: 2, emoji: '🔒', text: 'Privacy e Sicurezza Online' },
      { type: 'paragraph', text: 'Nell\'era digitale, proteggere la propria privacy e sicurezza è fondamentale. Linux offre strumenti potenti per la protezione dei dati.' },
      { type: 'table', headers: ['Minaccia', 'Cosa fa', 'Come proteggersi'], rows: [
        ['Cookie terze parti', 'Tracciano la navigazione tra siti diversi', 'Bloccarli nel browser, usare estensioni (uBlock Origin)'],
        ['Tracker web', 'Profilano le abitudini dell\'utente', 'Usare Firefox con Enhanced Tracking Protection'],
        ['Man-in-the-middle', 'Intercetta dati non criptati', 'Verificare HTTPS (lucchetto), usare VPN'],
        ['Phishing', 'Siti falsi per rubare credenziali', 'Verificare URL, non cliccare link sospetti'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Navigazione Privata ≠ Anonimato', content: 'La "navigazione in incognito" NON ti rende anonimo! Il tuo ISP, l\'azienda e i siti web possono ancora vedere il traffico. Nasconde solo la cronologia locale. Per vero anonimato serve Tor.' },

      { type: 'heading', level: 2, emoji: '🔑', text: 'Crittografia' },
      { type: 'paragraph', text: 'La crittografia è essenziale per proteggere dati in transito e a riposo. Linux supporta diversi livelli di crittografia.' },
      { type: 'comparison', left: {
        title: 'Crittografia Simmetrica',
        items: ['Una sola chiave per crittare e decrittare', 'Veloce, usata per grandi quantità di dati', 'Problema: come condividere la chiave?', 'Algoritmi: AES, ChaCha20']
      }, right: {
        title: 'Crittografia Asimmetrica',
        items: ['Due chiavi: pubblica + privata', 'Pubblica critta, privata decritta', 'Risolve il problema della distribuzione', 'Algoritmi: RSA, Ed25519']
      }},
      { type: 'table', headers: ['Strumento', 'Protegge', 'Come funziona'], rows: [
        ['TLS/SSL', 'Connessioni web (HTTPS)', 'Cripta il traffico tra browser e server'],
        ['SSH', 'Connessioni remote', 'Tunnel criptato per amministrazione remota'],
        ['GnuPG (GPG)', 'File, email, firme digitali', 'Crittografia asimmetrica, web of trust'],
        ['dm-crypt/LUKS', 'Intero disco', 'Crittografia full-disk in Linux'],
        ['OpenVPN/WireGuard', 'Traffico di rete', 'VPN per connessioni sicure'],
      ]},
      { type: 'code', title: 'Crittare un file con GPG', prompt: '# Generare una coppia di chiavi\n$ gpg --gen-key\n\n# Crittare un file per un destinatario\n$ gpg --encrypt --recipient utente@email.com file.txt\n\n# Decrittare\n$ gpg --decrypt file.txt.gpg > file.txt', output: '' },
    ]
  },
}
