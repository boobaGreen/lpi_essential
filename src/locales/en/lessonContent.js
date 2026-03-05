export const lessonContent = {
  "1-1": {
    "comic": {
      "title": "The Birth of Linux 🐧",
      "panels": [
        {
          "emoji": "🏛️",
          "text": "1969 — Unix, a revolutionary operating system, is born in the AT&T laboratories..."
        },
        {
          "emoji": "👨‍💻",
          "text": "1991 — A young Finnish student, Linus Torvalds, begins developing a free kernel..."
        },
        {
          "emoji": "🐧",
          "text": "“I'm making a free operating system, just a hobby…” — The post that changed everything!"
        },
        {
          "emoji": "🌍",
          "text": "Today Linux is everywhere: servers, cloud, smartphones (Android), IoT, supercomputers!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Distribution Families",
        "items": [
          "Debian → Ubuntu, Mint",
          "Red Hat → RHEL, Fedora, CentOS",
          "SUSE → SLES, openSUSE"
        ]
      },
      {
        "title": "Package Managers",
        "items": [
          "Debian: dpkg, apt (.deb)",
          "Red Hat: rpm, yum, dnf (.rpm)",
          "SUSE: rpm, zypper (.rpm)"
        ]
      },
      {
        "title": "Embedded systems",
        "items": [
          "Android = modified Linux kernel",
          "Raspberry Pi + Raspbian",
          "Linux in 90% of the public cloud"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /etc/os-release",
      "output": "NAME=\"Ubuntu\"\nVERSION=\"22.04 LTS\"\nID=ubuntu\nID_LIKE=debian"
    }
  },
  "1-2": {
    "comic": {
      "title": "The World of Open Source Apps 📦",
      "panels": [
        {
          "emoji": "📝",
          "text": "LibreOffice: Writer, Calc, Impress — the free suite that challenges Microsoft Office!"
        },
        {
          "emoji": "🌐",
          "text": "Firefox and Chromium: free and powerful web browsers."
        },
        {
          "emoji": "🖥️",
          "text": "Apache and Nginx: the web servers that make the Internet run!"
        },
        {
          "emoji": "💻",
          "text": "C, Java, Python, Bash: the languages ​​that make Linux come alive."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Desktop Apps",
        "items": [
          "LibreOffice, GIMP, Blender, VLC, Audacity"
        ]
      },
      {
        "title": "App Server",
        "items": [
          "Apache, Nginx (web)",
          "MariaDB, PostgreSQL (database)",
          "Samba, NFS (file sharing)"
        ]
      },
      {
        "title": "Languages",
        "items": [
          "Compiled: C, Java",
          "Interpreted: Python, Perl, JavaScript, Bash"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ apt search libreoffice",
      "output": "libreoffice - office productivity suite\nlibreoffice-calc - spreadsheet\nlibreoffice-writer - word processor"
    }
  },
  "1-3": {
    "comic": {
      "title": "The 4 Freedoms of Software 🔓",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "Freedom 0: Use the program for any purpose!"
        },
        {
          "emoji": "1️⃣",
          "text": "Freedom 1: Study how it works and change it!"
        },
        {
          "emoji": "2️⃣",
          "text": "Freedom 2: Redistribute copies to others!"
        },
        {
          "emoji": "3️⃣",
          "text": "Freedom 3: Distribute your modified versions!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Copyleft Licenses",
        "items": [
          "GPL: Derivative code must remain GPL",
          "LGPL: Allows proprietary linking",
          "AGPL: Extends GPL to SaaS"
        ]
      },
      {
        "title": "Permissive Licenses",
        "items": [
          "MIT: Very short and forgiving",
          "BSD: Similar to MIT",
          "Apache 2.0: patent grant"
        ]
      },
      {
        "title": "Business Open Source",
        "items": [
          "Support (Red Hat)",
          "Double license",
          "SaaS, Certifications"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ head -5 /usr/share/common-licenses/GPL-3",
      "output": "GNU GENERAL PUBLIC LICENSE\nVersion 3, 29 June 2007\nCopyright (C) 2007 Free Software Foundation"
    }
  },
  "1-4": {
    "comic": {
      "title": "Privacy and Digital Security 🔒",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "GNOME or KDE? Choose your Desktop Environment!"
        },
        {
          "emoji": "🍪",
          "text": "Be careful of third-party cookies: they track you everywhere!"
        },
        {
          "emoji": "🔒",
          "text": "HTTPS = HTTP + TLS. Search for the padlock in your browser!"
        },
        {
          "emoji": "🔑",
          "text": "GnuPG: Asymmetric cryptography. Public key for encrypting, private key for decrypting."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Desktop Environment",
        "items": [
          "GNOME (GTK) — Simplicity",
          "KDE (Qt) — Customization",
          "XFCE, LXDE — Lightweight"
        ]
      },
      {
        "title": "Privacy",
        "items": [
          "Third party cookies = tracking",
          "DNT ≠ privacy guarantee",
          "Private browsing ≠ anonymity"
        ]
      },
      {
        "title": "Cryptography",
        "items": [
          "TLS/SSL for connections",
          "GnuPG for files/email",
          "dm-crypt/LUKS for disks"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ gpg --list-keys",
      "output": "pub   rsa4096 2024-01-15 [SC]\n      ABCD1234...\nuid   [ultimate] Carol <carol@example.com>"
    }
  },
  "2-1": {
    "comic": {
      "title": "Welcome to Shell! 💻",
      "panels": [
        {
          "emoji": "⌨️",
          "text": "The shell is your window into the system. Write commands, get results!"
        },
        {
          "emoji": "🐚",
          "text": "Bash = Bourne Again Shell. The most used shell on Linux!"
        },
        {
          "emoji": "💲",
          "text": "The $ prompt indicates a normal user. The # indicates root — be careful!"
        },
        {
          "emoji": "🔤",
          "text": "Quoting: \"doubles\" expand $variables, 'singles' take everything literally."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Shell Types",
        "items": [
          "bash — default",
          "zsh — advanced (macOS)",
          "fish — user-friendly",
          "sh — POSIX base"
        ]
      },
      {
        "title": "Basic Commands",
        "items": [
          "pwd — current directory",
          "whoami — current user",
          "hostname — machine name",
          "uname -a — system info"
        ]
      },
      {
        "title": "Quoting",
        "items": [
          "\"doubles\" → expands $VAR",
          "'singles' → literal",
          "\\backslash → single escape"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo \"Hi, I'm $(whoami) on $(hostname)\"",
      "output": "Ciao, sono studente su linux-pc"
    }
  },
  "2-2": {
    "comic": {
      "title": "Variables: Shell Memory 🧠",
      "panels": [
        {
          "emoji": "📦",
          "text": "Variables are containers that store values: NAME=\"John\""
        },
        {
          "emoji": "🌐",
          "text": "Environment variables are global. PATH tells the shell where to look for commands!"
        },
        {
          "emoji": "📤",
          "text": "export makes a local variable accessible to child processes."
        },
        {
          "emoji": "🔍",
          "text": "env shows all environment variables. echo $HOME your home!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Local Variables",
        "items": [
          "NAME=\"value\" (no spaces!)",
          "echo $NAME to read",
          "unset NAME to delete"
        ]
      },
      {
        "title": "Environment Variables",
        "items": [
          "PATH — command paths",
          "HOME — personal directory",
          "USER — username",
          "LANG — system language"
        ]
      },
      {
        "title": "Persistence",
        "items": [
          "~/.bashrc — interactive login",
          "~/.profile — initial login",
          "/etc/environment — global"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ echo $PATH",
      "output": "/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"
    }
  },
  "2-3": {
    "comic": {
      "title": "Help! Man and Info 📚",
      "panels": [
        {
          "emoji": "📖",
          "text": "man is your best friend! man ls tells you everything about ls."
        },
        {
          "emoji": "🔢",
          "text": "The sections of the man: 1=User commands, 5=Config file, 8=Admin commands."
        },
        {
          "emoji": "🔎",
          "text": "apropos search commands by description: apropos \"copy files\""
        },
        {
          "emoji": "📁",
          "text": "find searches for files in the filesystem. locate is faster but uses a database."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Documentation",
        "items": [
          "man command — complete manual",
          "command info — GNU format",
          "--help command — short help",
          "apropos keyword — search"
        ]
      },
      {
        "title": "Sections Man",
        "items": [
          "1 — User commands",
          "5 — File formats",
          "8 — Sysadmin commands"
        ]
      },
      {
        "title": "Find Files",
        "items": [
          "find / -name \"*.txt\"",
          "find / -type d -name logs",
          "locate filename (database)",
          "which command (in the PATH)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$man -k \"copy files\"",
      "output": "cp (1)    - copy files and directories\nscp (1)   - secure copy (remote file copy)\nrsync (1) - a fast, versatile file copying tool"
    }
  },
  "2-4": {
    "comic": {
      "title": "The Filesystem Tree 🌳",
      "panels": [
        {
          "emoji": "/",
          "text": "It all starts from the root /. The tree grows downwards!"
        },
        {
          "emoji": "📂",
          "text": "/home — your personal stuff. /etc — system configuration."
        },
        {
          "emoji": "💾",
          "text": "/var — variable data (log, mail). /tmp — temporary files."
        },
        {
          "emoji": "⚙️",
          "text": "/bin and /sbin — essential commands. /usr — installed programs."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Important Directories",
        "items": [
          "/bin — basic commands",
          "/etc — configuration",
          "/home — users",
          "/var — variable data"
        ]
      },
      {
        "title": "Navigation",
        "items": [
          "cd /path — change direction",
          "ls -la — detailed list",
          "pwd — where are they",
          ". (current) .. (father)"
        ]
      },
      {
        "title": "File Management",
        "items": [
          "cp, mv, rm — copy, move, remove",
          "mkdir -p — create directories",
          "touch — create empty file",
          "Globbing: * ? [abc]"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ls/",
      "output": "bin  boot  dev  etc  home  lib  media  mnt  opt  proc  root  run  sbin  srv  sys  tmp  usr  var"
    }
  },
  "3-1": {
    "comic": {
      "title": "Compress and Archive! 📦",
      "panels": [
        {
          "emoji": "🗜️",
          "text": "tar = Tape ARchive. Group multiple files into one archive!"
        },
        {
          "emoji": "💨",
          "text": "gzip → .gz (fast). bzip2 → .bz2 (compresses more). xz → .xz (compresses better!)"
        },
        {
          "emoji": "📋",
          "text": "tar -czf = Create + gzip + File. The magic trio!"
        },
        {
          "emoji": "📂",
          "text": "tar -xzf = eXtract + gzip + File. Unzip everything!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Algorithms",
        "items": [
          "gzip (.gz) — fast, good",
          "bzip2 (.bz2) — slower, better",
          "xz (.xz) — very slow, excellent"
        ]
      },
      {
        "title": "Tar commands",
        "items": [
          "tar -czf arch.tar.gz dir/",
          "tar -cjf arch.tar.bz2 dir/",
          "tar -xzf arch.tar.gz",
          "tar -tf arch.tar.gz (list)"
        ]
      },
      {
        "title": "Single Files",
        "items": [
          "gzip file → file.gz",
          "gunzip file.gz → file",
          "bzip2 / bunzip2",
          "xz / unxz"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ tar -czf backup.tar.gz /home/user/docs/",
      "output": ""
    }
  },
  "3-2": {
    "comic": {
      "title": "Pipes and Redirects: the Data Flow 🔀",
      "panels": [
        {
          "emoji": "0️⃣",
          "text": "stdin (0) = input. stdout (1) = output. stderr (2) = errors."
        },
        {
          "emoji": "➡️",
          "text": "> writes to a file (overwrites). >> hangs at the end."
        },
        {
          "emoji": "🔗",
          "text": "| (pipe) connects the output of one command to the input of the next!"
        },
        {
          "emoji": "🔇",
          "text": "2>/dev/null — sends errors into the Linux \"black hole\"!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "File Descriptors",
        "items": [
          "0 = stdin (keyboard)",
          "1 = stdout (screen)",
          "2 = stderr (errors)"
        ]
      },
      {
        "title": "Redirect",
        "items": [
          "> file (overwrite)",
          ">> file (append)",
          "2> errors.log",
          "&> all.log (stdout+stderr)"
        ]
      },
      {
        "title": "Pipes & Commands",
        "items": [
          "cmd1 | cmd2 (pipe)",
          "tee file (T-splitter)",
          "xargs (stdin → arguments)",
          "cmd1 && cmd2 (if ok)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat /var/log/syslog | grep error | wc -l",
      "output": "42"
    }
  },
  "3-3": {
    "comic": {
      "title": "Grep and the Superheroes of the Text 🦸",
      "panels": [
        {
          "emoji": "🔎",
          "text": "grep searches for patterns in text. The command line detective!"
        },
        {
          "emoji": "✂️",
          "text": "cut cuts columns. sort sort. uniq removes duplicates."
        },
        {
          "emoji": "📊",
          "text": "wc counts lines (-l), words (-w), characters (-c)."
        },
        {
          "emoji": "🌟",
          "text": "Regex: ^ start of line, $ end, . any, * repeat, [abc] set."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "grep",
        "items": [
          "grep pattern file",
          "grep -i (case insensitive)",
          "grep -r (recursive)",
          "grep -v (reverse match)"
        ]
      },
      {
        "title": "Handling",
        "items": [
          "cut -d: -f1 (field 1)",
          "sort -n (numeric)",
          "uniq -c (count)",
          "head/tail -n 5"
        ]
      },
      {
        "title": "Basic Regex",
        "items": [
          "^ start of line",
          "$ end of line",
          ". any char",
          "* zero or more",
          "[a-z] range"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep -i \"error\" /var/log/syslog | tail -5",
      "output": "Mar 5 10:23:01 pc kernel: [error] disk I/O\nMar 5 10:25:33 pc nginx: error connecting"
    }
  },
  "3-4": {
    "comic": {
      "title": "Bash Scripting: Automate Everything! 🤖",
      "panels": [
        {
          "emoji": "📜",
          "text": "#!/bin/bash — the shebang! It tells the system: \"Use bash for this script!\""
        },
        {
          "emoji": "🔄",
          "text": "for, while, if/then/else — the constructs to control the flow."
        },
        {
          "emoji": "📥",
          "text": "$1 = first argument, $# = how many, $@ = all. The power of parameters!"
        },
        {
          "emoji": "✅",
          "text": "exit 0 = success. exit 1 = error. Every command has an exit code!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Script Structure",
        "items": [
          "#!/bin/bash (shebang)",
          "chmod +x script.sh",
          "./script.sh to run"
        ]
      },
      {
        "title": "Special Variables",
        "items": [
          "$0 — script name",
          "$1, $2... — arguments",
          "$# — number of arguments",
          "$? — exit code last cmd"
        ]
      },
      {
        "title": "Constructs",
        "items": [
          "if [ cond ]; then...fi",
          "for i in list; do...done",
          "while [ cond ]; do...done",
          "case $var in pattern)...esac"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ cat hello.sh",
      "output": "#!/bin/bash\necho \"Ciao, $1!\"\necho \"Oggi è $(date)\"\nexit 0"
    }
  },
  "4-1": {
    "comic": {
      "title": "Where Does Linux Run? Everywhere! 🌐",
      "panels": [
        {
          "emoji": "🖥️",
          "text": "Desktop: Ubuntu, Fedora, Mint — Linux for everyone!"
        },
        {
          "emoji": "🏢",
          "text": "Enterprise: RHEL, SLES — support, certifications, SLAs!"
        },
        {
          "emoji": "☁️",
          "text": "Cloud: 90% of web servers run Linux. AWS, Azure, GCP love it!"
        },
        {
          "emoji": "📱",
          "text": "Mobile and IoT: Android = Linux! Smart TVs, cars, drones... all Linux!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Desktop vs Server",
        "items": [
          "Desktop: GUI, multimedia",
          "Server: headless, 24/7 services",
          "Enterprise: LTS support"
        ]
      },
      {
        "title": "Cloud & Virtualization",
        "items": [
          "KVM/QEMU — virtualization",
          "Docker — containers",
          "Kubernetes — orchestration",
          "IaaS, PaaS, SaaS"
        ]
      },
      {
        "title": "Certifications",
        "items": [
          "LPI Linux Essentials",
          "LPIC-1 (admin base)",
          "LPIC-2 (admin advanced)",
          "RHCSA, RHCE (Red Hat)"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ uname -a",
      "output": "Linux server01 5.15.0-91-generic #101-Ubuntu SMP x86_64 GNU/Linux"
    }
  },
  "4-2": {
    "comic": {
      "title": "Hardware: Iron under Linux ⚙️",
      "panels": [
        {
          "emoji": "🧠",
          "text": "CPU, RAM, disk, network card — Linux sees everything in /proc and /sys!"
        },
        {
          "emoji": "💽",
          "text": "HDD = mechanical, slow. SSD = flash, fast. NVMe = super fast!"
        },
        {
          "emoji": "🔒",
          "text": "RAID 0 = speed. RAID 1 = security. RAID 5 = balance."
        },
        {
          "emoji": "🖨️",
          "text": "Hot-plug peripherals: USB, Thunderbolt. The kernel recognizes them immediately!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Components",
        "items": [
          "CPU: lscpu",
          "RAM: free -h",
          "Disk: lsblk, df -h",
          "PCI: lspci, USB: lsusb"
        ]
      },
      {
        "title": "Storage",
        "items": [
          "HDD — magnetic platters",
          "SSD — NAND flash memory",
          "NVMe — direct PCIe bus",
          "RAID — redundancy/performance"
        ]
      },
      {
        "title": "RAID levels",
        "items": [
          "RAID 0 — stripe (no backup)",
          "RAID 1 — mirror (copy)",
          "RAID 5 — stripe + parity",
          "RAID 10 — mirror + stripe"
        ]
      }
    ],
    "terminal": {
      "prompt": "$lsblk",
      "output": "NAME   MAJ:MIN RM   SIZE RO TYPE MOUNTPOINT\nsda      8:0    0 238.5G  0 disk\n├─sda1   8:1    0   512M  0 part /boot/efi\n└─sda2   8:2    0   238G  0 part /"
    }
  },
  "4-3": {
    "comic": {
      "title": "Kernels, Processes and Demons 👻",
      "panels": [
        {
          "emoji": "🎯",
          "text": "The kernel is the heart of Linux. Manages CPU, RAM, I/O, network."
        },
        {
          "emoji": "🌱",
          "text": "systemd = PID 1, the parent of all processes. Manages boot!"
        },
        {
          "emoji": "👻",
          "text": "Demons = background processes. Ending with \"d\": sshd, httpd, crond."
        },
        {
          "emoji": "💀",
          "text": "kill -9 PID = the ultimate weapon! Terminate any process."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Boot & Kernel",
        "items": [
          "BIOS/UEFI → bootloader",
          "GRUB → load kernel",
          "Kernel → mount root",
          "systemd → start services"
        ]
      },
      {
        "title": "Processes",
        "items": [
          "ps aux — process list",
          "top/htop — real-time monitor",
          "bg/fg — background/foreground",
          "& — start in background"
        ]
      },
      {
        "title": "Signals",
        "items": [
          "SIGTERM (15) — ends clean",
          "SIGKILL (9) — forced finish",
          "SIGHUP (1) — reload config",
          "SIGSTOP (19) — suspend"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ps aux | head -5",
      "output": "USER  PID %CPU %MEM  COMMAND\nroot    1  0.0  0.1  /sbin/init\nroot    2  0.0  0.0  [kthreadd]\nuser 1234  1.2  2.3  /usr/bin/firefox"
    }
  },
  "4-4": {
    "comic": {
      "title": "Networking: Linux on the Net 🌐",
      "panels": [
        {
          "emoji": "📡",
          "text": "IP, subnet mask, gateway — the coordinates of your machine on the network!"
        },
        {
          "emoji": "🔤",
          "text": "DNS translates names into IPs. google.com → 142.250.180.14"
        },
        {
          "emoji": "🔐",
          "text": "SSH (port 22) = secure remote access. The sysadmin's front door!"
        },
        {
          "emoji": "🌐",
          "text": "HTTP(80), HTTPS(443), FTP(21), SMTP(25) — the ports that run the Internet!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Configuration",
        "items": [
          "ip addr — show IP",
          "ip route — show route",
          "/etc/resolv.conf — DNS",
          "/etc/hosts — local names"
        ]
      },
      {
        "title": "Private IPs",
        "items": [
          "10.0.0.0/8",
          "172.16.0.0/12",
          "192.168.0.0/16",
          "IPv6: fc00::/7 (ULA)"
        ]
      },
      {
        "title": "Common Doors",
        "items": [
          "22 — SSH",
          "80 — HTTP",
          "443 — HTTPS",
          "53 — DNS"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ip addr show eth0",
      "output": "inet 192.168.1.100/24 brd 192.168.1.255 scope global eth0\ninet6 fe80::1/64 scope link"
    }
  },
  "5-1": {
    "comic": {
      "title": "Root: the Linux Superhero 🦸",
      "panels": [
        {
          "emoji": "👑",
          "text": "root = UID 0. Can do EVERYTHING. With great powers, great responsibilities!"
        },
        {
          "emoji": "🔑",
          "text": "sudo = \"Super User DO\". Run a command as root with YOUR password."
        },
        {
          "emoji": "⚠️",
          "text": "Never work as root all the time! Use sudo only when needed."
        },
        {
          "emoji": "📋",
          "text": "/etc/sudoers defines who can use sudo and for which commands."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Users",
        "items": [
          "root = UID 0 (superuser)",
          "Normal users: UID ≥ 1000",
          "System users: UID 1-999",
          "nobody = UID 65534"
        ]
      },
      {
        "title": "Commands",
        "items": [
          "up - (switch user)",
          "sudo command (run as root)",
          "whoami (who am I?)",
          "id (UID, GID, groups)"
        ]
      },
      {
        "title": "Safety",
        "items": [
          "Least privilege principle",
          "sudo > su (traceable)",
          "/etc/sudoers (visudo)",
          "Log: /var/log/auth.log"
        ]
      }
    ],
    "terminal": {
      "prompt": "$id",
      "output": "uid=1000(studente) gid=1000(studente) groups=1000(studente),27(sudo),100(users)"
    }
  },
  "5-2": {
    "comic": {
      "title": "Users and Groups: the Linux Registry 👥",
      "panels": [
        {
          "emoji": "📒",
          "text": "/etc/passwd — the registry of all users. Name, UID, home, shell."
        },
        {
          "emoji": "🔒",
          "text": "/etc/shadow — encrypted passwords. Only root can read it!"
        },
        {
          "emoji": "👥",
          "text": "/etc/group — the groups. Each user has a primary group and can be part of others."
        },
        {
          "emoji": "🛠️",
          "text": "useradd, usermod, userdel — the tools to manage the registry!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Key File",
        "items": [
          "/etc/passwd — user info",
          "/etc/shadow — hashed password",
          "/etc/group — groups",
          "/etc/skel — template home"
        ]
      },
      {
        "title": "User Management",
        "items": [
          "useradd -m user (create)",
          "usermod -aG user group",
          "userdel -r user (delete)",
          "passwd user (password)"
        ]
      },
      {
        "title": "Passwd format",
        "items": [
          "user:x:UID:GID:info:home:shell",
          "x → shadow password",
          "UID 0 → root",
          "/sbin/nologin → no login"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ grep student /etc/passwd",
      "output": "studente:x:1000:1000:Studente Linux:/home/studente:/bin/bash"
    }
  },
  "5-3": {
    "comic": {
      "title": "Permissions: Who Can Do What? 🔐",
      "panels": [
        {
          "emoji": "📊",
          "text": "r=read(4) w=write(2) x=execute(1). Three sets: Owner, Group, Others."
        },
        {
          "emoji": "🔢",
          "text": "chmod 755 = rwxr-xr-x. The owner does everything, the others read."
        },
        {
          "emoji": "✏️",
          "text": "chmod u+x = add execution to owner. Symbolic notation!"
        },
        {
          "emoji": "⚡",
          "text": "SUID, SGID, Sticky Bit — special permissions for special cases!"
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Basic Permissions",
        "items": [
          "r (read) = 4",
          "w (write) = 2",
          "x (execute) = 1",
          "--- = 0, rwx = 7"
        ]
      },
      {
        "title": "Commands",
        "items": [
          "chmod 644 file (octal)",
          "chmod u+x file (symbolic)",
          "chown user:group file",
          "chgrp file group"
        ]
      },
      {
        "title": "Specials",
        "items": [
          "SUID (4xxx) — run as owner",
          "SGID (2xxx) — inherit group",
          "Sticky (1xxx) — protects /tmp",
          "umask 022 — default 755"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ls -la /etc/passwd /tmp",
      "output": "-rw-r--r-- 1 root root 2847 /etc/passwd\ndrwxrwxrwt 15 root root 4096 /tmp"
    }
  },
  "5-4": {
    "comic": {
      "title": "Link: Shortcuts in the Filesystem 🔗",
      "panels": [
        {
          "emoji": "🔗",
          "text": "Hard link: two names for the same file (inode). Indistinguishable!"
        },
        {
          "emoji": "➡️",
          "text": "Symbolic link: a shortcut. Points to a path, not an inode."
        },
        {
          "emoji": "💔",
          "text": "If you delete the target of a symlink, it becomes \"broken\". Hard link survives!"
        },
        {
          "emoji": "📁",
          "text": "Symlinks can traverse filesystems. Hard links are not."
        }
      ]
    },
    "keyPoints": [
      {
        "title": "Hard Links",
        "items": [
          "ln file hardlink",
          "Same inode",
          "It does not traverse filesystems",
          "No directory links"
        ]
      },
      {
        "title": "Symbolic Links",
        "items": [
          "ln -s target symlink",
          "Different inode",
          "Traverse filesystem",
          "Can link directories"
        ]
      },
      {
        "title": "Comparison",
        "items": [
          "Hard: robust, limited",
          "Sym: flexible, fragile",
          "ls -li show inode",
          "readlink show target"
        ]
      }
    ],
    "terminal": {
      "prompt": "$ ln -s /etc/passwd link_passwd && ls -l link_passwd",
      "output": "lrwxrwxrwx 1 user user 11 link_passwd -> /etc/passwd"
    }
  }
};
