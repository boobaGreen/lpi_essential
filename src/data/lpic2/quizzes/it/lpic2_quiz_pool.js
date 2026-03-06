export const lpic2_quiz_pool = [
  {
    id: 'lpic2-1',
    topicId: 1,
    question: 'Quale comando fornisce una vista dinamica e in tempo reale del sistema e dei processi in esecuzione, evidenziando le risorse di CPU e memoria?',
    options: ['free', 'top', 'uptime', 'vmstat'],
    answer: 1,
    explanation: 'Il comando `top` è classicamente usato per visualizzare un ranking in tempo reale dei processi e del carico del sistema.'
  },
  {
    id: 'lpic2-2',
    topicId: 1,
    question: 'Quale dei seguenti comandi utilizzeresti per visualizzare statistiche di I/O dettagliate per i dispositivi a blocchi?',
    options: ['vmstat', 'iostat', 'netstat', 'mpstat'],
    answer: 1,
    explanation: 'Il comando `iostat` (fornito dal pacchetto sysstat) specializza il monitoraggio sui caricamenti input/output dei dischi.'
  },
  {
    id: 'lpic2-3',
    topicId: 1,
    question: 'Vuoi collezionare e visualizzare l\'andamento delle performance del server nell\'arco di diversi mesi. Quale set di tool è il più adatto?',
    options: ['top', 'ss', 'Collectd/MRTG/Cacti', 'tcpdump'],
    answer: 2,
    explanation: 'Questi strumenti sono progettati specificamente per raccogliere dati nel tempo e generare grafici (Spesso con RRDtool) utili nel capacity planning.'
  },
  {
    id: 'lpic2-4',
    topicId: 2,
    question: 'Dove risiedono di default i moduli del kernel compilati all\'interno del filesystem?',
    options: ['/boot/modules/', '/lib/modules/$(uname -r)/', '/etc/kernel/', '/var/lib/modules/'],
    answer: 1,
    explanation: 'I moduli del kernel sono sempre archiviati sotto `/lib/modules/` all\'interno di una direcotry con lo stesso nome della release del kernel.'
  },
  {
    id: 'lpic2-5',
    topicId: 2,
    question: 'Quale target di make viene utilizzato per generare l\'immagine compressa del kernel nei kernel moderni?',
    options: ['make zImage', 'make bzImage', 'make vmlinux', 'make install'],
    answer: 1,
    explanation: '`make bzImage` (big zImage) è il comando standard che supera i vecchi limiti di memoria visti con zImage.'
  },
  {
    id: 'lpic2-6',
    topicId: 2,
    question: 'Durante la configurazione del kernel da sorgente, quale comando fornisce una interfaccia a menu testuale basata su ncurses?',
    options: ['make config', 'make menuconfig', 'make xconfig', 'make defconfig'],
    answer: 1,
    explanation: '`make menuconfig` offre un utile menu scorrevole all\'interno del terminale, molto più rapido rispetto alla serie di domande sequenziali di make config.'
  },
  {
    id: 'lpic2-7',
    topicId: 3,
    question: 'In un sistema basato tradizionalmente su SysVinit, quale file stabilisce il runlevel predefinito all\'avvio?',
    options: ['/etc/inittab', '/etc/runlevel', '/boot/grub/grub.cfg', '/etc/init.d/rcS'],
    answer: 0,
    explanation: 'La riga `id:3:initdefault:` nel file `/etc/inittab` definisce in che runlevel posizionarsi al boot.'
  },
  {
    id: 'lpic2-8',
    topicId: 4,
    question: 'Quale tipologia di filesystem fa un grande affidamento sugli extents ed è diventato il default nelle distribuzioni moderne basate su RHEL?',
    options: ['ext4', 'xfs', 'btrfs', 'zfs'],
    answer: 1,
    explanation: 'XFS è un filesystem journaled a 64 bit famoso per l\'incredibile scalabilità ed è stato promosso come default in CentOS/RHEL dal ramo 7.'
  },
  {
    id: 'lpic2-9',
    topicId: 5,
    question: 'Quale comando è principe nella gestione e creazione degli array Software RAID in Linux?',
    options: ['lvm', 'fdisk', 'mdadm', 'parted'],
    answer: 2,
    explanation: '`mdadm` sta per Multiple Device Administrator e rimpiazza in toto i vecchi raidtools per operare con dischi logici /dev/mdX.'
  },
  {
    id: 'lpic2-10',
    topicId: 6,
    question: 'Quale combinazione di comandi permete di visualizzare la cache ARP (tabella dei vicini di rete) tramite la suite moderna iproute2?',
    options: ['arp -n', 'ip neigh show', 'netstat -rn', 'route -n'],
    answer: 1,
    explanation: 'Sebbene `arp` funzioni ancora, il comando corretto e standard in iproute2 è `ip neigh(bor) show`.'
  }
]
