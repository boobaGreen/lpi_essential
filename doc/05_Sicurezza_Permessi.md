# 📗 Topic 5 — Sicurezza e Permessi dei File

---

## 5.1 — Sicurezza di Base e Identificazione dei Tipi di Utente

### 👤 Tipi di Account

| Tipo                   | UID    | Home              | Shell           | Esempio              |
| ---------------------- | ------ | ----------------- | --------------- | -------------------- |
| **Root (superuser)**   | `0`    | `/root`           | `/bin/bash`     | `root`               |
| **Utente standard**    | ≥ 1000 | `/home/utente`    | `/bin/bash`     | `carol`, `dave`      |
| **Account di sistema** | 1-999  | Varia (o nessuna) | `/sbin/nologin` | `www-data`, `daemon` |

> ⚠️ **root** ha accesso illimitato al sistema. Usare con cautela!

---

### 🔐 Ottenere Informazioni Utente

```bash
$ whoami                 # mostra l'utente corrente
$ id                     # mostra UID, GID e gruppi
$ id carol               # info su un utente specifico
$ who                    # utenti attualmente connessi
$ w                      # utenti connessi + attività
$ last                   # storico degli accessi
```

```bash
$ id
uid=1000(carol) gid=1000(carol) groups=1000(carol),27(sudo),100(users)
```

---

### 🔄 Cambiare Utente e Privilegi

