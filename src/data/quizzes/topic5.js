export const topic5Quizzes = [
  {
    lessonId: '5-1',
    question: 'Quale UID ha l\'utente root?',
    options: ['1', '0', '1000', '999'],
    correct: 1,
    explanation: 'L\'utente root ha sempre UID 0. Gli utenti normali partono da UID 1000.',
  },
  {
    lessonId: '5-1',
    question: 'Quale comando permette di eseguire comandi come root?',
    options: ['su', 'sudo', 'root', 'admin'],
    correct: 1,
    explanation: 'sudo esegue un singolo comando con privilegi di root, usando la propria password.',
  },
  {
    lessonId: '5-2',
    question: 'In quale file sono memorizzate le password crittate?',
    options: ['/etc/passwd', '/etc/shadow', '/etc/group', '/etc/login'],
    correct: 1,
    explanation: '/etc/shadow contiene le password crittate ed è leggibile solo da root.',
  },
  {
    lessonId: '5-2',
    question: 'Quale comando crea un nuovo utente con home directory?',
    options: ['adduser', 'useradd -m', 'newuser', 'mkuser'],
    correct: 1,
    explanation: 'useradd -m crea l\'utente e la sua home directory. Il flag -m è essenziale.',
  },
  {
    lessonId: '5-3',
    question: 'Quale valore ottale corrisponde ai permessi rwxr-xr-- ?',
    options: ['644', '755', '754', '764'],
    correct: 2,
    explanation: 'rwx=7, r-x=5, r--=4 → 754.',
  },
  {
    lessonId: '5-3',
    question: 'Quale comando modifica il proprietario di un file?',
    options: ['chmod', 'chown', 'chgrp', 'chmod'],
    correct: 1,
    explanation: 'chown (change owner) modifica il proprietario. chmod modifica i permessi.',
  },
  {
    lessonId: '5-3',
    question: 'Cosa fa il comando chmod u+x script.sh?',
    options: [
      'Rimuove il permesso di esecuzione',
      'Aggiunge il permesso di esecuzione al proprietario',
      'Aggiunge il permesso di esecuzione a tutti',
      'Cambia il proprietario'
    ],
    correct: 1,
    explanation: 'u+x aggiunge (+) il permesso di esecuzione (x) al proprietario (u=user).',
  },
  {
    lessonId: '5-3',
    question: 'Quale permesso speciale fa sì che i nuovi file in una directory ereditino il gruppo?',
    options: ['Sticky Bit', 'SUID', 'SGID', 'ACL'],
    correct: 2,
    explanation: 'SGID su una directory fa sì che i nuovi file ereditino il gruppo della directory.',
  },
  {
    lessonId: '5-4',
    question: 'Quale tipo di link può attraversare filesystem diversi?',
    options: ['Hard link', 'Symbolic link', 'Entrambi', 'Nessuno'],
    correct: 1,
    explanation: 'I symbolic link possono attraversare filesystem diversi. Gli hard link no.',
  },
  {
    lessonId: '5-4',
    question: 'Cosa succede quando si elimina il file target di un hard link?',
    options: [
      'Il link diventa "broken"',
      'Il file resta accessibile tramite il link',
      'Anche il link viene eliminato',
      'Il sistema va in errore'
    ],
    correct: 1,
    explanation: 'Con gli hard link, il file resta accessibile finché esiste almeno un nome (link) che punta allo stesso inode.',
  },
]
