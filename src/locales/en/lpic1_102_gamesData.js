export const memoryGameData = [
  { command: 'export', description: 'Sets environment variable globally' },
  { command: 'alias', description: 'Creates custom command shortcuts' },
  { command: 'source', description: 'Executes script in current shell' },
  { command: '/etc/skel', description: 'Template for new user homes' },
  { command: 'if [ ]', description: 'Starts a conditional block' },
  { command: 'DISPLAY', description: 'Target for graphical output' },
  { command: 'xdpyinfo', description: 'X Server status information' },
  { command: 'GDM/LightDM', description: 'Graphical login managers' },
  { command: 'KDE/GNOME', description: 'Desktop Environment examples' },
  { command: 'Wayland', description: 'Modern X11 successor' },
  { command: 'Orca', description: 'Screen reader (Accessibility)' },
  // Topic 107
  { command: '/etc/shadow', description: 'Encrypted passwords and aging' },
  { command: 'chage', description: 'Manage password aging' },
  { command: 'crontab -e', description: 'Edit scheduled jobs' },
  { command: 'at', description: 'Scheduled single-time execution' },
  { command: 'LC_ALL', description: 'Overrides all locale settings' },
  { command: 'timedatectl', description: 'Manage time and timezone' },
  // Topic 108
  { command: 'hwclock', description: 'RTC Hardware clock management' },
  { command: 'chrony', description: 'Time sync (NTP)' },
  { command: 'journalctl', description: 'Read systemd logs' },
  { command: 'logrotate', description: 'Automatic log rotation' },
  { command: 'Postfix/Exim', description: 'MTA (Mail) examples' },
  { command: 'CUPS', description: 'Linux printing system' },
  // Topic 109
  { command: 'ip addr', description: 'Display IP addresses' },
  { command: 'nmcli', description: 'Network CLI configuration' },
  { command: 'ping', description: 'Test host connectivity' },
  { command: 'traceroute', description: 'Trace hop path to destination' },
  { command: 'dig', description: 'DNS query tool' },
  { command: '/etc/hosts', description: 'Local IP-Name map' },
  // Topic 110
  { command: 'SUID/SGID', description: 'Special execution permissions' },
  { command: 'Sticky Bit', description: 'File deletion protection' },
  { command: 'visudo', description: 'Safe edit of /etc/sudoers' },
  { command: 'ss -tulpn', description: 'Show listening services' },
  { command: 'ssh-keygen', description: 'Generate SSH keys' },
  { command: 'gpg -c', description: 'Symmetric file encryption' },
];

export const trueFalseData = [
  { text: '/etc/skel contains files copied to new home directories.', answer: true, explanation: 'Correct! It is the "skeleton" directory for new users.', difficulty: 1 },
  { text: 'The shebang #! must be on the last line of a script.', answer: false, explanation: 'False! It must be on the very first line.', difficulty: 1 },
  { text: 'The && operator runs the second command only if the first fails.', answer: false, explanation: 'False! && runs if the first SUCCEEDS. || runs if it fails.', difficulty: 2 },
  { text: '~/.bash_logout is executed when a login shell closes.', answer: true, explanation: 'Correct! It is used for post-session cleanup.', difficulty: 2 },
  // Topic 106
  { text: 'X11 is a "network transparent" protocol.', answer: true, explanation: 'True! It allows running graphical apps over a network.', difficulty: 1 },
  { text: 'A Window Manager (WM) handles the graphical login.', answer: false, explanation: 'False! Login is handled by the Display Manager (DM).', difficulty: 1 },
  { text: 'Wayland is considered more secure than the old X11 protocol.', answer: true, explanation: 'True! It has better window isolation.', difficulty: 2 },
  // Topic 107
  { text: '/etc/passwd contains the encrypted passwords.', answer: false, explanation: 'False! They are in /etc/shadow. passwd only has an "x".', difficulty: 1 },
  { text: 'In crontab, the first field represents hours.', answer: false, explanation: 'False! The first field is for minutes.', difficulty: 1 },
  { text: 'The atq command shows jobs waiting to be run.', answer: true, explanation: 'True! "atq" stands for "at queue".', difficulty: 2 },
  // Topic 108
  { text: 'CUPS is accessible via web on port 631.', answer: true, explanation: 'True! It is the standard for CUPS.', difficulty: 1 },
  { text: 'journalctl allows reading logs in binary format.', answer: true, explanation: 'True! systemd journal is binary for performance.', difficulty: 1 },
  { text: 'The Sendmail MTA is easy to configure manually.', answer: false, explanation: 'False! It is known for being very complex (m4).', difficulty: 2 },
  // Topic 109
  { text: 'The /etc/hosts file has priority over DNS by default.', answer: true, explanation: 'True! If a name is in hosts, the system won\'t query DNS.', difficulty: 1 },
  { text: 'UDP is a connection-oriented protocol.', answer: false, explanation: 'False! TCP is connection-oriented, UDP is not.', difficulty: 1 },
  { text: 'netstat is considered a deprecated command.', answer: true, explanation: 'True! It is replaced by "ss" and "ip".', difficulty: 2 },
  // Topic 110
  { text: 'The SUID bit allows running a file with owner privileges.', answer: true, explanation: 'True! Used for commands like passwd.', difficulty: 1 },
  { text: 'SSH uses port 22 by default.', answer: true, explanation: 'True! It is the standard for secure connections.', difficulty: 1 },
  { text: 'visudo does not check sudoers file syntax.', answer: false, explanation: 'False! The main purpose of visudo is syntax checking.', difficulty: 2 },
];

