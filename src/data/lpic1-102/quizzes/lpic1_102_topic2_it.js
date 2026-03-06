// LPIC-1 102 Quiz Pool — Italian — Topic 106 (Interfaces & Desktops)

export const lpic1_102_topic2Quizzes = [
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
  }
];
