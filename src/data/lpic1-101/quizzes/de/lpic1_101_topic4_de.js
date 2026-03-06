// LPIC-1 101 Topic 4 Quiz - German

export const lpic1_101_topic4_de = [
  // L1: Partitions et Formats
  {
    id: 10411,
    question: "Das interaktive fdisk-Kommando zeichnet nur virtuelle Layout-Grenzen auf das Festplattenblech. Durch welchen formellen Befehl wird am Ende das Ext4 Fundament (Indexe/Journal) wirklich auf eine Partition z.B. /dev/sda1 gegossen, damit Dateien dauerhaft leben können?",
    options: [
      "make:ext4 /dev/sda1",
      "mkfs.ext4 /dev/sda1",
      "format -ext4 /dev/sdc",
      "fdisk --write ext4"
    ],
    correctAnswer: "mkfs.ext4 /dev/sda1",
    explanation: "Der 'Make File System' Befehl (mkfs) bestückt den nackten und leeren Rahmen der formatierten Laufwerke im Ext4-Stil. Hier wird die Tabelle für inodes geätzt, was Linux OS davor bewahrt, bei einem Kaltstart mit Kernel Error durch ungeloggte Fehler blind zu zerschellen."
  },
  {
    id: 10412,
    question: "Ein Swap-Speicher für den fehlenden RAM benötigt keine visuelle Baumstruktur mit Ordnern wie klassische Platten. Welche Syntax formatiert und bereitet deshalb die Auslagerungspartition /dev/sdb2 vor, bevor der Kernel sie schlucken darf?",
    options: [
      "mkfs.swap /dev/sdb2 gefolgt von mount",
      "mkswap /dev/sdb2 gefolgt von swapon /dev/sdb2",
      "fdisk swap danach active /dev/sdb2",
      "init-swap /dev/sdb2"
    ],
    correctAnswer: "mkswap /dev/sdb2 gefolgt von swapon /dev/sdb2",
    explanation: "Da die flüchtige Virtuelle RAM-Oase keine Datenordner speichert, erhält sie die exklusiv darauf angepasste Setup-Instanz mkswap. Im zweiten Linux-Gebot ermächtigt dann der Schalter swapon den Prozessor formell zum unkontrollierten Auslagern."
  },

  // L2: Fsck et Santé
  {
    id: 10421,
    question: "Welches bittere und fatale Todesurteil verhängt sich ein SysAdmin selbst auf Servern, wenn er eine Check-Operation 'fsck' auf ein ext4-Dateisystem loslässt, welches in exakt jenem Moment online im Netzwerk als Live (Read/Write) Schreib-Ziel gemountet ist?",
    options: [
      "Gar nichts, Hot-Plugging Checks sind ein beständiger Alltag!",
      "Der Befehl wird enorm langsam durch wartende SQL-Client Aufrufe gedrosselt.",
      "Die absolut unausweichliche Zerstörung (Massive Korruption) seiner gesamten Dateiregister-Strukturen, was seine OS-Sektoren komplett unwiderruflich auslöschen kann!",
      "Das Reparaturskript friert als Hintergrunddienst in Systemd ein."
    ],
    correctAnswer: "Die absolut unausweichliche Zerstörung (Massive Korruption) seiner gesamten Dateiregister-Strukturen, was seine OS-Sektoren komplett unwiderruflich auslöschen kann!",
    explanation: "Dies ist eine rote Haltelinie im LPIC. Es ist untersagt, die tiefe Speicherstruktur zu manipulieren oder nach verlorenen Blöcken graben zu lassen, während der Systemkernel oder Anwender gleichzeitig laufenden Datei-Code hineinpressen und alles physisch abändern!"
  },
  {
    id: 10422,
    question: "Für CentOS/RedHat Server (die gigantische XFS-Speicherformate bevorzugen) hat sich der Befehl fsck als zu schwach bewiesen. Mit welchem massiven C-Binary rücken Administratoren aus, wenn es um tiefe XFS-Rettungsmissionen am ungemounteten System geht?",
    options: [
      "xfs_repair",
      "fsck.xfs",
      "mkfs.xfs check",
      "e2fsck -xfs"
    ],
    correctAnswer: "xfs_repair",
    explanation: "XFS verlangt seinen eigenen Chirurgen. Reparieren durch 'xfs_repair' wird (nach dem sturen unmount des Pfades!) dem klassischen generellen fsck im Linux vorgezogen, um Blockzerfall tiefer Serverdatenbänke im Netz zu kitten."
  },

  // L3: Mounts
  {
    id: 10431,
    question: "Beim Ausfüllen der heiligen /etc/fstab Bootanweisung zwingt Sie das Linux-Lehrbuch dazu, für Laufwerke niemals den volatilen Pfad-Namen (z.B. /dev/sda2) zu tippen, sondern stoisch die exakte, lange Identnummer (UUID=123x...) zu verwenden. Aus welchem kritischen, technischen Grund?",
    options: [
      "Eine UUID verschlüsselt passiv Laufwerksgrößen am EXT4 Format.",
      "Da die Reihenfolge der USBs/SATA Stecker variiert. Startet der PC mit einem USB-Stick extra, rutscht SDA um zu SDB... Linux fände die Partition nicht mehr und crasht im Kernel-Panic boot, wenn fstab auf Namenszuweisung beruht!",
      "Die UUID ist nötig, um den Schutzwall von SUID vor Hackern auf Disk-Ebene zementiert zu lassen.",
      "Dies ist ein graphischer Zwangswechsel in Desktopumgebungen."
    ],
    correctAnswer: "Da die Reihenfolge der USBs/SATA Stecker variiert. Startet der PC mit einem USB-Stick extra, rutscht SDA um zu SDB... Linux fände die Partition nicht mehr und crasht im Kernel-Panic boot, wenn fstab auf Namenszuweisung beruht!",
    explanation: "/dev/sda ist der flüchtige Name für 'das allererste gefundene Medium'. Ändert man Hardwarekabel, kollabieren simple Dateipfade. Der Fingerabdruck 'UUID' (auslesbar mittels Konsolenbefehl 'blkid') ignoriert Anschlüsse tiefst und verankert die Partition untrennbar lebenslang."
  },

  // L4: Permissions Utilisateurs et Avancées UNIX (SUID/Sticky)
  {
    id: 10441,
    question: "Lesen Sie Oktale! Einer simplen Setup.txt wurde eine Systemberechtigung von '644' anvertraut. Welcher visuellen Buchstabensuppe der Dateiliste (`ls -l`) wird Sie beim Betrachten der Rechte im Textbildschirm anschnauzen?",
    options: [
      "rw-r--r--",
      "rwxrwxrwx",
      "rwxrw-r--",
      "rwxr-xr-x"
    ],
    correctAnswer: "rw-r--r--",
    explanation: "Die Aufteilung ist klar: User=6 (Read 4 + Write 2). Group=4 (Nur read). Others=4 (Nur read). Linux baut dies stoisch zusammen und signalisiert: Ich darf bearbeiten, der ungenannte Rest der Systemwelt liest lediglich."
  },
  {
    id: 10442,
    question: "Das mysteriöse, kleine, spezielle S-Bit ('Set User ID' / SUID) verleiht standard Linux-Accounts durch einen Hack eine sehr temporäre unantastbare Eigenschaft. Welche?",
    options: [
      "Nur Logs unter Root in das flüchtige /tmp public zu werfen.",
      "Der unbekannte Passagier-User darf kurzerhand und sekundenweise mit der Autorität, Macht und der absoluten Identität des originalen Dateibesitzers herrschend dieses Skript und Binary (wie 'passwd') abfeuern!",
      "Er vermacht das Verzeichnis seiner Linux-Zweitgruppe restlos in ewiges Eigentum.",
      "Bündelt in einem Hardlink die Dateigrößen."
    ],
    correctAnswer: "Der unbekannte Passagier-User darf kurzerhand und sekundenweise mit der Autorität, Macht und der absoluten Identität des originalen Dateibesitzers herrschend dieses Skript und Binary (wie 'passwd') abfeuern!",
    explanation: "So greifen simple Linux-User auf Shadow-Password Hashes vom Rootverzeichnis der Admins zu: Der 'passwd'-Befehl zückt sein SUID-Schwert für eine Mikrosekunde - erhebt euch zum allmächtigen Executer - und befördert Euch augenblicklich danach ins dunkle Nichts als einfacher Arbeiter der Gruppe zurück."
  },

  // L5: Les Liens Logiques d'Atajos et Inodes (Ln)
  {
    id: 10451,
    question: "Was kennzeichnet den tief verankerten fundamentalsten Unterschied einer simplen Systemverknüpfung (Symbolic Link) zu einem absolut verknüpften harten Zwillingsbruder (Hard Link, `ln`) am EXT4 Laufwerk?",
    options: [
      "Der Hard Link erlaubt Sprünge rüber in gänzlich fremdartige ISO Dateisysteme auf DVD Rohlingen.",
      "Ein Hardlink rettet ausschließlich Pfad-Buchstaben im Cache.",
      "Der Hardlink teilt sich mit der Mutter exakt und wahrhaftig untrennbar denselben Inode-Platzblock tief unten im Dateisystem-Fundament! Eine namentliche Löschung des Originals wird physikalisch somit gar keine Text-Auslöschung der eigentlichen Bytes provozieren!",
      "Symlinks verschlingen bei der Datengruppierung unweigerlich weit mehr Terabytes."
    ],
    correctAnswer: "Der Hardlink teilt sich mit der Mutter exakt und wahrhaftig untrennbar denselben Inode-Platzblock tief unten im Dateisystem-Fundament! Eine namentliche Löschung des Originals wird physikalisch somit gar keine Text-Auslöschung der eigentlichen Bytes provozieren!",
    explanation: "Hardlinks sind wahre Zwillinge. Es sind keine Umleitungen. Für den Chip existiert auf der SSD tief drinnen keine Differenz ob er Eintrag 1 ('Wichtig') oder Eintrag 2 ('Klon') aufruft... beide Nummern lauten gleich. Tilgt das 'rm' den Eintrag 1 aus dem Sichtbereich, hält Eintrag Nummer 2 den SSD Speicherfleck im System unangetastet am Leben, bis auch er irgendwann in Flammen aufgeht!"
  },

  // L6: PHS! Architecture OS! 
  {
    id: 10461,
    question: "Welches eherne globale Architekturgesetz des Linux-Standardisierungs-Gremiums bestimmt den eisernen Laufweg von Dateien? (Z.b dass in `/etc` Niemals Ausführbare Binärdateien hausen dürfen, oder Log-Volumen zwingend in `/var` abgesondert sind)?",
    options: [
      "FHS (Filesystem Hierarchy Standard)",
      "GNU Posix GPL",
      "LBS (Linux Base Specifications)",
      "LFS (Linux From Scratch)"
    ],
    correctAnswer: "FHS (Filesystem Hierarchy Standard)",
    explanation: "Die Architektur des Filesystem Hierarchy Standard beendet jeden Wildwuchs an Software-Deployments weltweit. Admins der Antarktis oder in Europa wissen durch das FHS Zertifikat sofort stoisch: Variable Web-Drucker-Logs finden sie niemals bei Betriebssystem-Befehlen."
  }
]
