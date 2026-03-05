// RHCSA Quiz — Topic 6: Manutenzione Sistema (Italiano) — 15 domande

export const rhcsaTopic6Quizzes = [
  // ─── dnf ───
  {
    id: 'q-rhcsa-6-1-001', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Quale comando installa il pacchetto "httpd" con dnf?',
    options: ['dnf add httpd', 'dnf install httpd', 'dnf get httpd', 'yum install httpd'],
    correct: 1,
    explanation: 'dnf install <pacchetto> installa il pacchetto e le sue dipendenze. yum è il predecessore ormai deprecato.',
  },
  {
    id: 'q-rhcsa-6-1-002', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Come si aggiornano tutti i pacchetti del sistema?',
    options: ['dnf upgrade', 'dnf update', 'dnf upgrade-all', 'Sia A che B'],
    correct: 3,
    explanation: 'dnf update e dnf upgrade sono equivalenti su RHEL9. Aggiornano tutti i pacchetti installati.',
  },
  {
    id: 'q-rhcsa-6-1-003', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Come si trova quale pacchetto fornisce il file /usr/bin/vim?',
    options: [
      'dnf search vim',
      'dnf provides /usr/bin/vim',
      'rpm -qf /usr/bin/vim',
      'Sia B che C',
    ],
    correct: 3,
    explanation: 'dnf provides e rpm -qf risolvono entrambi il "quale pacchetto contiene questo file". rpm funziona solo se già installato.',
  },
  {
    id: 'q-rhcsa-6-1-004', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Come si configura un repository locale da un DVD/ISO in /etc/yum.repos.d/?',
    options: [
      'Creare un file .repo con baseurl=file:///mount/point',
      'dnf addrepo file:///mount/point',
      'rpm --import /mount/point',
      'dnf config-manager --add-repo /mount/point',
    ],
    correct: 0,
    explanation: 'Un file .repo con baseurl=file:///path configura un repo locale. gpgcheck=0 se non c\'è firma.',
  },
  {
    id: 'q-rhcsa-6-1-005', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Come si lista tutti i pacchetti installati?',
    options: ['dnf list all', 'dnf list installed', 'rpm -qa', 'Sia B che C'],
    correct: 3,
    explanation: 'dnf list installed e rpm -qa elencano entrambi tutti i pacchetti installati.',
  },
  // ─── rpm ───
  {
    id: 'q-rhcsa-6-2-001', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Quale comando rpm mostra i file contenuti in un pacchetto installato?',
    options: ['rpm -qi httpd', 'rpm -ql httpd', 'rpm -qR httpd', 'rpm -qf httpd'],
    correct: 1,
    explanation: 'rpm -ql (query list) lista tutti i file installati da un pacchetto.',
  },
  {
    id: 'q-rhcsa-6-2-002', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Come si verifica l\'integrità dei file di un pacchetto installato?',
    options: ['rpm -qi nome', 'rpm -V nome', 'rpm --check nome', 'dnf verify nome'],
    correct: 1,
    explanation: 'rpm -V (verify) confronta i file del pacchetto con quello che è installato, segnalando differenze.',
  },
  {
    id: 'q-rhcsa-6-2-003', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Come si installa un pacchetto RPM locale senza dipendenze automatiche?',
    options: ['rpm -i pacchetto.rpm', 'rpm -ivh pacchetto.rpm', 'rpm --nodeps -ivh pacchetto.rpm', 'dnf localinstall pacchetto.rpm'],
    correct: 2,
    explanation: '--nodeps ignora le dipendenze. -ivh installa con verbose e progress. Usare con cautela!',
  },
  // ─── GRUB2 ───
  {
    id: 'q-rhcsa-6-3-001', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Dove si trovano i parametri di configurazione principali di GRUB2 su RHEL9?',
    options: ['/boot/grub2/grub.cfg', '/etc/default/grub', '/etc/grub.conf', '/boot/grub.cfg'],
    correct: 1,
    explanation: '/etc/default/grub contiene i parametri editabili. grub.cfg è generato automaticamente e non va modificato.',
  },
  {
    id: 'q-rhcsa-6-3-002', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Dopo aver modificato /etc/default/grub, quale comando rigenera grub.cfg?',
    options: [
      'grub-update',
      'grub2-mkconfig -o /boot/grub2/grub.cfg',
      'update-grub',
      'grub2-install /dev/sda',
    ],
    correct: 1,
    explanation: 'grub2-mkconfig -o /boot/grub2/grub.cfg rigenera il file di configurazione GRUB2.',
  },
  {
    id: 'q-rhcsa-6-3-003', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'hard', type: 'mcq',
    question: 'Come si imposta il timeout del menu GRUB a 5 secondi?',
    options: [
      'Modificare GRUB_TIMEOUT=5 in /etc/default/grub, poi grub2-mkconfig',
      'grub2-set-default 5',
      'echo 5 > /boot/grub2/timeout',
      'grub2-mkconfig --timeout=5',
    ],
    correct: 0,
    explanation: 'Modificare GRUB_TIMEOUT nel file /etc/default/grub, poi rigenerare grub.cfg con grub2-mkconfig.',
  },
  {
    id: 'q-rhcsa-6-3-004', lessonId: 'rhcsa-6-3', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Quale file contiene le voci del menu GRUB2 per i kernel disponibili?',
    options: ['/etc/default/grub', '/boot/grub2/grub.cfg', '/etc/grub.d/', '/boot/grub2/entries/'],
    correct: 1,
    explanation: '/boot/grub2/grub.cfg è il file generato con tutte le voci di boot. Gli script in /etc/grub.d/ contribuiscono alla sua generazione.',
  },
  {
    id: 'q-rhcsa-6-1-006', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Come si installa un gruppo di pacchetti come "Development Tools" con dnf?',
    options: [
      'dnf install "Development Tools"',
      'dnf group install "Development Tools"',
      'dnf groupinstall development-tools',
      'Sia B che C',
    ],
    correct: 3,
    explanation: 'dnf group install e dnf groupinstall sono equivalenti per installare gruppi di pacchetti.',
  },
  {
    id: 'q-rhcsa-6-2-004', lessonId: 'rhcsa-6-2', topicId: 6, difficulty: 'easy', type: 'mcq',
    question: 'Quale opzione rpm mostra informazioni su un pacchetto installato (descrizione, versione, etc.)?',
    options: ['rpm -qa', 'rpm -qi', 'rpm -ql', 'rpm -qc'],
    correct: 1,
    explanation: 'rpm -qi (query info) mostra nome, versione, architettura, descrizione, build date di un pacchetto installato.',
  },
  {
    id: 'q-rhcsa-6-1-007', lessonId: 'rhcsa-6-1', topicId: 6, difficulty: 'medium', type: 'mcq',
    question: 'Come si scarica un pacchetto senza installarlo?',
    options: ['dnf fetch httpd', 'dnf download httpd', 'dnf get httpd', 'rpm --download httpd'],
    correct: 1,
    explanation: 'dnf download <pacchetto> scarica il file RPM senza installarlo. Utile per trasferire su sistemi offline.',
  },
]
