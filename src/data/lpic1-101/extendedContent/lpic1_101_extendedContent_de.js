// LPIC-1 101 Extended Content — German

export const lpic1_101_extendedContent_de = {
  // ─── TOPIC 1: Systemarchitektur (101) ───
  'lpic1-101-1-1': {
    title: 'Hardware ermitteln und konfigurieren',
    content: `
### Hardware-Erkennung unter Linux
Unter Linux wird Hardware durch virtuelle Dateisysteme repräsentiert, mit denen Kernkomponenten und Diagnosewerkzeuge interagieren können.

#### Wichtige Verzeichnisse:
- \`/sys\` (Sysfs): Eine strukturierte Ansicht der Hardware, sortiert nach Bussen und Gerätetypen. Hier legt der Kernel Laufzeitinformationen ab.
- \`/proc\`: Das Prozessinformations-Dateisystem, welches auch essentielle Hardwaredaten bereithält (\`/proc/cpuinfo\`, \`/proc/meminfo\`, \`/proc/interrupts\`, \`/proc/ioports\`).
- \`/dev\`: Enthält Gerätedateien (Device Nodes), die als Schnittstelle zur Hardware dienen (z. B. \`/dev/sda\` für Festplatten, \`/dev/tty\` für Terminals). Diese werden dynamisch von \`udev\` verwaltet.

#### Hardware-Inspektionsbefehle:
Anstatt Rohdaten zu lesen, nutzt man in der Praxis Abstraktionswerkzeuge:
1. **\`lsusb\`**: Listet alle USB-Busse und die daran angeschlossenen Geräte auf. Verwendet die Datenbank \`/var/lib/usbutils/usb.ids\`.
2. **\`lspci\`**: Zeigt alle PCI-Busse und -Komponenten. Mit \`-v\` (verbose) oder \`-k\` wird zusätzlich angezeigt, welches Kernelmodul das Gerät steuert.
3. **\`lsmod\`** (List Modules): Zeigt an, welche Kernelmodule (Treiber) aktuell geladen sind (liest \`/proc/modules\`).

#### Kernelmodule (Treiber) verwalten
Linux lädt Treiber zur Laufzeit dynamisch in den Kern.
- \`modprobe\`: Das bevorzugte, intelligente Werkzeug. Es lädt das gewünschte Modul und alle davon abhängigen Module automatisch (basierend auf \`modules.dep\`). Zum Entladen nutzt man \`modprobe -r modulu_name\`.
- \`modinfo\`: Zeigt Metadaten eines Moduls an, wie Autor, Lizenz und mögliche Parameter.
    `,
  },
  'lpic1-101-1-2': {
    title: 'Der Bootvorgang',
    content: `
### Die Phasen des Linux-Bootvorgangs
Das Starten eines Linux-Systems erfolgt in klar definierten Schritten:

1.  **Firmware (BIOS/UEFI) POST**: Hardware-Initialisierung und Suche nach einem bootfähigen Medium.
2.  **Bootloader (z. B. GRUB2)**: Das Bootmenü erscheint, der Kernel (z.B. vmlinuz) und das Initramfs werden vom Speicherort (meist \`/boot\`) in den Arbeitsspeicher geladen.
3.  **Kernel und Initramfs**: Der Kernel startet, entpackt das Initramfs (ein temporäres Dateisystem im RAM), um Treiber für den Zugriff auf die eigentliche Root-Partition (\`/\`) bereitzustellen.
4.  **Init (Systemd)**: Sobald Rootsystem gemountet ist, startet der Kernel den ersten Userspace-Prozess (PID 1). Früher war dies SysVinit, heute ist es fast immer **systemd**, welcher parallel alle weiteren Dienste hochfährt.

### Systemmeldungen mit dmesg
Während des Bootens fliegen Meldungen oft zu schnell vorbei. 
Der Kernel protokolliert alles im *Ring Buffer*. Der Befehl \`dmesg\` liest diesen Puffer aus. Häufig genutzt: \`dmesg | grep -i usb\`, um Hardware-Erkennung gezielt zu filtern.
Auf modernen, systemd-basierten Systemen kann man den gesamten Boot-Verlauf persistent im Journal mit \`journalctl -b\` (aktueller Boot) einsehen.
    `,
  },
  'lpic1-101-1-3': {
    title: 'Runlevel und Systemd-Targets wechseln',
    content: `
### SysVinit Runlevel vs. Systemd Targets
Historisch verwendete Linux "Runlevel" (0-6). Systemd ersetzt diese durch benannte "Targets" (Cibles), was flexibler ist. Für die LPIC-Prüfung muss man die Äquivalenz kennen.

| Runlevel (SysV) | Target (Systemd) | Systemzustand |
| :--- | :--- | :--- |
| **0** | \`poweroff.target\` | System wird heruntergefahren (Halt/Poweroff). |
| **1** / **s** | \`rescue.target\` | Einzelbenutzermodus (Single-User) für Wartung (Root-Login, minimales System ohne Netzwerk). |
| **3** | \`multi-user.target\` | Vollständiges textbasiertes Mehrbenutzersystem mit Netzwerk. (Typisch für Server). |
| **5** | \`graphical.target\` | Wie Level 3, plus grafische Benutzeroberfläche (X11/Wayland). |
| **6** | \`reboot.target\` | System wird neu gestartet. |

### Systemzustände steuern (systemctl)
Das Wechseln des aktuellen Zustands im laufenden Betrieb:
- \`systemctl isolate multi-user.target\`: Beendet sofort die grafische Oberfläche und wechselt in den reinen Textmodus.
- \`systemctl set-default multi-user.target\`: Ändert das *Standard-Target* für den **nächsten** Neustart dauerhaft.
- \`systemctl get-default\`: Zeigt das aktuell eingestellte Standard-Target an.

### System sicher herunterfahren
- \`shutdown -h now\`: Fährt das System sofort herunter (Halt).
- \`shutdown -r +15 "Update incoming"\`: Plant einen Neustart (Reboot) in 15 Minuten und sendet eine Warnmeldung (via \`wall\`) an alle eingeloggten Benutzer. (Abbruch mit \`shutdown -c\`).
    `,
  },

  // ─── TOPIC 2: Linux-Installation & Paketverwaltung ───
  'lpic1-102-1-1': {
    title: 'Festplattenlayout und Partitionierung',
    content: `
### MBR vs. GPT
Es gibt zwei vorherrschende Standards zur Speicherung der Partitionstabelle auf einem Laufwerk:
*   **MBR (Master Boot Record)**: Der ältere Standard. Unterstützt Festplatten nur bis maximal 2 TB. Erlaubt lokal nur **4 primäre Partitionen**. Um mehr zu nutzen, muss eine erweiterte Partition angelegt werden, die logische Laufwerke enthält.
*   **GPT (GUID Partition Table)**: Der moderne Standard, typischerweise zusammen mit UEFI verwendet. Unterstützt Festplatten bis zu 8 Zettabytes und standardmäßig bis zu **128 primäre Partitionen** pro Laufwerk.

### Trennung von Dateisystemen (Best Practices)
Auf Produktivsystemen sollte niemals alles auf einer einzigen \`/\` Partition liegen.
*   **\`/\` (Root)**: Enthält den Kernel, Systemwerkzeuge, Konfigurationsdateien und elementare Programme.
*   **\`/home\`**: Benutzerdaten. Die Trennung ermöglicht eine Neuinstallation des Root-Systems, ohne dass Benutzerdaten oder persönliche Einstellungen (Dotfiles) verloren gehen.
*   **\`/var\`** (Variable Daten): Beinhaltet Logs (\`/var/log\`), Spools und Datenbanken. Wachsen diese Dateien rapide an (z.B. Amok laufendes Logfile), darf dies nicht die Root-Partition vollschreiben und das System zum Absturz bringen. Daher wird \`/var\` separat partitioniert.
*   **\`Swap\`**: Virtueller Arbeitsspeicher (Auslagerungspartition). Wenn der physische RAM voll ist, lagert der Kernel ungenutzte Speicherseiten hierhin aus.
    `,
  },
  'lpic1-102-1-2': {
    title: 'Bootmanager installieren (GRUB 2)',
    content: `
### GRUB 2 (GRand Unified Bootloader)
GRUB 2 ist der Standard-Bootloader der meisten Linux-Distributionen. Die Konfiguration ist komplexer als beim veralteten GRUB Legacy, da sie aus Vorlagen generiert wird.

### Wichtige Dateien und Verzeichnisse:
1.  **/etc/default/grub**: Die zentrale Konfigurationsdatei für den Administrator. Hier legt man Timeout (\`GRUB_TIMEOUT\`), Standardbetriebssystem und Kernel-Parameter (\`GRUB_CMDLINE_LINUX\`) fest.
2.  **/etc/grub.d/**: Enthält Shell-Skripte, welche die tatsächliche Konfiguration generieren (z.B. \`10_linux\` sucht Kernel, \`30_os-prober\` sucht andere Betriebssysteme wie Windows).
3.  **/boot/grub/grub.cfg** (Debian/Ubuntu) oder **/boot/grub2/grub.cfg** (RedHat/CentOS): Die generierte, vom Bootloader gelesene Enddatei. **Achtung: Diese Datei darf nicht manuell bearbeitet werden!**

### GRUB aktualisieren und installieren:
Nach Änderungen an \`/etc/default/grub\` muss die Konfiguration neu kompiliert werden:
*   Debian/Ubuntu: Meist nutzt man den Wrapper \`update-grub\`. (Der zugrundeliegende Befehl lautet \`grub-mkconfig -o /boot/grub/grub.cfg\`).
*   GRUB in den Bootsektor schreiben: \`grub-install /dev/sda\` schreibt den Bootcode in den MBR (oder die UEFI-Partition) der angegebenen Festplatte.
    `,
  },
  'lpic1-102-1-3': {
    title: 'Shared Libraries (Gemeinsame Bibliotheken)',
    content: `
### Shared Objects (.so)
Anstatt jede Funktion (z.B. "Wie zeichne ich ein Fenster") statisch in jedes Programm direkt einzukompilieren (was Programme riesig machen würde), nutzt Linux gemeinsame Bibliotheken (.so - Shared Objects), die zur Laufzeit dynamisch geladen werden.

### Abhängigkeiten ermitteln
*   **\`ldd\`** (List Dynamic Dependencies): \`ldd /bin/bash\` zeigt an, welche Shared Libraries (und in welcher Version/Pfad) das Programm \`bash\` benötigt, um starten zu können.

### Bibliotheks-Cache und Konfiguration
Das Durchsuchen der gesamten Festplatte nach der passenden .so-Datei beim Programmstart wäre zu langsam. Daher gibt es einen Pfad-Index und Cache.
*   **\`/etc/ld.so.conf\`** (und \`/etc/ld.so.conf.d/\`): Textdateien, in denen die Pfade stehen, in denen das System nach Bibliotheken suchen soll (z.B. \`/usr/local/lib\`).
*   **\`/etc/ld.so.cache\`**: Die zur Beschleunigung generierte Binärdatei des Caches.
*   **\`ldconfig\`**: Das Update-Programm. Wenn neue Bibliotheken manuell hinzugefügt wurden oder die conf-Datei geändert wurde, MUSS einmalig \`ldconfig\` als root ausgeführt werden, um den Cache (\`/etc/ld.so.cache\`) neu zu generieren!

### Temporäre Pfade (LD_LIBRARY_PATH)
*   \`export LD_LIBRARY_PATH=/opt/meineapp/lib:$LD_LIBRARY_PATH\` weist den dynamischen Linker an, temporär für diese Sitzung bevorzugt im angegebenen Verzeichnis nach Bibliotheken zu suchen.
    `,
  },
  'lpic1-102-1-4': {
    title: 'Debian-Paketverwaltung (dpkg, apt)',
    content: `
Die Debian-Welt (Ubuntu, Mint, Kali, etc.) basiert auf \`.deb\`-Paketen.

### Die unterste Ebene: dpkg
\`dpkg\` arbeitet ausschließlich lokal. Es kann Pakete installieren, entfernt oder abfragen, kann aber **keine** Abhängigkeiten automatisch aus dem Internet herunterladen.
*   \`dpkg -i file.deb\` (Install): Installiert das Paket. (Bricht ab, wenn Abhängigkeiten fehlen).
*   \`dpkg -r paket\` (Remove): Deinstalliert das Programm, lässt jedoch Systemkonfigurationsdateien (in \`/etc/\`) intakt.
*   \`dpkg -P paket\` (Purge): **Vollständige** Deinstallation, löscht das Programm UND alle zugehörigen Konfigurationsdateien restlos.
*   \`dpkg -l\`: Listet alle auf dem System installierten Pakete auf.
*   \`dpkg -S /etc/apt/sources.list\` (Search): Rückwärtssuche. Zeigt an, zu welchem Paket eine existierende Datei gehört.

### Intelligente Netzwerklösung: APT
APT (Advanced Package Tool) ist die High-Level-Oberfläche. Es löst Abhängigkeiten vollautomatisch auf, indem es Paketinformatinen ("Repositories") aus dem Internet einliest. Diese Quellen sind in **\`/etc/apt/sources.list\`** (und dem Unterordner \`.d/\`) konfiguriert.

*   \`apt update\`: (Bzw. \`apt-get update\`). Aktualisiert nur die **Paketlisten** (den Index) vom Server. Es wird noch kein Programm aktualisiert.
*   \`apt upgrade\`: Installiert die neuesten Versionen aller installierten Pakete.
    `,
  },
  'lpic1-102-1-5': {
    title: 'RPM- und YUM/DNF-Paketverwaltung',
    content: `
Systeme der Red Hat-Familie (RHEL, CentOS, Fedora, AlmaLinux, aber auch openSUSE) verwalten Software via \`.rpm\` (Red Hat Package Manager).

### Unterste Ebene: RPM
Ähnlich wie dpkg arbeitet rpm nur mit lokalen Dateien und löst keine externen Netzwerk-Abhängigkeiten auf.
*   \`rpm -i paket.rpm\` (Install). Häufig als \`-ivh\` (Install, Verbose, Hash) genutzt für einen Fortschrittsbalken.
*   \`rpm -U paket.rpm\` (Update/Upgrade): Installiert ein Paket oder aktualisiert es, falls schon vorhanden.
*   \`rpm -e paket_name\` (Erase): Deinstalliert ein Paket.
*   **Abfragen (Query - \`q\`)**:
    *   \`rpm -qa\` (Query All): Listet alle installierten Pakete.
    *   \`rpm -ql paket\` (Query List): Listet alle Dateien auf, die durch das Paket auf der Festplatte abgelegt wurden.
    *   \`rpm -qi paket\` (Query Info): Zeigt Details (Version, Datum, Beschreibung).
    *   \`rpm -qf /bin/bash\` (Query File): Welches Paket hat diese spezifische Datei installiert?

### High-Level Paketmanager: YUM / DNF
\`yum\` war lange der Standard. Moderne Red Hat Derivate (ab Fedora 22 / RHEL 8) nutzen das weitaus schnellere und effizientere **DNF** (Dandified YUM) mit denselben Befehlen. (openSUSE nutzt \`zypper\`). Repository-Konfigurationen liegen in \`/etc/yum.repos.d/\`.

*   \`dnf install paket\`: Lädt Paket samt aller Abhängigkeiten aus dem Netz.
*   \`dnf update\`: Aktualisiert das komplette System.
    `,
  },

  // ─── TOPIC 3: GNU- und UNIX-Befehle (103) ───
  'lpic1-103-1-1': {
    title: 'Arbeiten auf der Kommandozeile',
    content: `
Die Kommandozeile (CLI) ist die primäre Administrationsschnittstelle, meist angetrieben von der Bash (Bourne Again SHell).

### Arten von Befehlen
Beim Eingeben eines Kommandos sucht die Bash in einer strikten Reihenfolge:
1.  **Aliase**: Ein vom Benutzer definierter Kurzname (z.B. \`alias ll='ls -l'\`).
2.  **Shell Built-ins**: Interne Befehle, die direkt im Programmcode der Bash integriert sind und ultraschnell ausgeführt werden (z.B. \`cd\`, \`pwd\`, \`export\`, \`echo\`). Hierfür gibt es keine separate Datei auf der Festplatte.
3.  **Programme / Binärdateien**: Externe ausführbare Dateien. Das System durchsucht alle Ordner, die in der Umgebungsvariable \`$PATH\` aufgelistet sind (z.B. \`/usr/bin\`, \`/bin\`), bis es das Kommando (z.B. \`ls\`, \`cat\`, \`tar\`) findet.

### Kommandos analysieren
*   **\`type befehl\`**: Sagt Ihnen, *welche* Art von Befehl gestartet wird (z.B. liefert \`type cd\` die Antwort "cd is a shell builtin").
*   **\`which befehl\`**: Wenn der Befehl eine externe Datei ist, liefert \`which\` den absoluten Pfad zur ausführbaren Binärdatei (z.B. \`/usr/bin/cat\`).
    `,
  },
  'lpic1-103-1-2': {
    title: 'Shell- und Umgebungsvariablen',
    content: `
### Lokale vs. Globale Umgebungsvariablen
*   **Lokale Variablen** (Shell-Variablen): Werden mit z.B. \`VAR="Hallo"\` deklariert. Sie gelten **nur** in der exakt ausführenden Shell-Sitzung. Ein aus der Shell heraus gestartetes Skript oder Subshell kennt diese Variable nicht und sie wäre leer. (Ohne Leerzeichen am Gleichheitszeichen!).
*   **Umgebungsvariablen** (Environment Variables): Werden mit **\`export VAR\`** vererbt. Die Variable \`VAR\` wird nun ein Teil der globalen "Umgebung" und wird automatisch an jeden gestarteten Unterprozess oder Skript weitergegeben.
*   \`env\` listet alle aktiven Umgebungsvariablen auf.

### Die Befehlshistorie (History)
Die Bash merkt sich eingegebene Befehle im Speicher und speichert sie beim Schließen in die Datei \`~/.bash_history\`.
*   \`history\`: Listet alle gespeicherten Befehle mit einer Nummer auf.
*   \`!143\`: Führt Befehl Nummer 143 sofort erneut aus.
*   \`!!\`: Führt den **allerletzten** Befehl sofort erneut aus (oft genutzt für \`sudo !!\`).
*   **\`Ctrl+R\`**: Startet eine interaktive, rückwärtsgerichtete Suche (Reverse-i-search) durch die Historie anhand eingegebener Textfragmente.
    `,
  },
  'lpic1-103-2-1': {
    title: 'Textströme mit Filtern verarbeiten',
    content: `
Unter UNIX-Systemen ist nahezu alles Text, der in Pipelines verarbeitet werden kann.

### Textdateien ansehen
*   \`cat\`: (Concatenate) Wirft den kompletten Dateiinhalt unformatiert in die Standardausgabe (Terminal). 
*   \`head -n 20 datei\`: Zeigt nur die obersten 20 Zeilen an.
*   \`tail -n 20 datei\`: Zeigt nur die untersten/letzten 20 Zeilen an.
*   **\`tail -f\`** (Follow): Eine extrem wichtige Server-Funktion! Zeigt das Dateiende und blockiert. Wenn ein anderes Programm nun neue Log-Zeilen an die Datei anfügt, werden diese in Echtzeit auf dem Bildschirm ausgegeben (für Live-Log-Monitoring).

### Text manipulieren
*   **\`wc\`** (Word Count): Zählt Zeilen, Wörter und Zeichen. Die wichtigste Option ist **\`-l\`** (Zeilen zählen), um beispielsweise herauszufinden, wie viele Dateien ein \`find\`-Kommando gefunden hat.
*   **\`sort\`**: Sortiert Zeilen alphabetisch. Nützlich ist \`-r\` für umgekehrte Sortierung und \`-n\` für korrekte numerische (mathematische) Sortierung.
*   **\`cut\`**: Schneidet spaltenbasierte Daten aus. Beispiel \`/etc/passwd\`: \`cut -d: -f 1\` (-d legt das Trennzeichen fest, -f wählt das Feld/die Spalte 1 aus).
    `,
  },
  'lpic1-103-3-1': {
    title: 'Grundlegende Dateiverwaltung',
    content: `
Dateioperationen auf der Kommandozeile.
*   \`cp -r quelldatei ziel\`: Kopieren. Das \`-r\` (rekursiv) ist zwingend erforderlich, wenn Ordner mit Inhalten kopiert werden sollen.
*   \`mv \`: Verschieben. Unter Linux gibt es kein \`rename\`-Kommando zur Einzeldatei-Umbenennung für Endnutzer. Eine Datei im gleichen Ordner zu verschieben (\`mv file.txt neues_file.txt\`) *ist* der Umbenennungsvorgang.
*   \`rm -rf\`: (Remove) Dateilöschung. Mit \`-r\` (verzeichnis+inhalt) und \`-f\` (force - ohne Nachfrage ignorieren fehlender Dateien) extrem destruktiv, bitte mit Vorsicht rooten!

### Dateien suchen (find vs locate)
Es gibt zwei grundlegend verschiedene Ansätze:
1.  **\`locate datei\`**: Nutzt eine indexierte Datenbank (\`mlocate.db\`), die i.d.R. nächtlich per cron-Job aktualisiert wird. Es ist extrem schnell (Millisekunden). **Nachteil**: Wenn Sie eine Datei vor 5 Minuten erstellt oder gelöscht haben, kennt \`locate\` sie noch nicht.
2.  **\`find / -name "datei"\`**: Durchsucht rekursiv und in Echtzeit das Speichermedium. Kostet viel Rechenleistung und Zeit, findet dafür aber immer den garantiert aktuellen Zustand. Kann auch nach Dateigröße (\`-size\`) oder Alterungslimit (\`-mtime\`) suchen.
    `,
  },
  'lpic1-103-3-2': {
    title: 'Archivierung und Datenkompression',
    content: `
### TAR - Das Bandarchiv
Das Tool \`tar\` (Tape Archive) kombiniert viele Dateien und Verzeichnisse intelligent in eine einzige Containerdatei (Tarball). **Wichtig: \`tar\` selbst komprimiert Daten von Haus aus NICHT, es reiht sie nur aneinander!**

Um Platz zu sparen, schleust \`tar\` den Datenstrom direkt durch externe Kompressionsalgorithmen (z.B. \`gzip\`, \`bzip2\`, \`xz\`).
*   **\`tar -czvf archiv.tar.gz ordner/\`** (Einpacken)
    *   **\`c\`**: Create (Archiv erstellen)
    *   **\`z\`**: Jage den Datenstrom durch den GZIP-Algorithmus (.gz)
    *   \`v\`: Verbose (Listet Dateinamen beim Verarbeiten im Terminal auf)
    *   \`f\`: File (Muss unmittelbar vor dem gewünschten Archivdateinamen direkt stehen, in das exportiert wird)
*   **\`tar -xvf archiv.tar.gz\`** (Auspacken)
    *   **\`x\`**: eXtract (Archiv entpacken). Eine GZip-Erkennung geschieht bei modernen tar-Versionen meist automatisch und \`z\` muss nicht zwingend angegeben werden.
    `,
  },
  'lpic1-103-4-1': {
    title: 'Umlenkung von Standard-Ein/Ausgabe (Redirection)',
    content: `
Die Interprozesskommunikation passiert unter Linux in 3 standardisierten Kanälen (Strömen).
*   **Standard Input (\`stdin\` - 0)**: Die Dateneingabe (meist die Computertastatur).
*   **Standard Output (\`stdout\` - 1)**: Der reguläre, erfolgreiche Ausgabe-Datenstrom eines Programmes, den es auf das Terminal schreibt.
*   **Standard Error (\`stderr\` - 2)**: Ein zweiter, unabhängiger Strom, den Programme *nur* für kritische Warnungen oder Fehlermeldungen (z.B. "Permission denied") nutzen.

### Umleiten (Redirection)
Man kann diese Ströme vom Monitorfenster wegleiten (in Textdateien):
*   **\`> datei.txt\`** (Überschreiben): Leitet \`stdout\` (1) in eine Datei. **Warung**: Die Zieldatei wird radikal genullt, alles vorherige überschrieben!
*   **\`>> datei.txt\`** (Anhängen): Zieldatei bleibt intakt, der Text wird ans Dokumentenende als neue Zeilen hinzugefügt.

### Fehler loggen und Müll entsorgen (2>&1)
Oftmals will man, dass ein Programm sein Erfolgsresultat in eine Datei speichert, jedoch auch Absturzmeldungen geloggt werden.
\`befehl > result.txt 2> error.txt\` trennt beide Kanäle sauber.

Ein bekannter Kniff (z.B. beim sauberen Ausführen mittels Crontab im Hintergrund) ist \`find / -name "secret" > /dev/null 2>&1\`.
*   Das \`stdout (1)\` wandert in das Daten-Schwarze Loch \`> /dev/null\`.
*   Darauf folgtein \`2>&1\`: Dies befiehlt dem System, den Fehlerkanal (2) mit dem regulären Kanal (1) zu verknüpfen. Folglich fließen nun auch ausnahmslos alle Fehlermeldungen in die Nicht-Existenz! Das Kommando bleibt 100% stumm.
    `,
  },
  'lpic1-103-4-2': {
    title: 'Die Pipeline-Architektur (Pipes: |)',
    content: `
### Pipes \`|\` - Die Verkettung von Programmen
Die UNIX-Philosophie lautet: "Schreibe Programme, die nur eine Sache tun, und diese gut." 
Die Pipe \`|\` ermöglicht es, die Ausgabe (stdout) des ersten Programms nicht auf den Bildschirm (\`>\`) abzweigen, sondern direkt in den Schlundeingang (stdin) des NÄCHSTEN Programms hineinzudrücken!
Beispiel: \`ls -l /etc | grep ".conf" | wc -l\` (Listet alle Dateien -> filtert die Liste nur noch nach \`*.conf\` Einträgen -> und übergibt diese kleine Restliste, um die Zeilen von wc zählen zu lassen).

### Der Befehl \`tee\` (Das T-Stück)
Oftmals möchte man bei einer langen Rohrinspektion den Zustand auf halbem Wege beobachten, und zugleich im Terminal am Ende mitfiltern.
\`ls -l /etc | tee dateiliste.txt | grep ".conf"\`
Der Befehl \`tee\` liest die von links hereinkommende Flüssigkeit (Datenstrom), und wie ein Klempner T-Stück kopiert er es rechts weiter zur Pipe (an \`grep\`), fängt aber gleichzeitig eine identische Dateikopie auf der Festplatte ein (\`dateiliste.txt\`)!
    `,
  },
  'lpic1-103-5-1': {
    title: 'Prozessmanagement - Prozesse steuern',
    content: `
Unter Linux erhält absolut jede gestartete Aufgabe eine einmalige Prozess-ID (PID). \`systemd\` (oder SysVinit) besitzt die PID 1.

### Überwachung
*   **\`ps aux\`**: Erstellt einen "eingefrorenen Schnappschuss" über alles: \`a\` (Prozesse fremder User einschließen), \`u\` (im benutzerlesbaren Format), \`x\` (Dämonen, die nicht an Terminals gebunden sind).
*   **\`top\`** / **\`htop\`**: Das Pendant zum Windows Task-Manager. Läuft laufend im Terminal, sortiert die Apps nach CPU/RAM-Auslastung dynamisch in Sekundenintervallen.

### Prozesse abschießen (Signale senden: kill)
*   **\`kill [PID]\` (SIGTERM - Signal 15)**: Das höfliche Beenden. Sie schicken dem Programm die Bitte, sich doch herunterzufahren. Das Programm erhält die Chance, Speicher freizugeben, offene Systemdateien sauber abzuschließen und Datenbankverbindungen zu unterbrechen, ehe es kapituliert.
*   **\`kill -9 [PID]\` (SIGKILL)**: Die brutale Hinrichtung. Wenn eine App sich in Lags vollkommen im Arbeitsspeicher verrannt (Hängengeblieben / Zombie) hat, schützt sich Linux. Das Signal -9 kann nicht ignoriert werden; der Kernel selbst reißt dem Prozesskomplex den Speicherstecker, verliert aber ungesicherte Dateiinhalte.
    `,
  },
  'lpic1-103-5-2': {
    title: 'Prozesse im Hintergrund (Background/Foreground)',
    content: `
Arbeiten auf eine CLI-Sitzung in Bash bedeutet standardmäßig Blockade: Wenn Sie ein riesiges Programm (ein 2-Stunden-Backup) im Terminal ausführen (Foreground / Vordergrundlauf), friert ihre Terminaleingabeleser für diese Zeit stumm ein.

### Jobkontrolle
*   **Das Ampersand \`&\`**: Wenn man ein Kommando umgehend beim Abschicken als Hintergrundauftrag im Geheimen werkeln lassen möchte, hängt man ein simples kaufmännisches Und-Zeichen an das Linienende: \`tar -czf backup.tar.gz ./daten &\`. Bash gibt sofort frei, man kann im Terminal ungestört weiter agieren!
*   **Pausierung via \`Ctrl+Z\`**: Wenn Sie aus versehen ein Monstrum ohne \`&\` loslassen, frieren Sie es über die Tastaturkombination auf dem Terminal ein (Suspended Stop).
*   **\`bg\`** (Background): Schickt den soeben mittels CTRL+Z pausierten, hängen gebliebenen Task zum endgültigen Weiter-Laufen in den verborgenen Hintergrund.
*   **\`fg\`** (Foreground): Ein verborgener "Hintergrund"-Task wird wieder in den grellen Fokus des aktiven Vordergrund Terminal-Maus-Lesefluss gepeitscht.
    `,
  },
  'lpic1-103-6-1': {
    title: 'Prozesspriorität anpassen (Nice-Werte)',
    content: `
Auf einem Server kämpfen Datenbank, Webserver und Backup-Skript simultan jede Millionstelsekunde um pure Prozessorleistung (CPU). Der Linux-Kernel entscheidet durch Gewichtungen, wer Vorrang hält: Der **Nice-Wert** (NI). (Zu übersetzen mit "Wie zuvorkommend/Zurückhaltend bin ich zu anderen Prozessen?")

### Die Metrik der Prioritäten (-20 bis +19)
Voreinstellungen für Apps starten mit NI = 0.
*   Ein positiver NI-Wert (z.B. **+10**) heisst: "Ich bin sehr nett." Mein Prozess drängelt nicht, macht Platz und läuft bei Vollast im System nur mit "übrigem Restzeitkontingent".
*   Ein negativer Wert (z.B. **-15**) heisst: "Ich bin knallhart egoistisch und fordernd absolutste Höchstpriorität beim Rechnen, Restliche Systemwelt und Nebenprogramme haben zu pausieren".

### Prioritäten korrigieren
*   **\`nice -n 15 backup.sh\`**: Startet einen *neuen* Befehl sofort mit einer vermindert CPU-fressenden "angenehmen" Charakteristik (+15).
*   **\`renice -n -5 8322\`**: Ändert die Priorität live von einem bereits in Ausführung arbeitenden CPU-PID (8322) !
*   **Regularien:** Standard-Linux-Benutzer dürfen immer nur Nettigkeitswerte spendieren (+), indem Sie Rechenleistungen frei abgeben. **Einzig der Superadministrator (root) darf sich aus egoistischen Motiven mit Negativwerten (-20) höhere Auslastungsanteile vom Kernel fordern!**
    `,
  },
  'lpic1-103-7-1': {
    title: 'Reguläre Ausdrücke (RegEx)',
    content: `
Basic Regular Expressions (BRE) ist Mustermatchingssprache und das Werkzeug-Herz der Suchwerkzeuge wie \`grep\` / \`sed\`.

1.  **\`^\` (Circumflex / Dach)** - Zeilenanfang. Der String muss strikt ab dem ersten Letter direkt gelten. (\`^Hallo\`).
2.  **\`$\` (Dollar)** - Zeilenende. Nichts darf danach Textuell in der Zeile aufkommen. (\`log$\`).
3.  **\`.\` (Punkt)** - Stellvertreter für ein **einzelnes** Zeichen beliebiger Herkunft (Buchstabe, Zahl oder Leerzeichen) exklusive der Zeilenumbruch.
4.  **\`*\` (Sternchen)** - Bedeutet nicht "Alles" wie der Window-Joker! Das Sternchen ist ein Multiplikator und weist an: Das *unmittelbar linke davorstehende* Zeichen kommt **null oder beliebig oft** vor (Z.B. \`ab*\` erwischt in grep das Einzel-Wort *a* sowie *abbbbb*). Kombination mit Punkt (\`.*\`) bedeutet: Eine beliebige Zeichenmenge x-mal (\`.*\` = beliebig alles erwischt!).
5.  **\`[ ]\` (Zeichenklassen)** - Trifft nur auf **genau einc** in den eckigen Klammern aufgelistete Buchstaben. \`[abc]\` (Nur a, oder b oder c!). Mit Zirkumflex drin \`[^0-9]\` negiert dies auf das Gegenteil: "Finde exakt ein Einziges Zeichen, welches jedoch unter keinen Umständen eine Ziffer darstellt".
    `,
  },
  'lpic1-103-8-1': {
    title: 'Textbearbeitung mit \`vi\`: Die Basisfunktionen',
    content: `
Der \`vi\` (und sein modernerer Clone \`vim\`) ist auf beinahe ausnahmslos jedem unixoiden Server installierter Standard-Texteditor. Der Verzicht auf die Benutzung der Maus hat ein Konzept mit drei Tasten-Modi zur Folge:

1.  **Befehlsmodus (Command Mode)**: Der Standardmodus sofort nach dem Dateiladen, sowie via **ESC (Escape)** Taste aufrufbar. Hier schreibt man keinen Buchstabentext! Tastatureingaben werden zu puren Befehlen! 
    *   \`dd\`: Löscht die momentane Cursor-Zeile endgültig. 
    *   \`yy\`: (Yank) Kopiert die aktuelle Zeile in den flüchtigen Speicher. 
    *   \`p\`: (Put) Fügt eingeflochtenes/kopiertes ein. 
    *   \`u\`: (Undo) Ein Schritt der Dateiänderungen rückwärts.
2.  **Eingabemodus (Insert Mode)**: Erreicht man via Cursor-Setzen der Taste \`i\` (Insert) (oder \`a\`, \`o\`). Hier endlich gleicht die Schreibmaschine der regulären Textverarbeitung. Verlassen tut man diesen Editor Modus zwingend wieder mit \`ESC \`!
3.  **Kommandozeilenmodus (Ex Mode)**: Erreicht per drücken von Doppelpunkt \`:\` im Befehlsmodus; Hier können Speicherbefehle erteilt werden. \`:w\` (Write, also Sichern).  \`:q\` (Quit, Beendet Programm). \`:wq\` (Speichern+Raus!). Um nicht-gespeicherten Müll abzutun und Vi erzwungend zu verlassen ruft man den Hard-Breaker aus \`:q!\`.
    `,
  },

  // ─── TOPIC 4: Geräte, Dateisysteme & FHS (104) ───
  'lpic1-104-1-1': {
    title: 'Dateisysteme erstellen (formatieren)',
    content: `
Das Festplattenaufteilen via \`fdisk /dev/sdb\` zieht logische Boundaries, bereitet das Datengrab jedoch niemals auf das Eingehen tatsächlicher Filesystem-Dateien vor (Formatierung fehlt).

### Den Bauleiter herbeirufen (mkfs)
Das Metaprogramm **\`mkfs\`** (Make File System) übernimmt den architektonischen Rohbau und das Giessen des Ext4-Betonfundamentes.
*   **\`mkfs.ext4 /dev/sda1\`**: Formatiert und baut die Ext4-Journaling Struktur sowie die indexierte Tabelle für Dateiregister (Inodes) auf. 
*   **\`mkswap /dev/sdb2\`**: Eine Swap-Partition (Auslagerungsspeicher für RAM-Engpässe) benötigt eine gesonderte Grundüberholung von \`mkswap\`, da sie im Regulären Verzeichnisbetrieb vollkommen unsichtbar existiert. (Aktiviert wird diese final über \`swapon\`).
    `,
  },
  'lpic1-104-2-1': {
    title: 'Festplattenplatz kontrollieren & fsck',
    content: `
Systemspeicherverwaltung teilt sich zumeist in ein Macro-Blick und eine Dateilupe von zwei Tools.
*   **\`df -h\`** (Disk Free): Das Globale Gesamtbild. Zeigt für jedes eingehängte Laufwerk die Speichergröße, belegte Byte und die freien GBs an. Das \`-h\` übersetzt die Ausgabe aus unlesbaren Kilobytes in Menschenfreundliche (Human-Readable) formatierungen wie Mega/Terabytes.
*   **\`du -sh [Ordner]\`** (Disk Usage): Der Detektiv. Analysiert die physikalische Größe von allen Inhalten innert eines genauen Verzeichnisses. Option \`-s\` ist essentiell (Summarize), dies komprimiert den endlos durchrollenden Terminal-Detail-Ausdruck auf eine prägnante einzige resultierende Gesamtzeile!

### Dateisystem-Checks - Die Heilige fsck-Regel
**\`fsck\`** (File System Check) detektiert verwaiste Inodes aus dem Index oder falsche Blockzuordnungen (z.B. nach hartem Stromausfall) und repariert Ext2/3/4 Formate in das Reparatur-Register \`/lost+found\`.
*(Für RedHat-basierte OS die oftmals große XFS Dateisysteme statt Ext4 nutzen, ist stattdessen \`xfs_repair\` aufzurufen)*.

**🔥 ABSOLUTE PRÜFUNGS- UND PRAXIS-WARNUNG 🔥**
Es ist das absolute Todesurteil, \`fsck\` auf einer aktuell schreibbar in den Dateibaum eingehängten (gemounteten *rw*) Partition anzuwenden. Verändern Administratoren via Skripte oder fsck am offenen Dateisuchbaum des Systems aktiv etwas, während Nutzer gleichzeitig Daten hinterlassen, zerfetzt es die Inode-Tabelle der Festplatte dauerhaft in Korruption. Entmounten zur Prüfung, oder via Rescue-ISO überprüfen! 
    `,
  },
  'lpic1-104-3-1': {
    title: 'Festplatten Einhängen (Mounten & fstab)',
    content: `
Wie bindet man USB-Sticks oder externe TB-Festplatten an den Dateibaum der Server-Ordnerlogik (\`/\`) an?

Linux verwendet **Mountpoints**. Man weist dem physischen Gerät (z.B. \`/dev/sdc1\`) ein ganz triviales (und möglichst leeres) existierendes Verzeichnis als Andockpunkt zu (\`mount /dev/sdc1 /mnt/stick\`).

### Permanente Mounts via /etc/fstab
Ein unentbehrliches Kerneltabellenwerk, welches abgefragt wird (bzw. implizites ausführen von \`mount -a\`) beim Init-Boot-Prozess.

Anstatt eines volatilen Gerätenamens wie \`/dev/sda\` (die Verkabelung ändert sich durch neues Anstecken ans Controllerboard), verlangt Best Practice die Speicherung über **UUID** (Globally Unique Identifier, welcher sich per Kommand \`blkid\` exzerpieren lässt).  

Eintrag besteht aus 6 Spalten:
1.  **Block-Device / UUID**: (z.B. \`UUID=1b3a-...\`)
2.  **Mountpoint-Verzeichnis**: Wohin hängen? (\`/var\`, \`/boot\`, \`none\` für SWAP)
3.  **Filesystem/Typ**: (Ext4, Xfs, vfat, iso9660)
4.  **Optionen (Defaults)**: Beinhaltet rw (lesen/Schreiben), async, suid, usw.
5.  **Dump / Fsck Passes**: Zahlenkolonne für Bootcheckpriorität.
    `,
  },
  'lpic1-104-5-1': {
    title: 'Berechtigungen, SUID und Sticky Bit',
    content: `
### Unix Oktal Standard-Rechte (U-G-O)
Die Trias lautet: **U**ser, **G**roup, **O**thers.
Sämtliche Rechte berechnen sich als aufaddierbare numerische Skala für lesen (\`r=4\`), schreiben (\`w=2\`) und Skriptausführung oder Durchgang durch ein Ordnerverzeichnis (\`x=1\`). 
*   Bspl-Datei \`644\`: Der Autor hat Lese/Schreibzugriff (4+2=6). Die assoziierte Gruppe sowie gesamte externe Anwender haben Leserecht (jeweils nur 4). Sichtbar als \`-rw-r--r--\`.
Rechte und Eigentumszuweisungen variiert man mittels der Konsolenprogramme \`chmod\` (Change Mode), sowie \`chown\` (Change Owner User/Group).

### Spezialbits
Das Fundament komplexer Sicherheitspolitik am Linux-Kern.
*   **Sticky Bit (\`t\`)**: Oft sichtbar bei \`/tmp\` (wX...r-**t**). Erlaubt ist jedem der Welt (777 Oktal) darin Logs abzulegen, aber das "t" schützt vor der Tragödie aus böswilligen Leuten! Dank des Bits kann ausschließlich der Autor oder Root eine bestimmte Datei umbenennen oder Auslöschen; Ein Random-Anwender kann somit nicht die gesammelten Logs des App-Entwicklers in public Temp-ordnern entführen!
*   **SetUID / SUID (\`s\` statt x auf User-Oktal)**: Sichtbar bei den Privilegierten (z.B. in Ausführung \`/usr/bin/passwd\`). Ein Passwordänderungslogik erfordert zwingend pure, harte Root-Schreib-Zugriffe auf die Systemdatei \`/etc/shadow\`. Das S-Bit befähigt den einfachen Standardbenutzer für **lediglich jenen Bruchteil einer Sekunde beim Auslösen** die ungeteilte Root-Macht anzunehmen, um seine Aktion des Codes in Vollzug zu verrichten. (Fatalster Sicherheitsbruch für Hacker, wenn z.B. eine SUID auf einer Bash-Shell Kopie gelassen wird!).
    `,
  },
  'lpic1-104-6-1': {
    title: 'Dateiverknüpfungen (Hard vs Symbolic Links)',
    content: `
Der \`ln\`-Befehl klont Pfade auf 2 stark konträre Ansätze.

### Symbolische Links (Softlinks, \`ln -s\`)
Die Unix-Sichtweise auf die ordinäre Windows-Abkürzung (.lnk). Ein generierter Soft-Link ist faktisch eine kleine winzige neue Datei. Inhalt derer: Der lange textausgetippte Pfadname der Verweisquelle! (Die \`ls -l\` Ansicht zeigt dann beispielsweise ein \`l\` vorne, sowie explizit dies an: \`-> /opt/quelle\`).
*   **Vorteil**: Er referenziert pfadgebunden, d.h. man kann per Symbolischen Link auch Netzwerkspeicher, fremde gemountete Festplatten \`/mnt/sdb1/\` und ganz entfernte Ext-Dateisysteme leicht überbrücken und erreichen.
*   **Tragödie**: Sofern die Originaldatei woanders positioniert via \`mv\` verschoben wurde oder sie gelöscht wird, zeigt der Shortcut-Text im weiten auf das Nichts! Es entsteht ein Roter Toter Verweis, der nirgendwo ankommt ("Broken Link").

### Hard Links (Feste Verknüpfung, \`ln\`)
Basiert zutiefst in dem Inneren Kernelfundament ext4 der inodes! 
Er ist pure Duplikation. Erstellen Sie drei Hardlinks für "log1", manifestieren Sie nicht Kopien des Datenfiles vom RAM-Speicherplatz! Linux registriert *drei gleichberechtigte separate Dateinamen*-Einträge im Ordnerverzeichnis, welche exakt auf denselben physischen Register-Block (Zellengnummer: \`Inode\`) der Chipstruktur auf das *selbige selbe einzelne Bytesatz Datenfundament* verweisen.
*   **Riesenvorteil**: Löschen Sie per \`rm\` versehentlich Original-Datei1... bleiben logisch weiterhin intakt die zwei Brüder unbeschadet lesbar erhalten, deren Namen noch auf den Speicherinode gucken. Die wirkliche Löschung des Systemsektors im Festplattenspeicher geschieht wirklich erst gänzlichst, sobald nachwirkend auch der allerletzte verbleibende Hardlink getilgt worden sei.
*   **Minuspunkt**: Hardlinks verkörpern hardwaretechnisches Zeuging der Inodes der exakten Platte! Daher sind diese unfähig, eine externe Festplattenbarriere über Partitionswechsel (\`sda\` -> \`sdb\`) in jeglicher Hinsicht oder in Netzwerke hinein aufzubauen! Sie funktionieren nur isoliert auf dem eigenen aktuellen Filesystem Volume Medium!
    `,
  },
  'lpic1-104-7-1': {
    title: 'Linux FHS (Filesystem Hierarchy Standard)',
    content: `
### FHS - Orientierung und Struktur
Ein vom LPI forciertes und zertifiziertes Konzept. Der Hierarchie-Standard zwingt Distributionen (wie Arch, Alpine, Suse), Pfadgepflogenheiten nicht heillos wild durcheinander zu strukturieren, um Netzwerk-Werkzeugen kompatibilität im Aufbau zu versichern.

*   **\`/usr\`** (Unix System Resources): Hier lagert nahezu alles vom OS (Kommando-Binaries z.B. \`/usr/bin/cat\`, Quelltexte oder Programmhandbücher). Alles hier ist *Read-Only* und gehört der unveränderbaren Systemsoftware auf allen Konsolen der Firma und bleibt starr ohne Modifizierung.
*   **\`/var\`** (Variabler Inhalt): Der Pool wachsender Fluktuation! Logfiles, Druckeraufträge, Systemzustände oder relationale MySQL-Datenbank-Rohdaten. Die FHS Konvention erzwingt zwingend von App-Schöpfern diese Müllabladestation, um vor Root-Zerstörung gefeiht zu sein.
*   **\`/etc\`** (Et Cetera): Die Zentrale Steuerkonfiguration! Alles vom Hostname zum Netzwerk, Systemdiensten oder Firewall-Textdokumenten. Ein ehernes Gesetz gebietet dem FHS: Unter /etc herrscht ein Binäres Vacuum! Niemals darf etwas ausführbares/compiled (*.exe / Binärcode) in dieses Setup-Silos Verzeichnis gelangen!
*   **\`/opt\`** (Optional / Zusatzprogramme): Die Quarantänezone proprietärer Fremdprogramme! Ein Third-Party Megakonzern wie Oracle, GoogleChrome oder TeamViewer bringt seinen ganzen Monolithen-Software-Klotz komplett isoliert in sich verschweißt selbst-sufficient (\`Programm+Libs+Bin\`) innerhalb ihres Unterordners /opt/Oracle/  ein, auf das sie niemals versehentlich fundamentale Linux-/usr-/ OS-Teile in Berührung geraten und zertrümmern überschreiben !!
    `,
  },
}
