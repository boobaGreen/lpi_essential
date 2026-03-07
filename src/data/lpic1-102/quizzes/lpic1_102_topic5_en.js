// LPIC-1 102 Quiz Pool — English — Topic 109 (Networking)

export const lpic1_102_topic5Quizzes_en = [
  // ─── 109.1 Fundamentals of internet protocols (5 questions) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'What is the default port for the unencrypted HTTP protocol?',
    options: [
      '21',
      '22',
      '80',
      '443'
    ],
    correct: 2,
    explanation: 'Port 80 is reserved for unencrypted HTTP traffic.'
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which of the following ports is used by the SSH (Secure Shell) protocol by default?',
    options: ['20', '21', '22', '23'],
    correct: 2,
    explanation: 'Port 22 is the standard port for SSH remote access.',
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'How many bits are used in a standard IPv6 address?',
    options: ['32', '64', '128', '256'],
    correct: 2,
    explanation: 'IPv6 uses 128-bit addresses, significantly expanding the address space compared to IPv4 (32-bit).',
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which protocol is used by the `ping` utility to test network connectivity?',
    options: ['TCP', 'UDP', 'ICMP', 'IGMP'],
    correct: 2,
    explanation: '`ping` sends ICMP (Internet Control Message Protocol) Echo Request messages.',
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which protocol is considered "connectionless" and does not guarantee delivery of packets?',
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correct: 1,
    explanation: 'UDP (User Datagram Protocol) is connectionless and has less overhead than TCP.',
  },

  // ─── 109.2 Persistent network configuration (5 questions) ───
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "Which modern command replaces 'ifconfig' for viewing and configuring interface IP addresses?",
    options: [
      'ip addr',
      'netstat -i',
      'nmcli show',
      'ifup'
    ],
    correct: 0,
    explanation: "The 'ip' command from the iproute2 suite is the modern standard replacing ifconfig."
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'In Netplan, which file format is used to write network configurations?',
    options: [
      'XML',
      'JSON',
      'YAML',
      'INI'
    ],
    correct: 2,
    explanation: 'Netplan uses .yaml files to define configurations.'
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which command is used to display the current routing table for the system?',
    options: ['ip show route', 'ip route', 'net-route', 'route-view'],
    correct: 1,
    explanation: '`ip route` (or the legacy `route -n`) displays the kernel routing table.',
  },
  {
    id: 'q-lpic1-102-5-009', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which NetworkManager utility provides a command-line interface to manage network connections?',
    options: ['nmtui', 'nmcli', 'nm-edit', 'nm-exec'],
    correct: 1,
    explanation: '`nmcli` is the command-line tool for controlling NetworkManager.',
  },
  {
    id: 'q-lpic1-102-5-010', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'On a Debian-based system (without Netplan), which file is primarily used for static network interface configuration?',
    options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netconfig', '/etc/interfaces'],
    correct: 0,
    explanation: '/etc/network/interfaces is the traditional configuration file for Debian networking.',
  },

  // ─── 109.3 Basic network troubleshooting (5 questions) ───
  {
    id: 'q-lpic1-102-5-011', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which utility allows you to view the full path (hops) packets take to a remote host?',
    options: [
      'ping',
      'traceroute',
      'route -n',
      'netstat -r'
    ],
    correct: 1,
    explanation: 'traceroute traces all intermediate routers (hops) traversed by packets.'
  },
  {
    id: 'q-lpic1-102-5-012', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which command allows you to see which processes are listening on specific network ports (netstat substitute)?',
    options: [
      'ss -lnp',
      'ps aux',
      'top',
      'ip route'
    ],
    correct: 0,
    explanation: 'ss (socket statistics) is the modern command for analyzing network connections.'
  },
  {
    id: 'q-lpic1-102-5-013', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'What does the output of `hostname -i` typically provide?',
    options: [
      'The current uptime of the host',
      'The IP address of the local hostname',
      'The status of the internet connection',
      'The default gateway address'
    ],
    correct: 1,
    explanation: 'The `-i` flag with `hostname` returns the IP address(es) associated with the host.',
  },
  {
    id: 'q-lpic1-102-5-014', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Which command is used to display or manipulate the ARP (Address Resolution Protocol) cache?',
    options: ['arping', 'arp', 'ip neighbor', 'Both arp and ip neighbor'],
    correct: 3,
    explanation: 'The traditional `arp` command and the modern `ip neighbor` both deal with the ARP table.',
  },
  {
    id: 'q-lpic1-102-5-015', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'If a server cannot reach any host outside its local subnet, which configuration should be checked first?',
    options: ['The nameserver in resolv.conf', 'The default gateway in the routing table', 'The /etc/hosts file', 'The MTU size of the interface'],
    correct: 1,
    explanation: 'The default gateway is responsible for routing traffic destined for remote networks.',
  },

  // ─── 109.4 Configure client side DNS (5 questions) ───
  {
    id: 'q-lpic1-102-5-016', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Which file is consulted first by a Linux system to resolve a hostname into an IP address, before querying DNS?',
    options: [
      '/etc/resolv.conf',
      '/etc/hosts',
      '/etc/networks',
      '/etc/dns.conf'
    ],
    correct: 1,
    explanation: '/etc/hosts is the local static database with typical precedence over DNS.'
  },
  {
    id: 'q-lpic1-102-5-017', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "What does the 'nameserver' directive indicate within the /etc/resolv.conf file?",
    options: [
      'The IP address of the mail server',
      'The IP address of a DNS server to query',
      'The hostname of the local computer',
      'The address of the default gateway'
    ],
    correct: 1,
    explanation: 'nameserver defines the DNS servers that the client will use for name resolution.'
  },
  {
    id: 'q-lpic1-102-5-018', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which file defines the order in which the system tries to resolve hostnames (e.g., first files then dns)?',
    options: [
      '/etc/hosts',
      '/etc/resolv.conf',
      '/etc/nsswitch.conf',
      '/etc/resolv.order'
    ],
    correct: 2,
    explanation: '/etc/nsswitch.conf controls the lookup order for various system databases.'
  },
  {
    id: 'q-lpic1-102-5-019', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Which command-line utility is used to perform DNS lookups and troubleshoot name resolution issues?',
    options: ['dig', 'host', 'nslookup', 'All of the above'],
    correct: 3,
    explanation: '`dig`, `host`, and `nslookup` are all standard tools for DNS queries.',
  },
  {
    id: 'q-lpic1-102-5-020', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "What does the 'search' directive in /etc/resolv.conf do?",
    options: [
      'It searches for all available DNS servers on the subnet',
      'It defines the domain name to append to unqualified hostnames during resolution',
      'It allows searching for files on the server',
      'It forces a recursive search on the nameserver'
    ],
    correct: 1,
    explanation: "The 'search' directive lists domain names to try when a hostname is not provided with a FQDN.",
  },
];
