// RHCSA Games Data — Italiano
// Usato da useGameData() quando courseId === 'rhcsa'

// ─── MEMORY GAME ─────────────────────────────────────────
// Formato: { command, description }
// 50 coppie comando/descrizione RHCSA

export const memoryGameData = [
  // Topic 1 — Strumenti Essenziali
  { command: 'grep -r "pattern" /etc/', description: 'Cerca ricorsivamente un pattern in /etc/' },
  { command: 'tar -czvf archivio.tar.gz /dir', description: 'Crea archivio compresso con gzip' },
  { command: 'tar -xzvf archivio.tar.gz', description: 'Estrae archivio tar.gz' },
  { command: 'find / -name "*.conf" -type f', description: 'Trova tutti i file .conf nel sistema' },
  { command: 'chmod 755 file', description: 'rwxr-xr-x — proprietario esegue, altri leggono/eseguono' },
  { command: 'chown mario:dev file', description: 'Cambia proprietario e gruppo di un file' },
  { command: 'ln -s /src/reale /link/simbolico', description: 'Crea un link simbolico' },
  { command: 'man -k "keyword"', description: 'Cerca nelle pagine man per keyword' },
  // Topic 2 — Shell Scripting
  { command: 'export VAR="valore"', description: 'Rende una variabile disponibile ai processi figli' },
  { command: 'RESULT=$(comando)', description: 'Cattura output di un comando in una variabile' },
  { command: '[ -f "$FILE" ]', description: 'Testa se una variabile punta a un file esistente' },
  { command: '[ -d "$DIR" ]', description: 'Testa se una variabile punta a una directory esistente' },
  { command: '[ -z "$VAR" ]', description: 'Testa se una stringa è vuota' },
  { command: 'for f in /etc/*.conf; do echo $f; done', description: 'Itera su tutti i file .conf in /etc/' },
  // Topic 3 — Gestione Sistema
  { command: 'systemctl enable --now sshd', description: 'Abilita e avvia sshd in un unico comando' },
  { command: 'systemctl mask httpd', description: 'Impedisce qualsiasi avvio del servizio httpd' },
  { command: 'systemctl set-default multi-user.target', description: 'Imposta il target di boot predefinito (CLI)' },
  { command: 'journalctl -u sshd -f', description: 'Segue i log del servizio sshd in tempo reale' },
  { command: 'kill -9 PID', description: 'Invia SIGKILL per terminare forzatamente un processo' },
  { command: 'renice -n -5 -p PID', description: 'Modifica la priorità di un processo in esecuzione' },
  // Topic 4 — LVM Storage
  { command: 'pvcreate /dev/sdb1', description: 'Inizializza una partizione come Physical Volume LVM' },
  { command: 'vgcreate datavg /dev/sdb1', description: 'Crea un Volume Group usando un Physical Volume' },
  { command: 'lvcreate -L 2G -n datalv datavg', description: 'Crea un Logical Volume da 2GiB' },
  { command: 'lvextend -L +1G -r /dev/vg/lv', description: 'Estende LV e ridimensiona il filesystem' },
  { command: 'xfs_growfs /mountpoint', description: 'Estende un filesystem XFS montato' },
  // Topic 5 — File System
  { command: 'mkfs.xfs /dev/sdb1', description: 'Formatta una partizione con filesystem XFS' },
  { command: 'cryptsetup luksFormat /dev/sdc1', description: 'Formatta una partizione con cifratura LUKS' },
  { command: 'cryptsetup open /dev/sdc1 vault', description: 'Apre un container LUKS come /dev/mapper/vault' },
  { command: 'setfacl -m u:mario:rw file', description: 'Aggiunge permessi ACL per l\'utente mario' },
  { command: 'getfacl file', description: 'Visualizza le ACL estese di un file' },
  // Topic 6 — Manutenzione
  { command: 'dnf install pacchetto', description: 'Installa un pacchetto con tutte le dipendenze' },
  { command: 'dnf provides /usr/bin/vim', description: 'Trova quale pacchetto fornisce un file/comando' },
  { command: 'rpm -qf /usr/bin/passwd', description: 'Trova il pacchetto proprietario di un file installato' },
  { command: 'rpm -ql nome-pacchetto', description: 'Lista tutti i file inclusi in un pacchetto' },
  { command: 'grub2-mkconfig -o /boot/grub2/grub.cfg', description: 'Rigenera la configurazione di GRUB2' },
  // Topic 7 — Networking
  { command: 'nmcli con mod ens3 ipv4.addresses 192.168.1.100/24', description: 'Imposta IP statico su una connessione' },
  { command: 'nmcli con up ens3', description: 'Attiva e applica la configurazione di rete' },
  { command: 'firewall-cmd --add-service=http --permanent', description: 'Apre la porta 80 permanentemente nel firewall' },
  { command: 'firewall-cmd --reload', description: 'Applica le regole firewall permanenti senza reboot' },
  { command: 'ssh-copy-id mario@server', description: 'Copia la chiave pubblica SSH sul server remoto' },
  // Topic 8 — Utenti e Gruppi
  { command: 'useradd -m -s /bin/bash mario', description: 'Crea utente con home directory e shell bash' },
  { command: 'usermod -aG wheel mario', description: 'Aggiunge mario al gruppo wheel (accesso sudo)' },
  { command: 'chage -M 90 mario', description: 'Imposta scadenza password a 90 giorni' },
  { command: 'visudo', description: 'Modifica /etc/sudoers in modo sicuro con validazione' },
  { command: 'userdel -r mario', description: 'Elimina utente e la sua home directory' },
  // Topic 9 — SELinux
  { command: 'getenforce', description: 'Mostra la modalità SELinux corrente' },
  { command: 'setenforce 0', description: 'Passa SELinux in modalità permissive (temporaneo)' },
  { command: 'restorecon -Rv /percorso', description: 'Ripristina i contesti SELinux di default ricorsivamente' },
  { command: 'setsebool -P httpd_can_network_connect on', description: 'Abilita boolean SELinux permanentemente' },
  { command: 'semanage port -a -t http_port_t -p tcp 8443', description: 'Aggiunge porta 8443 al tipo SELinux http_port_t' },
  // Topic 10 — Container
  { command: 'podman run -d --name web -p 8080:80 nginx', description: 'Avvia container nginx in background sulla porta 8080' },
  { command: 'podman exec -it container bash', description: 'Apre una shell bash in un container in esecuzione' },
  { command: 'podman build -t myapp:1.0 .', description: 'Costruisce un\'immagine dal Containerfile nella dir corrente' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
// Formato: { text, answer: true|false, explanation, difficulty: 1|2|3 }
// 40 affermazioni vero/falso

export const trueFalseData = [
  // Difficoltà 1 — Facile
  { text: 'Il filesystem di default su RHEL9 per nuove partizioni è XFS.', answer: true, explanation: 'XFS è il filesystem predefinito su RHEL7+ e RHEL9 per le sue capacità scalabili.', difficulty: 1 },
  { text: 'Il comando "systemctl enable sshd" avvia immediatamente il servizio sshd.', answer: false, explanation: 'enable configura solo l\'avvio automatico al boot. Per avviarlo subito serve "start" o "--now".', difficulty: 1 },
  { text: 'Il file /etc/fstab controlla i filesystem montati automaticamente al boot.', answer: true, explanation: '/etc/fstab è letto da systemd al boot per montare i filesystem configurati.', difficulty: 1 },
  { text: 'Il valore nice -20 indica la massima priorità di CPU per un processo.', answer: true, explanation: 'Il range nice va da -20 (massima priorità) a +19 (minima priorità).', difficulty: 1 },
  { text: 'SIGKILL (9) può essere ignorato da un processo.', answer: false, explanation: 'SIGKILL non può essere intercettato, bloccato o ignorato. Termina il processo immediatamente.', difficulty: 1 },
  { text: 'Il comando "pvcreate" crea un Logical Volume LVM.', answer: false, explanation: 'pvcreate inizializza un Physical Volume. I Logical Volume si creano con lvcreate.', difficulty: 1 },
  { text: 'SELinux in modalità "permissive" blocca le violazioni ma le logga.', answer: false, explanation: 'Permissive logga le violazioni ma NON le blocca. Solo enforcing le blocca.', difficulty: 1 },
  { text: 'Podman richiede un daemon root per funzionare, come Docker.', answer: false, explanation: 'Podman è daemonless e supporta container rootless, a differenza di Docker.', difficulty: 1 },
  { text: 'Il comando "restorecon" ripristina i contesti SELinux di default.', answer: true, explanation: 'restorecon ripristina i contesti SELinux secondo le policy definite con semanage fcontext.', difficulty: 1 },
  { text: 'L\'UUID di un filesystem cambia ogni volta che si monta il dispositivo.', answer: false, explanation: 'L\'UUID è assegnato alla creazione del filesystem e non cambia. È permanente e univoco.', difficulty: 1 },
  { text: 'Il comando "dnf remove" rimuove automaticamente anche le dipendenze orfane.', answer: false, explanation: 'dnf remove rimuove il pacchetto specifico. Le dipendenze orfane si rimuovono con "dnf autoremove".', difficulty: 1 },
  { text: 'Un hard link può puntare a file su filesystem diversi.', answer: false, explanation: 'Gli hard link devono essere sullo stesso filesystem (stesso inode table). I link simbolici possono essere cross-filesystem.', difficulty: 1 },
  { text: 'Il file /etc/shadow contiene le password degli utenti in forma hashata.', answer: true, explanation: '/etc/shadow contiene gli hash delle password, accessibile solo a root per sicurezza.', difficulty: 1 },

  // Difficoltà 2 — Media
  { text: 'Il comando "lvextend -r" ridimensiona automaticamente il filesystem dopo l\'estensione del LV.', answer: true, explanation: '-r (resize) fa sì che lvextend chiami automaticamente resize2fs o xfs_growfs dopo l\'estensione.', difficulty: 2 },
  { text: 'firewall-cmd --add-port=8080/tcp senza --permanent è persistente al reboot.', answer: false, explanation: 'Senza --permanent la regola è solo temporanea. Viene persa al reboot o a --reload.', difficulty: 2 },
  { text: 'Il comando "semanage fcontext" modifica immediatamente i contesti dei file esistenti.', answer: false, explanation: 'semanage fcontext aggiunge solo la regola nel database. restorecon deve essere eseguito per applicarla.', difficulty: 2 },
  { text: 'Il file /etc/default/grub contiene le voci del menu di GRUB2.', answer: false, explanation: '/etc/default/grub contiene i parametri. Le voci del menu sono in /boot/grub2/grub.cfg, generato con grub2-mkconfig.', difficulty: 2 },
  { text: 'Con "usermod -G wheel mario" (senza -a), mario mantiene tutti i suoi gruppi precedenti.', answer: false, explanation: 'Senza -a, -G SOSTITUISCE tutti i gruppi supplementari. Occorre -aG per aggiungere senza rimuovere.', difficulty: 2 },
  { text: 'XFS supporta la riduzione della dimensione di un filesystem.', answer: false, explanation: 'XFS può SOLO crescere. Non supporta la riduzione. ext4 (con resize2fs) supporta anche la riduzione se non montato.', difficulty: 2 },
  { text: 'Il comando "crontab -e" edita il crontab dell\'utente root per default.', answer: false, explanation: 'crontab -e edita il crontab dell\'UTENTE CORRENTE. Per root bisogna essere root o usare "sudo crontab -e".', difficulty: 2 },
  { text: 'Il mount point /dev/mapper/nome viene creato dopo cryptsetup open.', answer: true, explanation: 'cryptsetup open crea il device mapper /dev/mapper/nome su cui si formatta e monta.', difficulty: 2 },
  { text: 'setsebool senza -P modifica il boolean SELinux in modo permanente.', answer: false, explanation: 'Senza -P la modifica è temporanea e si perde al reboot. -P rende il boolean persistente.', difficulty: 2 },
  { text: 'Il comando "partprobe" installa GRUB2 sulla partizione specificata.', answer: false, explanation: 'partprobe informa il kernel delle modifiche alla tabella delle partizioni senza reboot.', difficulty: 2 },
  { text: 'Il tag ":z" in un bind mount Podman rietichetta per SELinux per uso condiviso tra container.', answer: true, explanation: ':z = shared label (condivisibile). :Z = private label (uso esclusivo del container). Entrambi necessari con SELinux.', difficulty: 2 },
  { text: 'journalctl -b mostra solo i log del boot corrente.', answer: true, explanation: '-b filtra il journal mostrando solo i log del boot corrente. -b -1 mostra il boot precedente.', difficulty: 2 },

  // Difficoltà 3 — Difficile
  { text: 'Dopo aver resettato la password root con rd.break, bisogna eseguire "touch /.autorelabel" per SELinux.', answer: true, explanation: 'Modifica di /etc/shadow richiede rietichettatura SELinux. touch /.autorelabel la forza al prossimo boot.', difficulty: 3 },
  { text: 'Il flag "nosuid" su un mount point impedisce l\'esecuzione di file binari.', answer: false, explanation: 'nosuid ignora i bit setuid/setgid. noexec impedisce l\'esecuzione di binari. Sono due opzioni diverse.', difficulty: 3 },
  { text: 'In /etc/fstab, il campo "pass" impostato a 2 indica una scansione fsck ad alta priorità.', answer: false, explanation: 'pass=1 è la massima priorità (root). pass=2 indica scansione dopo il filesystem con pass=1. pass=0 nessun fsck.', difficulty: 3 },
  { text: 'systemctl daemon-reload è necessario dopo aver modificato un unit file.', answer: true, explanation: 'systemd memorizza i file unit. daemon-reload li rilegge dal disco senza riavviare i servizi.', difficulty: 3 },
  { text: 'semanage port -a aggiunge una porta permanentemente senza necessità di riavviare SELinux.', answer: true, explanation: 'semanage modifica il database delle policy SELinux. La modifica è immediata e permanente.', difficulty: 3 },
  { text: 'Il comando "mv" mantiene il contesto SELinux originale del file spostato.', answer: true, explanation: 'mv mantiene il contesto della sorgente, che potrebbe essere scorretto nella destinazione. Usare restorecon dopo.', difficulty: 3 },
  { text: 'rpm -V mostra i file dei pacchetti che hanno dipendenze non soddisfatte.', answer: false, explanation: 'rpm -V verifica l\'integrità (dimensione, checksum, permessi) dei file di un pacchetto. Le dipendenze si controllano con rpm -R.', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
// Formato: { prompt (con _____), answer, hint, difficulty: 1|2|3 }
// 30 comandi con lacuna da completare

export const fillGapData = [
  // Difficoltà 1
  { prompt: 'systemctl _____ sshd', answer: 'enable --now', hint: 'abilita e avvia in un comando', difficulty: 1 },
  { prompt: 'dnf _____ httpd', answer: 'install', hint: 'installa il pacchetto', difficulty: 1 },
  { prompt: 'useradd -m -s /bin/bash _____', answer: 'mario', hint: 'nome dell\'utente da creare', difficulty: 1 },
  { prompt: 'pvcreate _____', answer: '/dev/sdb1', hint: 'device della partizione', difficulty: 1 },
  { prompt: 'getenforce', answer: 'getenforce', hint: 'mostra la modalità SELinux corrente', difficulty: 1 },
  { prompt: 'firewall-cmd --add-service=http _____', answer: '--permanent', hint: 'rende la regola persistente', difficulty: 1 },
  { prompt: 'podman _____ -it ubi9 /bin/bash', answer: 'run', hint: 'avvia un container', difficulty: 1 },
  { prompt: 'tar -czvf backup.tar.gz _____', answer: '/etc/ssh/', hint: 'directory da archiviare', difficulty: 1 },
  { prompt: 'passwd _____', answer: 'mario', hint: 'utente di cui impostare la password', difficulty: 1 },
  { prompt: 'systemctl _____ httpd', answer: 'status', hint: 'mostra stato del servizio', difficulty: 1 },
  // Difficoltà 2
  { prompt: 'vgcreate datavg _____', answer: '/dev/sdb1', hint: 'Physical Volume da aggiungere al VG', difficulty: 2 },
  { prompt: 'lvcreate _____ 2G -n datalv datavg', answer: '-L', hint: 'flag per specificare dimensione assoluta', difficulty: 2 },
  { prompt: 'lvextend -L +1G _____ /dev/datavg/datalv', answer: '-r', hint: 'ridimensiona anche il filesystem', difficulty: 2 },
  { prompt: 'setenforce _____', answer: '0', hint: 'modalità permissive (per debug)', difficulty: 2 },
  { prompt: 'usermod _____ wheel mario', answer: '-aG', hint: 'aggiunge al gruppo SENZA rimuovere altri', difficulty: 2 },
  { prompt: 'chage _____ 90 mario', answer: '-M', hint: 'imposta il numero massimo di giorni password', difficulty: 2 },
  { prompt: 'firewall-cmd _____', answer: '--reload', hint: 'applica le regole permanenti', difficulty: 2 },
  { prompt: 'ssh-keygen -t _____', answer: 'ed25519', hint: 'algoritmo moderno raccomandato', difficulty: 2 },
  { prompt: 'cryptsetup _____ /dev/sdc1', answer: 'luksFormat', hint: 'formatta con cifratura LUKS', difficulty: 2 },
  { prompt: 'grub2-mkconfig -o _____', answer: '/boot/grub2/grub.cfg', hint: 'path del file di configurazione GRUB2', difficulty: 2 },
  // Difficoltà 3
  { prompt: 'semanage fcontext -a -t httpd_sys_content_t "_____"', answer: '/web(/.*)?', hint: 'pattern regex per tutti i file nella directory', difficulty: 3 },
  { prompt: 'restorecon _____ /var/www/html', answer: '-Rv', hint: 'ricorsivo e verbose', difficulty: 3 },
  { prompt: 'setsebool _____ httpd_can_network_connect on', answer: '-P', hint: 'rende il boolean permanente', difficulty: 3 },
  { prompt: 'podman run -v /data:/data:_____ nginx', answer: 'Z', hint: 'SELinux private label per uso esclusivo', difficulty: 3 },
  { prompt: 'systemctl _____ rescue.target', answer: 'isolate', hint: 'commuta al target senza reboot', difficulty: 3 },
  { prompt: 'mkfs._____ /dev/datavg/datalv', answer: 'xfs', hint: 'filesystem di default RHEL9', difficulty: 3 },
  { prompt: 'semanage port -a -t http_port_t -p tcp _____', answer: '8443', hint: 'porta HTTPS alternativa comune', difficulty: 3 },
  { prompt: 'journalctl -u sshd _____ "1 hour ago"', answer: '--since', hint: 'filtra log da un certo momento', difficulty: 3 },
  { prompt: 'rpm -_____ /usr/bin/passwd', answer: 'qf', hint: 'query: quale pacchetto ha installato questo file?', difficulty: 3 },
  { prompt: 'nmcli con mod ens3 ipv4.method _____', answer: 'manual', hint: 'modalità per IP statico (non DHCP)', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
// Formato: { id, category, items: [{text, correct}] }
// Ordinamento/Categorizzazione comandi RHCSA

export const dragDropData = [
  {
    id: 'dd-lvm-order',
    category: 'Ordine Corretto LVM',
    question: 'Trascina i comandi LVM nell\'ordine corretto:',
    items: [
      { text: 'lvcreate -L 2G -n datalv datavg', order: 3 },
      { text: 'mkfs.xfs /dev/datavg/datalv', order: 4 },
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
    ],
  },
  {
    id: 'dd-selinux-modes',
    category: 'Modalità SELinux',
    question: 'Associa il comportamento alla modalità SELinux:',
    items: [
      { text: 'Blocca E logga le violazioni', matches: 'Enforcing' },
      { text: 'Solo logga, non blocca', matches: 'Permissive' },
      { text: 'SELinux completamente disattivato', matches: 'Disabled' },
    ],
  },
  {
    id: 'dd-systemd-match',
    category: 'Target systemd',
    question: 'Collega il target al runlevel equivalente:',
    items: [
      { text: 'multi-user.target', matches: 'Runlevel 3 (CLI)' },
      { text: 'graphical.target', matches: 'Runlevel 5 (GUI)' },
      { text: 'rescue.target', matches: 'Runlevel 1 (Single user)' },
    ],
  },
  {
    id: 'dd-firewall-cmds',
    category: 'Clasifica Comandi Firewall',
    question: 'Aggiungi i comandi temporanei vs permanenti:',
    items: [
      { text: 'firewall-cmd --add-service=http', category: 'Temporaneo' },
      { text: 'firewall-cmd --add-service=http --permanent', category: 'Permanente' },
      { text: 'firewall-cmd --add-port=8080/tcp', category: 'Temporaneo' },
      { text: 'firewall-cmd --add-port=8080/tcp --permanent', category: 'Permanente' },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
// Formato: { id, description, prompt, expectedOutput, hint, difficulty: 1|2|3 }

export const terminalChallengeData = [
  { id: 'tc-rhcsa-1', description: 'Mostra la modalità SELinux corrente', prompt: 'getenforce', expectedOutput: 'Enforcing', hint: 'Usa getenforce', difficulty: 1 },
  { id: 'tc-rhcsa-2', description: 'Mostra il target systemd di default', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Usa systemctl get-default', difficulty: 1 },
  { id: 'tc-rhcsa-3', description: 'Mostra i dispositivi a blocchi in formato albero', prompt: 'lsblk', expectedOutput: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINTS', hint: 'Usa lsblk', difficulty: 1 },
  { id: 'tc-rhcsa-4', description: 'Cerca chi fornisce il file /usr/bin/vim', prompt: 'dnf provides */vim', expectedOutput: 'vim-enhanced', hint: 'Usa dnf provides', difficulty: 2 },
  { id: 'tc-rhcsa-5', description: 'Controlla quale pacchetto ha installato /usr/bin/passwd', prompt: 'rpm -qf /usr/bin/passwd', expectedOutput: 'passwd-', hint: 'Usa rpm -qf', difficulty: 1 },
  { id: 'tc-rhcsa-6', description: 'Mostra le porte SELinux per il tipo http_port_t', prompt: 'semanage port -l | grep http_port_t', expectedOutput: 'http_port_t', hint: 'Usa semanage port -l con grep', difficulty: 2 },
  { id: 'tc-rhcsa-7', description: 'Trova il PID del processo sshd', prompt: 'pgrep sshd', expectedOutput: '[0-9]+', hint: 'Usa pgrep', difficulty: 1 },
  { id: 'tc-rhcsa-8', description: 'Controlla lo spazio disco con tipo filesystem', prompt: 'df -Th', expectedOutput: 'Filesystem', hint: 'Usa df con opzioni -T e -h', difficulty: 1 },
  { id: 'tc-rhcsa-9', description: 'Lista le connessioni di rete attive con nmcli', prompt: 'nmcli connection show', expectedOutput: 'NAME', hint: 'Usa nmcli connection show', difficulty: 2 },
  { id: 'tc-rhcsa-10', description: 'Mostra i container Podman in esecuzione', prompt: 'podman ps', expectedOutput: 'CONTAINER ID', hint: 'Usa podman ps', difficulty: 1 },
  { id: 'tc-rhcsa-11', description: 'Mostra tutti i boolean SELinux relativi a httpd', prompt: 'getsebool -a | grep httpd', expectedOutput: 'httpd_', hint: 'Usa getsebool -a con grep', difficulty: 2 },
  { id: 'tc-rhcsa-12', description: 'Crea una directory e verifica il suo contesto SELinux', prompt: 'mkdir /test && ls -Zd /test', expectedOutput: 'default_t', hint: 'usa mkdir e ls -Zd', difficulty: 3 },
  { id: 'tc-rhcsa-13', description: 'Mostra i Volume Group LVM disponibili', prompt: 'vgs', expectedOutput: 'VG', hint: 'Usa vgs per riepilogo', difficulty: 2 },
  { id: 'tc-rhcsa-14', description: 'Leggi gli ultimi 10 log del servizio httpd', prompt: 'journalctl -u httpd -n 10', expectedOutput: 'httpd', hint: 'Usa journalctl con -u e -n', difficulty: 2 },
  { id: 'tc-rhcsa-15', description: 'Verifica le regole firewall nella zona public', prompt: 'firewall-cmd --zone=public --list-all', expectedOutput: 'public', hint: 'Usa firewall-cmd --list-all', difficulty: 2 },
]
