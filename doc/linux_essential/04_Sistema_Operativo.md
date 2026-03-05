# 📗 Topic 4 — Il Sistema Operativo Linux

---

## 4.1 — Scelta di un Sistema Operativo

### 🖥️ Categorie di Sistemi Operativi

| Categoria            | Esempi                               |
| -------------------- | ------------------------------------ |
| **Linux Enterprise** | RHEL, SLES, Ubuntu Server            |
| **Linux Consumer**   | Ubuntu Desktop, Fedora, Linux Mint   |
| **Unix**             | FreeBSD, OpenBSD, Solaris            |
| **macOS**            | Basato su Darwin (kernel Mach + BSD) |
| **Windows Server**   | Windows Server 2019/2022             |
| **Windows Desktop**  | Windows 10/11                        |

---

### 🐧 Come Scegliere una Distribuzione

| Criterio                 | Desktop                 | Server             |
| ------------------------ | ----------------------- | ------------------ |
| **Facilità d'uso**       | Ubuntu, Mint, Fedora    | —                  |
| **Stabilità**            | —                       | Debian, RHEL, SLES |
| **Supporto commerciale** | —                       | RHEL, SLES         |
| **Ciclo di rilascio**    | Fedora (6 mesi)         | RHEL (10 anni LTS) |
| **Comunità**             | Ubuntu, Arch            | CentOS, Debian     |
| **Hardware specifico**   | Raspbian (Raspberry Pi) | —                  |

---

## 4.2 — Comprendere l'Hardware del Computer

### ⚡ Componenti Hardware

```
┌─────────────────────────────────────────────────────┐
│                   COMPUTER                           │
│                                                     │
│  ┌──────────┐  ┌──────┐  ┌──────────┐  ┌────────┐ │
│  │    CPU    │  │ RAM  │  │   Disco  │  │ Scheda │ │
│  │(Processore│  │      │  │ HDD/SSD  │  │  Madre │ │
│  │)         │  │      │  │          │  │        │ │
│  └──────────┘  └──────┘  └──────────┘  └────────┘ │
│                                                     │
│  ┌──────────┐  ┌──────┐  ┌──────────┐              │
│  │ Alimenta-│  │ GPU  │  │Periferiche│             │
│  │   tore   │  │      │  │(USB,ecc.)│              │
│  └──────────┘  └──────┘  └──────────┘              │
└─────────────────────────────────────────────────────┘
```

---

### 💾 Archiviazione: HDD vs SSD

| Caratteristica         | HDD                            | SSD                                   |
| ---------------------- | ------------------------------ | ------------------------------------- |
| **Tecnologia**         | Dischi magnetici rotanti       | Microchip (flash)                     |
| **Velocità**           | Più lento                      | 3-5x più veloce                       |
| **Costo/GB**           | Basso                          | 3-10x più caro                        |
| **Affidabilità**       | Parti mobili → meno affidabile | Nessuna parte mobile → più affidabile |
| **Capacità tipica**    | Fino a 5+ TB                   | Fino a 1+ TB                          |
| **Consumo energetico** | Più alto                       | Più basso                             |

---

### 💿 Interfacce e Partizioni

| Interfaccia | Descrizione                                           |
| ----------- | ----------------------------------------------------- |
| **SATA**    | Serial AT Attachment — standard per desktop           |
| **SCSI**    | Small Computer System Interface — server              |
| **NVMe**    | Non-Volatile Memory Express — SSD ad alte prestazioni |

---

### 🗄️ RAID (Redundant Array of Independent Disks)

| Livello     | Descrizione                             | Min. dischi |
| ----------- | --------------------------------------- | ----------- |
| **RAID 0**  | Striping — velocità, nessuna ridondanza | 2           |
| **RAID 1**  | Mirroring — copia esatta                | 2           |
| **RAID 5**  | Striping + parità distribuita           | 3           |
| **RAID 6**  | Come RAID 5 con doppia parità           | 4           |
| **RAID 10** | Mirroring + Striping                    | 4           |

