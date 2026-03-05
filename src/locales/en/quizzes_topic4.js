export const topic4Quizzes = [
  {
    "lessonId": "4-1",
    "question": "What type of OS is designed to ensure long-term uptime and support?",
    "options": [
      "Consumer",
      "Enterprise",
      "Embedded",
      "Mobile"
    ],
    "correct": 1,
    "explanation": "Enterprise systems (e.g. RHEL, SLES) offer long-term support and high reliability."
  },
  {
    "lessonId": "4-1",
    "question": "Which OS is used by most supercomputers in the world?",
    "options": [
      "Windows Server",
      "macOS",
      "Linux",
      "FreeBSD"
    ],
    "correct": 2,
    "explanation": "Linux is used by more than 90% of supercomputers in the TOP500 ranking."
  },
  {
    "lessonId": "4-1",
    "question": "IaaS means:",
    "options": [
      "Internet as a Service",
      "Infrastructure as a Service",
      "Integration as a Service",
      "Interface as a Service"
    ],
    "correct": 1,
    "explanation": "IaaS = Infrastructure as a Service. Provides VM, storage, network (e.g. AWS EC2)."
  },
  {
    "lessonId": "4-1",
    "question": "PaaS provides:",
    "options": [
      "Hardware only",
      "Development and runtime platform",
      "Network only",
      "Storage only"
    ],
    "correct": 1,
    "explanation": "PaaS = Platform as a Service. Provides the development environment (e.g. Heroku, Google App Engine)."
  },
  {
    "lessonId": "4-1",
    "question": "SaaS is:",
    "options": [
      "Software accessible via browser",
      "Just one operating system",
      "Dedicated hardware",
      "A type of network"
    ],
    "correct": 0,
    "explanation": "SaaS = Software as a Service. The user uses the software via browser (e.g. Gmail, Salesforce)."
  },
  {
    "lessonId": "4-1",
    "question": "RHEL is the acronym for:",
    "options": [
      "Red Hat Enterprise Linux",
      "Red Hat Essential Linux",
      "Red Hat Extended Linux",
      "Red Hat Embedded Linux"
    ],
    "correct": 0,
    "explanation": "RHEL = Red Hat Enterprise Linux, enterprise distribution with commercial support."
  },
  {
    "lessonId": "4-1",
    "question": "LPIC-1 certification requires:",
    "options": [
      "Just an exam",
      "Two exams (101 and 102)",
      "Three exams",
      "No exams"
    ],
    "correct": 1,
    "explanation": "LPIC-1 requires passing the 101 and 102 exams."
  },
  {
    "lessonId": "4-1",
    "question": "Which technology allows you to run multiple OSes on one machine?",
    "options": [
      "Containerization",
      "Virtualization",
      "Emulation",
      "Compilation"
    ],
    "correct": 1,
    "explanation": "Virtualization (KVM, VMware, VirtualBox) allows you to run multiple OSes on one host."
  },
  {
    "lessonId": "4-1",
    "question": "Docker uses:",
    "options": [
      "Virtual machines",
      "Container",
      "Emulators",
      "Bare metal"
    ],
    "correct": 1,
    "explanation": "Docker uses containers: isolated environments that share the host kernel."
  },
  {
    "lessonId": "4-1",
    "question": "Kubernetes is used for:",
    "options": [
      "Web development",
      "Container orchestration",
      "Database management",
      "Text editing"
    ],
    "correct": 1,
    "explanation": "Kubernetes (K8s) orchestrates and manages containers at scale."
  },
  {
    "lessonId": "4-1",
    "question": "KVM is:",
    "options": [
      "An editor",
      "A Linux hypervisor",
      "A file system",
      "A network protocol"
    ],
    "correct": 1,
    "explanation": "KVM (Kernel-based Virtual Machine) is the hypervisor integrated into the Linux kernel."
  },
  {
    "lessonId": "4-2",
    "question": "Which type of storage has moving mechanical parts?",
    "options": [
      "SSD",
      "NVMe",
      "HDD",
      "RAM"
    ],
    "correct": 2,
    "explanation": "HDD (Hard Disk Drive) has rotating magnetic platters and a mechanical head."
  },
  {
    "lessonId": "4-2",
    "question": "Which RAID level offers mirroring?",
    "options": [
      "RAID 0",
      "RAID 1",
      "RAID 5",
      "RAID 10"
    ],
    "correct": 1,
    "explanation": "RAID 1 creates an identical copy of data on two disks (mirroring)."
  },
  {
    "lessonId": "4-2",
    "question": "RAID 0 offers:",
    "options": [
      "Redundancy",
      "Speed ​​only (striping)",
      "Equality",
      "Mirror + stripe"
    ],
    "correct": 1,
    "explanation": "RAID 0 spreads data across multiple disks for speed, but without redundancy."
  },
  {
    "lessonId": "4-2",
    "question": "Which command shows CPU info?",
    "options": [
      "cpuinfo",
      "lscpu",
      "showcpu",
      "cat /cpu"
    ],
    "correct": 1,
    "explanation": "lscpu displays detailed CPU information."
  },
  {
    "lessonId": "4-2",
    "question": "free -h shows:",
    "options": [
      "Disk space",
      "Free and used RAM memory",
      "Open files",
      "Processes"
    ],
    "correct": 1,
    "explanation": "free shows RAM and swap memory usage. -h = human readable format."
  },
  {
    "lessonId": "4-2",
    "question": "lsblk show:",
    "options": [
      "Processes",
      "Block devices (disks)",
      "Text files",
      "Users"
    ],
    "correct": 1,
    "explanation": "lsblk (list block devices) shows disks and partitions."
  },
  {
    "lessonId": "4-2",
    "question": "df -h shows:",
    "options": [
      "RAM memory",
      "Disk space of mounted filesystems",
      "Duplicate files",
      "Network devices"
    ],
    "correct": 1,
    "explanation": "df (disk free) shows used and free space on mounted filesystems."
  },
  {
    "lessonId": "4-2",
    "question": "NVMe connects via:",
    "options": [
      "SATA",
      "USB",
      "PCIe",
      "FDI"
    ],
    "correct": 2,
    "explanation": "NVMe (Non-Volatile Memory Express) uses the PCIe bus for higher speeds."
  },
  {
    "lessonId": "4-2",
    "question": "lspci shows:",
    "options": [
      "USB devices",
      "PCI/PCIe devices",
      "System files",
      "Processes"
    ],
    "correct": 1,
    "explanation": "lspci lists devices connected to the PCI/PCIe bus."
  },
  {
    "lessonId": "4-2",
    "question": "lsusb shows:",
    "options": [
      "PCI devices",
      "Connected USB devices",
      "Open files",
      "Directories"
    ],
    "correct": 1,
    "explanation": "lsusb lists the USB devices connected to the system."
  },
  {
    "lessonId": "4-2",
    "question": "RAID 5 combines:",
    "options": [
      "Mirroring only",
      "Striping with distributed parity",
      "Only parity",
      "Striping only"
    ],
    "correct": 1,
    "explanation": "RAID 5 distributes data and parity across at least 3 disks. Tolerates the loss of 1 disk."
  },
  {
    "lessonId": "4-3",
    "question": "What directory is the Linux kernel located in?",
    "options": [
      "/kernel",
      "/boot",
      "/sys",
      "/proc"
    ],
    "correct": 1,
    "explanation": "The Linux kernel (vmlinuz) is located in the /boot directory."
  },
  {
    "lessonId": "4-3",
    "question": "Which command shows running processes in real time?",
    "options": [
      "ps",
      "ls",
      "top",
      "cat /proc"
    ],
    "correct": 2,
    "explanation": "top shows processes in real time with continuous updating."
  },
  {
    "lessonId": "4-3",
    "question": "What signal is used to forcefully terminate a process?",
    "options": [
      "SIGTERM (15)",
      "SIGHUP (1)",
      "SIGKILL (9)",
      "SIGSTOP (19)"
    ],
    "correct": 2,
    "explanation": "SIGKILL (kill -9) forcefully terminates a process."
  },
  {
    "lessonId": "4-3",
    "question": "systemd is:",
    "options": [
      "A text editor",
      "The init system with PID 1",
      "A file system",
      "A network protocol"
    ],
    "correct": 1,
    "explanation": "systemd is the default init system. It is the first process (PID 1)."
  },
  {
    "lessonId": "4-3",
    "question": "SIGTERM (15) unlike SIGKILL (9):",
    "options": [
      "Cannot kill processes",
      "It can be intercepted by the process",
      "It's more powerful",
      "It doesn't exist"
    ],
    "correct": 1,
    "explanation": "SIGTERM is \"kind\": the process can intercept it and do cleanup before terminating."
  },
  {
    "lessonId": "4-3",
    "question": "ps aux show:",
    "options": [
      "User processes only",
      "All processes of all users",
      "Only the daemons",
      "Only root processes"
    ],
    "correct": 1,
    "explanation": "ps aux shows all processes (a=all users, u=user format, x=even without terminal)."
  },
  {
    "lessonId": "4-3",
    "question": "& at the end of a command sends it to:",
    "options": [
      "First floor",
      "Background",
      "A file",
      "Another user"
    ],
    "correct": 1,
    "explanation": "& runs the command in the background, returning control of the terminal."
  },
  {
    "lessonId": "4-3",
    "question": "GRUB is:",
    "options": [
      "A file system",
      "A bootloader",
      "A kernel",
      "A daemon"
    ],
    "correct": 1,
    "explanation": "GRUB (Grand Unified Bootloader) loads the Linux kernel at boot."
  },
  {
    "lessonId": "4-3",
    "question": "The PID of init/systemd is:",
    "options": [
      "0",
      "1",
      "-1",
      "100"
    ],
    "correct": 1,
    "explanation": "init/systemd is always the process with PID 1, the parent of all other processes."
  },
  {
    "lessonId": "4-3",
    "question": "/proc is:",
    "options": [
      "A directory on disk",
      "A virtual filesystem with process information",
      "A directory for logs",
      "A partition"
    ],
    "correct": 1,
    "explanation": "/proc is a virtual filesystem that exposes kernel and process information."
  },
  {
    "lessonId": "4-3",
    "question": "Daemons conventionally end with:",
    "options": [
      "\"yes\"",
      "\"d\"",
      "\"x\"",
      "\"r\""
    ],
    "correct": 1,
    "explanation": "Daemons have names ending with \"d\": sshd, httpd, crond, systemd."
  },
  {
    "lessonId": "4-4",
    "question": "Which IP range is private (not routable on the Internet)?",
    "options": [
      "8.8.8.0/24",
      "192.168.0.0/16",
      "200.100.0.0/16",
      "1.1.1.0/24"
    ],
    "correct": 1,
    "explanation": "192.168.0.0/16 is a private IP range (RFC 1918)."
  },
  {
    "lessonId": "4-4",
    "question": "Which file contains the DNS server configuration?",
    "options": [
      "/etc/hosts",
      "/etc/resolv.conf",
      "/etc/dns.conf",
      "/etc/network"
    ],
    "correct": 1,
    "explanation": "/etc/resolv.conf contains the DNS servers used by the system."
  },
  {
    "lessonId": "4-4",
    "question": "Which port is used by default by the SSH protocol?",
    "options": [
      "21",
      "22",
      "80",
      "443"
    ],
    "correct": 1,
    "explanation": "SSH uses port 22. FTP=21, HTTP=80, HTTPS=443."
  },
  {
    "lessonId": "4-4",
    "question": "The \"ip addr\" command shows:",
    "options": [
      "The DNS",
      "The IP addresses of the interfaces",
      "The doors open",
      "Network processes"
    ],
    "correct": 1,
    "explanation": "ip addr (or ip a) shows the IP addresses configured on the network interfaces."
  },
  {
    "lessonId": "4-4",
    "question": "/etc/hosts is used for:",
    "options": [
      "Configure DNS",
      "Map names to IPs locally",
      "Configure the firewall",
      "List the servers"
    ],
    "correct": 1,
    "explanation": "/etc/hosts allows you to define name → IP mappings without using DNS."
  },
  {
    "lessonId": "4-4",
    "question": "Which port does HTTPS use?",
    "options": [
      "22",
      "80",
      "443",
      "8080"
    ],
    "correct": 2,
    "explanation": "HTTPS uses port 443. HTTP uses 80."
  },
  {
    "lessonId": "4-4",
    "question": "DNS translates:",
    "options": [
      "IP to MAC",
      "Domain names in IP addresses",
      "Doors in services",
      "Users in groups"
    ],
    "correct": 1,
    "explanation": "DNS (Domain Name System) translates names (google.com) into IP addresses."
  },
  {
    "lessonId": "4-4",
    "question": "IPv6 uses addresses of:",
    "options": [
      "32 bits",
      "64 bit",
      "128 bits",
      "256 bits"
    ],
    "correct": 2,
    "explanation": "IPv6 uses 128-bit addresses, compared to 32 bits in IPv4."
  },
  {
    "lessonId": "4-4",
    "question": "The \"ping\" command checks:",
    "options": [
      "The speed of the disk",
      "The reachability of a host on the network",
      "Memory",
      "The CPU"
    ],
    "correct": 1,
    "explanation": "ping sends ICMP packets to check if a host is reachable."
  },
  {
    "lessonId": "4-4",
    "question": "ss or netstat shows:",
    "options": [
      "Open files",
      "Network connections and ports",
      "The processes",
      "The partitions"
    ],
    "correct": 1,
    "explanation": "ss (socket statistics) shows network connections and listening ports."
  },
  {
    "lessonId": "4-4",
    "question": "10.0.0.0/8 is a range:",
    "options": [
      "Public",
      "Private",
      "Reserved multicast",
      "Loopbacks"
    ],
    "correct": 1,
    "explanation": "10.0.0.0/8 is one of the 3 RFC 1918 private ranges (along with 172.16.0.0/12 and 192.168.0.0/16)."
  },
  {
    "lessonId": "4-2",
    "question": "Swap in Linux serves as:",
    "options": [
      "Automatic backup",
      "Virtual disk memory",
      "Space for logs",
      "DNS cache"
    ],
    "correct": 1,
    "explanation": "Swap is disk space used as an extension of RAM when it is full."
  },
  {
    "lessonId": "4-3",
    "question": "journalctl shows:",
    "options": [
      "System files",
      "The systemd journal logs",
      "The partitions",
      "The processes"
    ],
    "correct": 1,
    "explanation": "journalctl queries systemd's journal to view system logs."
  },
  {
    "lessonId": "4-3",
    "question": "The \"hostname\" command shows:",
    "options": [
      "The current user",
      "The name of the machine",
      "The kernel version",
      "The IP address"
    ],
    "correct": 1,
    "explanation": "hostname displays or sets the system hostname."
  },
  {
    "lessonId": "4-3",
    "question": "screen and tmux are:",
    "options": [
      "Text editor",
      "Terminal multiplexer",
      "Network managers",
      "File manager"
    ],
    "correct": 1,
    "explanation": "screen and tmux allow you to have multiple terminal sessions and keep them active."
  },
  {
    "lessonId": "4-3",
    "question": "systemctl status nginx shows:",
    "options": [
      "The source code",
      "The status of the nginx service",
      "The configuration",
      "The doors open"
    ],
    "correct": 1,
    "explanation": "systemctl status shows whether a service is active, its recent logs and PID."
  },
  {
    "lessonId": "4-2",
    "question": "The \"uptime\" command shows:",
    "options": [
      "Disk space",
      "How long the system has been on",
      "The network speed",
      "The temperature"
    ],
    "correct": 1,
    "explanation": "uptime shows system uptime, number of users and load average."
  },
  {
    "lessonId": "4-3",
    "question": "A process in state S (sleeping) is:",
    "options": [
      "Using the CPU",
      "Waiting for an event (I/O, signal)",
      "Finishing",
      "Wrong"
    ],
    "correct": 1,
    "explanation": "S = interruptible sleeping. The process waits for an event as input I/O."
  },
  {
    "lessonId": "4-3",
    "question": "lsmod shows:",
    "options": [
      "Kernel modules loaded",
      "The partitions",
      "The log files",
      "The installed packages"
    ],
    "correct": 0,
    "explanation": "lsmod lists the kernel modules currently loaded in memory."
  },
  {
    "lessonId": "4-4",
    "question": "The loopback address is:",
    "options": [
      "10.0.0.1",
      "192.168.1.1",
      "127.0.0.1",
      "255.255.255.255"
    ],
    "correct": 2,
    "explanation": "127.0.0.1 is the loopback address (localhost), used to communicate with yourself."
  },
  {
    "lessonId": "4-4",
    "question": "The \"dig\" command is used to:",
    "options": [
      "Dig files",
      "DNS queries",
      "Hardware diagnostics",
      "Manage disks"
    ],
    "correct": 1,
    "explanation": "dig (Domain Information Groper) performs DNS queries to resolve domain names."
  }
];
