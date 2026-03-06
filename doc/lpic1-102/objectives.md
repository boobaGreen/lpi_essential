# LPIC-1 Exam 102 (102-500) Objectives

## Topic 105: Shells and Shell Scripting (9)

- **105.1 Customize and use the shell environment (4)**
  - Bash functions, profile files (/etc/profile, ~/.bash_profile, etc.), environment variables.
- **105.2 Customize or write simple scripts (5)**
  - Loops (for, while), tests (if, test), command substitution, shebang, script execution.

## Topic 106: User Interfaces and Desktops (6)

- **106.1 Install and configure X11 (2)**
  - X11 architecture, xorg.conf, Display Managers vs Window Managers, Wayland awareness.
- **106.2 Graphical Desktops (2)**
  - KDE, GNOME, Xfce, remote desktop protocols (VNC, RDP, SPICE).
- **106.3 Accessibility (2)**
  - Screen readers, keyboard accessibility (Sticky keys, Bounce keys), visual themes.

## Topic 107: Administrative Tasks (12)

- **107.1 Manage user and group accounts (5)**
  - /etc/passwd, /etc/shadow, /etc/group, useradd, usermod, groupadd, chage.
- **107.2 Automate tasks by scheduling jobs (4)**
  - cron (crontab, /etc/cron.\*), at, systemd-run, systemd timers.
- **107.3 Localisation and internationalisation (3)**
  - Locale settings (LANG, LC\_\*), timezones, iconv, Unicode.

## Topic 108: Essential System Services (10)

- **108.1 Maintain system time (3)**
  - hwclock, timedatectl, ntpd, chrony, pool.ntp.org.
- **108.2 System logging (4)**
  - rsyslog, journalctl, logrotate, facilities and priorities.
- **108.3 Mail Transfer Agent (MTA) basics (2)**
  - Aliases, forwarding, Postfix vs Sendmail vs Exim awareness.
- **108.4 Manage printers and printing (1)**
  - CUPS, lpr, lpq, lprm.

## Topic 109: Networking Fundamentals (15)

- **109.1 Fundamentals of internet protocols (4)**
  - TCP/UDP ports, IPv4/IPv6, CIDR, ICMP.
- **109.2 Persistent network configuration (4)**
  - /etc/hostname, /etc/hosts, NetworkManager (nmcli), /etc/resolv.conf.
- **109.3 Basic network troubleshooting (4)**
  - ip, ss, ping, traceroute, netstat, mtr.
- **109.4 Configure client side DNS (3)**
  - /etc/nsswitch.conf, host, dig, systemd-resolved.

## Topic 110: Security (8)

- **110.1 Perform security administration tasks (3)**
  - SUID/SGID audit, ulimit, sudo, who/w/last.
- **110.2 Setup host security (3)**
  - /etc/nologin, TCP wrappers, shadow passwords, systemd sockets.
- **110.3 Securing data with encryption (2)**
  - OpenSSH (keys, tunneling), GnuPG (GPG keys, verify/sign).
