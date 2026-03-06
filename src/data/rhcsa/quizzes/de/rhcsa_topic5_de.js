// RHCSA Quiz — Topic 5: File System (Deutsch) — 20 questions

export const rhcsaTopic5QuizzesDE = [
  // ─── ext4 and XFS ───
  {
    id: 'q-rhcsa-5-1-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Mit welchem Kommando erschaffen Sie ein nigelnagelneues ext4-Dateisystem auf der Partition /dev/sdb1?',
    options: ['mkfs -t ext4 /dev/sdb1', 'mkfs.ext4 /dev/sdb1', 'format ext4 /dev/sdb1', 'Sowohl A als auch B funktionieren tadellos'],
    correct: 3,
    explanation: '`mkfs.ext4` und `mkfs -t ext4` sind absolut identisch (wobei erstere die weitaus gängigere Abkürzung darstellt).',
  },
  {
    id: 'q-rhcsa-5-1-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welches Dateisystem (Filesystem) krönt RedHat seit RHEL7 und RHEL9 als den absoluten Standard für alle neuen Partitionen ab Werk?',
    options: ['ext4', 'xfs', 'btrfs', 'ext3'],
    correct: 1,
    explanation: 'XFS ist der König bei RHEL geworden. Seine Skalierbarkeit für gigantische Kapazitäten und extreme Parallel-Performance stachen Ext4 aus.',
  },
  {
    id: 'q-rhcsa-5-1-003', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Sie haben eine Platte auf /data als XFS gemountet. Unter welchem Befehl offenbart XFS all seine intimen Block-Metadaten und Bau-Parameter?',
    options: ['xfs_info /data', 'xfs_check /data', 'tune2fs -l /data', 'dumpe2fs /data'],
    correct: 0,
    explanation: '`xfs_info <mount_pfad>` ist der Diagnosezettel für XFS. Werkzeuge wie tune2fs/dumpe2fs greifen nur bei der veralteten Ext-Familie (ext2/3/4).',
  },
  {
    id: 'q-rhcsa-5-1-004', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Super-GAU: Ein XFS-Dateisystem ist korrupt. Mit welchem schweren Geschütz wird in RHEL die Reparatur eingeleitet?',
    options: ['fsck.xfs /dev/sdb1', 'xfs_repair /dev/sdb1', 'e2fsck /dev/sdb1', 'xfs_rebuild /dev/sdb1'],
    correct: 1,
    explanation: '`xfs_repair` rückt dem Laufwerk zu Leibe. VORSICHT: Die betroffene Partition DARF WÄHRENDDESSEN NICHT GEMOUNTET SEIN, sonst droht Totalverlust.',
  },
  {
    id: 'q-rhcsa-5-1-005', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Welche raffinierte Mount-Option in fstab sorgt dafür, dass ein Netzlaufwerk bei längerer Inaktivität (Timeout) vollautomatisiert ausgeworfen wird?',
    options: ['noauto', 'auto', 'x-systemd.automount', 'nofail'],
    correct: 2,
    explanation: 'Die geniale Magie von `x-systemd.automount` steuert (in Kombination mit x-systemd.idle-timeout), dass Systemd Freigaben bei Zugriff lädt und bei Stille abwirft.',
  },

  // ─── LUKS Encryption ───
  {
    id: 'q-rhcsa-5-2-001', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welcher Befehl formatiert die Festplatte /dev/sdc1 gnadenlos um und kleidet sie in einen undurchdringlichen LUKS-Verschlüsselungscontainer?',
    options: [
      'cryptsetup encrypt /dev/sdc1',
      'cryptsetup luksFormat /dev/sdc1',
      'luks format /dev/sdc1',
      'cryptsetup -t luks /dev/sdc1',
    ],
    correct: 1,
    explanation: 'Das berüchtigte `cryptsetup luksFormat` initiiert die Versiegelung, verlangt ein fettes "YES" und stanzt Ihr neues Masterpasswort in den Header.',
  },
  {
    id: 'q-rhcsa-5-2-002', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Der Tresor auf /dev/sdc1 existiert. Wie lautet der Code, um den LUKS-Container nun zu entschlüsseln und ihn im System als virtuelles Laufwerk "datadisk" bereitzustellen?',
    options: [
      'cryptsetup open /dev/sdc1 datadisk',
      'cryptsetup luksOpen /dev/sdc1 datadisk',
      'luks open /dev/sdc1 datadisk',
      'Sowohl Aufruf A als auch B bewirken das Magische',
    ],
    correct: 3,
    explanation: 'In neuzeitigen Versionen sind `open` und `luksOpen` Synonyme. Der entschlüsselte Klartextbereich taucht dann benutzbar unter `/dev/mapper/datadisk` auf.',
  },
  {
    id: 'q-rhcsa-5-2-003', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Der Server bootet unbeaufsichtigt. Wo tragen Sie in RHEL das Mapping (Name, Blockdevice, Keyfile) ein, damit LUKS-Volumen beim Boot automatisch, ohne manuelle Passworteingabe aufspringen?',
    options: ['/etc/fstab', '/etc/crypttab', '/etc/luks.conf', '/etc/keyfiles/'],
    correct: 1,
    explanation: 'Die heilige `/etc/crypttab` (Crypt-Table) ist dafür da, Systemd zu instruieren, WO er vor der FSTAB (welche blind mounted) die Schlüssel findet, um die LUKS-Riegel rechtzeitig zu knacken.',
  },
  // ─── NFS / CIFS / autofs ───
  {
    id: 'q-rhcsa-5-3-001', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Ohne dieses Basis-Paket verweigert RHEL9 strikt das Einhängen von linux-nativen NFS (Network File System) Netzwerklaufwerken. Welches ist es?',
    options: ['nfs-utils', 'nfs-client', 'rpcbind', 'cifs-utils'],
    correct: 0,
    explanation: 'Das obligatorische Paket `nfs-utils` schleppt die ganzen Mount-Helfer und Hintergrund-Dämonen (wie rpc) mit, die RHEL befähigen NFS zu trinken.',
  },
  {
    id: 'q-rhcsa-5-3-002', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Wie sieht in der klassischen `/etc/fstab` ein astreiner, dauerhafter Eintrag aus, um den NFS Share "192.168.1.10:/data" nach "/mnt/data" abzubilden?',
    options: [
      '192.168.1.10:/data /mnt/data nfs defaults 0 0',
      '/mnt/data 192.168.1.10:/data nfs defaults 0 0',
      '192.168.1.10/data /mnt/data cifs defaults 0 0',
      '192.168.1.10:/data /mnt/data nfs4 auto 0 0',
    ],
    correct: 0,
    explanation: 'Standard fstab Logik: <Quelle:mit_Doppelpunkt> <ZielMountPunkt> <Protokoll_Typ(nfs)> <Optionen> 0 0.',
  },
  {
    id: 'q-rhcsa-5-3-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Das komplexe Autofs. Wenn im Hauptkatalog /etc/auto.master steht, dass Mounts für /misc orchestriert werden sollen, auf welche untergeordnete Map-Datei zeigt er typischerweise standardmäßig?',
    options: ['/etc/auto.master', '/etc/auto.misc', '/etc/autofs.conf', '/etc/auto.nfs'],
    correct: 1,
    explanation: 'Der Master referenziert im Regelfall auf dedizierte Kind-Karten in Form von `/etc/auto.misc` oder spezifischen Pfadnamen, welche die eigentlichen Quell-Ziele mappen.',
  },
  // ─── ACL ───
  {
    id: 'q-rhcsa-5-4-001', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Die Standard-Rechte (UGO) rücken ab. Wie pressen Sie präzise NUR für den Sonder-Benutzer "mario" ein frisches Lese/Schreib-Recht (rw) per ACL auf den Ordner /project?',
    options: [
      'chmod u+rw /project',
      'setfacl -m u:mario:rw /project',
      'acl add mario:rw /project',
      'chacl mario:rw /project',
    ],
    correct: 1,
    explanation: 'Mittels `setfacl -m` (modify) geben wir der Typus (u = user), seinem Namen (mario) und den Rechten (rw) expliziten Einlass in die erweiterte Access Control List.',
  },
  {
    id: 'q-rhcsa-5-4-002', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Ein `ls -l` verrät durch ein kleines `+`, dass ACL Mächte am Werk sind. Wie machen Sie die genauen Besitzer und Sonder-ACLs der Datei augenblicklich explizit im Terminal sichtbar?',
    options: ['ls -la file', 'getfacl file', 'showacl file', 'acl -l file'],
    correct: 1,
    explanation: '`getfacl` entblößt die detaillierte Tabelle der feingranularen Benutzer und Gruppenrechte.',
  },
  {
    id: 'q-rhcsa-5-4-003', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Ein Ordner trägt die geheimnisvolle Last der "setGID" Berechtigung (chmod g+s). Was zwingt dies dem Ordner ab?',
    options: [
      'Dateien darin werden immer als Superuser root gestartet.',
      'Neu hineingeborene Dateien erben gewaltsam die "Gruppenzugehörigkeit" des Über-Ordners (Vererbung), statt die Gruppe ihres menschlichen Schöpfers anzunehmen.',
      'Nur root hat fortan das Privileg, in ihn zu schreiben.',
      'Das Verzeichnis macht sich damit völlig unlöschbar.',
    ],
    correct: 1,
    explanation: 'Das Sticky Group-ID Bit (g+s) ist DER Trick der SysAdmins für geteilte Ordner (Shared Folders), damit neue Files sofort der Team-Gruppe und nicht der Privat-Gruppe des Erschaffers gehören.',
  },
  {
    id: 'q-rhcsa-5-4-004', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Der Shared-Folder /shared ist super. Aber wie erzwingen Sie, dass auch in Zukunft jede frisch kreierte Datei automatisch Marios rw-ACL-Rechte "vererbt" bekommt (Default ACL)?',
    options: [
      'setfacl -m d:u:mario:rw /shared',
      'setfacl -d u:mario:rw /shared',
      'setfacl --default u:mario:rw /shared',
      'Sowohl Aufruf A als auch C (mit --default) befeuern diese magische Vererbung.',
    ],
    correct: 3,
    explanation: 'Das Präfix `d:` oder das Flage `--default` verankert eine Default ACL Regel tief am Ordner, welche auf künftige Kind-Dateien abfärbt.',
  },
  {
    id: 'q-rhcsa-5-4-005', lessonId: 'rhcsa-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Alte Schule: Ext4. Welches Attribut/Mount-Option mussten Sie in der /etc/fstab mitgeben, damit Ext4 das Setzen der ACL-Befehle überhaupt erst duldet?',
    options: ['acl', 'noacl', 'user_acl', 'ext_acl'],
    correct: 0,
    explanation: 'Das simple Mount-Flag `acl`. (Anmerkung: In modernen Kerneln um xfs/ext4 ist dies heutzutage meist tief im Kernel default-mäßig erzwungen, weswegen es oft gar nicht mehr notiert werden muss).',
  },
  // ─── Extra mixed ───
  {
    id: 'q-rhcsa-5-x-001', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: 'Eine Frage der Sicherheit: Welche fstab Mount-Option verbietet dem Kernel rigoros, jegliche darauf liegenden Skripte oder Binaries auszuführen (ideal für ein unsicheres /tmp)?',
    options: ['noexec', 'norun', 'nosuid', 'nodev'],
    correct: 0,
    explanation: '`noexec` fesselt das Laufwerk und macht Ausführungen (Execute/x) unmöglich. nosuid negiert nur die Erhöhung von setuid-Rechten, was auch beliebt ist.',
  },
  {
    id: 'q-rhcsa-5-x-002', lessonId: 'rhcsa-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Welches Werkzeug klatscht Ihnen quer über alle existierenden gemounteten Dateisysteme eine wunderschöne lesbare Liste der verbrauchten / freien Gigabyte (GB)?',
    options: ['lsblk', 'df -h', 'du -sh', 'stat /'],
    correct: 1,
    explanation: 'Das goldene `df -h` (Disk Free Human-Readable) zeigt die Globalauslastung jeden Mounts. Im Gegensatz zu "du" welches stur die Kilo-Summe eines einzigen lokalen Pfades ausspuckt.',
  },
  {
    id: 'q-rhcsa-5-x-003', lessonId: 'rhcsa-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: 'Sie mounten ein riskantes USB-Drive via fstab. Welches Zauber-Flag rettet den Server vorm Absturz / Emergency-Bootblockade, falls der USB-Stick beim Neustart fehlen sollte?',
    options: ['optional', 'nofail', 'noboot', 'ignore'],
    correct: 1,
    explanation: 'Das mächtige `nofail`. SystemD liest drüber, stellt den Verlust fest, zuckt mit den Schultern und bootet das Gesamtsystem fröhlich und heil weiter anstatt panisch in die Notfall-Shell zu sinken.',
  },
  {
    id: 'q-rhcsa-5-x-004', lessonId: 'rhcsa-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: 'Das LUKS Laufwerk unterliegt strenger Formatierungs-Ordnung: Auf was schießen Sie final den "mkfs.ext4" Format-Befehl ab, um das sichere Filesystem aufzubauen?',
    options: [
      'mkfs.ext4 /dev/sdc1',
      'mkfs.ext4 /dev/mapper/volume_name',
      'cryptsetup mkfs /dev/mapper/volume_name',
      'luks-mkfs /dev/mapper/volume_name',
    ],
    correct: 1,
    explanation: 'Niemals mehr die physische Roh-Platte formatieren! Nach dem LUKS-Aufschließen (luksOpen) entsteht das klare virtuelle Laufwerk (Mapper). Genau dieses `/dev/mapper/<name>` muss man nun in Ext4 formatieren.',
  },
]
