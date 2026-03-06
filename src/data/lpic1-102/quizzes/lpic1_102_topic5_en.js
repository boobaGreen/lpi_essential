// LPIC-1 102 Quiz Pool — English — Topic 109 (Networking)

export const lpic1_102_topic5Quizzes_en = [
  {
    topicId: 5,
    question: "Which file is consulted first by a Linux system to resolve a hostname into an IP address, before querying DNS?",
    options: [
      "/etc/resolv.conf",
      "/etc/hosts",
      "/etc/networks",
      "/etc/dns.conf"
    ],
    correct: 1,
    explanation: "/etc/hosts is the local static database with typical precedence over DNS."
  },
  {
    topicId: 5,
    question: "Which modern command replaces 'ifconfig' for viewing and configuring interface IP addresses?",
    options: [
      "ip addr",
      "netstat -i",
      "nmcli show",
      "ifup"
    ],
    correct: 0,
    explanation: "The 'ip' command from the iproute2 suite is the modern standard replacing ifconfig."
  },
  {
    topicId: 5,
    question: "What does the 'nameserver' directive indicate within the /etc/resolv.conf file?",
    options: [
      "The IP address of the mail server",
      "The IP address of a DNS server to query",
      "The hostname of the local computer",
      "The address of the default gateway"
    ],
    correct: 1,
    explanation: "nameserver defines the DNS servers that the client will use for name resolution."
  },
  {
    topicId: 5,
    question: "Which utility allows you to view the full path (hops) packets take to a remote host?",
    options: [
      "ping",
      "traceroute",
      "route -n",
      "netstat -r"
    ],
    correct: 1,
    explanation: "traceroute traces all intermediate routers (hops) traversed by packets."
  },
  {
    topicId: 5,
    question: "Which command allows you to see which processes are listening on specific network ports (netstat substitute)?",
    options: [
      "ss -lnp",
      "ps aux",
      "top",
      "ip route"
    ],
    correct: 0,
    explanation: "ss (socket statistics) is the modern command for analyzing network connections."
  },
  {
    topicId: 5,
    question: "In Netplan, which file format is used to write network configurations?",
    options: [
      "XML",
      "JSON",
      "YAML",
      "INI"
    ],
    correct: 2,
    explanation: "Netplan uses .yaml files to define configurations."
  },
  {
    topicId: 5,
    question: "What is the default port for the HTTP protocol?",
    options: [
      "21",
      "22",
      "80",
      "443"
    ],
    correct: 2,
    explanation: "Port 80 is reserved for unencrypted HTTP traffic."
  },
  {
    topicId: 5,
    question: "Which file defines the order in which the system tries to resolve hostnames (e.g., first files then dns)?",
    options: [
      "/etc/hosts",
      "/etc/resolv.conf",
      "/etc/nsswitch.conf",
      "/etc/resolv.order"
    ],
    correct: 2,
    explanation: "/etc/nsswitch.conf controls the lookup order for various system databases."
  }
];
