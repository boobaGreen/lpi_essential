// LPIC-1 102 Quiz Pool — German — Topic 110 (Sicherheit)

export const lpic1_102_topic6Quizzes_de = [
  // ─── 110.1 Sicherheitsadministrationsaufgaben durchführen (7 Fragen) ───
  {
    id: 'q-lpic1-102-6-001', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl ermöglicht es Ihnen, alle Dateien im System zu finden, bei denen das SUID-Bit gesetzt ist?',
    options: [
      'ls -lR | grep suid',
      'find / -perm /4000',
      'check-suid /',
      'locate --perm suid'
    ],
    correct: 1,
    explanation: 'find mit -perm /4000 (oder -4000) sucht nach Dateien, bei denen das SUID-Bit gesetzt ist.'
  },
  {
    id: 'q-lpic1-102-6-002', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird dringend empfohlen, um die Datei /etc/sudoers zu bearbeiten, um Syntaxfehler zu vermeiden?',
    options: [
      'nano /etc/sudoers',
      'visudo',
      'sudoedit',
      'vi /etc/sudoers'
    ],
    correct: 1,
    explanation: 'visudo führt vor dem Speichern eine Syntaxprüfung durch und verhindert so Fehler, die den sudo-Zugriff sperren könnten.'
  },
  {
    id: 'q-lpic1-102-6-003', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt eine Liste der zuletzt angemeldeten Benutzer und deren Anmeldezeiten an?',
    options: ['who', 'last', 'w', 'history'],
    correct: 1,
    explanation: 'Der Befehl `last` durchsucht die Datei /var/log/wtmp, um die Anmeldehistorie der Benutzer anzuzeigen.',
  },
  {
    id: 'q-lpic1-102-6-004', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Wie gewähren Sie in der Datei /etc/sudoers einem Benutzer mithilfe eines Gruppennamens administrative Rechte?',
    options: ['ADMIN ALL=(ALL) ALL', '%admin ALL=(ALL) ALL', 'group admin: ALL', '@admin ALL=(ALL) ALL'],
    correct: 1,
    explanation: 'Das Präfix `%` in der sudoers-Datei gibt an, dass der folgende Name eine Systemgruppe ist.',
  },
  {
    id: 'q-lpic1-102-6-005', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um alle offenen Dateien und die Prozesse, die sie geöffnet haben, aufzulisten (oft für Sicherheitsaudits verwendet)?',
    options: ['lsopen', 'fileshow', 'lsof', 'procview'],
    correct: 2,
    explanation: '`lsof` (List Open Files) ist ein wesentliches Werkzeug, um zu überprüfen, welcher Prozess auf bestimmte Dateien oder Sockets zugreift.',
  },
  {
    id: 'q-lpic1-102-6-006', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Welches Utility wird verwendet, um die maximale Anzahl der von einem Benutzer in der aktuellen Shell geöffneten Prozesse zu begrenzen?',
    options: [
      'limit',
      'ulimit',
      'sysctl',
      'quota'
    ],
    correct: 1,
    explanation: 'ulimit (user limit) ermöglicht das Festlegen von Ressourcenlimits für die Shell und deren Kindprozesse.'
  },
  {
    id: 'q-lpic1-102-6-007', lessonId: 'lpic1-102-6-1', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'In welcher Datei können Sie dauerhafte Ressourcenlimits pro Benutzer festlegen, wie z. B. die maximale Dateigröße oder die Anzahl der Anmeldungen?',
    options: ['/etc/limits', '/etc/security/limits.conf', '/etc/profile', '/etc/sysctl.conf'],
    correct: 1,
    explanation: '/etc/security/limits.conf wird vom pam_limits-Modul verwendet, um Systemressourcen durchzusetzen.',
  },

  // ─── 110.2 Host-Sicherheit einrichten (6 Fragen) ───
  {
    id: 'q-lpic1-102-6-008', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Was bewirkt das "Sticky Bit", wenn es auf einem Verzeichnis wie /tmp gesetzt ist?',
    options: [
      'Macht Dateien im Verzeichnis unveränderlich',
      'Ermöglicht es nur dem Dateibesitzer (oder root), die Datei zu löschen oder umzubenennen',
      'Verschlüsselt automatisch alle darin erstellten Dateien',
      'Stellt sicher, dass das Verzeichnis immer im RAM bleibt'
    ],
    correct: 1,
    explanation: 'Das Sticky Bit auf weltweit beschreibbaren Verzeichnissen stellt sicher, dass Benutzer die Dateien anderer Benutzer nicht löschen können.'
  },
  {
    id: 'q-lpic1-102-6-009', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Welche Datei wird verwendet, um den Zugriff auf Dienste, die durch TCP-Wrapper geschützt sind, explizit zu verweigern?',
    options: [
      '/etc/deny.hosts',
      '/etc/hosts.deny',
      '/etc/network.deny',
      '/etc/firewall.deny'
    ],
    correct: 1,
    explanation: 'TCP-Wrapper verwenden /etc/hosts.allow und /etc/hosts.deny für die Zugriffskontrolle.'
  },
  {
    id: 'q-lpic1-102-6-010', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl identifiziert, welche Netzwerkports derzeit auf Ihrem Server offen sind und lauschen?',
    options: ['nmap localhost', 'ss -tuln', 'netstat -an', 'Alle oben genannten'],
    correct: 3,
    explanation: '`nmap`, `ss` und `netstat` können alle verwendet werden, um lauschende Netzwerkdienste zu auditieren.',
  },
  {
    id: 'q-lpic1-102-6-011', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Welches GnuPG-Utility wird verwendet, um eine Datei symmetrisch (mit einer Passphrase) zu verschlüsseln?',
    options: [
      'gpg --gen-key',
      'gpg -c file',
      'gpg --encrypt file',
      'gpg --sign file'
    ],
    correct: 1,
    explanation: 'Die Option -c (symmetrisch) verschlüsselt die Datei und fragt nach einer manuellen Passphrase.'
  },
  {
    id: 'q-lpic1-102-6-012', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Wie listen Sie alle öffentlichen Schlüssel in Ihrem GPG-Keyring auf?',
    options: ['gpg --show-keys', 'gpg --list-keys', 'gpg --keys-all', 'gpg -k'],
    correct: 1,
    explanation: '`gpg --list-keys` (oder `gpg -k`) zeigt die öffentlichen Schlüssel an, die sich derzeit in Ihrem lokalen Speicher befinden.',
  },
  {
    id: 'q-lpic1-102-6-013', lessonId: 'lpic1-102-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Welches Sicherheitsproblem traditioneller /etc/passwd-Dateien lösen Shadow-Passwörter?',
    options: [
      'Sie verhindern, dass Benutzer sich mehrmals anmelden',
      'Sie verschieben verschlüsselte Hashes in eine Datei, die nur für root lesbar ist',
      'Sie erzwingen automatisch komplexe Passwörter',
      'Sie verschlüsseln den Benutzernamen'
    ],
    correct: 1,
    explanation: '/etc/passwd ist für alle lesbar, während /etc/shadow auf root beschränkt ist, was Hashes vor Offline-Cracking schützt.',
  },

  // ─── 110.3 Sicherheit auf Benutzerebene einrichten (7 Fragen) ───
  {
    id: 'q-lpic1-102-6-014', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Welche Auswirkung hat die Einstellung "PermitRootLogin no" in der Datei sshd_config?',
    options: [
      'Verhindert, dass sich irgendein Benutzer als root über SSH verbindet',
      'Erfordert ein spezielles Passwort für den root-Benutzer',
      'Erlaubt root-Zugriff nur über Public Keys',
      'Deaktiviert das root-Konto auf dem System vollständig'
    ],
    correct: 0,
    explanation: 'Diese Direktive verhindert Brute-Force-Angriffe auf das root-Konto über das Netzwerk.'
  },
  {
    id: 'q-lpic1-102-6-015', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Zweck des Befehls "ssh-agent"?',
    options: [
      'Die gesamte Festplatte verschlüsseln',
      'Entschlüsselte private Schlüssel speichern, damit Sie die Passphrase nicht bei jeder Verbindung erneut eingeben müssen',
      'Ein neues SSH-Schlüsselpaar generieren',
      'Fehlgeschlagene SSH-Anmeldeversuche überwachen'
    ],
    correct: 1,
    explanation: 'Der SSH-Agent hält Schlüssel während der Benutzersitzung im Speicher.'
  },
  {
    id: 'q-lpic1-102-6-016', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Welches Tool wird verwendet, um ein neues öffentliches/privates SSH-Schlüsselpaar zu generieren?',
    options: ['ssh-create', 'ssh-keygen', 'ssh-init', 'keytool'],
    correct: 1,
    explanation: '`ssh-keygen` ist das Standardwerkzeug zum Erstellen von Authentifizierungsschlüsseln für SSH.',
  },
  {
    id: 'q-lpic1-102-6-017', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Wo wird der öffentliche Schlüssel eines Benutzers normalerweise auf einem Remote-Server gespeichert, um eine passwortlose Anmeldung zu ermöglichen?',
    options: ['~/.ssh/id_rsa.pub', '~/.ssh/authorized_keys', '/etc/ssh/authorized_keys', '~/.ssh/known_hosts'],
    correct: 1,
    explanation: 'Die Datei `authorized_keys` enthält alle öffentlichen Schlüssel, die berechtigt sind, sich als dieser Benutzer anzumelden.',
  },
  {
    id: 'q-lpic1-102-6-018', lessonId: 'lpic1-102-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Was ist der Standarddateiname für den RSA-Privatschlüssel eines Benutzers?',
    options: ['id_rsa.pub', 'id_rsa', 'ssh_key', 'private_key'],
    correct: 1,
    explanation: '`id_rsa` ist der Standardname für den privaten Teil eines RSA-Schlüsselpaars.',
  },
  {
    id: 'q-lpic1-102-6-019', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um Ihren öffentlichen SSH-Schlüssel einfach auf einen Remote-Server zu kopieren?',
    options: ['ssh-install', 'ssh-push-key', 'ssh-copy-id', 'scp-id'],
    correct: 2,
    explanation: '`ssh-copy-id` kümmert sich um die Verbindung und hängt Ihren öffentlichen Schlüssel an die entfernte authorized_keys-Datei an.',
  },
  {
    id: 'q-lpic1-102-6-020', lessonId: 'lpic1-102-6-3', topicId: 4, difficulty: 'hard', type: 'mcq',
    question: 'Welche Einstellung in der sshd_config sollte auf "no" gesetzt werden, um NUR die schlüsselbasierte Authentifizierung zu erzwingen?',
    options: ['PasswordAuthentication no', 'KeyOnly yes', 'DisablePasswords yes', 'PermitKeysOnly'],
    correct: 0,
    explanation: 'Das Setzen von `PasswordAuthentication no` deaktiviert die Passwortanmeldung, sodass Schlüssel die einzige Option sind.',
  },
];
