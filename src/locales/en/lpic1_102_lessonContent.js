// LPIC-1 102 Lesson Content — English
// Lesson content for all 20+ lessons of the 102 exam

export const lpic1_102_lessonContent_en = {
  // ──── Topic 105: Shells and Shell Scripting ────
  'lpic1-102-105-1': {
    title: "Customize the Shell Environment",
    comic: {
      title: 'Your Digital Home 🏠',
      panels: [
        { emoji: '🎒', text: 'Config files: /etc/profile is for everyone, ~/.bashrc is your personal backpack.' },
        { emoji: '🗺️', text: 'PATH: The shell\'s map. If it\'s not on the list, the shell won\'t find it!' },
        { emoji: '🔦', text: 'Alias: ll=\'ls -la\'. Don\'t write meters of code, use shortcuts.' },
        { emoji: '📦', text: '/etc/skel: The first aid kit. New users receive these base files.' },
      ]
    },
    keyPoints: [
      { title: 'Configuration Files', items: ['/etc/profile — Global (Login)', '~/.bashrc — Personal (Interactive)', '/etc/skel/ — Template for new users'] },
      { title: 'Environment Variables', items: ['export — Passes variables to children', 'PATH — Where to look for programs', 'env / printenv — List variables'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "Write Simple Scripts",
    comic: {
      title: 'The Bash Robot 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang: #!/bin/bash. Tells the kernel: "Hey, use Bash for this!"' },
        { emoji: '🏃', text: 'Chmod +x: Without execution permission, your script is just a rock.' },
        { emoji: '🔀', text: 'If/Then/Else: The script\'s brain. Makes decisions based on tests.' },
        { emoji: '🔄', text: 'Loops (For/While): Repeat a task 100 times without getting tired.' },
      ]
    },
    keyPoints: [
      { title: 'Structure', items: ['#!/bin/bash — The Shebang', 'chmod +x script.sh — Crucial', 'exit [0-255] — Exit status (0 = OK)'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "Hello $USER"', 
      output: 'Hello root' 
    },
  },

  // ──── Topic 106: User Interfaces and Desktops ────
  'lpic1-102-106-1': { title: "Install and Configure X11", terminal: { prompt: '$ xdpyinfo | grep dimensions', output: 'dimensions:    1920x1080 pixels' } },
  'lpic1-102-106-2': { title: "Graphical Desktops", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "Accessibility", terminal: { prompt: '$ orca --setup', output: '[Screen reader menu]' } },

  // ──── Topic 107: Administrative Tasks ────
  'lpic1-102-107-1': { title: "Manage User and Group Accounts", terminal: { prompt: '$ id\n$ grep root /etc/passwd', output: 'uid=0(root) gid=0(root) groups=0(root)' } },
  'lpic1-102-107-2': { title: "Automation (Cron and Timers)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "Localization", terminal: { prompt: '$ locale', output: 'LANG=en_US.UTF-8' } },

  // ──── Topic 108: Essential System Services ────
  'lpic1-102-108-1': { title: "Time Synchronization (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "Logging (Rsyslog and Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "Mail MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: 'Mail queue is empty' } },
  'lpic1-102-108-4': { title: "Printing (CUPS)", terminal: { prompt: '$ lpstat -p', output: 'printer PDF is idle.' } },

  // ──── Topic 109: Networking Fundamentals ────
  'lpic1-102-109-1': { title: "Internet Protocols (TCP/IP)", keyPoints: [{ title: 'Stack', items: ['IPv4/IPv6 — Addresses', 'TCP/UDP — Transport', 'ICMP — Diagnosis'] }] },
  'lpic1-102-109-2': { title: "Network Configuration", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "Network Troubleshooting", terminal: { prompt: '$ ping -c 3 8.8.8.8', output: '64 bytes from 8.8.8.8...' } },
  'lpic1-102-109-4': { title: "DNS Configuration", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: Security ────
  'lpic1-102-110-1': { title: "Security Tasks", terminal: { prompt: '$ sudo find / -perm /4000', output: '/usr/bin/passwd' } },
  'lpic1-102-110-2': { title: "Host Security", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "Encryption (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