---

### 📟 File di Dispositivo (`/dev`)

| Prefisso | Dispositivo        | Esempio                                                  |
| -------- | ------------------ | -------------------------------------------------------- |
| `sd`     | Disco SATA/SCSI    | `/dev/sda` = primo disco, `/dev/sda1` = prima partizione |
| `hd`     | Disco IDE (legacy) | `/dev/hda`                                               |
| `mmcblk` | Scheda SD/MMC      | `/dev/mmcblk0p1`                                         |
| `nvme`   | Disco NVMe         | `/dev/nvme0n1`                                           |

```bash
# Elencare dispositivi a blocchi
$ lsblk
NAME   MAJ:MIN RM  SIZE TYPE MOUNTPOINT
sda      8:0    0  100G disk
├─sda1   8:1    0  512M part /boot
└─sda2   8:2    0 99.5G part /
```

---

## 4.3 — Dove i Dati sono Memorizzati

### 🧠 Il Kernel Linux

| File in `/boot` | Contenuto                                 |
| --------------- | ----------------------------------------- |
| `vmlinuz-*`     | Kernel compresso                          |
| `initrd.img-*`  | RAM disk iniziale (filesystem temporaneo) |
| `config-*`      | Configurazione compilazione kernel        |
| `System.map-*`  | Mappa simboli kernel                      |
| `grub/`         | Configurazione bootloader GRUB            |

---

### 📂 Directory di Sistema Importanti

| Directory  | Contenuto                         | Tipo              |
| ---------- | --------------------------------- | ----------------- |
| `/proc`    | Info processi e kernel (virtuale) | Pseudo-filesystem |
| `/sys`     | Info hardware (virtuale)          | Pseudo-filesystem |
| `/dev`     | File di dispositivo               | Speciale          |
| `/etc`     | File di configurazione            | Reale             |
| `/var/log` | File di log                       | Reale             |

```bash
# Informazioni CPU
$ cat /proc/cpuinfo

# Parametri di avvio del kernel
$ cat /proc/cmdline

# Moduli caricati
$ cat /proc/modules
# oppure
$ lsmod
```

---

### ⚙️ Processi

| Concetto    | Descrizione                                      |
| ----------- | ------------------------------------------------ |
| **PID**     | Process ID — identificativo univoco del processo |
| **PPID**    | Parent Process ID — PID del processo padre       |
| **systemd** | Primo processo (PID 1) nei sistemi moderni       |

---

### 📊 Comandi per la Gestione dei Processi

| Comando | Funzione                   | Opzioni Utili                                        |
| ------- | -------------------------- | ---------------------------------------------------- |
| `ps`    | Snapshot dei processi      | `-f` (formato completo), `-u` (utente), `-e` (tutti) |
| `top`   | Processi in tempo reale    | `M` (ordina per memoria), `P` (CPU), `Q` (esci)      |
| `htop`  | Versione migliorata di top | —                                                    |
| `kill`  | Termina un processo        | `kill PID`, `kill -9 PID` (forzato)                  |

```bash
$ ps -ef                  # tutti i processi, formato completo
$ ps aux                  # tutti i processi, formato BSD
$ top                     # monitor in tempo reale

# All'interno di top:
# M = ordina per Memoria
# P = ordina per CPU
# N = ordina per PID
# T = ordina per Tempo
# R = inverte ordinamento
# Q = esci
```

---

### 📋 Log di Sistema

| File/Servizio       | Contenuto                                |
| ------------------- | ---------------------------------------- |
| `/var/log/syslog`   | Log di sistema generale (Debian/Ubuntu)  |
| `/var/log/messages` | Log di sistema generale (Red Hat/CentOS) |
| `/var/log/auth.log` | Log di autenticazione                    |
| `/var/log/kern.log` | Messaggi del kernel                      |
| `dmesg`             | Messaggi del kernel (ring buffer)        |
| `journalctl`        | Query al journal di systemd              |

