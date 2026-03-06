// LPIC-1 101 Lesson Content — German

export const lpic1_101_lessonContent_de = {
  // ─── TOPIC 1: Systemarchitektur (101) ───
  'lpic1-101-1-1': {
    title: 'Hardware ermitteln und konfigurieren',
    content: `
Der Linux-Kernel verwaltet die Hardware und stellt dem Benutzer Informationen über das virtuelle Dateisystem \`/proc\` sowie dedizierte Verwaltungstools zur Verfügung.

### Wichtige Verzeichnisse
- \`/dev\`: Enthält spezielle Gerätedateien (z.B. \`/dev/sda\` für Festplatten, \`/dev/tty\` für Terminals), die auf die tatsächliche Hardware verweisen. Diese Knoten werden dynamisch vom udev-Dienst erstellt.
- \`/proc\`: Virtuelles Dateisystem im RAM, das Systeminformationen bereitstellt (z.B. \`/proc/cpuinfo\`, \`/proc/meminfo\`, \`/proc/interrupts\`).
- \`/sys\`: Vom Kernel befüllt, zeigt die Hierarchie der Hardware-Busse und Objekte (sysfs).

### Hardware-Befehle
- **\`lsusb\`**: Zeigt USB-Busse und die daran physisch angeschlossenen Geräte an.
- **\`lspci\`**: Zeigt detaillierte Informationen über alle PCI-Busse und die daran angeschlossenen Komponenten.
- **\`lshw\`** (List Hardware): Erzeugt einen umfangreichen Bericht, der Informationen über CPU, RAM und Motherboard extrahiert.

### Kernel-Module (Treiber)
Treiber unter Linux sind kompilierte Module (\`.ko\`), die der Kernel dynamisch laden kann.
- **\`lsmod\`** (List Modules): Liest \`/proc/modules\`, um anzuzeigen, welche Module derzeit im RAM aktiv sind.
- **\`modprobe\`**: Lädt oder entlädt ein Modul intelligent zusammen mit all seinen Abhängigkeiten.
- **\`modinfo\`**: Zeigt Header, Autor, Beschreibung und akzeptierte Parameter eines Moduls an.
    `,
  },
  'lpic1-101-1-2': {
    title: 'Der Bootvorgang',
    content: `
Das Starten eines Linux-Servers umfasst vier unverzichtbare Hauptphasen:
1. **Firmware POST (BIOS/UEFI)**: Hardware-Initialisierung und Suche nach einem Boot-Laufwerk.
2. **Bootloader (GRUB2)**: Die Firmware übergibt die Kontrolle an GRUB. Dieser zeigt das OS-Menü, findet den Kernel und das anfängliche RAM-Dateisystem (initramfs).
3. **Kernel-Initialisierung**: Der Kernel mountet das initramfs, lädt notwendige Treiber (wie RAID/LVM) und mountet das TATSÄCHLICHE Root-Dateisystem (\`/\`) auf der Festplatte.
4. **PID 1 Prozess (systemd / init)**: Der Kernel übergibt die endgültige Kontrolle an den Init-Prozess (oft systemd), der für das Starten der Benutzerdienste (Netzwerk, Webserver etc.) verantwortlich ist.

### Boot-Logs
- **\`dmesg\`**: Liest den Text-Stream aus dem Ringpuffer (Ring Buffer) des Kernels. Dies ist entscheidend, um Hardware- oder Treiberprobleme während des Starts zu erkennen.
- \`journalctl -b\`: Der moderne Standard bei systemd. Zeigt das Journal des aktuellen (\`-b\`) oder vorheriger Systemstarts an.
- \`/var/log/messages\` oder \`/var/log/syslog\`: Statische Protokolldateien, in denen Meldungen dauerhaft archiviert werden.
    `,
  },
  'lpic1-101-1-3': {
    title: 'Runlevels und Targets wechseln',
    content: `
Das System kann je nach Kontext in verschiedenen Zuständen operieren. Früher waren dies Runlevels (SysVinit), heute sind es Systemd-Targets!

### Systemd-Targets vs Runlevels
| Runlevel (SysV) | Systemd-Target | Erklärung |
| :--- | :--- | :--- |
| **0** | \`poweroff.target\` | System wird heruntergefahren (Halt/Poweroff). |
| **1** / **s** | \`rescue.target\` | Single-User-Modus (Root) ohne Netzwerk für Wartung. |
| **3** | \`multi-user.target\` | Reiner Textmodus (CLI) mit Multi-User-Unterstützung und Netzwerk. |
| **5** | \`graphical.target\` | Grafische Benutzeroberfläche (X11/Wayland). |
| **6** | \`reboot.target\` | Systemneustart. |

### Systemctl-Befehle
- \`systemctl get-default\`: Zeigt das aktuelle Standard-Target für den nächsten Bootvorgang an.
- \`systemctl set-default multi-user.target\`: Setzt das Standard-Target dauerhaft auf den Textmodus.
- \`systemctl isolate graphical.target\`: Wechselt sofort in das grafische Target (startet sofort die GUI).

### System herunterfahren
- \`shutdown -h now\`: Fährt das System sofort herunter (Halt).
- \`shutdown -r +20 "Update"\`: Plant einen Neustart (Reboot) in 20 Minuten und sendet via \`wall\` eine Warnung an alle angemeldeten Benutzer.
    `,
  },

  // ─── TOPIC 2: Linux-Installation & Paketverwaltung (102) ───
  'lpic1-102-1-1': {
    title: 'Festplattenlayout',
    content: `
Administratoren müssen Partitionen planen, bevor sie blind ein System aufsetzen.

### Partitionstabellen
- **MBR (Master Boot Record)**: Veraltet. Maximale Festplattengröße 2 TB. Erlaubt maximal 4 primäre Partitionen. Erweiterte und logische Partitionen sind nötig für mehr.
- **GPT (GUID Partition Table)**: Modern (oft mit UEFI genutzt). Unterstützt enorme Festplattengrößen und bis zu 128 primäre Partitionen ohne Umwege.

### Wichtige Mount-Punkte (FHS)
- \`/\` **(Root)**: Das Wurzelverzeichnis des Dateisystems.
- \`/boot\`: Am Anfang der Platte, enthält GRUB und den Kernel. Bei UEFI zwingend eine eigene ESP (EFI System Partition, Format: VFAT).
- \`/home\`\`: Benutzerverzeichnisse. Eine separate \`/home\`-Partition erlaubt Neuinstallationen des OS, ohne persönliche Daten zu verlieren!
- \`/var\`\`: Variable Daten (Logs, Datenbanken, Mails). Auf Servern MUSS \`/var\` getrennt sein, damit wild wuchernde Logs nicht das Root-Dateisystem füllen und das OS abstürzen lassen.
- **Swap**: Virtueller Arbeitsspeicher. Wird genutzt, wenn der physische RAM voll ist. Verhindert Out-of-Memory (OOM) Abstürze.
    `,
  },
  'lpic1-102-1-2': {
    title: 'Bootloader (GRUB 2)',
    content: `
**GRUB2 (GRand Unified Bootloader)** ist der Standard, um Linux (oder im Dual-Boot auch andere OS) zu starten.

### GRUB-Konfigurationsdateien
- **/boot/grub/grub.cfg** (oder \`/boot/grub2/grub.cfg\` unter RHEL): Die **finale Datei**, die gelesen wird. Sie wird automatisch generiert und darf vom Administrator **NICHT manuell bearbeitet** werden!
- **/etc/default/grub**: Hier ändert der Admin Variablen wie das Timeout (\`GRUB_TIMEOUT\`) oder übergibt Parameter an den Kernel (\`GRUB_CMDLINE_LINUX\`).
- **/etc/grub.d/**: Enthält Shell-Skripte (z. B. \`10_linux\`, \`30_os-prober\`), aus denen die cfg generiert wird.

### GRUB aktualisieren
Wenn \`/etc/default/grub\` geändert wurde, MUSS die Konfiguration neu generiert werden:
- RHEL/CentOS: \`grub2-mkconfig -o /boot/grub2/grub.cfg\`
- Debian/Ubuntu: \`update-grub\` (ein Wrapper-Skript für denselben Befehl).

Im MBR/Bootsektor installieren:
- \`grub-install /dev/sda\`
    `,
  },
  'lpic1-102-1-3': {
    title: 'Shared Libraries (Gemeinsame Bibliotheken)',
    content: `
Anstatt statische Riesen-Programme zu kompilieren, lagert Linux häufig genutzten Code in gemeinsam genutzte Objekte (\`.so\` - Shared Objects) aus.

### Diagnose mit ldd
- **\`ldd /bin/bash\`**: Untersucht das Binary \`bash\` und zeigt alle Shared Libraries (z.B. \`libc.so\`) an, die es benötigt, inklusive Pfad und Speicheradresse.

### Dynamischer Linker und Cache
Es wäre zu langsam, beim Programmstart die gesamte Platte nach \`.so\`-Dateien abzusuchen.
- **/etc/ld.so.conf**: Konfigurationsdatei. Sagt dem System, in welchen Ordnern es nach Bibliotheken suchen soll (inkludiert oft Dateien aus \`/etc/ld.so.conf.d/\`).
- **\`ldconfig\`**: Das Aktualisierungsprogramm. Liest die Konfiguration und generiert den schnellen Cache. Muss immer manuell ausgeführt werden, wenn neue Bibliotheken hinzugefügt wurden!
- **/etc/ld.so.cache**: Die binäre Cache-Datei, die vom System extrem schnell gelesen wird.

### Temporäre Überschreibung
\`export LD_LIBRARY_PATH=/tmp/mylibs\`: Weist Programme zwingend an, für diese Sitzung zuerst im Verzeichnis \`/tmp/mylibs\` nach passenden \`.so\`-Dateien zu suchen.
    `,
  },
  'lpic1-102-1-4': {
    title: 'Debian-Paketverwaltung',
    content: `
Das DPKG-System ist Standard in Debian- und Ubuntu-Derivaten. Pakete haben die Endung **.deb**.

### dpkg (Low-Level)
\`dpkg\` arbeitet nur lokal und lädt nichts aus dem Internet herunter.
- \`dpkg -i file.deb\`: Installiert das lokale Paket (scheitert bei fehlenden Abhängigkeiten).
- \`dpkg -r paket\`: Entfernt (Remove) das Paket, behält aber Konfigurationsdateien (\`/etc/\`).
- \`dpkg -P paket\`: Vollständige Purge. Entfernt Programm UND Konfigurationen!
- \`dpkg -l\`: Listet alle installierten Pakete auf.
- \`dpkg -S /usr/bin/cat\`: (Search) Welches RPM-Paket hat meine Datei \`cat\` installiert?

### APT (High-Level / Netzwerk)
\`apt\` löst Abhängigkeiten über das Internet (Cloud) auf, basierend auf Quellen, die in **\`/etc/apt/sources.list\`** stehen.
- \`apt update\`: Aktualisiert nur den Paket-Index (die lokale Liste), installiert noch nichts.
- \`apt upgrade\`: Aktualisiert alle veralteten Programme.
- \`apt install apache2\`: Installiert das Paket inklusive aller benötigten Basis-Bibliotheken!
    `,
  },
  'lpic1-102-1-5': {
    title: 'RPM- und YUM-Paketverwaltung',
    content: `
Das RPM-System herrscht in RHEL, CentOS, Rocky Linux und openSUSE. Pakete enden auf **.rpm**.

### RPM (Low-Level)
- \`rpm -ivh file.rpm\`: (Install, Verbose, Hash) Installiert und zeigt einen Fortschrittsbalken aus #-Zeichen.
- \`rpm -e paket\`: Deinstalliert (Erase) das Paket.
- \`rpm -Uvh file.rpm\`: (Update) Installiert oder aktualisiert ein Paket.
- **Abfragen (Queries - q)**:
    - \`rpm -qa\`: All. Listet alle auf dem PC installierten Pakete auf.
    - \`rpm -ql paket\`: List. Zeigt alle Verzeichnisse/Dateien an, die dieses Paket installiert.
    - \`rpm -qf /bin/bash\`: File. Wer hat diese spezifische Datei installiert?

### YUM und DNF (High-Level)
YUM (Yellowdog Updater, Modified) war lange der Standard. Moderne RHEL 8+ nutzen das schnellere **DNF** (Dandified YUM). Konfigurationen liegen in **/etc/yum.repos.d/**.
- \`dnf search wort\`: Durchsucht den Paketkatalog.
- \`dnf install paket\`: Installiert inkl. intelligenter Auflösung.
- \`dnf remove paket\`: Deinstalliert und räumt verwaiste Abhängigkeiten gleich mit ab!
    `,
  },
  'lpic1-102-1-6': {
    title: 'Linux Virtualisierung',
    content: `
### Typen von Hypervisoren
- **Typ 1 (Bare Metal)**: ESXi, Proxmox (KVM). Die Virtualisierungssoftware ist das OS, das direkt auf der Hardware läuft. Maximale Performance.
- **Typ 2 (Hosted)**: VMware Workstation, VirtualBox. Läuft als reguläres Programm innerhalb eines Desktop-Betriebssystems (z.B. Linux/Windows). Verursacht Überhang.

### Container (LXC / Docker)
Während eine VM ein komplettes Betriebssystem (mit Kernel und RAM-Allokation) emuliert, teilen sich **Container** den Linux-Kernel des Host-Systems!
Durch **cgroups** (Ressourcen-Limits für CPU/RAM) und **Namespaces** (isolierte Sichtbarkeiten für Prozesse, Netzwerke und Mounts) erzeugt Docker Sandbox-Umgebungen, die in Sekunden booten und kaum Ressourcen verschwenden.
    `,
  },

  // ─── TOPIC 3: GNU- und UNIX-Befehle (103) ───
  'lpic1-103-1-1': {
    title: 'Arbeiten auf der Kommandozeile',
    content: `
Die Kommandozeile (CLI), angetrieben oft von der Bash, ist das Herz von Linux.

### Befehls-Hierarchie
Wie sucht Bash einen aufgerufenen Befehl?
1. **Aliase**: Eigene Kürzel (z.B. \`alias l='ls -la'\`).
2. **Shell Builtins**: Befehle, die direkt im RAM-Code der Bash integriert sind (\`cd\`, \`pwd\`, \`export\`). Es existiert kein \`/bin/cd\` auf der Festplatte!
3. **Externe Binaries**: C/C++ Programme, die auf dem Laufwerk liegen (\`/bin/ls\`, \`/usr/bin/cat\`). Bash sucht diese in der Pfadvariablen (\`$PATH\`).

### Befehle identifizieren
- **\`which grep\`**: Durchsucht den \`$PATH\` und gibt aus, wo genau sich die Binärdatei befindet (\`/usr/bin/grep\`).
- **\`type cd\`**: Analysiert die Befehlsart und gibt z.B. aus: "cd is a shell builtin".
    `,
  },
  'lpic1-103-1-2': {
    title: 'Shell- und Umgebungsvariablen',
    content: `
### Lokale vs. Exportierte Variablen
- **Lokale Variable**: \`VAR1="Blau"\`. Diese Variable existiert **ausschließlich** im Speicher dieses einen Teminalsfensters. Ein aufgerufenes Unter-Programm kennt \`VAR1\` nicht!
- **Umgebungsvariable (export)**: \`export VAR1\`. Dies "exportiert" die Variable in das globale Environment des aktuellen Systems. Unter-Prozesse und Skripte "erben" die Information nun! Angezeigt werden sie mit \`env\`.

### Bash History
Die Shell protokolliert Ihre Eingaben in der Datei \`~/.bash_history\`.
- \`history\`: Gibt die nummerierte Liste aller Befehle aus.
- \`!14\`: Führt Befehl Nummer 14 sofort erneut aus.
- \`!!\`: Führt den exakt letzten Befehl nochmal aus.
- **Ctrl+R**: Startet den Reverse-Search-Modus, um die Historie interaktiv zu durchsuchen.
    `,
  },
  'lpic1-103-2-1': {
    title: 'Textströme mit Filtern bearbeiten',
    content: `
Alles in UNIX ist Text. Filtrierung ist elementar!

### Einfache Ansicht
- \`cat info.log\`: Gibt den gesamten Dateiinhalt unsortiert aus.
- \`head -n 25 datei\`: Zeigt nur die ersten 25 Zeilen.
- **\`tail -n 25 -f syslog\`**: Zeigt die letzten 25 Zeilen der Datei. WICHTIG: Die Option \`-f\` (Follow) sorgt dafür, dass die Ausgabe offenbleibt und neue Logzeilen in Echtzeit live im Terminal aktualisiert werden!

### Filter
- **\`wc\` (-l)** (Word Count): Zählt Zeilen, Wörter und Buchstaben. Mit \`-l\` (Lines) werden nur die Zeilen gezählt.
- **\`sort\`**: Sortiert Zeilen alphabetisch. \`-r\` sortiert rückwärts (Z-A). \`-n\` für eine echte zahlenmäßige, numerische Sortierung!
- **\`cut\`**: Schneidet Text aus Spalten. \`cut -d: -f1,5\` (Delimiter = ':', Field = Spalte 1 und 5).
    `,
  },
  'lpic1-103-3-1': {
    title: 'Grundlegende Dateiverwaltung',
    content: `
- **\`cp -r orig dest\` / (Copy)**: Kopieren. \`-r\` (rekursiv) ist zwingend, wenn ein ganzer Ordner mitsamt Inhalt kopiert werden soll.
- **\`mv orig dest\` / (Move)**: Verschieben. Unter Linux gibt es kein eigenes 'rename'-Kommando für Einzeldateien. Eine Datei im gleichen Ordner zu "verschieben", ist der Umbenennungsvorgang!
- **\`rm -rf ordner\` / (Remove)**: Das Löschen. Mit \`-r\` (löscht volle Ordner) und \`-f\` (Erzwingen, ohne zu fragen). **Extreme Vorsicht geboten!**

### Suchen: locate vs find
- **\`locate passwd\`**: Durchsucht eine nachts generierte Datenbank. Ist rasend schnell, findet aber keine brandneuen Dateien, die im Cache noch nicht drin stehen! (Update via \`updatedb\`).
- **\`find /etc -name "app*"\`**: Durchsucht rekursiv und in physischer Echtzeit das Dateisystem. Langsam, findet aber alles. Kann nach Größe (\`-size\`) oder Alter (\`-mtime\`) filtern.
    `,
  },
  'lpic1-103-3-2': {
    title: 'Dateien archivieren (tar)',
    content: `
### TAR - Das Bandarchiv
Der Befehl \`tar\` fasst mehrere Ordner und Dateien zu einer Archiv-Datei zusammen. **Er komprimiert die Daten aber von Natur aus nicht!**
Dafür ruft \`tar\` währenddessen Kompressions-Algorithmen (wie **Gzip**, Bzip2, Xz) auf.

- **\`tar -czvf meinarchiv.tar.gz ordner/\`** (Erstellen)
    - **C**: Create (Archiv anlegen).
    - **Z**: Ruft den \`gzip\` Kompressor auf.
    - **V**: Verbose (Redselig).
    - **F**: File (Sagt, dass er das in die angegebene Datei '.tar.gz' speichern soll).
- **\`tar -xzvf meinarchiv.tar.gz\`** (Entpacken)
    - **X**: eXtract. (Entpacken und wiederherstellen).
    `,
  },
  'lpic1-103-4-1': {
    title: 'Ströme (Streams) und Umleitungen',
    content: `
Kommandos in Linux kommunizieren über 3 Standardkanäle (Streams):
- **\`stdin\` (0)**: Eingabekanal.
- **\`stdout\` (1)**: Der Kanal für erfolgreiche, korrekte Programmausgaben.
- **\`stderr\` (2)**: Ein exklusiver Kanal für "Fehlermeldungen" & Warnungen, separiert vom positiven Feedback!

### Umleiten von Ausgaben (Redirections)
Normalerweise gibt ein Programm seinen Text visuell auf dem Terminal-Monitor aus. Wir leiten das um:
- \`echo "test" > datei.txt\`: **Überschreiben**. Ersetzt/Löscht den kompletten Inhalt der Datei.
- \`echo "test" >> datei.txt\`: **Anhängen (Append)**. Hängt den Text als neue Zeile unten an die bestehende Datei an.

### Fehler in das Schwarze Loch entsorgen
Häufig flutet der \`find\`-Befehl den Bildschirm mit "Permission denied"-Fehler-Müll aus Kanal 2.
- **\`find / -name "pass" 2> /dev/null\`**: Dies leitet NUR den Fehlerkanal **2** ins schwarze Loch (\`/dev/null\`) um. Das gefundene Ergebnis erhalten Sie rein und übersichtlich auf Kanal 1!
- **\`2>&1\`**: Weist Linux an: "Nimm alle Fehler aus Kanal 2, und wirf sie in denselben Strom wie Kanal 1". Oft für Cronjob-Logs genutzt!
    `,
  },
  'lpic1-103-4-2': {
    title: 'Pipes und Befehlsketten',
    content: `
### Die Pipe \`|\`
Dies ist das Herzstück der UNIX-Kommandozeile.
Das Zeichen \`|\` fängt die Ausgabe (\`stdout\`) des linken Befehls auf, druckt sie nicht auf den Monitor, sondern leitet sie wie durch ein Rohr **als Input für das nächste Programm** weiter!
Beispiel: \`ls -l /etc | grep ".conf" | wc -l\`.

### Befehl: tee
Was, wenn Sie den Output einer langen Pipeline in einer Text-Datei protokollieren, ihn aber *Trotzdem* gleichzeitig für das nächste Programm weiterleiten wollen?
- \`cat /etc/passwd | tee save.txt | grep root\`
\`tee\` (T-Stück Rohrabzweig) greift den Datenstrom auf, schreibt eine physische Kopie in \`save.txt\` auf Laufwerk, und leitet das Original ungestört an \`grep\` / die Konsole weiter!
    `,
  },
  'lpic1-103-5-1': {
    title: 'Prozesse überwachen und abschießen',
    content: `
Unter Linux erhält jeder Task eine eindeutige Systemnummer, die **Process ID (PID)**.

### Überwachen
- **\`ps aux\`**: Macht einen statischen Schnappschuss. 'A' (alle User), 'U' (menschenlesbar), 'X' (Hintergrund-Dämonen ohne Terminal-Bindung).
- **\`top / htop\`**: Aktualisiert sich im Terminal im Sekundentakt dynamisch und zeigt RAM/CPU-Verbrauch von Programmen wie der Windows Taskmanager.

### Abschießbefehle (kill)
Man kommuniziert mit Prozessen über 'Signale'.
1. **\`kill -15 PID\` (SIGTERM)**: Dies ist die höfliche Standardmethode. Sendet eine Aufforderung, sich zu beenden. Das Programm kann Datenbankdateien noch speichern und ordnungsgemäß herunterfahren.
2. **\`kill -9 PID\` (SIGKILL)**: Die brutale Guillotine. Ignoriert Programme, die "hängen" geblieben sind. Das Signal geht direkt an den Kernel, der dem Prozess gnadenlos den Arbeitsspeicher abschneidet. Das Programm hat keine Chance, Daten zu speichern.
    `,
  },
  'lpic1-103-5-2': {
    title: 'Prozesse in den Hintergrund schicken',
    content: `
### Background Execution (&)
Starten Sie einen gigantischen Befehl, blockiert er das Vordergrund-Terminal (Foreground / fg) für Eingaben, bis er beendet ist.
Um Kommando direkt unsichtbar im **Background** (\`bg\`) laufen zu lassen, hängt man das **kaufmännische Und-Zeichen \`&\`** ans Zeilenende!
- \`tar -czvf ordner.tar.gz ordner/ &\` (Der Befehl läuft im Hintergrund, Ihr Terminal ist sofort für Sie frei).

### Pausieren und Jonglieren (Ctrl+Z)
Haben Sie den Befehl im Foreground ohne \`&\` abgesetzt und sind blockiert? 
- **\`Ctrl + Z\`**: Pausiert den laufenden Prozess (Suspend). Das Programm ruht nun schlafend im Arbeitsspeicher, rechnet nicht weiter. Ihr Terminal ist frei.
- **\`bg\`**: Nimmt den soeben pausierten Prozess auf und lässt ihn im Hintergrund weiterrechnen.
- **\`fg\`**: Holt ein Programm aus dem Hintergrund wieder visuell auf das Vordergrund-Terminal.
    `,
  },
  'lpic1-103-6-1': {
    title: 'CPU-Prioritäten anpassen (Nice-Werte)',
    content: `
Der Linux-Kernel "Scheduler" regelt durch Gewichtung (Nice-Werte), welches von tausend parallelen Programmen bei 100% Vollauslastung am meisten vom CPU-Zyklus abbekommt. 
Die Metapher dreht sich dabei um **Nettigkeit (Nice)**! Sind Sie bei CPU-Anfragen zudringlich, oder lassen Sie den anderen netterweise den Vortritt?

### Nice Index (NI) von -20 bis +19
Standardprogramme starten unter Linux mit \`0\`.
- Ein **höherer Wert (+15)** bedeutet: Ich bin extrem NETT! Mein Skript hat Zeit, ich nehme nur CPU-Reste.
- Ein **negativer Wert (-20)** bedeutet: Das Ego! Dieses Programm ist unhöflich verschlingend, dominiert die Server-CPU vollends und lässt keinen anderen mehr rechnen!

### Parameter zuweisen
- \`nice -n 10 befehl\`: Startet von Anfang an ein Programm mit Wert 10.
- \`renice -n -5 PID\`: Ändert die Höflichkeit einer BEREITS LAUFENDEN Prozessidentifikationsnummer (PID). 
- **Root-Regel**: Ein normaler Linux-User kann seine Aufgaben aus Großzügigkeit immer nur hoch-nicen (netter / +19 machen). Einzig der System-Administrator (Root) darf egoistisch Werte in den Minusbereich (-20) drücken!
    `,
  },
  'lpic1-103-7-1': {
    title: 'Reguläre Ausdrücke (RegEx)',
    content: `
Filtern nach reinen Wörtern reicht oft nicht. Regex generiert eine Suchlogik, die Suchalgorithmen wie \`grep\` verwenden!

1. **Zeilenanfang \`^\` (Chapeau)**: Verlangt, dass das Wort der allererste Text der Zeile sein MUSS. (\`^root\` findet nichts bei 'Mein root').
2. **Zeilenende \`$\` (Dollar)**: Verlangt, dass die Zeile direkt nach diesem Suchbegriff abbricht! (\`log$\`).
3. **Der Punkt \`.\`**: Steht als Platzhalter in Linux für *EXAKT EIN EINZIGES, BELIEBIGES* anderes Zeichen (Kein Zeilenumbruch).
4. **Das Sternchen \`*\`**: Das Sternchen verhält sich in Linux RegEx NICHT wie in Windows. Es steht nicht für "irgendwas". Es ist ein Multiplikator! Der Vorherige Buchstabe tritt "**NULL ODER BELIEBIG OFT**" auf.
    - So bedeutet \`a*\` (Findet a, oder aaaaa, aber findet AUCH NICHTS, weil A ja keinmal auftritt).
    - In der Kombi "**\`.*\`**" bedeutet es: "Nimm das einzige, beliebige Zeichen... und wiederhole dies endlos!" (Dies ist das Äquivalent zur Windows Such-Wildcard Alles!).
5. **Klammer-Gruppen \`[ ]\`**: Definiert eine Gruppe an Möglichkeiten für *ein* Zeichen. \`[abc]\` (Das Zeichen muss ein a, ein b ODER ein c sein!).
    `,
  },
  'lpic1-103-8-1': {
    title: 'Der Terminal Texteditor "vi / vim"',
    content: `
Der \`vi\` kennt keine Maus! Stattdessen nutzt man drei verschiedene Modi:

1. **Befehlsmodus (Command Mode)**: Standard nach dem Start (und immer über \`ESC\` erreichbar). 
    - Wenn man hier Tasten drückt, schreibt man nichts! Die Tastatur sendet Befehle.
    - **\`dd\`**: Löscht die gesamte aktuelle Zeile komplett aus der Textdatei.
    - **\`yy\`** (Yank): Kopiert die aktuelle Zeile in den flüchtigen Systemspeicher.
    - **\`p\`** (Put): Fügt den Speicher-Inhalt ein.
    - **\`u\`**: (Undo) Macht den letzten Schritt rückgängig.
2. **Eingabemodus (Insert Mode)**: Erreicht man mit \`i\` (Insert, an Cursorposition) oder \`a\` (Append). Nur dann gleicht vi einem regulären Editor zum Tippen! (Ausstieg nur über ESC!)
3. **Erweiterter Befehlsmodus (Ex-Modus)**: Aufruf durch die Eingabe vom Doppelpunkt **\`:\`** (aus dem Command Mode).
    - \`:w\`: (Write) Änderungen speichern.
    - \`:q\`: (Quit) Schließen.
    - \`:wq\`: Speichern und schließen (Alias dafür: \`:x\`).
    - \`:q!\`: Beenden und **alle Änderungen gnadenlos verwerfen!**
    `,
  },

  // ─── TOPIC 4: Geräte, Dateisysteme & FHS (104) ───
  'lpic1-104-1-1': {
    title: 'Dateisysteme anlegen (Formatieren)',
    content: `
Nachdem man Partitionen mit \`fdisk\` gezeichnet hat, benötigen sie eine Dateisystem-Formatierung.
Das Kommando **Make Filesystem (\`mkfs\`)** gießt das Fundament (Journal, Inodes etc.).

- **\`mkfs.ext4 /dev/sdb1\`**: Formatiert und installiert das verlässliche ext4-Dateisystem.
- **\`mkswap /dev/sda2\`**: Für die Swap-Partition gibt es einen Exklusivbefehl, da sie für das menschliche Auge keine Ordner/Struktur haben darf! (Anschließend durch den Befehl \`swapon /dev/sda2\` in Betrieb genommen).
    `,
  },
  'lpic1-104-2-1': {
    title: 'Speicherplatz und Dateisystem-Integrität',
    content: `
### Platz prüfen
- **\`df -h\` (Disk Free)**: Zeigt den belegten und freien Platz in % für ALLE eingehängten Partitionen in Megabyte/Gigabyte-Umrechnung (\`-h\` = human readable).
- **\`du -sh [Ordner]\` (Disk Usage)**: Durchsucht den angegebenen Ordner und addiert alle seine Unterdateien, um zusammenfassend (\`-s\`) anzuzeigen, wer den Platz wegfrisst!

### Dateisystem-Check (FSCK)
**\`fsck\`** durchsucht Partitionen nach korrupten Blöcken/verwaisten Inodes und repariert sie. In RHEL-Systemen mit XFS-Dateisytem nutzt man das Tool **\`xfs_repair\`**.

🔥 **Kritische Prüfungsfalle** 🔥
Führen Sie \`fsck\` NIEMALS auf einer Partition aus, die im Augenblick beschreibbar ins Linux-System "*gemountet (RW)*" ist! Reparieren Sie während der Kernel parallel Logs im Livebetrieb ablegt, zerfetzt es das Ext4 Inodes-Registers massiv in dauerhafte Korruption! Vorher Aushängen!
    `,
  },
  'lpic1-104-3-1': {
    title: 'Mounts und Fstab Automatisierung',
    content: `
Wie binde ich die USB-Festplatte "/dev/sdb1" nun sichtbar ins Linux-Root Verzeichnis ein?
Mit \`mount\`.

### Automatisches Einhängen beim Systemstart
Das geschieht in der Textdatei **/etc/fstab**!
Während des Boots liest 'Systemd' oder 'SysV-init', mountet alle dort aufgezählten Laufwerke (bzw. durch implizite Auslösung von \`mount -a\`).

### Die fstab Syntax / UUIDs
Eine Laufwerksverbindung wie (Port 1 Sata = /dev/sda) ist physikalisch instabil! Steckt man auf dem Mainboard ein neues Kabel an, verrutscht SDA zu SDC, und schon crashed der Linux-Rechner, weil fstab die Namen nicht mehr findet!
Das LPI schreibt Best Praxis vor: Verwenden Sie feste, niemals veränderbare Hardware-IDs (\`UUID=e8fa7...\`, ermittelbar mit \`blkid\`). 

fstab besitzt 6 Spalten:
1. Block-Gerät (UUID oder Pfad)
2. Der Mount Point Linux-Ordner (z.B. \`/var\`)
3. Das File System (ext4, xfs, swap)
4. Mount Optionen (defaults, ro, ... )
5. Dump (Für Backup, heute meist 0)
6. Fsck-Pass Order (Priorität für den Fsck-Scan beim Linuxstart).
    `,
  },
  'lpic1-104-5-1': {
    title: 'Rechte: chmod, SUID & Sticky Bit',
    content: `
### Oktale Verteilung (User-Group-Others)
Dateirechte bestehen auf Lesbarkeit (r=4), Beschreibbarkeit (w=2) und das reine Ausführen von Verzeichnisknoten und Skripten (x=1). 
- \`644\`: Die Klassische Rechtevergabe auf Textdokumenten. Der User darf Lesen&Schreiben (4+2 = 6). Seine Linux-Nutzergruppe hat nur Leserecht (4), Fremde aus dem Rest der OS-Welt ebenso das Leserecht (4).

### Spezielle Linux-Sicherheitsbits
- **Sticky Bit (\`t\`)**: Oft auf Public \`/tmp/\` Verzeichnissen (777 Oktal). Das Bit schützt, dass Benutzer in diesem Public-Chaos NUR IHRE selbst-autor-kreierten Dateien vernichten dürfen. Damit wird verhindert, dass irgendein Praktikant dem Webentwickler seine Log-Daten im /tmp Ordner herauslöscht.
- **SUID – Set User ID (\`s\`)**: Kommt auf speziellen Binärdateien vor (\`/usr/bin/passwd\`). Um Passwörter zu setzen, braucht der Befehl Hardcore-Root-Speicher-Schutzrechte des OS. Mit SUID darf ein winziger anonymer Benutzer temporär **in die Haut des Datei-Eigentümers (also hier: Root) schlüpfen**... für die kurze Phase dieser einzigen Programm-Ausführung! 
    `,
  },
  'lpic1-104-6-1': {
    title: 'Symbolic & Hard Links klären',
    content: `
\`ln\` ist für Verknüpfungungen zuständig.

### Symbolischer Link (Symlink, \`ln -s\`)
Ähnlich der Windows "\`.lnk\`" Verknüpfung. Linux erschafft eine neue klitzekleine Textdatei. Inhalt ist purer Text: "\`-> /pfad/zum/original\`".
- **Vorteil**: Da er nur auf einen reinen Textpfad verweist, kann ein Symlink über Dateisystem-/Festplattengrenzen hinweg (z.b. auf einen USB-Stick) erstellt werden.
- **Tragödie**: Wenn das Original (Target) gelöscht wird, steht der symbolische Textlink weiter leer herum und führt ins Nichts ins Leere ("Roter Broken Link").

### Harte Links (Hard Link, \`ln\`)
Basiert tief auf den Indizes der Ext4 Register. Ein Hard Link ist *kein* Ratzfatz-Routentext, es ist pur eine ECHTE Zweite-Datei mit Zweiter Datei-Benamung!
Aber anstatt Daten physikalisch 2x in den RAM/SSD zu speichern, zeigen BEIDE DAteinamen identisch auf **die gleiche Inode-Nummer auf den Platineblock!**
- **Vorteil**: Löschen (rm) Sie die Originaldatei 1, zerreisst nichts! Es löscht zwar den Datei-A-Namen aus der Liste aus... Datentechnisch auf der Festplatte bleibt der Rest unbeschadet, da Kopie Datei 2 noch weiter den Inode hält. Er wird nicht zerstört!
- **Nachteil**: Dürfen aus Architekturgründen NIEMALS Festplatten-Dateisystem-Formate überqueren. (SSD Disk A Inode kann nicht auf Magnetlaufwerk B Inode verweisen).
    `,
  },
  'lpic1-104-7-1': {
    title: 'Filesystem Hierarchy Standard (FHS)',
    content: `
Der durch die Linux Foundation definierte weltweite FHS-Musterbauplan beugt Skriptchaos vor, die sonst nicht Linux-übergreifend funktionierten.

- **\`/usr\`** (UNIX System Resources): Alle ausführbaren read-only Befehle (\`/usr/bin/\`), statische App-Daten und Man-Pages. Bleiben konstant und unverändert durch Laufzeit.
- **\`/var\`** (Variabler Datensatz): Alles, was wild im Volumen dynamisch wächst: Systemlogs, Docker-Image-Fragmente, Drucker-Spooler Ordner, oder Datenbankverzeichnisse. (So abgetrennt durch Mount-Festplatten, falls Logs ausbrechen).
- **\`/etc\`** (Et Cetera): Die Kommandozentrale. Hostnamen, Benutzer (\`passwd\`), Netzwerke. Hält AUSSCHLIESSLICH Textkonfigurationsdateien! Es gehört sich verboten, ausführbare Binaries (\`.exe\`) nach \`/etc\` zu legen.
- **\`/opt\`** (Optional / Zusatzprogramme): Das Quarantäneverzeichnis für kommerzielle Closed-Source Softwarebrocken (wie Oracle Database , Steam , Chrome). Die Monolithen installieren ihre privaten Libaries hermetisch isoliert im \`/opt/google-\` Bereich, um das System unter \`/usr/lib\` keinesfalls mit inkompatiblen oder alten Abhängigkeiten versehentlich zu überschreiben.
    `,
  },
}
