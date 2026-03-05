export const topic4Extended = {
  "4-1": {
    "title": "Choosing an Operating System",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Operating System Categories"
      },
      {
        "type": "paragraph",
        "text": "The choice of operating system depends on the use case. Linux offers solutions for every scenario, from desktop workstations to enterprise data centers, from IoT devices to the cloud."
      },
      {
        "type": "table",
        "headers": [
          "Category",
          "Characteristics",
          "Typical distributions",
          "Example of use"
        ],
        "rows": [
          [
            "Desktops",
            "GUI, multimedia, productivity",
            "Ubuntu, Mint, Fedora",
            "Office, development, personal use"
          ],
          [
            "Server",
            "Headless, 24/7 services, stability",
            "RHEL, Ubuntu Server, Debian",
            "Web server, database, email"
          ],
          [
            "Enterprise",
            "LTS support, certifications, SLA",
            "RHEL, SLES",
            "Banks, hospitals, governments"
          ],
          [
            "Embedded",
            "Lightweight, specific, real-time",
            "Yocto, Buildroot, Android",
            "Routers, IoT, automotive"
          ],
          [
            "Containers/Cloud",
            "Minimal, immutable",
            "Alpine, CoreOS, Flatcar",
            "Microservices, Kubernetes"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "☁️",
        "text": "Cloud Computing and Linux"
      },
      {
        "type": "paragraph",
        "text": "Cloud computing is the on-demand provision of IT resources over a network. Linux dominates the cloud: over 90% of public workloads run on Linux kernels."
      },
      {
        "type": "table",
        "headers": [
          "Model",
          "You manage",
          "The provider manages",
          "Example"
        ],
        "rows": [
          [
            "IaaS",
            "OS, apps, data",
            "Hardware, network, storage",
            "AWS EC2, Azure VM"
          ],
          [
            "PaaS",
            "Apps, data",
            "OS, runtime, middleware",
            "Heroku, Google App Engine"
          ],
          [
            "SaaS",
            "Just the data",
            "Everything else",
            "Gmail, Salesforce, Office 365"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏗️",
        "text": "Virtualization and Containers"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🖥️ Virtual Machine",
          "items": [
            "Emulate an entire computer",
            "It has its own kernel OS",
            "Complete insulation",
            "Heavy (GB RAM)",
            "Boot in minutes",
            "Hypervisor: KVM, VMware, VirtualBox"
          ]
        },
        "right": {
          "title": "📦 Containers",
          "items": [
            "Shares the host's kernel",
            "App libraries only",
            "Process level isolation",
            "Lightweight (MB RAM)",
            "Start in seconds",
            "Runtimes: Docker, Podman, containerd"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks you to distinguish between IaaS, PaaS and SaaS, and between virtualization (VM with hypervisor) and containerization (Docker). You also know KVM as native Linux hypervisor."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "LPI Certification Path"
      },
      {
        "type": "diagram",
        "title": "Certification Path",
        "boxes": [
          {
            "label": "Linux Essentials",
            "color": "#10b981",
            "children": [
              "Esame 010-160",
              "1 solo esame",
              "Nessun prerequisito"
            ]
          },
          {
            "label": "LPIC-1",
            "color": "#3b82f6",
            "children": [
              "Esami 101 + 102",
              "Sysadmin base",
              "5 anni validità"
            ]
          },
          {
            "label": "LPIC-2",
            "color": "#f59e0b",
            "children": [
              "Esami 201 + 202",
              "Sysadmin avanzato",
              "Richiede LPIC-1"
            ]
          },
          {
            "label": "LPIC-3",
            "color": "#ef4444",
            "children": [
              "Specialità: Security/Virt/HA",
              "Livello enterprise",
              "Richiede LPIC-2"
            ]
          }
        ]
      }
    ]
  },
  "4-2": {
    "title": "Computer Hardware",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧠",
        "text": "Hardware Components and Linux Commands"
      },
      {
        "type": "paragraph",
        "text": "Linux sees all hardware through virtual files in /proc and /sys. Each component has dedicated commands to query it."
      },
      {
        "type": "table",
        "headers": [
          "Component",
          "Command",
          "Virtual file",
          "Info shown"
        ],
        "rows": [
          [
            "CPU",
            "lscpu",
            "/proc/cpuinfo",
            "Model, core, speed, cache"
          ],
          [
            "RAM",
            "free -h",
            "/proc/meminfo",
            "Total, used, free, swap"
          ],
          [
            "Discs",
            "lsblk",
            "/proc/partitions",
            "Devices, partitions, mounts"
          ],
          [
            "Disk space",
            "df -h",
            "/proc/mounts",
            "Used/free space for filesystem"
          ],
          [
            "Dir. dimension",
            "du -sh dir/",
            "—",
            "Space occupied by the directory"
          ],
          [
            "PCI",
            "lspci",
            "/proc/bus/pci",
            "Video cards, network, controllers"
          ],
          [
            "USB",
            "lsusb",
            "/proc/bus/usb",
            "Connected USB devices"
          ],
          [
            "Kernel",
            "uname -a",
            "/proc/version",
            "Kernel version and architecture"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💽",
        "text": "Storage: HDD vs SSD vs NVMe"
      },
      {
        "type": "table",
        "headers": [
          "Type",
          "Technology",
          "Reading speed",
          "Latency",
          "Price/GB",
          "Duration"
        ],
        "rows": [
          [
            "HDD",
            "Rotating magnetic plates",
            "100-200MB/s",
            "5-10 ms",
            "€0.02",
            "Mechanical (wear)"
          ],
          [
            "SATA SSD",
            "NAND flash, SATA bus",
            "500-550MB/s",
            "0.1 ms",
            "€0.08",
            "Electronic (writing cycles)"
          ],
          [
            "NVMe",
            "NAND flash, PCIe bus",
            "3-7GB/s",
            "0.02 ms",
            "€0.10",
            "Electronic (faster)"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "RAID — Redundant Array of Independent Disks"
      },
      {
        "type": "paragraph",
        "text": "RAID combines multiple physical disks to achieve redundancy (data protection) and/or performance."
      },
      {
        "type": "table",
        "headers": [
          "Level",
          "Technique",
          "Min. discs",
          "Redundancy",
          "Performance",
          "Useful capacity"
        ],
        "rows": [
          [
            "RAID 0",
            "Striping",
            "2",
            "❌ None",
            "⚡ Fast reading/writing",
            "100%"
          ],
          [
            "RAID 1",
            "Mirroring",
            "2",
            "✅ 1 disc",
            "⚡ Quick read",
            "50%"
          ],
          [
            "RAID 5",
            "Striping + parity",
            "3",
            "✅ 1 disc",
            "⚡ Quick read",
            "(N-1)/No"
          ],
          [
            "RAID 6",
            "Striping + 2 ties",
            "4",
            "✅ 2 discs",
            "⚡ Quick read",
            "(N-2)/N"
          ],
          [
            "RAID 10",
            "Mirror + Stripe",
            "4",
            "✅ 1 per mirror",
            "⚡⚡ Highs",
            "50%"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "RAID is NOT backup!",
        "content": "RAID protects against hardware failure of disks, but is NOT a backup! If you delete a file, it is deleted from all RAID disks. Backup is a separate copy of your data."
      }
    ]
  },
  "4-3": {
    "title": "Kernel, Processes and Logs",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎯",
        "text": "The Linux Kernel"
      },
      {
        "type": "paragraph",
        "text": "The kernel is the heart of the operating system. Manages CPU, memory, I/O, network and devices. The Linux kernel is monolithic but modular: you can load/unload modules without rebooting."
      },
      {
        "type": "diagram",
        "title": "Boot sequence",
        "boxes": [
          {
            "label": "1. BIOS/UEFI",
            "color": "#ef4444",
            "children": [
              "POST hardware",
              "Cerca bootloader"
            ]
          },
          {
            "label": "2. GRUB",
            "color": "#f59e0b",
            "children": [
              "Menu di boot",
              "Carica kernel"
            ]
          },
          {
            "label": "3. Kernel",
            "color": "#10b981",
            "children": [
              "Inizializza hardware",
              "Monta root filesystem"
            ]
          },
          {
            "label": "4. systemd (PID 1)",
            "color": "#3b82f6",
            "children": [
              "Avvia servizi",
              "Target multi-user"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚙️",
        "text": "Process Management"
      },
      {
        "type": "table",
        "headers": [
          "Command",
          "Function",
          "Typical use"
        ],
        "rows": [
          [
            "ps aux",
            "List all processes",
            "Running processes overview"
          ],
          [
            "top / htop",
            "Real-time monitor",
            "See Real-time CPU/RAM"
          ],
          [
            "kill PID",
            "Send signal to process",
            "End a process politely"
          ],
          [
            "kill -9 PID",
            "Force termination (SIGKILL)",
            "Process blocked and not responding"
          ],
          [
            "bg / fg",
            "Background / foreground",
            "Move processes between bg and fg"
          ],
          [
            "jobs",
            "List of background processes",
            "See what's running in the background"
          ],
          [
            "nohup cmd &",
            "Process survives logout",
            "Commands that must continue"
          ],
          [
            "pgrep name",
            "Find PID by name",
            "Look for specific processes"
          ],
          [
            "pkill name",
            "End by name",
            "Kill by name instead of PID"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "👻",
        "text": "Unix signals"
      },
      {
        "type": "table",
        "headers": [
          "Signal",
          "Number",
          "Action",
          "Interceptable?"
        ],
        "rows": [
          [
            "SIGTERM",
            "15",
            "Terminate (polite, cleanup)",
            "✅ Yes"
          ],
          [
            "SIGKILL",
            "9",
            "End (forced, immediate)",
            "❌ No"
          ],
          [
            "SIGHUP",
            "1",
            "Hangup / Reload config",
            "✅ Yes"
          ],
          [
            "SIGINT",
            "2",
            "Interrupt (Ctrl+C)",
            "✅ Yes"
          ],
          [
            "SIGSTOP",
            "19",
            "Suspend the process",
            "❌ No"
          ],
          [
            "SIGCONT",
            "18",
            "Resume the suspended process",
            "✅ Yes"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks the difference between SIGTERM (15, interceptable) and SIGKILL (9, non-interceptable). Always use SIGTERM before SIGKILL."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "System Logs"
      },
      {
        "type": "table",
        "headers": [
          "File/Command",
          "Content",
          "Format"
        ],
        "rows": [
          [
            "/var/log/syslog",
            "General system log",
            "Text (rsyslog)"
          ],
          [
            "/var/log/auth.log",
            "Login, sudo, authentication",
            "Text"
          ],
          [
            "/var/log/kern.log",
            "Kernel messages",
            "Text"
          ],
          [
            "/var/log/dmesg",
            "Boot and hardware",
            "Ring buffer kernel"
          ],
          [
            "journalctl",
            "All logs (systemd journal)",
            "Binary (systemd)"
          ],
          [
            "journalctl -u nginx",
            "Log of a specific service",
            "Filtered by unit"
          ],
          [
            "journalctl -f",
            "Follow logs in real time",
            "Like tail -f"
          ]
        ]
      }
    ]
  },
  "4-4": {
    "title": "Networking",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📡",
        "text": "Fundamental Network Concepts"
      },
      {
        "type": "paragraph",
        "text": "Each device on the network needs an IP address, a subnet mask (to define the local network), a gateway (to leave the network) and a DNS server (to translate names into IPs)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "IPv4 — Addresses and Subnets"
      },
      {
        "type": "paragraph",
        "text": "IPv4 uses 32-bit addresses, represented as 4 decimal groups from 0 to 255 (e.g. 192.168.1.100)."
      },
      {
        "type": "table",
        "headers": [
          "Range",
          "Type",
          "Class",
          "Network/Host"
        ],
        "rows": [
          [
            "10.0.0.0/8",
            "Private",
            "TO",
            "16M addresses"
          ],
          [
            "172.16.0.0/12",
            "Private",
            "B",
            "1M addresses"
          ],
          [
            "192.168.0.0/16",
            "Private",
            "C",
            "65K addresses"
          ],
          [
            "127.0.0.0/8",
            "Loopbacks",
            "—",
            "localhost (the machine itself)"
          ],
          [
            "0.0.0.0",
            "Default route",
            "—",
            "All addresses not specified"
          ],
          [
            "255.255.255.255",
            "Broadcast",
            "—",
            "Everyone in the local network"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "CIDR notation",
        "content": "/24 means that the first 24 bits are the \"network\" part and the last 8 bits are the \"host\" part. 192.168.1.0/24 = network from 192.168.1.0 to 192.168.1.255 (256 addresses, 254 usable)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "IPv6"
      },
      {
        "type": "paragraph",
        "text": "IPv6 uses 128-bit addresses, written in hexadecimal (e.g. 2001:0db8:85a3::8a2e:0370:7334). Fixes IPv4 exhaustion issue (4 billion addresses vs 340 undecillions)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "DNS and Ports"
      },
      {
        "type": "table",
        "headers": [
          "Brings",
          "Protocol",
          "Service",
          "Description"
        ],
        "rows": [
          [
            "20/21",
            "TCP",
            "FTP",
            "File Transfer Protocol"
          ],
          [
            "22",
            "TCP",
            "SSH",
            "Secure remote access"
          ],
          [
            "23",
            "TCP",
            "Telnet",
            "Remote access NOT secure"
          ],
          [
            "25",
            "TCP",
            "SMTP",
            "I send email"
          ],
          [
            "53",
            "TCP/UDP",
            "DNS",
            "Name translation → IP"
          ],
          [
            "80",
            "TCP",
            "HTTP",
            "Unencrypted web"
          ],
          [
            "110",
            "TCP",
            "POP3",
            "Email reception"
          ],
          [
            "143",
            "TCP",
            "IMAP",
            "Remote email management"
          ],
          [
            "443",
            "TCP",
            "HTTPS",
            "Encrypted Web (TLS)"
          ],
          [
            "3306",
            "TCP",
            "MySQL",
            "MySQL/MariaDB databases"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Network Commands"
      },
      {
        "type": "code",
        "title": "Network diagnostic commands",
        "prompt": "# Show IP addresses of interfaces\n$ip addr show\n\n# Show the routing table\n$ip route show\n\n# Test connectivity\n$ping -c 4 google.com\n\n# Trace the path of packets\n$ traceroute google.com\n\n# Show listening ports\n$ss -tuln\n\n# DNS queries\n$ dig google.com\n$nslookup google.com\n\n# Show DNS configuration\n$ cat /etc/resolv.conf",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "File",
          "Function"
        ],
        "rows": [
          [
            "/etc/hosts",
            "Static mapping name → IP (priority over DNS)"
          ],
          [
            "/etc/resolv.conf",
            "System DNS server (nameserver 8.8.8.8)"
          ],
          [
            "/etc/hostname",
            "Host name of the machine"
          ],
          [
            "/etc/nsswitch.conf",
            "Name resolution order (files → dns)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks for standard ports (22=SSH, 80=HTTP, 443=HTTPS, 53=DNS) and network configuration files (/etc/resolv.conf, /etc/hosts). Also know the difference between IPv4 (32 bit) and IPv6 (128 bit)."
      }
    ]
  }
};
