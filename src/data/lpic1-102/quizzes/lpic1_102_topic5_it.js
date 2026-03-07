// LPIC-1 102 Quiz Pool — Italian — Topic 109 (Networking)

export const lpic1_102_topic5Quizzes_it = [
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
  },
  {
    topicId: 5,
    question: "Quale porta viene usata dal protocollo SSH (Secure Shell) per impostazione predefinita?",
    options: [
      "20",
      "21",
      "22",
      "23"
    ],
    correct: 2,
    explanation: "La porta 22 è lo standard per l'accesso remoto sicuro via SSH."
  },
  {
    topicId: 5,
    question: "Quanti bit vengono usati in un indirizzo IPv6 standard?",
    options: [
      "32",
      "64",
      "128",
      "256"
    ],
    correct: 2,
    explanation: "IPv6 usa indirizzi a 128 bit, espandendo enormemente lo spazio rispetto ai 32 bit di IPv4."
  },
  {
    topicId: 5,
    question: "Quale protocollo viene usato dall'utility 'ping' per testare la connettività di rete?",
    options: [
      "TCP",
      "UDP",
      "ICMP",
      "IGMP"
    ],
    correct: 2,
    explanation: "ping invia pacchetti ICMP Echo Request per verificare la raggiungibilità di un host."
  },
  {
    topicId: 5,
    question: "Quale protocollo è considerato 'senza connessione' (connectionless) e non garantisce la consegna dei pacchetti?",
    options: [
      "TCP",
      "UDP",
      "SSH",
      "FTP"
    ],
    correct: 1,
    explanation: "UDP (User Datagram Protocol) è connectionless e ha un overhead inferiore rispetto a TCP."
  },
  {
    topicId: 5,
    question: "Quale comando viene usato per visualizzare la tabella di instradamento (routing table) attuale del sistema?",
    options: [
      "ip show route",
      "ip route",
      "net-route",
      "route-view"
    ],
    correct: 1,
    explanation: "'ip route' (o il vecchio 'route -n') mostra come il kernel instrada i pacchetti."
  },
  {
    topicId: 5,
    question: "Quale utility di NetworkManager fornisce un'interfaccia a riga di comando per gestire le connessioni?",
    options: [
      "nmtui",
      "nmcli",
      "nm-edit",
      "nm-exec"
    ],
    correct: 1,
    explanation: "nmcli è lo strumento CLI principale per controllare NetworkManager."
  },
  {
    topicId: 5,
    question: "Sui sistemi basati su Debian (senza Netplan), quale file è usato principalmente per la configurazione statica delle interfacce?",
    options: [
      "/etc/network/interfaces",
      "/etc/sysconfig/network",
      "/etc/netconfig",
      "/etc/interfaces"
    ],
    correct: 0,
    explanation: "/etc/network/interfaces è il file di configurazione tradizionale per la rete in Debian."
  },
  {
    topicId: 5,
    question: "Cosa restituisce solitamente l'output del comando 'hostname -i'?",
    options: [
      "L'uptime attuale dell'host",
      "L'indirizzo IP associato al nome host locale",
      "Lo stato della connessione internet",
      "L'indirizzo del gateway predefinito"
    ],
    correct: 1,
    explanation: "L'opzione -i di hostname restituisce gli indirizzi IP assegnati all'host localmente."
  },
  {
    topicId: 5,
    question: "Quale comando viene usato per visualizzare o manipolare la cache ARP (Address Resolution Protocol)?",
    options: [
      "arping",
      "arp",
      "ip neighbor",
      "Sia arp che ip neighbor"
    ],
    correct: 3,
    explanation: "Sia il tradizionale 'arp' che il moderno 'ip neighbor' permettono di gestire la tabella ARP."
  },
  {
    topicId: 5,
    question: "Quale utility a riga di comando è usata per effettuare interrogazioni DNS e risolvere problemi di risoluzione nomi?",
    options: [
      "dig",
      "host",
      "nslookup",
      "Tutte le precedenti"
    ],
    correct: 3,
    explanation: "dig, host e nslookup sono tutti strumenti standard per interrogare i server DNS."
  },
  {
    topicId: 5,
    question: "Cosa fa la direttiva 'search' nel file /etc/resolv.conf?",
    options: [
      "Cerca tutti i server DNS disponibili nella subnet",
      "Definisce i nomi di dominio da appendere agli hostnames non qualificati",
      "Permette la ricerca di file sul server",
      "Forza una ricerca ricorsiva sul nameserver"
    ],
    correct: 1,
    explanation: "La direttiva search elenca i domini da provare quando un host viene cercato senza il suo FQDN."
  },
  {
    topicId: 5,
    question: "Se un server non riesce a raggiungere alcun host fuori dalla sua subnet locale, quale configurazione va controllata per prima?",
    options: [
      "Il nameserver in resolv.conf",
      "Il default gateway nella tabella di routing",
      "Il file /etc/hosts",
      "La dimensione dell'MTU dell'interfaccia"
    ],
    correct: 1,
    explanation: "Il default gateway è il responsabile dell'inoltro del traffico verso reti remote."
  }
];