| Comando        | Funzione                                           | Esempio           |
| -------------- | -------------------------------------------------- | ----------------- |
| `su utente`    | Cambia utente (chiede password dell'utente target) | `su michael`      |
| `su - utente`  | Cambia utente con ambiente completo                | `su - michael`    |
| `sudo comando` | Esegue un comando come root                        | `sudo apt update` |
| `sudo -i`      | Apre una shell root interattiva                    | —                 |

> `sudo` richiede la **propria** password (non quella di root)  
> L'utente deve essere nei **sudoers** (`/etc/sudoers`)

---

## 5.2 — Creazione di Utenti e Gruppi

### 📁 File di Controllo Accessi

| File           | Contenuto         | Leggibile da | Campi                                |
| -------------- | ----------------- | ------------ | ------------------------------------ |
| `/etc/passwd`  | Info utenti       | Tutti        | `user:x:UID:GID:commento:home:shell` |
| `/etc/shadow`  | Password crittate | Solo root    | `user:hash:lastchg:min:max:warn:...` |
| `/etc/group`   | Info gruppi       | Tutti        | `gruppo:x:GID:membri`                |
| `/etc/gshadow` | Password gruppi   | Solo root    | `gruppo:hash:admin:membri`           |

```bash
# Esempio /etc/passwd
frank:x:1001:1001:Frank Smith:/home/frank:/bin/bash
│     │ │    │    │            │           │
│     │ │    │    │            │           └── Shell di login
│     │ │    │    │            └────────────── Home directory
│     │ │    │    └────────────────────────── Commento (GECOS)
│     │ │    └────────────────────────────── GID primario
│     │ └─────────────────────────────────── UID
│     └───────────────────────────────────── Password (x = in /etc/shadow)
└─────────────────────────────────────────── Username

# Esempio /etc/shadow
frank:$6$hash...:18029:0:99999:7:::
│     │           │    │ │     │
│     │           │    │ │     └── Giorni avviso prima scadenza
│     │           │    │ └──────── Giorni max prima del cambio
│     │           │    └────────── Giorni min tra i cambi
│     │           └─────────────── Ultimo cambio (giorni da 1/1/1970)
│     └─────────────────────────── Password crittata (! = account bloccato)
└───────────────────────────────── Username
```

---

### 🔧 Comandi per Gestire Utenti e Gruppi

| Comando    | Funzione        | Esempio                                            |
| ---------- | --------------- | -------------------------------------------------- |
| `useradd`  | Crea utente     | `sudo useradd -m -s /bin/bash carol`               |
| `userdel`  | Elimina utente  | `sudo userdel -r carol` (con `-r` elimina la home) |
| `usermod`  | Modifica utente | `sudo usermod -aG sudo carol`                      |
| `passwd`   | Cambia password | `passwd` (propria), `sudo passwd carol`            |
| `groupadd` | Crea gruppo     | `sudo groupadd developers`                         |
| `groupdel` | Elimina gruppo  | `sudo groupdel developers`                         |

```bash
# Creare utente con home e shell
$ sudo useradd -m -s /bin/bash -c "Carol Smith" carol

# Aggiungere utente a un gruppo secondario
$ sudo usermod -aG developers carol

# La directory /etc/skel contiene i file copiati nella home dei nuovi utenti
$ ls -la /etc/skel
```

---

## 5.3 — Gestione dei Permessi e della Proprietà dei File

### 🔑 Comprendere i Permessi

```
-rwxr-xr-- 1 carol students 1881 Dec 10 15:57 file.txt
│├─┤├─┤├─┤   │     │
││  │  │      │     └── Gruppo proprietario
││  │  │      └──────── Utente proprietario
││  │  └─────────────── Permessi altri (other)
││  └────────────────── Permessi gruppo (group)
│└───────────────────── Permessi utente (user/owner)
└────────────────────── Tipo di file (- = file, d = directory, l = link)
```

---

### 📊 Tabella Permessi

| Permesso      | File                    | Directory                    | Valore Ottale |
| ------------- | ----------------------- | ---------------------------- | ------------- |
| `r` (read)    | Leggere il contenuto    | Elencare il contenuto        | **4**         |
| `w` (write)   | Modificare/eliminare    | Creare/eliminare file        | **2**         |
| `x` (execute) | Eseguire come programma | Entrare (cd) nella directory | **1**         |
| `-`           | Nessun permesso         | Nessun permesso              | **0**         |

---

### 🔢 Permessi in Notazione Ottale

| Ottale | Binario | Permessi | Significato                      |
| ------ | ------- | -------- | -------------------------------- |
| **7**  | 111     | `rwx`    | Lettura + Scrittura + Esecuzione |
| **6**  | 110     | `rw-`    | Lettura + Scrittura              |
| **5**  | 101     | `r-x`    | Lettura + Esecuzione             |
| **4**  | 100     | `r--`    | Solo Lettura                     |
| **3**  | 011     | `-wx`    | Scrittura + Esecuzione           |
| **2**  | 010     | `-w-`    | Solo Scrittura                   |
| **1**  | 001     | `--x`    | Solo Esecuzione                  |
| **0**  | 000     | `---`    | Nessun Permesso                  |

```
Esempio: chmod 754 file.txt

  7       5       4
 rwx     r-x     r--
 user    group   other
```

---

### 🛠️ Modificare i Permessi con `chmod`

#### Modalità Simbolica

| Operatore | Significato             |
| --------- | ----------------------- |
| `+`       | Aggiunge permesso       |
| `-`       | Rimuove permesso        |
| `=`       | Imposta permesso esatto |

| Target | Significato         |
| ------ | ------------------- |
| `u`    | User (proprietario) |
| `g`    | Group (gruppo)      |
| `o`    | Other (altri)       |
| `a`    | All (tutti)         |

```bash
$ chmod u+x script.sh       # aggiunge esecuzione al proprietario
$ chmod g-w file.txt         # rimuove scrittura al gruppo
$ chmod o=r file.txt         # imposta solo lettura per altri
$ chmod a+r file.txt         # aggiunge lettura per tutti
$ chmod ug+rw file.txt       # aggiunge lettura+scrittura a utente e gruppo
```

#### Modalità Numerica

```bash
$ chmod 755 script.sh        # rwxr-xr-x
$ chmod 644 file.txt         # rw-r--r--
$ chmod 600 segreto.txt      # rw-------
$ chmod 777 public.txt       # rwxrwxrwx  ⚠️ molto permissivo!
```

---

### 📋 Permessi Comuni

| Valore | Permessi    | Uso Tipico                       |
| ------ | ----------- | -------------------------------- |
| `755`  | `rwxr-xr-x` | Script/programmi eseguibili      |
| `644`  | `rw-r--r--` | File normali                     |
| `700`  | `rwx------` | Script privati                   |
| `600`  | `rw-------` | File sensibili (chiavi SSH)      |
| `777`  | `rwxrwxrwx` | ⚠️ Evitare! Tutto aperto a tutti |

---

### 👤 Modificare la Proprietà con `chown` e `chgrp`

```bash
$ chown carol file.txt              # cambia proprietario
$ chown carol:students file.txt     # cambia proprietario E gruppo
$ chown :students file.txt          # cambia solo il gruppo
$ chgrp students file.txt           # cambia solo il gruppo (alternativa)

# Ricorsivo (directory e contenuti)
$ chown -R carol:students directory/
```

> ⚠️ Solo **root** può cambiare il proprietario di file non propri

---

### ⭐ Permessi Speciali

| Permesso       | Valore Ottale | Su File                                 | Su Directory                                      |
| -------------- | ------------- | --------------------------------------- | ------------------------------------------------- |
| **Sticky Bit** | `1`           | (ignorato su Linux)                     | Solo il proprietario può cancellare i propri file |
| **SGID**       | `2`           | Esegue con i privilegi del gruppo       | I nuovi file ereditano il gruppo della directory  |
| **SUID**       | `4`           | Esegue con i privilegi del proprietario | —                                                 |

```bash
# Sticky Bit (esempio: /tmp)
$ chmod 1755 directory/     # o chmod +t directory/
$ ls -ld /tmp
drwxrwxrwt 25 root root 4096 /tmp/
#                   t ← sticky bit

# SGID
$ chmod 2755 directory/     # o chmod g+s directory/
$ ls -ld directory/
drwxr-sr-x 2 carol users 4096 directory/
#       s ← SGID

# SUID
$ chmod 4755 script.sh      # o chmod u+s script.sh
$ ls -l /usr/bin/passwd
-rwsr-xr-x 1 root root 63960 /usr/bin/passwd
#  s ← SUID
```

> 💡 `passwd` ha **SUID** perché deve modificare `/etc/shadow` (proprietà di root)

---

## 5.4 — Directory e File Speciali

### 📁 File e Directory Temporanei

| Directory  | Persistenza         | Note                                    |
| ---------- | ------------------- | --------------------------------------- |
| `/tmp`     | Pulita al riavvio   | File temporanei generici                |
| `/var/tmp` | Persiste al riavvio | File temporanei che devono sopravvivere |
| `/run`     | Pulita al riavvio   | Dati runtime (PID files)                |

> Tutte hanno lo **sticky bit** impostato per sicurezza

---

### 🔗 Link (Collegamenti)

```
┌─────────────────────────────────────────────────────┐
│            TIPI DI LINK                              │
│                                                     │
│  Hard Link                  Symbolic Link            │
│  ┌──────┐ ┌──────┐        ┌──────┐    ┌──────┐    │
│  │file_A│─│ inode│        │ link │───→│target│    │
│  └──────┘ │ 1234 │        └──────┘    └──────┘    │
│  ┌──────┐ │      │                                  │
│  │file_B│─│      │        Se il target viene        │
│  └──────┘ └──────┘        eliminato, il link        │
│  Entrambi puntano          diventa "rotto"           │
│  allo STESSO inode         (broken link)             │
└─────────────────────────────────────────────────────┘
```

---

### 📊 Hard Link vs Symbolic Link

| Caratteristica       | Hard Link               | Symbolic Link            |
| -------------------- | ----------------------- | ------------------------ |
| **Comandi**          | `ln target link`        | `ln -s target link`      |
| **Inode**            | Stesso inode del target | Inode diverso            |
| **Target eliminato** | Il link funziona ancora | Link "rotto"             |
| **Cross-filesystem** | ❌ No                   | ✅ Sì                    |
| **Link a directory** | ❌ No                   | ✅ Sì                    |
| **Identificazione**  | Stesso inode (`ls -i`)  | `l` come tipo in `ls -l` |

```bash
# Creare hard link
$ ln target.txt hardlink.txt
$ ls -li
3806696 -rw-r--r-- 2 carol carol 111702 target.txt
3806696 -rw-r--r-- 2 carol carol 111702 hardlink.txt
#                  ↑ link count = 2      ↑ stesso inode!

# Creare symbolic link
$ ln -s target.txt symlink.txt
$ ls -l symlink.txt
lrwxrwxrwx 1 carol carol 10 symlink.txt -> target.txt
↑                                            ↑ punta a target
tipo 'l' = link simbolico
```

> 💡 Un **hard link** è come un secondo nome per lo stesso file  
> 💡 Un **symbolic link** è come un collegamento/shortcut

---

## 📝 Riepilogo Rapido dei Comandi Topic 5

```
┌──────────────────────────────────────────────────────┐
│ COMANDO        │ FUNZIONE                             │
├──────────────────────────────────────────────────────┤
│ chmod 755 file │ Imposta permessi rwxr-xr-x           │
│ chmod u+x file │ Aggiunge esecuzione al proprietario  │
│ chown user file│ Cambia proprietario                   │
│ chgrp grp file │ Cambia gruppo                         │
│ useradd user   │ Crea utente                           │
│ userdel user   │ Elimina utente                        │
│ groupadd grp   │ Crea gruppo                           │
│ passwd user    │ Cambia password                       │
│ su - user      │ Cambia utente                         │
│ sudo cmd       │ Esegue come root                      │
│ id             │ Mostra UID/GID                        │
│ ln file link   │ Crea hard link                        │
│ ln -s file link│ Crea link simbolico                   │
│ ls -l          │ Mostra permessi                       │
│ ls -i          │ Mostra inode                          │
└──────────────────────────────────────────────────────┘
```
