export const topic5Quizzes = [
  {
    "lessonId": "5-1",
    "question": "Welche UID hat der Root-Benutzer?",
    "options": [
      "1",
      "0",
      "1000",
      "999"
    ],
    "correct": 1,
    "explanation": "Der Root-Benutzer hat immer UID 0."
  },
  {
    "lessonId": "5-1",
    "question": "Mit welchem ​​Befehl können Sie Befehle als Root ausführen?",
    "options": [
      "An",
      "Ich schwitze",
      "Wurzel",
      "Administrator"
    ],
    "correct": 1,
    "explanation": "sudo führt einen einzelnen Befehl mit Root-Rechten und Ihrem Passwort aus."
  },
  {
    "lessonId": "5-1",
    "question": "su – (mit Bindestrich) lautet:",
    "options": [
      "Nur Benutzer wechseln",
      "Wechseln Sie Benutzer und laden Sie deren komplette Umgebung",
      "Erstellen Sie einen neuen Benutzer",
      "Einen Benutzer löschen"
    ],
    "correct": 1,
    "explanation": "su – simuliert eine vollständige Anmeldung des Zielbenutzers und lädt alle Umgebungsvariablen."
  },
  {
    "lessonId": "5-1",
    "question": "/etc/sudoers wird geändert mit:",
    "options": [
      "Zwerg",
      "vim",
      "Visudo",
      "chmod"
    ],
    "correct": 2,
    "explanation": "visudo ist der sichere Weg, /etc/sudoers zu bearbeiten: Überprüfen Sie vor dem Speichern die Syntax."
  },
  {
    "lessonId": "5-1",
    "question": "Der Grundsatz des „geringsten Privilegs“ bedeutet:",
    "options": [
      "Geben Sie immer Wurzeln",
      "Erteilen Sie nur die erforderlichen Berechtigungen",
      "Habe kein Passwort",
      "Verwenden Sie immer sudo"
    ],
    "correct": 1,
    "explanation": "Geben Sie Benutzern und Prozessen nur die Berechtigungen, die für ihre Aufgabe unbedingt erforderlich sind."
  },
  {
    "lessonId": "5-1",
    "question": "sudo hat im Vergleich zu su den Vorteil:",
    "options": [
      "Fragen Sie nicht nach Passwörtern",
      "Seien Sie in den Protokollen nachvollziehbar",
      "Sei schneller",
      "Bitten Sie nicht um Privilegien"
    ],
    "correct": 1,
    "explanation": "sudo zeichnet jeden Befehl im Protokoll (/var/log/auth.log) auf und macht so Aktionen nachvollziehbar."
  },
  {
    "lessonId": "5-1",
    "question": "Der Befehl „id“ zeigt:",
    "options": [
      "Der Hostname",
      "Die UID, GID und Gruppen des Benutzers",
      "Die PID",
      "Die Kernel-Version"
    ],
    "correct": 1,
    "explanation": "id zeigt UID, GID und alle Gruppen an, denen der Benutzer angehört."
  },
  {
    "lessonId": "5-1",
    "question": "Systembenutzer haben UID:",
    "options": [
      "0",
      "Von 1 bis 999",
      "Ab 1000 und aufwärts",
      "Negative"
    ],
    "correct": 1,
    "explanation": "Systembenutzer (Daemons, Dienste) haben im Allgemeinen UIDs von 1 bis 999."
  },
  {
    "lessonId": "5-1",
    "question": "Der Benutzer „nobody“ wird verwendet für:",
    "options": [
      "Der Administrator",
      "Prozesse, die keine Berechtigungen erfordern",
      "Die Backups",
      "Remote-Anmeldung"
    ],
    "correct": 1,
    "explanation": "„nobody“ (UID 65534) wird für Prozesse verwendet, die mit den geringsten Berechtigungen ausgeführt werden müssen."
  },
  {
    "lessonId": "5-1",
    "question": "Authentifizierungsprotokolle befinden sich in:",
    "options": [
      "/var/log/auth.log",
      "/etc/log/auth",
      "/tmp/auth.log",
      "/home/log"
    ],
    "correct": 0,
    "explanation": "/var/log/auth.log (Debian) oder /var/log/secure (RHEL) enthält Authentifizierungsprotokolle."
  },
  {
    "lessonId": "5-2",
    "question": "In welcher Datei werden verschlüsselte Passwörter gespeichert?",
    "options": [
      "/etc/passwd",
      "/etc/shadow",
      "/etc/group",
      "/etc/login"
    ],
    "correct": 1,
    "explanation": "/etc/shadow enthält verschlüsselte Passwörter und ist nur für Root lesbar."
  },
  {
    "lessonId": "5-2",
    "question": "Welcher Befehl erstellt einen neuen Benutzer mit Home-Verzeichnis?",
    "options": [
      "adduser",
      "useradd -m",
      "neuer Benutzer",
      "mkuser"
    ],
    "correct": 1,
    "explanation": "useradd -m erstellt den Benutzer und sein Home-Verzeichnis. -m ist wichtig."
  },
  {
    "lessonId": "5-2",
    "question": "Das Format von /etc/passwd ist:",
    "options": [
      "Benutzer:Passwort:Home",
      "Benutzer:x:UID:GID:info:home:shell",
      "Benutzer:UID:Shell",
      "Name:Hash:Salz"
    ],
    "correct": 1,
    "explanation": "user:x:UID:GID:gecos:home:shell – das x gibt an, dass sich das Passwort in /etc/shadow befindet."
  },
  {
    "lessonId": "5-2",
    "question": "usermod -aG usergroup führt Folgendes aus:",
    "options": [
      "Entfernt den Benutzer aus der Gruppe",
      "Fügt den Benutzer der zusätzlichen Gruppe hinzu",
      "Ändern Sie die primäre Gruppe",
      "Erstellen Sie eine neue Gruppe"
    ],
    "correct": 1,
    "explanation": "-aG (append Group) fügt den Benutzer einer zusätzlichen Gruppe hinzu, ohne ihn aus den anderen zu entfernen."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/skel enthält:",
    "options": [
      "Passwörter",
      "Vorlagen für neue Home-Verzeichnisse",
      "Die Gruppen",
      "Die Protokolle"
    ],
    "correct": 1,
    "explanation": "/etc/skel enthält die Dateien, die in die Heimat jedes neuen Benutzers kopiert werden (z. B. .bashrc)."
  },
  {
    "lessonId": "5-2",
    "question": "userdel -r entfernt:",
    "options": [
      "Nur der Benutzer",
      "Der Benutzer und sein Home-Verzeichnis",
      "Nur das Zuhause",
      "Nur das Passwort"
    ],
    "correct": 1,
    "explanation": "-r entfernt außerdem das Home-Verzeichnis und den Mail-Spool des Benutzers."
  },
  {
    "lessonId": "5-2",
    "question": "Benutzerpasswort wird verwendet für:",
    "options": [
      "Erstellen Sie den Benutzer",
      "Ändern Sie das Passwort des Benutzers",
      "Löschen Sie den Benutzer",
      "Blockieren Sie den Benutzer"
    ],
    "correct": 1,
    "explanation": "passwd ändert das Passwort eines Benutzers. Root kann das von jedem Benutzer ändern."
  },
  {
    "lessonId": "5-2",
    "question": "/etc/group enthält:",
    "options": [
      "Gruppenpasswörter",
      "Die Liste der Gruppen und ihrer Mitglieder",
      "Dateiberechtigungen",
      "Die Netzwerkkonfiguration"
    ],
    "correct": 1,
    "explanation": "/etc/group listet Systemgruppen und ihre zusätzlichen Mitglieder auf."
  },
  {
    "lessonId": "5-2",
    "question": "groupadd Gruppenname erstellen:",
    "options": [
      "Ein Benutzer",
      "Eine neue Gruppe",
      "Eine Datei",
      "Ein Verzeichnis"
    ],
    "correct": 1,
    "explanation": "groupadd erstellt eine neue Gruppe im System."
  },
  {
    "lessonId": "5-2",
    "question": "Welches Feld in /etc/passwd enthält die Login-Shell?",
    "options": [
      "Der erste",
      "Der Dritte",
      "Der Vorletzte",
      "Der letzte"
    ],
    "correct": 3,
    "explanation": "Das letzte (7.) Feld von /etc/passwd gibt die Anmeldeshell des Benutzers an."
  },
  {
    "lessonId": "5-2",
    "question": "/sbin/nologin als Shell bedeutet:",
    "options": [
      "Wurzelschale",
      "Der Benutzer kann sich nicht interaktiv anmelden",
      "Notfallhülle",
      "Shell ohne Passwort"
    ],
    "correct": 1,
    "explanation": "/sbin/nologin verhindert die interaktive Anmeldung (wird für Dienstkonten verwendet)."
  },
  {
    "lessonId": "5-2",
    "question": "Jeder Benutzer hat eine Gruppe:",
    "options": [
      "Optional",
      "Primär (obligatorisch)",
      "Nur wenn Admin",
      "Nur wenn er ein Zuhause hat"
    ],
    "correct": 1,
    "explanation": "Jeder Benutzer hat eine primäre Gruppe (GID in /etc/passwd) und kann zusätzliche Gruppen haben."
  },
  {
    "lessonId": "5-3",
    "question": "Welcher Oktalwert entspricht rwxr-xr-- Berechtigungen?",
    "options": [
      "644",
      "755",
      "754",
      "764"
    ],
    "correct": 2,
    "explanation": "rwx=7, r-x=5, r--=4 → 754."
  },
  {
    "lessonId": "5-3",
    "question": "Welcher Befehl ändert den Besitzer einer Datei?",
    "options": [
      "chmod",
      "chown",
      "chgrp",
      "chperm"
    ],
    "correct": 1,
    "explanation": "chown (Besitzer ändern) wechselt den Besitzer. chmod ändert Berechtigungen."
  },
  {
    "lessonId": "5-3",
    "question": "Was bewirkt der Befehl chmod u+x script.sh?",
    "options": [
      "Entfernt die Ausführungsberechtigung",
      "Fügt dem Eigentümer die Ausführungsberechtigung hinzu",
      "Fügt allen Ausführungsberechtigungen hinzu",
      "Ändern Sie den Besitzer"
    ],
    "correct": 1,
    "explanation": "u+x fügt dem Eigentümer (u=Benutzer) die Ausführungsberechtigung (x) hinzu (+)."
  },
  {
    "lessonId": "5-3",
    "question": "Welche spezielle Berechtigung bewirkt, dass neue Dateien in einem Verzeichnis die Gruppe erben?",
    "options": [
      "Klebrige Teile",
      "SUID",
      "SGID",
      "ACL"
    ],
    "correct": 2,
    "explanation": "SGID für ein Verzeichnis bewirkt, dass neue Dateien die Gruppe des Verzeichnisses erben."
  },
  {
    "lessonId": "5-3",
    "question": "Der Oktalwert von r (gelesen) ist:",
    "options": [
      "1",
      "2",
      "4",
      "7"
    ],
    "correct": 2,
    "explanation": "r=4, w=2, x=1. Die Werte addieren sich: rw=6, rwx=7."
  },
  {
    "lessonId": "5-3",
    "question": "chmod 644 setzt:",
    "options": [
      "rwxr-xr-x",
      "rw-r--r--",
      "rwx------",
      "rw-rw-rw-"
    ],
    "correct": 1,
    "explanation": "6=rw-, 4=r--, 4=r-- → rw-r--r-- (Besitzer liest/schreibt, andere lesen nur)."
  },
  {
    "lessonId": "5-3",
    "question": "Das Sticky Bit auf /tmp verhindert Folgendes:",
    "options": [
      "Von anderen lesen",
      "Das Löschen der Dateien anderer Personen",
      "Das Schreiben",
      "Die Hinrichtung"
    ],
    "correct": 1,
    "explanation": "Das Sticky Bit verhindert, dass ein Benutzer Dateien in /tmp löscht, die ihm nicht gehören."
  },
  {
    "lessonId": "5-3",
    "question": "umask 022 erzeugt Standardberechtigungen für Dateien von:",
    "options": [
      "777",
      "755",
      "644",
      "600"
    ],
    "correct": 2,
    "explanation": "Für Dateien: 666 - 022 = 644 (rw-r--r--). Für Verzeichnisse: 777 - 022 = 755."
  },
  {
    "lessonId": "5-3",
    "question": "chgrp-Änderungen:",
    "options": [
      "Der Besitzer",
      "Die Eigentümergruppe",
      "Die Genehmigungen",
      "Der Name der Datei"
    ],
    "correct": 1,
    "explanation": "chgrp (Change Group) ändert die Gruppe, die eine Datei besitzt."
  },
  {
    "lessonId": "5-3",
    "question": "Die SUID einer ausführbaren Datei sorgt dafür, dass sie mit folgenden Berechtigungen ausgeführt wird:",
    "options": [
      "Von dem Benutzer, der es ausführt",
      "Vom Eigentümer der Datei",
      "Immer rooten",
      "Von der Gruppe"
    ],
    "correct": 1,
    "explanation": "SUID sorgt dafür, dass das Programm mit den Berechtigungen des Dateieigentümers ausgeführt wird (z. B. passwd hat SUID-Root)."
  },
  {
    "lessonId": "5-3",
    "question": "chmod o-w-Datei entfernt:",
    "options": [
      "Schreiben für alle",
      "Für „andere“ schreiben",
      "Lesen für „Andere“",
      "Kandidatur für „Eigentümer“"
    ],
    "correct": 1,
    "explanation": "o=andere, -w=Schreiben entfernen. Schreibberechtigung für „Andere“ entfernen."
  },
  {
    "lessonId": "5-3",
    "question": "ls -l zeigt Berechtigungen im Format an:",
    "options": [
      "Oktal (755)",
      "Symbolisch (rwxr-xr-x)",
      "Spuren",
      "Hexadezimal"
    ],
    "correct": 1,
    "explanation": "ls -l zeigt Berechtigungen im symbolischen Format an: rwxr-xr-x."
  },
  {
    "lessonId": "5-3",
    "question": "Auf eine Datei mit 700 Berechtigungen kann nur zugegriffen werden von:",
    "options": [
      "Alle",
      "Der Besitzer",
      "Die Gruppe",
      "Wurzel"
    ],
    "correct": 1,
    "explanation": "700 = rwx------ – nur der Eigentümer hat Berechtigungen (und Root umgeht alles)."
  },
  {
    "lessonId": "5-4",
    "question": "Welche Art von Link kann verschiedene Dateisysteme überqueren?",
    "options": [
      "Harte Links",
      "Symbolische Links",
      "Beide",
      "Niemand"
    ],
    "correct": 1,
    "explanation": "Symbolische Links können verschiedene Dateisysteme überqueren. Hardlinks sind es nicht."
  },
  {
    "lessonId": "5-4",
    "question": "Was passiert, wenn Sie die Zieldatei eines Hardlinks löschen?",
    "options": [
      "Der Link wird „defekt“",
      "Die Datei bleibt über den Link zugänglich",
      "Der Link wird ebenfalls gelöscht",
      "Das System versagt"
    ],
    "correct": 1,
    "explanation": "Bei Hardlinks bleibt die Datei zugänglich, solange mindestens ein Link zum Inode vorhanden ist."
  },
  {
    "lessonId": "5-4",
    "question": "ln -s Ziellink erstellt:",
    "options": [
      "Ein harter Link",
      "Ein symbolischer Link",
      "Ein Exemplar",
      "Ein Alias"
    ],
    "correct": 1,
    "explanation": "-s gibt einen symbolischen Link an. Ohne -s erstellt ln einen harten Link."
  },
  {
    "lessonId": "5-4",
    "question": "Ein „defekter“ symbolischer Link ist einer, dessen:",
    "options": [
      "Die Erlaubnis wird verweigert",
      "Zieldatei wurde gelöscht",
      "Inode ist beschädigt",
      "Das Dateisystem ist voll"
    ],
    "correct": 1,
    "explanation": "Ein Symlink wird „kaputt“, wenn die Zieldatei nicht mehr existiert."
  },
  {
    "lessonId": "5-4",
    "question": "Ein fester Link verweist auf:",
    "options": [
      "Ein Weg",
      "Ein Inode",
      "Noch ein Link",
      "Ein Verzeichnis"
    ],
    "correct": 1,
    "explanation": "Ein Hardlink ist ein zusätzlicher Name, der auf denselben Inode wie die Originaldatei verweist."
  },
  {
    "lessonId": "5-4",
    "question": "Können Sie feste Links zu Verzeichnissen erstellen?",
    "options": [
      "Ja, immer",
      "Nein (normalerweise)",
      "Nur root kann",
      "Nur mit -d"
    ],
    "correct": 1,
    "explanation": "Feste Links zu Verzeichnissen sind nicht zulässig, um Schleifen im Dateisystem zu vermeiden."
  },
  {
    "lessonId": "5-4",
    "question": "ls -i zeigt:",
    "options": [
      "Der Dateityp",
      "Die Inode-Nummer",
      "Der Besitzer",
      "Das Erstellungsdatum"
    ],
    "correct": 1,
    "explanation": "ls -i zeigt die Inode-Nummer jeder Datei an."
  },
  {
    "lessonId": "5-4",
    "question": "readlink zeigt:",
    "options": [
      "Der Inhalt der Datei",
      "Das Ziel eines symbolischen Links",
      "Die Genehmigungen",
      "Der Besitzer"
    ],
    "correct": 1,
    "explanation": "readlink zeigt die Datei/den Pfad an, auf die ein symbolischer Link verweist."
  },
  {
    "lessonId": "5-4",
    "question": "Zwei feste Links zur gleichen Datei haben:",
    "options": [
      "Verschiedene Inodes",
      "Der gleiche Inode",
      "Verschiedene Inhalte",
      "Verschiedene Besitzer"
    ],
    "correct": 1,
    "explanation": "Hardlinks teilen sich denselben Inode. Sie sind von der „Originaldatei“ nicht zu unterscheiden."
  },
  {
    "lessonId": "5-4",
    "question": "Ein symbolischer Link hat die Größe:",
    "options": [
      "Null Bytes",
      "Dasselbe wie Ziel",
      "Entspricht der Zielpfadlänge",
      "4096 Byte"
    ],
    "correct": 2,
    "explanation": "Die Größe eines Symlinks ist die Länge des Zielpfads (z. B. /etc/passwd = 11 Bytes)."
  }
];
