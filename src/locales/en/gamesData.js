export const dragDropData = [
  {
    "title": "Basic Commands",
    "pairs": [
      {
        "left": "ls",
        "right": "File list"
      },
      {
        "left": "cd",
        "right": "Change directory"
      },
      {
        "left": "pwd",
        "right": "Current directory"
      },
      {
        "left": "cp",
        "right": "Copy files"
      },
      {
        "left": "rm",
        "right": "Delete files"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Linux directories",
    "pairs": [
      {
        "left": "/etc",
        "right": "System configuration"
      },
      {
        "left": "/home",
        "right": "Users' home"
      },
      {
        "left": "/var",
        "right": "Variable data (log)"
      },
      {
        "left": "/tmp",
        "right": "Temporary files"
      },
      {
        "left": "/boot",
        "right": "Kernel and bootloader"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Linux distributions",
    "pairs": [
      {
        "left": "Ubuntu",
        "right": "Based on Debian"
      },
      {
        "left": "Fedora",
        "right": "Base for RHEL"
      },
      {
        "left": "Arch",
        "right": "Rolling release"
      },
      {
        "left": "CentOS",
        "right": "Derived from RHEL"
      },
      {
        "left": "openSUSE",
        "right": "Use zypper"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Open Source Applications",
    "pairs": [
      {
        "left": "LibreOffice",
        "right": "Office suite"
      },
      {
        "left": "Firefox",
        "right": "Web browsers"
      },
      {
        "left": "GIMP",
        "right": "Image editor"
      },
      {
        "left": "Blender",
        "right": "3D modeling"
      },
      {
        "left": "Audacity",
        "right": "Audio editor"
      }
    ],
    "difficulty": 1
  },
  {
    "title": "Software Licenses",
    "pairs": [
      {
        "left": "GPL",
        "right": "Strong copyleft"
      },
      {
        "left": "MIT",
        "right": "Permissive, very short"
      },
      {
        "left": "Apache 2.0",
        "right": "Permissive + patents"
      },
      {
        "left": "LGPL",
        "right": "Linking with owner"
      },
      {
        "left": "AGPL",
        "right": "Copyleft for SaaS"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Package Managers",
    "pairs": [
      {
        "left": "apt",
        "right": "Debian/Ubuntu"
      },
      {
        "left": "dnf",
        "right": "Fedora/RHEL"
      },
      {
        "left": "pacman",
        "right": "ArchLinux"
      },
      {
        "left": "zypper",
        "right": "openSUSE"
      },
      {
        "left": "snap",
        "right": "Universal Packages (Canonical)"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "File Permissions (Numeric)",
    "pairs": [
      {
        "left": "777",
        "right": "Reading, writing, performing for everyone"
      },
      {
        "left": "755",
        "right": "Owner does everything, others read/execute"
      },
      {
        "left": "644",
        "right": "Owner reads/writes, others read"
      },
      {
        "left": "600",
        "right": "Only the owner reads and writes"
      },
      {
        "left": "400",
        "right": "Only the owner can read"
      }
    ],
    "difficulty": 2
  },
  {
    "title": "Bash symbols",
    "pairs": [
      {
        "left": ">",
        "right": "Redirect output (overwrite)"
      },
      {
        "left": ">>",
        "right": "Redirect Output (Append)"
      },
      {
        "left": "|",
        "right": "Pipe (connect commands)"
      },
      {
        "left": "&",
        "right": "Runs in the background"
      },
      {
        "left": "$$",
        "right": "PID of the current shell"
      }
    ],
    "difficulty": 3
  },
  {
    "title": "System Services",
    "pairs": [
      {
        "left": "systemd",
        "right": "Modern init system"
      },
      {
        "left": "sshd",
        "right": "SSH server"
      },
      {
        "left": "cron",
        "right": "Demon planning"
      },
      {
        "left": "cups",
        "right": "Print server"
      },
      {
        "left": "rsyslog",
        "right": "System log management"
      }
    ],
    "difficulty": 3
  }
];

export const fillGapData = [
  {
    "prompt": "To create a directory: _____ dirname",
    "answer": "mkdir",
    "hint": "Make Directory",
    "difficulty": 1
  },
  {
    "prompt": "To delete a file: _____ filename",
    "answer": "rm",
    "hint": "Remove",
    "difficulty": 1
  },
  {
    "prompt": "To copy a file: _____ source destination",
    "answer": "cp",
    "hint": "Copy",
    "difficulty": 1
  },
  {
    "prompt": "To move a file: _____ source destination",
    "answer": "mv",
    "hint": "Move",
    "difficulty": 1
  },
  {
    "prompt": "To see the current directory: _____",
    "answer": "pwd",
    "hint": "Print Working Directory",
    "difficulty": 1
  },
  {
    "prompt": "To create an empty file: _____ filename",
    "answer": "touch",
    "hint": "Tap/create",
    "difficulty": 1
  },
  {
    "prompt": "To show the contents: _____ filename",
    "answer": "cat",
    "hint": "Concatenate",
    "difficulty": 1
  },
  {
    "prompt": "To read the manual: _____ ls",
    "answer": "man",
    "hint": "Manual",
    "difficulty": 1
  },
  {
    "prompt": "To print text: _____ \"Hello World\"",
    "answer": "echo",
    "hint": "Eco/print",
    "difficulty": 1
  },
  {
    "prompt": "To list files with details: _____ -la",
    "answer": "ls",
    "hint": "List",
    "difficulty": 1
  },
  {
    "prompt": "To see the processes: _____ aux",
    "answer": "ps",
    "hint": "Process Status",
    "difficulty": 2
  },
  {
    "prompt": "To change permissions: _____ 755 script.sh",
    "answer": "chmod",
    "hint": "Change Mode",
    "difficulty": 2
  },
  {
    "prompt": "To change ownership: _____ user:group file",
    "answer": "chown",
    "hint": "Change Owner",
    "difficulty": 2
  },
  {
    "prompt": "To search for text: _____ \"pattern\" file.txt",
    "answer": "grep",
    "hint": "Global Regular Expression Print",
    "difficulty": 2
  },
  {
    "prompt": "To extract a tar.gz archive: tar _____ archive.tar.gz",
    "answer": "-xzf",
    "hint": "eXtract gZip File",
    "difficulty": 2
  },
  {
    "prompt": "To add a user: _____ -m newuser",
    "answer": "useradd",
    "hint": "User Add",
    "difficulty": 2
  },
  {
    "prompt": "To see disk space: _____ -h",
    "answer": "df",
    "hint": "Disk Free",
    "difficulty": 2
  },
  {
    "prompt": "To search for files in the filesystem: _____ / -name \"*.log\"",
    "answer": "find",
    "hint": "Search the filesystem",
    "difficulty": 2
  },
  {
    "prompt": "To show the first lines: _____ -n 5 file.txt",
    "answer": "head",
    "hint": "Head/start",
    "difficulty": 2
  },
  {
    "prompt": "To show the last lines: _____ -n 5 file.txt",
    "answer": "tail",
    "hint": "Tail/end",
    "difficulty": 2
  },
  {
    "prompt": "To mount a filesystem: _____ /dev/sda1 /mnt",
    "answer": "mount",
    "hint": "Mount",
    "difficulty": 2
  },
  {
    "prompt": "To test connectivity: _____ google.com",
    "answer": "ping",
    "hint": "Send ICMP packet",
    "difficulty": 2
  },
  {
    "prompt": "To download a file from URL: _____ http://example.com/file",
    "answer": "wget",
    "hint": "WebGet",
    "difficulty": 2
  },
  {
    "prompt": "To kill a process: _____ -9 PID",
    "answer": "kill",
    "hint": "End process",
    "difficulty": 3
  },
  {
    "prompt": "To follow a real-time log: tail _____ /var/log/syslog",
    "answer": "-f",
    "hint": "Follow",
    "difficulty": 3
  },
  {
    "prompt": "To create a symbolic link: ln _____ target link",
    "answer": "-s",
    "hint": "Symbolic",
    "difficulty": 3
  },
  {
    "prompt": "To edit inline text: _____ -i \"s/old/new/g\" file",
    "answer": "sed",
    "hint": "Stream Editor",
    "difficulty": 3
  },
  {
    "prompt": "To count lines/words/bytes: _____ -l file.txt",
    "answer": "wc",
    "hint": "WordCount",
    "difficulty": 3
  },
  {
    "prompt": "To sort rows: _____ -rn data.txt",
    "answer": "sort",
    "hint": "Order",
    "difficulty": 3
  },
  {
    "prompt": "To cut columns: _____ -d: -f1 /etc/passwd",
    "answer": "cut",
    "hint": "Cut/extract",
    "difficulty": 3
  },
  {
    "prompt": "To sync files: _____ -avz src/ dest/",
    "answer": "rsync",
    "hint": "Remote Sync",
    "difficulty": 3
  },
  {
    "prompt": "To extract patterned columns: _____ '{print $1}' file",
    "answer": "awk",
    "hint": "Processing language",
    "difficulty": 3
  },
  {
    "prompt": "To show open files: _____ -i :80",
    "answer": "lsof",
    "hint": "List Open Files",
    "difficulty": 3
  },
  {
    "prompt": "To manage systemd services: _____ restart nginx",
    "answer": "systemctl",
    "hint": "System Control",
    "difficulty": 3
  },
  {
    "prompt": "To edit the crontab: _____ -e",
    "answer": "crontab",
    "hint": "Cron Table",
    "difficulty": 3
  },
  {
    "prompt": "To see network connections: _____ -tuln",
    "answer": "ss",
    "hint": "Socket Statistics",
    "difficulty": 3
  },
  {
    "prompt": "To translate characters: echo \"hello\" | _____ a-z A-Z",
    "answer": "tr",
    "hint": "Translate",
    "difficulty": 3
  }
];

export const memoryGameData = [
  {
    "command": "ls",
    "description": "List of files and directories"
  },
  {
    "command": "cd",
    "description": "Change directory"
  },
  {
    "command": "pwd",
    "description": "Show current directory"
  },
  {
    "command": "cp",
    "description": "Copy files"
  },
  {
    "command": "mv",
    "description": "Move or rename files"
  },
  {
    "command": "rm",
    "description": "Delete files"
  },
  {
    "command": "cat",
    "description": "View file contents"
  },
  {
    "command": "mkdir",
    "description": "Create directory"
  },
  {
    "command": "touch",
    "description": "Create empty file"
  },
  {
    "command": "echo",
    "description": "Print text to stdout"
  },
  {
    "command": "man",
    "description": "Show the manual"
  },
  {
    "command": "sudo",
    "description": "Run as root"
  },
  {
    "command": "whoami",
    "description": "Show current user"
  },
  {
    "command": "exit",
    "description": "Closes the shell"
  },
  {
    "command": "chmod",
    "description": "Change file permissions"
  },
  {
    "command": "grep",
    "description": "Search for patterns in the text"
  },
  {
    "command": "find",
    "description": "Search for files in the filesystem"
  },
  {
    "command": "tar",
    "description": "Archive and compress files"
  },
  {
    "command": "chown",
    "description": "Change file owner"
  },
  {
    "command": "df",
    "description": "Show free disk space"
  },
  {
    "command": "du",
    "description": "File and directory size"
  },
  {
    "command": "top",
    "description": "Monitor real-time processes"
  },
  {
    "command": "ps",
    "description": "List of active processes"
  },
  {
    "command": "kill",
    "description": "End a process"
  },
  {
    "command": "ssh",
    "description": "Secure remote connection"
  },
  {
    "command": "scp",
    "description": "Copy files via SSH"
  },
  {
    "command": "ln",
    "description": "Create links to files"
  },
  {
    "command": "head",
    "description": "First lines of a file"
  },
  {
    "command": "tail",
    "description": "Last lines of a file"
  },
  {
    "command": "wc",
    "description": "Count lines, words, bytes"
  },
  {
    "command": "sort",
    "description": "Sort lines of text"
  },
  {
    "command": "mount",
    "description": "Mount a filesystem"
  },
  {
    "command": "umount",
    "description": "Unmount a filesystem"
  },
  {
    "command": "awk",
    "description": "Process text by columns"
  },
  {
    "command": "sed",
    "description": "Text stream editor"
  },
  {
    "command": "xargs",
    "description": "Constructs arguments from stdin"
  },
  {
    "command": "crontab",
    "description": "Schedule periodic tasks"
  },
  {
    "command": "iptables",
    "description": "Configure Linux firewall"
  },
  {
    "command": "rsync",
    "description": "Sync remote files"
  },
  {
    "command": "cut",
    "description": "Extract columns from text"
  },
  {
    "command": "tr",
    "description": "Translate/delete characters"
  },
  {
    "command": "tee",
    "description": "Output to file and stdout"
  },
  {
    "command": "useradd",
    "description": "Adds a user"
  },
  {
    "command": "passwd",
    "description": "Change user password"
  },
  {
    "command": "groupadd",
    "description": "Create a new group"
  },
  {
    "command": "netstat",
    "description": "Network connection statistics"
  },
  {
    "command": "ifconfig",
    "description": "Configure network interface"
  },
  {
    "command": "ping",
    "description": "Test network connectivity"
  },
  {
    "command": "wget",
    "description": "Download files from URL"
  },
  {
    "command": "curl",
    "description": "Transfer data from URL"
  }
];

export const terminalChallengeData = [
  {
    "prompt": "Shows the contents of the current directory",
    "answer": "ls",
    "hints": [
      "A 2 letter command",
      "Starts with \"l\""
    ],
    "accept": [
      "ls",
      "ls -la",
      "ls -l"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Change directory to user's home",
    "answer": "cd ~",
    "hints": [
      "Use cd...",
      "The ~ symbol represents home"
    ],
    "accept": [
      "cd ~",
      "cd",
      "cd $HOME"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Show current directory (absolute path)",
    "answer": "pwd",
    "hints": [
      "Print Working...",
      "3 letters"
    ],
    "accept": [
      "pwd"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Create a directory called \"project\"",
    "answer": "mkdir progetto",
    "hints": [
      "Make Directory...",
      "mkdir + name"
    ],
    "accept": [
      "mkdir progetto"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Shows the contents of the /etc/hostname file",
    "answer": "cat /etc/hostname",
    "hints": [
      "withCATenate...",
      "ch + path"
    ],
    "accept": [
      "cat /etc/hostname"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Shows the current user ID",
    "answer": "id",
    "hints": [
      "A very short command",
      "2 letters"
    ],
    "accept": [
      "id",
      "whoami"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Create an empty file called test.txt",
    "answer": "touch test.txt",
    "hints": [
      "It's not cat...",
      "touch + name"
    ],
    "accept": [
      "touch test.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Shows the first 10 lines of a log.txt file",
    "answer": "head log.txt",
    "hints": [
      "The opposite of \"tail\"",
      "head + file"
    ],
    "accept": [
      "head log.txt",
      "head -10 log.txt",
      "head -n 10 log.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Show the ls command manual",
    "answer": "man ls",
    "hints": [
      "MANual...",
      "man + command"
    ],
    "accept": [
      "man ls"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Delete the obsolete.txt file",
    "answer": "rm obsoleto.txt",
    "hints": [
      "ReMove...",
      "rm + name"
    ],
    "accept": [
      "rm obsoleto.txt",
      "rm -f obsoleto.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Copy the config.txt file to backup.txt",
    "answer": "cp config.txt backup.txt",
    "hints": [
      "Copy...",
      "cp source destination"
    ],
    "accept": [
      "cp config.txt backup.txt"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Show command history",
    "answer": "history",
    "hints": [
      "The HISTORY of commands",
      "7 letters"
    ],
    "accept": [
      "history"
    ],
    "difficulty": 1
  },
  {
    "prompt": "Look for the word \"error\" in the syslog file",
    "answer": "grep error /var/log/syslog",
    "hints": [
      "Global Regular Expression...",
      "grep pattern file"
    ],
    "accept": [
      "grep error /var/log/syslog",
      "grep \"error\" /var/log/syslog",
      "grep -i error /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Make the hello.sh script executable",
    "answer": "chmod +x hello.sh",
    "hints": [
      "Change Mode...",
      "chmod + something"
    ],
    "accept": [
      "chmod +x hello.sh",
      "chmod u+x hello.sh",
      "chmod 755 hello.sh"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Create a tar.gz archive of the docs/ folder",
    "answer": "tar -czf docs.tar.gz docs/",
    "hints": [
      "tar -c...",
      "c=create z=gzip f=file"
    ],
    "accept": [
      "tar -czf docs.tar.gz docs/",
      "tar czf docs.tar.gz docs/",
      "tar -czf docs.tar.gz docs"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Shows used disk space in readable format",
    "answer": "df -h",
    "hints": [
      "Disk Free...",
      "df + flags"
    ],
    "accept": [
      "df -h"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Count the lines in the /etc/passwd file",
    "answer": "wc -l /etc/passwd",
    "hints": [
      "Word Count...",
      "wc -l"
    ],
    "accept": [
      "wc -l /etc/passwd"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Shows running processes in real time",
    "answer": "top",
    "hints": [
      "3 letters",
      "A system monitor"
    ],
    "accept": [
      "top",
      "htop"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Connect via SSH to host 192.168.1.10",
    "answer": "ssh 192.168.1.10",
    "hints": [
      "Secure Shell...",
      "ssh + address"
    ],
    "accept": [
      "ssh 192.168.1.10",
      "ssh root@192.168.1.10",
      "ssh user@192.168.1.10"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Change file owner to user \"admin\"",
    "answer": "chown admin file",
    "hints": [
      "Change Owner...",
      "chown user file"
    ],
    "accept": [
      "chown admin file",
      "sudo chown admin file"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Shows the size of the /var/log directory",
    "answer": "du -sh /var/log",
    "hints": [
      "Disk Usage...",
      "du -sh"
    ],
    "accept": [
      "du -sh /var/log",
      "du -h /var/log"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Follow the /var/log/syslog file in real time",
    "answer": "tail -f /var/log/syslog",
    "hints": [
      "tail with a flag...",
      "f = follow"
    ],
    "accept": [
      "tail -f /var/log/syslog"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Create a symbolic link of /etc/hosts in /tmp/",
    "answer": "ln -s /etc/hosts /tmp/hosts",
    "hints": [
      "ln with a flag...",
      "-s = symbolic"
    ],
    "accept": [
      "ln -s /etc/hosts /tmp/hosts",
      "ln -s /etc/hosts /tmp/"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Search for the ifconfig command in the PATH",
    "answer": "which ifconfig",
    "hints": [
      "Which ifconfig...",
      "which + command"
    ],
    "accept": [
      "which ifconfig"
    ],
    "difficulty": 2
  },
  {
    "prompt": "Find all .log files in /var larger than 10MB",
    "answer": "find /var -name \"*.log\" -size +10M",
    "hints": [
      "find + -name + -size",
      "M = megabytes"
    ],
    "accept": [
      "find /var -name \"*.log\" -size +10M",
      "find /var -name *.log -size +10M"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Sort the data.txt file in reverse numerical order",
    "answer": "sort -rn data.txt",
    "hints": [
      "sort -r = reverse, -n = numeric",
      "sort + flag"
    ],
    "accept": [
      "sort -rn data.txt",
      "sort -nr data.txt",
      "sort -r -n data.txt"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Show only the first field of /etc/passwd (username)",
    "answer": "cut -d: -f1 /etc/passwd",
    "hints": [
      "cut with delimiter :...",
      "cut -d: -f1"
    ],
    "accept": [
      "cut -d: -f1 /etc/passwd",
      "cut -d ':' -f1 /etc/passwd"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Schedule a daily cron job at 3:00 am",
    "answer": "0 3 * * *",
    "hints": [
      "minute hour day month week_day",
      "0 3 ..."
    ],
    "accept": [
      "0 3 * * *"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Replace \"foo\" with \"bar\" in a file using sed",
    "answer": "sed -i s/foo/bar/g file",
    "hints": [
      "sed -i \"s/old/new/g\"",
      "Stream Editor"
    ],
    "accept": [
      "sed -i s/foo/bar/g file",
      "sed -i 's/foo/bar/g' file",
      "sed s/foo/bar/g file"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Shows active network connections",
    "answer": "ss -tuln",
    "hints": [
      "Socket Statistics...",
      "ss + flag"
    ],
    "accept": [
      "ss -tuln",
      "ss -tulnp",
      "netstat -tuln",
      "ss"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Extract the second space-separated column with awk",
    "answer": "awk '{print $2}'",
    "hints": [
      "awk print...",
      "$2 = second column"
    ],
    "accept": [
      "awk '{print $2}'",
      "awk '{print $2}'"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Shows the network routing table",
    "answer": "ip route",
    "hints": [
      "ip ...",
      "route/routing table"
    ],
    "accept": [
      "ip route",
      "route",
      "ip route show",
      "netstat -r"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Show files opened by process with PID 1234",
    "answer": "lsof -p 1234",
    "hints": [
      "List Open Files...",
      "lsof + flags"
    ],
    "accept": [
      "lsof -p 1234"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Restart the nginx service with systemd",
    "answer": "systemctl restart nginx",
    "hints": [
      "systemctl...",
      "restart + service name"
    ],
    "accept": [
      "systemctl restart nginx",
      "sudo systemctl restart nginx"
    ],
    "difficulty": 3
  },
  {
    "prompt": "Add user \"mario\" to group \"sudo\"",
    "answer": "usermod -aG sudo mario",
    "hints": [
      "usermod...",
      "-aG = append Group"
    ],
    "accept": [
      "usermod -aG sudo mario",
      "sudo usermod -aG sudo mario"
    ],
    "difficulty": 3
  }
];

export const trueFalseData = [
  {
    "text": "The \"ls\" command displays files in the current directory.",
    "answer": true,
    "explanation": "Correct! ls (list) lists files and directories.",
    "difficulty": 1
  },
  {
    "text": "/etc contains system configuration files.",
    "answer": true,
    "explanation": "Correct! /etc is the standard directory for configurations.",
    "difficulty": 1
  },
  {
    "text": "The chmod command changes the owner of a file.",
    "answer": false,
    "explanation": "chmod changes permissions. chown changes owner.",
    "difficulty": 1
  },
  {
    "text": "Android uses the Linux kernel.",
    "answer": true,
    "explanation": "Correct! Android uses a Linux kernel modified by Google.",
    "difficulty": 1
  },
  {
    "text": "root always has UID 0.",
    "answer": true,
    "explanation": "Correct! The root user always has UID 0 on all Unix/Linux systems.",
    "difficulty": 1
  },
  {
    "text": "The pipe (|) writes the output to a file.",
    "answer": false,
    "explanation": "The pipe passes the output to the next. > writes to a file.",
    "difficulty": 1
  },
  {
    "text": "Ubuntu is based on Debian.",
    "answer": true,
    "explanation": "Correct! Ubuntu derives from Debian.",
    "difficulty": 1
  },
  {
    "text": "The ~ symbol indicates the /tmp directory.",
    "answer": false,
    "explanation": "~ indicates the user's home directory, not /tmp.",
    "difficulty": 1
  },
  {
    "text": "Bash is the default shell in most Linux distributions.",
    "answer": true,
    "explanation": "Correct! Bash (Bourne Again Shell) is the default shell.",
    "difficulty": 1
  },
  {
    "text": "The # character in a bash script indicates a comment.",
    "answer": true,
    "explanation": "Correct! Lines starting with # are comments in bash.",
    "difficulty": 1
  },
  {
    "text": "The Tab key automatically completes commands and file names.",
    "answer": true,
    "explanation": "Correct! Tab auto-completion is a core shell feature.",
    "difficulty": 1
  },
  {
    "text": "The /home directory contains the root user's home.",
    "answer": false,
    "explanation": "The root home is /root. /home contains the homes of normal users.",
    "difficulty": 1
  },
  {
    "text": "The GPL license allows you to make derivative code proprietary.",
    "answer": false,
    "explanation": "The GPL (copyleft) forces derivatives to maintain the same license.",
    "difficulty": 2
  },
  {
    "text": "The MIT license is a permissive license.",
    "answer": true,
    "explanation": "MIT is very permissive: it allows almost any use.",
    "difficulty": 2
  },
  {
    "text": "SSH uses port 443 by default.",
    "answer": false,
    "explanation": "SSH uses port 22. Port 443 is for HTTPS.",
    "difficulty": 2
  },
  {
    "text": "The shebang #!/bin/bash must be on the first line of the script.",
    "answer": true,
    "explanation": "Correct! The shebang tells the system which interpreter to use.",
    "difficulty": 2
  },
  {
    "text": "RAID 1 creates a mirror copy of the data.",
    "answer": true,
    "explanation": "Correct! RAID 1 duplicates data across two disks.",
    "difficulty": 2
  },
  {
    "text": "DNS translates domain names into IP addresses.",
    "answer": true,
    "explanation": "Correct! DNS resolves names to IPs.",
    "difficulty": 2
  },
  {
    "text": "The \"find\" command searches for text within files.",
    "answer": false,
    "explanation": "find searches for files in the filesystem. grep searches for text inside files.",
    "difficulty": 2
  },
  {
    "text": "/etc/shadow is readable by all users.",
    "answer": false,
    "explanation": "/etc/shadow is readable only by root. Contains hashed passwords.",
    "difficulty": 2
  },
  {
    "text": "The \"export\" command makes a variable available to child processes.",
    "answer": true,
    "explanation": "Correct! export exports the variable as an environment variable.",
    "difficulty": 2
  },
  {
    "text": "The /etc/passwd file contains user passwords in clear text.",
    "answer": false,
    "explanation": "/etc/passwd no longer contains real passwords. They are in /etc/shadow as hashes.",
    "difficulty": 2
  },
  {
    "text": "The glob * also corresponds to hidden files (starting with dot).",
    "answer": false,
    "explanation": "The glob * does not include files that begin with dot. You need options like dotglob.",
    "difficulty": 2
  },
  {
    "text": "NFS is a protocol for sharing files between Unix/Linux systems.",
    "answer": true,
    "explanation": "Correct! NFS (Network File System) shares files over a network between Unix systems.",
    "difficulty": 2
  },
  {
    "text": "The \"cat\" command can concatenate multiple files.",
    "answer": true,
    "explanation": "Correct! cat (concatenate) joins the contents of multiple files: cat file1 file2.",
    "difficulty": 2
  },
  {
    "text": "apt is the package manager used by Fedora.",
    "answer": false,
    "explanation": "Fedora uses dnf (or yum). apt is for Debian/Ubuntu.",
    "difficulty": 2
  },
  {
    "text": "Linux is a complete operating system.",
    "answer": false,
    "explanation": "Linux is just the kernel. GNU/Linux is the complete operating system.",
    "difficulty": 3
  },
  {
    "text": "A hard link can point to a directory.",
    "answer": false,
    "explanation": "Hard links cannot point to directories (to avoid loops).",
    "difficulty": 3
  },
  {
    "text": "The tar -czf command extracts an archive.",
    "answer": false,
    "explanation": "-czf creates a gzip archive. To extract use -xzf.",
    "difficulty": 3
  },
  {
    "text": "$1 in a Bash script indicates the first argument.",
    "answer": true,
    "explanation": "Correct! $1 = first argument, $2 = second, etc.",
    "difficulty": 3
  },
  {
    "text": "Symbolic links survive target deletion.",
    "answer": false,
    "explanation": "If you delete the target, the symlink becomes \"broken\".",
    "difficulty": 3
  },
  {
    "text": "SIGKILL (9) can be intercepted by the process.",
    "answer": false,
    "explanation": "SIGKILL cannot be intercepted. End immediately.",
    "difficulty": 3
  },
  {
    "text": "192.168.0.0/16 is a range of private IPs.",
    "answer": true,
    "explanation": "Correct! It is one of three private ranges defined by RFC 1918.",
    "difficulty": 3
  },
  {
    "text": "The ext4 file system supports journals.",
    "answer": true,
    "explanation": "Correct! ext4 is a journaling filesystem.",
    "difficulty": 3
  },
  {
    "text": "The \"nice\" command changes the priority of a process.",
    "answer": true,
    "explanation": "Correct! nice sets the scheduling priority.",
    "difficulty": 3
  },
  {
    "text": "TCP is a connectionless protocol.",
    "answer": false,
    "explanation": "TCP is connection-oriented. UDP is connectionless.",
    "difficulty": 3
  },
  {
    "text": "The \"crontab -e\" command modifies the user's scheduled jobs.",
    "answer": true,
    "explanation": "Correct! crontab -e opens the user's cron job editor.",
    "difficulty": 3
  },
  {
    "text": "A process in zombie state is using a lot of CPU.",
    "answer": false,
    "explanation": "A zombie process has terminated but the parent has not read its exit status. It uses no resources.",
    "difficulty": 3
  },
  {
    "text": "/dev/null discards everything sent to it.",
    "answer": true,
    "explanation": "Correct! /dev/null is Linux's \"black hole\": it discards any data.",
    "difficulty": 3
  },
  {
    "text": "The /etc/fstab file defines filesystems that are automatically mounted at boot.",
    "answer": true,
    "explanation": "Correct! fstab (filesystem table) contains automount information.",
    "difficulty": 3
  },
  {
    "text": "The \"df\" command displays the size of a single file.",
    "answer": false,
    "explanation": "df shows the disk space of the filesystem. For file sizes use du or ls -l.",
    "difficulty": 3
  },
  {
    "text": "systemd is the init system used by most modern distributions.",
    "answer": true,
    "explanation": "Correct! systemd has replaced SysVinit in most distros.",
    "difficulty": 3
  },
  {
    "text": "The ~/.bash_history file contains commands typed by the user.",
    "answer": true,
    "explanation": "Correct! The history of bash commands is saved in ~/.bash_history.",
    "difficulty": 3
  },
  {
    "text": "The \"grep -r\" command searches directories recursively.",
    "answer": true,
    "explanation": "Correct! grep -r (or -R) searches for patterns in all files in the directory and subdirectories.",
    "difficulty": 3
  },
  {
    "text": "The sticky bit prevents users from deleting other people's files in shared directories.",
    "answer": true,
    "explanation": "Correct! The sticky bit (t) on /tmp prevents users from deleting other people's files.",
    "difficulty": 3
  }
];