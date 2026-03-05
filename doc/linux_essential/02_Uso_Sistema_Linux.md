# 📗 Topic 2 — Trovare il Proprio Modo di Operare in un Sistema Linux

---

## 2.1 — Nozioni di Base sulla Command Line

### 🐚 Le Shell di Linux

| Shell        | Nome Completo      | Note                                    |
| ------------ | ------------------ | --------------------------------------- |
| **bash**     | Bourne-Again Shell | La più comune, default su molti sistemi |
| **csh/tcsh** | C Shell            | Sintassi simile al linguaggio C         |
| **ksh**      | Korn Shell         | Combina funzionalità di sh e csh        |
| **zsh**      | Z Shell            | Estende bash con molte funzionalità     |

---

### 🔤 Struttura del Prompt

```
username@hostname:directory_corrente$

carol@mycomputer:~$     ← utente normale ($ = utente standard)
root@mycomputer:~#      ← superuser    (# = root)
```

| Componente | Significato                         |
| ---------- | ----------------------------------- |
| `username` | Utente che esegue la shell          |
| `hostname` | Nome dell'host/computer             |
| `~`        | Directory home dell'utente corrente |
| `$`        | Shell eseguita da utente ordinario  |
| `#`        | Shell eseguita da root (superuser)  |

---

### ⌨️ Struttura dei Comandi

```
comando [opzione(i)] [argomento(i)]

Esempio:
$ ls -l /home
  │   │   │
  │   │   └── argomento (directory da elencare)
  │   └────── opzione (formato lungo)
  └────────── comando
```

> Le opzioni possono essere in **forma breve** (`-l`) o **lunga** (`--format=long`)  
> Si possono combinare: `ls -al` = `ls -a -l` = `ls --all --format=long`

---

### 🏷️ Tipi di Comandi

| Tipo                          | Dove risiedono     | Come verificare             | Esempi                        |
| ----------------------------- | ------------------ | --------------------------- | ----------------------------- |
| **Comandi interni** (builtin) | Nella shell stessa | `type cd` → "shell builtin" | `cd`, `echo`, `set`, `export` |
| **Comandi esterni**           | File su disco      | `type man` → "/usr/bin/man" | `ls`, `man`, `grep`           |

```bash
$ type echo
echo is a shell builtin

$ type man
man is /usr/bin/man
```

---

### 💬 Quoting (Virgolette)

| Tipo                | Sintassi          | Effetto su `$variabile`    | Effetto su spazi      |
| ------------------- | ----------------- | -------------------------- | --------------------- |
| **Doppie** `"..."`  | `"$USER"` → carol | Protegge gli spazi         | Espande variabili     |
| **Singole** `'...'` | `'$USER'` → $USER | Protegge gli spazi         | NON espande variabili |
| **Escape** `\`      | `\$USER` → $USER  | Protegge singolo carattere | —                     |

```bash
$ echo I am $USER          → I am carol
$ echo "I am $USER"        → I am carol       # variabile espansa
$ echo 'I am $USER'        → I am $USER       # letterale
$ echo \$USER              → $USER            # escape del $
```

> ⚠️ **Senza virgolette**, gli spazi separano gli argomenti:  
> `touch two words` → crea 2 file ("two" e "words")  
> `touch "two words"` → crea 1 file ("two words")

---

## 2.1 (Lezione 2) — Variabili

### 📦 Tipi di Variabili

| Tipo           | Visibilità                | Creazione               | Esempio                         |
| -------------- | ------------------------- | ----------------------- | ------------------------------- |
| **Locale**     | Solo nella shell corrente | `greeting=hello`        | Non ereditata dai sottoprocessi |
| **Ambientale** | Shell + sottoprocessi     | `export greeting=hello` | Ereditata dai sottoprocessi     |

---

### 🔧 Gestione Variabili

```bash
# Creare una variabile locale
$ myvar="valore"

# Visualizzare il valore
$ echo $myvar

