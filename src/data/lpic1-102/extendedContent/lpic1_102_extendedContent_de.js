// LPIC-1 102 Extended Content  German
// Rich structured sections for ExtendedContent.jsx

export const lpic1_102_extendedContent_de = {

  // Topic 1: Shells and Shell Scripting
  'lpic1-102-105-1': {
    title: 'Die Shell-Umgebung — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '⚙️', text: 'BASH-Umgebungsanpassung' },
      { type: 'paragraph', text: 'Die Shell-Umgebung kann über Initialisierungsdateien, Variablen, Aliase und Funktionen angepasst werden. Für die Prüfung müssen Sie die heilige Ausführungsreihenfolge dieser Dateien kennen.' },
      { type: 'table', headers: ['Datei', 'Shell-Typ', 'Funktion'], rows: [
        ['/etc/profile', 'Login (Global)', 'Globale Systemeinstellungen für alle Login-Shells'],
        ['~/.bash_profile', 'Login (Benutzer)', 'Präzedenzfall 1: Benutzereinstellungen (ruft normalerweise ~/.bashrc auf)'],
        ['~/.bash_login', 'Login (Benutzer)', 'Präzedenzfall 2: Wird gelesen, wenn ~/.bash_profile nicht existiert'],
        ['~/.profile', 'Login (Benutzer)', 'Präzedenzfall 3: Klassische generische Datei (verwendet von sh/Bourne)'],
        ['/etc/bash.bashrc', 'Non-login (Global)', 'Globale Einstellungen für interaktive Shells ohne Login (Desktop-Terminals)'],
        ['~/.bashrc', 'Non-login (Benutzer)', 'Lokale Aliase und Funktionen des Benutzers (wird bei jedem neuen Desktop-Terminalfenster gelesen)'],
        ['~/.bash_logout', 'Logout (Benutzer)', 'Wird ausgeführt, wenn eine reine Login-Shell verlassen wird (exit)'],
      ]},
      { type: 'heading', level: 2, emoji: '📝', text: 'Kritische Umgebungsvariablen' },
      { type: 'table', headers: ['Variable', 'Bedeutung', 'Beispielwert'], rows: [
        ['PATH', 'Verzeichnisse, in denen die Shell blind nach Befehlsbinärdateien jagt', '/usr/local/bin:/usr/bin:/bin'],
        ['PS1', 'Primärer Prompt (Der blinkende Text vor dem Cursor)', '"\\u@\\h:\\w\\$ " (benutzer@host:verzeichnis$ )'],
        ['PS2', 'Sekundärer Prompt (verwendet, wenn ein Befehl mehrere Zeilen benötigt)', '"> "'],
        ['HISTFILE', 'Wo der Verlauf der eingegebenen Befehle gespeichert wird', '~/.bash_history'],
        ['HISTSIZE', 'Anzahl der Zeilen, die im RAM aktiv gehalten werden', '1000'],
        ['HISTFILESIZE', 'Maximale Anzahl von Zeilen, die direkt in der Datei auf der Festplatte gespeichert werden', '2000'],
        ['HISTCONTROL', 'Steuert die schwarzen Löcher im Verlauf', 'ignoreboth (ignoriert Befehle mit führendem Leerzeichen und aufeinanderfolgende Duplikate)'],
      ]},
      { type: 'code', title: 'Konfiguration von LPIC-Variablen und Aliasnamen', prompt: '# Mache einen nützlichen Master-Alias dauerhaft (innerhalb von ~/.bashrc)\nalias update="sudo apt update && sudo apt upgrade"\n\n# Pfade zu PATH ändern und hinzufügen (in ~/.profile oder ~/.bashrc)\nexport PATH="$PATH:$HOME/bin"\n\n# Ändern Sie die .bashrc-Änderungen sofort durch erneutes Laden\n$ source ~/.bashrc\n# Ältere, gleichwertige Punktsyntax:\n$ . ~/.bashrc', output: '' },
    ]
  },

  'lpic1-102-105-2': {
    title: 'Bash-Scripting — Grundlagen — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '📜', text: 'Kanonische Struktur eines Skripts' },
      { type: 'paragraph', text: 'Ein Bash-Skript ist eine große Textdatei, die Befehle enthält, die nacheinander ausgeführt werden. Das allererste wichtige Element ist die "Shebang"-Zeile (oder Hashbang), die dem Kernel mitteilt, welcher Interpreter-Motor zum Lesen des Textes verwendet werden soll.' },
      { type: 'table', headers: ['Spezielle maximale blinde Variable', 'Bedeutung'], rows: [
        ['$0', 'Der aktuelle blinde Name des Skripts (z. B.: ./skript.sh)'],
        ['$1, $2... $9', 'Die beim Aufruf des Skripts durch den Menschen injizierten Argumente (z. B.: ./skript.sh grün avocado)'],
        ['$#', 'Gesamtzähler der verschluckten numerischen Argumente'],
        ['$@ und $*', 'Beide spucken alle Argumente aus. (Das $* fügt alles in einem rohen String zusammen, $@ kümmert sich um einzelne Anführungszeichen)'],
        ['$?', 'Der Heilige Exit-Rückgabecode des zuletzt ausgeführten Befehls (0=Erfolg, Fehler sind normalerweise 1, 2, 127)'],
        ['$$', 'PID (Prozesskennung) des aktuell ausgeführten Skripts'],
        ['$!', 'PID des letzten untergeordneten Prozesses, der im Hintergrund gestartet wurde (background &)'],
      ]},
      { type: 'infobox', variant: 'warning', title: 'Die logische Inversion des Befehls ($?)', content: 'In reiner LPIC Bash bedeutet Status 0 = Wunderbarer und Perfekter Erfolg. Im Gegensatz zu Mathematik oder C, wo 1 "Wahr/Erfolg" wäre. Wenn in der Bash etwas schief geht, spuckt sie 1, 2 usw. aus. Dies dient dem Skript dazu, abhängig von der Nummer genau zu WISSEN, MIT WELCHEM FEHLER es abgestürzt ist.' },
      { type: 'code', title: 'Wichtige LPIC-Strukturen: if / case und For', prompt: '# Klassische Struktur if-then-elif-else-fi\nif [ -f "/etc/passwd" ]; then\n  echo "Die Schlüsseldatei existiert"\nelif [ -d "/etc" ]; then\n  echo "Blinder Ordner"\nelse\n  echo "Blind verloren"\nfi\n\n# FOR seq Iterationsschleifen\n# Seq erstellt blinde numerische Listen, damit For sie verschlucken kann.\nfor i in $(seq 1 10); do\n  echo "Zahl $i"\ndone', output: '' },
    ]
  },

  // Topic 2: User Interfaces and Desktops
  'lpic1-102-106-1': {
    title: 'X11 vs Wayland (Der Grafikserver) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🖥️', text: 'Display Servers (Video-Engines)' },
      { type: 'paragraph', text: 'Ohne einen Anzeigeserver kommt Linux nicht über das einfache Klartext-TTY1 des klassischen schwarzen Terminals hinaus.' },
      { type: 'comparison', left: {
        title: 'X11 (X Window System)',
        items: ['Uralte blinde Client-Server-Architektur (Fenster senden Anfrage an den Server, um auf dem nativen Bildschirm zu malen)', 'Extrem offen - Apps können alle globalen Aktionen belauschen und Tastenanschläge aufzeichnen (Unsichere Basis)', 'Fabelhafte transparente Netzwerkweiterleitung (SSH -X Forwarding)', 'Monolithische Basiskonfigurationen in /etc/X11/xorg.conf']
      }, right: {
        title: 'Wayland (Das saubere Moderne)',
        items: ['Direkte vereinheitlichte Architektur, super sicher und gepanzert', 'Native Fensterisolation: Apps können keine Tasten aufzeichnen (Keylogger schlagen fehl)', 'Verantwortung für das Malen liegt zu 100% bei den sauberen, modernen Anwendungen', 'Compositor-Komponente verwaltet Fenster nativ auf saubere Weise ohne Screen-Tearing-Workarounds.', 'XWayland löst das Problem und garantiert, dass alte X11-Apps vorübergehend über einen Tunnel ausgeführt werden.']
      }},
      { type: 'infobox', variant: 'exam', content: 'Merken Sie sich dies: X11 leitet Grafiken nativ weiter, es hat die "$DISPLAY"-Variable festgelegt, um zu wissen, wo die GUI rendern wird (normalerweise ":0"). Die gefährliche alte native Autorisierung zwischen Ports für Anwendungen läuft über Befehle von `xhost + IP` (das den gesamten Bildschirm freigibt) und von `xauth` (sauber authentifiziert über Cookies aus ~/ .Xauthority).' },
      { type: 'heading', level: 2, emoji: '🌐', text: 'Remote-Display-Weiterleitung', },
      { type: 'paragraph', text: 'Für den LPIC müssen Sie die Grundlagen im Zusammenhang mit dem Magic-Tunnel `ssh -X` kennen, der das gefügige GUI-Fenster von einem RHEL-Server auf den rohen Basis-Ubuntu-Screen oder lokalen Mac über ssh exportiert.' },
    ]
  },

  'lpic1-102-106-2': {
    title: 'Universelle visomotorische Zugänglichkeit (a11y) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '👁️', text: 'Globale unterstützende Technologien' },
      { type: 'table', headers: ['Modus der menschlichen blinden Kalthilfe', 'Übersetzer-App oder Pinguin-Blindkonfiguration'], rows: [
        ['Extreme Sehstörungen (Blinde Lupen)', 'Magnifiers (Kmags virtuell) basierend auf konstantem Zoom.'],
        ['Farbenblindheit (Blinder Farbaustausch)', 'Thematische High Contrast-Basis.'],
        ['Vollständige absolute Blindheit L', 'Taktile Braillezeilen über USB mit dem BRLTTY-Daemon verbunden oder der "Orca" Screen-Reader-Meister und Orca-Espeak zur Verbalisierung.'],
      ]},
      { type: 'heading', level: 2, emoji: '⌨️', text: 'Reine motorische Mobilität', },
      { type: 'list', items: [
        { term: 'Sticky Keys (Einrastfunktion)', desc: 'Kostbar für Einhändige. Du drückst auf "Ctrl," lässt los. Drückst "Alt," lässt los. Entf. Der magische Bildschirm wird Ctrl+Alt+Entf in einer gloablen Schlagaktion vereinen.' },
        { term: 'Slow Keys (Anschlagverzögerung)', desc: 'Deaktiviert und wirft sehr schnelle zufällige Tastenanschläge desselben Buchstabens raus. Die eigentliche Taste wird erst auf dem blinden Bildschirm geschrieben, nachdem sie hart viele Millisekunden gedrückt gehalten wurde.' },
        { term: 'Bounce und Repeat Keys (Tastenwiederholung / Sprungtasten)', desc: 'Verhindern versehentliche Doppeltasten-"Aaaaaaa". Verändert den blinden Elastizitäts-Zeitfaktor des Tippens.' },
        { term: 'Screen/On-Screen Keyboards (Bildschirmtastaturen)', desc: 'Klicks auf eine Taste über einen Augenstift oder Mäuse/Trackballs, interaktives visuelles Blindschreiben.' },
      ]},
    ]
  },

  // Topic 3: Administrative Tasks
  'lpic1-102-107-1': {
    title: 'Verwaltung blinder Root-Konten und Benutzer — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '👥', text: 'Die 4 Dateien des heiligen Tempels' },
      { type: 'paragraph', text: 'Beim Pinguin gibt es keine obskure Magie im Registrierungsstamm. Die gesamte Essenz der Authentifizierung, der versteckten kryptografischen Passwörter und der Gilden und Gruppierungen befindet sich in spaltenförmigen Datenbanken einfacher Textdateien im Ordner `/etc`.' },
      { type: 'table', headers: ['Roher Pfad zur Master-Textdatei', 'Struktur der Aufteilung der blinden Zwillingsfelder'], rows: [
        ['/etc/passwd (Ungefährlicher Read-All und blinde öffentliche Auflistung)', 'Stamm:VerstecktesPasswort:UID_nummer:GID_gruppe:Vollständiger_Name_Gecos:/home/lokaler_ordner:/bin/bash'],
        ['/etc/shadow (Eingeschlossener Schatz, 600 Blinde Root-Berechtigung)', 'Stamm:HashSADSignatur(SHA512)$c:GegebenenTagGeändert:Begrenzte minimale/maximale veraltete Passwortstrategien'],
        ['/etc/group (Sitz der blinden Gruppen der Festplatte)', 'Masternamen_Gruppe:LeeresGgruppenPasswort:GID_num:Kommagetrennte_liste_hinzugefügter_benutzer,andres,marcos'],
        ['/etc/gshadow', 'Analogon zur delegierten Administration an eine blinde Gruppe mit obskuren Passwörtern (wird von modernen Sudo-basierten Sysadmins selten verwendet).'],
      ]},
      { type: 'heading', level: 2, emoji: '🔐', text: 'Das Arsenal Usermod / Useradd Base LPIC' },
      { type: 'code', title: 'Basis Administrator Feuer Manipulierende Befehle', prompt: '# 1. Setze andres in die begehrte SUDO-Gruppe (Super Root-Administratoren)\n# VITAL in Prüfungen: Das `usermod` vernichtet und entfernt Andres\' andere Gruppen, wenn Sie das "-a" (Append) nicht setzen.\n$ sudo usermod -aG sudo andres\n\n# 2. Einen physisch lebenden Benutzer daran hindern, sich beim Bash-Terminal anzumelden, indem er als falschen Shell gesetzt wird.\n$ sudo usermod -s /sbin/nologin funcionariodemitido_ghost\n\n# 3. Erstelle Juan, Erzwinge die Erstellung seines leeren Heimordners (-m) und der zusätzlichen Gruppe (-G backup)\n$ sudo useradd -m -G backup juan', output: '' },
      { type: 'infobox', variant: 'warning', title: 'Löschgummi (userdel Magic)', content: 'Denke an LPIC Blind: `userdel andres` zerstört die Datei oder den Ordner `/home/andres` nicht. Seine Daten verbleiben als unerwünschter loser Müll, der die HD blockiert, bis der Zerstörer angewendet wird: `userdel -r andres` (Remove the home file).' },
      { type: 'list', items: [
        { term: 'Die Globale Basis-Maschinendatei /etc/login.defs', desc: 'Definiert min- und max-UIDs (z.B. 1000 Debian), SHA-Hashing-Regeln und ob es "Create Mailbox Local" geben wird.' },
        { term: 'Die Gebärmutter der Saat /etc/skel/ (Skeletor-Schablone)', desc: 'Alles von der leeren Datei, die darin lebt: Pinguin wird magisches Klon-Strg+c verwenden und jedem neuen Benutzer sein eigenes ~/.bashrc ~/.profile und saubere Firmenverknüpfungen direkt in deren Home-Ordner identisch blind schichten.' },
      ]},
    ]
  },

  'lpic1-102-107-2': {
    title: 'Blinde Zeitplanung und Zeitpläne (Cron / At) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '⏲️', text: 'Daemon Cron: Der Wächter der perfekten Zeit' },
      { type: 'paragraph', text: 'Das unschlagbare Tool das Skripte, Updates und demontierende passive Routinen jeden unerbittlichen frühen Morgen plant und verrichtet.' },
      { type: 'table', headers: ['Modus und Zufluchtsort von Conf Text', 'Befehle y fatale leere LPIC-Unterschiede'], rows: [
        ['/etc/crontab (Die Uhr des globalen Root Masters)', 'Benötigt 6 blinde Felder! Ausgelöst durch das statische System bittet das System auf den Knien um den "Namen des Benutzers", um es in Betrieb zu setzen.'],
        ['crontab -e (Ihre individuelle Bürger-Agenda der blinden Bash)', 'Das des gewöhnlichen Benutzers benötigt kein Feld "Benutzer" und bleibt blind erhalten im reinistischen Dungeon der fetten Listen "/var/spool/cron/crontabs/NAME".'],
        ['crontab -l', 'Ruft eigene verbundene lebende gebundene cron-jobs auf'],
      ]},
      { type: 'heading', level: 2, emoji: '📅', text: 'Die Sterne des Zeitzauberers (Die 5 Sternchen)' },
      { type: 'code', title: 'Min Std Monatstag Monatstag Wochentagsnummer Basiskommando', prompt: '# 1. Blinder Stern = Bei jedem Schlag von jenem Ding.\n# 2. Kommagetrennt (2,4) = Exakter Tag zwei und genauer Tag vier.\n# 3. Kontinuierlicher geteilter Weg (/X) = Von so vielen zu so vielen teilbaren Schlägen auf den Blinden-Tick.\n\n# Es läuft jeden heiligen Tag UM 02:00 Uhr morgens als blindes Dienstagmorgenrot (2)\n0 2 * * 2 script.sh\n\n# Startet und wird nur ausgeführt ALLE HALBE STUNDE (blinder Teiler), absolute unendliche Tage\n*/30 * * * * bash report.sh', output: '' },
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Einziger blinder Startbefehl für AT und Barrieren Allow/Deny' },
      { type: 'paragraph', text: 'AT, anders als wiederholen, führt blind einen Befehl für morgen aus, löscht den Speicher des Rechners der Verpflichtungen und verschwindet. `at now + 1 hour` oder `at 11:30 PM`. Man sieht die leblose tote Schlange mit `atq` und bricht Schüsse mit `atrm` ab.' },
      { type: 'table', headers: ['Die Autorisationsmauer (/etc/cron.allow y /etc/cron.deny)', 'Die exakte reine Spielregel (Gilt auch für at.allow)'], rows: [
        ['Existiert /etc/cron.allow lebendig?', 'Dann darf ABSOLUT niemand in der Pinguinwelt IRGENDETWAS in Cron ausführen, außer der elitären Gruppe, die durch reine blinde Privilegien aufgeführt ist.'],
        ['Existiert NUR das /etc/cron.deny lebendig?', 'Alle Menschen sind vollwertig und erfreuen sich natürlicherweise frei am heimischen `crontab -e`, mit Ausnahme der aus dieser ganzen reinen globalen Ausrottungsliste Gesperrten.'],
      ]},
    ]
  },

  'lpic1-102-107-3': {
    title: 'Globale Lokalisierung (i18n), Verborgene Zeiten und Zeitzonen — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🌍', text: 'Blinde Variablen Universal Zeitzonen Envs' },
      { type: 'paragraph', text: 'Die visuelle Sprache, $ Währungsformat für blinde Kommas, Währungen und Pläne, Kalender.' },
      { type: 'list', items: [
        { term: 'LANG (Die blinde originale Fallback-Variable)', desc: 'Stellt die Basis ein. Wenn alles in Rauch aufsteigt, baut der Linux-Core auf ihr Wesen auf (z. B.: LANG=pt_BR.UTF-8).' },
        { term: 'LC_MESSAGES', desc: 'Legt fest und übersetzt, ob der Kernel-Befehlsfehler dmesg in Tupi Guarani, Rus oder purem ENG-Basis-Global-Blind ausgegeben wird.' },
        { term: 'LC_ALL (Das Squad-Gott Meister-Programm)', desc: 'Es vernichtet alle Regeln, verdrängt alle passiven nativen LCs und erzwingt eine erzwungene globale Vorherrschaft über die lokale Sprache Envs.' },
        { term: 'locale', desc: 'Der Befehl füllt das RAM derzeit mit deiner sprachlich basierten Umgebung aus. `locale -a` testet die verstandenen auf Kompatibilität, um das Dateipaket kompiliert in die native Pure Base HD abzufeuern.' },
      ]},
      { type: 'heading', level: 2, emoji: '⚙️', text: 'Geographische Zeitzonen-Manager' },
      { type: 'code', title: 'Agieren als Wurzelmeister Welt der Zeit:', prompt: '# 1. Blinder Universeller Modus und Reine OS-Basis legacy\n# Die Maschine überprüft die Zeiten in /etc/localtime, was eigentlich eine abstrakte System-Verknüpfung (SoftSymLink) ist\n# zu /usr/share/zoneinfo/America/Sao_Paulo (Wo die zonen-atomaren Daten der periodischen Pulse der Geschichte leben)\n$ ln -sf /usr/share/zoneinfo/America/Bogota /etc/localtime\n\n# 2. Die Magie der Konvertierung von Bitmaps nutzen (UTF vs ISO altes Windows win1251)\n$ iconv -f iso-8859-1 -t utf-8 windowsvelho.txt -o portavelho_linux.txt', output: '' },
    ]
  },

  // Topic 4: Essential System Services
  'lpic1-102-108-1': {
    title: 'Die Systemzeit und NTP-Synchronisation — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🕒', text: 'Hardware Clock (BIOS) gegenüber System Clock (Kernel)' },
      { type: 'paragraph', text: 'Die schlagenden Taktfrequenz-Herzen des PCs sind zwei verschiedene. Die lebendige Uhr der Hauptplatine (Lithiumbatterie, die ewig am Chassis der Maschine befestigt ist), im Gegensatz zu der künstlichen, temporären, flüchtigen Uhr, die bei jedem Bootvorgang vom Kernel erzeugt wird.' },
      { type: 'comparison', left: {
        title: 'Hardware Clock (CMOS/RTC Real Time)',
        items: ['Stiller physischer Wächter. Hat niemals unsinnige menschliche Zeitzonen, sondern läuft standardmäßig blind auf UTC (koordinierte Weltzeit).', 'Wird vom Kernel in Wirklichkeit nur in einem einzigen mikroskopischen Bruchteil einer Sekunde beim initialen Einschalten der Maschine abgefragt.', 'Der heilige physische Einstellbefehl: hwclock (-w schreibt das System auf die BIOS-Basis).']
      }, right: {
        title: 'System Clock Logische Maschine D',
        items: ['Es ist ein Konstrukt des rein flüchtigen RAMs. PC aus: tot und auf null. Wird nach dem Booten wiedergeboren, indem es die Hardware Clock erneut ausliest.', 'Hier kollidiert und diktiert die menschliche Regel der regionalen Zeitzone (Du wendest die Berliner Zeitzone darauf an, nicht auf den PC).', 'Allein schuldig an der Erstellung von Zeitstempeln und Inodes für die Erstellung von Dateien auf der Linux-Festplatte.', 'Menschliches Abfragewerkzeug: date.']
      }},
      { type: 'heading', level: 2, emoji: '⏱️', text: 'NTP: Die Meister der Feinabstimmung von Zeitzonen und Atomizität' },
      { type: 'table', headers: ['Globale NTP-Daemon-Provider', 'Basis-Konfigurationsdatei', 'Eigenschaften und versteckte Ziele'], rows: [
        ['ntpd (Network Time Protocol Legacy Ancestral Daemon)', '/etc/ntp.conf', 'Statischer, konservativer Klassiker. Für große 24/7-Datencenter-Monolithen. Langsames, passives Nachziehen der Zeiger, um native Abweichungen (Drift) auszugleichen. Globale Abfrage von Remote-Peers: ntpq -p.'],
        ['chrony (Der junge, schnelle, moderne König der Zeit)', '/etc/chrony.conf', 'Speziell dafür geschaffen und fokussiert, die unterbrochene Zeit von Laptops bei geschlossenem Deckel, die Monate später wieder hochfahren, wiederherzustellen. RHEL-Standard.'],
        ['systemd-timesyncd', '/etc/systemd/timesyncd.conf', 'Kein Provider. Nur ein passiver blinder Lese-Client "SNTP". Trink aus der Quelle, aber füttere niemals Maschinen mit deiner Zeit. Völlig leichte Basis auf Ubuntu.'],
      ]},
      { type: 'infobox', variant: 'tip', title: 'Magisches Verständnis des Stratums', content: 'In ntpq -p spuckt der Kernel das göttliche Wort Stratum 1 und aufwärts aus. Stratum null ist der eigene universelle atomare Satellit der NASA, der über das Web unzugänglich ist. Stratum 1 ist der Supercomputer, der physisch und direkt an den lebenden atomaren Satelliten gebunden ist. Und Stratum 2 bist du und die weltweiten Router, die sich an die virtuelle Kante der Stratum-1-Rechner hängen. LPIC reine grundlegende Prüfungsfrage.' },
    ]
  },

  'lpic1-102-108-2': {
    title: 'Mystisches Systemjournal Syslog & Live Journalctl — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '📝', text: 'Universelle Müllsammler des Chaos (Klassisches Rsyslogd)' },
      { type: 'paragraph', text: 'Wenn ein Apache den Server lahmlegt oder jemand drei SSH-Passwörter falsch eingibt, wem klagt das Programm seinen Schmerz? Sie flüstern Warnungen in Kernel-Streams an die allgemeinen Basisprotokollierer (Live Loggers). Die seit 100 Jahren in /var/log/ liegende Klartextversion heißt SysLog (oder das moderne Rsyslogd).' },
      { type: 'table', headers: ['rsyslog Master-Facility-Konfigurator (Sauerstoffquelle A) /etc/rsyslog.conf', 'Prioritätsgrad, Dringlichkeit, fatale blinde Warnung', 'Ziel der lebendigen Datei'], rows: [
        ['mail (E-Mail-Anbieter) / authpriv (Login-Passwörter und Sudo-SSH-Fehler) / cron / daemon.', 'Vom trivialen Nutzlosen bis zum tödlichen blinden Panikalarm: debug, info, notice, warn, err, crit, alert, emerg.', 'mail.err   /var/log/maillog.log (Erspare mir Info, ignoriere den Müll von Mail-Debug und Notice, speichere hier alle Fehler von crit aufwärts, emerg. Tödlich).'],
      ]},
      { type: 'heading', level: 2, emoji: '🔎', text: 'Forensische Systemd-Inquisition: Journalctl Der neue binäre Gott' },
      { type: 'paragraph', text: 'Systemd verbirgt die Protokolle des einundzwanzigsten Jahrhunderts auf magische Weise in rein schnellen, indizierten Binärformaten (wobei vim und cat in Systemd-Journal-Ordnern nutzlos sind). Der Sysadmin-Auditor ruft die Bestie mit dem universellen Befehl Journalctl an:' },
      { type: 'code', title: 'Bedienung der Gottheit und Besichtigung toter Geschichten:', prompt: '# 1. Ich möchte nur bezeugen, was der SSH-Daemon blind an Beschwerden erbrochen hat (-u unit). Nur er, rein und sauber.\n$ journalctl -u sshd\n\n# 2. Zeige blinden lebenden Live-Zeit-Follower am Schwanz (Äquivalent zu Tail -f)\n$ journalctl -f\n\n# 3. Lies das magische gesamte erfasste Protokoll vom Wurzel-Boot NUR von HEUTE.\n$ journalctl -b\n\n# Bonus: Manuelles Tool und menschliches Skript "logger". Zwingt dich, deine eigenen Systemwarnungs-Texts auf die Systemlogs in Syslog Fake zu drucken.\n$ logger -p user.warn "Laufwerk Fehlgeschlagen Menschlicher Test 1"', output: '' },
    ]
  },

  'lpic1-102-108-3': {
    title: 'Papierpfade des Postfix-Rumpfs (MTA / Aliase) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '✉️', text: 'Blinde Basis-Briefträger Root MTA-Server' },
      { type: 'paragraph', text: 'Verwechseln Sie nicht den Lesemodus (MUA) Ihres Windows-Thunderbird mit der gigantischen nativen Transit-Daemon-Lokomotive "Postfix oder veraltetes Sendmail", die Umschläge abweist und durch den geheimen Port 25 zur externen Google Mail MTA-Basis weiterleitet.' },
      { type: 'heading', level: 2, emoji: '🔗', text: 'Heilige interne Umleitungen Blinde LPIC-Basis (/etc/aliases)' },
      { type: 'paragraph', text: 'Normale Sysadmins vermeiden es, sich physisch blind als das göttliche lokale Monster "ROOT" in den Desktop einzuloggen. Wer wird also die täglichen Absturz-Panik-Postfächer überprüfen, die von der Maschine an den Root-Postboten gesendet werden? Sie leiten die blinden Boxen an die globale Linux-Aliase-Wand weiter!' },
      { type: 'table', headers: ['Magische unsichtbare Etappen (Erinnerung an LPIC1)', 'Rechtfertigungen und praktische Gründe'], rows: [
        ['1. Der Administrator bearbeitet blind die Liste /etc/aliases', 'Postmaster: root ; Und hängt unter dem Stamm an: root: joaozinho_admin_verdadeiro'],
        ['2. Postfix / Sendmail LIESST DIESE langsame menschliche Textrolle NICHT im Live-Modus.', 'Sie vertrauen niemals. Sie suchen nach den schnell kompilierten "Hash.dbs" der CPU-Binärdateien in /etc/aliases.db .'],
        ['3. Wie speichert man gewaltsam? Der universelle Heilige Befehl `newaliases`', 'Du beendest deine Textbearbeitung mit vim und speicherst! Tippt magisch den Befehl newaliases ein, und er kompiliert die menschliche Datei in die binäre Datenbank, um sie zu aktualisieren.'],
        ['4. Der Garten ~/.forward des einfachen Standardbenutzers', 'Joaozinho erstellt eine stille leere Textdatei "forward", trägt die Google-E-Mail dort ein. Und Linux leitet seine Inbox zur Straße hin weiter.'],
      ]},
    ]
  },

  'lpic1-102-108-4': {
    title: 'Die Druckpresse und das Papier (CUPS / IPP-Basis-Protokoll) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🖨️', text: 'Apple Creator CUPS Verborgene Drucker G-Queues' },
      { type: 'paragraph', text: 'Der magische PDF-Spool-Manager der universellen Papier-Warteschlangen auf Port 631. Archiviert in den reinistischen Wurzel-Bibliotheken von /etc/cups/. Zugriff erfolgt über lokales blindes HTTP in einem Webbrowser: `localhost:631`.' },
      { type: 'list', items: [
        { term: 'Blinde Aktion des LP-Befehls zum Drucken reiner Dateitinte', desc: 'Die Befehlssyntax lp / lpr attackiert das Dokumentendatensystem. $ lp -d MasterPrinter schmutziger_blinder_bericht.txt' },
        { term: 'Die tote abstrakte Schlange Lpq', desc: 'Zeigt die eindeutige numerische blinde Jobnummer von überladenen Schlangen auf.' },
        { term: 'Die totale Papiervernichtung Cancel Pure Cancel', desc: 'Wirft eingeklemmtes Papier aus der Warteschlange in den Abgrund, indem die blinde Jobnummer gezogen wird (cancel JOBID32).' },
        { term: 'Accept/Reject (Die logische Blockade am Goldenen Tor)', desc: 'Blockiert blind das Beladen der Schlange. Gibt blinde Schreie an entfernte Netzwerkbenutzer zurück: "Server Vollständige Papierzuführung Verborgen Abgelehnt". Die Walze druckt fehlerfrei das Alte, das bereits ohne Neuigkeiten im RAM gespeichert ist.' },
        { term: 'Enable/Disable (Die hart blockierte Tintenmaschine)', desc: 'Disable pausiert und bremst die Tintenmaschine. Der magische Server füllt und bläst die magische Festplatte der blinden RAM-Warteschlangen weiterhin auf und akzeptiert neue, endlos gigantische PDFs, stumm und blockiert bleibend.' },
      ]},
    ]
  },

  // Topic 5: Networking Fundamentals
  'lpic1-102-109-1': {
    title: 'Globale blinde Grundlagen IPv4 und Masken (CIDR Base Subnetting) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🌐', text: 'IP und Subnetzmasken schneiden und trennen' },
      { type: 'paragraph', text: 'Die magische Netzwerkmaske unterteilt das Chassis IPv4 (Beispiel: 255.255.255.0 magisch rein blind, oder die Notation /24, linke aktive Bits) und definiert damit, welche Hälfte die mächtige Siedlung ist (dauerhaft feste Netzwerksite) und was die kleine Behausung ist (Stumme Hosts Rechner).' },
      { type: 'table', headers: ['Globale mystische Vergabe (IANA)', 'Die ersten 8 Bits des begrenzten Standards', 'Vererbte Ursprungs-Basis-Maske'], rows: [
        ['Klasse A Universal Global', 'Magischer Startfang blind (1 bis rein blind 126)', '/8 Masken-Sperre Feuer 255.0.0.0'],
        ['Klasse B Unternehmensbasis Mitte', 'Von 128 Fangend auf universelle 191.', '/16 Universal Zwei Abgesicherte Ocktetts.'],
        ['Klasse C (Euer Heimes Domestisches WLan und Modems)', 'Von 192 bis zu Basis 223.', '/24 dreifach Feuer Blind-Schloss 255 am Ende.'],
      ]},
      { type: 'heading', level: 2, emoji: '🔒', text: 'Absolute Isolation (Private Weltflüchtige / Unroutbare Sichere IP-Basis APIPA)' },
      { type: 'list', items: [
        { term: 'Privatisierung von Nullnetz-Routern', desc: '10.0.0.0 und 192.168. Absolute Blindgänger werden niemals Ozeane der pfeilgeraden Internet-Weiten queren, ohne durch Übersetzer an aktiven öffentlichen Routen von NATs.' },
        { term: 'Der Abgrund des reinen APIPA-Ausfalls', desc: '169.254 Magische Netze. Euer lokaler DHCP-Server verbrannte und verblich eiseig. Der betroffene PC generiert aus Magie den aus Verzweiflung entstehenden lebhaft schützend blinden Link-Local Block von Nummern.' },
      ]},
    ]
  },

  'lpic1-102-109-2': {
    title: 'Konfiguration klassischer Host-Logs und blinder Pfad-DNS-Dateien — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🔧', text: 'Flugdokumentation der puren DNS-Meisterschaft' },
      { type: 'paragraph', text: 'Im Debian-Schrein des statischen Legacy befindet sich das schützende Band, verankert auf dem Grund der puren Bibliothek /etc/network/interfaces. In jedem Pinguin gibt es diese verknüpften verborgenen Elemente:' },
      { type: 'table', headers: ['Das reinistische physische blinde Textversteck LPIC', 'Basis-Überbrückende vitale Physische Auflösung'], rows: [
        ['/etc/resolv.conf', 'Namen der blinden Götter (Nameserver). Wann immer ein Browser den IP-Wahn von Google von außen begehrt, fleht euer Linux jene IPs an (z. B. 8.8.8.8) als weltweiten Nachschlage-Magier lebender purer Lexikons.'],
        ['/etc/hosts', 'Der trügerische Schnelligkeits-Fälscher Fake Lexikon Ordner. Er überbrückt das Labyrinth der Heime "127.0.0.1 db-local". Beschneidet und schneidet Distanz weg, niemals nörgelnd und stur das DNS befragend, spendet leblose Geschwindigkeit.'],
        ['/etc/nsswitch.conf', 'Der blinde Schiedsrichter des Kontrolleurs Nameswitch! Bestimmt "Erstens blickst du blind in die Host-Fake-Fälscherordner und überlässt es danach dem verborgenen DNS am Ende abseits! (hosts -> dns mystic).' ],
        ['/etc/services', 'Das ist keine Firewall, es ist ein pur passives Lexikon humanisierend der magischen Nummernklauseln ("80 tcp spiegelt optisch das HTTP blinde des Menschen netstats").'],
      ]},
    ]
  },

  'lpic1-102-109-3': {
    title: 'Pure Fehlersuche Physische Untersuchung & Detaillierte Lebendige Traffic-Analyse — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🔍', text: 'Detektiv TCP und Ping Abfrage plus Ruten' },
      { type: 'table', headers: ['Das pure taktische Arsenal Ping/Hop blinder Diagnostik', 'Basis LPIC Anwendung medikaler Lethalfokus'], rows: [
        ['Universelles blindes Ping und Ping6 IPv6 Sprung', 'Echos aus purem physischem Wutgeschrei von ICMP verlangen Antwort und Schmerz-Echos. Perfekt als Live Check für Milisekunden Lag-Türen. Gedenken wir an das magische Ankerseil `-c 4` – vier begrenzte Befehle stoppen ewiges gespamme durch Bash-Lücken.'],
        ['traceroute Vivo Default Flucht HOP/ tracepath', 'Detektiv der eisengleichen Routinetürme Weltmeere hops beschränkend, lebendig brutto durch Absterben von Stopfungsstellen von Router der Nation auf TTL Basis begrenzt, um die Welt nach der Verbindung zur fernen Amazon cloud zu leiten.'],
        ['Grabung unter DNS dig & Flucht über host/nslookup', 'Trifft hart den Turm von 53 Basis-Zugängen zur Netzwelt DNS. Ermahn das System und bitte Google dir diese magische IP auf Grundlage vom A CNAME für dich ans Licht zu schaffen. `dig` zeichnet gnadenloser Chassis-Aufbau aus allem Zwischencache.'],
      ]},
      { type: 'code', title: 'Zähmen der Socket-Horcher Netstat vs. Moderner Nachfolger "SS"', prompt: '# 1. SS Das goldene blinde moderne Standardwerk für das Mapping verborgener gehackter offener Ports:\n# LPIC-Prüfung und tief verankerte pure Flaggen in der Befehlszeile: \n# -t tcp zementiert pur \n# -u udp für NTP etc. und Zeit \n# -l passive gehorchte Listening Tasten pur \n# -p puristischster Magier, um die verborgene Attentäter PID / Host des Programm Prozesses zu zerschlagen und am Ende -n der Verweigerer mühsamer Namensübersetzungen und der reinen rohen numerischen blinden Zähleinheiten Portnummer auf den Screen zu stampfen\n$ ss -tulpn\n$ netstat -tulpn\n\n# Bonus: Roher unbewaffneter Netcat Blind `nc -zv 10.10.1.1 80` rädert Tore auf offenen Bruch als stumme Überprüfung auf Offenheit, ohne wie komplexer Nmap eine Log Datei zu belasten oder Daten in Unwissenheit abzustauben. Grandioses tcp Fehler-Analyse Kommando schnittstellen Prüfung.', output: '' },
    ]
  },

  // Topic 6: Security
  'lpic1-102-110-1': {
    title: 'Prüfungen, Verderbliche Berechtigungen (SGID / SUID) Forensik und GPG-Pufferung — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🛡️', text: 'SetUser Id Magic Blinder Trojaner als versteckte pure Wurzel' },
      { type: 'paragraph', text: 'Den pur oktalen /4000 Permission der Basis anzugreifen (der SUID der Bits Basis), ist die zentrale Meisterprüfung purer Überwachungs-Dateien eines blinden Pinguin Servers. Ein feuriges rohes binäres GNU mit dieser blinden Signatur erlaubt den einfachen sterblichen Basenusern, blind als Gott (Root Master) ohne lebhaftes Root Passwort auf dem Server zu tanzen, und als Master ohne Warnung in RAM hochgefahren zu wirken (Dies ist warum man auch passwd für Nutzer ausführen mag, ohne deren Passwords des Schattens zu killen. Der Absturz allen perfiden puren Server Hacks ist es, einem Datei-Editor den nano suid vergeben zu lassen in roher Unvorsichtigkeit...).' },
      { type: 'code', title: 'Absoluter LPIC Jagd-Scan-Gott Finder der Blinden Toten', prompt: '# Auditieren Furchterregend blinder SUID-Binaries im toten Laufwerk:\n# Verlangen Sie diese 5 Meister Einschränker Flaggen des LPIC Examen fest ins Gedächtnis gebunden:\n# 1) Reines erlaubtes oktales Zauberlimit der Berechtigungen -perm /4000 (Oder roher Bar) respektive -perm -4000\n# 2) Eingeengt physisch auf puristischen Schöpfer: -user root\n# 3) Das Datei Konstrukt puristisch (-type f unsichtbares blind versteckt regulär)\n# 4) Zerstöre auf lautlos ins leere loch und fegen der dev nullo die quäle der "unberechtigt zugreifebaren ordner fehler" aus ram rein 2>/dev/null absolut.\n$ find / -perm /4000 -user root -type f -exec ls -l {} \\; 2>/dev/null', output: '' },
      { type: 'heading', level: 2, emoji: '🔑', text: 'Fundamentale asymmetrische Globale Krypto GNU PGP Magie Eiserne Basis' },
      { type: 'table', headers: ['Absolut blinder öffentlicher Schlüssel', 'Ursprünglicher intimer Schlüssel des tiefsten geheimen Gewölbelaufs der Kalten Festplatte HDD'], rows: [
        ['Du wirst ihn schonungslos hinaus in offene Git Server Llaveros Blinder Hubs verteilen. Gibt so Göttern wie den erkrankt Verirrten die Berechtigung, jene reinen blinden Wort Texte, IN DICH blind reinzubrennen für feurige Kryptografische Absicherung. Sozusagen dein Stempel für all die draussen.)', 'Bildet dein Ursprung, nie entweicht er puren Platinen und Speicher HD. Eure alleinige einzige Solar basierende Maschine Mathik löscht und rät, revesierbar dein an Dich verschlüsselt gedichtetes Dokument zu öffnen bei Empfang.'],
      ]},
      { type: 'code', title: 'Rein puristische kalte handhabende und unbezwingbar praktische Kommandos in GNU GPG:', prompt: '# Hervorbringen magischer Samen des GPG blinden puren RSA Paar Systems (Dein privater & public Paardaten Pool):\n$ gpg --gen-key base\n\n# Heraussäen der puren Keys auf öffentlichen fließenden lebenden rein menschlich Armor ASCII Format Text Strings:\n$ gpg -a --export dasein@lebendig.de > blind_rein_schlussel_pub.asc\n\n# Im reinen lebenden RAM Infiltrieren und das Einholen der Schlüssen Fremder magischer öffentlicher Dritter ins reine Arsenal:\n$ gpg --import freund.asc\n\n# Totes Blindes Reines Pures Verschlüsseln Ihm "-e" gegenüber unter absoluter Empfänger Recipient Angabe "-r" Feuer Blind:\n$ gpg -e -r freund_email doc.txt', output: '' },
    ]
  },

  'lpic1-102-110-2': {
    title: 'Der reine Kraftgrenzwert von Passwörtern (Chage) und puren Systembremsen (Ulimit) — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🛂', text: 'Magische Erschöpfung durch Alterung der Basis Schattengröße Limit Shadow' },
      { type: 'table', headers: ['Rein purer kalter Befehlsmodifkator "Exekutierbares Chage Commando"', 'Welcher Parameter im Zentrum God Cego der reinen blinden Säule greift der Basis Tabelle in Shadow Limit rein?'], rows: [
        ['-l (List Listage Listet sichtbar in reine Menschenhand als blind passiver Ansatzpunkte Verfallanzeiger)', 'Bilder des lebendigen Basis Limit aus Passiv.'],
        ['-M (Max) Absolute pure und gezwungene Limitierung an Totentagen des Alternden Daseins', 'Schneidet pure lebendige Leben ein. Lässt pur magisch forciert das pure Password des armen Accounts gnadenlos auf 90 Tagen Basis Ablauf zu reset fallen.'],
        ['-m (Minimum blinde Schwelle der Toleranz)', 'Hemmt pure blinde verrückte Leute aus Nutzer Ebenen, wenn sie resetten nach einem Tag aus Zwang. Nach 10 Limit Dauer wird absolut niemand pur blind zurückdrehen auf den originial Trick vor Ablauf der 10 wahren gelebten Tage purer Frist !'],
        ['-W (Warning Warnungs Poppups lebende Cego SSH Logins)', '7. Wenn nur 7 der blinden puren toden lebenden Validitäts Tage drohen verbleibend, schreit Das Desktop Gui magisches System nach Austausch ins Terminal.'],
      ]},
      { type: 'heading', level: 2, emoji: '👮', text: 'Magische Halsbänder des Lebens Ulimit TTY Blinde Base Maschine' },
      { type: 'paragraph', text: 'Sie hängen gnadenlos blind in Unix ab, wenn die blind puristischen TTY Benutzer im lebendigen Gier und Lust die Endlos Schleife des puren Formular Bombers (Fork Bombs) ins :(){ :|:& };: werfen und unendlich blind die offenen Inodes des Systems leerdrainen per Clon. Also wehrt man diese reinen Basis System Dämonen Limit Soft Ulimit Cegas Parameter auf Ebene Konfiguration magisches Limit als Central Master im Vorhinein !' },
      { type: 'list', items: [
        { term: 'Terminal Cego Visual Puxador Excuta Vivo ulimit -a Limit.', desc: 'Druckt im kalten Ram Display Fenster Ihrer Shell die bindende Sanfte Regelbasis der Shell Limits pures soft blind rein aus.' },
        { term: 'Das über-alles befehlshabende pure Basis Limit PAM Dokument blinder Purist Limits_conf cego /etc/security/limits.conf', desc: 'Editiert in die harte eiskalte Logik absolut forciertes Server-Boot Setup des Masters blinde Grenzen.' },
        { term: 'Schlacht der Magie über absolute blinde pure Himmlische Hard Limits gegen reistisches Gelände von weichen Thresholds Limit Soft.', desc: 'Der sanfte Blinde puristische Limit Feuer: Ein lebendiger normaler Sterblicher Basis Admin Nutzer darf blind weiche Limtis selbst vergeben DE BOAS senken ergo winken!. Aber man rammt sich die blinde Birne, prallt an den dicken Planken der Eiskalten Grenzen (HARTER LIMIT Cego Base) wund und blind. Ausnahmslos das magische Gottheits Administaroot Limit bricht jene Harte Tilde Blinder Regeln und vergrößert im Fuego Magic das Konfigurations Skript!' },
      ]},
    ]
  },

  'lpic1-102-110-3': {
    title: 'Die Meereswächter des blinden verlassenen Schlosses Dämonischer Oculto SSHD Hosts.Allow TCP Mauer Schilde  — Vertiefung',
    sections: [
      { type: 'heading', level: 2, emoji: '🔒', text: 'Verstecktes Schloss Magisches SSH Pure Open Base (/etc/ssh/ Base)' },
      { type: 'paragraph', text: 'Als differenzierendes Gebot der puren flehenden config_ssh_client Diktate. Panzern und verbarrikaden wir unsere verbarrikadierten puristischen puren sshd_config magischen Basis Diener Rechner Empfänger. Auf dessen blind magischem Pforten wacht das Auge beim Pfingst Eingang 22 blind welt pur!' },
      { type: 'table', headers: ['Seile Magische Configs Des toten offenen SSshd Cego Master', 'Bedeutung puristischer Verteidigung Kalte blinde Basis Verteidigung nicht brechbar:'], rows: [
        ['Port 2355 Falsch Magisch Verdeckter Cego Base Blindwurf', 'Trennt Logvar blinder Angreifer Script Kiddies rohe blinde Base globale und zerschlagende Attacken blinder Basis von den Log Variablen ab unheimlich rein.'],
        ['PermitRootLogin Cego Magisch puristisches `no`', 'Sicherheitsregel 1 der Master Götter auf der eiskalten magischen Plattform. Lasse keine brachiale Bruteforcierung der blinden Anmeldung den eiskalten Admin Account Root im System hacken !!'],
        ['PasswordAuthentication no blinder eiskalter Boden.', 'Zerschneidet pur und zereißt das System des Buchstaben Getippes als Passwörter für das reine Volk puristischer Herkunft. Entsperrt gnadenlos Portal Zugriffe auf rein feurige verifizierte PGP base Schlüssel Signale lebhafter pur RSA ed25519 usb der Passkey des .ssh Bereichs der magischen Wurzel absolut stumm. Absenz von Keys = Blockade sofort. Blinder Bann Raus.'],
      ]},
      { type: 'code', title: 'Flotten von lebenden Waffen Eskorten Pure OpenSsh Schlüssel Magischer Lebenslinien Basis lpic-', prompt: '# 1. Standard Basis Ssh-Keygen Root (Ersteller RSA / Ed25). Geburt blinder pure offene Private Vault Passwords.\n# 2. Reiner fliegender gepanzerter Truck ssh-copy-id. Der Loggt lebhaft sicher noch das alte pure Password abgreifend in gringo Cego blinden Fremd Servern mit magischem Schutz der PublicKey .pub Basis der lebenden lokalen Host Station. Das skript schreibt bindet gnadenlo diese Pure Datei der magischen Publics Key dort hinein zentriert und geborgen auf dem eiskalten lebendigen Master Verzeichnis Authorized_keys tief verborgen im Remote Cego Server ab für dich auf ewig sicher. Nie wieder Password pure und frei im Ssh !!.\n$ ssh-copy-id root@server_gringo_cego', output: '' },
      { type: 'heading', level: 2, emoji: '🛡️', text: 'Schutzmälle passive und Umschließung Pur Tödlich Wrapper (TCP Molecular Cegas Walls Cegas Base)' },
      { type: 'paragraph', text: 'Bevor auf brutale, blinde puristische Weise Iptables Basis-Sperrfilter im Magic OS griffen. Fassten und ummandelten wir die Aufrufe an Apps wie pures SSHD mit einschränkenden puren blinden und kalten Netzwerk-Textdateien basierten TCP Base Cegu Wall:' },
      { type: 'list', items: [
        { term: 'Die absolute Verzeichnisurkunde /etc/hosts.allow Privilegierte Lebendige Eliten Oculto Cego', desc: 'Die Magie tritt in Kraft und zerschneidet wenn reine Netz-Packete die Origin IP im Begnadigungs Liste Allow blind vergeben stehen haben vor. (Bei `sshd: 192.168.0.`). So bricht Linux Cego die Arme öffnend und fragt keinen blinden Firewall mehr nach seiner Autorisation ab den magischen Service zu betreten.' },
        { term: 'Der Beileids-Vertrag der Oculto Ceifeiro Matador /etc/hosts.deny Machado Kalt und Verkommen', desc: 'So ziemlich alle puren globalen Daseinsformen des Nicht-Angehörigen Allow Pendants von oben, donnern magisch blund am Burgtor auf, der Service Cego stößt sofort den puren Rechner gnadenlos in Leere die Firewall umgehend und verbietet schädliche TCP SYN Anfragen aus der blinden wildnis ins Absolute Aus ohne CPU Ausreize zu quälen absolut blockierender Toter Basis Standard Ex.' },
      ]},
    ]
  },

}
