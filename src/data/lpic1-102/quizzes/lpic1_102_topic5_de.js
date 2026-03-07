// LPIC-1 102 Quiz Pool — German — Topic 109 (Netzwerk-Grundlagen)

export const lpic1_102_topic5Quizzes_de = [
  // ─── 109.1 Grundlagen von Internetprotokollen (5 Fragen) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Was ist der Standardport für das unverschlüsselte HTTP-Protokoll?',
    options: [
      '21',
      '22',
      '80',
      '443'
    ],
    correct: 2,
    explanation: 'Port 80 ist für unverschlüsselten HTTP-Verkehr reserviert.'
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Welcher der folgenden Ports wird standardmäßig vom SSH-Protokoll (Secure Shell) verwendet?',
    options: ['20', '21', '22', '23'],
    correct: 2,
    explanation: 'Port 22 ist der Standardport für den SSH-Fernzugriff.',
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Wie viele Bits werden in einer Standard-IPv6-Adresse verwendet?',
    options: ['32', '64', '128', '256'],
    correct: 2,
    explanation: 'IPv6 verwendet 128-Bit-Adressen, was den Adressraum im Vergleich zu IPv4 (32-Bit) erheblich erweitert.',
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welches Protokoll wird vom `ping`-Dienstprogramm verwendet, um die Netzwerkkonnektivität zu testen?',
    options: ['TCP', 'UDP', 'ICMP', 'IGMP'],
    correct: 2,
    explanation: '`ping` sendet ICMP (Internet Control Message Protocol) Echo Request-Nachrichten.',
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Welches Protokoll gilt als "verbindungslos" und garantiert keine Zustellung von Paketen?',
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correct: 1,
    explanation: 'UDP (User Datagram Protocol) ist verbindungslos und hat weniger Overhead als TCP.',
  },

  // ─── 109.2 Dauerhafte Netzwerkkonfiguration (5 Fragen) ───
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Welcher moderne Befehl ersetzt "ifconfig" zum Anzeigen und Konfigurieren von Interface-IP-Adressen?',
    options: [
      'ip addr',
      'netstat -i',
      'nmcli show',
      'ifup'
    ],
    correct: 0,
    explanation: 'Der Befehl "ip" aus der iproute2-Suite ist der moderne Standard, der ifconfig ersetzt.'
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welches Dateiformat wird in Netplan verwendet, um Netzwerkkonfigurationen zu schreiben?',
    options: [
      'XML',
      'JSON',
      'YAML',
      'INI'
    ],
    correct: 2,
    explanation: 'Netplan verwendet .yaml-Dateien, um Konfigurationen zu definieren.'
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um die aktuelle Routing-Tabelle des Systems anzuzeigen?',
    options: ['ip show route', 'ip route', 'net-route', 'route-view'],
    correct: 1,
    explanation: '`ip route` (oder das veraltete `route -n`) zeigt die Kernel-Routing-Tabelle an.',
  },
  {
    id: 'q-lpic1-102-5-009', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welches NetworkManager-Utility bietet eine Befehlszeilenschnittstelle zur Verwaltung von Netzwerkverbindungen?',
    options: ['nmtui', 'nmcli', 'nm-edit', 'nm-exec'],
    correct: 1,
    explanation: '`nmcli` ist das Befehlszeilentool zur Steuerung des NetworkManagers.',
  },
  {
    id: 'q-lpic1-102-5-010', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Welche Datei wird auf einem Debian-basierten System (ohne Netplan) primär für die statische Konfiguration von Netzwerkschnittstellen verwendet?',
    options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netconfig', '/etc/interfaces'],
    correct: 0,
    explanation: '/etc/network/interfaces ist die traditionelle Konfigurationsdatei für das Debian-Netzwerk.',
  },

  // ─── 109.3 Grundlegende Netzwerk-Fehlersuche (5 Fragen) ───
  {
    id: 'q-lpic1-102-5-011', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Welches Utility ermöglicht es Ihnen, den vollständigen Pfad (Hops) anzuzeigen, den Pakete zu einem Remote-Host nehmen?',
    options: [
      'ping',
      'traceroute',
      'route -n',
      'netstat -r'
    ],
    correct: 1,
    explanation: 'traceroute verfolgt alle Zwischenrouter (Hops), die von Paketen durchlaufen werden.'
  },
  {
    id: 'q-lpic1-102-5-012', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl ermöglicht es Ihnen zu sehen, welche Prozesse an bestimmten Netzwerkports lauschen (Ersatz für netstat)?',
    options: [
      'ss -lnp',
      'ps aux',
      'top',
      'ip route'
    ],
    correct: 0,
    explanation: 'ss (socket statistics) ist der moderne Befehl zur Analyse von Netzwerkverbindungen.'
  },
  {
    id: 'q-lpic1-102-5-013', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Was liefert die Ausgabe von `hostname -i` normalerweise?',
    options: [
      'Die aktuelle Uptime des Hosts',
      'Die IP-Adresse des lokalen Hostnamens',
      'Den Status der Internetverbindung',
      'Die Adresse des Standard-Gateways'
    ],
    correct: 1,
    explanation: 'Das Flag `-i` bei `hostname` gibt die dem Host zugeordnete(n) IP-Adresse(n) zurück.',
  },
  {
    id: 'q-lpic1-102-5-014', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um den ARP-Cache (Address Resolution Protocol) anzuzeigen oder zu manipulieren?',
    options: ['arping', 'arp', 'ip neighbor', 'Sowohl arp als auch ip neighbor'],
    correct: 3,
    explanation: 'Der traditionelle `arp`-Befehl und das moderne `ip neighbor` befassen sich beide mit der ARP-Tabelle.',
  },
  {
    id: 'q-lpic1-102-5-015', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Wenn ein Server keinen Host außerhalb seines lokalen Subnetzes erreichen kann, welche Konfiguration sollte zuerst geprüft werden?',
    options: ['Der Nameserver in resolv.conf', 'Das Standard-Gateway in der Routing-Tabelle', 'Die /etc/hosts Datei', 'Die MTU-Größe des Interfaces'],
    correct: 1,
    explanation: 'Das Standard-Gateway ist für das Routing von Verkehr verantwortlich, der für entfernte Netzwerke bestimmt ist.',
  },

  // ─── 109.4 Client-seitiges DNS konfigurieren (5 Fragen) ───
  {
    id: 'q-lpic1-102-5-016', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Welche Datei wird von einem Linux-System zuerst konsultiert, um einen Hostnamen in eine IP-Adresse aufzulösen, bevor DNS abgefragt wird?',
    options: [
      '/etc/resolv.conf',
      '/etc/hosts',
      '/etc/networks',
      '/etc/dns.conf'
    ],
    correct: 1,
    explanation: '/etc/hosts ist die lokale statische Datenbank, die normalerweise Vorrang vor DNS hat.'
  },
  {
    id: 'q-lpic1-102-5-017', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Was gibt die Direktive "nameserver" in der Datei /etc/resolv.conf an?',
    options: [
      'Die IP-Adresse des Mailservers',
      'Die IP-Adresse eines abzufragenden DNS-Servers',
      'Den Hostnamen des lokalen Computers',
      'Die Adresse des Standard-Gateways'
    ],
    correct: 1,
    explanation: 'nameserver definiert die DNS-Server, die der Client zur Namensauflösung verwenden soll.'
  },
  {
    id: 'q-lpic1-102-5-018', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welche Datei definiert die Reihenfolge, in der das System versucht, Hostnamen aufzulösen (z. B. zuerst Files, dann DNS)?',
    options: [
      '/etc/hosts',
      '/etc/resolv.conf',
      '/etc/nsswitch.conf',
      '/etc/resolv.order'
    ],
    correct: 2,
    explanation: '/etc/nsswitch.conf steuert die Suchreihenfolge für verschiedene Systemdatenbanken.'
  },
  {
    id: 'q-lpic1-102-5-019', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welches Kommandozeilenprogramm wird verwendet, um DNS-Lookups durchzuführen und Probleme bei der Namensauflösung zu beheben?',
    options: ['dig', 'host', 'nslookup', 'Alle oben genannten'],
    correct: 3,
    explanation: '`dig`, `host` und `nslookup` sind Standardwerkzeuge für DNS-Abfragen.',
  },
  {
    id: 'q-lpic1-102-5-020', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Was bewirkt die Direktive "search" in /etc/resolv.conf?',
    options: [
      'Sie sucht nach allen verfügbaren DNS-Servern im Subnetz',
      'Sie definiert den Domänennamen, der bei der Auflösung an nicht qualifizierte Hostnamen angehängt werden soll',
      'Sie ermöglicht das Suchen nach Dateien auf dem Server',
      'Sie erzwingt eine rekursive Suche auf dem Nameserver'
    ],
    correct: 1,
    explanation: 'Die Direktive "search" listet Domänennamen auf, die ausprobiert werden sollen, wenn ein Hostname nicht mit einem FQDN angegeben wurde.',
  },
];
