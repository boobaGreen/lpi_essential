// LPIC-1 102 Extended Content  English
// Rich structured sections for ExtendedContent.jsx

export const lpic1_102_extendedContent_en = {

  // Topic 1: Shells and Shell Scripting
  'lpic1-102-105-1': {
    title: 'Shell Environment — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Customizing the Bash Environment' },
      { type: 'paragraph', text: 'The shell environment can be customized through startup files, variables, aliases, and functions. The exam requires knowing the execution order of these files.' },
      { type: 'table', headers: ['File', 'Shell Type', 'Function'], rows: [
        ['/etc/profile', 'Login (Global)', 'System settings for all login shells'],
        ['~/.bash_profile', 'Login (User)', 'Precedence 1: user settings (calls .bashrc)'],
        ['~/.bash_login', 'Login (User)', 'Precedence 2: read if .bash_profile doesn\'t exist'],
        ['~/.profile', 'Login (User)', 'Precedence 3: generic file (also used by Bourne/Korn sh)'],
        ['/etc/bash.bashrc', 'Non-login (Global)', 'System settings for non-login interactive shells'],
        ['~/.bashrc', 'Non-login (User)', 'User aliases and functions (read on every new terminal)'],
        ['~/.bash_logout', 'Logout (User)', 'Executed upon exiting a login shell'],
      ]},
      { type: 'heading', level: 2, emoji: '📝', text: 'Critical Environment Variables' },
      { type: 'table', headers: ['Variable', 'Meaning', 'Example'], rows: [
        ['PATH', 'Directories where the shell looks for commands', '/usr/local/bin:/usr/bin:/bin'],
        ['PS1', 'Primary prompt', '"\\u@\\h:\\w\\$ " (user@host:dir$ )'],
        ['PS2', 'Secondary prompt (multiline command)', '"> "'],
        ['HISTFILE', 'Where to save command history', '~/.bash_history'],
        ['HISTSIZE', 'Lines kept in memory', '1000'],
        ['HISTFILESIZE', 'Lines saved to file', '2000'],
        ['HISTCONTROL', 'History saving control', 'ignoreboth (ignores leading spaces and duplicates)'],
      ]},
      { type: 'code', title: 'Setting variables and aliases', prompt: '# Make an alias permanent (in ~/.bashrc)\nalias update="sudo apt update && sudo apt upgrade"\n\n# Modify PATH (in ~/.profile or ~/.bashrc)\nexport PATH="$PATH:$HOME/bin"\n\n# Apply changes to .bashrc immediately\n$ source ~/.bashrc\n# or alternatively:\n$ . ~/.bashrc', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Remember: to reload a configuration file in the current shell use `source file` or `. file`. The ~/.bash_profile and ~/.profile files are read ONLY on login (e.g., via ssh), while ~/.bashrc is read when opening a new terminal (non-login).' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Bash Scripting — Basics — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Structure of a Script' },
      { type: 'paragraph', text: 'A bash script is a text file containing commands executed sequentially. The first essential element is the "shebang" (or hashbang) line indicating which interpreter to use.' },
      { type: 'code', title: 'Basic script example', prompt: '#!/bin/bash\n# This is a comment\n\necho "Script start"\n\nNAME="Linux"\necho "System: $NAME"\n\n# Execution:\n# 1. Give execution permissions: chmod +x script.sh\n# 2. Execute: ./script.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🔢', text: 'Special Variables and Arguments' },
      { type: 'table', headers: ['Variable', 'Meaning'], rows: [
        ['$0', 'Name of the script (e.g.: ./script.sh)'],
        ['$1, $2... $9', 'Arguments passed to the script (parameter 1, 2, etc.)'],
        ['$#', 'Total number of arguments passed'],
        ['$@', 'All arguments individually ("$1" "$2" "$3")'],
        ['$*', 'All arguments as a single string ("$1 $2 $3")'],
        ['$?', 'Exit code of the last command (0=success, >0=error)'],
        ['$$', 'PID of the current script'],
        ['$!', 'PID of the last background job'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Command return values ($?)', content: 'In Linux and Bash, an exit status of 0 means the command SUCCEEDED. Any number other than 0 (e.g., 1, 2, 127) indicates an ERROR. This is the opposite of how booleans work in many programming languages.' },
      { type: 'code', title: 'Conditional structures: if / case', prompt: '# if-then-elif-else-fi structure\nif [ -f "/etc/passwd" ]; then\n  echo "File exists"\nelif [ -d "/etc" ]; then\n  echo "It is a directory"\nelse\n  echo "Not found"\nfi\n\n# case structure (switch)\ncase "$1" in\n  start)\n    echo "Starting service..."\n    ;;\n  stop)\n    echo "Stopping service..."\n    ;;\n  *)\n    echo "Usage: $0 {start|stop}"\n    exit 1\n    ;;\nesac', output: '' },
      { type: 'heading', level: 2, emoji: '🔄', text: 'Loops: for and while' },
      { type: 'code', title: 'Iterative structures', prompt: '# for loop - over a list\nfor FILE in *.txt; do\n  echo "Processing $FILE"\n  cp "$FILE" "$FILE.bak"\ndone\n\n# while loop - while the condition is true\nCOUNTER=1\nwhile [ $COUNTER -le 5 ]; do\n  echo "Loop $COUNTER"\n  COUNTER=$((COUNTER + 1))\ndone\n\n# Command execution (Command Substitution)\nDATE=$(date +%Y-%m-%d)\n# legacy equivalent syntax: DATE=`date +%Y-%m-%d`', output: '' },
      { type: 'infobox', variant: 'exam', content: 'The LPIC-1 exam expects you to know how to use the seq construct inside a for loop (e.g., for i in $(seq 1 10)), understand the difference between "$@" (arguments as separate entities) and "$*" (single string), and recognize numeric comparators (-eq, -lt) vs. string comparators (=, <).' },
    ]
  },

  // Topic 2: User Interfaces and Desktops
  'lpic1-102-106-1': {
    title: 'X11 and Wayland — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Display Servers in Linux' },
      { type: 'paragraph', text: 'A display server is the component responsible for drawing windows on the screen and managing input (mouse/keyboard). Historically Linux uses X11, but modern systems are migrating to Wayland.' },
      { type: 'comparison', left: {
        title: 'X Window System (X11)',
        items: ['Network client/server architecture', 'Apps communicate with the X server', 'Allows forwarding via SSH (X11 Forwarding)', 'Old and complex', 'Menus and windows managed by Window Manager', 'Historical clients: xhost, xauth']
      }, right: {
        title: 'Wayland',
        items: ['Modern and more secure protocol', 'Apps draw directly to the buffer', 'Compositing integrated into the server', 'Lower latency and tearing', 'Will replace X11 (default on Fedora/Ubuntu)', 'XWayland for legacy apps']
      }},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'X11 Configuration' },
      { type: 'table', headers: ['File / Directory', 'Function'], rows: [
        ['/etc/X11/xorg.conf', 'Traditional monolithic configuration file (now optional)'],
        ['/etc/X11/xorg.conf.d/', 'Directory for modular configuration snippets'],
        ['~/.xsession', 'User script executed at startup via Display Manager'],
        ['~/.Xresources', 'Manage X program customizations (colors, fonts)'],
        ['/usr/share/X11/', 'System data for the X11 server'],
        ['/var/log/Xorg.0.log', 'Main X11 server log for troubleshooting'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Remote Access and X11 Forwarding' },
      { type: 'paragraph', text: 'The client-server architecture of X11 allows you to run a graphical application on a remote server but have it appear on your local monitor, using SSH.' },
      { type: 'code', title: 'X11 Forwarding', prompt: '# On the client (local PC) enable X11 forwarding\n$ ssh -X user@remote-server\n# or -Y to enable it bypassing security checks\n$ ssh -Y user@remote-server\n\n# Run the remote program which will open on the local display\nuser@remote:~$ firefox &', output: '' },
      { type: 'table', headers: ['Access Command', 'Action'], rows: [
        ['xhost +IP', 'Old insecure mode: allows IP to connect to local X display'],
        ['DISPLAY', 'Environment variable defining which monitor to use (e.g., :0.0)'],
        ['VNC / RDP', 'Modern protocols for remote desktop access (Wayland and X11)'],
        ['SPICE', 'Protocol to manage KVM virtual machines graphically'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 requires distinguishing between X Window System (architecture), key files like `xorg.conf.d`, the debug log `Xorg.0.log`, and understanding the display variable concept like `DISPLAY=:0` and the ssh option `-X`.' },
    ]
  },

  'lpic1-102-106-2': {
    title: 'Accessibility (a11y) — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Visual Accessibility Features' },
      { type: 'paragraph', text: 'Linux desktop environments offer features to help users with visual, hearing, or motor impairments. These tools are known as a11y (Accessibility).' },
      { type: 'table', headers: ['Physical Condition', 'Software Tool', 'Purpose and Function'], rows: [
        ['Low Vision', 'Orca', 'Screen Reader (reads screen with speech synthesis in GNOME)'],
        ['Low Vision', 'High Contrast Theme', 'High contrast theme (white on black / large text)'],
        ['Low Vision', 'Magnifier / KMagnifier', 'Screen magnification tool'],
        ['Blindness', 'BRLTTY', 'Daemon to manage Braille displays in text/console mode only'],
      ]},
      { type: 'heading', level: 2, emoji: '⌨️', text: 'Motor Accessibility (Keyboard)' },
      { type: 'list', items: [
        { term: 'Sticky Keys', desc: 'Allows pressing combinations like Ctrl+Alt+Del sequentially (one at a time) for those who cannot press multiple keys simultaneously.' },
        { term: 'Slow Keys', desc: 'Prevents accidental keystrokes by requiring a key to be held down for a fraction of a second before it is accepted.' },
        { term: 'Bounce Keys', desc: 'Ignores fast, repeated presses of the same key. Useful for tremors.' },
        { term: 'Mouse Keys', desc: 'Allows moving the mouse cursor using the numeric keypad.' },
        { term: 'On-Screen Keyboard', desc: 'Virtual on-screen keyboard controllable with a mouse or eye-tracking systems.' },
      ]},
      { type: 'infobox', variant: 'tip', title: 'Assistive Tools', content: 'Remember the associations: Orca = Screen Reader. BRLTTY = Braille. Sticky/Slow/Bounce Keys = for movement limitations.' },
    ]
  },

  // Topic 3: Administrative Tasks
  'lpic1-102-107-1': {
    title: 'User and Group Management — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '👥', text: 'User Files' },
      { type: 'paragraph', text: 'User and group management in Linux relies on four fundamental text files, modified using dedicated commands and almost never edited by hand.' },
      { type: 'table', headers: ['File', 'Content and Purpose', 'Typical Permissions'], rows: [
        ['/etc/passwd', 'Public user information (name, UID, shell, home)', '644 (Everyone reads)'],
        ['/etc/shadow', 'Password hashes, account aging (shadowing)', '640 or 600 (Root+shadow only)'],
        ['/etc/group', 'Group definitions and GIDs', '644 (Everyone reads)'],
        ['/etc/gshadow', 'Group passwords and administrators', '640 or 600 (Root+shadow only)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔧', text: 'The /etc/passwd file in Detail' },
      { type: 'code', title: '/etc/passwd Structure (7 fields separated by colons)', prompt: 'user1:x:1001:1001:John Doe:/home/user1:/bin/bash', output: '1. Username (user1)\n2. Password (x = is in /etc/shadow)\n3. UID (User ID, e.g., 1001)\n4. GID (Primary Group ID, e.g., 1001)\n5. GECOS (Info, e.g., "John Doe")\n6. Home directory (/home/user1)\n7. Login Shell (/bin/bash)' },
      { type: 'heading', level: 2, emoji: '🔐', text: 'User Administration (useradd, mod, del)' },
      { type: 'table', headers: ['Command', 'Typical Action', 'Frequent Options'], rows: [
        ['useradd user2', 'Creates a new user', '-m (create home), -s (shell), -G (supp groups), -c (gecos)'],
        ['usermod user2', 'Modifies an existing user', '-aG (add to supp group without removing others), -L (lock acct)'],
        ['userdel user2', 'Deletes user', '-r (also delete home directory and mail spool)'],
        ['groupadd group1', 'Creates group', '-g (specific GID)'],
        ['passwd user1', 'Changes password for user1', '-l (lock password), -S (password status)'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'The usermod -G command', content: 'WARNING: Using usermod -G group user REPLACES all supplementary groups of the user with the one indicated. To ADD a user to a group while keeping the previous ones, ALWAYS USE: usermod -aG group user (-a = append).' },
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Configurations and Templates' },
      { type: 'list', items: [
        { term: '/etc/skel', desc: '"Skeleton" directory. When creating a user with -m, the contents of this directory are copied into their new home dir (files like .bashrc).' },
        { term: '/etc/login.defs', desc: 'Configurations for shadowing, default password aging, and automatic UID/GID ranges.' },
        { term: '/etc/default/useradd', desc: 'Constants and defaults used by the useradd command (e.g., base shell, skeleton, home mount).' },
      ]},
    ]
  },

  'lpic1-102-107-2': {
    title: 'Task Scheduling — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '⏲️', text: 'Periodic Execution with cron' },
      { type: 'paragraph', text: 'The crond daemon is used to execute commands (jobs) at regular times or intervals specified in crontabs (cron tables).' },
      { type: 'table', headers: ['Command / File', 'Action'], rows: [
        ['crontab -e', 'Edits the current user\'s crontab'],
        ['crontab -l', 'Lists the jobs in the crontab on screen'],
        ['crontab -r', 'Removes the entire user crontab'],
        ['/var/spool/cron/', 'Directory where user crontabs are saved'],
        ['/etc/crontab', 'System crontab (adds the USER field)'],
        ['/etc/cron.d/', 'Directory for system crontab snippets (e.g., /etc/cron.d/sysstat)'],
      ]},
      { type: 'heading', level: 2, emoji: '📅', text: 'User Crontab Syntax' },
      { type: 'code', title: '5-field time format', prompt: '# m h  dom mon dow   command\n# * = every, */n = every n, a,b = list, a-b = range\n\n# Every Monday at 3:15 AM\n15 3 * * 1 /scripts/backup.sh\n\n# Every 5 minutes during December\n*/5 * * 12 * /scripts/check_log.sh\n\n# Every half hour (0 and 30) weekdays (Mon-Fri)\n0,30 * * * 1-5 /scripts/sync.sh', output: 'Fields (Min : Hour : Day of Month : Month 1-12 : Day of Week 0-7, 0=Sun)' },
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Access Control for cron and at' },
      { type: 'paragraph', text: 'The at command is used to schedule a ONE-TIME job in the future.' },
      { type: 'table', headers: ['at Command', 'Description and Use'], rows: [
        ['at 14:00', 'Open prompt for command to execute today at 14:00 (Ctrl-D to save)'],
        ['atq / at -l', 'Shows the queue of pending at jobs'],
        ['atrm 3 / at -r', 'Remove specific job number 3'],
        ['/var/spool/at/', 'System directory for jobs (atjobs)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'The exam requires knowing access control: If cron.allow (at.allow) exists, ONLY users listed there can use cron (at). If allow DOES NOT exist, cron.deny (at.deny) dictates who is BLOCKED, others default to YES. If neither allow nor deny exists, defaults to root only or everyone depending on the distro.' },
    ]
  },

  'lpic1-102-107-3': {
    title: 'Localization and Internationalization (i18n) — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'LANG and Locale Variables' },
      { type: 'paragraph', text: 'A "locale" is a set of environmental variables (often starting with LC_) that set the language, currency formats, numeric formats, dates, and character encoding on the Linux system.' },
      { type: 'table', headers: ['Variable', 'Description and Use'], rows: [
        ['LANG', 'Base (fallback) localization variable (e.g., en_US.UTF-8)'],
        ['LC_ALL', 'Total override: bypasses and "beats" all LC_* variables and LANG'],
        ['LC_MESSAGES', 'Language of system command messages'],
        ['LC_TIME', 'Format of dates and times (24h vs AM/PM, DD-MM order)'],
        ['LC_CTYPE', 'Character encoding classification and conversion'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Timezone Management and Commands' },
      { type: 'table', headers: ['Tool/File', 'Operation and Action'], rows: [
        ['locale', 'Prints the currently exported locale variables'],
        ['locale -a', 'List of generated and available locales'],
        ['/etc/timezone', 'Contains the current timezone as text (Debian)'],
        ['/etc/localtime', 'Compiled symlink or binary copy pointing to the timezone file in zoneinfo'],
        ['/usr/share/zoneinfo/', 'Database of timezone binary files (e.g., /usr/share/zoneinfo/America/New_York)'],
      ]},
      { type: 'code', title: 'Practical Commands', prompt: '# Set timezone by modifying the symlink\n# or using the /etc/localtime file\n$ sudo ln -sf /usr/share/zoneinfo/America/New_York /etc/localtime\n\n# Preferred tool on systemd (changes NTP, hardware clock, and timezone)\n$ timedatectl set-timezone America/New_York\n\n# Set UTF-8 for the session\n$ export LANG=en_US.UTF-8\n\n# Convert encodings (e.g., convert file from ISO to UTF-8)\n$ iconv -f ISO-8859-15 -t UTF-8 input.txt > output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'iconv for conversions', content: 'iconv is an essential tool required for exam 102 to convert file encodings. The -f option stands for FROM and -t for TO.' },
    ]
  },

  // Topic 4: Essential System Services
  'lpic1-102-108-1': {
    title: 'NTP and System Time — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: 'Hardware Clock vs System Clock' },
      { type: 'paragraph', text: 'Linux manages two clocks: the Hardware Clock (RTC or BIOS clock, battery-backed) and the System Clock (kernel in RAM). At boot, the kernel reads the RTC and keeps the time in memory. On shutdown, it saves the system time to the RTC.' },
      { type: 'comparison', left: {
        title: 'Hardware Clock (RTC)',
        items: ['Maintained by CMOS battery', 'Independent of the OS', 'Read only at boot', 'Typically set to UTC', 'Command: hwclock (historically)']
      }, right: {
        title: 'System Clock (Kernel)',
        items: ['Maintained by the Linux kernel in RAM', 'Includes timezone', 'Synchronized via network (NTP)', 'Used for file timestamps', 'Command: date']
      }},
      { type: 'heading', level: 2, emoji: '⏱️', text: 'Network Time Protocol Synchronization' },
      { type: 'paragraph', text: 'NTP keeps the System Clock synchronized with exact servers on the internet. It uses UDP port 123. Historically, there are three daemons (ntpd, chrony, systemd-timesyncd).' },
      { type: 'table', headers: ['Daemon/Command', 'Feature/Config File', 'Usage Notes'], rows: [
        ['ntpd (Network Time Protocol daemon)', '/etc/ntp.conf', 'Classic. Slow to sync, requires permanent network'],
        ['chronyd', '/etc/chrony.conf', 'Modern. Syncs quickly, great for offline/online laptops. Uses chronyc'],
        ['systemd-timesyncd', '/etc/systemd/timesyncd.conf', 'Minimal SNTP client built into systemd.'],
        ['ntpq -p', '(ntp query)', 'Shows servers (peers), offset and status (stratum)'],
        ['hwclock -w', '(write)', 'Writes current server time to the hardware clock'],
      ]},
    ]
  },

  'lpic1-102-108-2': {
    title: 'System Loggers (Syslog, Journald) — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Logging Daemons' },
      { type: 'paragraph', text: 'Services and the kernel send logs that are centralized and written to files by services like rsyslogd (historical, config /etc/rsyslog.conf) or systemd-journald (modern, binary).' },
      { type: 'table', headers: ['Facility (Origin)', 'Priority (Severity Level)', 'rsyslog.conf Syntax'], rows: [
        ['auth/authpriv, cron, daemon', '0-emerg, 1-alert, 2-crit, 3-err', 'facility.priority  action (file/remote/user)'],
        ['kern, lpr, mail, user', '4-warning, 5-notice, 6-info, 7-debug', 'mail.info   /var/log/maillog (ALL info and DOWN: warn, err, crit)'],
        ['local0 ... local7 (custom)', 'none (excludes the facility)', 'cron.*      /var/log/cron (ALL priorities for cron)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'Search and Log Rotation Commands' },
      { type: 'code', title: 'Consulting Journald', prompt: '# View logs of the current boot (beats full dmesg)\n$ journalctl -b\n\n# Only output of a specific unit/service\n$ journalctl -u nginx.service\n\n# Today\'s logs, follow in real-time\n$ journalctl --since today -f\n\n# Use logger to manually create a log from a script\n$ logger -p user.notice "Backup script finished"', output: '' },
      { type: 'paragraph', text: 'logrotate prevents log files in /var/log from filling the filesystem. It is run daily by cron. It rotates, compresses, and deletes old logs. (Config: /etc/logrotate.conf and /etc/logrotate.d/*).' },
      { type: 'infobox', variant: 'exam', content: 'LPIC-1 requires: facility.priority structure, key files like /var/log/messages (or syslog), /var/log/secure (or auth.log for logins). Journald writes persistent logs only if the directory /var/log/journal/ exists.' },
    ]
  },

  'lpic1-102-108-3': {
    title: 'Mail System (MTA) and Aliases — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Local Email Flow' },
      { type: 'paragraph', text: 'Historically UNIX/Linux servers send system notifications, cron output, and administrative reports to the local "root" mail using an MTA (Mail Transfer Agent) like Postfix or Sendmail.' },
      { type: 'table', headers: ['Protocol/Component', 'Action Performed'], rows: [
        ['SMTP / tcp 25', 'Simple Mail Transfer Protocol, forwards mail server->server'],
        ['MTA (Mail Transfer Agent)', 'Accepts local email and forwards or delivers it'],
        ['MUA (Mail User Agent)', 'The client, runs the `mail` command or mutt'],
        ['~/.forward', 'Each user customizes this file to divert THEIR mail to a new address.'],
      ]},
      { type: 'heading', level: 2, emoji: '🔗', text: 'System Forwarding: /etc/aliases' },
      { type: 'paragraph', text: 'Aliases redirect local mail (MTA). It is essential that "root" receives mail, but root rarely logs in, so all emails from root are forwarded to "sysadmin" users.' },
      { type: 'code', title: 'File /etc/aliases', prompt: '# /etc/aliases\npostmaster: root\nwebmaster: root\n\n# EVERYTHING going to root, terminate in user1\nroot: user1\n\n# AFTER MODIFICATION you must compile the binary DB (aliases.db):\n$ sudo newaliases', output: '' },
      { type: 'infobox', variant: 'warning', title: 'newaliases', content: 'For the exam it is vital to remember: the MTA NEVER reads the text file /etc/aliases. The MTA uses the database /etc/aliases.db. Every time you edit the text file you must run `newaliases`!' },
    ]
  },

  'lpic1-102-108-4': {
    title: 'Printer Maintenance (CUPS) — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'Common UNIX Printing System (CUPS)' },
      { type: 'paragraph', text: 'CUPS is the print queue manager on Linux. It uses IPP (Internet Printing Protocol, port 631) and exposes a web administration page on localhost:631. Config files are in /etc/cups/.' },
      { type: 'table', headers: ['CUPS/LPD Command', 'Action', 'Options'], rows: [
        ['lp / lpr', 'Send file to print queue', 'lp -d PRINTER_NAME file.pdf'],
        ['lpstat', 'Status of printers or queues', 'lpstat -p (all printers), lpstat -d (default)'],
        ['lpq', 'Shows jobs in the queue', 'Shows user Job ID'],
        ['cancel / lprm', 'Delete job/cancel', 'cancel JOB_ID / lprm ID'],
        ['cupsaccept / cupsreject', 'Accept or reject new jobs in the queue', '(Admin)'],
        ['cupsenable / cupsdisable', 'Start or stop physical printing of jobs on HW', '(Admin)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'The logical difference between ACCEPTING and ENABLING is a core exam point: `cupsreject` bounces print jobs saying "queue closed". `cupsdisable` allows printing (queue ACCEPTS jobs to server) but the physical printer remains off and doesn\'t "suck" jobs. LPD is the historical legacy protocol (port 515).' },
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: 'Networking Fundamentals — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'IPv4 Addresses and Subnetting' },
      { type: 'paragraph', text: 'An IPv4 address consists of 32 bits divided into 4 octets (e.g., 192.168.1.10). The Subnet Mask (e.g., 255.255.255.0 or /24) determines which part of the address identifies the network (Network ID) and which the host (Host ID).' },
      { type: 'table', headers: ['Class', 'First Octet Range', 'Default Subnet Mask', 'CIDR Notation'], rows: [
        ['A', '1 - 126', '255.0.0.0', '/8'],
        ['B', '128 - 191', '255.255.0.0', '/16'],
        ['C', '192 - 223', '255.255.255.0', '/24'],
        ['D (Multicast)', '224 - 239', '—', '—'],
        ['E (Experimental)', '240 - 255', '—', '—'],
      ]},
      { type: 'heading', level: 2, emoji: '🔒', text: 'Private Addresses (RFC 1918)' },
      { type: 'paragraph', text: 'These addresses are not routable on the Internet. They require NAT (Network Address Translation) to communicate externally.' },
      { type: 'list', items: [
        { term: 'Class A', desc: '10.0.0.0 - 10.255.255.255 (1 network /8)' },
        { term: 'Class B', desc: '172.16.0.0 - 172.31.255.255 (16 networks /16)' },
        { term: 'Class C', desc: '192.168.0.0 - 192.168.255.255 (256 networks /24)' },
        { term: 'APIPA/Link-Local', desc: '169.254.0.0/16 — Assigned automatically if DHCP fails' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'The LPIC-1 exam expects knowledge of the 3 classes of private IPs, the /24 subnet mask (=255.255.255.0), and the concept of Default Gateway (the IP of the router that allows exiting the local network).' },
    ]
  },

  'lpic1-102-109-2': {
    title: 'Network Configuration and Ports — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Configuration Files (Debian/Ubuntu)' },
      { type: 'table', headers: ['File / Directory', 'Purpose'], rows: [
        ['/etc/network/interfaces', 'Static/DHCP config of network cards (legacy)'],
        ['/etc/resolv.conf', 'List of DNS servers (e.g., nameserver 8.8.8.8)'],
        ['/etc/hosts', 'Local name resolution (bypasses DNS)'],
        ['/etc/nsswitch.conf', 'Resolution order (e.g., hosts: files dns)'],
        ['/etc/services', 'Standard ports/protocols mapping (e.g., ssh 22/tcp)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔌', text: 'Standard Ports' },
      { type: 'table', headers: ['Port', 'Protocol', 'Service'], rows: [
        ['20, 21', 'TCP', 'FTP (File Transfer Protocol)'],
        ['22', 'TCP', 'SSH (Secure Shell)'],
        ['23', 'TCP', 'Telnet (Clear text, insecure)'],
        ['25', 'TCP', 'SMTP (Email Sending)'],
        ['53', 'TCP/UDP', 'DNS (Name Resolution)'],
        ['80, 443', 'TCP', 'HTTP, HTTPS (Web)'],
        ['110, 143', 'TCP', 'POP3, IMAP (Email Receiving)'],
      ]},
    ]
  },

  'lpic1-102-109-3': {
    title: 'Network Troubleshooting — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Diagnostic Tools' },
      { type: 'table', headers: ['Command', 'Function and Use'], rows: [
        ['ping', 'Tests ICMP reachability (ping -c 4 8.8.8.8)'],
        ['traceroute / tracepath', 'Shows routers traversed to reach the destination'],
        ['host / nslookup / dig', 'Queries DNS servers to resolve names (dig A www.linux.org)'],
        ['netstat / ss', 'Shows open connections and listening ports'],
        ['nc (netcat)', 'Tests connections to specific ports (nc -vz 10.0.0.1 22)'],
      ]},
      { type: 'code', title: 'netstat and ss (Socket Statistics)', prompt: '# Shows listening TCP ports (L) with PID (p)\n$ ss -tulpn\n$ netstat -tulpn\n\n# Shows routing table used by the kernel (n = numeric, no DNS names)\n$ netstat -rn', output: '' },
      { type: 'infobox', variant: 'tip', title: 'ss vs netstat', content: 'The `ss` command is the modern and faster replacement for `netstat`. The -t option means TCP, -u UDP, -l listening, -p process PID, -n do not resolve names (stay primarily numeric IP/Port for greater speed).' },
    ]
  },

  // Topic 6: Security
  'lpic1-102-110-1': {
    title: 'Security, SUID and GPG — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Special Permissions (SUID/SGID)' },
      { type: 'paragraph', text: 'SUID permissions (Set User ID = 4xxx) allow a user to execute an executable with the permissions of the OWNER (usually root) instead of their own.' },
      { type: 'code', title: 'Find SUID Files (Typical LPIC-1 Command)', prompt: '# Search all regular files (-type f) with the SetUID bit set (4000)\n$ find / -perm /4000 -user root -type f -exec ls -l {} \\; 2>/dev/null', output: '' },
      { type: 'heading', level: 2, emoji: '🔑', text: 'Asymmetric Cryptography: GPG (GnuPG)' },
      { type: 'paragraph', text: 'GnuPG implements the OpenPGP standard to encrypt, sign, and decrypt files using Public/Private key pairs.' },
      { type: 'table', headers: ['gpg Command', 'GPG Operation'], rows: [
        ['gpg --gen-key', 'Creation of initial keyring (public and secret)'],
        ['gpg --export email', 'Export PUBLIC KEY (to distribute to others) in binary'],
        ['gpg -a --export email', 'Export PUBLIC KEY in ASCII text (armor)'],
        ['gpg --import key.asc', 'Import someone else\'s public key'],
        ['gpg --list-keys', 'Show public keyring'],
        ['gpg -e -r user file', 'Encrypt for the specified recipient (-r)'],
        ['gpg -d file.gpg', 'Decrypt document using YOUR private key'],
      ]},
    ]
  },

  'lpic1-102-110-2': {
    title: 'Password Security and Limits (ulimit) — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🛂', text: 'Shadow Passwords and Aging' },
      { type: 'table', headers: ['chage Option', '/etc/shadow Aging Parameter'], rows: [
        ['chage -l user', 'Show current status (list) for user'],
        ['chage -M 90 user', 'Max days password validity. After 90 days must change it'],
        ['chage -m 10 user', 'Min days before replacement. Cannot change before 10 days'],
        ['chage -W 7 user', 'Warning. Alerts user at login 7 days before expiration'],
        ['chage -E 2025-12-31', 'Expire: The entire user account ceases to function on this date'],
      ]},
      { type: 'heading', level: 2, emoji: '👮', text: 'Resource Limits for Users' },
      { type: 'paragraph', text: 'A user without limits (e.g., unlimited "ulimit -a") can write a fork-bomb (:(){:|:&};:) that clogs RAM in milliseconds spanning root, sending the Kernel into panic.' },
      { type: 'list', items: [
        { term: 'Command: ulimit', desc: 'Sets or displays limits for the current user session (soft/hard)' },
        { term: 'File: /etc/security/limits.conf', desc: 'File to limit memory (RSS), open files (nofile), or max processes (nproc)' },
        { term: 'Hard vs Soft Limit', desc: 'Soft (S) = default value that the user themselves can raise up to the hard limit. Hard (H) = absolute maximum imposed by root' },
      ]},
      { type: 'infobox', variant: 'warning', title: 'Commands lsof, nmap, netstat', content: 'In LPIC-1: `lsof -i` (list open ports and sockets), nmap and netstat are used to see FROM OUTSIDE and LOCALLY who (and what) is listening (Security audit).' },
    ]
  },

  'lpic1-102-110-3': {
    title: 'Secure Configuration for Network and Services — Deep Dive',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Connections and SSH' },
      { type: 'paragraph', text: 'SSH (Secure Shell) replaces historical tools by sending encrypted traffic over tcp/22. It has a base file /etc/ssh/sshd_config (server daemon) and ssh_config (local client).' },
      { type: 'code', title: 'Secure Configuration Files /etc/ssh/sshd_config', prompt: '# Vital settings (after which: sudo systemctl restart sshd)\nPort 2222                 # Change port\nPermitRootLogin no        # NEVER via root with password\nPasswordAuthentication no # Only RSA/Ed25519 keys', output: '' },
      { type: 'table', headers: ['OpenSSH Commands', 'SSH Security Operations'], rows: [
        ['ssh-keygen', 'Generates keys (RSA or modern ed25519) in ~/.ssh/id_rsa'],
        ['ssh-copy-id remote', 'SECURE copy of /id_rsa.pub/ into remote /authorized_keys/'],
        ['ssh-agent', 'Holds the passphrase "unlocked" temporarily in ram'],
      ]},
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Wrapper Level Security (TCPD)' },
      { type: 'list', items: [
        { term: '/etc/hosts.allow', desc: 'Permit rules. Allows X daemon to IP or CDIR Y. (sshd: 192.168.)' },
        { term: '/etc/hosts.deny', desc: 'Deny rules (e.g., sshd: ALL blocks outside world excluding allow)' },
      ]},
    ]
  },

}