```bash
$ tail -f /var/log/syslog     # segui il log in tempo reale
$ dmesg | tail                # ultimi messaggi del kernel
$ journalctl -u sshd          # log del servizio sshd
```

---

## 4.4 — Il Computer in Rete

### 🌐 Modello di Rete

```
┌─────────────────────────────────────────┐
│         Livelli di Rete                  │
│                                         │
│  Applicazione   (HTTP, FTP, SSH, DNS)   │
│  Trasporto      (TCP, UDP)              │
│  Rete           (IP — IPv4, IPv6)       │
│  Link Layer     (Ethernet, Wi-Fi)       │
└─────────────────────────────────────────┘
```

---

### 📡 Indirizzi di Rete

| Tipo     | Formato           | Esempio             | Dimensione |
| -------- | ----------------- | ------------------- | ---------- |
| **MAC**  | XX:XX:XX:XX:XX:XX | `00:1A:2B:3C:4D:5E` | 48 bit     |
| **IPv4** | X.X.X.X           | `192.168.0.1`       | 32 bit     |
| **IPv6** | X:X:X:X:X:X:X:X   | `2001:db8::1`       | 128 bit    |

---

### 🔢 IPv4 — Subnet e CIDR

```
Indirizzo IP:    192.168.0.1
Binario:         11000000.10101000.00000000.00000001

Subnet mask:     255.255.255.0
Binario mask:    11111111.11111111.11111111.00000000
                 ├── Porzione RETE ──────┤├─ HOST ─┤

Notazione CIDR:  192.168.0.1/24   (24 bit per la rete)
```

---

### 🏠 Indirizzi Privati IPv4

| Classe | Intervallo                        | CIDR             |
| ------ | --------------------------------- | ---------------- |
| **A**  | `10.0.0.0` — `10.255.255.255`     | `10.0.0.0/8`     |
| **B**  | `172.16.0.0` — `172.31.255.255`   | `172.16.0.0/12`  |
| **C**  | `192.168.0.0` — `192.168.255.255` | `192.168.0.0/16` |

---

### 🌍 IPv6

| Caratteristica    | Dettaglio                                                                  |
| ----------------- | -------------------------------------------------------------------------- |
| **Dimensione**    | 128 bit (vs 32 bit di IPv4)                                                |
| **Formato**       | 8 gruppi di 4 cifre esadecimali: `2001:0db8:0000:0000:0000:0000:0000:0001` |
| **Abbreviazione** | Zeri iniziali omessi, gruppi di soli zeri → `::`: `2001:db8::1`            |
| **Loopback**      | `::1` (equivalente di `127.0.0.1` in IPv4)                                 |
| **Link-local**    | Inizia con `fe80::`                                                        |

---

### 🌐 DNS (Domain Name System)

| File/Comando       | Funzione                    |
| ------------------ | --------------------------- |
| `/etc/resolv.conf` | Configurazione resolver DNS |
| `/etc/hosts`       | Mappatura statica nome ↔ IP |
| `host nome`        | Query DNS semplice          |
| `dig nome`         | Query DNS dettagliata       |

```bash
$ cat /etc/resolv.conf
nameserver 192.168.0.1

$ host learning.lpi.org
learning.lpi.org has address 208.94.166.198

$ cat /etc/hosts
127.0.0.1   localhost
192.168.0.10 server
```

---

### 🔌 Porte e Socket

| Porta | Servizio | Protocollo |
| ----- | -------- | ---------- |
| 20/21 | FTP      | TCP        |
| 22    | SSH      | TCP        |
| 25    | SMTP     | TCP        |
| 53    | DNS      | TCP/UDP    |
| 80    | HTTP     | TCP        |
| 443   | HTTPS    | TCP        |
| 110   | POP3     | TCP        |
| 143   | IMAP     | TCP        |

> Un **socket** = indirizzo IP + porta (es. `192.168.0.1:80`)

```bash
# Visualizzare connessioni di rete
$ ss -tuln              # socket TCP/UDP in ascolto
$ netstat -tuln         # alternativa (deprecato)
```
