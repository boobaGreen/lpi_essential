export const lpic1_102_lessonContent = {
  // --- TOPIC 105: SHELLS AND SHELL SCRIPTING ---
  '105.1': {
    title: "Shell-Umgebung anpassen",
    content: `
Das Anpassen der Shell-Umgebung optimiert den Workflow. Konfigurationsdateien werden beim Start geladen.

### Konfigurationsdateien (Bash)
- **/etc/profile**: Globale Konfiguration (Login-Shell).
- **/etc/bash.bashrc**: Globale Konfiguration (interaktive Non-Login-Shell).
- **~/.bash_profile**, **~/.profile**: Benutzerspezifische Einstellungen.
- **~/.bashrc**: Meistgenutzte Datei für Aliase und persönliche Variablen.

### Variablen und Aliase
- **export**: Macht eine Variable für Kindprozesse verfügbar.
- **PATH**: Verzeichnisse, in denen die Shell nach Befehlen sucht.
- **alias**: Erstellt Kürzel für komplexe Befehle (\`alias ll='ls -la'\`).

### Skeleton-Verzeichnis
- **/etc/skel/**: Enthält Standarddateien für neue Benutzer-Homes.
    `
  },
  '105.2': {
    title: "Einfache Scripts anpassen oder schreiben",
    content: `
Shell-Scripting automatisiert Aufgaben.

### Script-Struktur
- **Shebang (#!)**: Die erste Zeile gibt den Interpreter an (z. B. \`#!/bin/bash\`).
- **Berechtigungen**: Das Script muss ausführbar sein (\`chmod +x script.sh\`).

### Logische Operatoren
- **&&**: Führt den zweiten Befehl nur aus, wenn der erste erfolgreich war.
- **||**: Führt den zweiten Befehl nur aus, wenn der erste fehlgeschlagen ist.
    `
  },

  // --- TOPIC 106 ---
  '106.1': {
    title: "X11 installieren und konfigurieren",
    content: `
X11 ist das Basis-Framework für grafische Oberflächen.

### Architektur
- **X-Server**: Veraltet die Hardware (Display, Tastatur, Maus).
- **X-Client**: Die grafische Anwendung.
- **Wayland**: Moderner, sicherer Nachfolger von X11.

### Dienstprogramme
- **xdpyinfo**: Informationen über den X-Server.
- **DISPLAY**: Variable, die angibt, wohin die Grafik gesendet wird.
    `
  },
  '106.2': {
    title: "Grafische Desktops",
    content: `
### Komponenten
- **Window Manager (WM)**: Verwaltet Fensterpositionen (z. B. Mutter, KWin).
- **Display Manager (DM)**: Grafischer Login (z. B. GDM, LightDM).

### Bekannte Desktops
- **GNOME**: Fokus auf Einfachheit. Nutzt GTK.
- **KDE Plasma**: Hochgradig anpassbar. Nutzt Qt.
    `
  },

  // --- TOPIC 107 ---
  '107.1': {
    title: "Benutzer- und Gruppenkonten verwalten",
    content: `
- **/etc/passwd**: Benutzerinformationen.
- **/etc/shadow**: Passwort-Hashes (nur für root lesbar).
- **id**: Zeigt UID und GIDs an.
- **useradd / usermod / userdel**: Benutzerverwaltung.
    `
  },
  '107.2': {
    title: "Automatisierung",
    content: `
- **Crontab**: Regelmäßige Aufgaben planen.
- **Systemd Timers**: Moderne Alternative zu Cron.
- **at**: Einmalige Ausführung in der Zukunft.
    `
  },

  // --- TOPIC 108 ---
  '108.1': {
    title: "Systemzeit verwalten",
    content: `
- **hwclock**: Hardware-Uhr (RTC) abfragen/setzen.
- **NTP**: Protokoll zur Zeitsynchronisation über das Netzwerk.
    `
  },
  '108.2': {
    title: "Systemprotokollierung",
    content: `
- **rsyslog**: Traditionelles Logging.
- **journald**: Binäres Logging von systemd.
- **journalctl**: Befehl zum Lesen des Journals.
- **logrotate**: Automatisches Rotieren von Logs.
    `
  },

  // --- TOPIC 109 ---
  '109.1': {
    title: "Netzwerkgrundlagen",
    content: `
- **IPv4 / IPv6**: Netzwerkadressierung.
- **TCP / UDP**: Transportprotokolle.
    `
  },
  '109.2': {
    title: "Persistente Konfiguration",
    content: `
- **NetworkManager**: nmcli/nmtui.
- **Netplan**: YAML-basierte Konfiguration (Ubuntu).
- **ip addr**: IP-Adressen anzeigen.
    `
  },

  // --- TOPIC 110 ---
  '110.1': {
    title: "Sicherheitsadministration",
    content: `
- **SUID/SGID**: Sonderberechtigungen.
- **Sticky Bit**: Löschschutz in /tmp.
- **sudo**: Befehle mit root-Rechten ausführen.
    `
  },
  '110.2': {
    title: "Host-Sicherheit",
    content: `
- **ss -tulpn**: Offene Ports anzeigen.
- **SSH**: Sicherer Fernzugriff (Port 22).
    `
  }
};
