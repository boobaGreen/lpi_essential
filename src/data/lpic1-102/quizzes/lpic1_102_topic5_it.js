// LPIC-1 102 Quiz Pool — Italian — Topic 109 (Networking)

export const lpic1_102_topic5Quizzes = [
  {
    topicId: 5,
    question: "Quale file viene consultato per primo da un sistema Linux per risolvere un nome host in un indirizzo IP, prima di interrogare il DNS?",
    options: [
      "/etc/resolv.conf",
      "/etc/hosts",
      "/etc/networks",
      "/etc/dns.conf"
    ],
    correct: 1,
    explanation: "/etc/hosts è il database locale statico con precedenza tipica sul DNS."
  },
  {
    topicId: 5,
    question: "Quale comando moderno sostituisce 'ifconfig' per visualizzare e configurare gli indirizzi IP delle interfacce?",
    options: [
      "ip addr",
      "netstat -i",
      "nmcli show",
      "ifup"
    ],
    correct: 0,
    explanation: "Il comando 'ip' della suite iproute2 è lo standard moderno che sostituisce ifconfig."
  },
  {
    topicId: 5,
    question: "Cosa indica la direttiva 'nameserver' all'interno del file /etc/resolv.conf?",
    options: [
      "L'indirizzo IP del server di posta",
      "L'indirizzo IP di un server DNS da interrogare",
      "Il nome host del computer locale",
      "L'indirizzo del gateway predefinito"
    ],
    correct: 1,
    explanation: "nameserver definisce i server DNS che il client userà per la risoluzione dei nomi."
  },
  {
    topicId: 5,
    question: "Quale utility permette di visualizzare il percorso completo (hop) dei pacchetti verso un host remoto?",
    options: [
      "ping",
      "traceroute",
      "route -n",
      "netstat -r"
    ],
    correct: 1,
    explanation: "traceroute traccia tutti i router (hop) attraversati dai pacchetti."
  },
  {
    topicId: 5,
    question: "Quale comando permette di visualizzare quali processi stanno ascoltando su porte di rete specifiche (sostituto di netstat)?",
    options: [
      "ss -lnp",
      "ps aux",
      "top",
      "ip route"
    ],
    correct: 0,
    explanation: "ss (socket statistics) è il comando moderno per analizzare le connessioni di rete."
  },
  {
    topicId: 5,
    question: "In Netplan, quale formato di file viene usato per scrivere le configurazioni di rete?",
    options: [
      "XML",
      "JSON",
      "YAML",
      "INI"
    ],
    correct: 2,
    explanation: "Netplan usa file .yaml per definire le configurazioni."
  },
  {
    topicId: 5,
    question: "Qual è la porta di default per il protocollo HTTP?",
    options: [
      "21",
      "22",
      "80",
      "443"
    ],
    correct: 2,
    explanation: "La porta 80 è riservata al traffico HTTP non criptato."
  },
  {
    topicId: 5,
    question: "Quale file definisce l'ordine con cui il sistema cerca di risolvere i nomi host (es. prima file poi dns)?",
    options: [
      "/etc/hosts",
      "/etc/resolv.conf",
      "/etc/nsswitch.conf",
      "/etc/resolv.order"
    ],
    correct: 2,
    explanation: "/etc/nsswitch.conf controlla l'ordine dei database di sistema (hosts, passwd, ecc.)."
  }
];