# Esportare come ambientale
$ export myvar

# Oppure creare ed esportare in un colpo
$ export myvar="valore"

# Rimuovere una variabile
$ unset myvar

# Visualizzare TUTTE le variabili ambientali
$ env
```

> ⚠️ **Nessuno spazio** intorno a `=`: `var=valore` ✅ — `var = valore` ❌

---

### 🛣️ La Variabile PATH

```bash
$ echo $PATH
/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin

# Aggiungere una directory a PATH
$ PATH=$PATH:/home/user/bin
```

> `PATH` contiene le directory dove la shell cerca gli eseguibili, separate da `:`

---

## 2.2 — Ottenere Aiuto dalla Command Line

### 📖 Fonti di Aiuto

| Fonte      | Comando     | Dettaglio                                     |
| ---------- | ----------- | --------------------------------------------- |
| **--help** | `ls --help` | Breve panoramica delle opzioni                |
| **man**    | `man ls`    | Pagina di manuale completa                    |
| **info**   | `info ls`   | Documentazione più dettagliata (ipertestuale) |

---

### 📚 Sezioni delle Pagine Man

| #   | Contenuto              | Esempio        |
| --- | ---------------------- | -------------- |
| 1   | Comandi utente         | `man 1 passwd` |
| 2   | Chiamate di sistema    | —              |
| 3   | Funzioni libreria C    | —              |
| 4   | File di dispositivo    | —              |
| 5   | File di configurazione | `man 5 passwd` |
| 6   | Giochi                 | —              |
| 7   | Miscellanea            | —              |
| 8   | Comandi amministratore | `man 8 mount`  |

```bash
# Navigazione nelle pagine man
Frecce / Spazio     → Scorrere
/testo              → Cercare in avanti
?testo              → Cercare all'indietro
N                   → Risultato successivo
Q                   → Uscire
```

---

### 🔍 Trovare i File

| Comando  | Velocità        | Come cerca                             | Database        |
| -------- | --------------- | -------------------------------------- | --------------- |
| `locate` | ⚡ Molto veloce | Cerca in un database precostruito      | Sì (`updatedb`) |
| `find`   | 🐢 Più lento    | Scansiona il filesystem in tempo reale | No              |

```bash
# locate — cerca nel database
$ locate thesis.pdf

# Aggiornare il database di locate (richiede root)
$ sudo updatedb

