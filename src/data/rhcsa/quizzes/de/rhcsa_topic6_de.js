// RHCSA Quiz — Topic 6: System Maintenance (Deutsch) — 15 questions

export const rhcsaTopic6QuizzesDE = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Wie lautet der moderne kanonische Befehl (RHEL9), um das Softwarepaket "httpd" mitsamt all seiner notwendigen Begleit-Abhängigkeiten komplett zu installieren?',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: 'Die Königsklasse `dnf install <paket>` lädt das Paket auf den Host hinab. Der Ahne "yum" ist in RHEL9 noch als reiner Kompatibilitäts-Symlink zu DNF enthalten, dnf ist aber Standard.',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Patchday! Wie entfachen Sie eine globale Systemaktualisierung ALLER derzeit installierten Softwarepakete des Servers auf RHEL9-Niveau?',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'Die Befehle A und B leisten absolut das Gleiche'],
    correct: 3,
    explanation: 'In der modernen DNF Architektur sind sowohl "update" als auch "upgrade" pure Synonyme, sie hieven jedes installierte Stück Code in die aktuellste Fassung.',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Ihr Skript klagt, es fehle die exotische Datei /usr/bin/vim. Wie durchleuchten Sie den Katalog beider (lokal + internet), um das Master-Paket zu identifizieren, das uns dieses File bescheren kann?',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'Mithilfe von Aufruf B sowie C (C geht nur wenn lokal bereits vorhanden)',
    ],
    correct: 3,
    explanation: '`dnf provides` jagt die Pfad-Frage glänzend durchs globale Internet der RedHat Kataloge. Das flinke `rpm -qf` weiß auch "wer lieferte mir diesen Pfad" - allerdings strikt nur anhand der lokalen Bestände.',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Im toten Winkel des Netzes: Der Server ist offline. Sie haben eine RHEL-DVD eingelegt nach /mount/point. Wie basteln Sie dem System eine Quelle (Repository), die es lokal befüttert?',
    options: [
      'Ich fertige per Hand eine .repo-Datei im /etc/yum.repos.d/ an, wo die baseurl=file:///mount/point steht',
      'dnf addrepo file:///mount/point',
      'rpm --import /mount/point',
      'dnf config-manager --add-repo /mount/point',
    ],
    correct: 0,
    explanation: 'Die handgeklöppelte Variante (eine .repo basteln, file:// einstellen, und meist den gpgcheck=0 deaktivieren) ist elementares Basis-Wissen für offline Operationen.',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Wie fordern Sie den Server auf, das gesamte Inhaltsverzeichnis Tausender JEMALS bei Ihnen lokal installierten Softwarepakete wie einen endlosen Teppich auszuwerfen?',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'Lösung B ebensowie Lösung C vollbringen dies'],
    correct: 3,
    explanation: '`dnf list installed` sowie das historische (Query All) `rpm -qa` werfen die vollständige Datenbank-Installationsliste in Ihr Terminal.',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Mit welchem forensischen `rpm`-Skalpell befehlen Sie dem System, rigoros JEDE EINZELNE verstreute Datei, die das Binärpaket "httpd" im System jemals erbrochen hat (Logs, Dirs, Docs), abzutippen?',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: 'Der unschlagbare Flag `-ql` (Query List) blättert das Manifest des Paketes auf, listend alle betroffenen Verzeichnis-Pfade und Binaries.',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Sie wittern Sabotage! Welcher rpm Scan erzwingt eine knallharte Abgleichung der Bits, MD5 Checksummen, Rechte und Daten des JETZIGEN Software-Zustandes im Vergleich zu seinem Tag 1 (Installationstag)?',
    options: ['rpm -qi name', 'rpm -V name', 'rpm --check name', 'dnf verify name'],
    correct: 1,
    explanation: '`rpm -V` (Verify). Eine Integritätskontrolle, der nichts entgeht. Weicht eine config ab, kreischt RPM mit einer Buchstaben-Batterie Warnmeldungen im Terminal auf (z.b 5...S.T).',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Ketzerei der Software-Pfuscherei: Sie haben ein ".rpm" Backend-File lokal und die verdammte Kiste heult über fehlende Abhängigkeiten. Wie rammeln Sie es brutal ZWANGS-installiert in die Platte ohne auf Dependencies zu warten?',
    options: ['rpm -i package.rpm', 'rpm -ivh package.rpm', 'rpm --nodeps -ivh package.rpm', 'dnf localinstall package.rpm'],
    correct: 2,
    explanation: 'Die Atombombe `--nodeps` (No Dependencies). Sie schaltet RPM das Gehirn aus, sodass es rücksichtslos die Kernapplikation auf die Platte ergießt (Gefahr laufend, dass das Binary hinterher implodiert und Seg-Faults schmeisst).',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Sie möchten den Kernel-Takt und die Start-Anweisungen modifizieren. Wo schlummert das absolut einzige legal "Benutzer-Editierbare" File zum Setzen roher Grub2-Parameter der RHEL Matrix?',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: 'Es ist streng verboten, die rohe Kernel-Datei /boot/.. grub.cfg aufzuschrauben, da sie nur Maschinen-Generiert wird. Sämtliche Eingriffe macht man immer im Sammel-Textfile `/etc/default/grub`.',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Die Werte in /etc/default/grub sind frisch editiert. Mit welchem finalen Magieschlag kompilieren Sie die menschlichen Änderungen scharft in den echten GRUB2-Kernel-Rachen `/boot/grub2/grub.cfg` ?',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: 'RedHat verlangt den Compiler `grub2-mkconfig`. Gebündelt mit Output `-o`, zermalmt und verdaut er alles fehlerlos in die endgültige Boot-File Matrix.',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Der Bootvorgang nervt mit ewigen 10 Sekunden Wartezeit. Wie stutzen Sie das in Grub2 perfekt auf knackige "5 Sekunden" Zwangspause runter?',
    options: [
      'In /etc/default/grub den Parameter GRUB_TIMEOUT=5 eintippen, abspeichern und dann grub2-mkconfig dorthin ballern.',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: 'Dieser manuelle Akt erzwingt zwei Schritte. Änderung der Variable `GRUB_TIMEOUT=5` plus dem obligatorischen Auskristallisieren in den Kernel via mkconfig.',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Welches versteckte Hexen-Verzeichnis birgt all die automatisierten, durchnummerierten Skripte (z.b "10_linux"), mit denen der Grub2 beim build die Kernel dynamisch durchsucht?',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 2,
    explanation: 'Diese mystische Skriptmanufaktur residiert mitsamt aller Bausteine im Ordner `/etc/grub.d/`.',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Wozu 30 Einzelpakete händeln? Wie brüllen Sie dnf an, Ihnen bitte im kollektiven Paukenschlag direkt den kompletten Funktions-Verbund "Development Tools" herunterzuladen?',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'Syntax B und C erledigten diesen mächtigen Spruch grandios',
    ],
    correct: 3,
    explanation: 'Ob als Einzelkommando "groupinstall" oder modern zerschnitten "group install" -  dnf erfasst die Metapher, und rekrutiert dutzende Einzelpakete jener logischen Namens-Kategorie zeitgleich ins Gefecht.',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Was bewirkt der kleine forensische Schalter `rpm -qi`, wenn Sie ihn einem Paketnamen voranstellen?',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: '`rpm -qi` (Query Info), rattert wie ein Lexikon den Personalausweis der Software runter: Baujahr, Entwickler-URL, Releasenummer und eine lexikalische Prosa-Umschreibung über was es eigentlich überhaupt macht.',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Spionage an der Front: Wie nutzen Sie Dnf aus, um stur ein schweres RPM-Paket nackt vom Server in Ihren Ordner zu saugen (um es z.B auf einem USB Stick abzuschleppen), SANS dass Dnf sofort versessen versucht es auch lokal zu installieren?',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: '`dnf download <paketname>` rekrutiert die Maschine als reinen Aspirator der RPM-Pilledatei und parkt das File dort, von wo aus Sie im Terminal gerade stehen.',
  },
]
