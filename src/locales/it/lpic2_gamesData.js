// LPIC-2 Games Data — Italiano
// Used by useGameData() when courseId === 'lpic2'

// ─── MEMORY GAME ─────────────────────────────────────────
export const memoryGameData = [
  // Topic 200 — Capacity Planning
  { command: 'iostat -xz 1', description: 'Mostra statistiche I/O estese per dispositivi attivi ogni secondo' },
  { command: 'vmstat 5', description: 'Riporta statistiche di memoria virtuale ogni 5 secondi' },
  { command: 'sar -u 1 5', description: 'Mostra utilizzo CPU ogni secondo per 5 iterazioni' },
  { command: 'collectd', description: 'Demone che raccoglie dati di performance del sistema periodicamente' },
  // Topic 201 — Linux Kernel
  { command: 'make menuconfig', description: 'Menu interattivo testuale per configurazione del kernel' },
  { command: 'lsmod', description: 'Mostra i moduli del kernel attualmente caricati' },
  { command: 'modprobe vfat', description: 'Carica il modulo kernel vfat e le sue dipendenze' },
  { command: 'depmod -a', description: 'Rigenera il database delle dipendenze dei moduli' },
  // Topic 202 — System Startup
  { command: 'systemctl set-default multi-user.target', description: 'Imposta il sistema per avviarsi in modalità testuale' },
  { command: 'grub2-mkconfig -o /boot/grub2/grub.cfg', description: 'Rigenera la configurazione di avvio GRUB2' },
  { command: 'update-initramfs -u', description: 'Aggiorna l\'immagine RAM filesystem iniziale' },
  // Topic 203 — Filesystem & Devices
  { command: 'tune2fs -m 1 /dev/sda1', description: 'Riduce lo spazio riservato a root all\'1% su ext4' },
  { command: 'xfs_info /dev/sdb1', description: 'Mostra informazioni sulla geometria del filesystem XFS' },
  { command: 'udevadm monitor', description: 'Monitora eventi kernel udev in tempo reale' },
  // Topic 204 — Advanced Storage
  { command: 'mdadm --create /dev/md0 --level=5 --raid-devices=3 /dev/sd[b-d]1', description: 'Crea un array RAID 5 con tre dispositivi' },
  { command: 'pvcreate /dev/sdb1', description: 'Inizializza una partizione come Volume Fisico LVM' },
  { command: 'lvextend -L +5G -r /dev/vg0/data', description: 'Estende un Volume Logico LVM e ridimensiona il filesystem' },
  // Topic 205 — Networking
  { command: 'ip route add default via 192.168.1.1', description: 'Aggiunge un gateway predefinito' },
  { command: 'ss -tulpn', description: 'Mostra porte TCP/UDP in ascolto con nomi dei processi' },
  { command: 'tcpdump -i eth0 port 80', description: 'Cattura traffico HTTP sull\'interfaccia eth0' },
  // Topic 206 — System Maintenance
  { command: './configure && make && make install', description: 'Flusso classico di compilazione e installazione da sorgenti' },
  { command: 'rsync -avz /data/ remote:/backup/', description: 'Sincronizza incrementalmente una directory verso un host remoto' },
  // Topic 207 — DNS
  { command: 'named-checkconf', description: 'Verifica la sintassi del file di configurazione BIND' },
  { command: 'named-checkzone example.com db.example.com', description: 'Controlla errori nel file di zona DNS' },
  { command: 'rndc reload', description: 'Ricarica le zone del server DNS BIND senza riavvio' },
  // Topic 208 — Web Services
  { command: 'apachectl configtest', description: 'Testa la sintassi della configurazione Apache' },
  { command: 'nginx -t', description: 'Testa la sintassi della configurazione Nginx' },
  { command: 'a2ensite mysite.conf', description: 'Abilita un sito virtual host Apache su Debian' },
  // Topic 209 — File Sharing
  { command: 'smbpasswd -a mario', description: 'Aggiunge un utente Samba e imposta la password' },
  { command: 'exportfs -ra', description: 'Ri-esporta tutte le condivisioni NFS da /etc/exports' },
  // Topic 210 — Network Client Management
  { command: 'dhcpd -t', description: 'Controlla la sintassi della configurazione del server DHCP ISC' },
  { command: 'ldapsearch -x -b "dc=example,dc=com"', description: 'Ricerca LDAP anonima dal DN base' },
  // Topic 211 — E-Mail Services
  { command: 'postconf -n', description: 'Mostra i parametri Postfix non predefiniti' },
  { command: 'mailq', description: 'Visualizza la coda di posta con messaggi in attesa' },
  // Topic 212 — System Security
  { command: 'iptables -L -n -v', description: 'Elenca tutte le regole firewall con contatori di pacchetti' },
  { command: 'fail2ban-client status sshd', description: 'Mostra stato Fail2Ban e IP bannati per sshd' },
  { command: 'ssh-keygen -t ed25519', description: 'Genera una coppia di chiavi SSH Ed25519' },
]

