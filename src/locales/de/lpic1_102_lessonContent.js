// LPIC-1 102 Lesson Content — German
// Kursinhalt für alle 20+ Lektionen der 102-Prüfung

export const lpic1_102_lessonContent_de = {
  // ──── Topic 105: Shells und Shell-Scripting ────
  'lpic1-102-105-1': {
    title: "Anpassen der Shell-Umgebung",
    comic: {
      title: 'Dein digitales Zuhause 🏠',
      panels: [
        { emoji: '🎒', text: 'Konfig-Dateien: /etc/profile ist für alle, ~/.bashrc ist dein persönlicher Rucksack.' },
        { emoji: '🗺️', text: 'PATH: Die Karte der Shell. Wenn es nicht auf der Liste steht, findet die Shell es nicht!' },
        { emoji: '🔦', text: 'Alias: ll=\'ls -la\'. Schreibe keine Kilometer Code, nutze Abkürzungen.' },
        { emoji: '📦', text: '/etc/skel: Das Erste-Hilfe-Kit. Neue Benutzer erhalten diese Basisdateien.' },
      ]
    },
    keyPoints: [
      { title: 'Konfigurationsdateien', items: ['/etc/profile — Global (Login)', '~/.bashrc — Persönlich (Interaktiv)', '/etc/skel/ — Vorlage für neue Benutzer'] },
      { title: 'Umgebungsvariablen', items: ['export — Gibt Variablen an Kinder weiter', 'PATH — Wo nach Programmen gesucht wird', 'env / printenv — Listet Variablen auf'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "Einfache Scripte schreiben",
    comic: {
      title: 'Der Bash-Roboter 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang: #!/bin/bash. Sagt dem Kernel: "Hey, nutze Bash dafür!"' },
        { emoji: '🏃', text: 'Chmod +x: Ohne Ausführungsberechtigung ist dein Script nur ein Stein.' },
        { emoji: '🔀', text: 'If/Then/Else: Das Gehirn des Scripts. Trifft Entscheidungen basierend auf Tests.' },
        { emoji: '🔄', text: 'Loops (For/While): Wiederhole eine Aufgabe 100 Mal, ohne müde zu werden.' },
      ]
    },
    keyPoints: [
      { title: 'Struktur', items: ['#!/bin/bash — Der Shebang', 'chmod +x script.sh — Entscheidend', 'exit [0-255] — Beendigungsstatus (0 = OK)'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "Hallo $USER"', 
      output: 'Hallo root' 
    },
  },

  // ──── Topic 106: Benutzeroberflächen und Desktops ────
  'lpic1-102-106-1': { title: "Installieren und Konfigurieren von X11", terminal: { prompt: '$ xdpyinfo | grep dimensions', output: 'dimensions:    1920x1080 pixels' } },
  'lpic1-102-106-2': { title: "Grafische Desktops", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "Barrierefreiheit", terminal: { prompt: '$ orca --setup', output: '[Screenreader-Menü]' } },

  // ──── Topic 107: Administrative Aufgaben ────
  'lpic1-102-107-1': { title: "Benutzer- und Gruppenkonten verwalten", terminal: { prompt: '$ id\n$ grep root /etc/passwd', output: 'uid=0(root) gid=0(root) groups=0(root)' } },
  'lpic1-102-107-2': { title: "Automatisierung (Cron und Timers)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "Lokalisierung", terminal: { prompt: '$ locale', output: 'LANG=de_DE.UTF-8' } },

  // ──── Topic 108: Grundlegende Systemdienste ────
  'lpic1-102-108-1': { title: "Zeitsynchronisation (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "Logging (Rsyslog und Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "Mail MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: 'Mail queue is empty' } },
  'lpic1-102-108-4': { title: "Drucken (CUPS)", terminal: { prompt: '$ lpstat -p', output: 'Drucker PDF ist im Leerlauf.' } },

  // ──── Topic 109: Netzwerk-Grundlagen ────
  'lpic1-102-109-1': { title: "Internet-Protokolle (TCP/IP)", keyPoints: [{ title: 'Stack', items: ['IPv4/IPv6 — Adressen', 'TCP/UDP — Transport', 'ICMP — Diagnose'] }] },
  'lpic1-102-109-2': { title: "Netzwerkkonfiguration", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "Netzwerk-Fehlerbehebung", terminal: { prompt: '$ ping -c 3 8.8.8.8', output: '64 bytes from 8.8.8.8...' } },
  'lpic1-102-109-4': { title: "DNS-Konfiguration", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: Sicherheit ────
  'lpic1-102-110-1': { title: "Sicherheitsaufgaben", terminal: { prompt: '$ sudo find / -perm /4000', output: '/usr/bin/passwd' } },
  'lpic1-102-110-2': { title: "Host-Sicherheit", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "Verschlüsselung (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
