// LPIC-1 101 Extended Content  German
// Rich structured sections for ExtendedContent.jsx

export const lpic1_101_extendedContent_de = {

  'lpic1-101-1-1': {
    title: 'Physische Komponenten und BIOS/UEFI — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Zentrale Hardware und Diagnosebefehle' },
      { type: 'paragraph', text: 'In einem Linux-System wird alle verbundene Hardware vom Kernel während des Bootvorgangs (oder im laufenden Betrieb) erkannt, und die Informationen werden in das Pseudo-Dateisystem /sys und /proc exportiert.' },
      { type: 'table', headers: ['Komponente', 'Diagnosebefehl', 'Relevanter Pfad/Datei'], rows: [
        ['CPU', 'lscpu', '/proc/cpuinfo'],
        ['RAM', 'free -m, dmidecode -t memory', '/proc/meminfo'],
        ['PCI / Karten', 'lspci', '/sys/bus/pci/devices/'],
        ['USB', 'lsusb', '/sys/bus/usb/devices/'],
        ['Festplatten', 'lsblk, fdisk -l', '/dev/sda, /dev/nvme0n1'],
      ]},
      { type: 'heading', level: 2, emoji: '🔄', text: 'BIOS vs UEFI' },
      { type: 'paragraph', text: 'Die Pre-OS-Firmware initialisiert die Hardware und lädt den Bootloader. Der Übergang von BIOS zu UEFI bringt entscheidende Unterschiede mit sich.' },
      { type: 'comparison', left: {
        title: 'Klassisches BIOS',
        items: ['16-Bit-Architektur', 'Verwendet MBR-Partitionsschema (Max 2TB)', 'Führt den Bootloader im ersten Sektor der Festplatte aus', 'Keine native Steuerung der Betriebs-Firmware']
      }, right: {
        title: 'UEFI',
        items: ['32- oder 64-Bit-Architektur', 'Verwendet GPT-Partitionsschema (Bis 9.4 ZB)', 'Benötigt eine spezielle EFI-Partition (ESP, FAT32)', 'Unterstützt Secure Boot']
      }},
      { type: 'infobox', variant: 'exam', content: 'Für die Prüfung: Denken Sie daran, dass lsusb und lspci Informationen in Echtzeit extrahieren, während die Dateien in /proc und /sys von diesen und anderen Dienstprogrammen direkt gelesen werden. Mit dem Befehl lsmod werden geladene Module (Treiber) aufgelistet, mit modprobe werden sie geladen.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'Der Boot-Prozess — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🚀', text: 'Vom Einschaltknopf zum Kernel' },
      { type: 'paragraph', text: 'Der Boot-Prozess von Linux folgt aufeinanderfolgenden Schritten. Wenn einer fehlschlägt, startet das System nicht.' },
      { type: 'list', items: [
        { term: '1. POST und Firmware', desc: 'Einschalten, Hardwaretest, Suche nach dem Boot-Gerät.' },
        { term: '2. Bootloader (GRUB2)', desc: 'Wird aus dem MBR oder der EFI-Partition geladen. GRUB zeigt das Menü an und lädt den Kernel in den Speicher.' },
        { term: '3. Kernel und Initramfs', desc: 'Der Linux-Kernel wird ausgeführt, mountet das Initramfs (eine temporäre Festplatte im RAM), um kritische Speichermodule zu laden.' },
        { term: '4. Root-Pivot', desc: 'Der Kernel ändert das Root vom Initramfs auf die echte Festplatte.' },
        { term: '5. Init-Prozess (Systemd)', desc: 'Der Kernel führt PID 1 (systemd oder SysVinit) aus, wodurch alle Benutzerdienste gestartet werden.' },
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'dmesg und der Kernel-Ringpuffer' },
      { type: 'paragraph', text: 'Alle Meldungen, die der Kernel während des Bootens (und danach) erzeugt, werden in einem Puffer im Speicher gespeichert.' },
      { type: 'code', title: 'Befehle zum Lesen von Kernel-Logs', prompt: '# Gesamtes dmesg lesen\n$ dmesg\n\n# dmesg nach USB-Fehlern filtern\n$ dmesg | grep -i usb\n\n# Kernel-Ringpuffer löschen\n$ dmesg -c\n\n# Alle dauerhaften Log-Dateien anzeigen\n$ ls /var/log/messages', output: '' },
    ]
  },

  'lpic1-101-3-1': {
    title: 'Runlevels und Systemd Targets — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🚦', text: 'SysVinit: Die 7 klassischen Runlevels' },
      { type: 'table', headers: ['Runlevel (Ebene)', 'Beschreibung', 'Entsprechung im Systemd Target'], rows: [
        ['0', 'Ausschalten / Halt', 'poweroff.target'],
        ['1, s, S', 'Einzelbenutzermodus (Rettung)', 'rescue.target'],
        ['2', 'Mehrbenutzer ohne Netzwerk', 'multi-user.target'],
        ['3', 'Voller Mehrbenutzer (nur Text / Server)', 'multi-user.target'],
        ['4', 'Nicht verwendet/Frei', 'multi-user.target'],
        ['5', 'Voller grafischer Mehrbenutzer (Desktop-Modus)', 'graphical.target'],
        ['6', 'Neustart / Reboot', 'reboot.target'],
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Systemd: Verwaltung von Targets' },
      { type: 'paragraph', text: 'Systemd, der moderne Standard-Init, ersetzt Runlevels durch `.target`-Dateien.' },
      { type: 'code', title: 'Befehle für Status und Ebenenänderung', prompt: '# Standard-Target abrufen (mit dem der PC startet)\n$ systemctl get-default\n\n# Standard-Target auf Textmodus ändern\n$ sudo systemctl set-default multi-user.target\n\n# Sofort in den grafischen Modus wechseln, ohne Neustart\n$ sudo systemctl isolate graphical.target', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Rescue vs Emergency', content: 'rescue.target (Runlevel 1) mountet das lokale Dateisystem und fragt nach dem Root-Passwort. emergency.target ist noch drastischer: mountet Root als schreibgeschützt und startet KEIN Netzwerk oder sekundäre Dienste.' },
    ]
  },

  'lpic1-101-2-1': {
    title: 'Partitionsschemata und Mounts — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '💽', text: 'Festplatten-Layout (Hard Disk Layout)' },
      { type: 'paragraph', text: 'Das Linux-Installationsprogramm verlangt eine Partitionierung der Festplatte. Obwohl es möglich ist, alles in einer einzigen Root-Partition (/) zu installieren, erfordert die LPIC-1-Prüfung Kenntnisse über die besten strukturellen Praktiken für Server.' },
      { type: 'table', headers: ['Einhängepunkt (Mount)', 'Verwendung/Inhalt', 'Warum trennen?'], rows: [
        ['/ (Root)', 'Wichtigste Betriebssystemdateien', 'Das absolute Minimum zum Booten des Systems.'],
        ['/boot', 'Statische Kernel und Bootloader', 'Sichere Boot-Dateien; erfordert je nach Konfiguration möglicherweise klassisches Ext4.'],
        ['/home', 'Daten und persönliche Dateien der Benutzer', 'Wenn Sie das System neu installieren, behalten Sie Ihre Dateien.'],
        ['/var', 'Systemprotokolle, Datenbanken, Spools', 'Verhindert, dass ein ausuferndes Protokoll die Root-Partition füllt und die Maschine abstürzt.'],
        ['swap', 'Erweiterter virtueller Speicher', 'Verhindert Abstürze, wenn der physische RAM voll ist.'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Unantastbare Verzeichnisse', content: 'Achtung! Es gibt wichtige Verzeichnisse, die nicht in andere Partitionen als / getrennt werden dürfen. Dies sind: /bin, /sbin, /lib, /etc und /dev. Sie enthalten Dienstprogramme und Bibliotheken, die der Mount-Prozess selbst benötigt, bevor er sie mounten kann.' },
    ]
  },

  'lpic1-102-2-1': {
    title: 'Bootloader — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'GRUB2 (GRand Unified Bootloader)' },
      { type: 'paragraph', text: 'Der moderne Standard-Bootloader, der Linux-Systeme dominiert und GRUB Legacy abgelöst hat.' },
      { type: 'list', items: [
        { term: 'BIOS/MBR-Speicherort', desc: 'Seiner erster Teil (Stage 1) befindet sich in den ersten 512 Bytes der reinen Festplatte.' },
        { term: 'EFI-Partition', desc: 'In Standard-UEFI-Systemen befindet er sich im gemounteten Verzeichnis /boot/efi/EFI/ubuntu/grubx64.efi.' },
        { term: 'Menschliche Konfiguration', desc: '/etc/default/grub (Wo wir die grafische Auflösung und erzwungene Kernel-Parameter bestimmen).' },
        { term: 'Skriptordner', desc: '/etc/grub.d/ (Skripte nativer automatischer OS-Suchgeneratoren).' },
        { term: 'Die unantastbare Binärdatei', desc: '/boot/grub/grub.cfg (NIEMALS HANDISCH BEARBEITEN. Wird vom Compiler-Befehl überschrieben).' },
      ]},
      { type: 'code', title: 'Klassische Interaktion und Kompilierung', prompt: '# Das abschließende kompilierte GRUB-cfg-Hauptmenü neu generieren (Debian/Ubuntu)\n$ sudo update-grub\n\n# Echter zugrundeliegender universeller Befehl (RHEL und der Rest)\n$ sudo grub-mkconfig -o /boot/grub/grub.cfg\n\n# GRUB installieren (Reparatur von Stage 1 MBR auf der Festplatte)\n$ sudo grub-install /dev/sda', output: '' },
      { type: 'table', headers: ['GRUB-Schnittstelle und dynamisches Menü', 'Funktionalität'], rows: [
        ['Drücken der Taste "e"', 'Während sie auf der Zeile des Betriebssystems fokussiert ist, öffnet sich der Bildschirm in einem vorläufigen Textfeld, in dem Sie den String des Kernel-Parameters im flüchtigen Speicher vor dem BOOTEN hinzufügen und ändern können. (Nützlich zur Injektion des Flags init=/bin/bash).'],
        ['Drücken der Taste "c"', 'Öffnet die rohe Eingabeaufforderung (GRUB-Shell) mit Rechten auf initrd, linux und boot.'],
      ]},
    ]
  },

  'lpic1-102-3-1': {
    title: 'Gemeinsam genutzte Bibliotheken — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '📚', text: 'Geteilte Objekte (.so)' },
      { type: 'paragraph', text: 'Die Linux-Äquivalente zu den bekannten Dynamic Link Libraries (DLLs) von Windows heißen Shared Objects (.so). Sie befinden sich hauptsächlich in /lib, /usr/lib und dem experimentellen Bereich in /usr/local/lib.' },
      { type: 'code', title: 'Fokussierte Befehle und wesentliches LPIC', prompt: '# 1. LDD (List Dynamic Dependencies): Überprüfen, was einer ausführbaren Datei zum Funktionieren fehlt\n$ ldd /bin/ls\n      linux-vdso.so.1 (0x00...)\n      libc.so.6 => /lib/x86_64-linux-gnu/libc.so.6 (0x00...)\n\n# 2. LDCONFIG: Cache-Updater und blinder Zeiger\n# Durchsucht /etc/ld.so.conf nach neu installierten physischen Bibliotheken\n$ sudo ldconfig', output: '' },
      { type: 'infobox', variant: 'exam', content: 'LPIC-Szenario: Sie haben die Bibliothek libnova.so.1 kompiliert und im Ordner /usr/local/lib des Servers abgelegt, aber Ihre Anwendung bricht mit einem Fehler ab und meldet, dass libnova nicht gefunden wird. Lösung: Sie müssen den Befehl `ldconfig` ausführen, um den Kernel zu zwingen, die Cache-Zeiger von `ld.so.cache` zu aktualisieren.' },
      { type: 'list', items: [
        { term: 'Die göttliche Variable: LD_LIBRARY_PATH', desc: 'Das ist der Joker (Override). Sie exportieren ihn in der Konsole und zwingen den Kernel, in diesem custom Ordner zuerst nachzusehen, um nach veralteten Versionen der Bibliothek zu suchen (export LD_LIBRARY_PATH=/opt/app_alt/libs/)' },
      ]},
    ]
  },

  'lpic1-102-4-1': {
    title: 'Debian-Paketverwaltung (APT/dpkg) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '📦', text: 'Grundlegendes Low-Level-Tool (dpkg)' },
      { type: 'paragraph', text: 'Dpkg hat kein Internet und nicht die Fähigkeit, Abhängigkeiten aufzulösen; es verarbeitet lediglich nackte, lokal vom Menschen heruntergeladene `.deb`-Dateien.' },
      { type: 'table', headers: ['Kampfsyntax (dpkg)', 'Ergebnis und Verhalten', 'Roter Faden LPIC'], rows: [
        ['dpkg -i paket.deb', 'Primäres offizielles Installationsprogramm', 'Installiert/Aktualisiert das lokale Paket blind, oder wirft einen massiven Bibliotheksabhängigkeitsfehler.'],
        ['dpkg -r vim', 'Mittlere Entfernung (Remove)', 'Entfernt ausführbare Bits, bewahrt aber die benutzerdefinierte Konfiguration in /etc/.'],
        ['dpkg -P apache2', 'Genozidale Entfernung (Purge)', 'Löscht alles aus dem Dateisystem, einschließlich aller puristischen Konfigurationen, komplett.'],
        ['dpkg -l', 'Alle Software auflisten', 'Zeigt Lokal Installiertes an. `dpkg -l | grep ssh` ist nützlich.'],
        ['dpkg -S /bin/bash', 'Rückwärtssuchmaschine (Search)', 'Gibt als Ausgabe `bash: /bin/bash` zurück. Zeigt an, wer diese Datei in den Ordner installiert hat.'],
      ]},
      { type: 'heading', level: 2, emoji: '🌐', text: 'Automatischer globaler Manager (APT Tool Suite)' },
      { type: 'list', items: [
        { term: 'apt-get update', desc: 'Lest in entfernten Repos (/etc/apt/sources.list) gehostete Listen und aktualisiert streng nur lokale Repository-Listen und die Hash-Info-Tabelle im RAM, ohne Binärdateien herunterzuladen.' },
        { term: 'apt-get upgrade', desc: 'Installiert sichere, nicht komplexe Updates.' },
        { term: 'apt-get dist-upgrade', desc: 'Ein striktes Werkzeug, das die automatische Deinstallation des alten Frameworks erzwingt, um neu geänderte Bibliothekskerne zu adoptieren.' },
        { term: 'apt-cache search', desc: 'Die Suchmaschine (Query), um herauszufinden, ob eine Software im weltweiten Online-Spiegel existiert.' },
      ]},
      { type: 'infobox', variant: 'tip', title: 'Das Konfigurations-Oops', content: 'Haben Sie Berechtigungen beschädigt und die klassische lilafarbene Debian-Konfiguration verloren? Führen Sie aus: `dpkg-reconfigure genaues_paket`' },
    ]
  },

  'lpic1-102-5-1': {
    title: 'Red Hat RPM/Yum-Paketverwaltung — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🎩', text: 'Die klassische RPM-Welt (.rpm)' },
      { type: 'paragraph', text: 'Die Analogie zu DPkg im Reich von CentOS und Fedora. Der Befehl "rpm" verarbeitet primäre Downloads lokal, während "YUM" oder "DNF" das auflösbare Web von URLs (Repos in /etc/yum.repos.d/) ist.' },
      { type: 'table', headers: ['RPM-Befehl', 'Aktion', 'Wichtige zusätzliche Beobachtung'], rows: [
        ['rpm -i paket.rpm', 'Basis-Installateur', 'Einbauen (Install).'],
        ['rpm -U paket.rpm', 'Gemeinsamer Update- und Install-Akt', 'Dies wird bevorzugt. Installiert es, falls nicht vorhanden. Aktualisiert es, falls vorhanden.'],
        ['rpm -e paket', 'Erase', 'Erase, das Äquivalent zur Entfernung'],
        ['rpm -qa', 'Query All', 'Alles auflisten.'],
        ['rpm -qf /bin/ls', 'Query File (Eigentümer der Datei)', 'Genauso wie dpkg -S der apt-Familie.'],
        ['rpm -V binary', 'Verify (Wichtige blinde forensische Prüfung)', 'RPM überprüft das statische Paket, indem es die MD5-Prüfsummen testet. Wenn der Besitzer Änderungen weggewischt hat, meldet es S.5... T, um auf Manipulation hinzuweisen.'],
      ]},
      { type: 'code', title: 'YUM-Arsenal (modern abgelöst durch DNF)', prompt: '# Weltweit online nach einem Paket suchen:\n$ yum search nmap\n\n# Blinde Installation und Auto-Yes sowie Akzeptanz von GPG-Signaturschlüsseln\n$ yum install -y apache-httpd\n\n# Liste der ausstehenden globalen Updates des Host-Betriebssystems anzeigen\n$ yum check-update\n\n# Alle zwischengespeicherten Repository-Rückstände des Speichers bereinigen\n$ yum clean all', output: '' },
    ]
  },

  'lpic1-101-3-1-1': {
    title: 'Das Shell-Fenster und Variablen (Bash) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '⌨️', text: 'CLI vs Interaktives GUI' },
      { type: 'paragraph', text: 'Die Befehlszeilenschnittstelle (CLI) GNU Bash ist der Standard des Pinguins.' },
      { type: 'table', headers: ['Basis-Umgebungsvariable', 'Wahre Bedeutung LPIC', 'Vorübergehende Änderung oder Inspektion'], rows: [
        ['$PATH', 'Wo das System in /bin oder /sbin nach Fremdaufrufen (ls, rm) sucht, ohne den gesamten Pfad blind auf der Tastatur einzugeben', 'echo $PATH ; export PATH=$PATH:/usr/local/go/bin/'],
        ['$HOME und $USER', 'Das Tilde-Häuschen (~) des angemeldeten Benutzers (root oder sterblich).', 'echo $HOME'],
        ['$HISTFILE / $HISTSIZE', 'Verlaufsdatei der ~/.bash_history und Max. RAM-Kapazität', 'env | grep HIST'],
      ]},
      { type: 'code', title: 'BASH-Variablenbändiger / Globale Exporte', prompt: '# 1. Set zeigt einen massiven, tödlichen Regen privater funktionaler Variablen (lokal zu dieser lebenden PID-Shell).\n$ set\n\n# 2. ENV zeigt den Standard des globalen Exports (Vererbbar auf Subshells und Bash-Kindprozesse).\n$ env\n\n# 3. Einen schwachen Alias global für seine zugrunde liegenden PID-Kindskripte erheben\n$ export MEINE_WARNUNG="Vorsicht Welt"\n\n# Die verborgene Aufzeichnung der HISTFILE leise umgehen (Beginnend mit "Leerzeichen" vor dem pwd-Befehl)\n$ export HISTCONTROL=ignorespace', output: '' },
      { type: 'infobox', variant: 'exam', content: 'Für die Prüfung müssen Sie auch aus dem Kopf wissen, dass untypische Befehle wie `uptime` (CPU Average Load) und `uname -a` (OS Linux Release Base Kernel Version) fest in der Prüfung verankert sind. Bewerten Sie immer "bash-interne" Befehle (type cd = is a shell builtin) im Vergleich zu "externen" (`type ls` zeigt Pfad).' },
    ]
  },

  'lpic1-101-3-2-1': {
    title: 'Kanalverarbeitung, Umleitungen (Pipes) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🚰', text: 'Die natürlichen "Standard Streams" I/O' },
      { type: 'table', headers: ['Der Kanal (Numerische Stream-ID)', 'Bedeutung Nativer Linux Standard', 'Operative Shell-Umleitungssymbol'], rows: [
        ['0 (STDIN - Standard In)', 'Die blinde Tastatureingabe. (Erwartet menschliche okulare Injektion)', '< (Schluckt eine Datei: tr a-z A-Z < klein.txt)'],
        ['1 (STDOUT - Standard Out)', 'Die perfekte Ausgabe. Der "Erfolg" des ausgeführten C Cpp-Befehls (Saubere Liste)', '> (Überschreibt tödlich overwrite). >> (Hängt blind ans Ende der Zeile an Append)'],
        ['2 (STDERR - Standard Err)', 'Die Abneigungen Fehler, fehlende Berechtigungen und Beschwerden von Prozessverzweiflung', '2> muell.log (Löscht den Text vom Bildschirm und sendet ihn blind in die Mülltonne)'],
      ]},
      { type: 'heading', level: 2, emoji: '🔗', text: 'Röhren und Bash-Klempner Pipe (|)' },
      { type: 'paragraph', text: 'Der senkrechte Strich PIPE verbindet und näht wundersam die AUSGABE (1 STDOUT sauberes Erbrechen) des linken Befehls als EINGABE (0 STDIN des Basishungers) des ausführenden Befehls ganz rechts von der Röhre.' },
      { type: 'code', title: 'Magische Piped LPIC-Befehle', prompt: '# Sende die Erfolgs-Ausgabe und den Fehler separat in den Müll\n$ ls -l /fake /ok > erfolge.txt 2> fehler.log\n\n# Sende alles durcheinander 1 und 2 blind verschmolzen (Legacy UNIX T&C-Methode)\n$ ls /fake > kombiniert.txt 2>&1\n\n# Das moderne Bash kaufmännische Und Größer Als (&>)\n$ ls /fake &> alles.log\n\n# Nimm das gigantische dmesg-Müllaufkommen und leite es weniger in den Paginator `less`:\n$ dmesg | less', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Die xargs-Rakete der Pipe', content: 'Oft passt das vom linken Pipe kommende STDIN nicht in den rechten Befehl, der es hasst, leere reine STDINs zu lesen (z. B. kill, rm, cp). Wenn man `ls *.bak | xargs rm` einfügt, zerschmettert Ihre Majestät xargs die Ausgabe und setzt sie von Parameter zu Parameter zusammen (rm datei1 datei2 datei3).' },
    ]
  },

  'lpic1-101-3-3-1': {
    title: 'Grundlegende Gnu-Verarbeitung (Leichte Textfilter Sed/Awk) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '✂️', text: 'Meister der GNU CLI Basics Texttischlerei' },
      { type: 'table', headers: ['Das Feuer der reinen Aktion', 'Das praktische funktionale warum LPIC', 'Spezifischer Befehl Lokaler purer Meister'], rows: [
        ['cat gegen tac', 'Cat druckt fortlaufend sauber insgesamt von oben nach unten. Tac liest von Kopf bis Fuß Z bis A reverse file.', 'tac umgekehrt.log'],
        ['head / tail', 'Druckt n Zeilen vom oberen Anfang oder vom unteren Ende der Basis.', 'tail -f apache.log (Der lebendige Schwanz, der den Monitor Append Mode in Echtzeit begleitet).'],
        ['sort / uniq', 'Ordnen (-n Numerisch und -r reverse), UniQ verschlingt blinde wiederholte Zeilen (Zwingt zur vorherigen Verwendung von Sort).', 'sort a.txt | uniq -c (Zählt Wiederholungen).'],
        ['wc (Word Counter)', 'Zählbare Dateigewichte: -l(Blinde Zeilen), -w(String-Wörter), -c(Reine rohe Bytes)', 'wc -l /etc/shadow'],
        ['cut / paste', 'Tödliche Schneidemaschine. Paste führt vertikale Spalten zusammen.', 'cut -d: -f 1,7 /etc/passwd (D = Trennzeichen Doppelpunkte ":" F = extrahiert menschliche Named-Spalte UND 7 Bash-Spalte)'],
      ]},
      { type: 'code', title: 'Bizarre Textbefehle GNU Linux-Prüfung', prompt: '# 1. Übersetze alles blinde klein geschriebene STD IN (Cat) in GROSSBUCHSTABEN\n$ cat p.txt | tr "a-z" "A-Z"\n# Prüfungstrick: tr nimmt NIEMALS eine reine Dateidatei als natives Argument vom finalen Pfad (z.B. tr ar.txt FEHLER).\n\n# 2. Erweitere die blinde harte Tabulatur (Tab Space Bytes) zu absolut weichen Leerzeichen:\n$ expand -t4 tabulierte_datei.txt\n\n# 3. Zeilen blind visuell nummerieren, ohne Original vim oder cat zu ändern:\n$ nl config.conf', output: '' },
    ]
  },

  'lpic1-101-3-4-1': {
    title: 'Erweiterte Textverarbeitung (sed / awk) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Die Stream Editor Tötungsmaschine (Sed)' },
      { type: 'paragraph', text: 'Ein manipulationsstarkes Schweizer Taschenmesser für Texte im ständigen Fluss. Schreibt standardmäßig nie auf die Festplatte (wirft nur visuell veränderten STDOUT aus). Es tötet die Datei im Speicher nur dauerhaft, wenn das selbstmörderische Flag `-i` (In-Place Edit) aufgerufen wird.' },
      { type: 'code', title: 'Barbarische und grausame LPIC SED-Befehle', prompt: '# 1. Globales Ersetzungsmuster S/Müll/Gold/g\n# Das -g Flag ordnet die Wiederholung im Satz an, um nicht beim 1. Vorkommen in der Zeile stehen zu bleiben.\n$ sed "s/rot/blau/g" dokument.txt\n\n# 2. Löschung (D) von gefundenen mystischen Zeilen (z. B. Ausblenden der Zeilen, die "ERROR" enthalten)\n$ sed "/ERROR/d" dmesg_haesslich.log\n\n# 3. Magier der Slasher-Balken. Ändern von URL-Pfaden ohne panisch maskierte Slashes (\\/var\\/)\n$ sed -i.bak "s#/var/www#/opt/nginx#g" config_master.conf', output: '' },
      { type: 'heading', level: 2, emoji: '📊', text: 'Textspaltenanalytik (Awk)' },
      { type: 'table', headers: ['Awk Roter Faden Syntax', 'Praktischer Zweck von Awk'], rows: [
        ['awk \'{print $1}\'', 'Liest blind jede Zeile und druckt isoliert nur Spalte 1 ganz links.'],
        ['awk -F":" \'{print $3}\'', 'Entscheidendes Flag F (FieldSeparator). Zerkleinert und lehrt, dass der Begrenzer der menschlichen Spalte von /etc/passwd der Doppelpunkt ist. Druckt Feld 3 der Zeile.'],
        ['$0 VS NF Interna', 'Awk $0 ist kein Argument, sondern eine magische Variable (Druckt die gesamte rohe Zeile intakt). NF bedeutet Number File Field Limit (Der letzte Randbereich).'],
      ]},
    ]
  },

  'lpic1-101-3-5-1': {
    title: 'Überwachung, Threads und Tötung (PS/KILL) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Aktive visuelle Überwachungssysteme: (ps und top)' },
      { type: 'paragraph', text: 'Auf der reinen Basis des Linux-Kernels lebt der visuelle Scan der PID (Process IDentifier Number) versteckt in der Virtualität RAM /proc/ordner_ID_nummer. Befehle entschlüsseln blind den Ordner auf euren sauberen Bildschirmen.' },
      { type: 'table', headers: ['Linux Befehlsansicht', 'Was blind herausgeworfen wird', 'Wichtige LPIC-Modifikatoren'], rows: [
        ['ps (Process Snapshot)', 'Das statische Foto 1 Lebendige oder tote Sekunde. Reine Basis des Terminal-Shells.', '-ef (BSD Sysv Standard) oder reines free style "aux" (All benutzer tty list x).'],
        ['top (Berg FPS-Monitor)', 'Blindes aktualisierbares dynamisches Panel (Frequenz hz 3 Sek.). Frisst reines RAM. Drücken Sie P für Speicher % Max. Drücken Sie N für harmlose Nummer.', 'top -d 1 (Erzwingt Aktualisierung auf 1-Sekunden-Limit). H (Aktiviert die mehreren sichtbaren Sub-Threads)'],
        ['free', 'Totalisator des lebendigen RAM-Speichers (Kalt) & Buffers Cache (Schneller Müll)', '-m (Megabytes), -h (Menschlich Lesbar).'],
        ['uptime / w', 'Langsames Zählen der Maschinentage auf der Uhr', 'Zeigt die heiligen Load Averages CPUs: (Zuletzt 1 verdammte blinde Minute / 5 Min / 15 Minuten bloß).'],
      ]},
      { type: 'code', title: 'Schwitzkasten und Tötungssignale. (Basis-Kill bis Dämonen)', prompt: '# 1. Höflicher Friedlicher Mord-Antrag (SIGTERM - Signal Nr. 15 - Sauberes Beenden):\n# Lässt die Anwendung ihren Müll aus dem RAM räumen und den DB-Zustand speichern.\n$ kill 1334\n$ kill -15 1334 (Gleich wie oben, Basisstandard blind)\n\n# 2. Brutaler Physischer Kernel-Schrotflintenschuss Alles Vernichtend Blind (SIGKILL - Signal Nr. 9):\n# Der Kernel räumt rücksichtslos mit dem Arm auf, sprengt Daten in die Luft und bricht brutal ab.\n$ kill -9 1334\n\n# 3. Das Engelhafte Erneuerersignal (SIGHUP - Signal Nr. 1 - Dämon Lädt Lebendige Config-Dateien Neu)\n# Ohne verbundene Client-Kinder und SSH-Ports herunterzufahren: Der Master-Prozess lädt nur die Konfiguration neu.\n$ kill -HUP 887', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Mörder durch String-Saite (Killall vs Pgrep)', content: 'Der normale `kill` muss religiös rein numerische PIDs blind aus dem RAM diktieren. Im Gegensatz dazu eliminiert die Maschine `killall apache2` alle 40 nominell offenen blinden Kinder mit einer Silberkugel (Tötet durch den Namen). Wohingegen pgrep sucht, welche ID-Nummer zu diesem String gehört.' },
    ]
  },

  'lpic1-101-3-6-1': {
    title: 'CPU-Priorität, Nice & Renice (Güte des Kernels) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '⚖️', text: 'Die Modalitäten von Nice (Der barmherzige Samariter der Verarbeitung)' },
      { type: 'paragraph', text: 'In der schnellen, endlosen und verrückten "Schedule Base Kernel" rangelnden runden Warteschlange streiten sich Threads um Bytes und Hertz des Takts. "Nice" (freundlich) zu sein bedeutet, Ihr Ticket in der Schlange abzugeben und Ihren Brüdern Vorrang zu gewähren. Höheres Nice (+19) = Ihr Prozess LANGSAM und passiv. Niedriges Nice (-20) = Supertaktierter Dominator, der die gesamte CPU egoistisch einnimmt.' },
      { type: 'table', headers: ['Der physikalische mathematische Faktor', 'Echter klassischer Basis-Standardwert', 'Funktionales begrenzendes Ergebnis'], rows: [
        ['Ganze Werteskala', 'Bereich von extrem egoistisch -20 bis zu weichmütigem +19 gebend.', '0 (Absoluter Default Wurf-Basis unschuldig geboren). Alle normalen Prozesse erben Nivea 0.'],
        ['Der Faktor "Priorität" (PR Top)', 'Kernel Basis Berechnung (Addiert immer blind fix 20 zur organischen Basisnummer).', 'PR 20 (Entspricht NI 0).'],
      ]},
      { type: 'code', title: 'Prioritäts-Auslöser und Manipulatoren (Nice vs Renice)', prompt: '# Erstellen eines süßen, langsamen Basis-Dämonen, neu gestartet (Option -n diktiert und fixiert Basiswert)\n$ nice -n 10 tar -czf backup.tar /var/log_enormous\n\n# Modifizieren eines bereits LEBENDEN Akteurs, der tief im blinden RAM per PID verwurzelt ist\n$ sudo renice -n 15 -p 1234\n\n# Das unumstößliche Gesetz des blinden Maschinengottes Root\n# STERBLICHE (Menschen) = Können ihre eigenen langsamen Aufgaben nur gutartig (+1 bis +19) verschlechtern\n# GOTT ROOT (Admins) = Können extremes Feuer beschleunigen und Aufgaben zu egoistischen blinden Negativwerten stehlen\n$ sudo nice -n -5 ./mialarm_cripto.sh', output: '' },
    ]
  },

  'lpic1-101-3-7-1': {
    title: 'Extreme flüchtige GNU-Reguläre Ausdrücke (Regex SED/GREP/AWK) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Das magische kryptografische Alphabet (Feste Basis-Regex)' },
      { type: 'paragraph', text: 'Alltägliche Jagd-Werkzeuge wie grep lesen keine reinen menschlichen Zeichenketten, sondern suchen nach blinden logischen Metazeichensprachen. Es gibt Basic Regex (BRE) und erweiterte Puristen für Programmierer (ERE via grep -E ex "egrep").' },
      { type: 'table', headers: ['Festes logisches Metazeichen', 'Feuermagie', 'Blinde Übersetzung LPIC Top-Beispiel'], rows: [
        ['. (Punkt)', 'Findet ABSOLUT JEDEN EINZIGEN Buchstaben-Charakter der Welt (Ein reines Leerzeichen)', 'A.. (Nimmt Jahr, Tür, A x)'],
        ['* (Wildes Sternchen)', 'Multipliziert 0 oder unendliche reine Zeichen des unmittelbar vorherigen Gegenstands zu seiner Linken', 'Ka*t (Fängt Kaaat, Kt - leer von a - und Kat)'],
        ['^ (Zirkumflex / Hut)', 'Verankert das dichte logische Seil blind an der WAND NULL START der gesamten linken Zeile.', '^root: (Zeilen, die den Root nur ganz am Anfang physisch sprießen lassen).'],
        ['$ (Geld-Dollar)', 'Verankert logisch völlig erblindet an der RECHTEN ENDMauer der Zeile.', 'bash$ (Nur die, deren letzter toter Buchstabe bas ist).'],
        ['[ ] (Der Kokon der Klassen)', 'Findet NUR EINEN blinden Buchstaben unter denen, die im harten, begrenzenden Schlüsselwerk eingesperrt sind.', '[gG]ato (Findet gato mit großem G oder purem kleinem). [a-z] nur pure Buchstabierbuchstaben. [0-9] Zahlen.'],
        ['[^ ] (Schlüssel-Negationismus)', 'Findet die WELT, AUSSER DAS BLINDE, was in den Klammern steht (Achten Sie auf das UMGEKEHRTE Zirkumflex).', '[^0-9] (Zeilen mit ABSOLUT ALLEM außer schmutzigen Nummern).'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'Fest eingebläute Fehler für LPIC 1 Exakt auswendig: Stumpfe den Filter für stumpfe, weiße TotZeilen, die das Log stören ab: `grep -v "^$"` (Ausschließlich das, was NICHT -v die Linke Mauer allein an die rechte Mauer gehängt ist). Filtern von gemischten Anmerkungen Datei-Kommentaren: `grep -v "^#" arquivo_config.conf` (Entfernt den ganzen infodichten Müll "#").' },
    ]
  },

  'lpic1-101-3-8-1': {
    title: 'Uralte und agile puristische Terminalbearbeitung (Vi / Vim / Nano) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Die kosmischen Existenzphasen des Editors "VI"' },
      { type: 'paragraph', text: 'Die Lpic-1-Prüfung verlangt das tiefe Verständnis der 3 absolut austauschbaren modalen Welten des ursprünglichen blinden Vi, die Anfänger durch das anfängliche Fehlen jeglicher Pfeiltasten-Maus-Mauskreuzer-ShorCuts erschrecken.' },
      { type: 'table', headers: ['Modus der reinen physisch-statischen Basisphase', 'Auslösetaste zum Umschalten', 'Wofür zum Teufel es am Ende des Tages dient'], rows: [
        ['Normal/Kommandomodus (Blindbefehle)', 'Die wiederholte Wut von ESC führt Sie nach Hause Root (Ort Basis des Ursprunggeburt).', 'Kopieren (Yank), Schneiden & Zerstören (Delete dd), Zum Dateiende wandern, Blinder Zeilensprung.'],
        ['Drucktypistischer freier Menschlicher Eingabemodus (Insert Mode)', 'Tippen Sie auf die reinen Tasten "i" (Einfügen linksseitig) oder "a" (Anfügen an den rechts blinden Bereich) oder "o" (Die neue offene Linie unterhalb).', 'Hier greifen Sie nach der Tastatur und tippen lebendige Wörter des literarischen Universums.'],
        ['Extreme Todes Kommando Leiste Blind (EX Mode / Doppelpunkt)', 'Drücken von ":" starr von der ursprünglichen Normal-Mode Basis.', 'Datei Speichern und Verlassen, Massiv Suchen RegEx (/), Massiv im ganzen Dokument blind reihenweise Suchen-Ersetzen mit Sed.'],
      ]},
      { type: 'code', title: 'Start von Hand auf die Flucht Vi Exit:', prompt: '# EX MODE RETTER (DEN HINTERN AUF DEM STUHL FLÜCHTLING)\n:wq   # (Write Blind and Quit) Die reine, universelle Rettung.\n:x    # (Ultimative Verkürzung der :wq Magie)\n:q!   # Wut Flucht Zerstören Anpassungen Ohne Sichern Verlassen Harte Registrierungs-Zerstörung.\n\n# IN DER WELT DES NORMAL MODUS (DIE VERRÜCKTE TASTATUR LINKS RECHTS):\ndd    # Schere (Schneidet blinde Linie brutal aus und wirft in virtuelles Clipboard)\nyy    # Reine Yankee-Kopie (Zeile kopieren)\np     # Paster Supremo (Die Zeile blind in tieferliegende Zeilenablage einfügen)\nu     # Rohe Undo Basiswelt Null Zurücknehmen Dummer Rückschritt (Wildes Linux Control Z)', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Das uralte tote Geisterruder HJKL', content: 'Erblicken Sie in Jahrhunderten puren Maschinen-Eisen den Moment wo keine Ab- und Hochpfeile auf Cpp Tatstauren verweilten. Um blind umher zu kraxeln in alten Reichen drückte man die Basis ein: `h` Links / `j` Nach unten / `k` Der wilde Kleine Arriba Topf / `l` Reiner Wilder Ost Bereich Rechts. (LPIC Prüdungs-Trick in der Mitte: Der J scheint logisch physisch nach UNTEN zu zeigen).' },
    ]
  },

  'lpic1-101-4-1-1': {
    title: 'Partitionen und Dateisysteme — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '💿', text: 'Klassische Partitionierungswerkzeuge (MBR & GPT)' },
      { type: 'table', headers: ['Befehl / Anwendung', 'Globale Unterstützung', 'Physische Arbeitsweise'], rows: [
        ['fdisk', 'Alte MBR-Tabellen (und moderne GPT-Tabellen mit Patches)', 'Reine interaktive Shell, in der "p" Ihre lokale Ansicht in den RAM druckt, "m" zeigt Abkürzungen an, "d" löscht. Schreibt nur bei betätigter Mastertaste "w" endgültig auf die Platte. Wenn Sie "q" drücken, bleibt das Laufwerk unbeschadet ursprünglich intakt.'],
        ['gdisk', 'Ausschließlich GPT (GUID Absolute Table)', 'Ein dem fdisk ähnlicher Klon, jedoch für Festplatten größer als 2TB des GPT-Typs. Kann auch von rein MBR auf verborgenes GPT formatieren.'],
        ['parted', 'Der König (Unterstützt alle: rein MBR+GPT)', 'MAXIMALE VORSICHT. Werkzeug zur gnadenlosen Ausführung von Partitionen auf dem Laufwerk. Es übernimmt Änderungen OHNE Tastendruck auf "w" ODER RAM-Schutz. Eine Partition wird augenblicklich bei der Bestätigung gelöscht.'],
        ['cfdisk', 'MBR+GPT', 'Eine schicke visuelle Oberfläche (ncurses), bei der Kästchen durch Tastatureingaben dargestellt sind, zur besseren Terminal-Lesbarkeit.'],
      ]},
      { type: 'heading', level: 2, emoji: '📂', text: 'Dateisystem-Ersteller der Natur (Mkfs)' },
      { type: 'table', headers: ['Name des Dateisystems (Format-Typ)', 'Verfügt es über Journaling? (Vorfallprotokoll für Stromausfälle im RAM)', 'Physische Sprachoperation auf die Rohfestplatte.'], rows: [
        ['ext4', 'Ja (Perfekter Standard bei 90% der Server)', 'sudo mkfs.ext4 /dev/sdb1'],
        ['XFS', 'Ja (Hochoptimiert für Milliarden von winzigen Inode-Dateien und bei RHEL/Centos extrem bewährt).', 'sudo mkfs.xfs /dev/sdX'],
        ['btrfs', 'Multi-Copy/COW / Live OS-Schnappschüsse.', 'mkfs.btrfs /dev/sdX1'],
        ['vfat (universal unsichtbares FAT32)', 'Nein (- Extrem anfällig bei Notfällen oder Stromausfall)', 'Religiös verwendet auf der absolut mikroskopischen 500-MB-Boot-Partition /boot/efi der modernen, rein UEFI-fähigen Motherboards, um den Boot-Kernel zu starten.'],
      ]},
      { type: 'code', title: 'Täglicher Einsatz von Befehlen', prompt: '# 1. Identifizieren Sie die absoluten UUID-Zahlen und Labelnamen von zu formatierenden Laufwerken:\n$ blkid\n\n# 2. Bauen des SWAP-Speichers und Anfügen an das Betriebssystem:\n$ sudo mkswap /dev/nvme0n1p2\n$ sudo swapon /dev/nvme0n1p2', output: '' },
    ]
  },

  'lpic1-101-4-2-1': {
    title: 'Physische Dateisystem-Integrität (Fsck / Ext4) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Reparaturdienstprogramme (Die unschuldigen Korruptoren)' },
      { type: 'paragraph', text: 'Das wichtigste abstrakte Instrument zur Wiederherstellung von magnetischen Abschnitten von Dateiinodes (Lost+Found), die bei einem Stromausfall fehlen, ist fsck (File System Consistency Check).' },
      { type: 'table', headers: ['System-Reparaturen / Tune', 'Der einschränkende dedizierte Ausführungsbefehl', 'Zwingende fatale Syntax LPIC'], rows: [
        ['fsck (Generischer Wrapper Aller)', 'Durchsucht Laufwerks-Inodes, um verwaiste Dateien in /lost+found/ neu zu formatieren und rettet seine fehlenden Megabytes.', 'FUNKTIONIERT NUR INAKTIV! Leere ausgehängte Partition (`umount /dev/sdb1`), ein Versuch, ein hochaktives aktives / root-Verzeichnis zu reparieren, führt zu vollständiger Fataler Löschung oder Vernichtung des vollständigen Betriebssystemkerns-Datensatzes.'],
        ['e2fsck', 'Fossiliert streng auf Ext2/3 und Ext4.', 'e2fsck -y /dev/sdb1 (Überschreibt sofort "Ja" auf pausenlose Millennien-Fragen für jeden einzelnen Schritt).'],
        ['xfs_repair', 'Exklusives Red Hat Riesen-Format Rettungstool.', 'Niemals fsck auf xfs-Platten betreiben, nutzen Sie dieses Eigene.'],
      ]},
      { type: 'heading', level: 2, emoji: '🛠️', text: 'Anpasser (Tuner: tune2fs und dumpe2fs)' },
      { type: 'list', items: [
        { term: 'tune2fs / dumpe2fs Ext4', desc: 'Befehle, mit welchen man die Metadaten eines Dateisystems ohne Manipulation auf Festplatte kratzt.' },
        { term: 'dumpe2fs -h /dev/sdb', desc: 'Holt den lebenswichtigen "SuperBlock"-Deskriptor-Tisch (Gesamt verwendete Inodes, Gesamt verbleibende Blöcke, Checksummen, OS-Signatur sowie Formatabschluss-Daten).' },
        { term: 'tune2fs -l', desc: 'Wie zuvor, nur verfeinerter.' },
        { term: 'tune2fs -i 30d / tune2fs -c 10', desc: 'Zur Festlegung und Zwangsauslösung durch UEFI: Automatischer fsck einmal in vorbestimmten "alle 30 Tage" oder -c "alle 10 Hard-Disk Zündzyklen/Stromkabel".".' },
      ]},
    ]
  },

  'lpic1-101-4-3-1': {
    title: 'Dateisystem Mounten (Fstab / Mount) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '📂', text: 'Der bekannte /etc/fstab (Automount Center-Achse)' },
      { type: 'paragraph', text: 'Der `mount`-Befehl und das logische Gegenstück (beachten Sie unmount fehlt das "n") `umount` verbinden USB zu /mnt temporär im unsichtbaren flüssigen RAM. Bei PC Neustart? Aus und Neu. Fstab hingegen verebbt dies beständig für die Ewigkeit.' },
      { type: 'table', headers: ['Spaltenposition 1 bis 6 FSTab Text', 'Mustergültige Erklärung der Fstab-Struktur', 'Prüfungstaugliche und Klassische Notation'], rows: [
        ['1. Das Gerät (Das Was)', 'Welche Physische echte Platte ist OS gebunden? (Benutzen Sie Label-Nomenklatur oder blindes bevorzugtes UUID, um SATA-Kabel-Labyrinth-Fehler dauerhaft zu meiden)', 'UUID=f32-ab1 oder /dev/sdX1'],
        ['2. Zielort Montage Punkt (Korb)', 'Ziel der leeren Box im Basis Linux Baum Dateisystem', '/opt/lokaler_game/'],
        ['3. Typ des Basis Filesystems', 'Wie behandelt der innere OS-Kern das bit Sprach-Setup. Swap ist fur blankes blindes Ram', 'xfs / ext4 / swap'],
        ['4. Optionen zwingende Parameter', 'Komma Getrennte Zusammenfügungen an Hard-Blocker Verboten und Regeln.', 'defaults,noexec,ro'],
        ['5. Dump Num', 'Altes System Kommando der Kassette aus frühen 90\'ern Backup.', 'Verbleiben bei taubem "0".'],
        ['6. Pass/fsck Boot-Bedingung Reparatur Nr', 'Die Wichtigkeitsrangliste, wenn d.h der PC stirbt. Boot-System repariert und vollzieht das Fsck beim Aufrufen aus dem BIOS hierüber.', '"0" Übergeht das Ding rotzfrech. "1" Ausschließlich und exklusiv von Root (/). "2" Hilfs-Festplatten.'],
      ]},
      { type: 'heading', level: 2, emoji: '📋', text: 'Das verborgene Wort "defaults" und Montierungs Sicherheiten' },
      { type: 'code', title: 'Implizite Werte von "defaults" in LPIC Prüfungen', prompt: 'defaults = rw(Lesen-Schreiben leben), suid(Super-SUID Operationen erlaubt), dev(Handhabt Rohgeräte Interprete), exec(Darf ausführbare native C-Apps ablaufen lassen), auto(Rückt automatischen Lauf bei mount -a auf), nouser(Nur Superuser darf abschalten, kein bloßer Normaler Benutzer ohne Sudo wirft diesen USB hinaus), async(Der Festplatten-Prozess läuft losgelöst asynchron vom Schreibpuffer im System).\n\n# Mounten Sie gewaltsam ein blindes brennen der ISO 9660\n$ sudo mount -o loop /home/j/juego.iso /mnt/iso\n# Wenn der Virus USB Ihrer Freunde eintrudelt:\n$ sudo mount -o noexec,nosuid /dev/sdUSB /mnt/', output: '' },
    ]
  },

  'lpic1-101-4-5-1': {
    title: 'Macht des Besitzers & Basis Berechtigungen (Chown/Chmod) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🔐', text: 'Die klassische Berechtigung und UNIX-Mathematik' },
      { type: 'paragraph', text: 'Sowohl Chmod als auch Umask schreiben Gesetze. Und Chown beschließt Besitzer sowie blind zugewiesene Gruppen über Dateien. r=4 w=2 e x=1. Multipliziert nach User(u), Gruppe(g) und alle Reste dieser anderen Welten Other(o).' },
      { type: 'table', headers: ['Zusammenfassende binär-oktale Reihe Chmod', 'Darstellung der Entsprechung als "ls -l".', 'Handfeste Erklärung zur Wirkung in purem Linux.'], rows: [
        ['755 (Die Freie Datei App / Generelles offenes Buch Ordner', 'rwxr-xr-x', 'Ich (Verantwortlicher Host User) tu Alles (lese, ändere, starte 7 Exekutierbar). Gruppen Netzwerk des Internets: Lesen nur und surfen das Laufwerk. Das Weltganze verbleibt wie bei ihm blind bei selbigen Werten. Der blind Normal Directory Ordner-Ansatz.'],
        ['644 (Bloße leere Texte, weder ausführbarer noch shell programmkode)', 'rw-r--r--', 'Normale alle. Person Modifiziert Text, aber das innerliche Linux hat Schutz vor Versuch, Code für unsichtbare C App Ausführung magisch anzuzapfen (Unterbindet blinde Troyaner der Bash.)'],
        ['777 / 666', 'rwxrwxrwx', 'Ruinöser und völlig entfesselter Vandalismus Trojas.'],
      ]},
      { type: 'heading', level: 2, emoji: '⭐', text: 'Bit extremer Schilde & unheimliche Extra Berechtigungen (SUID SGID)' },
      { type: 'list', items: [
        { term: 'SUID (+s Nutzer / 4xxx)', desc: 'Das Esoterische Höher-Stufen (Set User ID). Jemand der den Script oder Text File ablaufen lässt, agiert plötzlich kurzfristig, mächtigen Kräften verfallen wie der WAHRE Creator des besagten originalen Programms während sie im Arbeitsspeicher umherschweift. (Lässt natives passwd für Normalos auf das Shadow Passwort des Root System eindreschen).' },
        { term: 'SGID (+s Gruppe / 2xxx)', desc: 'Bei puren Einzel-Text Modes: Ähnelt SUID nimmt dem Programmteil aber die Charakteristika und Glieder der gleichen Netzwerk Firm-Gruppe ab (Admins_dev). Über dem Verzeichnis/Carpeta-Pfad dir gespannt: ALLE aus dem puren Leib dieses Verzeichnisses geborenen neuen Ordner & Dateien zwingen und zertrampfen die Geburts Natur des jeweiligen Schreibers, und adaptieren bedingungslos pure Magie die ursprüngliche Gruppe des Gesamt Ordners. Magisches Firmen und Samba Heiligtum.' },
        { term: 'Sticky Bit (+t oder 1xxx) Die Ultimative Abwehr Blockade', desc: 'Bietet in Pfaden /tmp Blockierung auf der Lösch Taste. Keiner vermag hier die wildgewordenen unsinnigen und temporären Zwischen-Dreck Text Datein seiner System-Mitreisenden /tmp Kumpanen unabsichtlich den Garaus machen wie anderswo üblich auf Erden, sondern AUSNAHMLOS NUR ROOT sowie der alleinige absolute Schöpfer Herr dieser winzig erstellten Drecksdatei selnst, darf dies auch hier vollführen.' },
      ]},
    ]
  },

  'lpic1-101-4-6-1': {
    title: 'Hardlinks und Symlinks — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Beide Reiche vom Klon & Spiegel-Links (Ln)' },
      { type: 'comparison', left: {
        title: 'Harte Brücke Physik Inode Direkter reiner Block Draht (Hard Link Kommando PURO (ln quell_file krieger_klon))',
        items: ['Unterschiedlich Klonen der Göttlichkeit: Nutzt zu einhundertprozent rigoros Exakt Die Gleiche Inode Id-Nummer der Zwillings Schwester (Nachweisbar beim Checken per ls -li).', 'Gebunden blindes und verdammtes Sklavenwesen ein Leben Nur vor dem Einen Laufwerk System Datei gebunden. Pfade gehen nicht.', 'Ohne das Abspringen von Disk Platten: Wer vom Hauptlaufwerk Root auf einen Extra Mount /mnt klonen will prallt gnadenlos davor hart ab. Macht er nicht.', 'Der Ewige, Der Unsterbliche Schatten: Wird die Meister Origin Mutter dieses Desktop Scripts brutal gelöscht oder hingerichtet, floriert das lebende HardLink Versteck in voller Munterkeit am Datenspeicher-Platz. Sein Datengold und Bytestapel verbleibt belegt ungelöscht solange dieser Klon noch zu atmen hat.']
      }, right: {
        title: 'Ätherischer Symbole-Link Draht Leicht und weich Symbolhaftes Bindeglied (Soft / Symlink - ln -s matriz ziel_clown)',
        items: ['Neue Lebens-Essenz der Physis. Findet ein Gänzlich distines Neues Inode Abzieh-Bild als die Schlachthaus-Quelle und verkommt als Typische Basis File Datei Typus ("l" aus Link bei ansichten der Lesebrechtiggung).', 'Tänzelt rüber hinweg zu HDD Umzäunungen. Springt Dateisystem Strukturen Samba / NFS Ciffs Weit entfernt Etc.', 'Stiehlt im gleichen Sinne Symmetrisch und gleichermaßen Verzeichnisse von Riesen Ordnerpfaden von ganzer Welt in sich auf (Vergleichbar Windows Trivial Verknüpfung).', 'Verheerender Plötzlicher Gui Roter Tod in Scherben zerschmettert stürzendes Unheil sobald Das Meister Ziel erloschen / umverschoben ist / gelöscht / sich auf und ab im raum des Festplatten-Systems bewegte / Erleidet Zeiger Wahnsinn das nach dem toten nichts und unauffindbare Asche des Äthers sticht.']
      }},
    ]
  },

  'lpic1-101-4-7-1': {
    title: 'Standard Dateisystemhierarchie (FHS) & Aufspür Werkzeug Maschine (Find) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🗂️', text: 'Der Hierarchische FHS Maßstab Der Basis Linux Foundation' },
      { type: 'table', headers: ['Basaler Ursprung Root Verzeichnisse / Erste Reihe (Ebene 1)', 'Ziel der reinen Objekte'], rows: [
        ['/ (Alleinige Root Mächte Matrix)', 'Vollkommen Absoluter Schlusspunkt null der alles in allem Erde.'],
        ['/boot/', 'Versteck in der Burg aus MBR, um Grub oder der Starter-Kernels der Maschine (vmliunz).'],
        ['/etc', 'Basis Systemweite textoffene App-Parameter (Hier hat nichts drin in pur Binärer App-Shell Art rumzukullern).'],
        ['/bin & /sbin', 'Das S in Sbin= System (Der Binäre Exklusive Abgrund des Administrator Machts Reboot etc) / Bin (Nutzer der Basis Schichten: pwd, vim, nano...).'],
        ['/tmp', 'Bietet Auslauf Ram Fläche das bereinigt weggewaschen wird bei Neustarts mit Sticky Bit gebiet fest anhaftend passiv.'],
        ['/var', 'Explosives unsichtbares Zunehmendes Größen Wucher Phänomen ohne Pause aus Nichts. Rießige Gewichte durch Server Protokolle Log & Apache Dumps Nginx etc.'],
        ['/usr/local', 'Wilde freie Ebenen für inoffizielle wilde Softwaren. Man kompiliere via git das rohe Linux App bei "make", sein lückenhafter purer Sandhaufen schmutzt in Ordnung halber lokal in diesem Lager seine pure Form an, statt unordentlich in zentral /bin zu wandern.'],
      ]},
      { type: 'heading', level: 2, emoji: '🔍', text: 'Orter (Find / Locate)' },
      { type: 'list', items: [
        { term: 'locate lpic1.txt', desc: 'Blitzt aufwärts ähnlich göttlichen Donners rasend flink, aus welch tiefem Grunde? Der crond dämonen Agent erhebt um dunkle Nacht (Ausruf `updatedb`) um Indexe aller HD-Inhalte festgenagelt in ein in Ram oder Laufwerk Datenbank Festbestand herunterzuklopfen. Und sie blicken lediglicj das schon alte Listenarchiv rasend schnell auf-ab. Findet in Ewigkeit keine frisch gelegten File Geister aus neu am Mittag bespielten eingehangenen Mnt Ordners der letzten USB Festplatten.' },
        { term: 'find /var -size +1G', desc: 'Nimmt lange I/O Laufzeiten. Lebendige unaufenthaltsames Real-Time Abtastung (Studirt direkt Inoden Bits eiskalt und direkt von Platte in Physis ab). Exzellente puristen Zauber Flag Limitierung : `-mmin +60` (Files jünger in Modifizierungszeit und Stunde). `-type f` (Sucht nach Type file). `-user root` `-perm /4000` `-exec rm {} \\;` (Haucht bei Auffindung unmittelbar den Lösch-Todes Stoß aus). ' },
      ]},
    ]
  },

}
