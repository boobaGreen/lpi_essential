// LPIC-1 102 Lesson Content — French
// Contenu des 20+ leçons de l'examen 102

export const lpic1_102_lessonContent_fr = {
  // ──── Topic 105: Shells et Shell Scripting ────
  'lpic1-102-105-1': {
    title: "Personnaliser l'Environnement Shell",
    comic: {
      title: 'Votre Maison Numérique 🏠',
      panels: [
        { emoji: '🎒', text: 'Fichiers de config: /etc/profile est pour tous, ~/.bashrc est votre sac à dos personnel.' },
        { emoji: '🗺️', text: 'PATH : La carte du shell. S\'il n\'est pas dans la liste, le shell ne le trouve pas !' },
        { emoji: '🔦', text: 'Alias : ll=\'ls -la\'. N\'écrivez pas des kilomètres de code, utilisez des raccourcis.' },
        { emoji: '📦', text: '/etc/skel : Le kit de premiers secours. Les nouveaux utilisateurs reçoivent ces fichiers de base.' },
      ]
    },
    keyPoints: [
      { title: 'Fichiers de Configuration', items: ['/etc/profile — Global (Login)', '~/.bashrc — Personnel (Interactif)', '/etc/skel/ — Modèle pour les nouveaux utilisateurs'] },
      { title: 'Variables d\'Environnement', items: ['export — Passe les variables aux enfants', 'PATH — Où chercher les programmes', 'env / printenv — Liste les variables'] },
    ],
    terminal: { 
      prompt: '$ alias ll=\'ls -la\'\n$ echo $PATH', 
      output: 'alias ll=\'ls -la\'\n/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin' 
    },
  },

  'lpic1-102-105-2': {
    title: "Écrire des Scripts Simples",
    comic: {
      title: 'Le Robot Bash 🤖',
      panels: [
        { emoji: '📜', text: 'Shebang : #!/bin/bash. Dit au noyau : "Hé, utilise Bash pour ça !"' },
        { emoji: '🏃', text: 'Chmod +x : Sans permission d\'exécution, votre script est juste un caillou.' },
        { emoji: '🔀', text: 'If/Then/Else : Le cerveau du script. Prend des décisions basées sur des tests.' },
        { emoji: '🔄', text: 'Boucles (For/While) : Répétez une tâche 100 fois sans vous fatiguer.' },
      ]
    },
    keyPoints: [
      { title: 'Structure', items: ['#!/bin/bash — Le Shebang', 'chmod +x script.sh — Crucial', 'exit [0-255] — Status de sortie (0 = OK)'] },
    ],
    terminal: { 
      prompt: '$ cat hello.sh\n#!/bin/bash\necho "Salut $USER"', 
      output: 'Salut root' 
    },
  },

  // ──── Topic 106: Interfaces Utilisateur et Desktops ────
  'lpic1-102-106-1': { title: "Installer et Configurer X11", terminal: { prompt: '$ xdpyinfo | grep dimensions', output: 'dimensions:    1920x1080 pixels' } },
  'lpic1-102-106-2': { title: "Bureaux Graphiques", terminal: { prompt: '$ echo $XDG_CURRENT_DESKTOP', output: 'GNOME' } },
  'lpic1-102-106-3': { title: "Accessibilité", terminal: { prompt: '$ orca --setup', output: '[Menu du lecteur d\'écran]' } },

  // ──── Topic 107: Tâches Administratives ────
  'lpic1-102-107-1': { title: "Gérer les Comptes Utilisateur et Groupe", terminal: { prompt: '$ id\n$ grep root /etc/passwd', output: 'uid=0(root) gid=0(root) groups=0(root)' } },
  'lpic1-102-107-2': { title: "Automatisation (Cron et Timers)", terminal: { prompt: '$ crontab -l', output: '0 5 * * * /backup.sh' } },
  'lpic1-102-107-3': { title: "Localisation", terminal: { prompt: '$ locale', output: 'LANG=fr_FR.UTF-8' } },

  // ──── Topic 108: Services Système Essentiels ────
  'lpic1-102-108-1': { title: "Synchronisation de l'Heure (NTP)", terminal: { prompt: '$ chronyc sources', output: 'MS Name/IP address ...' } },
  'lpic1-102-108-2': { title: "Logging (Rsyslog et Journald)", terminal: { prompt: '$ journalctl -u ssh', output: 'Accepted password...' } },
  'lpic1-102-108-3': { title: "Mail MTA (Postfix/Sendmail)", terminal: { prompt: '$ mailq', output: 'La file d\'attente est vide' } },
  'lpic1-102-108-4': { title: "Impression (CUPS)", terminal: { prompt: '$ lpstat -p', output: 'l\'imprimante PDF est inactive.' } },

  // ──── Topic 109: Fondamentaux du Réseau ────
  'lpic1-102-109-1': { title: "Protocoles Internet (TCP/IP)", keyPoints: [{ title: 'Pile', items: ['IPv4/IPv6 — Adresses', 'TCP/UDP — Transport', 'ICMP — Diagnostic'] }] },
  'lpic1-102-109-2': { title: "Configuration Réseau", terminal: { prompt: '$ ip addr show', output: 'eth0: 192.168.1.10/24' } },
  'lpic1-102-109-3': { title: "Dépannage Réseau", terminal: { prompt: '$ ping -c 3 8.8.8.8', output: '64 bytes from 8.8.8.8...' } },
  'lpic1-102-109-4': { title: "Configuration DNS", terminal: { prompt: '$ host google.com', output: 'google.com has address...' } },

  // ──── Topic 110: Sécurité ────
  'lpic1-102-110-1': { title: "Tâches de Sécurité", terminal: { prompt: '$ sudo find / -perm /4000', output: '/usr/bin/passwd' } },
  'lpic1-102-110-2': { title: "Sécurité de l'Hôte", terminal: { prompt: '$ ss -lnt', output: 'LISTEN 0 128 0.0.0.0:22' } },
  'lpic1-102-110-3': { title: "Chiffrement (SSH / GPG)", terminal: { prompt: '$ ssh-keygen', output: 'Generating public/private rsa key pair.' } },
}
