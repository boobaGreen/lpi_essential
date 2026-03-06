// LPIC-1 101 Games Data — Italian
// Usato da useGameData() quando courseId === 'lpic1-101'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 1 — System Architecture
  { command: 'lspci', description: 'Elenca tutti i dispositivi PCI' },
  { command: 'lsusb', description: 'Elenca tutti i dispositivi USB' },
  { command: 'lsmod', description: 'Mostra i moduli del kernel caricati' },
  { command: 'modprobe modulo', description: 'Carica un modulo del kernel con dipendenze' },
  { command: 'modprobe -r modulo', description: 'Rimuove un modulo del kernel' },
  { command: 'dmesg', description: 'Mostra i messaggi del ring buffer del kernel' },
  { command: 'systemctl get-default', description: 'Mostra il target systemd predefinito' },
  { command: 'systemctl set-default multi-user.target', description: 'Imposta il target di boot a multi-utente testo' },
  // Topic 2 — Installation & Packages
  { command: 'grub-mkconfig -o /boot/grub/grub.cfg', description: 'Rigenera la configurazione GRUB2' },
  { command: 'grub-install /dev/sda', description: 'Installa GRUB2 nel MBR del disco' },
  { command: 'ldd /usr/bin/ls', description: 'Mostra le librerie condivise necessarie a ls' },
  { command: 'ldconfig', description: 'Aggiorna la cache delle librerie condivise' },
  { command: 'dpkg -i pacchetto.deb', description: 'Installa un pacchetto Debian locale' },
  { command: 'apt-get update', description: 'Aggiorna la lista dei pacchetti disponibili' },
  { command: 'rpm -qa', description: 'Elenca tutti i pacchetti RPM installati' },
  { command: 'dnf install pacchetto', description: 'Installa un pacchetto da repository RPM' },
  // Topic 3 — GNU/Unix Commands
  { command: 'which comando', description: 'Mostra il percorso completo di un eseguibile' },
  { command: 'type comando', description: 'Indica se è builtin, alias o eseguibile' },
  { command: 'head -n 20 file', description: 'Mostra le prime 20 righe di un file' },
  { command: 'tail -f /var/log/syslog', description: 'Segue un file di log in tempo reale' },
  { command: 'sort -rn file', description: 'Ordina in ordine numerico inverso' },
  { command: 'cut -d: -f1 /etc/passwd', description: 'Estrae il primo campo separato da :' },
  { command: 'find / -name "*.conf" -type f', description: 'Trova tutti i file .conf nel sistema' },
  { command: 'grep -rn "pattern" /etc/', description: 'Cerca ricorsivamente con numero di riga' },
  { command: 'ps aux', description: 'Mostra tutti i processi con dettagli' },
  { command: 'kill -9 PID', description: 'Termina forzatamente un processo (SIGKILL)' },
  { command: 'nice -n 10 comando', description: 'Avvia un comando con priorità bassa' },
  { command: 'nohup comando &', description: 'Esegue un processo immune a SIGHUP in background' },
  // Topic 4 — Devices & Filesystems
  { command: 'fdisk -l', description: 'Elenca le partizioni di tutti i dischi' },
  { command: 'mkfs.ext4 /dev/sda1', description: 'Formatta una partizione con ext4' },
  { command: 'blkid', description: 'Mostra UUID e tipo filesystem dei dispositivi' },
  { command: 'mount /dev/sda1 /mnt', description: 'Monta un filesystem in un punto di mount' },
  { command: 'umount /mnt', description: 'Smonta un filesystem' },
  { command: 'fsck /dev/sda1', description: 'Verifica e ripara un filesystem' },
  { command: 'df -h', description: 'Mostra lo spazio disco in formato leggibile' },
  { command: 'du -sh /home', description: 'Mostra lo spazio usato dalla directory' },
  { command: 'chmod 755 file', description: 'Imposta permessi rwxr-xr-x' },
  { command: 'ln -s /originale /link', description: 'Crea un link simbolico' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1 — Easy
  { text: 'Il BIOS è più moderno di UEFI.', answer: false, explanation: 'UEFI è il successore del BIOS, con supporto GPT, Secure Boot e boot più veloce.', difficulty: 1 },
  { text: '/proc è un filesystem virtuale che risiede solo in memoria.', answer: true, explanation: '/proc non occupa spazio su disco: è generato dal kernel a runtime.', difficulty: 1 },
  { text: 'Il processo init/systemd ha sempre PID 1.', answer: true, explanation: 'init o systemd è il primo processo utente, avviato dal kernel con PID 1.', difficulty: 1 },
  { text: 'MBR supporta dischi più grandi di 2TB.', answer: false, explanation: 'MBR è limitato a 2TB. GPT supporta dischi fino a 8ZiB.', difficulty: 1 },
  { text: 'apt-get update installa gli aggiornamenti dei pacchetti.', answer: false, explanation: 'update scarica la lista dei pacchetti disponibili. upgrade installa gli aggiornamenti.', difficulty: 1 },
  { text: 'Le librerie condivise .so vengono caricate a runtime.', answer: true, explanation: 'Le librerie .so (shared objects) sono caricate dal linker dinamico quando il programma viene eseguito.', difficulty: 1 },
  { text: 'Il comando cat serve a creare file vuoti.', answer: false, explanation: 'cat concatena e mostra il contenuto di file. touch crea file vuoti.', difficulty: 1 },
  { text: 'La pipe | collega stdout di un comando allo stdin del successivo.', answer: true, explanation: 'La pipe crea una pipeline: l\'output del primo comando diventa l\'input del secondo.', difficulty: 1 },
  { text: 'SIGKILL (9) può essere intercettato dal processo.', answer: false, explanation: 'SIGKILL non può essere catturato, bloccato o ignorato. Termina il processo immediatamente.', difficulty: 1 },
  { text: 'Il filesystem ext4 supporta il journaling.', answer: true, explanation: 'ext4 ha journaling integrato per proteggere i dati in caso di crash.', difficulty: 1 },
  { text: 'chmod 644 rende un file eseguibile da tutti.', answer: false, explanation: '644 = rw-r--r--. Non ci sono permessi di esecuzione. 755 ha l\'execute.', difficulty: 1 },
  { text: '/etc/fstab definisce i filesystem montati automaticamente al boot.', answer: true, explanation: '/etc/fstab contiene la tabella dei filesystem: dispositivo, mountpoint, tipo, opzioni.', difficulty: 1 },

  // Difficulty 2 — Medium
  { text: 'modprobe gestisce automaticamente le dipendenze dei moduli del kernel.', answer: true, explanation: 'modprobe usa depmod per risolvere le dipendenze. insmod non le gestisce.', difficulty: 2 },
  { text: 'Il target rescue.target è equivalente al runlevel 5 di SysVinit.', answer: false, explanation: 'rescue.target = runlevel 1 (single user). graphical.target = runlevel 5.', difficulty: 2 },
  { text: 'dpkg gestisce automaticamente le dipendenze dei pacchetti.', answer: false, explanation: 'dpkg installa/rimuove pacchetti .deb ma NON gestisce dipendenze. apt lo fa.', difficulty: 2 },
  { text: 'Il comando uniq rimuove tutte le righe duplicate in un file.', answer: false, explanation: 'uniq rimuove solo le righe duplicate CONSECUTIVE. Per tutte: sort | uniq.', difficulty: 2 },
  { text: 'In una regex, il punto . corrisponde a qualsiasi carattere.', answer: true, explanation: 'Il metacarattere . corrisponde a qualsiasi singolo carattere (tranne newline).', difficulty: 2 },
  { text: 'Il nice value -20 indica la MINIMA priorità.', answer: false, explanation: '-20 è la MASSIMA priorità. +19 è la minima. Solo root può impostare valori negativi.', difficulty: 2 },
  { text: 'parted applica le modifiche alle partizioni immediatamente.', answer: true, explanation: 'A differenza di fdisk che bufferizza, parted esegue le operazioni direttamente sul disco.', difficulty: 2 },
  { text: 'Lo sticky bit su una directory impedisce a chiunque di cancellare file.', answer: false, explanation: 'Solo il proprietario del file (o root) può cancellarlo. Altri utenti non possono, anche con permessi di scrittura sulla directory.', difficulty: 2 },
  { text: 'fsck deve essere eseguito su un filesystem montato.', answer: false, explanation: 'fsck deve essere eseguito su filesystem SMONTATI per evitare corruzione dei dati.', difficulty: 2 },
  { text: 'UUID è un identificatore unico e permanente per un filesystem.', answer: true, explanation: 'L\'UUID viene assegnato alla creazione del filesystem e non cambia. È preferibile a /dev/sdX in fstab.', difficulty: 2 },

  // Difficulty 3 — Hard
  { text: 'In regex ERE, + richiede l\'escape (\\+) per funzionare.', answer: false, explanation: 'Nelle Extended RE (-E), + funziona direttamente. È nelle Basic RE che serve \\+.', difficulty: 3 },
  { text: 'emergency.target monta solo / in read-only senza avviare servizi.', answer: true, explanation: 'emergency.target è il più restrittivo: solo / ro, nessun servizio. rescue.target avvia servizi base.', difficulty: 3 },
  { text: 'Con umask 077, i nuovi file avranno permessi rw------- (600).', answer: true, explanation: 'File default 666 - umask 077 = 600 (rw-------). Directory: 777 - 077 = 700.', difficulty: 3 },
  { text: 'rpm -V verifica le dipendenze di un pacchetto installato.', answer: false, explanation: 'rpm -V verifica l\'integrità (checksum, permessi, dimensione). Le dipendenze si verificano con rpm -R.', difficulty: 3 },
  { text: 'I hard link possono puntare a directory.', answer: false, explanation: 'Linux non permette hard link a directory per evitare loop circolari nel filesystem.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'lspci', answer: 'lspci', hint: 'elenca dispositivi PCI', difficulty: 1 },
  { prompt: 'systemctl get-_____', answer: 'default', hint: 'mostra il target predefinito', difficulty: 1 },
  { prompt: 'apt-get _____', answer: 'update', hint: 'aggiorna la lista pacchetti', difficulty: 1 },
  { prompt: 'head -n _____ file', answer: '10', hint: 'numero di righe predefinito', difficulty: 1 },
  { prompt: 'mkdir _____ /a/b/c', answer: '-p', hint: 'crea anche le directory padre', difficulty: 1 },
  { prompt: 'chmod _____ file', answer: '755', hint: 'rwxr-xr-x', difficulty: 1 },
  { prompt: '_____ /dev/sda1 /mnt', answer: 'mount', hint: 'monta un filesystem', difficulty: 1 },
  { prompt: 'rm _____ /dir', answer: '-r', hint: 'cancella ricorsivamente', difficulty: 1 },
  { prompt: 'ps _____', answer: 'aux', hint: 'mostra tutti i processi con dettagli', difficulty: 1 },
  { prompt: 'grep _____ "pattern" file', answer: '-i', hint: 'ricerca case-insensitive', difficulty: 1 },
  // Difficulty 2
  { prompt: 'modprobe _____ modulo', answer: '-r', hint: 'rimuove il modulo', difficulty: 2 },
  { prompt: 'shutdown _____ now', answer: '-h', hint: 'spegne il sistema', difficulty: 2 },
  { prompt: 'grub-mkconfig -o _____', answer: '/boot/grub/grub.cfg', hint: 'percorso del file configurazione GRUB', difficulty: 2 },
  { prompt: 'dpkg _____ /path/to/file', answer: '-S', hint: 'cerca quale pacchetto possiede il file', difficulty: 2 },
  { prompt: 'rpm _____ package', answer: '-qi', hint: 'mostra informazioni del pacchetto', difficulty: 2 },
  { prompt: 'find /etc -name "_____"', answer: '*.conf', hint: 'file di configurazione', difficulty: 2 },
  { prompt: 'kill _____ PID', answer: '-9', hint: 'segnale SIGKILL', difficulty: 2 },
  { prompt: 'nice -n _____ comando', answer: '10', hint: 'priorità bassa', difficulty: 2 },
  { prompt: 'mkfs._____ /dev/sda1', answer: 'ext4', hint: 'filesystem più comune su Linux', difficulty: 2 },
  { prompt: 'ln _____ /originale /link', answer: '-s', hint: 'crea un link simbolico', difficulty: 2 },
  // Difficulty 3
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'cambia target senza riavvio', difficulty: 3 },
  { prompt: 'umask _____', answer: '022', hint: 'risultato: file 644, dir 755', difficulty: 3 },
  { prompt: 'sed "s/old/new/_____" file', answer: 'g', hint: 'sostituisce TUTTE le occorrenze', difficulty: 3 },
  { prompt: 'grep -_____ "error|warning" file', answer: 'E', hint: 'abilita Extended Regex', difficulty: 3 },
  { prompt: 'renice -n -5 _____ PID', answer: '-p', hint: 'specifica il Process ID', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-boot-order',
    category: 'Ordine di Boot',
    question: 'Metti in ordine le fasi del processo di boot Linux:',
    items: [
      { text: 'Kernel inizializza hardware', order: 3 },
      { text: 'init/systemd (PID 1) avvia servizi', order: 4 },
      { text: 'BIOS/UEFI esegue POST', order: 1 },
      { text: 'GRUB2 carica kernel e initramfs', order: 2 },
    ],
  },
  {
    id: 'dd-runlevel-target',
    category: 'Runlevel → Target',
    question: 'Abbina il runlevel SysVinit al target systemd:',
    items: [
      { text: 'Runlevel 3 (multi-utente testo)', matches: 'multi-user.target' },
      { text: 'Runlevel 5 (GUI)', matches: 'graphical.target' },
      { text: 'Runlevel 1 (single user)', matches: 'rescue.target' },
      { text: 'Runlevel 0 (spegnimento)', matches: 'poweroff.target' },
    ],
  },
  {
    id: 'dd-pkg-family',
    category: 'Famiglie Pacchetti',
    question: 'Classifica i comandi per famiglia di pacchetti:',
    items: [
      { text: 'dpkg -i', category: 'Debian' },
      { text: 'apt-get install', category: 'Debian' },
      { text: 'rpm -i', category: 'RPM' },
      { text: 'dnf install', category: 'RPM' },
      { text: 'zypper install', category: 'RPM' },
    ],
  },
  {
    id: 'dd-permission-match',
    category: 'Permessi Ottali',
    question: 'Abbina la notazione ottale ai permessi:',
    items: [
      { text: '755', matches: 'rwxr-xr-x' },
      { text: '644', matches: 'rw-r--r--' },
      { text: '700', matches: 'rwx------' },
      { text: '777', matches: 'rwxrwxrwx' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-lpic1-1', description: 'Mostra i dispositivi PCI', prompt: 'lspci', expectedOutput: 'VGA compatible controller', hint: 'Usa lspci', difficulty: 1 },
  { id: 'tc-lpic1-2', description: 'Mostra il target systemd predefinito', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Usa systemctl get-default', difficulty: 1 },
  { id: 'tc-lpic1-3', description: 'Mostra i moduli del kernel caricati', prompt: 'lsmod', expectedOutput: 'Module', hint: 'Usa lsmod', difficulty: 1 },
  { id: 'tc-lpic1-4', description: 'Mostra informazioni sulla CPU', prompt: 'cat /proc/cpuinfo', expectedOutput: 'model name', hint: 'Leggi /proc/cpuinfo', difficulty: 1 },
  { id: 'tc-lpic1-5', description: 'Mostra lo spazio disco', prompt: 'df -h', expectedOutput: 'Filesystem', hint: 'Usa df con -h', difficulty: 1 },
  { id: 'tc-lpic1-6', description: 'Cerca file .conf in /etc', prompt: 'find /etc -name "*.conf"', expectedOutput: '.conf', hint: 'Usa find con -name', difficulty: 2 },
  { id: 'tc-lpic1-7', description: 'Mostra le prime 5 righe di /etc/passwd', prompt: 'head -n 5 /etc/passwd', expectedOutput: 'root:', hint: 'Usa head -n 5', difficulty: 1 },
  { id: 'tc-lpic1-8', description: 'Conta le righe in /etc/passwd', prompt: 'wc -l /etc/passwd', expectedOutput: '[0-9]+', hint: 'Usa wc -l', difficulty: 1 },
  { id: 'tc-lpic1-9', description: 'Mostra il tipo di /usr/bin/ls', prompt: 'file /usr/bin/ls', expectedOutput: 'ELF', hint: 'Usa il comando file', difficulty: 2 },
  { id: 'tc-lpic1-10', description: 'Trova il pacchetto che possiede /usr/bin/vim', prompt: 'dpkg -S /usr/bin/vim', expectedOutput: 'vim', hint: 'Usa dpkg -S', difficulty: 2 },
  { id: 'tc-lpic1-11', description: 'Mostra UUID dei dispositivi a blocchi', prompt: 'blkid', expectedOutput: 'UUID=', hint: 'Usa blkid', difficulty: 2 },
  { id: 'tc-lpic1-12', description: 'Mostra i permessi di /etc/passwd', prompt: 'ls -l /etc/passwd', expectedOutput: '-rw-r--r--', hint: 'Usa ls -l', difficulty: 1 },
  { id: 'tc-lpic1-13', description: 'Mostra l\'inode di /etc/hostname', prompt: 'ls -i /etc/hostname', expectedOutput: '[0-9]+', hint: 'Usa ls -i', difficulty: 2 },
  { id: 'tc-lpic1-14', description: 'Mostra le librerie necessarie a /bin/ls', prompt: 'ldd /bin/ls', expectedOutput: 'libc.so', hint: 'Usa ldd', difficulty: 2 },
  { id: 'tc-lpic1-15', description: 'Mostra la versione del kernel', prompt: 'uname -r', expectedOutput: '[0-9]+\\.[0-9]+', hint: 'Usa uname -r', difficulty: 1 },
]