// ─── TRUE/FALSE GAME ─────────────────────────────────────
export const trueFalseData = [
  // Difficulty 1 — Facile
  { text: 'Il comando `iostat` è tipicamente fornito dal pacchetto `sysstat` e mostra statistiche CPU e I/O.', answer: true, explanation: 'Sì, iostat fa parte di sysstat ed è uno strumento essenziale per misurare le prestazioni I/O del disco.', difficulty: 1 },
  { text: '`lsmod` può caricare nuovi moduli del kernel su richiesta.', answer: false, explanation: 'lsmod elenca solo i moduli attualmente caricati. Per caricare moduli, usa modprobe o insmod.', difficulty: 1 },
  { text: 'GRUB2 può avviare sia sistemi BIOS che UEFI.', answer: true, explanation: 'GRUB2 supporta sia la modalità BIOS legacy che la moderna UEFI.', difficulty: 1 },
  { text: 'Il filesystem ext4 supporta file fino a una dimensione massima di 1 TB.', answer: false, explanation: 'ext4 supporta file fino a 16 TB e filesystem fino a 1 EB (exabyte).', difficulty: 1 },
  { text: 'In RAID 1, i dati vengono specchiati su due o più dischi.', answer: true, explanation: 'RAID 1 specchia i dati per ridondanza. Se un disco si guasta, l\'altro ha una copia identica.', difficulty: 1 },
  { text: 'Il comando `ip route` ha completamente sostituito il vecchio comando `route` nel Linux moderno.', answer: true, explanation: 'La suite iproute2 (comando ip) sostituisce net-tools (route, ifconfig, netstat).', difficulty: 1 },
  { text: '`rsync` copia sempre tutti i file, anche se non sono cambiati.', answer: false, explanation: 'rsync è efficiente perché trasferisce solo i file modificati (trasferimento delta).', difficulty: 1 },
  { text: 'BIND è il software server DNS più utilizzato su Internet.', answer: true, explanation: 'BIND (Berkeley Internet Name Domain) è lo standard de facto per i server DNS.', difficulty: 1 },
  { text: 'Apache e Nginx non possono funzionare contemporaneamente sulla stessa porta.', answer: true, explanation: 'Solo un processo può legarsi a una porta specifica alla volta. Possono coesistere su porte diverse.', difficulty: 1 },
  { text: 'Samba permette a Linux di condividere file con macchine Windows usando il protocollo SMB/CIFS.', answer: true, explanation: 'Samba implementa il protocollo SMB/CIFS, consentendo la condivisione di file e stampanti con Windows.', difficulty: 1 },
  { text: 'NFS versione 4 non richiede il servizio rpcbind.', answer: true, explanation: 'NFSv4 usa una singola porta TCP (2049) e non necessita di rpcbind, a differenza di NFSv3.', difficulty: 1 },
  { text: 'Postfix è un agente di consegna della posta (MDA), non un agente di trasferimento della posta (MTA).', answer: false, explanation: 'Postfix è un MTA (Mail Transfer Agent) che instrada e consegna email tra server usando SMTP.', difficulty: 1 },

  // Difficulty 2 — Medio
  { text: 'L\'`initramfs` è un filesystem root temporaneo caricato in RAM durante l\'avvio prima che il root reale venga montato.', answer: true, explanation: 'initramfs fornisce driver e strumenti necessari per montare il filesystem root reale.', difficulty: 2 },
  { text: 'Eseguire `make modules_install` è opzionale quando si compila un kernel personalizzato.', answer: false, explanation: 'Senza modules_install, il nuovo kernel non troverà i suoi moduli e molti dispositivi non funzioneranno.', difficulty: 2 },
  { text: 'In systemd, `multi-user.target` è equivalente al tradizionale runlevel 3 di SysV.', answer: true, explanation: 'multi-user.target = runlevel 3 (modalità testo/CLI), graphical.target = runlevel 5 (GUI).', difficulty: 2 },
  { text: 'Si può eseguire `fsck` in sicurezza su un filesystem montato.', answer: false, explanation: 'NON eseguire MAI fsck su un filesystem montato poiché può corrompere irreversibilmente i dati.', difficulty: 2 },
  { text: 'RAID 5 richiede un minimo di 3 dischi.', answer: true, explanation: 'RAID 5 usa striping con parità distribuita, richiedendo almeno 3 dischi.', difficulty: 2 },
  { text: 'LVM permette di ridimensionare un volume logico mentre il filesystem è montato.', answer: true, explanation: 'LVM supporta il ridimensionamento online. ext4 può crescere online, XFS può solo crescere (mai ridursi) online.', difficulty: 2 },
  { text: 'Il comando `tcpdump` richiede privilegi di root per catturare pacchetti di rete.', answer: true, explanation: 'La cattura pacchetti richiede accesso ai socket raw, che tipicamente necessita di root o CAP_NET_RAW.', difficulty: 2 },
  { text: '`named-checkzone` valida la sintassi del file named.conf di BIND.', answer: false, explanation: 'named-checkzone valida i file di zona. named-checkconf valida il file di configurazione principale.', difficulty: 2 },
  { text: 'In Apache, il file `.htaccess` viene elaborato da Nginx allo stesso modo.', answer: false, explanation: 'Nginx NON legge i file .htaccess. Tutta la configurazione Nginx deve essere nei file di configurazione principali.', difficulty: 2 },
  { text: 'Il server Dovecot fornisce servizi IMAP e POP3 per il recupero delle email.', answer: true, explanation: 'Dovecot è un MDA che fornisce accesso IMAP e POP3 agli utenti per leggere la loro posta.', difficulty: 2 },
  { text: 'Le regole iptables vengono salvate automaticamente e persistono dopo il riavvio.', answer: false, explanation: 'Le regole iptables si perdono al riavvio. Usa iptables-save/iptables-restore o iptables-persistent.', difficulty: 2 },
  { text: 'Il `bonding` in Linux combina più interfacce di rete per ridondanza o throughput.', answer: true, explanation: 'Il bonding Linux (o NIC teaming) aggrega interfacce per tolleranza ai guasti o bilanciamento del carico.', difficulty: 2 },

  // Difficulty 3 — Difficile
  { text: 'L\'opzione `-p1` in `patch -p1` elimina il primo componente di directory dai percorsi nel patch.', answer: true, explanation: '-p1 rimuove il prefisso della directory di primo livello, adattando i percorsi alla struttura corrente.', difficulty: 3 },
  { text: 'In un record SOA DNS, il numero seriale deve essere incrementato ogni volta che il file di zona viene modificato.', answer: true, explanation: 'I server DNS slave confrontano i numeri seriali; se non incrementato, non scaricheranno la zona aggiornata.', difficulty: 3 },
  { text: 'DNSSEC crittografa le query DNS per prevenire intercettazioni.', answer: false, explanation: 'DNSSEC fornisce autenticazione e integrità (firme digitali), non crittografia. DNS-over-TLS crittografa.', difficulty: 3 },
  { text: 'Apache MPM prefork usa più thread all\'interno di un singolo processo.', answer: false, explanation: 'prefork usa più processi, ognuno con un singolo thread. worker e event MPM usano i thread.', difficulty: 3 },
  { text: 'In Samba, gli utenti devono avere anche un account di sistema Linux corrispondente.', answer: true, explanation: 'Gli utenti Samba necessitano di un account Linux corrispondente, ma non necessariamente di una password di login Linux.', difficulty: 3 },
  { text: 'Il comando `omshell` permette di modificare la configurazione del server DHCP ISC senza riavviarlo.', answer: true, explanation: 'omshell fornisce una shell per la gestione degli oggetti DHCP per query e modifiche a runtime.', difficulty: 3 },
  { text: '`Collectd` e `MRTG` servono allo stesso scopo ma `Collectd` può monitorare solo l\'utilizzo della CPU.', answer: false, explanation: 'Collectd monitora molte metriche di sistema (CPU, memoria, disco, rete, ecc.) tramite plugin, non solo la CPU.', difficulty: 3 },
  { text: 'La famiglia di bootloader `SYSLINUX` include ISOLINUX per CD/DVD e PXELINUX per boot da rete.', answer: true, explanation: 'Famiglia SYSLINUX: SYSLINUX (FAT), ISOLINUX (ISO9660), EXTLINUX (ext/btrfs), PXELINUX (rete/PXE).', difficulty: 3 },
]

