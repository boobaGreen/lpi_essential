// LPIC-1 101 Extended Content — Italian
// Contenuto approfondito per ogni topic

export const lpic1_101_extendedContent_it = {
  1: {
    title: 'Architettura di Sistema — Approfondimento',
    content: `
## 🖥️ BIOS vs UEFI
Il **BIOS** (Basic Input/Output System) è il firmware tradizionale che inizializza l'hardware e avvia il bootloader dal MBR.
**UEFI** (Unified Extensible Firmware Interface) è il successore moderno: supporta dischi GPT >2TB, Secure Boot, interfaccia grafica e boot più veloce.

## 📁 Le Directory Virtuali del Kernel
- **/proc** — Filesystem virtuale con info su processi e kernel (cpuinfo, meminfo, partitions)
- **/sys** — sysfs, espone la gerarchia dispositivi/driver del kernel
- **/dev** — Device nodes, creati dinamicamente da udev

## 🔧 Moduli del Kernel
Il kernel Linux è modulare: i driver possono essere caricati/scaricati a runtime.
- \`lsmod\` — Lista moduli caricati
- \`modprobe modulo\` — Carica modulo con dipendenze
- \`modprobe -r modulo\` — Rimuove modulo
- \`modinfo modulo\` — Informazioni dettagliate
- Configurazione persistente: \`/etc/modules-load.d/\`

## ⚡ Processo di Boot
1. **Firmware** (BIOS/UEFI) → POST, inizializza hardware
2. **Bootloader** (GRUB2) → Carica kernel e initramfs
3. **Kernel** → Inizializza driver, monta initramfs
4. **init/systemd** (PID 1) → Avvia servizi secondo i target

## 🎯 Target systemd vs Runlevel SysVinit
| Runlevel | Target systemd | Descrizione |
|---|---|---|
| 0 | poweroff.target | Spegnimento |
| 1 | rescue.target | Single user (manutenzione) |
| 3 | multi-user.target | Multi-utente testo |
| 5 | graphical.target | Multi-utente GUI |
| 6 | reboot.target | Riavvio |
    `,
  },
  2: {
    title: 'Installazione e Gestione Pacchetti — Approfondimento',
    content: `
## 💾 Layout Disco
Una buona partizione include: \`/\` (root), \`/boot\` (250-512MB), \`/home\` (dati utente), \`swap\` (1-2x RAM).
**MBR** max 4 partizioni primarie e 2TB. **GPT** fino a 128 partizioni e 8ZiB.

## 📦 Gestione Pacchetti — Due Famiglie
### Debian/Ubuntu (dpkg/apt)
- \`dpkg -i file.deb\` — Installa locale (senza dipendenze)
- \`apt install pkgname\` — Installa da repository (con dipendenze)
- \`apt update && apt upgrade\` — Aggiorna sistema
- \`dpkg -S /path/file\` — Trova pacchetto proprietario

### RHEL/Fedora (rpm/dnf)
- \`rpm -i file.rpm\` — Installa locale
- \`dnf install pkgname\` — Installa da repo
- \`rpm -qa\` — Lista tutti i pacchetti installati
- \`rpm -qf /path/file\` — Trova pacchetto proprietario

## 🔗 Librerie Condivise
Le librerie \`.so\` (shared objects) sono caricate a runtime e condivise tra processi.
- \`ldd /usr/bin/ls\` — Mostra dipendenze
- \`ldconfig\` — Aggiorna cache \`/etc/ld.so.cache\`
- \`LD_LIBRARY_PATH\` — Directory aggiuntive per le librerie

## ☁️ Virtualizzazione e Cloud
- **Tipo 1** (bare-metal): KVM, Xen, ESXi — direttamente sull'hardware
- **Tipo 2** (hosted): VirtualBox, VMware Workstation — sopra un OS host
- **Container**: Docker, Podman — condividono il kernel dell'host
- **Cloud**: IaaS (VM on demand), PaaS (piattaforma di sviluppo), SaaS (app pronte)
    `,
  },
  3: {
    title: 'Comandi GNU e Unix — Approfondimento',
    content: `
## ⌨️ La Shell Bash
Bash è la shell standard Linux. Comandi essenziali da padroneggiare:
- **Variabili**: \`VAR=valore\`, \`export VAR\`, \`$VAR\`, \`\${VAR}\`
- **Quoting**: \`'letterale'\`, \`"espande $VAR"\`, \`\\escape\`
- **History**: freccia su, \`Ctrl+R\`, \`!n\`, \`history\`
- **Globbing**: \`*\` (tutto), \`?\` (un carattere), \`[abc]\` (set)

## 📝 Filtri di Testo — Pipeline Power
\`\`\`bash
# Conta i file .conf in /etc
find /etc -name "*.conf" | wc -l

# Top 10 directory più grandi
du -sh /* 2>/dev/null | sort -rh | head -10

# Utenti con shell bash
grep "/bin/bash$" /etc/passwd | cut -d: -f1 | sort
\`\`\`

## 🔀 Redirect e Pipe
| Operatore | Significato |
|---|---|
| \`>\` | stdout → file (sovrascrive) |
| \`>>\` | stdout → file (append) |
| \`2>\` | stderr → file |
| \`&>\` | stdout + stderr → file |
| \`<\` | file → stdin |
| \`|\` | stdout → stdin del prossimo |
| \`tee\` | stdout → file + terminale |

## ⚙️ Gestione Processi
- **Segnali critici**: SIGTERM (15, terminazione pulita), SIGKILL (9, forzata), SIGINT (2, Ctrl+C)
- **Job control**: \`&\` (background), \`Ctrl+Z\` (sospendi), \`fg\` (foreground), \`bg\` (background)
- **nice/renice**: -20 (max priorità) a +19 (min priorità)

## 🔍 Regular Expressions
| Simbolo | BRE | ERE | Significato |
|---|---|---|---|
| \`.\` | ✓ | ✓ | Qualsiasi carattere |
| \`*\` | ✓ | ✓ | Zero o più |
| \`+\` | \\+ | ✓ | Uno o più |
| \`?\` | \\? | ✓ | Zero o uno |
| \`^\` | ✓ | ✓ | Inizio riga |
| \`$\` | ✓ | ✓ | Fine riga |
    `,
  },
  4: {
    title: 'Dispositivi, Filesystem e FHS — Approfondimento',
    content: `
## 💿 Partizioni e Filesystem
- **fdisk**: partizionamento interattivo (MBR, ora anche GPT)
- **gdisk**: specifico per GPT
- **parted**: supporta sia MBR che GPT, applica modifiche immediatamente
- **mkfs.ext4**, **mkfs.xfs**: creano il filesystem

## 🔧 Integrità e Manutenzione
- **fsck**: verifica e ripara (filesystem smontato!)
- **df -h**: spazio disco dei filesystem montati
- **du -sh /dir**: spazio usato da una directory
- **tune2fs**: modifica parametri ext2/3/4
- **xfs_repair**: riparazione XFS

## 📂 Montaggio Filesystem
\`/etc/fstab\` ha 6 campi: device, mountpoint, type, options, dump, pass.
\`\`\`
UUID=xxxx  /home  ext4  defaults  0  2
\`\`\`

## 🔐 Permessi Speciali
| Bit | Ottale | Su File | Su Directory |
|---|---|---|---|
| SUID | 4000 | Esegue come proprietario | — |
| SGID | 2000 | Esegue come gruppo | Nuovi file ereditano il gruppo |
| Sticky | 1000 | — | Solo proprietario può cancellare |

## 🗂️ FHS (Filesystem Hierarchy Standard)
| Directory | Contenuto |
|---|---|
| / | Root del filesystem |
| /bin, /sbin | Comandi essenziali |
| /etc | Configurazione |
| /home | Home utenti |
| /var | Dati variabili (log, spool) |
| /tmp | File temporanei |
| /usr | Programmi e librerie utente |
| /opt | Software opzionale |
| /srv | Dati servizi |
| /proc, /sys | Filesystem virtuali kernel |
    `,
  },
}