# find — cerca nel filesystem
$ find /home -name "thesis.pdf"
$ find . -name "*.txt"
```

---

## 2.3 — Uso delle Directory e Organizzazione dei File

### 📂 Filesystem Hierarchy Standard (FHS)

```
/                      ← Root (radice) del filesystem
├── /bin               ← Comandi essenziali utente
├── /boot              ← File di avvio (kernel, grub)
├── /dev               ← File di dispositivo
├── /etc               ← File di configurazione
├── /home              ← Directory home degli utenti
│   ├── /home/carol
│   └── /home/michael
├── /lib               ← Librerie di sistema
├── /mnt               ← Mount point temporanei
├── /opt               ← Software opzionale
├── /proc              ← Pseudo-filesystem (info kernel/processi)
├── /root              ← Home del superuser
├── /run               ← Dati runtime
├── /sbin              ← Comandi di sistema (root)
├── /srv               ← Dati servizi
├── /sys               ← Pseudo-filesystem (info hardware)
├── /tmp               ← File temporanei
├── /usr               ← Programmi e librerie utente
└── /var               ← Dati variabili (log, cache, spool)
```

---

### 🧭 Navigazione

| Comando       | Funzione                                      | Esempio                    |
| ------------- | --------------------------------------------- | -------------------------- |
| `pwd`         | Mostra directory corrente (percorso assoluto) | `/home/carol/Documents`    |
| `cd`          | Cambia directory                              | `cd /etc`                  |
| `cd ~` o `cd` | Vai alla home                                 | `/home/carol`              |
| `cd ..`       | Vai alla directory padre                      | Da `/home/carol` a `/home` |
| `cd -`        | Torna alla directory precedente               | —                          |
| `ls`          | Elenca contenuto directory                    | —                          |

---

### 📍 Percorsi Assoluti vs Relativi

| Tipo         | Inizia con         | Esempio                            |
| ------------ | ------------------ | ---------------------------------- |
| **Assoluto** | `/` (root)         | `/home/carol/Documents/report.txt` |
| **Relativo** | Directory corrente | `Documents/report.txt`             |

| Simbolo | Significato                         |
| ------- | ----------------------------------- |
| `.`     | Directory corrente                  |
| `..`    | Directory padre                     |
| `~`     | Directory home dell'utente corrente |

```bash
$ cd ~/Documents        # va in /home/carol/Documents
$ cd ../..              # sale di due livelli
$ ls -a                 # mostra anche file nascosti (., ..)
```

---

### 👁️ Opzioni di `ls`

| Opzione | Funzione                                                 |
| ------- | -------------------------------------------------------- |
| `-l`    | Formato lungo (permessi, proprietario, dimensione, data) |
| `-a`    | Mostra file nascosti (che iniziano con `.`)              |
| `-h`    | Dimensioni leggibili (K, M, G)                           |
| `-t`    | Ordina per data di modifica                              |
| `-r`    | Inverte l'ordinamento                                    |
| `-R`    | Ricorsivo (sottodirectory)                               |
| `-S`    | Ordina per dimensione                                    |

---

## 2.4 — Creare, Spostare e Rimuovere File

### 📁 Operazioni su Directory

```bash
# Creare directory
$ mkdir nuova_dir
$ mkdir -p padre/figlio/nipote     # crea le directory padre se non esistono

# Eliminare directory
$ rmdir dir_vuota                  # solo se vuota
$ rm -r directory                  # elimina ricorsivamente (anche se piena)
```

---

### 📄 Operazioni su File

| Operazione              | Comando  | Esempio                 |
| ----------------------- | -------- | ----------------------- |
| **Creare** file vuoto   | `touch`  | `touch file.txt`        |
| **Copiare**             | `cp`     | `cp file.txt copia.txt` |
| **Copiare directory**   | `cp -r`  | `cp -r dir/ backup/`    |
| **Spostare/Rinominare** | `mv`     | `mv old.txt new.txt`    |
| **Eliminare file**      | `rm`     | `rm file.txt`           |
| **Eliminare directory** | `rm -r`  | `rm -r directory/`      |
| **Eliminare forzato**   | `rm -rf` | `rm -rf directory/` ⚠️  |

> ⚠️ Linux è **case-sensitive**: `File.txt` ≠ `file.txt` ≠ `FILE.TXT`

---

### 🌐 Globbing (Pattern Matching)

| Pattern             | Significato                                | Esempio                                   |
| ------------------- | ------------------------------------------ | ----------------------------------------- |
| `*`                 | Qualsiasi numero di qualsiasi carattere    | `ls *.txt` → tutti i `.txt`               |
| `?`                 | Un singolo carattere qualsiasi             | `ls file?.txt` → `file1.txt`, `filea.txt` |
| `[abc]`             | Un carattere tra quelli elencati           | `ls file[123].txt`                        |
| `[a-z]`             | Un carattere nell'intervallo               | `ls file[a-c].txt`                        |
| `[^abc]` o `[!abc]` | Qualsiasi carattere TRANNE quelli elencati | `ls file[^0-9].txt`                       |
| `[[:digit:]]`       | Classe di caratteri: cifre                 | `ls file[[:digit:]].txt`                  |
| `[[:alpha:]]`       | Classe di caratteri: lettere               | —                                         |

```bash
$ ls star*           → star10 star1100 star2002 star2013
$ ls question?       → question1
$ ls file[1-3]       → file1 file2 file3
$ ls file[^a]        → tutto tranne filea
```
