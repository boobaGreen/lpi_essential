export const topic1Extended = {
  "1-1": {
    "title": "Evolution of Linux and Operating Systems",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏛️",
        "text": "From the Origins: Unix and the Revolution"
      },
      {
        "type": "timeline",
        "events": [
          {
            "year": "1969",
            "title": "Unix is ​​born",
            "desc": "Dennis Ritchie e Ken Thompson creano Unix ai Bell Labs di AT&T. Scritto in C, un linguaggio portabile, Unix diventa il riferimento per i sistemi operativi."
          },
          {
            "year": "1983",
            "title": "GNU Project",
            "desc": "Richard Stallman lancia il progetto GNU per creare un sistema operativo completamente libero. Nasce la Free Software Foundation (FSF) nel 1985."
          },
          {
            "year": "1987",
            "title": "Minix",
            "desc": "Andrew Tanenbaum crea Minix per scopi didattici. Sarà l'ispirazione diretta per Linus Torvalds."
          },
          {
            "year": "1991",
            "title": "Linux!",
            "desc": "Linus Torvalds, studente finlandese di 21 anni, posta su comp.os.minix: \"Sto facendo un sistema operativo libero, solo un hobby, non sarà grande e professionale come GNU\". Nasce il kernel Linux 0.01."
          },
          {
            "year": "1992",
            "title": "GPL License",
            "desc": "Il kernel Linux adotta la licenza GPL v2, diventando ufficialmente software libero."
          },
          {
            "year": "2004",
            "title": "Ubuntu",
            "desc": "Mark Shuttleworth fonda Canonical e rilascia Ubuntu, rendendo Linux accessibile a tutti."
          },
          {
            "year": "Oggi",
            "title": "Linux is everywhere",
            "desc": "Oltre il 90% dei server cloud, 100% dei supercomputer TOP500, miliardi di dispositivi Android. Linux è il kernel più usato al mondo."
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Linux vs GNU/Linux",
        "content": "Technically \"Linux\" is just the kernel. The complete system is called GNU/Linux because it includes the GNU utilities (gcc, bash, coreutils). However, in common usage \"Linux\" means the entire operating system."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "The Distribution Families"
      },
      {
        "type": "paragraph",
        "text": "A Linux distribution is a complete system consisting of: Linux kernel + GNU utilities + package manager + selected software + default configuration. There are hundreds of distributions, organized into \"families\" based on lineage and package manager."
      },
      {
        "type": "diagram",
        "title": "Family Tree",
        "boxes": [
          {
            "label": "Debian",
            "color": "#e11d48",
            "children": [
              "Ubuntu",
              "Linux Mint",
              "Kali Linux",
              "Raspbian"
            ]
          },
          {
            "label": "Red Hat",
            "color": "#f59e0b",
            "children": [
              "RHEL",
              "Fedora",
              "CentOS Stream",
              "Rocky Linux"
            ]
          },
          {
            "label": "SUSE",
            "color": "#10b981",
            "children": [
              "SLES",
              "openSUSE Leap",
              "openSUSE Tumbleweed"
            ]
          },
          {
            "label": "Indipendenti",
            "color": "#8b5cf6",
            "children": [
              "Arch Linux",
              "Gentoo",
              "Slackware"
            ]
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "Distribution",
          "Basic",
          "Packages",
          "Release",
          "Typical use"
        ],
        "rows": [
          [
            "Ubuntu",
            "Debian",
            "apt/.deb",
            "Fixed (6 months)",
            "Desktop, Cloud, Server"
          ],
          [
            "Fedora",
            "Red Hat",
            "dnf / .rpm",
            "Fixed (6 months)",
            "Development, Desktop"
          ],
          [
            "RHEL",
            "Red Hat",
            "yum/dnf / .rpm",
            "LTS (10 years)",
            "Enterprise, Production"
          ],
          [
            "ArchLinux",
            "Independent",
            "pacman",
            "Rolling Release",
            "Experienced users"
          ],
          [
            "openSUSE",
            "SUSE",
            "zypper / .rpm",
            "Mixed",
            "Desktop, Enterprise"
          ],
          [
            "Debian",
            "Original",
            "apt/.deb",
            "Fixed (~2 years)",
            "Server, Stability"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "In the LPI exam you will be asked to recognize distribution families, their package managers (.deb vs .rpm), and the differences between fixed release (Ubuntu) and rolling release (Arch)."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📱",
        "text": "Linux in the Embedded and Cloud World"
      },
      {
        "type": "paragraph",
        "text": "Linux isn't just for servers and desktops. The Linux kernel is the heart of billions of devices: Android smartphones, smart TVs, routers, car infotainment systems, IoT devices, drones and even the Perseverance rover on Mars uses a processor with Linux!"
      },
      {
        "type": "table",
        "headers": [
          "Sector",
          "Example",
          "Why Linux?"
        ],
        "rows": [
          [
            "Smartphones",
            "Android (3+ billion devices)",
            "Editable kernel, free license"
          ],
          [
            "Cloud",
            "AWS, Azure, GCP",
            "90%+ of cloud workloads use Linux"
          ],
          [
            "Supercomputers",
            "TOP500",
            "100% of the supercomputers in the ranking"
          ],
          [
            "IoT",
            "Raspberry Pi, Smart Home",
            "Lightweight, customizable, free"
          ],
          [
            "Automotive",
            "Tesla, Audi",
            "Real-time, reliable, customizable"
          ]
        ]
      },
      {
        "type": "story",
        "title": "Scenario: Why the Cloud loves Linux",
        "text": "Imagine you are the CTO of a startup. You need to choose OS for 100 servers in the cloud. Windows Server costs approximately $500/server/year in licenses. With Linux? Zero licensing costs, full control, huge support community, and you can automate everything with Bash scripts. That's why 90% of the cloud uses Linux."
      }
    ]
  },
  "1-2": {
    "title": "Open Source Applications",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Open Source Software for Every Need"
      },
      {
        "type": "paragraph",
        "text": "The open source world offers free and powerful alternatives to almost every commercial software. Knowing these applications is essential for the LPI exam and for professional life with Linux."
      },
      {
        "type": "table",
        "headers": [
          "Category",
          "Open Source",
          "Proprietary Equivalent"
        ],
        "rows": [
          [
            "Office Suites",
            "LibreOffice",
            "Microsoft Office"
          ],
          [
            "Web browsers",
            "Firefox, Chromium",
            "Chrome, Edge, Safari"
          ],
          [
            "Image Editor",
            "GIMP",
            "Adobe Photoshop"
          ],
          [
            "3D modeling",
            "Blender",
            "Maya, 3ds Max"
          ],
          [
            "Video Editor",
            "Kdenlive, OpenShot",
            "Adobe Premiere"
          ],
          [
            "Audio Editor",
            "Audacity",
            "Adobe Auditions"
          ],
          [
            "Email Client",
            "Thunderbird",
            "Outlook"
          ],
          [
            "Vector Graphics",
            "Inkscape",
            "Adobe Illustrator"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "Server Applications"
      },
      {
        "type": "paragraph",
        "text": "Linux dominates the server world. Open source server software handles the majority of the world's Internet traffic."
      },
      {
        "type": "table",
        "headers": [
          "Function",
          "Software",
          "Description"
        ],
        "rows": [
          [
            "Web Server",
            "Apache HTTP Server",
            "The most used web server historically"
          ],
          [
            "Web Server",
            "Nginx",
            "High performance, reverse proxy"
          ],
          [
            "Databases",
            "MariaDB / MySQL",
            "Most popular relational database"
          ],
          [
            "Databases",
            "PostgreSQL",
            "Enterprise-grade database"
          ],
          [
            "File Sharing",
            "Samba",
            "Sharing with Windows clients (SMB/CIFS)"
          ],
          [
            "File Sharing",
            "NFS",
            "Native Unix/Linux sharing"
          ],
          [
            "E-mail",
            "Postfix / Dovecot",
            "MTA and IMAP/POP3 server"
          ],
          [
            "DNS",
            "BIND",
            "Reference DNS server"
          ],
          [
            "Container",
            "Docker",
            "Container platform"
          ],
          [
            "Orchestration",
            "Kubernetes",
            "Container orchestration at scale"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam requires knowledge of the main open source applications for desktops and servers, and the ability to distinguish between compiled (C, C++) and interpreted (Python, Bash, JavaScript) software."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💻",
        "text": "Programming Languages"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Filled out",
          "items": [
            "C / C++ — maximum performance",
            "Compiled into machine code",
            "The resulting program is a binary",
            "You need to recompile for each platform"
          ]
        },
        "right": {
          "title": "Interpreted",
          "items": [
            "Python, Perl, Ruby — versatile",
            "Done line by line",
            "They need an interpreter installed",
            "Portable between platforms without modifications"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Java is a special case",
        "content": "Java is compiled into bytecode (.class), which is then executed by the JVM (Java Virtual Machine). It is neither purely compiled nor interpreted."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Package Management"
      },
      {
        "type": "paragraph",
        "text": "Package managers are the heart of software maintenance on Linux. They install, update and remove software while automatically managing dependencies."
      },
      {
        "type": "table",
        "headers": [
          "Family",
          "Format",
          "Low level tool",
          "High level tool"
        ],
        "rows": [
          [
            "Debian/Ubuntu",
            ".deb",
            "dpkg",
            "apt / apt-get"
          ],
          [
            "Red Hat/Fedora",
            ".rpm",
            "rpm",
            "yum / dnf"
          ],
          [
            "SUSE",
            ".rpm",
            "rpm",
            "zypper"
          ],
          [
            "Arch",
            ".pkg.tar.zst",
            "pacman",
            "pacman"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Package management examples",
        "prompt": "# Debian/Ubuntu\n$ sudo apt update && sudo apt install nginx\n\n# Red Hat/Fedora\n$ sudo dnf install nginx\n\n# SUSE\n$ sudo zypper install nginx",
        "output": ""
      }
    ]
  },
  "1-3": {
    "title": "Open Source Software and Licenses",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗽",
        "text": "The 4 Freedoms of Free Software"
      },
      {
        "type": "paragraph",
        "text": "Richard Stallman defined 4 fundamental freedoms that make software \"free\" (free as in freedom, not \"free\"). These freedoms are the philosophical basis of the entire open source movement."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Libertà 0",
            "desc": "Usare il programma per qualsiasi scopo, senza restrizioni"
          },
          {
            "term": "Libertà 1",
            "desc": "Studiare come funziona e adattarlo alle proprie necessità (richiede accesso al codice sorgente)"
          },
          {
            "term": "Libertà 2",
            "desc": "Ridistribuire copie per aiutare altri"
          },
          {
            "term": "Libertà 3",
            "desc": "Migliorare il programma e distribuire le modifiche alla community"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "\"Free\" does not mean \"free\"",
        "content": "\"Free software\" refers to FREEDOM, not price. You can sell free software! The source code must be available, but you can ask for compensation for distribution, support or customization."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Open Source Licenses Compared"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔒 Copyleft (GPL, AGPL)",
          "items": [
            "Derivatives MUST maintain the same license",
            "Modified code must remain open source",
            "GPL: the most used (Linux kernel)",
            "AGPL: extends copyleft to web/SaaS services",
            "LGPL: allows linking with proprietary code"
          ]
        },
        "right": {
          "title": "🔓 Permissive (MIT, BSD, Apache)",
          "items": [
            "Derivatives can become proprietary",
            "Few constraints: just cite the author",
            "MIT: the simplest and shortest",
            "BSD: Similar to MIT, academic origin",
            "Apache 2.0: Includes patent grants"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "License",
          "Type",
          "Copyleft?",
          "Commercial use",
          "Example"
        ],
        "rows": [
          [
            "GPL v3",
            "Strong Copyleft",
            "Yes",
            "Yes",
            "Linux kernel, GCC"
          ],
          [
            "LGPL",
            "Weak Copyleft",
            "Partial",
            "Yes",
            "glibc, Qt"
          ],
          [
            "AGPL",
            "Network Copyleft",
            "Yes (+ SaaS)",
            "Yes",
            "MongoDB (old)"
          ],
          [
            "MIT",
            "Permissive",
            "No",
            "Yes",
            "jQuery, Node.js"
          ],
          [
            "Apache 2.0",
            "Permissive",
            "No",
            "Yes",
            "Android, Kubernetes"
          ],
          [
            "BSD",
            "Permissive",
            "No",
            "Yes",
            "FreeBSD, nginx"
          ],
          [
            "Creative Commons",
            "It varies",
            "Optional",
            "Depends",
            "Documentation, media"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks you to distinguish between copyleft (GPL) and permissive (MIT, BSD, Apache) licenses. Remember: GPL = derivatives must remain GPL. MIT/BSD = derivatives can become proprietary."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💼",
        "text": "Open Source Business Models"
      },
      {
        "type": "paragraph",
        "text": "Contrary to popular belief, companies can make money with open source. Here are the main models:"
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Supporto e Sottoscrizioni",
            "desc": "Red Hat vende supporto enterprise per RHEL. Il codice è libero, il servizio no."
          },
          {
            "term": "Dual Licensing",
            "desc": "Lo stesso software con licenza GPL (gratis) e commerciale (a pagamento per chi non vuole il copyleft)."
          },
          {
            "term": "SaaS",
            "desc": "Offri il software come servizio cloud (GitHub, GitLab)."
          },
          {
            "term": "Open Core",
            "desc": "Core open source + funzionalità premium proprietarie."
          },
          {
            "term": "Consulenza e Formazione",
            "desc": "Certificazioni LPI, RHCSA, corsi di formazione."
          }
        ]
      },
      {
        "type": "story",
        "title": "Scenario: Red Hat — from startup to $34 billion",
        "text": "Red Hat was born in 1993 distributing Linux in a box. The model: the software is free, but companies pay for support, certified updates and legal guarantees. In 2019, IBM acquired Red Hat for $34 billion, proving that open source can create enormous value."
      }
    ]
  },
  "1-4": {
    "title": "ICT and Linux skills",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "Desktop Environment"
      },
      {
        "type": "paragraph",
        "text": "Linux offers several desktop environments. Unlike Windows and macOS where there is only one desktop, on Linux you can choose yours!"
      },
      {
        "type": "table",
        "headers": [
          "Desktops",
          "Toolkits",
          "Philosophy",
          "Minimum RAM",
          "Typical distribution"
        ],
        "rows": [
          [
            "GNOME",
            "GTK",
            "Simplicity, modernity",
            "1GB",
            "Ubuntu, Fedora"
          ],
          [
            "KDE Plasma",
            "Qty",
            "Total customization",
            "1GB",
            "Kubuntu, openSUSE"
          ],
          [
            "XFCE",
            "GTK",
            "Lightness, efficiency",
            "256MB",
            "Xubuntu, Manjaro"
          ],
          [
            "LXDE/LXQt",
            "GTK/Qt",
            "Ultra-light",
            "128MB",
            "Lubuntu"
          ],
          [
            "Cinnamon",
            "GTK",
            "Traditional, user-friendly",
            "512MB",
            "Linux Mint"
          ],
          [
            "MATE",
            "GTK",
            "Fork of GNOME 2",
            "512MB",
            "Ubuntu MATE"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "content": "If your PC is old, XFCE or LXQt are perfect. If you want maximum customization, choose KDE Plasma. If you prefer simplicity, GNOME is ideal."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "Privacy and Online Security"
      },
      {
        "type": "paragraph",
        "text": "In the digital age, protecting your privacy and security is crucial. Linux offers powerful tools for data protection."
      },
      {
        "type": "table",
        "headers": [
          "Threat",
          "What does he do",
          "How to protect yourself"
        ],
        "rows": [
          [
            "Third party cookies",
            "They track navigation between different sites",
            "Block them in the browser, use extensions (uBlock Origin)"
          ],
          [
            "Web trackers",
            "They profile the user's habits",
            "Use Firefox with Enhanced Tracking Protection"
          ],
          [
            "Man-in-the-middle",
            "Intercept unencrypted data",
            "Check HTTPS (padlock), use VPN"
          ],
          [
            "Phishing",
            "Fake sites for stealing credentials",
            "Check URLs, do not click suspicious links"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Private Browsing ≠ Anonymity",
        "content": "“Incognito browsing” does NOT make you anonymous! Your ISP, company and websites can still see the traffic. Hides only local history. For true anonymity you need Tor."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "Cryptography"
      },
      {
        "type": "paragraph",
        "text": "Encryption is essential to protect data in transit and at rest. Linux supports different levels of encryption."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Symmetric Encryption",
          "items": [
            "Only one key to encrypt and decrypt",
            "Fast, used for large amounts of data",
            "Problem: How to share the key?",
            "Algorithms: AES, ChaCha20"
          ]
        },
        "right": {
          "title": "Asymmetric Encryption",
          "items": [
            "Two keys: public + private",
            "Public crypto, private decrypted",
            "Solves the distribution problem",
            "Algorithms: RSA, Ed25519"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "Instrument",
          "Protects",
          "How it works"
        ],
        "rows": [
          [
            "TLS/SSL",
            "Web connections (HTTPS)",
            "Encrypt traffic between browsers and servers"
          ],
          [
            "SSH",
            "Remote connections",
            "Encrypted tunnel for remote administration"
          ],
          [
            "GnuPG (GPG)",
            "Files, emails, digital signatures",
            "Asymmetric encryption, web of trust"
          ],
          [
            "dm-crypt/LUKS",
            "Whole album",
            "Full-disk encryption in Linux"
          ],
          [
            "OpenVPN/WireGuard",
            "Network traffic",
            "VPN for secure connections"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Encrypt a file with GPG",
        "prompt": "# Generate a key pair\n$ gpg --gen-key\n\n# Encrypt a file for a recipient\n$ gpg --encrypt --recipient user@email.com file.txt\n\n# Decrypt\n$ gpg --decrypt file.txt.gpg > file.txt",
        "output": ""
      }
    ]
  }
};
