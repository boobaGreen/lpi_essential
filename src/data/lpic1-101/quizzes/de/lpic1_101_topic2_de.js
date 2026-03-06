// LPIC-1 101 Topic 2 Quiz - German

export const lpic1_101_topic2_de = [
  // L1: Disques et Partitions
  {
    id: 10211,
    question: "Welche Aussage über klassische MBR-Partitionstabellen (Master Boot Record) ist technisch zwingend wahr?",
    options: [
      "Der MBR kann Festplatten jenseits von 8 Terabyte universally indizieren.",
      "Der Index befindet sich exklusiv nur versteckt im ersten /boot-Verzeichnis.",
      "Man kann direkt nicht mehr als vier (4) physische, primäre Partitionen erstellen.",
      "Die Schnittstelle für den MBR ist zwingend vom Typ Ext4 Linux."
    ],
    correctAnswer: "Man kann direkt nicht mehr als vier (4) physische, primäre Partitionen erstellen.",
    explanation: "Der MBR ist begrenzt (maximale Größe ca. 2TB) und strukturell darauf fixiert, strikt nur 4 feste Adressplätze für primäre Partitionen zu reservieren. (Deshalb wurden 'Erweiterte Partitionen' zur weiteren logischen Unterteilung erfunden)."
  },
  {
    id: 10212,
    question: "Welche Partitionstabellen-Architektur übertrifft MBR und wird bei modernen Systemen genutzt, um Laufwerke über 8 Zebibyte sowie nativ bis zu 128 große Partitionen ohne Speicherzwänge zu verwalten?",
    options: [
      "APFS",
      "UEFI",
      "GPT (GUID Partition Table)",
      "LVM Volumes"
    ],
    correctAnswer: "GPT (GUID Partition Table)",
    explanation: "GPT (GUID Partition Table) wird eng zusammen mit modernen UEFI-Mainboards konzipiert. Sein Inhaltsverzeichnis erlaubt Platten von absurden Festplattenkapazitäten und adressiert mühelos 128 echte primäre Partitionen (wichtig für RAIDs)."
  },
  {
    id: 10213,
    question: "Unter der Annahme, dass ein Webserver massive Log-Schreibzugriffe produziert: Was ist der kritischste Vorteil der Isolierung von '/var' auf eine eigenständige, von Root '/' getrennte Festplatte/Partition?",
    options: [
      "Er komprimiert die Logs per Algorithmus automatisch zur Beschleunigung von Apache.",
      "Verhindert den direkten Absturz (OOM/DiskFull) des Ext4 Root-Dateisystems und Kernels, auch wenn ein verrückt gewordener Programm-/Logspeicher plötzlich das Limit seiner dedizierten '/var'-Partition zu 100% vollschreibt!",
      "Dies verdoppelt als virtuelle Uhr die strikte Anzahl der Inodes des Parent-Roots.",
      "Es isoliert Bibliotheken auf /var, sodass diese root-exekutive SUID-Rechte erhalten."
    ],
    correctAnswer: "Verhindert den direkten Absturz (OOM/DiskFull) des Ext4 Root-Dateisystems und Kernels, auch wenn ein verrückt gewordener Programm-/Logspeicher plötzlich das Limit seiner dedizierten '/var'-Partition zu 100% vollschreibt!",
    explanation: "Verzeichnisse mit hoher Datenfluktuation (wie z.B. /var/log oder /var/www) gefährden bei Systemfehlern das gesamte Linux. Liegen Auslagerungen getrennt auf '/var=100%', implodiert allein dieser Serverdienst... Ihre 'Root / Survive-OS-Partition' bleibt hiervon räumlich unangetastet!"
  },

  // L2: Bootloader
  {
    id: 10221,
    question: "In der detaillierten Konstruktion des Bootloaders GRUB 2 (GRand Unified Bootloader), in welcher Datei oder Unterordner darf niemals manuell mit einem Texterzeuger von Hand herumgepfuscht werden?",
    options: [
      "/etc/default/grub",
      "/boot/grub/grub.cfg (oder /boot/grub2/grub.cfg)",
      "/etc/grub.d/40_custom",
      "Die Systemdatei in /etc/rc.local"
    ],
    correctAnswer: "/boot/grub/grub.cfg (oder /boot/grub2/grub.cfg)",
    explanation: "Diese finale dicke .cfg File ist ausschließlich als Maschinenoutput kompiliert. Jeder Boot-Verwalter oder ein Update/Kernelwechsel generiert dies brutal neu (z.B. mittels gru2-mkconfig) - womit menschliche, manuelle Notizen rücksichtslos zerschmettert werden!"
  },
  {
    id: 10222,
    question: "Wo bearbeiten Sie gewissenhaft den Countdown-Timer des sichtbaren Startmenüs über die Variable 'GRUB_TIMEOUT=15'?",
    options: [
      "In der Algorithmen-Übersicht von /etc/grub.d/00_header",
      "Ausschließlich durch Manipulation in der Bios-Ansicht.",
      "Im Matrix-Verzeichnis /boot/grub/menu.lst",
      "/etc/default/grub"
    ],
    correctAnswer: "/etc/default/grub",
    explanation: "Hier notiert der Admin im Text die harten Basisvariablen: z. B. Vorgaben für die Sichtbarkeit (GRUB_TIMEOUT) oder Kernelsekrete beim Parameter-Schleusen über 'GRUB_CMDLINE_LINUX'."
  },
  {
    id: 10223,
    question: "Der Bootloader-Menü-Eintrag wurde unter RHEL/CentOS editiert. Wie lautet der Code-Aufruf (Compilierungsvorgang) des Moduls, um aus den Configs in /etc eine physisch brauchbare Config .cfg für den Boot zusammenzubauen?",
    options: [
      "grub2-mkconfig -o /boot/grub2/grub.cfg",
      "grub-install /dev/sda",
      "grub-update /etc/default/grub",
      "make -j4 grub"
    ],
    correctAnswer: "grub2-mkconfig -o /boot/grub2/grub.cfg",
    explanation: "grub-mkconfig ist der smarte Monteur. Versehen mit dem Export-Direktivenflag '-o' erzwingt er die Ausleese der etc-Verzeichnisse und presst daraus unmittelbar die überschreibende neue System-Outputdatei für den /boot/ Start!"
  },

  // L3: Bibliothèques Partagées
  {
    id: 10231,
    question: "Mit welchem Tooling lässt sich präzise prüfen, von welch konkreten externen dynamischen Bibliotheken (den .so-Programmdateien) eine ausführbare Linux-Software (Binary) explizit zum Laufen abhängig ist?",
    options: [
      "lsmod testdatei",
      "ldconfig -p testdatei",
      "ldd /bin/bash",
      "file /usr/bin/cat"
    ],
    correctAnswer: "ldd /bin/bash",
    explanation: "'ldd' ist das File-Inspektionsmittel (List dynamic dependencies), mit dem jeder Aufruf einer binären Start-Datei untersucht (hier /bin/bash). Das Tool scannt rekursiv die Köpfe von Bash ab und druckt deren Forderung an externe System-Moduls (.so/Libraries)."
  },
  {
    id: 10232,
    question: "Was MÜSSEN Sie zwingend tun, wenn man von Hand eine völlig neue Bibliothek/Software (Shared Objects *.so) irgendwo in ein isoliertes Verzeichnis (z.b '/opt/meinefirma/lib/') geworfen hat, damit ein späteres Linux-Run sie in den Registern des Systems auch erkennen kann?",
    options: [
      "Die bash_profile mit LD_LIB_ALL überschreiben.",
      "Nichts geschieht maschinell durch Magie! Der Verzeichnispfad muss einer txt unter '/etc/ld.so.conf.d/' mitgeteilt werden. Anschließend feuert man als Root `ldconfig` ab, damit der Systemcache das Ordnerregister endgültig liest.",
      "Das apt Repository neu auswerten lassen.",
      "Es über ein Verzeichnis via ln symlink in das Kernel Directory projizieren."
    ],
    correctAnswer: "Nichts geschieht maschinell durch Magie! Der Verzeichnispfad muss einer txt unter '/etc/ld.so.conf.d/' mitgeteilt werden. Anschließend feuert man als Root `ldconfig` ab, damit der Systemcache das Ordnerregister endgültig liest.",
    explanation: "Der Linux-Core (ld.so.conf) dirigiert Ordner! 'ldconfig' übersetzt dies in Befehlsgewalt: Der Cache überschreibt sich hardwareseitig und das Betriebssystem indiziert augenblicklich alle neuen Binary-Hilfen im /etc/ld.so.cache ."
  },
  
  // L4: Paquets Debian (apt, dpkg)
  {
    id: 10241,
    question: "Ein USB-Gerät liefert ein Archiv-Paket vom Typ '.deb', jedoch auf einem Rechner offline komplett ohne Cloud und Netz. Wie forcieren Sie primitiv eine Ausführung jener manueller Installation von der Konsolen-Direktive?",
    options: [
      "apt-get install mem.deb",
      "dpkg -i mem.deb",
      "apt-install -f mem.deb",
      "rpm -ivh mem.deb"
    ],
    correctAnswer: "dpkg -i mem.deb",
    explanation: "DPKG ist ein lokales Werkzeug (Low-level). Startet man dies mit (-i Install) stur auf den Download-Pfad, pflanzt er es radikal zu installieren an. Ohne Web-Abhängigkeitsauflösung krachen fehlende Bestandteile gnadenlos ab ('Abhängigkeitsfehler')."
  },
  {
    id: 10242,
    question: "Was exekutiert Linux unbarmherzig, wenn in Debian der Befehl `dpkg -P meinapache` befohlen wird?",
    options: [
      "Paket (-P) vor Updates eines Apt-Updates schützen!",
      "Das Programm wird tief verwurzelt gelöscht (Purge base): Es eliminiert seine Programm-Struktur und zerschmettert auch radikal unwiderruflich all seine persönlichen Setup/Konfigurationsanlagen (z.b config in /etc/) vom Terminal!",
      "Hält als Background System den Daemon in sicherer OS-Pause.",
      "Ausschließlich die nackte Löschung. Serverconfigs überleben unangetastet."
    ],
    correctAnswer: "Das Programm wird tief verwurzelt gelöscht (Purge base): Es eliminiert seine Programm-Struktur und zerschmettert auch radikal unwiderruflich all seine persönlichen Setup/Konfigurationsanlagen (z.b config in /etc/) vom Terminal!",
    explanation: "Das klassische Remove (-r) kratzt sanft die Ordner. Eine Purge-Aktion (-P Purge) lässt keinem Krümel einer Voreinstellung das Leben - selbst Backups der alten Struktur werden erbarmungslos für immer zertrümmert."
  },
  {
    id: 10243,
    question: "In welcher Datei speichert APT streng vordefiniert seine Quell-Internetadressen ('Repositories'), um überhaupt mit dem Webkatalog abgeglichen werden zu können (apt update), wenn man online nach Installationsanfragen fahndet?",
    options: [
      "/var/lib/apt/mirrors",
      "/etc/apt/sources.list",
      "/etc/dpkg/network.url",
      "/etc/apt.repos.d/default.repo"
    ],
    correctAnswer: "/etc/apt/sources.list",
    explanation: "Die 'sources.list' regelt knallhart, welchen Debian-Servern/PPAs die Berechtigung erteilt wird, Linux zu befüttern (Beispiel-Eintrag: 'deb http://archive.ubuntu.com/ubuntu focal main')."
  },

  // L5: Paquets RedHat (rpm, yum, dnf)
  {
    id: 10251,
    question: "Welcher reine RPM-Befehl listet geräuschlos exakt auf, WELCHE einzelnen Ordner und Dateistrukturen ein spezifisches Software-Paket 'X' während der Erstinstallation auf der lokalen Festplatte platziert und eingenistet hat?",
    options: [
      "rpm -ql application_X",
      "rpm -qa --grep application_X",
      "rpm -i --verbose application_X",
      "yum list application_X"
    ],
    correctAnswer: "rpm -ql application_X",
    explanation: "Durch Queries 'q' vermischt mit List 'l'. Die Auswertung drückt jede Datei aus: z.B. `/usr/bin/x` und  `/etc/x/logs`! Damit weiß man, wie tief sich das Programm (RPM) eingegraben hat."
  },
  {
    id: 10252,
    question: "Wie nennt sich RPMs High-Level-Cloud-Ersatz Architektur, welche den langsamen Dinosaurier YUM ablöste, um mit intelligenterer Netzwerk-Auflösung in modernen RHEL und CentOS aufzutreten?",
    options: [
      "Pacman",
      "Zypper",
      "APT",
      "DNF (Dandified YUM)"
    ],
    correctAnswer: "DNF (Dandified YUM)",
    explanation: "CentOS entzog dem alten, extrem datenlangsamen YUM das Vertrauen. Der Dandified Ersatz ('DNF') baut zwar weiter stur auf den alten YUM Befehlen ('dnf update' etc.) auf, operiert aber rasendschnell als Baumstruktur beim Abhängigkeiten abarbeiten!"
  }
]