// ─── FILL GAP GAME ───────────────────────────────────────
export const fillGapData = [
  // Difficulty 1
  { prompt: 'iostat -_____ 1', answer: 'xz', hint: 'statistiche estese solo per dischi attivi', difficulty: 1 },
  { prompt: '_____ | grep vfat', answer: 'lsmod', hint: 'elenca moduli kernel caricati', difficulty: 1 },
  { prompt: 'modprobe _____', answer: 'vfat', hint: 'carica un modulo filesystem', difficulty: 1 },
  { prompt: 'systemctl set-default _____', answer: 'multi-user.target', hint: 'avvio in modalità CLI', difficulty: 1 },
  { prompt: 'tune2fs -m 1 _____', answer: '/dev/sda1', hint: 'dispositivo per ridurre spazio riservato', difficulty: 1 },
  { prompt: 'mdadm --_____ /dev/md0', answer: 'detail', hint: 'mostra info array RAID', difficulty: 1 },
  { prompt: 'ip route add _____ via 192.168.1.1', answer: 'default', hint: 'aggiungi il gateway predefinito', difficulty: 1 },
  { prompt: 'rsync -avz /data/ _____:/backup/', answer: 'remote', hint: 'host di destinazione per la sincronizzazione', difficulty: 1 },
  { prompt: 'named-_____ /etc/named.conf', answer: 'checkconf', hint: 'valida sintassi config BIND', difficulty: 1 },
  { prompt: 'apachectl _____', answer: 'configtest', hint: 'testa config Apache per errori', difficulty: 1 },
  // Difficulty 2
  { prompt: 'make _____ && make modules && make modules_install', answer: 'bzImage', hint: 'compila l\'immagine del kernel compressa', difficulty: 2 },
  { prompt: 'update-_____ -u', answer: 'initramfs', hint: 'ricostruisci il disco RAM di avvio', difficulty: 2 },
  { prompt: 'xfs______ /mountpoint', answer: 'growfs', hint: 'espandi un filesystem XFS montato', difficulty: 2 },
  { prompt: 'udevadm _____ --property', answer: 'info', hint: 'interroga proprietà dispositivo udev', difficulty: 2 },
  { prompt: 'pvcreate /dev/sdb1 && vgcreate datavg /dev/sdb1 && _____ -L 5G -n datalv datavg', answer: 'lvcreate', hint: 'crea un volume logico', difficulty: 2 },
  { prompt: 'ss -_____', answer: 'tulpn', hint: 'porte TCP/UDP in ascolto con PID', difficulty: 2 },
  { prompt: 'smbpasswd -_____ mario', answer: 'a', hint: 'aggiungi un nuovo utente Samba', difficulty: 2 },
  { prompt: 'exportfs -_____', answer: 'ra', hint: 'ri-esporta tutte le condivisioni NFS', difficulty: 2 },
  { prompt: 'postconf -_____', answer: 'n', hint: 'mostra impostazioni Postfix non predefinite', difficulty: 2 },
  { prompt: 'iptables -_____ INPUT -p tcp --dport 22 -j ACCEPT', answer: 'A', hint: 'aggiungi una regola alla catena', difficulty: 2 },
  // Difficulty 3
  { prompt: 'patch -_____ < fix.patch', answer: 'p1', hint: 'rimuovi un livello di directory dai percorsi', difficulty: 3 },
  { prompt: 'mdadm --create /dev/md0 --level=_____ --raid-devices=3 /dev/sd[b-d]1', answer: '5', hint: 'livello RAID con parità distribuita', difficulty: 3 },
  { prompt: 'tcpdump -i eth0 -w _____.pcap', answer: 'capture', hint: 'file di output per pacchetti catturati', difficulty: 3 },
  { prompt: 'named-checkzone example.com _____', answer: 'db.example.com', hint: 'il file database di zona da verificare', difficulty: 3 },
  { prompt: 'nginx -_____ && nginx -s reload', answer: 't', hint: 'testa config prima di ricaricare', difficulty: 3 },
  { prompt: 'ldapsearch -x -b "dc=example,dc=com" "(uid=_____)"', answer: 'mario', hint: 'cerca un utente specifico', difficulty: 3 },
  { prompt: 'fail2ban-client status _____', answer: 'sshd', hint: 'controlla IP bannati per SSH', difficulty: 3 },
  { prompt: 'rndc _____', answer: 'reload', hint: 'ricarica zone DNS senza riavvio', difficulty: 3 },
]

