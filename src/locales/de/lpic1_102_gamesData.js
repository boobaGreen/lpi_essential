export const memoryGameData = [
  { command: 'export', description: 'Variable global verfügbar machen' },
  { command: 'alias', description: 'Befehlskürzel erstellen' },
  { command: 'source', description: 'Script in aktueller Shell ausführen' },
  { command: '/etc/skel', description: 'Vorlage für neue Home-Verzeichnisse' },
  { command: 'DISPLAY', description: 'Ziel für grafische X11-Ausgabe' },
  { command: 'Wayland', description: 'Moderner X11-Nachfolger' },
  { command: 'Orca', description: 'Bildschirmleser (Barrierefreiheit)' },
  // Topic 107
  { command: '/etc/shadow', description: 'Verschlüsselte Passwörter' },
  { command: 'chage', description: 'Passwort-Ablauf verwalten' },
  { command: 'crontab -e', description: 'Geplante Aufgaben bearbeiten' },
  // Topic 108
  { command: 'hwclock', description: 'Hardware-Uhr verwalten' },
  { command: 'journalctl', description: 'Systemd-Logs lesen' },
  { command: 'logrotate', description: 'Automatische Log-Rotation' },
  { command: 'CUPS', description: 'Drucksystem' },
  // Topic 109
  { command: 'ip addr', description: 'IP-Adressen anzeigen' },
  { command: 'ping', description: 'Erreichbarkeit prüfen' },
  { command: 'dig', description: 'DNS-Abfrage-Tool' },
  // Topic 110
  { command: 'SUID', description: 'Ausführen mit Rechten des Besitzers' },
  { command: 'visudo', description: 'Sichere Bearbeitung von sudoers' },
  { command: 'ssh-keygen', description: 'SSH-Schlüssel generieren' },
];

export const trueFalseData = [
  { text: '/etc/skel wird beim Anlegen neuer Benutzer kopiert.', answer: true, explanation: 'Richtig! Es ist das "Skelett" für das Home-Verzeichnis.', difficulty: 1 },
  { text: 'Der Shebang #! steht auf der letzten Zeile.', answer: false, explanation: 'Falsch. Er muss auf der allerersten Zeile stehen.', difficulty: 1 },
  { text: 'X11 ist netzwerktransparent.', answer: true, explanation: 'Richtig. Anwendungen können über das Netzwerk laufen.', difficulty: 1 },
  { text: '/etc/passwd enthält die verschlüsselten Passwörter.', answer: false, explanation: 'Falsch. Diese stehen in /etc/shadow.', difficulty: 1 },
  { text: 'Der Standard-Port für CUPS ist 631.', answer: true, explanation: 'Stimmt.', difficulty: 1 },
  { text: 'journalctl liest Protokolle im Binärformat.', answer: true, explanation: 'Stimmt. Das journal von systemd ist binär.', difficulty: 1 },
];

export const terminalChallengeData = [
  { id: 'tc-de-1', description: 'Exportiere EDITOR als nano', prompt: 'export EDITOR=nano', expectedOutput: '', hint: 'Nutze export', difficulty: 1 },
  { id: 'tc-de-2', description: 'Zeige deine UID und Gruppen', prompt: 'id', expectedOutput: '', hint: 'id', difficulty: 1 },
  { id: 'tc-de-3', description: 'Prüfe Verbindung zu google.com', prompt: 'ping google.com', expectedOutput: '', hint: 'ping', difficulty: 1 },
  { id: 'tc-de-4', description: 'Generiere ein neues SSH-Schlüsselpaar', prompt: 'ssh-keygen', expectedOutput: '', hint: 'ssh-keygen', difficulty: 2 },
];

export const dragDropData = [
  {
    id: 'dd-de-1',
    category: 'Konfigurationsdateien',
    question: 'Ordne die Datei ihrer Funktion zu:',
    items: [
      { text: '/etc/profile', matches: 'Global Login' },
      { text: '~/.bashrc', matches: 'User Interaktiv' },
      { text: '/etc/skel', matches: 'Vorlage neue Nutzer' },
    ],
  },
];

export const fillGapData = [
  { prompt: '_____ VAR="wert"', answer: 'export', hint: 'Globale Variable', difficulty: 1 },
  { prompt: 'Standard-Port HTTP: _____', answer: '80', hint: 'Ganze Zahl', difficulty: 1 },
  { prompt: 'DNS-Datei: /etc/_____.conf', answer: 'resolv', hint: 'resolv', difficulty: 1 },
];
