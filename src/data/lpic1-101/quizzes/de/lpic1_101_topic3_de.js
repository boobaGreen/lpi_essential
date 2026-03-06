// LPIC-1 101 Topic 3 Quiz - German

export const lpic1_101_topic3_de = [
  // L1: Ligne de commande
  {
    id: 10311,
    question: "Welche Syntax repräsentiert die streng korrekte Methode unter Linux Bash, um das Wort 'Hallo' temporär in die lokale Speicherhülle einer neuen Variable mit dem Namen 'GRUSS' zu legen?",
    options: [
      "set GRUSS = Hallo",
      "GRUSS='Hallo'",
      "GRUSS = 'Hallo'",
      "export $GRUSS=Hallo"
    ],
    correctAnswer: "GRUSS='Hallo'",
    explanation: "Die Bash verbietet jegliche Leerzeichen rund um das Gleichheitszeichen '=' bei Zuweisungen strikt. Es muss direkt aneinanderkleben als NAME=WERT formuliert sein!"
  },
  {
    id: 10312,
    question: "Um zweifelsfrei zu verifizieren, dass ein Sysadmin keinen versehentlich überschriebenen Alias namens 'rm' ruft, sondern die tatsächliche Binärdatei der Löschapplikation vom Laufwerk ansteuert... welches Werkzeug verrät den genauen Code-Typus der Befehlsausführung?",
    options: [
      "whereis rm",
      "type rm",
      "whatis rm",
      "find rm"
    ],
    correctAnswer: "type rm",
    explanation: "'type' unterscheidet und verrät, ob ein Wort eine manipulierte Shell-Funktion, ein abstrakter Alias, ein RAM-internes Shell Built-in (wie 'cd') ist, oder ob es wirklich von der externen Programmdatei '/bin/rm' stammt!"
  },
  {
    id: 10313,
    question: "Wie verleihen wir dem geschlossenen Zustand einer lokalen Variable MYSQL_PORT='3306' globale Reichweite, so dass jedes später geöffnete kleine Unterskript aus dieser aktuellen Console diesen Wert 'erbt'?",
    options: [
      "global MYSQL_PORT",
      "export MYSQL_PORT",
      "bash_ENV MYSQL_PORT",
      "publish MYSQL_PORT"
    ],
    correctAnswer: "export MYSQL_PORT",
    explanation: "Das Shell-Build-in 'export' verlagert einen simplen String aus dem lokalen Gefängnis in die weite Umgebungssphäre (Environment). Er wird so in die Blutbahn aufgerufen untergeordneter Skript-Kinder gepumpt."
  },

  // L2: Filtres
  {
    id: 10321,
    question: "Dieser Unix-Textsezierer bricht Log-Dateien auf: Welcher Befehl isoliert strengstens NUR die 3. Text-Spalte (Wenn die Daten durch einen Doppelpunkt ':' als Delimiter getrennt sind)?",
    options: [
      "cut -d: -f3 daten.txt",
      "cut -c ':' -N 3 daten.txt",
      "grep -d ':' -f 3 daten.txt",
      "awk ':' print 3"
    ],
    correctAnswer: "cut -d: -f3 daten.txt",
    explanation: "'cut' ist das Skalpell der Passwd- und Systemtabellen. '-d' wählt das exklusive Trennsymbol. Der Parameter '-f' (Field) zupft dann genau diese definierte Stelle zur Sichtbarkeit heraus."
  },
  {
    id: 10322,
    question: "Wie zwingt man ein Terminal, eine Apache Logdatei live endlos zu überwachen und in Echtzeit permanent selbst zu aktualisieren, falls dort eine Sekunde später plötzlich tief unten eine neue Codezeile geschrieben wird?",
    options: [
      "cat -all /var/log/apache.log",
      "tail -f /var/log/apache.log",
      "head -end /var/log/apache.log",
      "less +F /var/log/apache.log"
    ],
    correctAnswer: "tail -f /var/log/apache.log",
    explanation: "Durch den Flag '-f' (Follow / Folgen) gefriert 'tail' den Terminal-Prompt ein und pumpt alles Neue fließend und unmittelbar aus dem Ende des Dateischlunds auf den Monitor der Administratoren!"
  },
  {
    id: 10323,
    question: "Sie müssen strikt nur die bloße numerische Zahl ausgeben: Zeig mir den Totalen Zeilenwert vom Roman 'Krieg_und_Frieden.txt'!",
    options: [
      "count -l krieg.txt",
      "wc -l krieg.txt",
      "grep -c '*' krieg.txt",
      "tail -n count krieg.txt"
    ],
    correctAnswer: "wc -l krieg.txt",
    explanation: "'wc' (Word Count) ermittelt den Umfang des Textes. Reduziert durch den Modifikator '-l' (Lines) wird das Output-Format allein auf die puristische Mathe-Ausdruck der Returns-Zahlen limitiert."
  },

  // L3: Fichiers de base
  {
    id: 10331,
    question: "Der rohe 'find' Befehl krallt sich langsam an jedem Ordnerzweig der gesamten echten Server-Festplatte hinab. Was ist das technische Gegenstück dazu bei 'locate'?",
    options: [
      "Eine Google-Webanfrage",
      "Sucht absolut exklusiv im RAM-Müll.",
      "Das Abfragen einer zuvor in einer stillen Nachtstunde (cron) statisch generierten, extrem schnellen mlocate.db Inhaltsdatenbank.",
      "DNS-Netzwerk-Routing"
    ],
    correctAnswer: "Das Abfragen einer zuvor in einer stillen Nachtstunde (cron) statisch generierten, extrem schnellen mlocate.db Inhaltsdatenbank.",
    explanation: "Die Magie hinter Millisekunden-Suchen bei 'locate': Es schaut niemals wirklich auf Ihre C:/ D:/ Laufwerke in diesem Sekundenbruchteil! Es liest im Systemarchiv. Dateigeburten am heutigen Morgen wird er folglich auch vollends ignorieren!"
  },
  {
    id: 10332,
    question: "Das Band-Archiv 'tar' besitzt ursprünglich keinerlei Datenbeschneidung/Kompression. Mit welcher geheimen Parameter-Zutat zwingen wir den tar-Aufruf, während des Erschaffens still und heimlich GZIP-Quetschung über die gepackten Dokumente auszuüben?",
    options: [
      "tar -xjf datei",
      "tar -czvf ordner.tar.gz zielordner",
      "tar -create -zip ordner.zip",
      "gzip -tar ordner"
    ],
    correctAnswer: "tar -czvf ordner.tar.gz zielordner",
    explanation: "C = Neuerstellung einer Tarball-Archive. Z = Der Schlüssel! Zieht den starken Code von GunZIP. V = Plapperndes 'Verbose'. F = Finale Bestimmung des Outupt-Namen ('ordner.tar.gz')."
  },

  // L4: Flux
  {
    id: 10341,
    question: "Welcher dieser Konsolen-Idioms entkoppelt radikal Kanal 1 (Erfolge textlich ins ewige Leere in den Linux Nulldev auslöschen!), ABER bündelt schlauerweise den Alarm für dichte Errors von Stream 2 zwingend auf jenes ehemals positive Outputrohr Stream 1?",
    options: [
      "find / -name 'conf' > /dev/null 2>&1",
      "find / -name 'conf' 2> /dev/null > 1",
      "find / -name 'conf' | dev null 2 1",
      "find / -name 'conf' >> /dev/null &2=1"
    ],
    correctAnswer: "find / -name 'conf' > /dev/null 2>&1",
    explanation: "Es ist DAS klassisch-Linux Routing. Erst eliminiert man das Positve ('> /dev/null'). Direkt danach zerschmilzt man Error mit der Syntax '2>&1' und verschweißt so exakt die Error 2 Umleitung IN das soeben geleerte Rohr von 1... ins Nichts!"
  },
  {
    id: 10342,
    question: "Klemptner-Weiche im Terminal! Welches Spezial-Tool verzweigt einen laufenden Wasserstrom an Kommando-Output aus einer Pipe in einer Art Y-Form, um den Fluss PARALLEL in eine gespeicherte Festplattendatei abzufüllen und zeitgleich sofort die Reste weiter auf Sicht an sein nachrückendes Monitor-Zusatzprogramm fließen zu lassen?",
    options: [
      "cat pass | split save.txt | grep root",
      "cat pass | tee save.txt | grep root",
      "cat pass >> save.txt | grep root",
      "cat pass > tee.txt & grep root"
    ],
    correctAnswer: "cat pass | tee save.txt | grep root",
    explanation: "'tee' verschluckt fließende Eingangs-Standard-In, druckt davon eine reale Kopie als Hard-Datei 'save.txt' statisch vor die Feste ab, und lässt dann tapfer das Originalwasser fließend unbeirrt dem 'grep' an die Kehle springen!"
  },

  // L5: Gestion des Process
  {
    id: 10351,
    question: "Ein Node-Backbone in Ihrem Enterprise hängt unrettbar fest und zerschmettert die RAM. Es ist Zeit für eine Kernel-Hinrichtung (SigKill) einer PID auf Prozessebene. Welche Klinge schneidet hier scharf und fatal ohne Nachfrage?",
    options: [
      "kill -15 3042",
      "kill -9 3042",
      "killall node",
      "kill -stop 3042"
    ],
    correctAnswer: "kill -9 3042",
    explanation: "Der 'Neuener' ist der Linux-Sensengriff (-9). Er verzichtet gnadenlos auf Warnung SIGTERM (-15). Das Node-Tool ahnt nicht einmal sterben zu müssen, der Kernel raubt ihm nur brachial in der Hundertstelsekunde sämtlichen Speicherzugriff zum Exitus."
  },
  {
    id: 10352,
    question: "Oops! Sie entfesselten eine gewaltige wget-Saugaktion in ihrer Haupt-Shell, jedoch das flinke Hintertür-Ampersand '&' vergessen! Jetzt friert der Bildschirm nutzlos für den Download ein. Mit welchem Tastengriff zwingen wir das Monster augenblicklich in den Stand-By-Sleep (Suspended) und schnappen uns den sauberen Terminalprompt wieder?",
    options: [
      "Ctrl + C",
      "Ctrl + D",
      "Ctrl + Z",
      "Alt  + F4"
    ],
    correctAnswer: "Ctrl + Z",
    explanation: "'Ctrl+Z' fröstelt die Aktivität. Linux verurteilt es in den passiven Systemschlaf (Stopped). Sie befreien Ihre Finger ans weiße Prompt zurück. Nun lässt er sich per 'bg' als Geist dauerhaft verdammen zu rechnen ohne Sie dabei einzugrenzen."
  },

  // L6: Priorité
  {
    id: 10361,
    question: "Über die UNIX Rechenuhr des Scheduling (Nice-Levels oder NI): Wecher konkrete Prioritäts-Wert erschafft die ultimativste bösartigste egoistisch forderndste Maschine, vor der gar alle anderen Kernel-Prozesse zitternd beiseitetreten müssen?",
    options: [
      "Die Positive Zahl +19",
      "Der Extrem-Minuspunkt -20",
      "Die Gleichgewichtszahl 0",
      "Eine Plus 10"
    ],
    correctAnswer: "Der Extrem-Minuspunkt -20",
    explanation: "Negative Ziffern erheben den Super-Zwang für sich alleine (Aggressiv zu anderen Tasks). Das Recht so gnadenlos Rechenzyklen abzufordern (-20), muss aus strikten Limitierungen vom Kernel gar verwehrt werden und ist in Linux einzig Root erlaubt! (Werte wie +19 machen äußerst nachgiebig/nett!)"
  },

  // L7: Regex
  {
    id: 10371,
    question: "Wenn Sie in Basic Regular Expressions (RegEx) das Anker-Zeichen namens 'Zirkumflex / Caret' `^` positionieren, zwingen Sie strengstens das Suchprogramm: Ein Trefferwort darf absolut erst als korrekt zählen wenn:",
    options: [
      "Es das Textziel an den ultimativen und wahrhaften nackten Anfang jeder beginnenden Reihe bindet.",
      "Es keinerlei unsaubere Vokale enthält.",
      "Es exakt auf die Linie mit einem Carriage Return vor dem Fall hinabkracht.",
      "Ein Buchstabe mit einem Stern ins unendliche springt."
    ],
    correctAnswer: "Es das Textziel an den ultimativen und wahrhaften nackten Anfang jeder beginnenden Reihe bindet.",
    explanation: "Der '^'-Pfeil nagelt Suchergebnisse auf Spalte 1, Position 1 fest! In einem Satz wie 'Ein root Admin kam', scheitert `^root` wehklagend. (Um Treffer unnachgiebig auf das Ende des Text-Abgrunds festzufrieren, existiert für grep das '$')"
  },

  // L8: Vi
  {
    id: 10381,
    question: "Wie löst die Urversion des Editors 'VI' im ruhigen 'Befehlsmodus' instinktiv und in einem brutalen Schlag das Skalpell-Manöver der Vollen-Zerschneidung und dem Eliminieren (Ausschneiden) jener gesamten Zeile, die Ihr Cursor just berührt?",
    options: [
      "Eine Kaskade aus ctrl+del",
      "Buchstabe 'y' mal 'y'",
      "Die doppelte schnelle Betätigung 'd' hintereinander getrommelt: 'dd'",
      "Durch Alt + X"
    ],
    correctAnswer: "Die doppelte schnelle Betätigung 'd' hintereinander getrommelt: 'dd'",
    explanation: "Die Command Area duldet keinen Roman! 'dd' reißt das Fundament rücksichtslos heraus (Delete). Wenn Sie sanft klonen und zeilenweise den Puffer im Gedächtnis speisen wollten, ordert der Editor das Yank-Kommando ('yy')."
  }
]