// ─── DRAG & DROP GAME ────────────────────────────────────
export const dragDropData = [
  {
    id: 'dd-kernel-compile',
    category: 'Ordine Compilazione Kernel',
    question: 'Trascina i passaggi di compilazione del kernel nell\'ordine corretto:',
    items: [
      { text: 'make menuconfig', order: 1 },
      { text: 'make bzImage', order: 2 },
      { text: 'make modules', order: 3 },
      { text: 'make modules_install', order: 4 },
      { text: 'make install', order: 5 },
    ],
  },
  {
    id: 'dd-lvm-order',
    category: 'Ordine Creazione LVM',
    question: 'Metti questi comandi LVM nella sequenza corretta:',
    items: [
      { text: 'pvcreate /dev/sdb1', order: 1 },
      { text: 'vgcreate datavg /dev/sdb1', order: 2 },
      { text: 'lvcreate -L 5G -n datalv datavg', order: 3 },
      { text: 'mkfs.ext4 /dev/datavg/datalv', order: 4 },
      { text: 'mount /dev/datavg/datalv /data', order: 5 },
    ],
  },
  {
    id: 'dd-raid-levels',
    category: 'Livelli RAID',
    question: 'Abbina ogni livello RAID alla sua descrizione:',
    items: [
      { text: 'Striping senza parità (velocità, nessuna ridondanza)', matches: 'RAID 0' },
      { text: 'Mirroring (ridondanza dati completa)', matches: 'RAID 1' },
      { text: 'Striping con parità distribuita (min 3 dischi)', matches: 'RAID 5' },
      { text: 'Striping con doppia parità (min 4 dischi)', matches: 'RAID 6' },
    ],
  },
  {
    id: 'dd-dns-records',
    category: 'Tipi di Record DNS',
    question: 'Abbina il tipo di record DNS alla sua funzione:',
    items: [
      { text: 'Mappa hostname a indirizzo IPv4', matches: 'A' },
      { text: 'Mappa hostname a indirizzo IPv6', matches: 'AAAA' },
      { text: 'Punta a un server di posta', matches: 'MX' },
      { text: 'Crea un alias per un altro hostname', matches: 'CNAME' },
      { text: 'Lookup inverso (IP a hostname)', matches: 'PTR' },
    ],
  },
  {
    id: 'dd-boot-process',
    category: 'Sequenza di Avvio Linux',
    question: 'Ordina i passaggi di avvio Linux:',
    items: [
      { text: 'BIOS/UEFI POST', order: 1 },
      { text: 'Bootloader (GRUB2)', order: 2 },
      { text: 'Kernel si carica', order: 3 },
      { text: 'initramfs fornisce il root', order: 4 },
      { text: 'systemd (PID 1) si avvia', order: 5 },
    ],
  },
]

