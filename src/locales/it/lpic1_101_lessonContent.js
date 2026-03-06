// LPIC-1 101 Lesson Content — Italian
// Contenuto lezioni per tutte le 28 lezioni

export const lpic1_101_lessonContent = {
  // ──── Topic 1: Architettura di Sistema ────
  'lpic1-101-1-1': {
    title: 'Hardware e Periferiche',
    content: `
# 🖥️ Hardware e Periferiche Linux

## Obiettivo 101.1 — Determinare e Configurare le Impostazioni dell'Hardware

### BIOS vs UEFI
Il **BIOS** (Basic Input/Output System) è il firmware legacy che inizializza l'hardware. **UEFI** (Unified Extensible Firmware Interface) è il suo successore moderno con supporto GPT, Secure Boot e interfaccia grafica.

### Le Directory Virtuali del Kernel

#### /proc — Process Filesystem
Filesystem virtuale che espone informazioni dal kernel:
- \`/proc/cpuinfo\` — Informazioni sulla CPU
- \`/proc/meminfo\` — Informazioni sulla memoria
- \`/proc/partitions\` — Partizioni rilevate
- \`/proc/modules\` — Moduli del kernel caricati
- \`/proc/cmdline\` — Parametri di boot del kernel
- \`/proc/interrupts\` — IRQ in uso

#### /sys — Sysfs
Espone la gerarchia dei dispositivi e driver del kernel. Permette la configurazione diretta di parametri hardware.

#### /dev — Device Files
Contiene i file dispositivo creati da **udev**:
- \`/dev/sda\` — Primo disco SCSI/SATA/USB
- \`/dev/tty\` — Terminale
- \`/dev/null\` — "Black hole" per scartare dati

### Comandi Essenziali
| Comando | Descrizione |
|---|---|
| \`lspci\` | Elenca tutti i dispositivi PCI |
| \`lsusb\` | Elenca tutti i dispositivi USB |
| \`lsmod\` | Mostra i moduli caricati |
| \`modprobe modulo\` | Carica un modulo con dipendenze |
| \`modprobe -r modulo\` | Rimuove un modulo |
| \`modinfo modulo\` | Informazioni sul modulo |
| \`lsblk\` | Elenca dispositivi a blocchi |

### Gestione Moduli del Kernel
Il kernel Linux è modulare. I driver possono essere caricati/scaricati senza riavviare.
- Configurazione permanente: \`/etc/modules-load.d/\`
- Opzioni modulo: \`/etc/modprobe.d/\`
    `,
  },
  'lpic1-101-1-2': {
    title: 'Processo di Boot',
    content: `
# ⚡ Processo di Boot Linux

## Obiettivo 101.2 — Avviare il Sistema

### Le 4 Fasi del Boot
1. **Firmware (BIOS/UEFI)** — POST (Power-On Self-Test), inizializza hardware, cerca bootloader
2. **Bootloader (GRUB2)** — Presenta menu, carica kernel e initramfs in memoria
3. **Kernel** — Decomprime, inizializza driver, monta initramfs, avvia init
4. **init/systemd (PID 1)** — Avvia servizi, raggiunge il target predefinito

### GRUB2 — GRand Unified Bootloader
Il bootloader standard. Configurazione:
- \`/boot/grub/grub.cfg\` — File generato (non modificare direttamente)
- \`/etc/default/grub\` — Impostazioni personalizzabili
- \`/etc/grub.d/\` — Script per generare il menu

### initramfs
Archivio temporaneo caricato in RAM con driver e script per montare il vero root filesystem.
- Rigenerazione: \`update-initramfs -u\` (Debian) o \`dracut\` (RHEL)

### MBR vs GPT
| Caratteristica | MBR | GPT |
|---|---|---|
| Max partizioni | 4 primarie | 128 |
| Max dimensione | 2 TB | 8 ZiB |
| Tabella backup | No | Sì |
| Boot mode | BIOS | UEFI |

### Log del Boot
- \`dmesg\` — Ring buffer del kernel
- \`journalctl -b\` — Log del boot corrente (systemd)
    `,
  },
  'lpic1-101-1-3': {
    title: 'Runlevel e Target systemd',
    content: `
# 🎯 Runlevel e Target systemd

## Obiettivo 101.3 — Modificare i Runlevel / Target di Avvio

### Runlevel SysVinit vs Target systemd
| Runlevel | Target | Descrizione |
|---|---|---|
| 0 | poweroff.target | Spegnimento |
| 1 | rescue.target | Single user (manutenzione) |
| 2 | multi-user.target | Multi-utente (Debian) |
| 3 | multi-user.target | Multi-utente testo |
| 5 | graphical.target | Multi-utente GUI |
| 6 | reboot.target | Riavvio |

### Comandi Target systemd
| Comando | Azione |
|---|---|
| \`systemctl get-default\` | Mostra il target predefinito |
| \`systemctl set-default multi-user.target\` | Imposta il default |
| \`systemctl isolate rescue.target\` | Cambia target al volo |

### Spegnimento e Riavvio
- \`shutdown -h now\` — Spegne immediatamente
- \`shutdown -r now\` oppure \`reboot\` — Riavvia
- \`shutdown -r +10 "messaggio"\` — Riavvio tra 10 min
- \`shutdown -c\` — Annulla shutdown programmato
- \`poweroff\` — Spegne
- \`wall "messaggio"\` — Invia messaggio a tutti gli utenti

### emergency.target vs rescue.target
- **emergency**: solo / in read-only, nessun servizio, shell minima
- **rescue**: servizi base attivi, filesystem montati, più funzionalità
    `,
  },

  // ──── Topic 2: Installazione e Gestione Pacchetti ────
  'lpic1-102-1-1': {
    title: 'Layout del Disco Rigido',
    content: `
# 💾 Layout del Disco Rigido

## Obiettivo 102.1 — Progettare il Layout del Disco

### Partizioni Essenziali
- **/** (root) — Filesystem principale, contiene tutto
- **/boot** (250-512 MB) — Kernel, initramfs, GRUB
- **/home** — Dati degli utenti (consigliata separata)
- **swap** — Memoria virtuale (1-2x RAM)
- **/var** — Log, spool, database (opzionale separata)

### LVM — Logical Volume Manager
LVM permette di gestire storage flessibilmente: ridimensionare partizioni, creare snapshot.
- **PV** (Physical Volume) → **VG** (Volume Group) → **LV** (Logical Volume)

### Regole Pratiche
- Separare /home: reinstallazione OS senza perdita dati
- Separare /var: i log non riempiono /
- swap ≥ RAM se serve ibernazione
- ESP per UEFI: 100-500 MB FAT32 su /boot/efi
    `,
  },
  'lpic1-102-1-2': { title: 'Boot Manager (GRUB2)', content: `# 🔧 GRUB2\n\n## Obiettivo 102.2\n\nGRUB2 è il bootloader standard. Comandi chiave:\n- \`grub-install /dev/sda\` — Installa GRUB nel MBR/ESP\n- \`grub-mkconfig -o /boot/grub/grub.cfg\` — Rigenera config\n- \`update-grub\` — Wrapper Debian\n\nConfigurazione: /etc/default/grub (GRUB_TIMEOUT, GRUB_CMDLINE_LINUX)\n\nScript in /etc/grub.d/ generano le voci del menu.` },
  'lpic1-102-1-3': { title: 'Librerie Condivise', content: `# 🔗 Librerie Condivise\n\n## Obiettivo 102.3\n\nFile .so caricati a runtime e condivisi tra processi.\n\n- \`ldd /usr/bin/ls\` — Mostra dipendenze\n- \`ldconfig\` — Aggiorna cache /etc/ld.so.cache\n- \`LD_LIBRARY_PATH\` — Directory aggiuntive\n- /etc/ld.so.conf — Configurazione directory` },
  'lpic1-102-1-4': { title: 'Pacchetti Debian (dpkg/apt)', content: `# 📦 Gestione Pacchetti Debian\n\n## Obiettivo 102.4\n\n| Comando | Peso | Azione |\n|---|---|---|\n| dpkg -i pkg.deb | basso | Installa locale |\n| dpkg -S /path | basso | Trova pacchetto proprietario |\n| apt update | alto | Aggiorna lista pacchetti |\n| apt install pkg | alto | Installa con dipendenze |\n| apt purge pkg | alto | Rimuove con config |\n\nRepo: /etc/apt/sources.list` },
  'lpic1-102-1-5': { title: 'Pacchetti RPM e YUM/DNF', content: `# 📦 Gestione Pacchetti RPM\n\n## Obiettivo 102.5\n\n| Comando | Azione |\n|---|---|\n| rpm -i pkg.rpm | Installa locale |\n| rpm -qa | Lista tutti i pacchetti |\n| rpm -qf /file | Trova pacchetto |\n| dnf install pkg | Installa da repo |\n| dnf provides */file | Trova chi fornisce |\n| zypper install pkg | SUSE |\n\nRepo: /etc/yum.repos.d/` },
  'lpic1-102-1-6': { title: 'Virtualizzazione Linux', content: `# ☁️ Virtualizzazione\n\n## Obiettivo 102.6\n\n- **Tipo 1** (bare-metal): KVM, Xen, ESXi\n- **Tipo 2** (hosted): VirtualBox, VMware Workstation\n- **Container**: Docker, Podman — condividono kernel host\n- **Cloud**: IaaS (VM), PaaS (piattaforma), SaaS (app pronte)` },

  // ──── Topic 3: Comandi GNU e Unix ────
  'lpic1-103-1-1': { title: 'Command Line — Base', content: `# ⌨️ Linea di Comando — Base\n\n## Obiettivo 103.1\n\nBash è la shell standard. Comandi essenziali:\n- \`type cmd\` — builtin, alias o file?\n- \`which cmd\` — percorso dell'eseguibile\n- \`echo $PATH\` — directory di ricerca\n- \`uname -a\` — info sistema\n- Tab per autocompletamento` },
  'lpic1-103-1-2': { title: 'Command Line — Variabili', content: `# ⌨️ Variabili e Quoting\n\n## Obiettivo 103.1 (cont.)\n\n- VAR=valore → variabile locale\n- export VAR → disponibile ai processi figli\n- env / printenv → lista variabili d'ambiente\n- 'singoli' → nessuna espansione\n- "doppi" → espande $VAR\n- history, !n, Ctrl+R → storico comandi` },
  'lpic1-103-2-1': { title: 'Filtri di Testo', content: `# 📝 Filtri di Testo\n\n## Obiettivo 103.2\n\n| Filtro | Uso |\n|---|---|\n| cat | Mostra/concatena |\n| head/tail | Prime/ultime righe |\n| sort | Ordina righe |\n| uniq | Duplicati consecutivi |\n| wc | Conta righe/parole |\n| cut -d: -f1 | Estrae campi |\n| tr a-z A-Z | Traduce caratteri |\n| sed 's/a/b/g' | Sostituisce |\n| split | Divide in pezzi |` },
  'lpic1-103-3-1': { title: 'Gestione File — Base', content: `# 📁 Gestione File — Base\n\n## Obiettivo 103.3\n\n- ls -la → lista dettagliata con nascosti\n- cp -r dir/ dest/ → copia directory\n- mv old new → sposta/rinomina\n- rm -r dir/ → cancella ricorsivamente\n- mkdir -p a/b/c → crea con parent\n- touch file → crea vuoto / aggiorna timestamp\n- file myfile → identifica tipo` },
  'lpic1-103-3-2': { title: 'Gestione File — Avanzata', content: `# 📁 Gestione File — Avanzata\n\n## Obiettivo 103.3 (cont.)\n\n- Globbing: * (tutto), ? (un char), [abc] (set)\n- find /etc -name "*.conf" → cerca file\n- locate filename → cerca via database\n- updatedb → aggiorna database locate\n- tar -cvf arch.tar dir/ → crea archivio\n- tar -xvf arch.tar → estrae\n- tar -czvf arch.tar.gz dir/ → con gzip` },
  'lpic1-103-4-1': { title: 'Redirect e Pipe — Base', content: `# 🔀 Redirect — Base\n\n## Obiettivo 103.4\n\n| Operatore | Significato |\n|---|---|\n| > | stdout → file (sovrascrive) |\n| >> | stdout → file (append) |\n| < | file → stdin |\n| 2> | stderr → file |\n| &> | stdout+stderr → file |\n| 2>&1 | stderr dove va stdout |` },
  'lpic1-103-4-2': { title: 'Redirect e Pipe — Avanzati', content: `# 🔀 Pipe e Avanzati\n\n## Obiettivo 103.4 (cont.)\n\n- | → pipe: stdout → stdin\n- tee file → scrive su file E stdout\n- xargs → costruisce comandi da stdin\n- Here document: <<EOF ... EOF` },
  'lpic1-103-5-1': { title: 'Processi — Base', content: `# ⚙️ Processi — Base\n\n## Obiettivo 103.5\n\n- ps aux → tutti i processi\n- top / htop → monitor real-time\n- kill PID → SIGTERM (15)\n- kill -9 PID → SIGKILL\n- killall nome → per nome\n- Ctrl+C → SIGINT (2)` },
  'lpic1-103-5-2': { title: 'Processi — Job Control', content: `# ⚙️ Job Control\n\n## Obiettivo 103.5 (cont.)\n\n- comando & → background\n- Ctrl+Z → sospendi (SIGTSTP)\n- jobs → lista job\n- fg %N → foreground\n- bg %N → background\n- nohup cmd & → immune a SIGHUP\n- screen / tmux → sessioni persistenti` },
  'lpic1-103-6-1': { title: 'Priorità dei Processi', content: `# 📊 Priorità Processi\n\n## Obiettivo 103.6\n\nNice value: -20 (max priorità) a +19 (min)\n\n- nice -n 10 cmd → avvia con bassa priorità\n- renice -n -5 -p PID → cambia priorità\n- Solo root può impostare valori negativi\n- In top: colonna NI = nice value` },
  'lpic1-103-7-1': { title: 'Regex — Base', content: `# 🔍 Regular Expressions — Base\n\n## Obiettivo 103.7\n\n- grep pattern file → cerca pattern\n- . → qualsiasi carattere\n- * → zero o più del precedente\n- ^ → inizio riga\n- $ → fine riga\n- [a-z] → range di caratteri\n- grep -n → mostra numeri riga\n- grep -i → case-insensitive\n- grep -v → righe NON corrispondenti` },
  'lpic1-103-7-2': { title: 'Regex — Estese', content: `# 🔍 Regex Estese (ERE)\n\n## Obiettivo 103.7 (cont.)\n\n- grep -E o egrep\n- + → uno o più\n- ? → zero o uno\n- | → alternanza (OR)\n- () → raggruppamento\n- {n,m} → ripetizioni\n\nEsempio: grep -E "error|warning" /var/log/syslog` },
  'lpic1-103-8-1': { title: 'Editor vi/vim', content: `# ✏️ vi/vim\n\n## Obiettivo 103.8\n\nModalità: Normal → Insert (i) → Normal (Esc)\n\n| Comando | Azione |\n|---|---|\n| i | Insert mode |\n| Esc | Normal mode |\n| :wq | Salva e esci |\n| :q! | Esci senza salvare |\n| dd | Cancella riga |\n| yy | Copia riga |\n| p | Incolla |\n| u | Undo |\n| /pattern | Cerca avanti |\n| :s/old/new/g | Sostituisci |` },

  // ──── Topic 4: Dispositivi, Filesystem e FHS ────
  'lpic1-104-1-1': { title: 'Partizioni e Filesystem', content: `# 💿 Partizioni e Filesystem\n\n## Obiettivo 104.1\n\n- fdisk → partizionamento interattivo\n- gdisk → specifico GPT\n- parted → MBR+GPT, applica subito\n- mkfs.ext4 /dev/sda1 → formatta\n- mkfs.xfs /dev/sda1 → XFS\n- mkswap /dev/sda2 → crea swap\n- blkid → mostra UUID` },
  'lpic1-104-2-1': { title: 'Integrità dei Filesystem', content: `# 🔧 Integrità Filesystem\n\n## Obiettivo 104.2\n\n- fsck /dev/sda1 → verifica (smontato!)\n- e2fsck → specifico ext\n- xfs_repair → specifico XFS\n- df -h → spazio filesystem\n- du -sh /dir → spazio directory\n- tune2fs → modifica parametri ext\n- dumpe2fs → dump dettagli ext` },
  'lpic1-104-3-1': { title: 'Montaggio e Smontaggio', content: `# 📂 Montaggio Filesystem\n\n## Obiettivo 104.3\n\n- mount /dev/sda1 /mnt → monta\n- umount /mnt → smonta\n- mount -a → monta tutto da fstab\n- /etc/fstab → montaggio automatico\n\nFormato fstab:\nUUID=xxx  /home  ext4  defaults  0  2\n\nOpzioni: rw, ro, noexec, nosuid, nodev\nswap: swapon /dev/sda2, swapoff` },
  'lpic1-104-5-1': { title: 'Permessi e Proprietà', content: `# 🔐 Permessi Linux\n\n## Obiettivo 104.5\n\n### Permessi Base\nrwx = read(4) write(2) execute(1)\n- chmod 755 file → rwxr-xr-x\n- chmod u+x file → aggiunge execute al proprietario\n- chown user:group file → cambia proprietario\n\n### Permessi Speciali\n| Bit | Ottale | File | Directory |\n|---|---|---|---|\n| SUID | 4000 | Esegue come owner | — |\n| SGID | 2000 | Esegue come group | Eredita group |\n| Sticky | 1000 | — | Solo owner cancella |\n\n### umask\numask 022 → file 644, dir 755` },
  'lpic1-104-6-1': { title: 'Hard e Soft Link', content: `# 🔗 Link\n\n## Obiettivo 104.6\n\n### Hard Link\n- ln file hardlink → stesso inode\n- Non cross-filesystem, no directory\n- File valido finché almeno 1 link esiste\n\n### Symbolic Link\n- ln -s file symlink → punta al percorso\n- Cross-filesystem, anche directory\n- Broken se il target viene cancellato\n\n- ls -i → mostra inode\n- stat file → info dettagliate` },
  'lpic1-104-7-1': { title: 'FHS e Posizione File', content: `# 🗂️ FHS — Filesystem Hierarchy Standard\n\n## Obiettivo 104.7\n\n| Dir | Contenuto |\n|---|---|\n| / | Root |\n| /bin | Comandi essenziali |\n| /sbin | Comandi di sistema |\n| /etc | Configurazione |\n| /home | Home utenti |\n| /root | Home di root |\n| /var | Dati variabili (log) |\n| /tmp | File temporanei |\n| /usr | Programmi/librerie |\n| /opt | Software opzionale |\n| /srv | Dati servizi |\n| /proc /sys | FS virtuali kernel |\n\nCerca file:\n- find, locate, updatedb\n- whereis, which, type` },
}
