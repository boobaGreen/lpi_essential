export const lpic1_102_lessonContent = {
  // --- TOPIC 105: SHELLS AND SHELL SCRIPTING ---
  '105.1': {
    title: "Personnaliser l'Environnement Shell",
    content: `
Personnaliser l'environnement shell permet d'optimiser le flux de travail. Les fichiers de configuration sont chargés au démarrage du shell.

### Fichiers de Configuration (Bash)
- **/etc/profile**: Configuration globale (shell de connexion).
- **/etc/bash.bashrc**: Configuration globale (shell interactive sans connexion).
- **~/.bash_profile**, **~/.bash_login**, **~/.profile**: Configurations utilisateur.
- **~/.bashrc**: Fichier le plus utilisé pour les alias et variables personnels.

### Variables d'Environnement et Alias
- **export**: Rend une variable disponible pour les processus enfants.
- **PATH**: Définit les répertoires où le shell cherche les exécutables.
- **alias**: Crée des raccourcis pour des commandes complexes (\`alias ll='ls -la'\`).

### Répertoire Skeleton
- **/etc/skel/**: Contient les fichiers par défaut copiés dans le home des nouveaux utilisateurs.
    `
  },
  '105.2': {
    title: "Personnaliser ou Écrire des Scripts Simples",
    content: `
Le scripting shell automatise les tâches répétitives.

### Structure du Script
- **Shebang (#!)**: Indique l'interprète (ex., \`#!/bin/bash\`).
- **Permissions**: Le script doit être exécutable (\`chmod +x script.sh\`).

### Opérateurs Logiques
- **&&**: Exécute la seconde commande seulement si la première réussit.
- **||**: Exécute la seconde commande seulement si la première échoue.
    `
  },

  // --- TOPIC 106: USER INTERFACES AND DESKTOPS ---
  '106.1': {
    title: "Installer et Configurer X11",
    content: `
X Window System (X11) est le framework de base pour les interfaces graphiques sous Linux.

### Architecture X11
- **Serveur X**: Gère le matériel (écran, souris, clavier).
- **Client X**: L'application graphique.
- **Wayland**: Successeur moderne de X11, plus simple et sûr.

### Utilitaires
- **xdpyinfo**: Information sur le serveur X.
- **DISPLAY**: Variable indiquant où envoyer la sortie graphique.
    `
  },
  '106.2': {
    title: "Bureaux Graphiques",
    content: `
### Composants
- **Window Manager (WM)**: Gère la position des fenêtres (ex., Mutter, KWin).
- **Display Manager (DM)**: Gère la connexion graphique (ex., GDM, LightDM).

### Bureaux Populaires
- **GNOME**: Simple et moderne. Utilise GTK.
- **KDE Plasma**: Très personnalisable. Utilise Qt.
    `
  },
  '106.3': {
    title: "Accessibilité",
    content: `
### Technologies d'Assistance
- **Lecteurs d'écran**: Orca.
- **Sticky Keys**: Pour presser les touches modificatrices en séquence.
- **Slow Keys**: Touche acceptée après un certain délai de pression.
    `
  },

  // --- TOPIC 107 ---
  '107.1': {
    title: "Gérer les Comptes Utilisateurs et Groupes",
    content: `
### Fichiers
- **/etc/passwd**: Infos comptes.
- **/etc/shadow**: Hashes des mots de passe.
- **id**: Affiche l'UID et le GID.
- **useradd / usermod / userdel**: Gestion des utilisateurs.
    `
  },
  '107.2': {
    title: "Automatisation",
    content: `
- **Crontab**: Planification périodique.
- **Systemd Timers**: Alternative moderne à Cron.
- **at**: Exécution unique dans le futur.
    `
  },
  '107.3': {
    title: "Localisation",
    content: `
- **LANG**: Variable principale de langue.
- **locale**: Voir les paramètres actuels.
- **timedatectl**: Gérer l'heure et le fuseau horaire.
    `
  },

  // --- TOPIC 108 ---
  '108.1': {
    title: "Maintenir l'Heure du Système",
    content: `
- **hwclock**: Gère l'horloge matérielle (RTC).
- **NTP**: Protocole de synchronisation via réseau.
    `
  },
  '108.2': {
    title: "Journalisation",
    content: `
- **rsyslog**: Système de log traditionnel.
- **journald**: Système de log binaire de systemd.
- **journalctl**: Outil pour lire les logs.
- **logrotate**: Rotation automatique des logs.
    `
  },
  '108.3': {
    title: "Bases du MTA",
    content: `
- **MTA**: Mail Transfer Agent (ex., Postfix, Sendmail).
- **mailq**: Voir la file d'attente d'envoi.
    `
  },
  '108.4': {
    title: "Gestion des Imprimantes",
    content: `
- **CUPS**: Système d'impression standard.
- **lp / lpq / lprm**: Commandes d'impression.
    `
  },

  // --- TOPIC 109 ---
  '109.1': {
    title: "Protocoles Internet",
    content: `
- **IPv4 / IPv6**: Adressage réseau.
- **TCP / UDP / ICMP**: Protocoles de transport et contrôle.
    `
  },
  '109.2': {
    title: "Configuration Réseau Persistante",
    content: `
- **NetworkManager**: nmcli/nmtui.
- **Netplan**: Utilisé sur Ubuntu (YAML).
- **ip addr**: Voir les adresses IP.
    `
  },
  '109.3': {
    title: "Dépannage Réseau",
    content: `
- **ping**: Tester la connectivité.
- **traceroute**: Voir le chemin des paquets.
- **ss**: Voir les connexions actives.
    `
  },
  '109.4': {
    title: "Configuration DNS",
    content: `
- **/etc/resolv.conf**: Serveurs DNS.
- **/etc/hosts**: Mappage local statique.
    `
  },

  // --- TOPIC 110 ---
  '110.1': {
    title: "Administration de la Sécurité",
    content: `
- **SUID/SGID**: Permissions spéciales.
- **Sticky Bit**: Protection de suppression dans /tmp.
- **sudo / /etc/sudoers**: Privilèges root.
    `
  },
  '110.2': {
    title: "Sécurité de l'Hôte",
    content: `
- **ss -tulpn**: Voir les ports ouverts.
- **hosts.allow / hosts.deny**: TCP Wrappers.
    `
  },
  '110.3': {
    title: "Chiffrement des Données",
    content: `
- **SSH**: Chiffrement des communications.
- **GPG**: Chiffrement et signature de fichiers.
    `
  }
};
