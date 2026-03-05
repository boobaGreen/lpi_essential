# 🔬 Ricerca — Esame RHCSA EX200

## Panoramica ufficiale

| Attributo            | Valore                                           |
| -------------------- | ------------------------------------------------ |
| **Nome**             | Red Hat Certified System Administrator           |
| **Codice esame**     | EX200 (attuale: EX200V9K per RHEL9)              |
| **Versione RHEL**    | Red Hat Enterprise Linux 9                       |
| **Durata**           | 150 minuti                                       |
| **Punteggio**        | 210/300 per superare                             |
| **Formato**          | **Performance-based** (lab su VM live)           |
| **MCQ ufficiali**    | ❌ Non esistono                                  |
| **Lingua ufficiale** | Inglese                                          |
| **Prerequisiti**     | Nessuno formale, ma RHEL experience raccomandata |

## ⚠️ Differenza critica rispetto a LPI Essentials

L'esame RHCSA non ha domande a scelta multipla. Il candidato lavora su una o più VM Red Hat Enterprise Linux e deve completare task pratici. **Tutte le configurazioni devono persistere dopo il reboot.**

Questo significa che un "esame simulato" come quello di LPI non è replicabile 1:1. La nostra simulazione sarà **teorica/concettuale** con disclaimer esplicito.

---

## I 10 Domini Ufficiali (EX200V9K)

### 1. Understand and Use Essential Tools

- Shell prompt e sintassi comandi
- I/O redirection (`>`, `>>`, `|`, `2>`, `&>`)
- `grep` e regular expressions
- Accesso remoto con SSH
- Cambio utente in multi-user target
- Archivi: `tar`, `gzip`, `bzip2`, `xz`
- Creazione/modifica file di testo
- Gestione file e directory (cp, mv, rm, mkdir)
- Hard link e symbolic link
- Permessi standard ugo/rwx (`chmod`, `chown`, `chgrp`)
- Documentazione di sistema: `man`, `info`, `/usr/share/doc`

### 2. Create Simple Shell Scripts

- Sintassi bash, variabili
- Condizionali (`if`, `test`, `[ ]`, `[[ ]]`)
- Loop (`for`, `while`)
- Parametri posizionali (`$1`, `$2`, `$@`, `$#`)
- Output di comandi nelle script (`$()`, backtick)

### 3. Operate Running Systems

- Boot, reboot, shutdown
- Target systemd (runlevels): `multi-user.target`, `graphical.target`
- Interruzione boot per accesso (rd.break, single user)
- Processi: `ps`, `top`, `renice`, `kill`, `killall`
- Scheduling: `cron`, `at`
- Log e journald: `journalctl`, `rsyslog`, preservare journal
- Gestione servizi: `systemctl start/stop/enable/disable/status`
- Console VM e gestione VM

### 4. Configure Local Storage

- Partizioni GPT: `parted`, `fdisk`, `gdisk`
- Physical Volumes: `pvcreate`, `pvdisplay`, `pvremove`
- Volume Groups: `vgcreate`, `vgdisplay`, `vgextend`, `vgremove`
- Logical Volumes: `lvcreate`, `lvdisplay`, `lvextend`, `lvremove`
- Mount per UUID/label in `/etc/fstab`
- Swap: creazione e attivazione

### 5. Create and Configure File Systems

- `ext4`: `mkfs.ext4`, mount, umount
- `xfs`: `mkfs.xfs`, `xfs_repair`, `xfs_info`
- LUKS encryption: `cryptsetup`, `/etc/crypttab`
- NFS: `mount -t nfs`, `/etc/fstab`
- CIFS/Samba: `mount -t cifs`
- `autofs`: `/etc/auto.master`, `/etc/auto.*`
- set-GID per directory collaborative (`chmod g+s`)
- ACL: `getfacl`, `setfacl`
- Diagnosi permessi

### 6. Deploy, Configure, and Maintain Systems

- Kickstart (installazione automatica)
- `dnf`: install, remove, update, search, list, info
- `rpm`: query, install, verify
- Aggiornamento kernel
- GRUB2: `grub2-mkconfig`, `/etc/default/grub`
- Virtual guests (KVM) — configurazione teorica

### 7. Manage Basic Networking

- `nmcli`: connessioni, IP statico/DHCP
- `nmtui`: interfaccia testo
- Hostname: `hostnamectl`
- DNS: `/etc/resolv.conf`, `/etc/hosts`
- `firewall-cmd`: zone, services, ports, permanent
- SSH key-based auth: `ssh-keygen`, `ssh-copy-id`
- Trasferimento sicuro: `scp`, `sftp`, `rsync`

### 8. Manage Users and Groups

- `useradd`, `usermod`, `userdel`, `passwd`
- `groupadd`, `groupmod`, `groupdel`
- `/etc/passwd`, `/etc/shadow`, `/etc/group`
- `sudo` e `/etc/sudoers`, `visudo`
- Scadenza password: `chage`

### 9. Manage Security (SELinux + Firewall)

- SELinux: enforcing / permissive / disabled (`setenforce`, `/etc/selinux/config`)
- Contesti: `ls -Z`, `ps -Z`, `chcon`, `restorecon`
- `semanage`: porte, contesti file
- Booleans: `getsebool`, `setsebool -P`
- `firewalld` avanzato (revisione dal dominio 7)
- `sudo` avanzato

### 10. Manage Containers (NUOVO EX200V9K)

- Concetti container: immagine, layer, container
- `podman` vs Docker
- `podman pull`, `run`, `exec`, `stop`, `rm`, `images`, `ps`
- Registry: Red Hat registry, Docker Hub, autenticazione
- Tag immagini: `podman tag`, `push`
- Containerfile (Dockerfile): `FROM`, `RUN`, `ADD`, `COPY`, `ENTRYPOINT`, `EXPOSE`, `ENV`
- Volumi: `-v host:container`, permessi SELinux (`:z`, `:Z`)
- Networking: `-p hostPort:containerPort`

---

## Fonti Ufficiali

- 🔗 [Red Hat EX200 Exam Objectives](https://www.redhat.com/en/services/training/ex200-red-hat-certified-system-administrator-rhcsa-exam)
- 🔗 [Red Hat Documentation RHEL 9](https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/9)
- 🔗 [RHEL9 man pages online](https://man7.org/linux/man-pages/)
