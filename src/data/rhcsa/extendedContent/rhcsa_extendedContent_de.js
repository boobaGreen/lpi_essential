export const rhcsaExtendedContentDE = {
  'rhcsa-1-1': {
    title: 'Deep Dive: Erweiterte Umleitung und Deskriptoren',
    sections: [
      { type: 'heading', level: 2, emoji: '🔀', text: 'Datei-Deskriptoren in Linux' },
      { type: 'paragraph', text: 'In Linux ist "alles eine Datei", einschließlich Ein-/Ausgabeströmen. Jeder Prozess hat standardmäßig drei geöffnete Datei-Deskriptoren (FD):' },
      { type: 'table', headers: ['FD', 'Name', 'Standardzweck'], rows: [
        ['0', 'stdin', 'Tastatureingabe'],
        ['1', 'stdout', 'Terminal-Ausgabe (Erfolg)'],
        ['2', 'stderr', 'Terminal-Ausgabe (Fehler)'],
      ]},
      { type: 'code', title: 'Kombinierte Umleitungen', prompt: '# Schreibt stdout in eine Datei und verwirft stderr\n$ command > output.txt 2> /dev/null\n\n# Leitet stderr an stdout (2>&1) und dann stdout in die Datei weiter\n$ command > output.txt 2>&1\n\n# Bash-Kurzbefehl für den gleichen Effekt (stdout und stderr)\n$ command &> output.txt', output: '' },
      { type: 'infobox', variant: 'tip', title: 'Prüfungs-Tipp', content: 'Bei Befehlen wie "find /", die endlose "Berechtigung verweigert"-Meldungen erzeugen, sorgt ein angehängtes "2> /dev/null" für eine saubere Suchausgabe.' }
    ]
  },
  'rhcsa-4-2': {
    title: 'Deep Dive: LVM-Architektur',
    sections: [
      { type: 'heading', level: 2, emoji: '🧱', text: 'Physisch vs. Logisch' },
      { type: 'paragraph', text: 'Der Logical Volume Manager (LVM) trennt physische Datenträger vom Dateisystem, was eine hohe Skalierbarkeit im Betriebssystem ermöglicht.' },
      { type: 'list', items: [
        { term: 'Physical Element (PE)', desc: 'Die grundlegenden Bausteine des LVM (Standard: 4 MB). Das PV wird in PEs aufgeteilt.' },
        { term: 'Logical Element (LE)', desc: 'Sie werden 1:1 einem PE zugeordnet (oder 1:N beim Raid).' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'In der Prüfung könnte eine Volume Group (VG) mit spezifischer PE-Größe (z.B. 16 MB) verlangt werden: "vgcreate -s 16M vgname /dev/sdb1".' }
    ]
  },
  'rhcsa-9-1': {
    title: 'Deep Dive: SELinux-Fehlerbehebung',
    sections: [
      { type: 'heading', level: 2, emoji: '🕵️', text: 'Troubleshooting-Workflow' },
      { type: 'paragraph', text: 'Wenn ein Dienst auf magische Weise blockiert wird – das ist zu tun:' },
      { type: 'timeline', events: [
        { year: 'Schritt 1', title: 'SELinux überprüfen', desc: 'Führen Sie "setenforce 0" aus und starten Sie den Dienst neu. Geht es nun, ist SELinux verantwortlich. Zurückstellen mit "setenforce 1".' },
        { year: 'Schritt 2', title: 'Logs prüfen', desc: 'Datei /var/log/audit/audit.log nach "denied"-Meldungen scannen oder "ausearch -m AVC -ts recent" nutzen.' },
        { year: 'Schritt 3', title: 'Reparatur durchführen', desc: 'Mit "sealert -a /var/log/audit/audit.log" generieren Sie exakte Befehlsketten zur Lösung, wie zum Beispiel setsebool oder semanage.' },
      ]},
    ]
  }
}
