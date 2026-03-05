export const topic2Extended = {
  "2-1": {
    "title": "Command Line Basics",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🐚",
        "text": "What is Shell?"
      },
      {
        "type": "paragraph",
        "text": "The shell is a program that interprets user commands and passes them to the kernel for execution. It is the text interface between you and the operating system. Every time you open a terminal, you're starting a shell."
      },
      {
        "type": "table",
        "headers": [
          "Shell",
          "File",
          "Characteristics",
          "Distribution"
        ],
        "rows": [
          [
            "Bash",
            "/bin/bash",
            "Most popular, powerful scripting, Tab completion",
            "Almost all of them"
          ],
          [
            "Zsh",
            "/bin/zsh",
            "Advanced, plugins (Oh My Zsh), customizable theme",
            "macOS default"
          ],
          [
            "Fish",
            "/usr/bin/fish",
            "User-friendly, syntax highlighting, autosuggestions",
            "Modern alternative"
          ],
          [
            "Dash",
            "/bin/dash",
            "POSIX minimal, fast boot, used by Debian for /bin/sh",
            "Debian/Ubuntu"
          ],
          [
            "sh",
            "/bin/sh",
            "Original POSIX shell, maximum compatibility",
            "All Unixes"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks what the default shell is on most distributions: it's Bash (Bourne Again Shell). Also remember that $SHELL shows the login shell, not necessarily the one in use."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💲",
        "text": "The Prompt and Its Symbols"
      },
      {
        "type": "paragraph",
        "text": "The prompt is the line that the terminal displays when it is ready to receive commands. Contains useful information."
      },
      {
        "type": "code",
        "title": "Anatomy of the prompt",
        "prompt": "user@hostname:~/documents$\n│ │ │ │\n│ │ │ └── $ = normal user (# = root)\n│ │ └── current directory (~ = home)\n│ └── machine name\n└── username",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "$ vs #",
        "content": "The $ symbol indicates a normal user. The # symbol indicates the root user. If you see # in the prompt, you are operating with full privileges — be careful!"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "Quoting: Quotation marks and Escape"
      },
      {
        "type": "paragraph",
        "text": "Quoting controls how the shell interprets special characters. It is one of the most tested concepts on the LPI exam."
      },
      {
        "type": "table",
        "headers": [
          "Type",
          "Syntax",
          "Expand $VAR?",
          "Expand *?",
          "Example"
        ],
        "rows": [
          [
            "Double quotes",
            "\"text\"",
            "✅ Yes",
            "❌ No",
            "\"Hi $USER\" → Hi mario"
          ],
          [
            "Single quotes",
            "'text'",
            "❌ No",
            "❌ No",
            "'Hello $USER' → Hello $USER"
          ],
          [
            "Backslash",
            "\\character",
            "Single escape",
            "Single escape",
            "echo \\$HOME → $HOME"
          ],
          [
            "Nobody",
            "text",
            "✅ Yes",
            "✅ Yes",
            "echo * → list all files"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Practical examples of quoting",
        "prompt": "$ echo \"My home is $HOME\"\nMy home is /home/student\n\n$ echo 'My home is $HOME'\nMy home is $HOME\n\n$ echo \"There are $(ls | wc -l) files\"\nThere are 42 files",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⌨️",
        "text": "Essential Keyboard Shortcuts"
      },
      {
        "type": "table",
        "headers": [
          "Shortcut",
          "Action",
          "When to use it"
        ],
        "rows": [
          [
            "Tab",
            "Auto-completion",
            "Complete commands and file paths"
          ],
          [
            "Tab Tab",
            "Show all options",
            "When there are more possibilities"
          ],
          [
            "Ctrl+C",
            "Stop command (SIGINT)",
            "To stop a blocked process"
          ],
          [
            "Ctrl+D",
            "End of File (EOF)",
            "To close the shell or input"
          ],
          [
            "Ctrl+L",
            "Cleans the screen",
            "Equivalent to clear"
          ],
          [
            "Ctrl+R",
            "Search history",
            "To find previous commands"
          ],
          [
            "↑ / ↓",
            "Browse history",
            "To repeat recent commands"
          ],
          [
            "Ctrl+A / Ctrl+E",
            "Start / End of line",
            "To move quickly through the command"
          ]
        ]
      }
    ]
  },
  "2-2": {
    "title": "Variables and Environment",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "Local Variables vs. Environmental Variables"
      },
      {
        "type": "paragraph",
        "text": "There are two types of variables in bash. Local variables exist only in the current shell. Environment variables are exported and available to all child processes."
      },
      {
        "type": "comparison",
        "left": {
          "title": "Local Variables",
          "items": [
            "NAME=\"value\" (NO spaces around =)",
            "Visible only in the current shell",
            "Not inherited from child processes",
            "Streets with unset NAME"
          ]
        },
        "right": {
          "title": "Environment Variables",
          "items": [
            "export NAME=\"value\"",
            "Visible to all child processes",
            "Inherit automatically",
            "Viewable with env"
          ]
        }
      },
      {
        "type": "code",
        "title": "Local variables vs environment",
        "prompt": "$ LOCALE=\"only here\" # local variable\n$ export GLOBAL=\"everywhere\" # environment variable\n$ echo $LOCAL $GLOBAL\nonly here everywhere\n\n$ bash -c 'echo $LOCAL $GLOBAL' # new child shell\neverywhere\n#LOCALE is not visible in child shell!",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "Pay attention to the spaces!",
        "content": "In bash, NAME=\"value\" with spaces around equals does NOT work! Bash will interpret NAME as a command. The correct syntax is NAME=\"value\" without spaces."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛤️",
        "text": "The PATH Variable"
      },
      {
        "type": "paragraph",
        "text": "PATH is the most important variable in Linux. Contains the list of directories where the shell looks for executables when you type a command. Directories are separated by : (colon)."
      },
      {
        "type": "code",
        "title": "How PATH works",
        "prompt": "$ echo $PATH\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin\n\n# When you type \"ls\", the shell searches in order:\n# 1. /usr/local/sbin/ls (not found)\n# 2. /usr/local/bin/ls (not found)\n#3. /usr/sbin/ls (not found)\n# 4. /usr/bin/ls ← FOUND IT! It does this.\n\n# To add a directory to the PATH:\n$ export PATH=\"$PATH:/opt/myprogram/bin\"",
        "output": ""
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌍",
        "text": "Important Environmental Variables"
      },
      {
        "type": "table",
        "headers": [
          "Variable",
          "Content",
          "Example"
        ],
        "rows": [
          [
            "$HOME",
            "The user's home directory",
            "/home/student"
          ],
          [
            "$USER",
            "Current username",
            "student"
          ],
          [
            "$SHELL",
            "Login shell",
            "/bin/bash"
          ],
          [
            "$PATH",
            "Directory for executables",
            "/usr/bin:/bin:..."
          ],
          [
            "$LANG",
            "Language and localization",
            "it_IT.UTF-8"
          ],
          [
            "$PWD",
            "Current directory",
            "/home/student/docs"
          ],
          [
            "$HOSTNAME",
            "Machine name",
            "linux-pc"
          ],
          [
            "$PS1",
            "Prompt format",
            "\\u@\\h:\\w\\$"
          ],
          [
            "$?",
            "Exit code last command",
            "0 (success)"
          ],
          [
            "$$",
            "PID of the current shell",
            "1234"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📄",
        "text": "Shell Configuration File"
      },
      {
        "type": "paragraph",
        "text": "Bash reads different configuration files depending on how it is started:"
      },
      {
        "type": "table",
        "headers": [
          "File",
          "When it is read",
          "Scope",
          "Typical use"
        ],
        "rows": [
          [
            "/etc/profile",
            "Shell login (all users)",
            "Global",
            "Global environment variables"
          ],
          [
            "~/.bash_profile",
            "Shell login",
            "User",
            "Setup login (call .bashrc)"
          ],
          [
            "~/.profile",
            "Shell login (if .bash_profile does not exist)",
            "User",
            "Alternatives to .bash_profile"
          ],
          [
            "~/.bashrc",
            "Non-login interactive shell",
            "User",
            "Aliases, prompts, functions"
          ],
          [
            "/etc/bash.bashrc",
            "Interactive shell (all)",
            "Global",
            "Global bash configuration"
          ],
          [
            "~/.bash_logout",
            "Logout",
            "User",
            "Cleaning, exit messages"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "The LPI exam asks which files are read on login vs interactive shell. Remember: login → /etc/profile + ~/.bash_profile. Interactive → ~/.bashrc."
      }
    ]
  },
  "2-3": {
    "title": "Get Help",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📖",
        "text": "The Man Pages"
      },
      {
        "type": "paragraph",
        "text": "The man command is Linux's built-in documentation system. Every command, configuration file, and system call has (or should have) a man page."
      },
      {
        "type": "table",
        "headers": [
          "Section",
          "Content",
          "Example"
        ],
        "rows": [
          [
            "1",
            "User commands",
            "man 1 ls"
          ],
          [
            "2",
            "System calls (kernel)",
            "man 2 open"
          ],
          [
            "3",
            "C library functions",
            "man 3 printf"
          ],
          [
            "4",
            "Special files (/dev)",
            "man 4 null"
          ],
          [
            "5",
            "File formats and configuration",
            "man 5 passwd"
          ],
          [
            "6",
            "Games",
            "man 6 fortunes"
          ],
          [
            "7",
            "Miscellaneous",
            "man 7 ip"
          ],
          [
            "8",
            "Administration commands",
            "man 8 mount"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Commands to get help",
        "prompt": "$ man ls # Complete ls manual\n$ man -k \"copy file\" # Search by keyword (= apropos)\n$ man 5 passwd # Section 5: File format\n$ whatis ls # Short description\n$ info coreutils # Detailed GNU documentation\n$ ls --help # Command built-in help",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "Navigate inside man",
        "content": "Inside a man page: Space = forward, b = back, /text = search, q = exit. Man uses the \"less\" program as a pager."
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔍",
        "text": "Search for Files in the System"
      },
      {
        "type": "comparison",
        "left": {
          "title": "find (real time)",
          "items": [
            "Search the filesystem in real time",
            "Slow on large filesystems",
            "Powerful: Search by name, type, size, date, permissions",
            "Always up to date"
          ]
        },
        "right": {
          "title": "locate (database)",
          "items": [
            "Search a pre-indexed database",
            "Very fast",
            "Limited: Search by name only",
            "Database updated with updatedb (usually daily)"
          ]
        }
      },
      {
        "type": "code",
        "title": "File search examples",
        "prompt": "$ find /home -name \"*.txt\" # .txt file in /home\n$ find / -type d -name \"config\" # Directories called config\n$ find /var -size +10M # Files larger than 10MB\n$ find . -mtime -7 # Modified in the last 7 days\n$ find . -perm 755 # With 755 permissions\n\n$ locate passwd # Search the database\n$ which python # Where is it in the PATH\n$ whereis ls # Binary, source and man",
        "output": ""
      }
    ]
  },
  "2-4": {
    "title": "Navigation and File Management",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌳",
        "text": "FHS — Filesystem Hierarchy Standard"
      },
      {
        "type": "paragraph",
        "text": "The FHS defines the standard Linux directory structure. All distributions follow these conventions, making it predictable where to find each type of file."
      },
      {
        "type": "table",
        "headers": [
          "Directories",
          "Content",
          "Example"
        ],
        "rows": [
          [
            "/",
            "Root — root of the entire filesystem",
            "It all starts from here"
          ],
          [
            "/bin",
            "Essential commands for all users",
            "ls, cp, mv, cat, bash"
          ],
          [
            "/sbin",
            "System commands for the administrator",
            "mount, fdisk, iptables"
          ],
          [
            "/etc",
            "System configuration file",
            "passwd, fstab, nginx.conf"
          ],
          [
            "/home",
            "Users' personal directories",
            "/home/mario, /home/student"
          ],
          [
            "/root",
            "Home of the root user",
            "Separated from /home for security"
          ],
          [
            "/var",
            "Variable data (log, spool, cache)",
            "/var/log/syslog, /var/www"
          ],
          [
            "/tmp",
            "Temporary files (deleted on reboot)",
            "Session files, temp downloads"
          ],
          [
            "/usr",
            "Installed programs and libraries",
            "/usr/bin, /usr/lib, /usr/share"
          ],
          [
            "/opt",
            "Optional/Third Party Software",
            "Browsers, IDEs, custom applications"
          ],
          [
            "/dev",
            "Device files",
            "/dev/sda (disk), /dev/null"
          ],
          [
            "/proc",
            "Virtual filesystem — kernel/process info",
            "/proc/cpuinfo, /proc/meminfo"
          ],
          [
            "/sys",
            "Virtual filesystem — hardware info",
            "Device and driver information"
          ],
          [
            "/boot",
            "Kernel and bootloader",
            "vmlinuz, initramfs, grub"
          ],
          [
            "/lib",
            "Essential shared libraries",
            "libc.so, libpthread.so"
          ],
          [
            "/mnt, /media",
            "Mount points for devices",
            "USB, CD-ROM, external disks"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧭",
        "text": "Absolute vs Relative Paths"
      },
      {
        "type": "comparison",
        "left": {
          "title": "Absolute Path",
          "items": [
            "Always starts with /",
            "Identifies a file uniquely",
            "Independent of your current location",
            "Example: /home/mario/documenti/file.txt"
          ]
        },
        "right": {
          "title": "Relative Path",
          "items": [
            "Does NOT start with /",
            "Relative to current directory (pwd)",
            "USA . (current) and .. (father)",
            "Example: ../documents/file.txt"
          ]
        }
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔠",
        "text": "Globbing — Pattern Matching"
      },
      {
        "type": "paragraph",
        "text": "Globbing allows you to select files using special patterns. The shell expands the pattern before passing it to the command."
      },
      {
        "type": "table",
        "headers": [
          "Patterns",
          "Meaning",
          "Example",
          "Result"
        ],
        "rows": [
          [
            "*",
            "Zero or more any characters",
            "ls *.txt",
            "file.txt, report.txt"
          ],
          [
            "?",
            "Exactly one character",
            "ls file?.txt",
            "file1.txt, fileA.txt"
          ],
          [
            "[abc]",
            "One of a, b, or c",
            "ls file[123].txt",
            "file1.txt, file2.txt"
          ],
          [
            "[a-z]",
            "A character in range",
            "ls [a-c]*.txt",
            "abc.txt, beta.txt"
          ],
          [
            "[!abc]",
            "Any EXCEPT a, b, c",
            "ls [!0-9]*",
            "file.txt (not 1file)"
          ]
        ]
      },
      {
        "type": "code",
        "title": "Essential commands for managing files",
        "prompt": "$ mkdir -p project/src/main # Create with all parent directories\n$ cp -r src/ backup/ # Recursive copy\n$ mv old.txt new.txt # Rename (or move)\n$ rm -rf obsolete_directory/ # Delete recursively (WARNING!)\n$ touch new.txt # Create empty file or update timestamp\n$ ls -la # Detailed list with hidden files",
        "output": ""
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "rm -rf is dangerous!",
        "content": "The command rm -rf deletes everything recursively WITHOUT asking for confirmation. An error like \"rm -rf /\" can destroy the entire system. Always use with extreme caution!"
      }
    ]
  }
};
