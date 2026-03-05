export const topics = [
  {
    id: 1,
    title: 'La Comunità Linux',
    subtitle: 'Open Source e Carriera',
    icon: '🌍',
    color: 'neon-blue',
    weight: 7,
    description: 'Evoluzione di Linux, distribuzioni, applicazioni, licenze open source e carriera ICT.',
    lessons: [
      {
        id: '1-1',
        title: 'Evoluzione di Linux e Sistemi Operativi',
        subtitle: 'Da Unix a oggi: la storia e le distribuzioni',
        sections: ['storia', 'distribuzioni', 'embedded', 'cloud'],
      },
      {
        id: '1-2',
        title: 'Applicazioni Open Source',
        subtitle: 'Suite ufficio, server, linguaggi di programmazione',
        sections: ['applicazioni', 'gestori-pacchetti', 'linguaggi'],
      },
      {
        id: '1-3',
        title: 'Software Open Source e Licenze',
        subtitle: 'GPL, MIT, Apache e i modelli di business',
        sections: ['liberta', 'licenze', 'copyleft', 'business'],
      },
      {
        id: '1-4',
        title: 'Competenze ICT e Linux',
        subtitle: 'Desktop, privacy, crittografia',
        sections: ['desktop', 'privacy', 'crittografia'],
      },
    ],
  },
  {
    id: 2,
    title: 'Uso del Sistema Linux',
    subtitle: 'Command Line e Filesystem',
    icon: '⌨️',
    color: 'neon-green',
    weight: 8,
    description: 'Nozioni di base sulla riga di comando, variabili, aiuto, filesystem e gestione file.',
    lessons: [
      {
        id: '2-1',
        title: 'Nozioni di Base sulla Command Line',
        subtitle: 'Shell, prompt, comandi e quoting',
        sections: ['shell', 'prompt', 'comandi', 'quoting'],
      },
      {
        id: '2-2',
        title: 'Variabili e Ambiente',
        subtitle: 'Variabili locali, ambientali e PATH',
        sections: ['variabili', 'path', 'export'],
      },
      {
        id: '2-3',
        title: 'Ottenere Aiuto',
        subtitle: 'man, info, --help e locate/find',
        sections: ['help', 'man', 'find'],
      },
      {
        id: '2-4',
        title: 'Navigazione e Gestione File',
        subtitle: 'FHS, percorsi, mkdir, cp, mv, rm, globbing',
        sections: ['fhs', 'navigazione', 'operazioni', 'globbing'],
      },
    ],
  },
  {
    id: 3,
    title: 'Il Potere della Command Line',
    subtitle: 'Archiviazione, Pipe e Scripting',
    icon: '💪',
    color: 'neon-purple',
    weight: 9,
    description: 'Compressione, archiviazione, redirezione I/O, pipe, grep, regex e scripting Bash.',
    lessons: [
      {
        id: '3-1',
        title: 'Archiviazione e Compressione',
        subtitle: 'gzip, bzip2, xz, tar e zip',
        sections: ['compressione', 'tar', 'zip'],
      },
      {
        id: '3-2',
        title: 'Redirezione I/O e Pipe',
        subtitle: 'stdin, stdout, stderr, pipe e filtri',
        sections: ['redirezione', 'pipe', 'filtri'],
      },
      {
        id: '3-3',
        title: 'Grep e Espressioni Regolari',
        subtitle: 'Cercare pattern nei file con regex',
        sections: ['grep', 'regex', 'metacaratteri'],
      },
      {
        id: '3-4',
        title: 'Script Bash',
        subtitle: 'Shebang, variabili, condizioni e cicli',
        sections: ['script', 'eseguibili', 'variabili', 'condizionali'],
      },
    ],
  },
  {
    id: 4,
    title: 'Il Sistema Operativo Linux',
    subtitle: 'Hardware, Kernel e Rete',
    icon: '🖥️',
    color: 'neon-orange',
    weight: 8,
    description: 'Scelta del SO, hardware, kernel, processi, log di sistema e networking.',
    lessons: [
      {
        id: '4-1',
        title: 'Scelta di un Sistema Operativo',
        subtitle: 'Categorie di SO e criteri di scelta',
        sections: ['categorie', 'scelta'],
      },
      {
        id: '4-2',
        title: 'Hardware del Computer',
        subtitle: 'CPU, RAM, HDD vs SSD, RAID, dispositivi',
        sections: ['hardware', 'archiviazione', 'raid', 'dispositivi'],
      },
      {
        id: '4-3',
        title: 'Kernel, Processi e Log',
        subtitle: 'boot, /proc, ps, top e journalctl',
        sections: ['kernel', 'boot', 'processi', 'log'],
      },
      {
        id: '4-4',
        title: 'Networking',
        subtitle: 'IPv4, IPv6, subnet, DNS e porte',
        sections: ['ipv4', 'ipv6', 'dns', 'porte'],
      },
    ],
  },
  {
    id: 5,
    title: 'Sicurezza e Permessi',
    subtitle: 'Utenti, Gruppi e File',
    icon: '🔒',
    color: 'neon-pink',
    weight: 7,
    description: 'Account utente, file di sistema, permessi, ownership, permessi speciali e link.',
    lessons: [
      {
        id: '5-1',
        title: 'Sicurezza e Tipi di Utente',
        subtitle: 'root, utenti standard, account di sistema',
        sections: ['account', 'uid-gid', 'su-sudo'],
      },
      {
        id: '5-2',
        title: 'Gestione Utenti e Gruppi',
        subtitle: '/etc/passwd, /etc/shadow, useradd, passwd',
        sections: ['passwd', 'shadow', 'useradd', 'groupadd'],
      },
      {
        id: '5-3',
        title: 'Permessi dei File',
        subtitle: 'rwx, chmod, chown e permessi speciali',
        sections: ['permessi', 'chmod', 'chown', 'speciali'],
      },
      {
        id: '5-4',
        title: 'File Speciali e Link',
        subtitle: 'File temporanei, hard link e symbolic link',
        sections: ['temporanei', 'hardlink', 'symlink'],
      },
    ],
  },
]

export function getTopic(id) {
  return topics.find(t => t.id === Number(id))
}

export function getLesson(topicId, lessonId) {
  const topic = getTopic(topicId)
  return topic?.lessons.find(l => l.id === lessonId)
}

export function getTotalLessons() {
  return topics.reduce((sum, t) => sum + t.lessons.length, 0)
}
