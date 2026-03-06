export const lpic1_102_lessonContent = {
  // --- TOPIC 105: SHELLS AND SHELL SCRIPTING ---
  '105.1': {
    title: "Customize the Shell Environment",
    content: `
Customizing the shell environment allows you to optimize your workflow. Main configuration files are loaded when the shell starts.

### Configuration Files (Bash)
- **/etc/profile**: Global configuration for all users (login shell).
- **/etc/bash.bashrc**: Global configuration (non-login interactive shell).
- **~/.bash_profile**, **~/.bash_login**, **~/.profile**: User-specific configurations (login shell). Bash looks for these in order and loads the first one it finds.
- **~/.bashrc**: The most used file for personal aliases and variables (non-login interactive shell).
- **~/.bash_logout**: Executed when closing a login session.

### Environment Variables and Aliases
- **export**: Makes a variable available to child processes.
- **PATH**: Defines directories where the shell looks for executables.
- **alias**: Creates shortcuts for complex commands (e.g., \`alias ll='ls -la'\`).
- **function**: Allows defining reusable command sequences with parameters.

### Skeleton Directory
- **/etc/skel/**: Contains default files copied to new users' home directories upon creation (e.g., \`.bashrc\`, \`.profile\`).
    `
  },
  '105.2': {
    title: "Customize or Write Simple Scripts",
    content: `
Shell scripting automates repetitive tasks.

### Script Structure
- **Shebang (#!)**: The first line indicates the interpreter (e.g., \`#!/bin/bash\`).
- **Permissions**: The script must be executable (\`chmod +x script.sh\`).

### Fundamental Constructs
- **Variables**: Assignment without spaces (\`VAR="value"\`), access with \`$\` (\`$VAR\`).
- **Arguments**: \`$1, $2, ...\` are parameters passed to the script; \`$#\` is the number of arguments.
- **Test and Conditions**: \`if [ condition ]; then ... fi\`.
- **Loops**: \`for\`, \`while\`, \`until\`.
- **Command Substitution**: \`$(command)\` or \` \`command\` \` to capture output.

### Logical Operators
- **&&**: Executes the second command only if the first succeeds (exit code 0).
- **||**: Executes the second command only if the first fails.
    `
  },

  // --- TOPIC 106: USER INTERFACES AND DESKTOPS ---
  '106.1': {
    title: "Install and Configure X11",
    content: `
X Window System (X11) is the base framework for graphical interfaces on Linux.

### X11 Architecture
- **X Server**: Manages hardware (display, mouse, keyboard).
- **X Client**: The graphical application (e.g., a browser).
- **Network Protocol**: X11 is network-transparent (client can run on a different host than the server).

### Configuration
- **/etc/X11/xorg.conf**: Historical configuration file (now often automatic).
- **/etc/X11/xorg.conf.d/**: Directory for modern modular configurations.
- **Wayland**: Modern successor to X11, more secure and simpler, but less natively network-oriented.

### Utilities
- **xdpyinfo**: Shows information about the current X server.
- **xhost**: Controls which users/hosts can access the X server.
- **DISPLAY**: Environment variable indicating where to send graphical output (e.g., \`localhost:0.0\`).
    `
  },
  '106.2': {
    title: "Graphical Desktops",
    content: `
Desktop Environments (DE) provide a full user experience.

### Common Components
- **Window Manager (WM)**: Manages window positioning and borders (e.g., Mutter, KWin, Openbox).
- **Display Manager (DM)**: Manages graphical login (e.g., GDM, SDDM, LightDM).

### Popular Desktops
- **GNOME**: Modern, focused on simplicity. Uses GTK.
- **KDE Plasma**: Highly customizable. Uses Qt.
- **XFCE / LXQt**: Lightweight, ideal for older hardware.

### Remote Desktop
- **VNC (Virtual Network Computing)**: Protocol for cross-platform remote desktop.
- **SPICE**: Protocol often used in virtualization environments (KVM).
- **Xrdp**: Open source implementation of RDP (Remote Desktop Protocol).
    `
  },
  '106.3': {
    title: "Accessibility",
    content: `
Linux offers tools to make the system usable for people with disabilities.

### Assistive Technologies
- **Screen Readers**: Orca (for GNOME).
- **Magnifiers**: Screen Magnifier.
- **On-screen Keyboards**: GOK, Onboard.

### Themes and Contrast
- Support for high contrast themes and large fonts.
- **Sticky Keys**: Allows pressing modifier keys (Shift, Ctrl) in sequence instead of simultaneously.
- **Slow Keys**: Key must be pressed for a certain time before being accepted.
- **Bounce Keys**: Ignores fast repeated presses of the same key.
    `
  },

  // --- TOPIC 107: ADMINISTRATIVE TASKS ---
  '107.1': {
    title: "Manage User and Group Accounts",
    content: `
User management is essential for system security and organization.

### User and Group Files
- **/etc/passwd**: Contains user account info (UID, GID, home, shell).
- **/etc/group**: Contains group info and their members.
- **/etc/shadow**: Stores password hashes and expiration info (readable only by root).
- **/etc/gshadow**: Secure version for group passwords.

### Management Commands
- **useradd / userdel / usermod**: Create, delete, or modify users.
- **groupadd / groupdel / groupmod**: Manage groups.
- **passwd**: Change user password.
- **chage**: Manage password aging parameters (e.g., \`chage -M 90 user\`).
- **id**: Shows UID and GID of current or specified user.
    `
  },
  '107.2': {
    title: "Automation (Cron and Systemd Timers)",
    content: `
Automation allows running scripts at scheduled times.

### Cron
- **crontab -e**: Edits user's cron table.
- **Crontab Format**: \`min hour day month w_day command\`.
- **/etc/cron.allow** and **/etc/cron.deny**: Control who can use cron.

### Systemd Timers
- Modern alternative to cron, integrated with systemd.
- Requires two files: a **.service** file (what to run) and a **.timer** file (when to run it).
- **systemctl list-timers**: Shows active timers in the system.

### At
- **at**: Executes a command once in the future (e.g., \`at 14:00 tomorrow\`).
- **atq**: Views the queue of pending jobs.
- **atrm**: Removes a job from the queue.
    `
  },
  '107.3': {
    title: "Localization and Internationalization",
    content: `
Configure the system for different languages and timezones.

### Locale Variables
- **LANG**: Primary variable for language (e.g., \`en_US.UTF-8\`).
- **LC_ALL**: Overrides all other locale settings.
- **locale**: Command to view current settings.

### Timezone
- **/etc/timezone**: Indicates current timezone.
- **/etc/localtime**: Symbolic link to timezone file in \`/usr/share/zoneinfo/\`.
- **timedatectl**: Modern tool to manage time, date, and timezone.
    `
  },

  // --- TOPIC 108: ESSENTIAL SYSTEM SERVICES ---
  '108.1': {
    title: "Maintain System Time",
    content: `
Précise time is essential for logs, security (certificates), and network file systems.

### Clocks
- **System Clock**: Managed by the kernel (Software).
- **Hardware Clock (RTC)**: Battery-powered chip clock (Hardware).
- **hwclock**: Query and set hardware clock.

### Network Time Protocol (NTP)
- **NTP**: Protocol to sync time via network.
- **ntpd**: Traditional NTP daemon.
- **chrony**: Modern and fast alternative, great for systems often offline.
- **timedatectl set-ntp true**: Enables automatic sync via systemd-timesyncd.
    `
  },
  '108.2': {
    title: "System Logging",
    content: `
Logs allow monitoring system status and troubleshooting.

### Syslog
- **rsyslog**: Common syslog implementation.
- **/etc/rsyslog.conf**: Configuration file.
- **/var/log/**: Directory containing log files (e.g., \`messages\`, \`auth.log\`, \`syslog\`).
- **logrotate**: Utility to rotate, compress, and remove old logs to save space.

### Systemd Journal
- **journald**: Collects logs in binary format (indexed, fast).
- **journalctl**: Command to read logs.
- **journalctl -u service**: Logs for a specific service.
- **journalctl -p err**: Shows only errors (priority).
- **/etc/systemd/journald.conf**: Persistence configuration.
    `
  },
  '108.3': {
    title: "MTA Basics (E-mail)",
    content: `
Linux uses Mail Transfer Agents (MTA) to send notifications and messages between users or processes.

### Common MTAs
- **Postfix**: Modern, secure, and easy to configure.
- **Sendmail**: The historical standard, complex configuration (m4).
- **Exim**: Default MTA on Debian, flexible.

### Commands and Files
- **mailq**: Views outgoing message queue.
- **newaliases**: Regenerates alias database in \`/etc/aliases\`.
- **~/.forward**: Allows user to forward their e-mails.
- **SMTP**: Protocol used for transfer (Port 25).
    `
  },
  '108.4': {
    title: "Manage Printers and Printing",
    content: `
The standard printing system on Linux is CUPS.

### CUPS (Common Unix Printing System)
- **Web Interface**: Manageable via browser at \`localhost:631\`.
- **/etc/cups/**: Configuration directory.

### Printing Commands (Line Printer)
- **lp**: Sends a file to the printer.
- **lpq**: Views print queue status.
- **lprm**: Removes a job from the queue.
- **lpc**: Administrative control of printers.
    `
  },

  // --- TOPIC 109: NETWORKING FUNDAMENTALS ---
  '109.1': {
    title: "Fundamentals of Internet Protocols",
    content: `
Understanding how data travels over the network via TCP/IP.

### IP Addressing
- **IPv4**: 32-bit addresses (e.g., \`192.168.1.1\`). Divided into classes (A, B, C) or managed via CIDR.
- **IPv6**: 128-bit addresses (e.g., \`2001:db8::1\`).
- **Subnet Mask**: Determines which part of the address identifies the network and which identifies the host.

### Common Protocols
- **TCP**: Connection-oriented, guarantees delivery (e.g., HTTP, SSH).
- **UDP**: Connectionless, fast (e.g., DNS, Streaming).
- **ICMP**: Used for control and diagnostic messages (e.g., ping).
    `
  },
  '109.2': {
    title: "Persistent Network Configuration",
    content: `
How to make network settings permanent after reboot.

### Configuration Methods
- **NetworkManager**: Standard on desktop distros (uses \`nmcli\` and \`nmtui\`).
- **Netplan**: Used on modern Ubuntu/Debian (YAML configuration).
- **/etc/network/interfaces**: Traditional Debian method (ifupdown).
- **ifcfg Scripts**: Traditional Red Hat/CentOS method (\`/etc/sysconfig/network-scripts/\`).

### Commands
- **ifup / ifdown**: Activates or deactivates an interface based on config.
- **ip addr**: Shows assigned addresses (modern).
    `
  },
  '109.3': {
    title: "Basic Network Troubleshooting",
    content: `
Tools to diagnose connectivity and services.

### Basic Diagnostics
- **ping**: Verifies host reachability via ICMP.
- **traceroute**: Shows packet path to destination.
- **mtr**: Combines ping and traceroute for real-time analysis.

### Port and Connection Status
- **ss**: Modern and fast replacement for netstat.
- **lsof -i**: Shows open network files (and associated processes).
- **dig / host**: Queries DNS servers to resolve domain names.
    `
  },
  '109.4': {
    title: "Configure Client Side DNS",
    content: `
DNS translates names (google.com) into IP addresses.

### Key Files
- **/etc/resolv.conf**: Specifies DNS servers (nameserver) and search domains.
- **/etc/hosts**: Local static database to map names to IPs (priority over DNS).
- **/etc/nsswitch.conf**: Defines search order for names (e.g., \`hosts: files dns\`).

### DNS Commands
- **getent hosts [name]**: Queries system database for a hostname.
- **systemd-resolve --status**: Modern resolver status.
    `
  },

  // --- TOPIC 110: SECURITY ---
  '110.1': {
    title: "Security Administration Tasks",
    content: `
System security requires periodic checks on permissions and access.

### Special Permissions
- **SUID (4xxx)**: File runs with owner privileges (usually root).
- **SGID (2xxx)**: File runs with group privileges.
- **Sticky Bit (1xxx)**: Prevents file deletion by users who are not owners (used in \`/tmp\`).
- **Find SUID files**: \`find / -perm /4000\`.

### Privileged Access Management
- **sudo**: Allows trusted users to run commands as root.
- **/etc/sudoers**: Configuration file (edit via \`visudo\`).
- **ulimit**: Limits system resource usage (e.g., memory, number of processes) for users.
    `
  },
  '110.2': {
    title: "Setup Host Security",
    content: `
Reduce attack surface by disabling unnecessary services and restricting access.

### Services and Ports
- Identify listening services with \`ss -tulpn\`.
- Disable unused services: \`systemctl disable --now service\`.

### Network Restrictions
- **TCP Wrappers**: Provide basic access control via \`/etc/hosts.allow\` and \`/etc/hosts.deny\`.
- **xinetd**: A "super-service" that manages access and logging for other less secure services.
    `
  },
  '110.3': {
    title: "Securing Data with Encryption",
    content: `
Using encryption protects data during transmission and at rest.

### SSH (Secure Shell)
- **/etc/ssh/sshd_config**: SSH server config (e.g., \`PermitRootLogin no\`).
- **ssh-keygen**: Generates key pairs (public/private).
- **ssh-agent**: Manages private keys in memory.

### GnuPG (GPG)
- Used to encrypt files and sign e-mails.
- **gpg -c file**: Symmetric encryption.
- **gpg --gen-key**: Generates a GPG key pair.
- **gpg --encrypt**: Encrypts a file for a specific recipient.
    `
  }
};
