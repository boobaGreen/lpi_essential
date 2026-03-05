export const topic1Quizzes = [
  {
    lessonId: '1-1',
    question: 'Chi ha creato il kernel Linux?',
    options: ['Richard Stallman', 'Linus Torvalds', 'Dennis Ritchie', 'Ken Thompson'],
    correct: 1,
    explanation: 'Linus Torvalds ha iniziato a sviluppare il kernel Linux nel 1991 come studente all\'università di Helsinki.',
  },
  {
    lessonId: '1-1',
    question: 'Quale formato di pacchetti usa la famiglia Debian?',
    options: ['.rpm', '.deb', '.tar.gz', '.pkg'],
    correct: 1,
    explanation: 'Debian e derivate (Ubuntu, Mint) usano pacchetti .deb gestiti da dpkg e apt.',
  },
  {
    lessonId: '1-1',
    question: 'Quale sistema operativo mobile è basato su kernel Linux?',
    options: ['iOS', 'Windows Phone', 'Android', 'BlackBerry OS'],
    correct: 2,
    explanation: 'Android di Google usa un kernel Linux modificato.',
  },
  {
    lessonId: '1-1',
    question: 'Quale gestore di pacchetti è usato su Fedora/RHEL?',
    options: ['apt', 'zypper', 'dnf', 'pacman'],
    correct: 2,
    explanation: 'dnf (Dandified YUM) è il gestore di pacchetti per Fedora e RHEL.',
  },
  {
    lessonId: '1-2',
    question: 'Quale suite office è la più usata nel mondo open source?',
    options: ['Microsoft Office', 'Google Docs', 'LibreOffice', 'WPS Office'],
    correct: 2,
    explanation: 'LibreOffice è la suite office open source più diffusa, con Writer, Calc e Impress.',
  },
  {
    lessonId: '1-2',
    question: 'Quale linguaggio è generalmente compilato (non interpretato)?',
    options: ['Python', 'Bash', 'C', 'JavaScript'],
    correct: 2,
    explanation: 'Il C è un linguaggio compilato. Il codice sorgente viene trasformato in binario eseguibile.',
  },
  {
    lessonId: '1-3',
    question: 'Quante libertà fondamentali definisce la Free Software Foundation?',
    options: ['2', '3', '4', '5'],
    correct: 2,
    explanation: 'La FSF definisce 4 libertà (numerate da 0 a 3): eseguire, studiare, ridistribuire, migliorare.',
  },
  {
    lessonId: '1-3',
    question: 'Cosa significa "copyleft" in una licenza software?',
    options: [
      'Il software non può essere copiato',
      'Il codice derivato deve mantenere la stessa licenza',
      'Il software è proprietario',
      'Non si può modificare il codice'
    ],
    correct: 1,
    explanation: 'Il copyleft obbliga il codice derivato a mantenere la stessa licenza libera (es. GPL).',
  },
  {
    lessonId: '1-3',
    question: 'Quale licenza è "permissive" (non copyleft)?',
    options: ['GPL v3', 'AGPL', 'MIT', 'LGPL'],
    correct: 2,
    explanation: 'La licenza MIT è molto permissiva: il codice derivato può anche diventare proprietario.',
  },
  {
    lessonId: '1-4',
    question: 'Cosa indica il protocollo HTTPS?',
    options: [
      'Connessione HTTP veloce',
      'Connessione HTTP con crittografia TLS',
      'Connessione HTTP solo per admin',
      'Connessione HTTP compressa'
    ],
    correct: 1,
    explanation: 'HTTPS = HTTP + TLS. La crittografia protegge i dati in transito.',
  },
  {
    lessonId: '1-4',
    question: 'Quale desktop environment usa il toolkit GTK?',
    options: ['KDE', 'GNOME', 'Qt Creator', 'Plasma'],
    correct: 1,
    explanation: 'GNOME utilizza GTK (scritto in C), mentre KDE utilizza Qt (scritto in C++).',
  },
]
