# 🔬 Ricerca — Esame LPIC-1 101-500

## Panoramica ufficiale

| Attributo          | Valore                                              |
| ------------------ | --------------------------------------------------- |
| **Nome**           | LPIC-1 Exam 101                                     |
| **Codice esame**   | 101-500                                             |
| **Versione**       | 5.0                                                 |
| **Durata**         | 90 minuti                                           |
| **Domande**        | 60 (MCQ + fill-in-the-blank)                        |
| **Punteggio**      | 500/800 per superare                                |
| **Formato**        | Multiple-choice + fill-the-blank                    |
| **Lingua**         | Disponibile in più lingue                           |
| **Prerequisiti**   | Nessuno formale (LPI Linux Essentials raccomandato) |
| **Certificazione** | LPIC-1 (richiede anche 102-500)                     |

## Fonte ufficiale contenuti

- 🔗 [LPI Learning Materials 101-500](https://learning.lpi.org/it/learning-materials/101-500/)
- 🔗 [PDF Versione Italiana](https://learning.lpi.org/pdfstore/LPI-Learning-Material-101-500-it.pdf)
- 🔗 [LPI Exam 101 Objectives](https://www.lpi.org/our-certifications/exam-101-objectives/)

---

## I 4 Topic Ufficiali (101-500 v5.0)

### Topic 101 — System Architecture (Architettura di Sistema)

**Peso:** 8 + 3 + 3 = 14

#### 101.1 Determinare e Configurare le Impostazioni dell'Hardware (peso 2)

- Abilitare/disabilitare periferiche integrate (BIOS/UEFI)
- Differenze BIOS vs UEFI
- `/proc`, `/sys`, `/dev`, `udev`
- `lsmod`, `modprobe`, `lspci`, `lsusb`
- Lezione 1: Hardware settings, BIOS/UEFI, /proc, /sys, udev, modprobe

#### 101.2 Avviare il Sistema (peso 3)

- Processo di boot: BIOS → bootloader → kernel → init/systemd
- `dmesg`, GRUB2, initramfs
- Lezione 1: Boot sequence, BIOS/UEFI, GRUB2, kernel loading, initramfs

#### 101.3 Modificare Runlevel / Target di Avvio e Spegnere o Riavviare (peso 3)

- SysVinit runlevels vs systemd targets
- `runlevel`, `systemctl`, `shutdown`, `poweroff`, `reboot`, `wall`
- `telinit`, `/etc/inittab` (legacy)
- Lezione 1: Runlevels, systemd targets, shutdown, reboot

---

### Topic 102 — Linux Installation and Package Management (Installazione e Gestione Pacchetti)

**Peso:** 2 + 2 + 1 + 3 + 3 + 1 = 12

#### 102.1 Progettare il Layout del Disco Rigido (peso 2)

- Partizioni, punti di mount, `/`, `/boot`, `/home`, `/var`, swap
- LVM basics, EFI System Partition
- Lezione 1: Partition layout, mount points, swap, LVM basics

#### 102.2 Installare un Boot Manager (peso 2)

- GRUB2 Legacy e GRUB2
- Configurazione: `/boot/grub/grub.cfg`, `/etc/default/grub`
- `grub-install`, `grub-mkconfig`, `update-grub`
- Lezione 1: GRUB2, boot configuration, grub-install, grub-mkconfig

#### 102.3 Gestire le Librerie Condivise (peso 1)

- Shared libraries, `ldd`, `ldconfig`
- `LD_LIBRARY_PATH`, `/etc/ld.so.conf`
- Lezione 1: Shared libraries, ldd, ldconfig, LD_LIBRARY_PATH

#### 102.4 Utilizzare la Gestione dei Pacchetti Debian (peso 3)

- `dpkg`, `apt-get`, `apt-cache`, `apt`
- `/etc/apt/sources.list`, repository
- Lezione 1: dpkg, apt, apt-get, apt-cache, repository management

#### 102.5 Utilizzare la Gestione dei Pacchetti RPM e YUM (peso 3)

- `rpm`, `yum`, `dnf`, `zypper`
- Repository, GPG key
- Lezione 1: rpm, yum, dnf, zypper, package management

#### 102.6 Linux come Sistema Virtualizzato (peso 1)

- Concetti di virtualizzazione, hypervisor, container
- Macchine virtuali vs container
- Cloud computing basics (IaaS, PaaS, SaaS)
- Lezione 1: Virtualization concepts, VMs vs containers, cloud computing

---

### Topic 103 — GNU and Unix Commands (Comandi GNU e Unix)

**Peso:** 4 + 2 + 4 + 4 + 4 + 2 + 3 + 3 = 26

#### 103.1 Lavorare con la Command Line (peso 4)

- Shell, Bash, prompt, comandi interni/esterni
- Variabili, quoting, history, alias
- `type`, `which`, `echo`, `uname`
- Lezione 1: Shell basics, commands, PATH, type, which
- Lezione 2: Variables, quoting, history, alias, globbing

#### 103.2 Elaborare Flussi di Testo (peso 2)

- `cat`, `head`, `tail`, `sort`, `uniq`, `wc`, `cut`, `paste`
- `tr`, `sed`, `nl`, `fmt`, `pr`, `split`, `od`
- Lezione 1: Text processing filters, cat, head, tail, sort, cut, sed, tr

#### 103.3 Eseguire la Gestione di Base dei File (peso 4)

- `ls`, `cp`, `mv`, `rm`, `mkdir`, `rmdir`, `touch`, `file`
- Globbing, ricerca file con `find`, `locate`, `whereis`
- Archivi: `tar`, `cpio`, `dd`
- Lezione 1: File management, ls, cp, mv, rm, mkdir, touch, file
- Lezione 2: Globbing, find, locate, whereis, tar, cpio

#### 103.4 Utilizzare Flussi, Pipe e Reindirizzamenti (peso 4)

- stdin, stdout, stderr, pipe, redirection
- `>`, `>>`, `<`, `2>`, `&>`, `|`, `tee`, `xargs`
- Here documents
- Lezione 1: Redirection basics, >, >>, 2>, &>
- Lezione 2: Pipes, tee, xargs, here documents

#### 103.5 Creare, Controllare e Terminare i Processi (peso 4)

- `ps`, `top`, `kill`, `killall`, `jobs`, `bg`, `fg`
- `nohup`, `screen`, `tmux`, segnali
- Lezione 1: Process basics, ps, top, kill, signals
- Lezione 2: Job control, bg, fg, nohup, screen, tmux

#### 103.6 Modificare le Priorità di Esecuzione del Processo (peso 2)

- `nice`, `renice`, priority
- Lezione 1: nice, renice, process priorities

#### 103.7 Cercare File di Testo con Espressioni Regolari (peso 3)

- `grep`, `egrep`, `fgrep`
- Regular expressions: `.`, `*`, `+`, `?`, `^`, `$`, `[]`, `()`, `|`
- Lezione 1: grep basics, basic regex
- Lezione 2: Extended regex, egrep, advanced patterns

#### 103.8 Modifica Base di un File (peso 3)

- `vi`/`vim`: modalità, navigazione, editing, salvataggio
- Lezione 1: vi/vim editor, modes, navigation, editing, :wq, :q!

---

### Topic 104 — Devices, Linux Filesystems, FHS (Dispositivi, Filesystem, FHS)

**Peso:** 2 + 2 + 3 + 4 + 3 + 2 = 16

#### 104.1 Creare Partizioni e Filesystem (peso 2)

- `fdisk`, `gdisk`, `parted`, MBR/GPT
- `mkfs`, `mkswap`
- Lezione 1: Partitioning with fdisk/gdisk/parted, mkfs, mkswap

#### 104.2 Mantenere l'Integrità dei Filesystem (peso 2)

- `fsck`, `e2fsck`, `xfs_repair`
- `df`, `du`, `tune2fs`, `dumpe2fs`
- Lezione 1: fsck, df, du, tune2fs, filesystem integrity

#### 104.3 Verificare il Montaggio e lo Smontaggio dei Filesystem (peso 3)

- `mount`, `umount`, `/etc/fstab`
- UUID, LABEL, opzioni di mount
- Swap: `swapon`, `swapoff`
- Lezione 1: mount, umount, /etc/fstab, UUID, LABEL, swap

#### 104.5 Gestire le Autorizzazioni e la Proprietà dei File (peso 3)

- `chmod`, `chown`, `chgrp`
- Permessi: rwx, notazione ottale e simbolica
- Permessi speciali: SUID, SGID, sticky bit
- `umask`
- Lezione 1: chmod, chown, permissions, SUID, SGID, sticky, umask

#### 104.6 Creare e Modificare Collegamenti Hard e Soft (peso 2)

- `ln`, `ln -s`
- Hard link vs symbolic link
- Lezione 1: Hard links, symbolic links, ln, ln -s, inode

#### 104.7 Trovare i File di Sistema e Collocarli nella Posizione Corretta (peso 2)

- FHS: `/bin`, `/sbin`, `/usr`, `/var`, `/tmp`, `/etc`, `/home`, `/opt`
- `find`, `locate`, `updatedb`, `whereis`, `which`, `type`
- Lezione 1: FHS, find, locate, updatedb, whereis, which, type

---

## Riepilogo Numerico

| Topic      | Nome                         | Subtopics | Lezioni | Peso totale |
| ---------- | ---------------------------- | --------- | ------- | ----------- |
| 101        | System Architecture          | 3         | 3       | 8           |
| 102        | Linux Install & Package Mgmt | 6         | 6       | 12          |
| 103        | GNU and Unix Commands        | 8         | 13      | 26          |
| 104        | Devices, Filesystems, FHS    | 6         | 6       | 16          |
| **Totale** |                              | **23**    | **28**  | **62**      |

> **Nota:** Il peso totale ufficiale è 60 (i pesi individuali si sommano per convenzione a ~62 per arrotondamenti). La suddivisione in lezioni segue quella del materiale ufficiale LPI (alcune subtopics hanno 2 lezioni).

---

## Fonti Ufficiali

- 🔗 [LPI Learning Materials 101-500 (IT)](https://learning.lpi.org/it/learning-materials/101-500/)
- 🔗 [LPI Exam 101 Objectives](https://www.lpi.org/our-certifications/exam-101-objectives/)
- 🔗 [LPI Certification Program](https://www.lpi.org/our-certifications/lpic-1-overview/)
- 🔗 [Linux Professional Institute](https://www.lpi.org/)
