export const topic5Extended = {
  '5-1': {
    title: 'Sicurezza e Tipi di Utente',
    sections: [
      { type: 'heading', level: 2, emoji: '👑', text: 'L\'Utente root — Il Superutente' },
      { type: 'paragraph', text: 'L\'utente root (UID 0) ha accesso illimitato al sistema. Può leggere, scrivere e cancellare qualsiasi file, terminare qualsiasi processo, modificare qualsiasi configurazione. Per questo motivo, non si dovrebbe mai lavorare come root di default.' },
      { type: 'table', headers: ['Tipo Utente', 'UID', 'Scopo', 'Login?'], rows: [
        ['root', '0', 'Amministrazione completa del sistema', 'Solo quando necessario'],
        ['Utenti normali', '≥ 1000', 'Utenti umani con account personale', 'Sì, con la propria shell'],
        ['Utenti di sistema', '1-999', 'Servizi e daemon (www-data, mysql)', 'No (/sbin/nologin)'],
        ['nobody', '65534', 'Processi con minimi privilegi', 'No'],
      ]},

      { type: 'heading', level: 2, emoji: '🔑', text: 'su vs sudo — Due Approcci alla Sicurezza' },
      { type: 'comparison', left: {
        title: 'su (Switch User)',
        items: ['Cambia utente completamente', 'Richiede la password di ROOT', 'su - = login completo (ambiente root)', 'Nessun log dettagliato dei comandi', 'Meno sicuro: devi condividere password root']
      }, right: {
        title: 'sudo (Super User DO)',
        items: ['Esegue UN comando come root', 'Richiede la TUA password', 'Ogni comando viene loggato', 'Controllo granulare (chi può fare cosa)', 'Più sicuro: nessuno conosce password root']
      }},
      { type: 'code', title: 'su vs sudo in pratica', prompt: '# su: diventa root (chiede password di ROOT)\n$ su -\nPassword: [password di root]\n# whoami\nroot\n\n# sudo: esegui un comando come root (chiede la TUA password)\n$ sudo apt update\n[sudo] password per mario: [password di mario]\n\n# Vedere chi può usare sudo\n$ sudo -l    # Le tue autorizzazioni\n$ cat /etc/sudoers  # File di configurazione (usare visudo!)' , output: '' },
      { type: 'infobox', variant: 'warning', title: 'Usa sempre visudo!', content: '/etc/sudoers va modificato SOLO con il comando visudo, che controlla la sintassi prima di salvare. Un errore in sudoers può bloccare l\'accesso al sistema!' },

      { type: 'heading', level: 2, emoji: '🛡️', text: 'Principio del Minimo Privilegio' },
      { type: 'paragraph', text: 'Il principio del minimo privilegio (Principle of Least Privilege) è la regola d\'oro della sicurezza: ogni utente e processo deve avere SOLO i permessi strettamente necessari per svolgere il proprio compito. Niente di più.' },
      { type: 'list', items: [
        { term: 'Non lavorare come root', desc: 'Usa sudo solo quando serve, poi torna al tuo utente' },
        { term: 'Servizi dedicati', desc: 'Ogni servizio gira con il proprio utente (www-data, mysql)' },
        { term: 'sudo granulare', desc: 'In /etc/sudoers puoi limitare QUALI comandi un utente può eseguire con sudo' },
        { term: 'Audit trail', desc: 'sudo logga tutto in /var/log/auth.log — tracciabilità completa' },
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame LPI chiede la differenza tra su e sudo, il principio del minimo privilegio, e dove si trovano i log di autenticazione (/var/log/auth.log o /var/log/secure).' },
    ]
  },

  '5-2': {
    title: 'Gestione Utenti e Gruppi',
    sections: [
      { type: 'heading', level: 2, emoji: '📒', text: 'I File dell\'Anagrafe Linux' },
      { type: 'table', headers: ['File', 'Proprietario', 'Permessi', 'Contenuto'], rows: [
        ['/etc/passwd', 'root', '644 (leggibile da tutti)', 'Info utenti: nome, UID, GID, home, shell'],
        ['/etc/shadow', 'root', '640 (solo root)', 'Password crittate e policy'],
        ['/etc/group', 'root', '644', 'Gruppi e membri supplementari'],
        ['/etc/gshadow', 'root', '640', 'Password dei gruppi (raro)'],
        ['/etc/skel', 'root', '755', 'Template per nuove home directory'],
      ]},

      { type: 'heading', level: 2, emoji: '📋', text: 'Formato di /etc/passwd' },
      { type: 'code', title: 'Anatomia di una riga /etc/passwd', prompt: 'mario:x:1000:1000:Mario Rossi:/home/mario:/bin/bash\n  │    │   │    │      │           │           │\n  │    │   │    │      │           │           └── Shell di login\n  │    │   │    │      │           └── Home directory\n  │    │   │    │      └── Campo GECOS (info utente)\n  │    │   │    └── GID (Group ID primario)\n  │    │   └── UID (User ID)\n  │    └── "x" = password in /etc/shadow\n  └── Username', output: '' },
      { type: 'infobox', variant: 'note', title: 'Perché "x" nella password?', content: 'In passato le password erano in /etc/passwd (leggibile da tutti!). Per sicurezza sono state spostate in /etc/shadow (leggibile solo da root). La "x" indica che la password è nel file shadow.' },

      { type: 'heading', level: 2, emoji: '🛠️', text: 'Comandi per Gestire Utenti e Gruppi' },
      { type: 'table', headers: ['Comando', 'Funzione', 'Opzioni importanti'], rows: [
        ['useradd -m user', 'Crea utente con home', '-m crea home, -s shell, -G gruppi'],
        ['usermod -aG grp user', 'Modifica utente', '-aG Append Group, -L lock, -U unlock'],
        ['userdel -r user', 'Elimina utente + home', '-r rimuove anche la home directory'],
        ['passwd user', 'Cambia password', '-l lock, -u unlock, -e force change'],
        ['groupadd nome', 'Crea gruppo', '-g GID specifico'],
        ['groupdel nome', 'Elimina gruppo', 'Solo se nessun utente lo ha come primario'],
        ['groups user', 'Mostra gruppi utente', 'Lista gruppi di appartenenza'],
        ['id user', 'Mostra UID/GID/gruppi', 'Info complete sull\'utente'],
      ]},
      { type: 'code', title: 'Workflow: creare un utente completo', prompt: '# 1. Creare l\'utente con home directory\n$ sudo useradd -m -s /bin/bash -c "Mario Rossi" mario\n\n# 2. Impostare la password\n$ sudo passwd mario\n\n# 3. Aggiungere ai gruppi supplementari\n$ sudo usermod -aG sudo,docker mario\n\n# 4. Verificare\n$ id mario\nuid=1001(mario) gid=1001(mario) groups=1001(mario),27(sudo),999(docker)\n\n$ ls -la /home/mario/\n# Contiene i file copiati da /etc/skel/', output: '' },
    ]
  },

  '5-3': {
    title: 'Permessi dei File',
    sections: [
      { type: 'heading', level: 2, emoji: '📊', text: 'Il Sistema dei Permessi Unix' },
      { type: 'paragraph', text: 'Ogni file e directory in Linux ha tre set di permessi (owner, group, others) e tre tipi di permesso (read, write, execute). Questo crea una matrice di 9 permessi.' },
      { type: 'table', headers: ['Permesso', 'Su file', 'Su directory', 'Valore ottale'], rows: [
        ['r (read)', 'Leggere il contenuto', 'Listare i file (ls)', '4'],
        ['w (write)', 'Modificare il contenuto', 'Creare/eliminare file', '2'],
        ['x (execute)', 'Eseguire come programma', 'Entrare (cd) nella directory', '1'],
        ['— (nessuno)', 'Nessun accesso', 'Nessun accesso', '0'],
      ]},
      { type: 'code', title: 'Leggere i permessi con ls -l', prompt: '$ ls -l /etc/passwd\n-rw-r--r-- 1 root root 2847 Mar 5 /etc/passwd\n│├──┤├──┤├──┤\n││   │    │\n││   │    └── others: r-- (solo lettura)\n││   └── group: r-- (solo lettura)\n│└── owner: rw- (lettura + scrittura)\n└── tipo: - = file (d = directory, l = link)', output: '' },

      { type: 'heading', level: 2, emoji: '🔢', text: 'Notazione Ottale vs Simbolica' },
      { type: 'table', headers: ['Ottale', 'Simbolico', 'Significato', 'Uso tipico'], rows: [
        ['755', 'rwxr-xr-x', 'Owner fa tutto, altri leggono/eseguono', 'Script, directory'],
        ['644', 'rw-r--r--', 'Owner legge/scrive, altri solo leggono', 'File di testo, configurazione'],
        ['700', 'rwx------', 'Solo il proprietario ha accesso', 'File privati, chiavi SSH'],
        ['600', 'rw-------', 'Solo owner legge/scrive', 'File segreti'],
        ['777', 'rwxrwxrwx', 'Tutti possono fare tutto', '⚠️ MAI usare in produzione!'],
        ['750', 'rwxr-x---', 'Owner + gruppo leggono, altri no', 'Directory condivise'],
      ]},

      { type: 'heading', level: 2, emoji: '⚡', text: 'Permessi Speciali' },
      { type: 'table', headers: ['Permesso', 'Ottale', 'Su file', 'Su directory', 'Esempio'], rows: [
        ['SUID', '4xxx', 'Esegui con permessi del proprietario', '—', '/usr/bin/passwd (SUID root)'],
        ['SGID', '2xxx', 'Esegui con permessi del gruppo', 'Nuovi file ereditano il gruppo', 'Directory di progetto condivise'],
        ['Sticky Bit', '1xxx', '—', 'Solo il proprietario può cancellare', '/tmp (permessi 1777)'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede: ls -l mostra i permessi in formato simbolico (rwxr-xr-x). chmod usa ottale (755) o simbolico (u+x). umask 022 produce permessi 755 per directory e 644 per file.' },

      { type: 'heading', level: 2, emoji: '🎭', text: 'umask — La Maschera dei Permessi' },
      { type: 'paragraph', text: 'umask definisce i permessi che vengono RIMOSSI quando si crea un nuovo file o directory. Il valore predefinito per gli utenti normali è 022.' },
      { type: 'table', headers: ['umask', 'Permessi file (666-mask)', 'Permessi directory (777-mask)'], rows: [
        ['022', '644 (rw-r--r--)', '755 (rwxr-xr-x)'],
        ['077', '600 (rw-------)', '700 (rwx------)'],
        ['002', '664 (rw-rw-r--)', '775 (rwxrwxr-x)'],
      ]},
    ]
  },

  '5-4': {
    title: 'File Speciali e Link',
    sections: [
      { type: 'heading', level: 2, emoji: '🔗', text: 'Hard Link vs Symbolic Link' },
      { type: 'paragraph', text: 'I link sono "scorciatoie" nel filesystem. Comprendere la differenza tra hard link e symbolic link è fondamentale per l\'esame LPI e per il lavoro quotidiano con Linux.' },
      { type: 'comparison', left: {
        title: '🔗 Hard Link',
        items: ['Punta direttamente all\'inode', 'Indistinguibile dall\'originale', 'Il file sopravvive alla cancellazione dell\'originale', 'NON può attraversare filesystem', 'NON può linkare directory', 'Stesso inode, link count +1', 'ln file hardlink']
      }, right: {
        title: '➡️ Symbolic Link (Symlink)',
        items: ['Punta a un PERCORSO (nome file)', 'È un file speciale (type "l")', 'Diventa "broken" se il target viene eliminato', 'PUÒ attraversare filesystem', 'PUÒ linkare directory', 'Inode diverso, dimensione = lunghezza path', 'ln -s target symlink']
      }},

      { type: 'heading', level: 2, emoji: '💡', text: 'Cosa sono gli Inode?' },
      { type: 'paragraph', text: 'Un inode è una struttura dati del filesystem che contiene le informazioni su un file: permessi, proprietario, dimensione, timestamp, blocchi dati. Il NOME del file non è nell\'inode — è nella directory che punta all\'inode. Ecco perché possono esistere più nomi (hard link) per lo stesso inode.' },
      { type: 'diagram', title: 'Struttura Inode e Link', boxes: [
        { label: 'Directory', color: '#3b82f6', children: ['file.txt → inode 42', 'hardlink.txt → inode 42', 'symlink.txt → "file.txt"'] },
        { label: 'Inode 42', color: '#10b981', children: ['Permessi: rw-r--r--', 'Owner: mario', 'Size: 1024 bytes', 'Link count: 2'] },
        { label: 'Blocchi Dati', color: '#f59e0b', children: ['Block 100', 'Block 101', '(contenuto effettivo)'] },
      ]},
      { type: 'code', title: 'Lavorare con i link', prompt: '# Creare un hard link\n$ ln originale.txt hardlink.txt\n$ ls -li   # -i mostra il numero di inode\n42 -rw-r--r-- 2 mario mario 1024 originale.txt\n42 -rw-r--r-- 2 mario mario 1024 hardlink.txt\n# Stesso inode (42)! Link count = 2\n\n# Creare un symbolic link\n$ ln -s /etc/passwd link_passwd\n$ ls -l link_passwd\nlrwxrwxrwx 1 mario mario 11 link_passwd -> /etc/passwd\n# Inode diverso, dimensione = 11 (lunghezza "/etc/passwd")\n\n# Trovare il target di un symlink\n$ readlink link_passwd\n/etc/passwd\n\n# Trovare tutti i symlink broken\n$ find /home -xtype l', output: '' },

      { type: 'heading', level: 2, emoji: '📁', text: 'File Temporanei' },
      { type: 'table', headers: ['Directory', 'Scopo', 'Persistenza', 'Note'], rows: [
        ['/tmp', 'File temporanei per tutti', 'Cancellati al riavvio', 'Sticky bit: solo owner può cancellare i propri file'],
        ['/var/tmp', 'File temporanei persistenti', 'Sopravvivono al riavvio', 'Per dati che servono tra i riavvii'],
        ['~/.cache', 'Cache utente', 'Persistente', 'Cache browser, applicazioni'],
      ]},
      { type: 'infobox', variant: 'exam', content: 'L\'esame chiede: Hard link = stesso inode, non attraversa filesystem, no directory. Symlink = inode diverso, attraversa filesystem, può linkare directory, può diventare "broken". ln -s crea symlink, ln senza flag crea hard link.' },
    ]
  },
}
