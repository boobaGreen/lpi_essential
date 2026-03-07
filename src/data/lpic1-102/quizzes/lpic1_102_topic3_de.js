// LPIC-1 102 Quiz Pool — German — Topic 107 (Administrative Aufgaben)

export const lpic1_102_topic3Quizzes_de = [
  // ─── 107.1 Benutzerkonten, Gruppenkonten und zugehörige Systemdateien verwalten (8 Fragen) ───
  {
    id: 'q-lpic1-102-3-001', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'In welcher Datei werden auf den meisten modernen Linux-Systemen verschlüsselte Benutzerpasswörter und Kontoablaufdaten gespeichert?',
    options: [
      '/etc/passwd',
      '/etc/shadow',
      '/etc/gshadow',
      '/etc/security'
    ],
    correct: 1,
    explanation: '/etc/shadow ist nur für root lesbar und enthält die Passwort-Hashes.'
  },
  {
    id: 'q-lpic1-102-3-002', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um Passwort-Ablaufparameter zu ändern, z. B. um ein Passwort in 90 Tagen ablaufen zu lassen?',
    options: [
      'passwd -e',
      'chage',
      'usermod -p',
      'expiry'
    ],
    correct: 1,
    explanation: 'chage (change age) ist das Werkzeug zur Verwaltung von Passwort-Ablaufrichtlinien.'
  },
  {
    id: 'q-lpic1-102-3-003', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Was repräsentiert das dritte Feld in der Datei /etc/passwd?',
    options: [
      'Benutzername',
      'Gruppen-ID (GID)',
      'Benutzer-ID (UID)',
      'Home-Verzeichnis'
    ],
    correct: 2,
    explanation: 'Das Format ist Benutzername:Passwort:UID:GID:Kommentar:Home:Shell.'
  },
  {
    id: 'q-lpic1-102-3-004', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt die Benutzer-ID (UID) und die Gruppen-IDs (GID) des aktuellen Benutzers an?',
    options: [
      'whoami',
      'id',
      'users',
      'groups'
    ],
    correct: 1,
    explanation: 'Der Befehl "id" liefert vollständige Identitätsinformationen für einen Benutzer.'
  },
  {
    id: 'q-lpic1-102-3-005', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welche Datei enthält die Liste der Gruppen und ihrer Mitglieder?',
    options: ['/etc/groups', '/etc/group', '/etc/passwd', '/etc/shadow'],
    correct: 1,
    explanation: '/etc/group definiert die auf dem System verfügbaren Gruppen.',
  },
  {
    id: 'q-lpic1-102-3-006', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Mit welchem Befehl wird ein Benutzer einer sekundären Gruppe hinzugefügt, ohne ihn aus bestehenden Gruppen zu entfernen?',
    options: ['usermod -g gruppe user', 'usermod -aG gruppe user', 'useradd -G gruppe user', 'groupmod -A user gruppe'],
    correct: 1,
    explanation: '`usermod -aG` fügt den Benutzer der/den angegebenen Gruppe(n) hinzu.',
  },
  {
    id: 'q-lpic1-102-3-007', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Welche Datei wird vom Befehl `useradd` konsultiert, um die Standardbasis für das Home-Verzeichnis und das Skelett-Verzeichnis zu bestimmen?',
    options: ['/etc/login.defs', '/etc/default/useradd', '/etc/skel', 'Sowohl /etc/login.defs als auch /etc/default/useradd'],
    correct: 3,
    explanation: 'Beide Dateien liefern Standardwerte für den Kontoerstellungsprozess.',
  },
  {
    id: 'q-lpic1-102-3-008', lessonId: 'lpic1-102-3-1', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl löscht ein Benutzerkonto und entfernt optional das Home-Verzeichnis?',
    options: ['userdel -r', 'userrm', 'rmuser', 'deleteuser'],
    correct: 0,
    explanation: '`userdel -r` entfernt den Benutzer und die Dateien in seinem Home-Verzeichnis.',
  },

  // ─── 107.2 Systemadministrationsaufgaben automatisieren (6 Fragen) ───
  {
    id: 'q-lpic1-102-3-009', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Was repräsentiert in einer crontab-Datei das erste Feld (ganz links)?',
    options: [
      'Stunde',
      'Monat',
      'Minute',
      'Wochentag'
    ],
    correct: 2,
    explanation: 'Cron-Zeitangaben beginnen mit den Minuten (0-59).'
  },
  {
    id: 'q-lpic1-102-3-010', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welcher Befehl zeigt die Warteschlange der mit dem Befehl "at" geplanten Jobs an?',
    options: [
      'atq',
      'atrm',
      'cron -l',
      'at -list'
    ],
    correct: 0,
    explanation: 'atq steht für "at queue" (Warteschlange).'
  },
  {
    id: 'q-lpic1-102-3-011', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welches Verzeichnis wird für System-Crontabs verwendet, die jede Stunde ausgeführt werden?',
    options: ['/etc/cron.hourly', '/etc/cron.hour', '/var/cron/hourly', '/etc/crontab/hour'],
    correct: 0,
    explanation: '/etc/cron.hourly/ ist der Ort, an dem das System nach Skripten sucht, die jede Stunde ausgeführt werden sollen.',
  },
  {
    id: 'q-lpic1-102-3-012', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Welches Werkzeug ermöglicht die Ausführung wiederkehrender Jobs zu einer bestimmten Zeit, regelt aber auch Fälle, in denen das System während der geplanten Zeit ausgeschaltet war?',
    options: ['cron', 'anacron', 'at', 'systemd-timer'],
    correct: 1,
    explanation: '`anacron` ist für Systeme konzipiert, die nicht rund um die Uhr laufen.',
  },
  {
    id: 'q-lpic1-102-3-013', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie bearbeiten Sie Ihre persönliche crontab-Datei sicher?',
    options: ['vi /etc/crontab', 'crontab -e', 'crontab -edit', 'nano /var/spool/cron/crontabs/user'],
    correct: 1,
    explanation: '`crontab -e` öffnet die Benutzer-Crontab im Standard-Editor und validiert die Syntax beim Beenden.',
  },
  {
    id: 'q-lpic1-102-3-014', lessonId: 'lpic1-102-3-2', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Welche Datei spezifiziert Benutzer, denen die Verwendung des Befehls `at` ausdrücklich untersagt ist?',
    options: ['/etc/at.allow', '/etc/at.deny', '/etc/cron.deny', '/etc/security/at'],
    correct: 1,
    explanation: '/etc/at.deny listet Benutzer auf, die keine Jobs mit `at` planen können.',
  },

  // ─── 107.3 Lokalisierung und Internationalisierung (6 Fragen) ───
  {
    id: 'q-lpic1-102-3-015', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'easy', type: 'mcq',
    question: 'Welche Umgebungsvariable spezifiziert die globale Standardsprache und -kodierung für das System?',
    options: [
      'LANGUAGE',
      'LOCALE',
      'LANG',
      'LC_ALL'
    ],
    correct: 2,
    explanation: 'LANG ist die primäre Variable für Lokalisierungseinstellungen.'
  },
  {
    id: 'q-lpic1-102-3-016', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Wie wird die lokale Zeitzone üblicherweise auf einem Linux-System konfiguriert?',
    options: [
      'Durch Bearbeiten von /etc/timezone.conf',
      'Durch Verknüpfung von /usr/share/zoneinfo/ mit /etc/localtime',
      'Durch Setzen der TZ-Variable in /etc/profile',
      'Durch Ausführen des Befehls "clockset"'
    ],
    correct: 1,
    explanation: 'Ein symbolischer Link von /etc/localtime auf eine Datei in zoneinfo ist die Standardmethode.'
  },
  {
    id: 'q-lpic1-102-3-017', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'hard', type: 'mcq',
    question: 'Welche Variable überschreibt, falls gesetzt, alle anderen LC_*-Umgebungsvariablen?',
    options: ['LC_FORCE', 'LC_ALL', 'LANG', 'LC_OVERRIDE'],
    correct: 1,
    explanation: '`LC_ALL` hat die höchste Priorität und überschreibt einzelne Kategorien sowie die Variable LANG.',
  },
  {
    id: 'q-lpic1-102-3-018', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl wird verwendet, um die Kodierung einer Datei zu konvertieren, zum Beispiel von ISO-8859-1 nach UTF-8?',
    options: ['convert', 'recode', 'iconv', 'translate'],
    correct: 2,
    explanation: '`iconv` (Internationalization Conversion) ist das Standard-Utility zur Konvertierung von Dateikodierungen.',
  },
  {
    id: 'q-lpic1-102-3-019', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl zeigt das aktuelle Systemdatum, die Uhrzeit und die Zeitzone an?',
    options: ['time', 'date', 'clock', 'showtime'],
    correct: 1,
    explanation: '`date` zeigt die Systemzeit an und kann sie auch setzen.',
  },
  {
    id: 'q-lpic1-102-3-020', lessonId: 'lpic1-102-3-3', topicId: 3, difficulty: 'medium', type: 'mcq',
    question: 'Was soll Unicode (und dessen UTF-8 Kodierung) bieten?',
    options: [
      'Eine Möglichkeit, Textdateien zu komprimieren',
      'Einen universellen Zeichensatz für alle Sprachen',
      'Einen Verschlüsselungsstandard für Webverkehr',
      'Eine schnellere Verarbeitungsgeschwindigkeit für Datenbankabfragen'
    ],
    correct: 1,
    explanation: 'Unicode weist jedem Zeichen eine eindeutige Nummer zu, unabhängig von der Plattform oder Sprache.',
  },
];
