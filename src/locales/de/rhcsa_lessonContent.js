export const rhcsaLessonContentDE = {

  // ─── TOPIC 1: Essenzielle Werkzeuge ────────────────────────────
  'rhcsa-1-1': {
    comic: {
      title: '🖥️ Shell und I/O-Umleitung',
      panels: [
        { emoji: '📤', text: '`>` überschreibt eine Datei mit der Ausgabe: `echo "hallo" > datei.txt` erstellt oder überschreibt.' },
        { emoji: '📥', text: '`>>` fügt die Ausgabe am Ende der Datei hinzu: `echo "zeile" >> datei.txt` bewahrt den Inhalt.' },
        { emoji: '🔗', text: '`|` (Pipe) leitet die Ausgabe eines Befehls an den nächsten weiter: `ls -l | grep ".txt"`.' },
        { emoji: '⚠️', text: '`2>` leitet nur Fehler um: `find / -name "*.conf" 2> /dev/null` blendet Fehler aus.' },
        { emoji: '🎯', text: '`&>` leitet sowohl stdout als auch stderr in dieselbe Datei um: `befehl &> ausgabe.log`.' },
      ],
    },
    keyPoints: [
      {
        title: 'Umleitungsoperatoren',
        items: [
          '`>` — Standardausgabe (stdout) in eine Datei überschreiben',
          '`>>` — Standardausgabe an eine Datei anhängen',
          '`2>` — Standardfehler (stderr) in eine Datei umleiten',
          '`2> /dev/null` — Fehlermeldungen verwerfen',
          '`&>` — Beides (stdout und stderr) an denselben Ort umleiten',
          '`|` — Verbindet die Ausgabe eines Prozesses mit der Eingabe eines anderen',
        ],
      },
    ],
    terminal: {
      prompt: '$ find /etc -name "*.conf" 2>/dev/null | head -5',
      output: '/etc/ld.so.conf\n/etc/nsswitch.conf\n/etc/resolv.conf\n/etc/sysctl.conf\n/etc/ssh/sshd_config',
    },
  },

  'rhcsa-1-2': {
    comic: {
      title: '🔍 grep und reguläre Ausdrücke',
      panels: [
        { emoji: '🔎', text: '`grep "muster" datei` sucht Zeilen, die das Muster in der Datei enthalten.' },
        { emoji: '🚫', text: '`grep -v "muster"` zeigt alle Zeilen AUẞER denen, die übereinstimmen.' },
        { emoji: '📏', text: '`^` entspricht dem Zeilenanfang, `$` dem Zeilenende. `^root` findet Zeilen, die mit root beginnen.' },
        { emoji: '🎭', text: '`grep -E "^root|^daemon" /etc/passwd` verwendet erweiterte Regex mit Alternativen (ODER).' },
        { emoji: '🔢', text: '`grep -c "error" /var/log/messages` zählt die Anzahl der übereinstimmenden Zeilen.' },
      ],
    },
    keyPoints: [
      {
        title: 'Wichtige grep-Optionen',
        items: [
          '`-i` — Groß-/Kleinschreibung ignorieren',
          '`-r` oder `-R` — Rekursive Suche in Verzeichnissen',
          '`-v` — Suche umkehren (NICHT)',
          '`-n` — Zeilennummern anzeigen',
          '`-E` — Aktiviert erweiterte reguläre Ausdrücke (ERE)',
          '`-w` — Nur ganze Wörter suchen',
        ],
      },
      {
        title: 'Basis-Regex-Metazeichen',
        items: [
          '`.` — Beliebiges einzelnes Zeichen',
          '`*` — Null oder mehr Wiederholungen des vorherigen Zeichens',
          '`^` — Verankerung am Zeilenanfang',
          '`$` — Verankerung am Zeilenende',
          '`[a-z]` — Beliebiges Zeichen im angegebenen Bereich',
        ],
      },
    ],
    terminal: {
      prompt: '$ grep -E "^(root|daemon|nobody)" /etc/passwd',
      output: 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nnobody:x:65534:65534:nobody:/nonexistent:/usr/sbin/nologin',
    },
  },

  'rhcsa-1-3': {
    comic: {
      title: '🔑 Berechtigungen und Links',
      panels: [
        { emoji: '🔐', text: 'UNIX-Berechtigungen: `rwxrwxrwx` — User, Group, Other. `chmod 755 datei` = rwxr-xr-x.' },
        { emoji: '👤', text: '`chown mario:dev datei` ändert den Besitzer auf mario und die Gruppe auf dev.' },
        { emoji: '🔗', text: 'Hardlink: `ln datei link` — derselbe Inode, überlebt, wenn das Original gelöscht wird.' },
        { emoji: '🔁', text: 'Symlink: `ln -s /realer/pfad link` — zeigt auf einen Pfad (wie eine Verknüpfung).' },
        { emoji: '📊', text: '`ls -l` zeigt: Typ, Berechtigungen, Hardlinks, Besitzer, Gruppe, Größe, Datum, Name.' },
      ],
    },
    keyPoints: [
      {
        title: 'chmod — Oktalnotation',
        items: [
          '`4` = Lesen (r), `2` = Schreiben (w), `1` = Ausführen (x)',
          '`755` = rwxr-xr-x (typisch für Verzeichnisse)',
          '`644` = rw-r--r-- (typisch für Standarddateien)',
        ],
      },
      {
        title: 'Hardlinks vs. Symlinks',
        items: [
          'Hardlink: Zeigt auf dieselben Daten auf der Platte; kann Dateisystemgrenzen nicht überschreiten.',
          'Symlink (Soft): Eine kleine Datei, die den Pfad zur realen Datei enthält.',
          '`ls -l` zeigt ein `l` am Anfang für Symlinks.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -la /etc/hosts',
      output: '-rw-r--r--. 1 root root 224 Jan 15 10:30 /etc/hosts',
    },
  },

  'rhcsa-1-4': {
    comic: {
      title: '📦 Archive und Komprimierung',
      panels: [
        { emoji: '📦', text: '`tar -czvf archiv.tar.gz /verz` — erstellt ein mit gzip komprimiertes Archiv.' },
        { emoji: '📂', text: '`tar -xzvf archiv.tar.gz` — extrahiert den Inhalt des komprimierten Archivs.' },
        { emoji: '🔍', text: '`tar -tzvf archiv.tar.gz` — listet den Inhalt auf, ohne ihn zu extrahieren.' },
        { emoji: '⚡', text: 'Komprimierungswerkzeuge: `gzip` (.gz), `bzip2` (.bz2), `xz` (.xz). XZ ist am langsamsten, komprimiert aber am besten.' },
        { emoji: '💡', text: 'Merke dir die tar-Flags: c=Create, x=eXtract, t=lisT, z=gzip, j=bzip2, J=xz, v=Verbose, f=File.' },
      ],
    },
    keyPoints: [
      {
        title: 'Wichtige tar-Flags',
        items: [
          '`c` — Archiv erstellen',
          '`x` — Archiv extrahieren',
          '`t` — Inhalt auflisten',
          '`f` — Dateinamen angeben (immer am Ende!)',
          '`v` — Verbose-Modus (zeigt Fortschritt an)',
        ],
      },
      {
        title: 'Kompressionsformate',
        items: [
          '`z` — gzip (schnell, Standard)',
          '`j` — bzip2 (bessere Kompression als gzip)',
          '`J` — xz (beste Kompressionsrate, mehr CPU nötig)',
        ],
      },
    ],
    terminal: {
      prompt: '$ tar -czvf /tmp/etc-backup.tar.gz /etc/ssh/',
      output: 'tar: Removing leading `/` from member names\n/etc/ssh/\n/etc/ssh/sshd_config\n/etc/ssh/ssh_config\n/etc/ssh/moduli',
    },
  },

  'rhcsa-1-5': {
    comic: {
      title: '📚 Systemdokumentation',
      panels: [
        { emoji: '📖', text: '`man befehl` — zeigt das vollständige Handbuch. Navigiere mit Pfeilen, suche mit `/muster`, beende mit `q`.' },
        { emoji: '❓', text: '`man -k wort` (oder `apropos`) sucht nach Befehlen zu einem Thema.' },
        { emoji: 'ℹ️', text: '`info befehl` — detailliertere und strukturiertere Dokumentation als man.' },
        { emoji: '📁', text: '/usr/share/doc/ enthält READMEs, CHANGELOGs und Beispiele für jedes installierte Paket.' },
        { emoji: '💡', text: '`befehl --help` — schnelle Hilfe. Sehr nützlich in Prüfungen, um sich an Optionen zu erinnern.' },
      ],
    },
    keyPoints: [
      {
        title: 'man — Sektionen und Navigation',
        items: [
          'Sektion 1: Benutzerbefehle, 5: Konfigurationsdateien, 8: Befehle für root',
          '`man 5 passwd` — schaut sich das Format von /etc/passwd an (nicht den Befehl)',
          'Verwende `/wort` zum Suchen innerhalb von man und `n` für das nächste Ergebnis.',
        ],
      },
    ],
    terminal: {
      prompt: '$ man -k "password" | head -3',
      output: 'chpasswd (8) - update passwords in batch mode\ngpasswd (1) - administer /etc/group and /etc/gshadow\npasswd (1) - update user\'s authentication tokens',
    },
  },

  // ─── TOPIC 2: Shell-Scripting ─────────────────────────
  'rhcsa-2-1': {
    comic: {
      title: '🐚 Variablen und Bash-Syntax',
      panels: [
        { emoji: '📝', text: 'Beginne mit `#!/bin/bash` (Shebang), um den Interpreter anzugeben.' },
        { emoji: '🏷️', text: '`VAR="wert"` (keine Leerzeichen!). Zugriff mit `$VAR` oder `${VAR}`.' },
        { emoji: '💬', text: 'Doppelte Anführungszeichen `"` erlauben Expansion ($), einfache `\'` sind wörtlich.' },
        { emoji: '💻', text: '`OUTPUT=$(ls)` speichert die Ausgabe eines Befehls in einer Variable.' },
        { emoji: '🚀', text: 'Rechte vergeben: `chmod +x script.sh` und mit `./script.sh` ausführen.' },
      ],
    },
    keyPoints: [
      {
        title: 'Shebang und Berechtigungen',
        items: [
          'Die erste Zeile sollte `#!/bin/bash` oder ähnlich sein.',
          'Verwende `chmod +x`, um das Skript ausführbar zu machen.',
        ],
      },
      {
        title: 'Variablen und Expansion',
        items: [
          'Keine Leerzeichen um das `=` : `NAME="mario"` (KORREKT), `NAME = "mario"` (FEHLER).',
          '`$(befehl)` ist die moderne Form der Befehlssubstitution.',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat hello.sh && ./hello.sh',
      output: '#!/bin/bash\nNAME="RHCSA"\necho "Hello $NAME"\n---\nHello RHCSA',
    },
  },

  'rhcsa-2-2': {
    comic: {
      title: '🔀 Bedingungen und Schleifen',
      panels: [
        { emoji: '❓', text: '`if [ $A -gt $B ]; then ... fi` — Bedingte Struktur. Achte auf Leerzeichen bei `[` und `]` !' },
        { emoji: '🔄', text: '`for file in *.txt; do ... done` — Iteriert über eine Liste von Elementen.' },
        { emoji: '⏳', text: '`while [ bedingung ]; do ... done` — Wiederholt, solange die Bedingung wahr ist.' },
        { emoji: '🚥', text: '`case $VAR in muster) ... ;; esac` — Effiziente Mehrfachauswahl.' },
        { emoji: '✅', text: 'Test-Operatoren: `-f` (datei), `-d` (verz), `-z` (leer), `-eq` (gleich-num).' },
      ],
    },
    keyPoints: [
      {
        title: 'Test-Operatoren [ ]',
        items: [
          '`-eq`, `-ne`, `-lt`, `-gt` — Numerische Vergleiche',
          '`==`, `!=` — String-Vergleiche',
          '`-f datei` — Wahr, wenn die Datei existiert und regulär ist',
          '`-d verz` — Wahr, wenn es ein Verzeichnis ist',
        ],
      },
      {
        title: 'Schleifen',
        items: [
          '`for` ist ideal für die Verarbeitung von Dateien.',
          '`while` wird oft mit `read` verwendet, um Dateien Zeile für Zeile zu lesen.',
        ],
      },
    ],
    terminal: {
      prompt: '$ if [ 10 -gt 5 ]; then echo "Größer"; fi',
      output: 'Größer',
    },
  },

  'rhcsa-2-3': {
    comic: {
      title: '📥 Parameter und Ausgaben',
      panels: [
        { emoji: '🔢', text: '`$1`, `$2`... sind Argumente für das Skript. `$0` ist der Skriptname.' },
        { emoji: '👥', text: '`$@` steht für alle Argumente als Liste.' },
        { emoji: '📊', text: '`$#` ist die Gesamtzahl der übergebenen Argumente.' },
        { emoji: '❓', text: '`$?` ist der Exit Status des letzten Befehls. `0` = ERFOLG, sonst = FEHLER.' },
        { emoji: '🚪', text: '`exit 0` beendet das Skript erfolgreich. `exit 1` deutet auf einen Fehler hin.' },
      ],
    },
    keyPoints: [
      {
        title: 'Kommandozeilenargumente',
        items: [
          '`$1` — erstes Argument',
          '`$#` — Anzahl der Argumente',
          '`$@` — alle Argumente',
        ],
      },
      {
        title: 'Exit Status ($?)',
        items: [
          'Entscheidend für die Fehlerbehandlung.',
          'Prüfe ihn sofort nach wichtigen Befehlen.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls /nicht/existentes/verz; echo $?',
      output: 'ls: cannot access ...: No such file or directory\n2',
    },
  },

  // ─── TOPIC 3: Systemadministration ──────────────────────
  'rhcsa-3-1': {
    comic: {
      title: '🚀 Systemstart und systemd-Targets',
      panels: [
        { emoji: '🎯', text: 'Ein "Target" definiert den Systemstatus. `multi-user.target` = Terminal, `graphical.target` = GUI.' },
        { emoji: '⚙️', text: '`systemctl get-default` zeigt, wie das System standardmäßig startet.' },
        { emoji: '🔄', text: '`systemctl set-default graphical.target` ändert den Startmodus dauerhaft.' },
        { emoji: '⚡', text: '`systemctl isolate multi-user.target` wechselt sofort in den Terminalmodus.' },
        { emoji: '🛠️', text: 'Für Reparaturen: Füge `rd.break` in GRUB hinzu, um in den Notfallmodus zu gelangen.' },
      ],
    },
    keyPoints: [
      {
        title: 'systemd-Targets',
        items: [
          '`multi-user.target` — Klassisches Runlevel 3 (Konsole)',
          '`graphical.target` — Klassisches Runlevel 5 (GUI)',
          '`rescue.target` — Einfacher Wartungsmodus',
        ],
      },
      {
        title: 'Root-Passwort ändern (rd.break)',
        items: [
          '1. GRUB bearbeiten, `rd.break` am Ende der `linux`-Zeile hinzufügen.',
          '2. `mount -o remount,rw /sysroot` (als Lesen/Schreiben remounten).',
          '3. `chroot /sysroot` (in das reale Root-Verzeichnis wechseln).',
          '4. `passwd root` (Passwort ändern).',
          '5. `touch /.autorelabel` (Zwingend erforderlich für SELinux).',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl get-default',
      output: 'multi-user.target',
    },
  },

  'rhcsa-3-2': {
    comic: {
      title: '📊 Prozessmanagement',
      panels: [
        { emoji: '👁️', text: '`ps aux` oder `ps -ef` listen alle aktiven Prozesse mit ihrer PID (Process ID) auf.' },
        { emoji: '📈', text: '`top` zeigt in Echtzeit Prozesse mit hohem CPU- und RAM-Verbrauch.' },
        { emoji: '🛑', text: '`kill PID` sendet ein Signal zum Beenden. `kill -9 PID` (SIGKILL) erzwingt das Beenden.' },
        { emoji: '⚖️', text: 'Priorität: "Nice" reicht von -20 (hoch) bis +19 (niedrig). `nice -n -5 befehl` startet mit hoher Priorität.' },
        { emoji: '🔧', text: '`renice -n 10 -p PID` ändert die Priorität eines laufenden Prozesses.' },
      ],
    },
    keyPoints: [
      {
        title: 'Häufige Signale',
        items: [
          '`15` (SIGTERM) — Sauberes Beenden (Standard)',
          '`9` (SIGKILL) — Prozess sofort und gewaltsam töten',
          '`1` (SIGHUP) — Konfiguration neu laden',
        ],
      },
      {
        title: 'Nice und Priorität',
        items: [
          'Nur root kann negative Werte (höhere Priorität) vergeben.',
          'Je höher der Nice-Wert, desto "netter" ist der Prozess zu anderen (niedrigere Priorität).',
        ],
      },
    ],
    terminal: {
      prompt: '$ ps -ef | grep httpd | head -2',
      output: 'root      1234     1  0 10:00 ?        00:00:00 /usr/sbin/httpd\napache    1235  1234  0 10:00 ?        00:00:00 /usr/sbin/httpd',
    },
  },

  'rhcsa-3-3': {
    comic: {
      title: '🛠️ Dienstemanagement mit systemctl',
      panels: [
        { emoji: '🟢', text: '`systemctl start sshd` startet den Dienst sofort.' },
        { emoji: '📌', text: '`systemctl enable sshd` aktiviert den Dienst für den automatischen Systemstart.' },
        { emoji: '🔄', text: '`systemctl restart sshd` stoppt und startet den Dienst neu.' },
        { emoji: '🚫', text: '`systemctl mask firewalld` verhindert den Start des Dienstes vollständig.' },
        { emoji: '🔍', text: '`systemctl status sshd` zeigt Status, Autostart-Einstellung und letzte Fehler an.' },
      ],
    },
    keyPoints: [
      {
        title: 'Wichtige Befehle',
        items: [
          '`start`, `stop`, `restart`, `reload` — Ausführungskontrolle',
          '`enable`, `disable` — Autostart-Kontrolle',
          '`status`, `is-active`, `is-enabled` — Statusprüfung',
          '`mask`, `unmask` — Schutz vor versehentlichem Starten',
        ],
      },
    ],
    terminal: {
      prompt: '$ systemctl is-active sshd',
      output: 'active',
    },
  },

  'rhcsa-3-4': {
    comic: {
      title: '📔 Logs und geplante Aufgaben',
      panels: [
        { emoji: '📜', text: '`journalctl` zeigt alle systemd-Logs. `journalctl -u sshd` filtert nach Dienst.' },
        { emoji: '⏲️', text: '`crontab -e` plant regelmäßige Aufgaben (Min Std Tag Mon Wochentag Befehl).' },
        { emoji: '🏃', text: '`at 15:00` plant eine einmalige Aufgabe für die Zukunft.' },
        { emoji: '🔦', text: '`journalctl -f` zeigt Logs in Echtzeit (wie tail -f).' },
        { emoji: '🗓️', text: '`crontab -l` listet die geplanten Aufgaben des aktuellen Benutzers auf.' },
      ],
    },
    keyPoints: [
      {
        title: 'journalctl — Fortgeschrittenes Filtern',
        items: [
          '`-b` — Nur Logs vom aktuellen Boot-Vorgang',
          '`-p err` — Nur Fehlermeldungen',
          '`--since "1 hour ago"` — Aktuelle Logs',
        ],
      },
      {
        title: 'cron-Planung',
        items: [
          'Format: `* * * * * befehl` (Minuten, Stunden, Tag, Monat, Wochentag).',
          '`/etc/cron.allow` und `/etc/cron.deny` steuern den Zugriff auf cron.',
        ],
      },
    ],
    terminal: {
      prompt: '$ journalctl -n 5 -p err',
      output: '-- Journal begins at ... --\nJan 15 10:00:01 systemd[1]: Failed to start ...',
    },
  },

  // ─── TOPIC 4: Lokaler Speicher — LVM ────────────────────────
  'rhcsa-4-1': {
    comic: {
      title: '💾 GPT-Partitionierung',
      panels: [
        { emoji: '🏗️', text: '`parted /dev/sdb` — Werkzeug zum Erstellen von Partitionen. Nutze `mklabel gpt` für neue Festplatten.' },
        { emoji: '📏', text: '`mkpart primary xfs 1MiB 2GiB` erstellt eine 2-GB-Partition.' },
        { emoji: '👀', text: '`lsblk` zeigt die Blockstruktur (Platten und Partitionen) visuell an.' },
        { emoji: '❗', text: '`udevadm settle` erzwingt die sofortige Erkennung von Partitionsänderungen.' },
        { emoji: '🔍', text: '`blkid` zeigt die UUID von Partitionen an, wichtig für persistente Mounts.' },
      ],
    },
    keyPoints: [
      {
        title: 'Partitionierungswerkzeuge',
        items: [
          '`fdisk` — Interaktiv, klassisch für MBR/GPT',
          '`gdisk` — Speziell für GPT',
          '`parted` — Unterstützt Skripte und ist sehr mächtig',
        ],
      },
      {
        title: 'Schritte nach der Partitionierung',
        items: [
          'Verwende `lsblk`, um zu prüfen, ob das System die Partition sieht.',
          'Formatiere mit `mkfs` vor der Nutzung.',
        ],
      },
    ],
    terminal: {
      prompt: '$ lsblk /dev/nvme0n1',
      output: 'NAME        MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS\nnvme0n1     259:0    0   20G  0 disk \n├─nvme0n1p1 259:1    0  600M  0 part /boot/efi\n└─nvme0n1p2 259:2    0 19.4G  0 part /',
    },
  },

  'rhcsa-4-2': {
    comic: {
      title: '🧱 LVM — Physikalische Volumina und Gruppen',
      panels: [
        { emoji: '🔨', text: '`pvcreate /dev/sdb1` bereitet eine Partition für LVM vor.' },
        { emoji: '📦', text: '`vgcreate vg_data /dev/sdb1` fasst Physical Volumes (PV) in eine Volume Group (VG) zusammen.' },
        { emoji: '➕', text: '`vgextend vg_data /dev/sdc1` fügt einer bestehenden Volumengruppe mehr Platz hinzu.' },
        { emoji: '📊', text: '`pvs`, `vgs`, `lvs` zeigen Schnellübersichten jeder LVM-Ebene.' },
        { emoji: '🔍', text: '`pvdisplay` oder `vgdisplay` liefern Details (Größe, Sektoren, UUID).' },
      ],
    },
    keyPoints: [
      {
        title: 'LVM-Architektur',
        items: [
          'PV (Physical Volume) — Der physikalische Teil (Partition oder Platte).',
          'VG (Volume Group) — Der Speicherpool.',
          'LV (Logical Volume) — Das "virtuelle Laufwerk", das wir formatieren.',
        ],
      },
    ],
    terminal: {
      prompt: '$ vgs',
      output: '  VG      #PV #LV #SN Attr   VSize  VFree \n  cs        1   2   0 wz--n- <19.00g    0 \n  vg_data   1   0   0 wz--n-   2.00g  2.00g',
    },
  },

  'rhcsa-4-3': {
    comic: {
      title: '💎 LVM — Logische Volumina',
      panels: [
        { emoji: '🔪', text: '`lvcreate -L 1G -n lv_docs vg_data` entnimmt 1 GB aus der Gruppe für ein logisches Volumen.' },
        { emoji: '📈', text: '`lvextend -L +500M /dev/vg_data/lv_docs` fügt 500 MB zum logischen Volumen hinzu.' },
        { emoji: '✨', text: '`lvextend -r -l +100%FREE ...` erweitert LV UND Dateisystem auf das Maximum.' },
        { emoji: '💾', text: 'Formatieren: `mkfs.xfs /dev/vg_data/lv_docs` bereitet das LV für Dateien vor.' },
        { emoji: '📏', text: '`xfs_growfs /mnt/docs` erweitert das XFS-System nach der LV-Vergrößerung.' },
      ],
    },
    keyPoints: [
      {
        title: 'LV-Verwaltung',
        items: [
          '`lvcreate -n Name -L Größe VG` — Erstellen',
          '`lvextend -L +Größe -r LV` — LV und FS gleichzeitig erweitern (empfohlen)',
          '`lvremove` — Volumen löschen (Bestätigung erforderlich)',
        ],
      },
      {
        title: 'Unterschied XFS vs. EXT4',
        items: [
          'XFS kann nur vergrößert, nicht geschrumpft werden.',
          'EXT4 kann vergrößert und verkleinert werden (Schrumpfen ist riskant und muss offline geschehen).',
        ],
      },
    ],
    terminal: {
      prompt: '$ lvs vg_data',
      output: '  LV      VG      Attr       LSize Pool Origin Data%  Meta%  Move Log Cpy%Sync Convert\n  lv_docs vg_data -wi-a----- 1.00g',
    },
  },

  'rhcsa-4-4': {
    comic: {
      title: '🔗 Mounten, fstab und Swap',
      panels: [
        { emoji: '📍', text: '`mount /dev/sdb1 /mnt/data` bindet ein Gerät temporär ein.' },
        { emoji: '📝', text: '`/etc/fstab` ist die Schlüsseldatei für Mounts beim Systemstart (UUID, Mountpoint, Typ, Optionen).' },
        { emoji: '🔄', text: '`mount -a` prüft die fstab und mountet alles Ausstehende.' },
        { emoji: '🧠', text: 'Swap: `mkswap /dev/sdb2` gefolgt von `swapon /dev/sdb2` aktiviert den Auslagerungsspeicher.' },
        { emoji: '🔒', text: 'Persistente Mounts: Nutze immer UUIDs, um Fehler bei wechselnden Festplattennamen zu vermeiden.' },
      ],
    },
    keyPoints: [
      {
        title: 'Format von /etc/fstab',
        items: [
          'Spalte 1: Gerät (UUID=...)',
          'Spalte 2: Mountpoint (/data)',
          'Spalte 3: FS-Typ (xfs, ext4, swap, nfs)',
          'Spalte 4: Optionen (defaults)',
          'Spalte 5: Dump (0)',
          'Spalte 6: FSCK-Prüfung (0 für XFS, 1 oder 2 für andere)',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat /etc/fstab | grep data',
      output: 'UUID=a1b2c3d4-e5f6... /data  xfs  defaults  0 0',
    },
  },

  // ─── TOPIC 5: Dateisysteme ──────────────────────────────
  'rhcsa-5-1': {
    comic: {
      title: '📁 ext4 und XFS',
      panels: [
        { emoji: '🛠️', text: '`mkfs.xfs /dev/vg_data/lv_docs` — erstellt ein XFS-System, Standard in RHEL.' },
        { emoji: '📦', text: '`mkfs.ext4 /dev/vg_data/lv_old` — erstellt ext4 für Kompatibilität.' },
        { emoji: '📍', text: '`mount /dev/vg/lv /punkt` — sofortige Einbindung. `/etc/fstab` für dauerhaft.' },
        { emoji: '🏷️', text: '`xfs_admin -L "DATEN" /dev/sdb1` — setzt ein Label für ein XFS-Volumen.' },
        { emoji: '🔍', text: '`df -hT` — zeigt freien Speicher und FS-Typ aller gemounteten Systeme.' },
      ],
    },
    keyPoints: [
      {
        title: 'Erstellung und Wartung',
        items: [
          '`mkfs.xfs`, `mkfs.ext4` — Formatierung',
          '`xfs_growfs` — XFS erweitern',
          '`resize2fs` — ext4 erweitern/verkleinern',
          '`mount -o loop` — ISO-Dateien oder Images mounten',
        ],
      },
    ],
    terminal: {
      prompt: '$ df -hT /data',
      output: 'Filesystem              Type  Size  Used Avail Use% Mounted on\n/dev/mapper/vg_data-lv  xfs   2.0G   45M  2.0G   3% /data',
    },
  },

  'rhcsa-5-2': {
    comic: {
      title: '🔒 Verschlüsselung mit LUKS',
      panels: [
        { emoji: '🔐', text: '`cryptsetup luksFormat /dev/sdb1` — formatiert eine Partition für Verschlüsselung (löscht alles!).' },
        { emoji: '🔑', text: '`cryptsetup open /dev/sdb1 tresor` — öffnet den Safe und mappt ihn nach `/dev/mapper/tresor`.' },
        { emoji: '📦', text: 'Nach dem Öffnen formatieren: `mkfs.xfs /dev/mapper/tresor`.' },
        { emoji: '📝', text: 'Für Auto-Mount: `/etc/crypttab` editieren (Name, UUID, Passwortdatei oder `none`).' },
        { emoji: '🚪', text: '`cryptsetup close tresor` — schließt den Safe und schützt die Daten wieder.' },
      ],
    },
    keyPoints: [
      {
        title: 'Schritte für persistente LUKS-Mounts',
        items: [
          '1. `luksFormat` (erstellen)',
          '2. `open` (mit Namen öffnen)',
          '3. Dateisystem in `/dev/mapper/Name` erstellen',
          '4. In `/etc/crypttab` eintragen (für Passwortabfrage beim Boot)',
          '5. In `/etc/fstab` über den Mapper-Pfad eintragen',
        ],
      },
    ],
    terminal: {
      prompt: '$ cryptsetup status tresor',
      output: '/dev/mapper/tresor is active.\n  type:    LUKS2\n  cipher:  aes-xts-plain64\n  keysize: 512 bits',
    },
  },

  'rhcsa-5-3': {
    comic: {
      title: '🔗 Netzwerkspeicher — NFS und autofs',
      panels: [
        { emoji: '🌎', text: '`mount -t nfs server:/pfad /lokal` — bindet eine Netzwerkfreigabe ein.' },
        { emoji: '🤖', text: '`autofs` — Dienst, der Verzeichnisse nur bei Zugriff einbindet und danach wieder trennt.' },
        { emoji: '📝', text: 'Konfiguration: `/etc/auto.master` für die Basis, Map-Datei für die Regeln.' },
        { emoji: '📁', text: 'Beispiel-Map: `daten -rw,soft server:/export/daten`.' },
        { emoji: '💡', text: 'Wichtig für die Prüfung, um Home-Verzeichnisse automatisch einzubinden.' },
      ],
    },
    keyPoints: [
      {
        title: 'autofs-Konfiguration',
        items: [
          '`dnf install autofs` — installieren',
          'Zeile in `/etc/auto.master`: `/projekte /etc/auto.projekte`',
          'Map `/etc/auto.projekte`: `web -rw,sync server:/shares/web`',
          'Dienst neu starten: `systemctl enable --now autofs`',
        ],
      },
    ],
    terminal: {
      prompt: '$ showmount -e 192.168.1.100',
      output: 'Export list for 192.168.1.100:\n/shares/web  *\n/shares/data 192.168.1.0/24',
    },
  },

  'rhcsa-5-4': {
    comic: {
      title: '🛡️ ACL und spezielle Berechtigungen',
      panels: [
        { emoji: '👥', text: '`setfacl -m u:mario:rwx datei` — gibt Mario Rechte, ohne den Besitzer zu ändern.' },
        { emoji: '🔍', text: '`getfacl datei` — zeigt alle erweiterten Rechte und ACLs an.' },
        { emoji: '📌', text: '`chmod g+s /verz` — (SetGID) neue Dateien erben die Gruppe des Verzeichnisses.' },
        { emoji: '🧊', text: '`chmod +t /verz` — (Sticky Bit) nur Besitzer können ihre Dateien löschen (z.B. /tmp).' },
        { emoji: '👑', text: '`chmod u+s /bin/binär` — (SetUID) Programm läuft mit den Rechten des Besitzers (oft root).' },
      ],
    },
    keyPoints: [
      {
        title: 'ACL (Access Control Lists)',
        items: [
          '`-m` — Regel ändern',
          '`-x` — Spezifische Regel löschen',
          '`-b` — Alle ACLs der Datei löschen',
          '`d:u:user:rpx` — Default ACL: Gilt automatisch für neue Dateien im Verz',
        ],
      },
      {
        title: 'Spezielle Rechte (SUID, SGID, Sticky)',
        items: [
          'SUID (4): `s` statt `x` beim Besitzer. Läuft als Besitzer.',
          'SGID (2): `s` statt `x` bei der Gruppe. Zusammenarbeit in Ordnern.',
          'Sticky (1): `t` am Ende. Sicherheit in geteilten Ordnern.',
        ],
      },
    ],
    terminal: {
      prompt: '$ getfacl shared_dir',
      output: '# file: shared_dir\n# owner: root\n# group: root\nuser::rwx\nuser:mario:rwx\ngroup::r-x\nmask::rwx\nother::r-x',
    },
  },

  // ─── TOPIC 6: Systemwartung ─────────────────────────────
  'rhcsa-6-1': {
    comic: {
      title: '📦 Softwareverwaltung mit DNF',
      panels: [
        { emoji: '📥', text: '`dnf install httpd` — installiert ein Paket und seine Abhängigkeiten automatisch.' },
        { emoji: '🔍', text: '`dnf search nginx` — sucht Pakete in den konfigurierten Repositories.' },
        { emoji: '📂', text: '`dnf list installed` — zeigt alles an, was aktuell installiert ist.' },
        { emoji: '📜', text: '`dnf history` — zeigt vergangene Installationen und erlaubt `undo`.' },
        { emoji: '⚙️', text: '`dnf provides /etc/mime.types` — zeigt, welches Paket diese Datei enthält.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gängige dnf-Befehle',
        items: [
          '`install`, `remove`, `update` — Basisoperationen',
          '`group install "Development Tools"` — Paketgruppen installieren',
          '`repoinfo` — Aktive Repos auflisten',
          '`clean all` — Download-Cache leeren',
        ],
      },
      {
        title: 'Repository-Konfiguration',
        items: [
          'Ort: `/etc/yum.repos.d/*.repo`',
          'Muss `[id]`, `name`, `baseurl`, `enabled=1` und `gpgcheck=1` enthalten.',
        ],
      },
    ],
    terminal: {
      prompt: '$ dnf provides /usr/bin/python3',
      output: 'python3-3.9.7-1.el9.x86_64 : Interpreter of the Python programming language',
    },
  },

  'rhcsa-6-2': {
    comic: {
      title: '🕵️ RPM — Abfragen und Verifizierung',
      panels: [
        { emoji: '🔎', text: '`rpm -qa` — listet alle installierten Pakete auf (roher als dnf list).' },
        { emoji: '📦', text: '`rpm -ivh paket.rpm` — installiert eine lokale RPM-Datei (ohne Netz-Abhängigkeiten!).' },
        { emoji: '🔍', text: '`rpm -ql httpd` — listet alle Dateien auf, die vom Paket httpd installiert wurden.' },
        { emoji: '🛠️', text: '`rpm -V httpd` — prüft, ob Dateien des Pakets verändert wurden.' },
        { emoji: '❓', text: '`rpm -qi httpd` — zeigt Detailinfos (Version, Datum, Beschreibung).' },
      ],
    },
    keyPoints: [
      {
        title: 'Abfrage-Flags (rpm -q)',
        items: [
          '`-i` — Info',
          '`-l` — Dateiliste',
          '`-c` — Nur Konfigurationsdateien',
          '`-d` — Nur Dokumentationsdateien',
          '`-f /pfad/datei` — Zu welchem Paket gehört diese Datei?',
        ],
      },
    ],
    terminal: {
      prompt: '$ rpm -qf /etc/passwd',
      output: 'setup-2.13.7-6.el9.noarch',
    },
  },

  'rhcsa-6-3': {
    comic: {
      title: '🎡 GRUB2 und der Kernel',
      panels: [
        { emoji: '🐧', text: 'Der Kernel ist das Herz des Systems. `uname -r` zeigt die aktuelle Version.' },
        { emoji: '⚙️', text: '`grub2-mkconfig -o /boot/grub2/grub.cfg` — aktualisiert das Bootmenü nach Änderungen.' },
        { emoji: '📝', text: '`/etc/default/grub` — hier werden Bootparameter editiert (z.B. Konsole).' },
        { emoji: '🛠️', text: '`grubby --info=ALL` — RHEL-Tool zum einfachen Anzeigen und Ändern der Kernel-Konfig.' },
        { emoji: '🆙', text: 'Nach der Installation eines neuen Kernels wird dieser meist automatisch zum Standard.' },
      ],
    },
    keyPoints: [
      {
        title: 'GRUB2-Konfiguration',
        items: [
          'Editiere `/boot/grub2/grub.cfg` niemals manuell.',
          'Nutze `/etc/default/grub` und generiere mit `grub2-mkconfig` neu.',
          '`GRUB_TIMEOUT=5`, `GRUB_CMDLINE_LINUX="..."`.',
        ],
      },
    ],
    terminal: {
      prompt: '$ uname -r',
      output: '5.14.0-70.13.1.el9_0.x86_64',
    },
  },

  // ─── TOPIC 7: Basis-Netzwerk ────────────────────────────
  'rhcsa-7-1': {
    comic: {
      title: '🌐 nmcli und Netzwerkkonfiguration',
      panels: [
        { emoji: '🔌', text: '`nmcli device status` — zeigt den Status der physikalischen Schnittstellen (eth0 etc.).' },
        { emoji: '🛠️', text: '`nmcli connection show` — listet die konfigurierten Verbindungsprofile auf.' },
        { emoji: '📍', text: '`nmcli con mod "eth0" ipv4.addresses 192.168.1.10/24 ipv4.gateway 192.168.1.1 ipv4.method manual`.' },
        { emoji: '🚀', text: '`nmcli con up "eth0"` — wendet Änderungen an und aktiviert die Verbindung.' },
        { emoji: '🏠', text: '`hostnamectl set-hostname rhel9-lab.example.com` — ändert den Hostnamen dauerhaft.' },
      ],
    },
    keyPoints: [
      {
        title: 'NetworkManager-Struktur',
        items: [
          'Device — die Hardware (Interface).',
          'Connection — das Softwareprofil (die Konfiguration).',
          'Man kann mehrere Connections für ein Device haben.',
        ],
      },
      {
        title: 'Hostname und DNS',
        items: [
          '`/etc/hostname` — Hostname der Maschine.',
          '`/etc/hosts` — lokale Namensauflösung (IP Name).',
          '`/etc/resolv.conf` — DNS-Server (verwaltet von NetworkManager).',
        ],
      },
    ],
    terminal: {
      prompt: '$ nmcli connection show --active',
      output: 'NAME                UUID                                  TYPE      DEVICE \nenp1s0              7d7c6b5a-4e3d-2c1b-0a9f-8e7d...       ethernet  enp1s0',
    },
  },

  'rhcsa-7-2': {
    comic: {
      title: '🔥 firewalld — Die Firewall',
      panels: [
        { emoji: '🛡️', text: '`firewall-cmd --get-active-zones` — zeigt, welche Zonen welches Interface schützen.' },
        { emoji: '🔓', text: '`firewall-cmd --add-service=http --permanent` — erlaubt Web-Traffic dauerhaft.' },
        { emoji: '🔌', text: '`firewall-cmd --add-port=8080/tcp --permanent` — öffnet einen spezifischen Port.' },
        { emoji: '🔄', text: '`firewall-cmd --reload` — Zwingend! Wendet permanente Regeln auf die Session an.' },
        { emoji: '🔍', text: '`firewall-cmd --list-all` — zeigt eine vollständige Übersicht der Standardzone.' },
      ],
    },
    keyPoints: [
      {
        title: 'Zonen und Regeln',
        items: [
          'Zone `public` — meist die Standardzone.',
          'Flag `--permanent` — sonst gehen Regeln beim Reboot verloren.',
          'Runtime-Regeln vs. permanente Regeln.',
        ],
      },
    ],
    terminal: {
      prompt: '$ firewall-cmd --list-services',
      output: 'cockpit dhcpv6-client ssh',
    },
  },

  'rhcsa-7-3': {
    comic: {
      title: '🔑 SSH und Datentransfer',
      panels: [
        { emoji: '🔐', text: '`ssh-keygen` — generiert dein Schlüsselpaar (Public und Private Key).' },
        { emoji: '📤', text: '`ssh-copy-id benutzer@server` — sendet deinen Public Key an den Server.' },
        { emoji: '📂', text: '`scp datei.txt root@server:/tmp/` — kopiert Dateien sicher über das Netzwerk.' },
        { emoji: '🔄', text: '`rsync -av /lokal/ /entfernt/` — synchronisiert Verzeichnisse effizient.' },
        { emoji: '🛡️', text: 'Konfiguration: `/etc/ssh/sshd_config`. Steuert Root-Zugriff und Ports.' },
      ],
    },
    keyPoints: [
      {
        title: 'SSH-Sicherheit',
        items: [
          '`PermitRootLogin no` — deaktiviert direkten root-Zugriff (empfohlen).',
          '`PasswordAuthentication no` — erzwingt die Nutzung von Keys (RSA/Ed25519).',
          'Nutze `systemctl reload sshd` nach Änderungen.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ssh-copy-id -i ~/.ssh/id_rsa.pub user@server',
      output: 'Number of key(s) added: 1\nNow try logging into the machine...',
    },
  },

  // ─── TOPIC 8: Benutzer und Gruppen ──────────────────────
  'rhcsa-8-1': {
    comic: {
      title: '👤 Benutzerverwaltung',
      panels: [
        { emoji: '➕', text: '`useradd -m -s /bin/bash mario` — erstellt Mario mit Home und Bash.' },
        { emoji: '🔑', text: '`passwd mario` — setzt das Passwort. Nur root kann Passwörter anderer ändern.' },
        { emoji: '✏️', text: '`usermod -aG wheel mario` — fügt Mario zur wheel-Gruppe (sudo) hinzu. Immer -a nutzen!' },
        { emoji: '⏰', text: '`chage -M 90 mario` — setzt Passwort-Ablauf auf 90 Tage.' },
        { emoji: '🗑️', text: '`userdel -r mario` — löscht Benutzer und sein Home-Verzeichnis.' },
      ],
    },
    keyPoints: [
      {
        title: 'useradd-Optionen',
        items: [
          '`-m` — Home-Verzeichnis erstellen',
          '`-s` — Standard-Shell festlegen',
          '`-u` — spezifische UID vergeben',
          '`-c` — Kommentar hinzufügen (echter Name)',
        ],
      },
      {
        title: 'Account-Ablauf (chage)',
        items: [
          '`-l` — Ablauf-Infos auflisten',
          '`-E` — Ablaufdatum des Accounts',
          '`-W` — Warntage vor Passwortablauf',
        ],
      },
    ],
    terminal: {
      prompt: '$ id mario',
      output: 'uid=1001(mario) gid=1001(mario) groups=1001(mario),10(wheel)',
    },
  },

  'rhcsa-8-2': {
    comic: {
      title: '👥 Gruppen und sudo',
      panels: [
        { emoji: '🏗️', text: '`groupadd -g 2000 devs` — erstellt eine Gruppe mit spezifischer GID.' },
        { emoji: '👤', text: '`usermod -g primär -G sekundär benutzer` — ändert die Gruppen.' },
        { emoji: '🔐', text: '`visudo` — editiert `/etc/sudoers` sicher (prüft die Syntax).' },
        { emoji: '📁', text: '`/etc/sudoers.d/` — bester Ort für sudo-Regeln in separaten Dateien.' },
        { emoji: '❌', text: '`groupdel devs` — löscht eine Gruppe (wenn sie niemandes Primärgruppe ist).' },
      ],
    },
    keyPoints: [
      {
        title: 'sudoers-Konfiguration',
        items: [
          '`%wheel ALL=(ALL) ALL` — erlaubt wheel-Mitgliedern alles.',
          '`benutzer ALL=(ALL) NOPASSWD: /usr/bin/dnf` — erlaubt Befehl ohne Passwort.',
        ],
      },
    ],
    terminal: {
      prompt: '$ groups root',
      output: 'root : root',
    },
  },

  // ─── TOPIC 9: SELinux und Sicherheit ───────────────────
  'rhcsa-9-1': {
    comic: {
      title: '🔐 Die 3 Modi von SELinux',
      panels: [
        { emoji: '🟢', text: 'Enforcing: Aktiver Modus. Blockiert unbefugte Zugriffe und loggt sie.' },
        { emoji: '🟡', text: 'Permissive: Blockiert nichts, aber LOGGT, was blockiert worden wäre.' },
        { emoji: '🔴', text: 'Disabled: SELinux ist komplett aus. Nicht empfohlen.' },
        { emoji: '⚡', text: '`setenforce 0/1` schaltet im laufenden Betrieb zwischen Permissive und Enforcing um.' },
        { emoji: '📝', text: '`/etc/selinux/config` legt den Modus für den nächsten Systemstart fest.' },
      ],
    },
    keyPoints: [
      {
        title: 'Status-Befehle',
        items: [
          '`getenforce` — zeigt den aktuellen Modus',
          '`sestatus` — zeigt detaillierten Status der geladenen Policy',
        ],
      },
    ],
    terminal: {
      prompt: '$ getenforce',
      output: 'Enforcing',
    },
  },

  'rhcsa-9-2': {
    comic: {
      title: '🏷️ Kontexte: Dateien und Prozesse',
      panels: [
        { emoji: '👁️', text: '`ls -Z /var/www/html` — zeigt die Labels (Kontexte) der Dateien.' },
        { emoji: '🔄', text: '`restorecon -Rv /var/www/html` — stellt den Standardkontext laut Datenbank wieder her.' },
        { emoji: '🎯', text: '`semanage fcontext -a -t httpd_sys_content_t "/web(/.*)?"` — setzt permanente Regel.' },
        { emoji: '⚡', text: '`chcon -t typ datei` — ändert den Kontext temporär (geht bei restorecon verloren).' },
        { emoji: '📊', text: 'Typischer Kontext: `user:role:type:level`. Der "Type" ist am wichtigsten.' },
      ],
    },
    keyPoints: [
      {
        title: 'Fehlerbehebung',
        items: [
          'Wenn ein Dienst trotz richtiger Rechte scheitert, prüfe den SELinux-Kontext.',
          '`mv` bewahrt den Originalkontext, `cp` erbt den vom Ziel.',
          'Nutze immer `semanage fcontext` + `restorecon` für dauerhafte Änderungen.',
        ],
      },
    ],
    terminal: {
      prompt: '$ ls -Z /var/www/html/index.html',
      output: 'system_u:object_r:httpd_sys_content_t:s0 /var/www/html/index.html',
    },
  },

  'rhcsa-9-3': {
    comic: {
      title: '🔘 Booleans und Ports für SELinux',
      panels: [
        { emoji: '🎛️', text: '`getsebool -a` — listet alle Schalter (Booleans) im System auf.' },
        { emoji: '🔄', text: '`setsebool -P httpd_enable_homedirs on` — ändert einen Boolean dauerhaft (-P).' },
        { emoji: '🔌', text: '`semanage port -l | grep http` — listet erlaubte Ports für einen Dienst auf.' },
        { emoji: '➕', text: '`semanage port -a -t http_port_t -p tcp 8088` — fügt einen extra Port hinzu.' },
        { emoji: '🔍', text: 'Fehler sind in `/var/log/audit/audit.log` als "AVC"-Events sichtbar.' },
      ],
    },
    keyPoints: [
      {
        title: 'Booleans vs. Ports',
        items: [
          'Booleans — schalten integrierte Funktionen frei (z.B. Apache darf Homes lesen).',
          'Ports — geben spezifische Netzwerk-Sockets frei.',
        ],
      },
      {
        title: 'Audit-Werkzeuge',
        items: [
          '`sealert -a /var/log/audit/audit.log` — analysiert Logs und gibt menschliche Tipps.',
          '`ausearch -m AVC` — sucht gezielt nach SELinux-Ablehnungen.',
        ],
      },
    ],
    terminal: {
      prompt: '$ semanage port -l | grep http_port_t',
      output: 'http_port_t                    tcp      80, 81, 443, 488, 8008, 8009, 8443, 9000',
    },
  },

  // ─── TOPIC 10: Container mit Podman ────────────────────
  'rhcsa-10-1': {
    comic: {
      title: '🐋 Podman-Grundlagen',
      panels: [
        { emoji: '📥', text: '`podman pull ubi9` — lädt das offizielle Red Hat Universal Base Image herunter.' },
        { emoji: '▶️', text: '`podman run -it ubi9 /bin/bash` — startet einen interaktiven Container.' },
        { emoji: '🔍', text: '`podman ps` — listet aktive Container auf. `podman ps -a` zeigt auch gestoppte.' },
        { emoji: '⚡', text: '`podman exec my_con ls /` — führt einen Befehl in einem laufenden Container aus.' },
        { emoji: '🗑️', text: '`podman rm my_con` — löscht einen Container. `podman rmi ubi9` löscht das Image.' },
      ],
    },
    keyPoints: [
      {
        title: 'Lifecycle-Befehle',
        items: [
          '`run` — Erstellen und Starten (it=interaktiv, d=Hintergrund, --name=Name)',
          '`stop` / `start` — Unterbrechen / Fortsetzen',
          '`logs` — Reinschauen, was passiert',
          '`inspect` — Netzwerk- und Mount-Details prüfen',
        ],
      },
      {
        title: 'Unterschied zu Docker',
        items: [
          'Daemonless — kein zentraler Root-Prozess, der alles steuert.',
          'Rootless — Container können sicher als normaler User ausgeführt werden.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman ps',
      output: 'CONTAINER ID  IMAGE                           COMMAND     CREATED      STATUS      PORTS       NAMES\n9abc12345678  registry.access.../ubi9:latest  /bin/bash   2 hours ago  Up 2 hours              my_ubi',
    },
  },

  'rhcsa-10-2': {
    comic: {
      title: '🗂️ Registries und Images',
      panels: [
        { emoji: '🔍', text: '`podman search nginx` — sucht Images in Registries (docker.io, quay.io).' },
        { emoji: '🔐', text: '`podman login registry.redhat.io` — an einer privaten Registry anmelden.' },
        { emoji: '🏷️', text: '`podman tag app:v1 repo.com/app:v1` — benennt ein Image für den Upload um.' },
        { emoji: '📤', text: '`podman push repo.com/app:v1` — lädt dein Image zum zentralen Server hoch.' },
        { emoji: '📄', text: 'Konfiguration: `/etc/containers/registries.conf` definiert die Suchreihenfolge.' },
      ],
    },
    keyPoints: [
      {
        title: 'Image-Verwaltung',
        items: [
          '`podman images` — Heruntergeladene auflisten',
          '`podman history` — Build-Layer ansehen',
          '`podman image prune` — Verwaiste Images löschen',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman search --filter=is-official nginx | head -2',
      output: 'NAME                      DESCRIPTION                STARS   OFFICIAL\ndocker.io/library/nginx   Official build of Nginx.   18000   [OK]',
    },
  },

  'rhcsa-10-3': {
    comic: {
      title: '📋 Das Containerfile (Dockerfile)',
      panels: [
        { emoji: '🏗️', text: '`FROM ubi9` — definiert das Basis-Image, auf dem aufgebaut wird.' },
        { emoji: '⚙️', text: '`RUN dnf install -y httpd` — führt Befehle während des Build-Prozesses aus.' },
        { emoji: '📄', text: '`COPY index.html /var/www/html/` — fügt Dateien vom PC in den Container ein.' },
        { emoji: '🚪', text: '`EXPOSE 80` — zeigt den listening Port an. `CMD ["httpd", "-D", "FOREGROUND"]` — Startbefehl.' },
        { emoji: '🔨', text: '`podman build -t my_web:v1 .` — kompiliert die Datei zu einem neuen Image.' },
      ],
    },
    keyPoints: [
      {
        title: 'Gängige Instruktionen',
        items: [
          '`ENV` — Umgebungsvariablen setzen',
          '`WORKDIR` — Arbeitsverzeichnis festlegen',
          '`ENTRYPOINT` — Hauptbefehl (nicht leicht überschreibbar)',
          '`USER` — Wechsel zu Nicht-Root für mehr Sicherheit',
        ],
      },
    ],
    terminal: {
      prompt: '$ cat Containerfile',
      output: 'FROM ubi9\nRUN dnf install -y httpd\nCOPY . /var/www/html/\nCMD ["httpd", "-DFOREGROUND"]',
    },
  },

  'rhcsa-10-4': {
    comic: {
      title: '💾 Persistenz und Netzwerk',
      panels: [
        { emoji: '📂', text: '`-v /host:/container:Z` — mountet PC-Verzeichnis in den Container. Achtung bei SELinux (:Z)!' },
        { emoji: '🔌', text: '`-p 8080:80` — mappt Port 8080 am PC auf 80 im Container.' },
        { emoji: '📦', text: '`podman volume create daten` — erstellt ein von podman verwaltetes Volumen.' },
        { emoji: '🌐', text: '`podman network create mein_netz` — erlaubt Containern die Kommunikation per Name.' },
        { emoji: '⚙️', text: '`podman generate systemd --name mycon --files` — erstellt Dienst für Autostart.' },
      ],
    },
    keyPoints: [
      {
        title: 'Persistenz mit SELinux',
        items: [
          'Ohne `:z` (geteilt) oder `:Z` (privat) kann der Container wegen SELinux nicht in das Volumen schreiben.',
          'Dies ist die Fehlerursache #1 in der RHCSA-Prüfung.',
        ],
      },
      {
        title: 'systemd-Integration (rootless)',
        items: [
          'Lege die `.service`-Dateien in `~/.config/systemd/user/` ab.',
          'Nutze `systemctl --user enable --now container-xxx`.',
          'Wichtig: `loginctl enable-linger`, damit der Container nach dem Logout weiterläuft.',
        ],
      },
    ],
    terminal: {
      prompt: '$ podman run -d -p 8080:80 -v /web:/var/www/html:Z my_web',
      output: '7d7c6b5a4e3d2c1b...',
    },
  },

};