export const terminalChallengeData = [
  { id: 'tc-102-1', description: 'Export EDITOR variable as nano', prompt: 'export EDITOR=nano', expectedOutput: '', hint: 'Use export', difficulty: 1 },
  { id: 'tc-102-2', description: 'Create an alias "c" for clear', prompt: 'alias c=clear', expectedOutput: '', hint: 'Use alias', difficulty: 1 },
  { id: 'tc-102-3', description: 'Execute .bashrc file in current shell', prompt: 'source ~/.bashrc', expectedOutput: '', hint: 'Use source or dot .', difficulty: 2 },
  // Topic 106
  { id: 'tc-102-4', description: 'Show info about current X server', prompt: 'xdpyinfo', expectedOutput: '', hint: 'Use xdpyinfo', difficulty: 2 },
  { id: 'tc-102-5', description: 'Enable access for every client (insecure)', prompt: 'xhost +', expectedOutput: '', hint: 'Use xhost +', difficulty: 3 },
  // Topic 107
  { id: 'tc-102-6', description: 'Show your UID and groups', prompt: 'id', expectedOutput: '', hint: 'Use id', difficulty: 1 },
  { id: 'tc-102-7', description: 'List active timers in system', prompt: 'systemctl list-timers', expectedOutput: '', hint: 'Use systemctl', difficulty: 2 },
  // Topic 108
  { id: 'tc-102-8', description: 'Follow system logs in real-time', prompt: 'journalctl -f', expectedOutput: '', hint: 'Use -f', difficulty: 1 },
  { id: 'tc-102-9', description: 'Show mail message queue', prompt: 'mailq', expectedOutput: '', hint: 'Use mailq', difficulty: 2 },
  // Topic 109
  { id: 'tc-102-10', description: 'Show assigned IP addresses', prompt: 'ip addr', expectedOutput: '', hint: 'Use ip addr', difficulty: 1 },
  { id: 'tc-102-11', description: 'Resolve google.com IP address', prompt: 'dig google.com', expectedOutput: '', hint: 'Use dig', difficulty: 2 },
  // Topic 110
  { id: 'tc-102-12', description: 'Find SUID files in the system', prompt: 'find / -perm /4000', expectedOutput: '', hint: 'Use find and -perm', difficulty: 3 },
  { id: 'tc-102-13', description: 'Generate a new SSH key pair', prompt: 'ssh-keygen', expectedOutput: '', hint: 'Use ssh-keygen', difficulty: 1 },
];

