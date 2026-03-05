export const topic5Extended = {
  "5-1": {
    "title": "Security and User Types",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "👑",
        "text": "The root User — The Superuser"
      },
      {
        "type": "paragraph",
        "text": "The root user (UID 0) has unrestricted access to the system. It can read, write and delete any file, kill any process, change any configuration. For this reason, you should never work as root by default."
      },
      {
        "type": "table",
        "headers": [
          "User Type",
          "UID",
          "Scope",
          "Login?"
        ],
        "rows": [
          [
            "root",
            "0",
            "Complete system administration",
            "Only when necessary"
          ],
          [
            "Normal users",
            "≥ 1000",
            "Human users with personal accounts",
            "Yes, with its own shell"
          ],
          [
            "System users",
            "1-999",
            "Services and daemons (www-data, mysql)",
            "No (/sbin/nologin)"
          ],
          [
            "nobody",
            "65534",
            "Least privilege processes",
            "No"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "su vs sudo — Two Approaches to Security"
      },
      {
        "type": "comparison",
        "left": {
          "title": "on (Switch User)",
          "items": [
            "Change user completely",
            "Requires ROOT password",
            "su - = full login (root environment)",
            "No detailed command log",
            "Less secure: You have to share root passwords"
          ]
        },
        "right": {
          "title": "sudo (Super User DO)",
          "items": [
            "Run ONE command as root",
            "Requires YOUR password",
            "Each command is logged",
            "Granular control (who can do what)",
            "More secure: no one knows root password"
          ]
        }
      },
      {
        "type": "code",
        "title": "su vs sudo basically",
        "prompt": "# su: become root (asks for ROOT password)\n$ up -\nPassword: [root password]\n# whoami\nroot\n\n# sudo: run a command as root (asks for YOUR password)\n$ sudo apt update\n[sudo] password for mario: [mario's password]\n\n# See who can use sudo\n$ sudo -l # Your permissions\n$ cat /etc/sudoers # Configuration file (use visudo!)",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Always use visudo!",
        "content": "/etc/sudoers should be edited ONLY with the visudo command, which checks the syntax before saving. An error in sudoers can block access to the system!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛡️",
        "text": "Principle of Least Privilege"
      },
      {
        "type": "paragraph",
        "text": "The Principle of Least Privilege is the golden rule of security: each user and process must have ONLY the permissions strictly necessary to carry out their task. Nothing more."
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Non lavorare come root",
            "desc": "Usa sudo solo quando serve, poi torna al tuo utente"
          },
          {
            "term": "Servizi dedicati",
            "desc": "Ogni servizio gira con il proprio utente (www-data, mysql)"
          },
          {
            "term": "sudo granulare",
            "desc": "In /etc/sudoers puoi limitare QUALI comandi un utente può eseguire con sudo"
          },
          {
            "term": "Audit trail",
            "desc": "sudo logga tutto in /var/log/auth.log — tracciabilità completa"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks about the difference between su and sudo, the principle of least privilege, and where the authentication logs are located (/var/log/auth.log or /var/log/secure)."
      }
    ]
  },
  "5-2": {
    "title": "User and Group Management",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📒",
        "text": "Linux Registry Files"
      },
      {
        "type": "table",
        "headers": [
          "File",
          "Owner",
          "Permissions",
          "Content"
        ],
        "rows": [
          [
            "/etc/passwd",
            "root",
            "644 (readable by all)",
            "User info: name, UID, GID, home, shell"
          ],
          [
            "/etc/shadow",
            "root",
            "640 (root only)",
            "Encrypted passwords and policies"
          ],
          [
            "/etc/group",
            "root",
            "644",
            "Additional groups and members"
          ],
          [
            "/etc/gshadow",
            "root",
            "640",
            "Group passwords (rare)"
          ],
          [
            "/etc/skel",
            "root",
            "755",
            "Template for new home directories"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "Format of /etc/passwd"
      },
      {
        "type": "code",
        "title": "Anatomy of a /etc/passwd line",
        "prompt": "mario:x:1000:1000:Mario Rossi:/home/mario:/bin/bash\n  │ │ │ │ │ │ │\n  │ │ │ │ │ │ └── Login shell\n  │ │ │ │ │ └── Home directory\n  │ │ │ │ └── GECOS field (user info)\n  │ │ │ └── GID (Primary Group ID)\n  │ │ └── UID (User ID)\n  │ └── \"x\" = password in /etc/shadow\n  └── Username",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Why \"x\" in the password?",
        "content": "In the past, passwords were in /etc/passwd (readable by everyone!). For safety they have been moved to /etc/shadow (readable only by root). The \"x\" indicates that the password is in the shadow file."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "Commands to Manage Users and Groups"
      },
      {
        "type": "table",
        "headers": [
          "Command",
          "Function",
          "Important options"
        ],
        "rows": [
          [
            "useradd -m user",
            "Create user with home",
            "-m create home, -s shell, -G groups"
          ],
          [
            "usermod -aG grp user",
            "Edit user",
            "-aG Append Group, -L lock, -U unlock"
          ],
          [
            "userdel -r user",
            "Delete user + home",
            "-r also removes the home directory"
          ],
          [
            "passwd user",
            "Change password",
            "-l lock, -u unlock, -e force change"
          ],
          [
            "groupadd name",
            "Create group",
            "-g Specific GID"
          ],
          [
            "groupof the name",
            "Delete group",
            "Only if no user has it as primary"
          ],
          [
            "groups user",
            "Show user groups",
            "List of membership groups"
          ],
          [
            "userid",
            "Show UID/GID/groups",
            "Complete user information"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Workflow: create a complete user",
        "prompt": "#1. Create user with home directory\n$ sudo useradd -m -s /bin/bash -c \"Mario Rossi\" mario\n\n#2. Set your password\n$ sudo passwd mario\n\n#3. Add to additional groups\n$ sudo usermod -aG sudo,docker mario\n\n#4. Check\n$ mario id\nuid=1001(mario) gid=1001(mario) groups=1001(mario),27(sudo),999(docker)\n\n$ ls -la /home/mario/\n# Contains files copied from /etc/skel/",
        "output": ""
      }
    ]
  },
  "5-3": {
    "title": "File Permissions",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📊",
        "text": "The Unix Permission System"
      },
      {
        "type": "paragraph",
        "text": "Each file and directory in Linux has three sets of permissions (owner, group, others) and three types of permissions (read, write, execute). This creates an array of 9 permissions."
      },
      {
        "type": "table",
        "headers": [
          "Permit",
          "On file",
          "On directories",
          "Octal value"
        ],
        "rows": [
          [
            "r (read)",
            "Read the contents",
            "Listing files (ls)",
            "4"
          ],
          [
            "w (write)",
            "Edit the content",
            "Create/delete files",
            "2"
          ],
          [
            "x (execute)",
            "Run as scheduled",
            "Enter (cd) the directory",
            "1"
          ],
          [
            "- (Nobody)",
            "No access",
            "No access",
            "0"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Read permissions with ls -l",
        "prompt": "$ ls -l /etc/passwd\n-rw-r--r-- 1 root root 2847 Mar 5 /etc/passwd\n│├──┤├──┤├──┤\n││ │ │\n││ │ └── others: r-- (read only)\n││ └── group: r-- (read only)\n│└── owner: rw- (read + write)\n└── type: - = file (d = directory, l = link)",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "Octal vs Symbolic Notation"
      },
      {
        "type": "table",
        "headers": [
          "Octal",
          "Symbolic",
          "Meaning",
          "Typical use"
        ],
        "rows": [
          [
            "755",
            "rwxr-xr-x",
            "Owner does everything, others read/execute",
            "Scripts, directories"
          ],
          [
            "644",
            "rw-r--r--",
            "Owner reads/writes, others only read",
            "Text file, configuration"
          ],
          [
            "700",
            "rwx------",
            "Only the owner has access",
            "Private files, SSH keys"
          ],
          [
            "600",
            "rw-------",
            "Only owner reads/writes",
            "Secret files"
          ],
          [
            "777",
            "rwxrwxrwx",
            "Everyone can do everything",
            "⚠️ NEVER use in production!"
          ],
          [
            "750",
            "rwxr-x---",
            "Owner + group read, others don't",
            "Shared directories"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚡",
        "text": "Special Permits"
      },
      {
        "type": "table",
        "headers": [
          "Permit",
          "Octal",
          "On file",
          "On directories",
          "Example"
        ],
        "rows": [
          [
            "SUID",
            "4xxx",
            "Run with owner permissions",
            "—",
            "/usr/bin/passwd (root SUID)"
          ],
          [
            "SGID",
            "2xxx",
            "Run with group permissions",
            "New files inherit the group",
            "Shared project directories"
          ],
          [
            "Sticky Bits",
            "1xxx",
            "—",
            "Only the owner can cancel",
            "/tmp (1777 permissions)"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The exam asks: ls -l displays permissions in symbolic format (rwxr-xr-x). chmod uses octal (755) or symbolic (u+x). umask 022 produces 755 permissions for directories and 644 permissions for files."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎭",
        "text": "umask — The Mask of Permissions"
      },
      {
        "type": "paragraph",
        "text": "umask defines the permissions that are REMOVED when creating a new file or directory. The default value for normal users is 022."
      },
      {
        "type": "table",
        "headers": [
          "umask",
          "File permissions (666-mask)",
          "Directory permissions (777-mask)"
        ],
        "rows": [
          [
            "022",
            "644 (rw-r--r--)",
            "755 (rwxr-xr-x)"
          ],
          [
            "077",
            "600 (rw-------)",
            "700 (rwx------)"
          ],
          [
            "002",
            "664 (rw-rw-r--)",
            "775 (rwxrwxr-x)"
          ]
        ]
      }
    ]
  },
  "5-4": {
    "title": "Special Files and Links",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔗",
        "text": "Hard Link vs Symbolic Link"
      },
      {
        "type": "paragraph",
        "text": "Links are \"shortcuts\" in the filesystem. Understanding the difference between hard links and symbolic links is essential for the LPI exam and for daily work with Linux."
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔗 Hard Link",
          "items": [
            "Point directly to the inode",
            "Indistinguishable from the original",
            "The file survives deletion of the original",
            "It CANNOT traverse filesystems",
            "It CANNOT link directories",
            "Same inode, link count +1",
            "ln file hardlink"
          ]
        },
        "right": {
          "title": "➡️ Symbolic Link (Symlink)",
          "items": [
            "Points to a PATH (file name)",
            "It is a special file (type \"l\")",
            "It becomes \"broken\" if the target is deleted",
            "CAN traverse filesystems",
            "CAN link directories",
            "Different inode, size = path length",
            "ln -s target symlink"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💡",
        "text": "What are Inodes?"
      },
      {
        "type": "paragraph",
        "text": "An inode is a filesystem data structure that contains information about a file: permissions, owner, size, timestamp, data blocks. The file NAME is not in the inode — it is in the directory pointing to the inode. This is why multiple names (hard links) can exist for the same inode."
      },
      {
        "type": "diagram",
        "title": "Inode and Link Structure",
        "boxes": [
          {
            "label": "Directory",
            "color": "#3b82f6",
            "children": [
              "file.txt → inode 42",
              "hardlink.txt → inode 42",
              "symlink.txt → \"file.txt\""
            ]
          },
          {
            "label": "Inode 42",
            "color": "#10b981",
            "children": [
              "Permessi: rw-r--r--",
              "Owner: mario",
              "Size: 1024 bytes",
              "Link count: 2"
            ]
          },
          {
            "label": "Blocchi Dati",
            "color": "#f59e0b",
            "children": [
              "Block 100",
              "Block 101",
              "(contenuto effettivo)"
            ]
          }
        ]
      },
      {
        "type": "code",
        "title": "Working with links",
        "prompt": "# Create a hard link\n$ ln original.txt hardlink.txt\n$ ls -li # -i shows the inode number\n42 -rw-r--r-- 2 mario mario 1024 original.txt\n42 -rw-r--r-- 2 mario mario 1024 hardlink.txt\n# Same inode (42)! Link count = 2\n\n# Create a symbolic link\n$ ln -s /etc/passwd link_passwd\n$ ls -l link_passwd\nlrwxrwxrwx 1 mario mario 11 link_passwd -> /etc/passwd\n# Different inode, size = 11 (length \"/etc/passwd\")\n\n# Finding the target of a symlink\n$ readlink link_passwd\n/etc/passwd\n\n# Find all broken symlinks\n$ find /home -xtype l",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📁",
        "text": "Temporary Files"
      },
      {
        "type": "table",
        "headers": [
          "Directories",
          "Scope",
          "Persistence",
          "Notes"
        ],
        "rows": [
          [
            "/tmp",
            "Temporary files for everyone",
            "Cleared on reboot",
            "Sticky bit: only owner can delete their files"
          ],
          [
            "/var/tmp",
            "Persistent temporary files",
            "They survive the reboot",
            "For data needed between reboots"
          ],
          [
            "~/.cache",
            "User cache",
            "Persistent",
            "Browser cache, applications"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The exam asks: Hard link = same inode, does not traverse filesystem, no directory. Symlink = different inode, traverses filesystems, can link directories, can become \"broken\". ln -s creates symlink, ln without flag creates hard link."
      }
    ]
  }
};
