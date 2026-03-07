// LPIC-1 102 Quiz Pool — Italian — Topic 106 (Interfaces & Desktops)

export const lpic1_102_topic2Quizzes_it = [
  {
    topicId: 2,
    question: "Quale variabile d'ambiente viene usata da un client X11 per determinare a quale server connettersi?",
    options: [
      "XSERVER",
      "DISPLAY",
      "GRAPHICS",
      "X11_HOST"
    ],
    correct: 1,
    explanation: "La variabile DISPLAY (es. :0.0) indica all'applicazione client dove visualizzare la finestra."
  },
  {
    topicId: 2,
    question: "Qual è il compito principale di un 'Window Manager'?",
    options: [
      "Fornire la schermata di login iniziale",
      "Gestire il posizionamento, il ridimensionamento e l'aspetto delle finestre",
      "Installare i driver della scheda video",
      "Configurare la connessione Wi-Fi"
    ],
    correct: 1,
    explanation: "Il Window Manager (WM) controlla i bordi, i pulsanti e la posizione delle finestre delle applicazioni."
  },
  {
    topicId: 2,
    question: "Quale dei seguenti è un 'Display Manager' comune?",
    options: [
      "Xorg",
      "GNOME Shell",
      "LightDM",
      "Wayland"
    ],
    correct: 2,
    explanation: "LightDM, insieme a GDM e SDDM, è un Display Manager che gestisce l'autenticazione grafica."
  },
  {
    topicId: 2,
    question: "A quale scopo serve lo strumento 'Orca' su un sistema Linux?",
    options: [
      "Per il monitoraggio delle performance del disco",
      "Come lettore di schermo (screen reader) per l'accessibilità",
      "Per la scansione dei pacchetti di rete",
      "Per la gestione dei container"
    ],
    correct: 1,
    explanation: "Orca è la tecnologia assistiva standard per utenti non vedenti o ipovedenti in ambienti come GNOME."
  },
  {
    topicId: 2,
    question: "In X11, quale comando viene usato per autorizzare un utente specifico a visualizzare applicazioni grafiche sul server X corrente?",
    options: [
      "xaccess",
      "xhost",
      "xallow",
      "xauth -p"
    ],
    correct: 1,
    explanation: "xhost +[hostname/username] permette di gestire i permessi di accesso al server X."
  },
  {
    topicId: 2,
    question: "Quale protocollo è considerato il successore moderno di X11?",
    options: [
      "DirectX",
      "VNC",
      "Wayland",
      "SPICE"
    ],
    correct: 2,
    explanation: "Wayland è il protocollo display server moderno che sta sostituendo X11 in molte distribuzioni."
  },
  {
    topicId: 2,
    question: "Cosa si intende per 'Sticky Keys' nelle opzioni di accessibilità?",
    options: [
      "Tasti che emettono un suono quando premuti",
      "Tasti modificatori (Shift, Ctrl) che rimangono 'attivi' fino alla pressione del tasto successivo",
      "La disabilitazione totale della tastiera",
      "La ripetizione veloce dei tasti premuti a lungo"
    ],
    correct: 1,
    explanation: "Le Sticky Keys (Tasti Permanenti) aiutano chi ha difficoltà a premere più tasti contemporaneamente."
  },
  {
    topicId: 2,
    question: "Quale file di configurazione principale (storico) gestisce le impostazioni di Xorg?",
    options: [
      "/etc/X11/xorg.settings",
      "/etc/X11/xorg.conf",
      "/usr/bin/xorg.conf",
      "/boot/x11.cfg"
    ],
    correct: 1,
    explanation: "/etc/X11/xorg.conf è il percorso standard per la configurazione del server X."
  },
  {
    topicId: 2,
    question: "Quale componente software nell'architettura X11 è responsabile della gestione dell'hardware video, del mouse e della tastiera?",
    options: [
      "X Client",
      "X Server",
      "Window Manager",
      "Display Manager"
    ],
    correct: 1,
    explanation: "Il server X interagisce direttamente con l'hardware locale del sistema."
  },
  {
    topicId: 2,
    question: "In quale directory vengono solitamente memorizzati i frammenti di configurazione X11 moderni?",
    options: [
      "/etc/X11/xorg.conf",
      "/etc/X11/xorg.conf.d/",
      "/etc/X11/config.d/",
      "/etc/graphics/"
    ],
    correct: 1,
    explanation: "I sistemi moderni usano la directory /etc/X11/xorg.conf.d/ per una configurazione modulare."
  },
  {
    topicId: 2,
    question: "Quale comando viene usato per gestire i cookie di autenticazione per le sessioni X6?",
    options: [
      "xhost",
      "xauth",
      "xset",
      "xrandr"
    ],
    correct: 1,
    explanation: "xauth gestisce il file .Xauthority che contiene i token di autenticazione MIT-MAGIC-COOKIE-1."
  },
  {
    topicId: 2,
    question: "Quale strumento permette di cambiare risoluzione e orientamento dello schermo da riga di comando in X11?",
    options: [
      "xwininfo",
      "xrandr",
      "xdpyinfo",
      "xset"
    ],
    correct: 1,
    explanation: "xrandr (X Resize, Rotate and Reflect) è l'utilità standard per la configurazione degli schermi."
  },
  {
    topicId: 2,
    question: "Quale toolkit grafico è usato principalmente dall'ambiente desktop KDE Plasma?",
    options: [
      "GTK",
      "Qt",
      "Swing",
      "Cocoa"
    ],
    correct: 1,
    explanation: "KDE è costruito sul toolkit Qt, mentre GNOME usa principalmente GTK."
  },
  {
    topicId: 2,
    question: "Quale dei seguenti NON è un ambiente desktop per Linux?",
    options: [
      "XFCE",
      "MATE",
      "Apache",
      "LXQt"
    ],
    correct: 2,
    explanation: "Apache è un server web, non un ambiente desktop."
  },
  {
    topicId: 2,
    question: "Quale tecnologia permette a un utente di accedere a un desktop grafico remoto tramite una rete?",
    options: [
      "VNC",
      "SSH con l'opzione -X",
      "RDP",
      "Tutte le precedenti"
    ],
    correct: 3,
    explanation: "VNC, RDP e il forwarding di X su SSH sono tutti metodi comuni per l'accesso remoto grafico."
  },
  {
    topicId: 2,
    question: "Spice è un protocollo di visualizzazione remota usato principalmente con quale tecnologia di virtualizzazione?",
    options: [
      "Docker",
      "KVM (virt-viewer)",
      "VirtualBox",
      "VMware"
    ],
    correct: 1,
    explanation: "Spice è ampiamente usato in ambienti KVM per fornire accesso ad alte prestazioni alle macchine virtuali."
  },
  {
    topicId: 2,
    question: "Quale funzione di accessibilità ignora le pressioni brevi o ripetute velocemente dello stesso tasto?",
    options: [
      "Slow Keys",
      "Sticky Keys",
      "Bounce Keys",
      "Repeat Keys"
    ],
    correct: 2,
    explanation: "Le Bounce Keys (Tasti Rimbalzati) sono progettate per utenti con tremori che potrebbero premere un tasto più volte involontariamente."
  },
  {
    topicId: 2,
    question: "Qual è lo scopo della funzione 'Slow Keys'?",
    options: [
      "Rallenta il cursore del mouse",
      "Richiede che un tasto sia premuto per un certo tempo prima di essere accettato",
      "Legge il testo sullo schermo lentamente",
      "Diminuisce il refresh rate del monitor"
    ],
    correct: 1,
    explanation: "Le Slow Keys aiutano a prevenire pressioni accidentali richiedendo una pressione prolungata."
  },
  {
    topicId: 2,
    question: "Quale funzione permette di controllare il puntatore del mouse usando il tastierino numerico?",
    options: [
      "Sticky Mouse",
      "Numeric Cursor",
      "Mouse Keys",
      "Key Mouse"
    ],
    correct: 2,
    explanation: "Le Mouse Keys permettono di muovere il puntatore usando i tasti della tastiera."
  },
  {
    topicId: 2,
    question: "Display Braille e sintetizzatori vocali sono categorizzati come:",
    options: [
      "Tecnologie Assistive",
      "Miglioramenti Visuali",
      "Driver Hardware",
      "Moduli del Kernel"
    ],
    correct: 0,
    explanation: "Queste sono Tecnologie Assistive (AT) progettate per aiutare persone con disabilità a usare il sistema."
  }
];
