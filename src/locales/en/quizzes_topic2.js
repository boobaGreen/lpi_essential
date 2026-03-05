export const topic2Quizzes = [
  {
    "lessonId": "2-1",
    "question": "Which shell is the default in most Linux distributions?",
    "options": [
      "zsh",
      "fish",
      "bash",
      "csh"
    ],
    "correct": 2,
    "explanation": "Bash (Bourne Again Shell) is the default shell in most Linux distributions."
  },
  {
    "lessonId": "2-1",
    "question": "What symbol indicates a root user in the prompt?",
    "options": [
      "$",
      "#",
      "@",
      "!"
    ],
    "correct": 1,
    "explanation": "The # symbol indicates the root user, while $ indicates a normal user."
  },
  {
    "lessonId": "2-1",
    "question": "What does quoting do with double quotes (\")?",
    "options": [
      "Prevents any expansion",
      "Allows variable expansion but not globbing",
      "It has no effect",
      "Execute the content as a command"
    ],
    "correct": 1,
    "explanation": "Double quotes allow variable expansion ($VAR) but prevent globbing (* and ?)."
  },
  {
    "lessonId": "2-1",
    "question": "Single quotes (') in bash:",
    "options": [
      "They expand the variables",
      "They treat everything as literal text",
      "They execute commands",
      "They are equivalent to doubles"
    ],
    "correct": 1,
    "explanation": "Single quotes treat all content as literal text, without expansion."
  },
  {
    "lessonId": "2-1",
    "question": "Which character allows single character escaping?",
    "options": [
      "/",
      "~",
      "\\",
      "!"
    ],
    "correct": 2,
    "explanation": "The backslash (\\) escapes the next character."
  },
  {
    "lessonId": "2-1",
    "question": "The \"type\" command in bash shows:",
    "options": [
      "The file type",
      "How a command is interpreted",
      "The filesystem type",
      "The types of users"
    ],
    "correct": 1,
    "explanation": "type shows whether a command is a builtin, alias, function, or external program."
  },
  {
    "lessonId": "2-1",
    "question": "Which command shows the current user?",
    "options": [
      "who",
      "whoami",
      "id",
      "users"
    ],
    "correct": 1,
    "explanation": "whoami prints the name of the current user."
  },
  {
    "lessonId": "2-1",
    "question": "Which file defines a user's default shell?",
    "options": [
      "/etc/shells",
      "/etc/passwd",
      "/etc/bashrc",
      "/etc/profile"
    ],
    "correct": 1,
    "explanation": "The last field of /etc/passwd specifies the user's default shell."
  },
  {
    "lessonId": "2-1",
    "question": "What does \"echo $SHELL\" print?",
    "options": [
      "The current shell",
      "The default login shell",
      "All shells installed",
      "The bash version"
    ],
    "correct": 1,
    "explanation": "$SHELL contains the path to the user's default login shell."
  },
  {
    "lessonId": "2-1",
    "question": "Which command displays information about the operating system?",
    "options": [
      "uname -a",
      "os-info",
      "sysinfo",
      "hostinfo"
    ],
    "correct": 0,
    "explanation": "uname -a displays kernel, hostname, architecture and other system information."
  },
  {
    "lessonId": "2-1",
    "question": "Command substitution $(command) is equivalent to:",
    "options": [
      "$(command)",
      "\"command\"",
      "`command`",
      "{command}"
    ],
    "correct": 2,
    "explanation": "The `command` and $(command) backticks are equivalent for command substitution."
  },
  {
    "lessonId": "2-1",
    "question": "Which key allows auto-completion in bash?",
    "options": [
      "Enter",
      "Tab",
      "Ctrl+C",
      "Esc"
    ],
    "correct": 1,
    "explanation": "The Tab key allows auto-completion of commands, files and directories."
  },
  {
    "lessonId": "2-2",
    "question": "Which command displays the value of the PATH variable?",
    "options": [
      "show PATH",
      "echo $PATH",
      "print PATH",
      "cat PATH"
    ],
    "correct": 1,
    "explanation": "echo $PATH prints the value of the PATH environment variable."
  },
  {
    "lessonId": "2-2",
    "question": "Which command makes a local variable available to child processes?",
    "options": [
      "share",
      "export",
      "set",
      "push"
    ],
    "correct": 1,
    "explanation": "export makes a local variable available as an environment variable for child processes."
  },
  {
    "lessonId": "2-2",
    "question": "How do you assign a value to a variable in bash?",
    "options": [
      "NAME = \"value\"",
      "NAME=\"value\"",
      "set NAME=\"value\"",
      "let NAME=\"value\""
    ],
    "correct": 1,
    "explanation": "In bash assignments must NOT have spaces around the equal: NAME=\"value\"."
  },
  {
    "lessonId": "2-2",
    "question": "The HOME variable contains:",
    "options": [
      "The root directory /",
      "The user's home directory",
      "The path to bash",
      "The hostname"
    ],
    "correct": 1,
    "explanation": "$HOME contains the path to the user's personal directory (e.g. /home/user)."
  },
  {
    "lessonId": "2-2",
    "question": "The \"env\" command shows:",
    "options": [
      "Only local variables",
      "Environment variables",
      "The available commands",
      "System variables"
    ],
    "correct": 1,
    "explanation": "env shows all exported environment variables."
  },
  {
    "lessonId": "2-2",
    "question": "Which file is read when starting an interactive bash session?",
    "options": [
      "/etc/passwd",
      "~/.bashrc",
      "/etc/motd",
      "~/.bash_logout"
    ],
    "correct": 1,
    "explanation": "~/.bashrc is read every time a non-login interactive bash shell opens."
  },
  {
    "lessonId": "2-2",
    "question": "How do you delete a variable?",
    "options": [
      "delete VAR",
      "remove VAR",
      "unset VAR",
      "clear VAR"
    ],
    "correct": 2,
    "explanation": "unset VAR removes the variable from the shell environment."
  },
  {
    "lessonId": "2-2",
    "question": "The LANG variable sets:",
    "options": [
      "The programming language",
      "The language and localization of the system",
      "The keyboard layout",
      "The LAN network"
    ],
    "correct": 1,
    "explanation": "LANG defines the language and localization of the system (e.g. it_IT.UTF-8)."
  },
  {
    "lessonId": "2-2",
    "question": "PATH contains:",
    "options": [
      "Recent files",
      "The directories where to look for commands",
      "Passwords",
      "The network paths"
    ],
    "correct": 1,
    "explanation": "PATH is a :-separated list of directories where the shell looks for executables."
  },
  {
    "lessonId": "2-2",
    "question": "Which file is read for ALL users at login?",
    "options": [
      "~/.bashrc",
      "~/.profile",
      "/etc/profile",
      "/etc/bashrc"
    ],
    "correct": 2,
    "explanation": "/etc/profile is the global profile file read at login for all users."
  },
  {
    "lessonId": "2-2",
    "question": "echo $? show:",
    "options": [
      "The current PID",
      "The exit code of the last command",
      "The current user",
      "The current directory"
    ],
    "correct": 1,
    "explanation": "$? contains the exit code of the last command executed (0 = success)."
  },
  {
    "lessonId": "2-3",
    "question": "Which command does a Linux command manual show?",
    "options": [
      "help command",
      "man command",
      "command info",
      "--help command"
    ],
    "correct": 1,
    "explanation": "man (manual) displays the complete manual page for a command."
  },
  {
    "lessonId": "2-3",
    "question": "Which command searches for a file in the filesystem by name?",
    "options": [
      "search",
      "grep",
      "find",
      "looks"
    ],
    "correct": 2,
    "explanation": "find searches for files and directories in the filesystem. Ex: find / -name \"file.txt\""
  },
  {
    "lessonId": "2-3",
    "question": "Section 1 of the man contains:",
    "options": [
      "Configuration files",
      "User commands",
      "System calls",
      "Admin commands"
    ],
    "correct": 1,
    "explanation": "Section 1 = user commands. 5 = file formats. 8 = admin commands."
  },
  {
    "lessonId": "2-3",
    "question": "The \"apropos\" command does:",
    "options": [
      "Search man pages by keyword",
      "Install packages",
      "Show version",
      "List users"
    ],
    "correct": 0,
    "explanation": "apropos searches man page descriptions. Equivalent to man -k."
  },
  {
    "lessonId": "2-3",
    "question": "Which command shows where an executable is located?",
    "options": [
      "find",
      "locate",
      "which",
      "where"
    ],
    "correct": 2,
    "explanation": "which shows the path to the executable that would be executed (look in the PATH)."
  },
  {
    "lessonId": "2-3",
    "question": "\"locate\" is faster than \"find\" because:",
    "options": [
      "Use less RAM",
      "Use a pre-populated database",
      "It is written in C",
      "It's a builtin"
    ],
    "correct": 1,
    "explanation": "locate searches a database updated by updatedb, so it's very fast."
  },
  {
    "lessonId": "2-3",
    "question": "Section 5 of the man contains:",
    "options": [
      "User commands",
      "Games",
      "File formats and configuration",
      "Admin commands"
    ],
    "correct": 2,
    "explanation": "Section 5 documents file formats and configuration files."
  },
  {
    "lessonId": "2-3",
    "question": "find /home -type f -name \"*.txt\" search:",
    "options": [
      ".txt directories",
      ".txt file in the home",
      "Link .txt",
      "Processes txt"
    ],
    "correct": 1,
    "explanation": "-type f = regular files, -name \"*.txt\" = name ending with .txt."
  },
  {
    "lessonId": "2-3",
    "question": "Which command option shows short help?",
    "options": [
      "--man",
      "--info",
      "--help",
      "--doc"
    ],
    "correct": 2,
    "explanation": "Almost all commands support --help for concise help."
  },
  {
    "lessonId": "2-3",
    "question": "The \"whatis\" command shows:",
    "options": [
      "File type",
      "Brief description of the command",
      "System version",
      "Current directory"
    ],
    "correct": 1,
    "explanation": "whatis displays the man page description line for a command."
  },
  {
    "lessonId": "2-4",
    "question": "In which directory are the system configuration files located?",
    "options": [
      "/bin",
      "/etc",
      "/var",
      "/opt"
    ],
    "correct": 1,
    "explanation": "/etc contains system configuration files."
  },
  {
    "lessonId": "2-4",
    "question": "Which command creates a directory including missing parent directories?",
    "options": [
      "mkdir -f",
      "mkdir -r",
      "mkdir -p",
      "mkdir -a"
    ],
    "correct": 2,
    "explanation": "mkdir -p creates the directory and any necessary parent directories."
  },
  {
    "lessonId": "2-4",
    "question": "Which glob pattern matches any single character?",
    "options": [
      "*",
      "?",
      "[]",
      "#"
    ],
    "correct": 1,
    "explanation": "? matches exactly a single character. * matches zero or more characters."
  },
  {
    "lessonId": "2-4",
    "question": "The /var directory contains:",
    "options": [
      "Basic commands",
      "Variable data (log, spool, mail)",
      "Configuration",
      "Kernel"
    ],
    "correct": 1,
    "explanation": "/var contains data that changes during operation: log, cache, mail."
  },
  {
    "lessonId": "2-4",
    "question": "The \"ls -a\" command shows:",
    "options": [
      "Large files only",
      "Even hidden files (starting with .)",
      "Files sorted by date",
      "Only executable files"
    ],
    "correct": 1,
    "explanation": "-a (all) also shows hidden files starting with dot (.)."
  },
  {
    "lessonId": "2-4",
    "question": "\" . \" (single period) in a path indicates:",
    "options": [
      "The root",
      "The current directory",
      "The home",
      "A hidden file"
    ],
    "correct": 1,
    "explanation": ". represents the current directory. .. represents the parent directory."
  },
  {
    "lessonId": "2-4",
    "question": "Which directory contains the users' home?",
    "options": [
      "/root",
      "/users",
      "/home",
      "/usr"
    ],
    "correct": 2,
    "explanation": "/home contains the home directories of normal users. /root is the root home."
  },
  {
    "lessonId": "2-4",
    "question": "The glob [abc] corresponds to:",
    "options": [
      "The string abc",
      "A single character: a, b, or c",
      "Any character",
      "Three characters"
    ],
    "correct": 1,
    "explanation": "[abc] matches a single character that is a, b, or c."
  },
  {
    "lessonId": "2-4",
    "question": "touch filename create:",
    "options": [
      "A directory",
      "A link",
      "An empty file (or update timestamp)",
      "A process"
    ],
    "correct": 2,
    "explanation": "touch creates an empty file if it doesn't exist, or updates the timestamp if it exists."
  },
  {
    "lessonId": "2-4",
    "question": "/tmp is used for:",
    "options": [
      "Temporary files",
      "System files",
      "Backups",
      "Configuration"
    ],
    "correct": 0,
    "explanation": "/tmp contains temporary files that can be deleted upon reboot."
  },
  {
    "lessonId": "2-4",
    "question": "cp -r is used for:",
    "options": [
      "Copy files only",
      "Recursively copy directories",
      "Rename files",
      "Compress files"
    ],
    "correct": 1,
    "explanation": "cp -r recursively copies a directory and all its contents."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl+C in bash:",
    "options": [
      "Closes the shell",
      "Interrupts the current command (SIGINT)",
      "Copy text",
      "Delete the line"
    ],
    "correct": 1,
    "explanation": "Ctrl+C sends SIGINT to the foreground process, killing it."
  },
  {
    "lessonId": "2-1",
    "question": "Ctrl+D in bash means:",
    "options": [
      "End of Input (EOF)",
      "Cancellation",
      "A new terminal",
      "Command completion"
    ],
    "correct": 0,
    "explanation": "Ctrl+D sends EOF (End Of File), closing the shell if there is no input."
  },
  {
    "lessonId": "2-2",
    "question": "The PS1 variable controls:",
    "options": [
      "The PATH",
      "The shell prompt",
      "The password",
      "The processes"
    ],
    "correct": 1,
    "explanation": "PS1 defines the appearance of the shell prompt (e.g. \\u@\\h:\\w$ )."
  },
  {
    "lessonId": "2-3",
    "question": "man -k keyword is equivalent to:",
    "options": [
      "whatis",
      "apropos",
      "whereis",
      "which"
    ],
    "correct": 1,
    "explanation": "man -k and apropos search man page descriptions for keywords."
  },
  {
    "lessonId": "2-3",
    "question": "Section 8 of the man contains:",
    "options": [
      "User commands",
      "System calls",
      "Games",
      "Administrative commands"
    ],
    "correct": 3,
    "explanation": "Section 8 contains system administration commands (e.g. mount, useradd)."
  },
  {
    "lessonId": "2-4",
    "question": "/usr contains:",
    "options": [
      "Personal user files",
      "Installed programs and libraries",
      "Temporary files",
      "System logs"
    ],
    "correct": 1,
    "explanation": "/usr (Unix System Resources) contains programs, libraries and documentation."
  },
  {
    "lessonId": "2-4",
    "question": "/dev contains:",
    "options": [
      "Documentation",
      "Device files",
      "Development tools",
      "Firmware"
    ],
    "correct": 1,
    "explanation": "/dev contains special files that represent hardware devices."
  },
  {
    "lessonId": "2-4",
    "question": "The glob [!abc] corresponds to:",
    "options": [
      "The characters a, b, c",
      "Any character EXCEPT a, b, c",
      "The string !abc",
      "No characters"
    ],
    "correct": 1,
    "explanation": "[!abc] or [^abc] matches a single character that is NOT a, b, or c."
  },
  {
    "lessonId": "2-4",
    "question": "rm -r is used for:",
    "options": [
      "Rename files",
      "Delete files recursively",
      "Restore files",
      "Rotate log"
    ],
    "correct": 1,
    "explanation": "rm -r recursively deletes directories and their contents."
  },
  {
    "lessonId": "2-4",
    "question": "Which directory contains shared libraries?",
    "options": [
      "/bin",
      "/lib",
      "/etc",
      "/src"
    ],
    "correct": 1,
    "explanation": "/lib and /lib64 contain the shared libraries needed by programs."
  }
];
