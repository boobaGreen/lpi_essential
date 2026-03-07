// LPIC-1 102 Quiz Pool — French — Topic 109 (Notions de réseau)

export const lpic1_102_topic5Quizzes_fr = [
  // ─── 109.1 Fondamentaux des protocoles Internet (5 questions) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Quel est le port par défaut pour le protocole HTTP non chiffré ?",
    options: [
      '21',
      '22',
      '80',
      '443'
    ],
    correct: 2,
    explanation: "Le port 80 est réservé au trafic HTTP non chiffré."
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Lequel des ports suivants est utilisé par défaut par le protocole SSH (Secure Shell) ?",
    options: ['20', '21', '22', '23'],
    correct: 2,
    explanation: "Le port 22 est le port standard pour l'accès distant via SSH.",
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Combien de bits sont utilisés dans une adresse IPv6 standard ?",
    options: ['32', '64', '128', '256'],
    correct: 2,
    explanation: "IPv6 utilise des adresses de 128 bits, ce qui augmente considérablement l'espace d'adressage par rapport à IPv4 (32 bits).",
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Quel protocole est utilisé par l'utilitaire `ping` pour tester la connectivité réseau ?",
    options: ['TCP', 'UDP', 'ICMP', 'IGMP'],
    correct: 2,
    explanation: "`ping` envoie des messages ICMP (Internet Control Message Protocol) Echo Request.",
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Quel protocole est considéré comme étant 'sans connexion' et ne garantit pas la livraison des paquets ?",
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correct: 1,
    explanation: "UDP (User Datagram Protocol) est sans connexion et a moins de surcharge que TCP.",
  },

  // ─── 109.2 Configuration réseau persistante (5 questions) ───
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Quelle commande moderne remplace 'ifconfig' pour visualiser et configurer les adresses IP des interfaces ?",
    options: [
      'ip addr',
      'netstat -i',
      'nmcli show',
      'ifup'
    ],
    correct: 0,
    explanation: "La commande 'ip' de la suite iproute2 est le standard moderne qui remplace ifconfig."
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Dans Netplan, quel format de fichier est utilisé pour écrire les configurations réseau ?",
    options: [
      'XML',
      'JSON',
      'YAML',
      'INI'
    ],
    correct: 2,
    explanation: "Netplan utilise des fichiers .yaml pour définir les configurations."
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande est utilisée pour afficher la table de routage actuelle du système ?",
    options: ['ip show route', 'ip route', 'net-route', 'route-view'],
    correct: 1,
    explanation: "`ip route` (ou l'héritage `route -n`) affiche la table de routage du noyau.",
  },
  {
    id: 'q-lpic1-102-5-009', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Quel utilitaire de NetworkManager fournit une interface en ligne de commande pour gérer les connexions réseau ?",
    options: ['nmtui', 'nmcli', 'nm-edit', 'nm-exec'],
    correct: 1,
    explanation: "`nmcli` est l'outil en ligne de commande pour contrôler NetworkManager.",
  },
  {
    id: 'q-lpic1-102-5-010', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "Sur un système basé sur Debian (sans Netplan), quel fichier est principalement utilisé pour la configuration statique des interfaces réseau ?",
    options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netconfig', '/etc/interfaces'],
    correct: 0,
    explanation: "/etc/network/interfaces est le fichier de configuration traditionnel pour le réseau sous Debian.",
  },

  // ─── 109.3 Dépannage réseau de base (5 questions) ───
  {
    id: 'q-lpic1-102-5-011', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Quel utilitaire permet de voir le chemin complet (sauts) emprunté par les paquets vers un hôte distant ?",
    options: [
      'ping',
      'traceroute',
      'route -n',
      'netstat -r'
    ],
    correct: 1,
    explanation: "traceroute suit tous les routeurs intermédiaires (sauts) traversés par les paquets."
  },
  {
    id: 'q-lpic1-102-5-012', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Quelle commande permet de voir quels processus écoutent sur des ports réseau spécifiques (remplaçant netstat) ?",
    options: [
      'ss -lnp',
      'ps aux',
      'top',
      'ip route'
    ],
    correct: 0,
    explanation: "ss (socket statistics) est la commande moderne pour analyser les connexions réseau."
  },
  {
    id: 'q-lpic1-102-5-013', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Que fournit typiquement la sortie de `hostname -i` ?",
    options: [
      "Le temps de fonctionnement actuel de l'hôte",
      "L'adresse IP du nom d'hôte local",
      "L'état de la connexion Internet",
      "L'adresse de la passerelle par défaut"
    ],
    correct: 1,
    explanation: "L'option `-i` avec `hostname` renvoie l'adresse (ou les adresses) IP associée(s) à l'hôte.",
  },
  {
    id: 'q-lpic1-102-5-014', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "Quelle commande est utilisée pour afficher ou manipuler le cache ARP (Address Resolution Protocol) ?",
    options: ['arping', 'arp', 'ip neighbor', 'À la fois arp et ip neighbor'],
    correct: 3,
    explanation: "La commande traditionnelle `arp` et la commande moderne `ip neighbor` traitent toutes deux de la table ARP.",
  },
  {
    id: 'q-lpic1-102-5-015', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Si un serveur ne peut atteindre aucun hôte en dehors de son sous-réseau local, quel réglage doit être vérifié en premier ?",
    options: ["Le serveur de noms dans resolv.conf", "La passerelle par défaut (default gateway) dans la table de routage", "Le fichier /etc/hosts", "La taille MTU de l'interface"],
    correct: 1,
    explanation: "La passerelle par défaut est responsable de l'acheminement du trafic destiné aux réseaux distants.",
  },

  // ─── 109.4 Configurer le DNS côté client (5 questions) ───
  {
    id: 'q-lpic1-102-5-016', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Quel fichier un système Linux consulte-t-il en premier pour résoudre un nom d'hôte en une adresse IP, avant d'interroger le DNS ?",
    options: [
      '/etc/resolv.conf',
      '/etc/hosts',
      '/etc/networks',
      '/etc/dns.conf'
    ],
    correct: 1,
    explanation: "/etc/hosts est la base de données statique locale qui a généralement préséance sur le DNS."
  },
  {
    id: 'q-lpic1-102-5-017', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Qu'indique la directive 'nameserver' dans le fichier /etc/resolv.conf ?",
    options: [
      "L'adresse IP du serveur de messagerie",
      "L'adresse IP d'un serveur DNS à interroger",
      "Le nom d'hôte de l'ordinateur local",
      "L'adresse de la passerelle par défaut"
    ],
    correct: 1,
    explanation: "nameserver définit les serveurs DNS que le client utilisera pour la résolution de noms."
  },
  {
    id: 'q-lpic1-102-5-018', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Quel fichier définit l'ordre dans lequel le système tente de résoudre les noms d'hôtes (par ex. fichiers d'abord, puis dns) ?",
    options: [
      '/etc/hosts',
      '/etc/resolv.conf',
      '/etc/nsswitch.conf',
      '/etc/resolv.order'
    ],
    correct: 2,
    explanation: "/etc/nsswitch.conf contrôle l'ordre de recherche pour diverses bases de données système."
  },
  {
    id: 'q-lpic1-102-5-019', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "Quel utilitaire en ligne de commande est utilisé pour effectuer des requêtes DNS et dépanner la résolution de noms ?",
    options: ['dig', 'host', 'nslookup', 'Toutes les réponses ci-dessus'],
    correct: 3,
    explanation: "`dig`, `host` et `nslookup` sont des outils standards pour effectuer des requêtes DNS.",
  },
  {
    id: 'q-lpic1-102-5-020', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "Que fait la directive 'search' dans /etc/resolv.conf ?",
    options: [
      "Cherche tous les serveurs DNS disponibles dans le sous-réseau",
      "Définit le nom de domaine à ajouter aux noms d'hôtes non qualifiés lors de la résolution",
      "Permet de rechercher des fichiers sur le serveur",
      "Force une recherche récursive sur le serveur de noms"
    ],
    correct: 1,
    explanation: "La directive 'search' liste les noms de domaine à essayer lorsqu'un nom d'hôte n'est pas fourni avec un FQDN (Full Qualified Domain Name)."
  },
];