// ─── TERMINAL CHALLENGE ──────────────────────────────────
export const terminalChallengeData = [
  { id: 'tc-lpic2-1', description: 'Mostra statistiche CPU e I/O', prompt: 'iostat', expectedOutput: 'avg-cpu:', hint: 'Usa il comando iostat da sysstat', difficulty: 1 },
  { id: 'tc-lpic2-2', description: 'Elenca tutti i moduli kernel attualmente caricati', prompt: 'lsmod', expectedOutput: 'Module', hint: 'Usa lsmod', difficulty: 1 },
  { id: 'tc-lpic2-3', description: 'Mostra il target di avvio systemd predefinito', prompt: 'systemctl get-default', expectedOutput: 'multi-user.target', hint: 'Usa systemctl get-default', difficulty: 1 },
  { id: 'tc-lpic2-4', description: 'Controlla la sintassi della configurazione Apache', prompt: 'apachectl configtest', expectedOutput: 'Syntax OK', hint: 'Usa apachectl configtest', difficulty: 1 },
  { id: 'tc-lpic2-5', description: 'Testa la configurazione Nginx per errori', prompt: 'nginx -t', expectedOutput: 'syntax is ok', hint: 'Usa nginx -t', difficulty: 1 },
  { id: 'tc-lpic2-6', description: 'Mostra validità configurazione DNS BIND', prompt: 'named-checkconf', expectedOutput: '', hint: 'Nessun output significa configurazione valida', difficulty: 2 },
  { id: 'tc-lpic2-7', description: 'Visualizza le esportazioni NFS di questo server', prompt: 'exportfs -v', expectedOutput: '/data', hint: 'Usa exportfs -v', difficulty: 2 },
  { id: 'tc-lpic2-8', description: 'Mostra stato dettagliato dell\'array RAID', prompt: 'cat /proc/mdstat', expectedOutput: 'md0', hint: 'Leggi /proc/mdstat', difficulty: 2 },
  { id: 'tc-lpic2-9', description: 'Controlla configurazione Postfix non predefinita', prompt: 'postconf -n', expectedOutput: 'myhostname', hint: 'Usa postconf -n', difficulty: 2 },
  { id: 'tc-lpic2-10', description: 'Elenca tutte le regole firewall con contatori', prompt: 'iptables -L -n -v', expectedOutput: 'Chain INPUT', hint: 'Usa iptables -L -n -v', difficulty: 2 },
  { id: 'tc-lpic2-11', description: 'Mostra porte TCP/UDP in ascolto con nomi processi', prompt: 'ss -tulpn', expectedOutput: 'LISTEN', hint: 'Usa ss -tulpn', difficulty: 2 },
  { id: 'tc-lpic2-12', description: 'Mostra informazioni Volume Group LVM', prompt: 'vgs', expectedOutput: 'VG', hint: 'Usa vgs per il riepilogo', difficulty: 2 },
  { id: 'tc-lpic2-13', description: 'Verifica file di zona BIND per example.com', prompt: 'named-checkzone example.com /var/named/db.example.com', expectedOutput: 'OK', hint: 'Usa named-checkzone con dominio e file di zona', difficulty: 3 },
  { id: 'tc-lpic2-14', description: 'Rigenera dipendenze moduli kernel', prompt: 'depmod -a', expectedOutput: '', hint: 'Usa depmod -a', difficulty: 3 },
  { id: 'tc-lpic2-15', description: 'Cattura traffico HTTP su eth0 e salva su file', prompt: 'tcpdump -i eth0 port 80 -w capture.pcap', expectedOutput: 'listening on eth0', hint: 'Usa tcpdump con -i, filtro porta e -w', difficulty: 3 },
]