export const dragDropData = [
  {
    id: 'dd-bash-files',
    category: 'Configuration Files',
    question: 'Match the file to its purpose:',
    items: [
      { text: '/etc/profile', matches: 'Global (Login)' },
      { text: '~/.bashrc', matches: 'User (Interactive)' },
      { text: '/etc/skel', matches: 'New user template' },
      { text: '~/.bash_logout', matches: 'Session close' },
    ],
  },
  {
    id: 'dd-desktop-comps',
    category: 'Desktop Components',
    question: 'Match component to its type:',
    items: [
      { text: 'Mutter/KWin', matches: 'Window Manager' },
      { text: 'GDM/LightDM', matches: 'Display Manager' },
      { text: 'Orca', matches: 'Accessibility' },
      { text: 'Qt/GTK', matches: 'GUI Toolkit' },
    ],
  },
  {
    id: 'dd-admin-files',
    category: 'Admin Files',
    question: 'Match file to its content:',
    items: [
      { text: '/etc/shadow', matches: 'Password hashes' },
      { text: '/etc/passwd', matches: 'User info (UID)' },
      { text: '/etc/group', matches: 'Group info' },
      { text: '/etc/localtime', matches: 'Timezone' },
    ],
  },
  {
    id: 'dd-services-comps',
    category: 'System Services',
    question: 'Match service to its scope:',
    items: [
      { text: 'chony/ntpd', matches: 'Time Sync' },
      { text: 'Postfix/Sendmail', matches: 'E-mail (MTA)' },
      { text: 'CUPS', matches: 'Printing' },
      { text: 'rsyslog/journald', matches: 'Logging' },
    ],
  },
  {
    id: 'dd-network-tools',
    category: 'Network Tools',
    question: 'Match tool to its purpose:',
    items: [
      { text: 'ping', matches: 'Basic connectivity' },
      { text: 'traceroute', matches: 'Path analysis' },
      { text: 'dig/host', matches: 'DNS resolution' },
      { text: 'nsswitch.conf', matches: 'Lookup order' },
    ],
  },
  {
    id: 'dd-security-tools',
    category: 'Security',
    question: 'Match tool to its function:',
    items: [
      { text: 'visudo', matches: 'Sudoers config' },
      { text: 'ssh-agent', matches: 'Key management' },
      { text: 'GPG', matches: 'File encryption' },
      { text: 'ulimit', matches: 'Resource limits' },
    ],
  }
];

export const fillGapData = [
  { prompt: '_____ VAR="value"', answer: 'export', hint: 'Global variable', difficulty: 1 },
  { prompt: '#!/bin/_____', answer: 'bash', hint: 'Common interpreter', difficulty: 1 },
  { prompt: 'if [ $V -eq 1 ]; _____ echo "Ok"; fi', answer: 'then', hint: 'Follows IF', difficulty: 2 },
  // Topic 106
  { prompt: 'Graphical output variable: _____', answer: 'DISPLAY', hint: 'Starts with D', difficulty: 1 },
  { prompt: 'Screen reader tool: _____', answer: 'Orca', hint: 'Similar to a whale', difficulty: 2 },
  // Topic 107
  { prompt: 'Command to edit crontab: crontab -_____', answer: 'e', hint: 'Short for edit', difficulty: 1 },
  { prompt: 'Main locale variable: _____', answer: 'LANG', hint: 'Starts with L', difficulty: 1 },
  // Topic 108
  { prompt: 'Print command: _____ file.txt', answer: 'lp', hint: 'Starts with l', difficulty: 1 },
  { prompt: 'Binary log daemon: systemd-_____', answer: 'journald', hint: 'Starts with j', difficulty: 2 },
  // Topic 109
  { prompt: 'DNS server file: /etc/_____.conf', answer: 'resolv', hint: 'Name resolution', difficulty: 1 },
  { prompt: 'HTTP standard port: _____', answer: '80', hint: 'Integer number', difficulty: 1 },
  // Topic 110
  { prompt: 'Symmetric encryption: gpg -_____', answer: 'c', hint: 'Short for crypt/symmetric', difficulty: 2 },
  { prompt: 'Special permission (4xxx): _____', answer: 'SUID', hint: 'Starts with S', difficulty: 2 },
];
