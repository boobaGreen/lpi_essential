# 📗 Topic 3 — Il Potere della Command Line

---

## 3.1 — Archiviazione e Compressione dei File

### 🗜️ Strumenti di Compressione

| Strumento | Comprime     | Decomprime         | Estensione | Velocità  | Compressione |
| --------- | ------------ | ------------------ | ---------- | --------- | ------------ |
| **gzip**  | `gzip file`  | `gunzip file.gz`   | `.gz`      | ⚡ Veloce | Media        |
| **bzip2** | `bzip2 file` | `bunzip2 file.bz2` | `.bz2`     | 🐢 Medio  | Buona        |
| **xz**    | `xz file`    | `unxz file.xz`     | `.xz`      | 🐌 Lento  | ⭐ Migliore  |

> ⚠️ La compressione **sostituisce** il file originale! Il file originale viene eliminato.

```bash
# Livelli di compressione (1 = veloce, 9 = massima compressione)
$ gzip -1 file_veloce    # compressione minima, velocità massima
$ gzip -9 file_max       # compressione massima, più lento

# Leggere file compressi senza decomprimere
$ zcat file.gz           # per gzip
$ bzcat file.bz2         # per bzip2
$ xzcat file.xz          # per xz
```

---

### 📦 Archiviazione con `tar`

| Opzione | Significato                               |
| ------- | ----------------------------------------- |
| `c`     | **C**rea un nuovo archivio                |
| `x`     | E**x**trai dall'archivio                  |
| `t`     | Lis**t**a il contenuto                    |
| `f`     | Specifica il nome del **f**ile            |
| `v`     | **V**erbose (mostra i file elaborati)     |
| `z`     | Comprime/decomprime con g**z**ip          |
| `j`     | Comprime/decomprime con b**j**ip2 (bzip2) |
| `J`     | Comprime/decomprime con x**J** (xz)       |

```bash
# Creare archivio
$ tar cf archivio.tar directory/

# Creare archivio compresso
$ tar czf archivio.tar.gz directory/    # con gzip
$ tar cjf archivio.tar.bz2 directory/   # con bzip2
$ tar cJf archivio.tar.xz directory/    # con xz

# Elencare contenuto
$ tar tf archivio.tar

# Estrarre
$ tar xf archivio.tar
$ tar xzf archivio.tar.gz              # estrarre gzip
$ tar xvf archivio.tar file.txt        # estrarre un solo file
```

---

### 📦 ZIP

```bash
$ zip archivio.zip file1 file2        # creare
$ zip -r archivio.zip directory/      # ricorsivo
$ unzip archivio.zip                  # estrarre
```

---

## 3.2 — Ricercare ed Estrarre Dati dai File

### 🔄 Redirezione I/O

```
┌──────────────────────────────────────────────────┐
│            Standard I/O Channels                  │
│                                                  │
│  stdin  (0)  ← tastiera          → <            │
│  stdout (1)  → schermo           → > e >>       │
│  stderr (2)  → schermo (errori)  → 2> e 2>>     │
└──────────────────────────────────────────────────┘
```

| Operatore     | Funzione                                     | Esempio                        |
| ------------- | -------------------------------------------- | ------------------------------ |
| `>`           | Redirige stdout in un file (**sovrascrive**) | `echo "ciao" > file.txt`       |
| `>>`          | Redirige stdout in un file (**aggiunge**)    | `echo "mondo" >> file.txt`     |
| `2>`          | Redirige stderr in un file                   | `find / -name x 2> errori.txt` |
| `2>>`         | Redirige stderr (aggiunge)                   | `cmd 2>> errori.log`           |
| `<`           | Redirige stdin da un file                    | `sort < lista.txt`             |
| `2>/dev/null` | Scarta gli errori                            | `find / -name x 2>/dev/null`   |

> `/dev/null` = "cestino" — tutto ciò che viene scritto qui viene eliminato

---

### 🔗 Pipe `|`

La pipe collega l'output di un comando all'input del successivo:

```bash
# L'output di cat diventa l'input di less
$ cat /etc/passwd | less

# Pipe multiple
$ ls -l | head | wc -w

# Catena comune
comando1 | comando2 | comando3
   stdout    stdin/stdout    stdin
```

---

### 📊 Comandi Filtro Principali

| Comando | Funzione                         | Opzioni Comuni                       |
| ------- | -------------------------------- | ------------------------------------ |
| `head`  | Prime N righe (default 10)       | `-n 5` → prime 5 righe               |
| `tail`  | Ultime N righe (default 10)      | `-n 5`, `-f` (follow in tempo reale) |
| `wc`    | Conta                            | `-l` righe, `-w` parole, `-c` byte   |
| `sort`  | Ordina righe                     | `-r` inverso, `-n` numerico          |
| `cat`   | Mostra contenuto file            | —                                    |
| `less`  | Scorre il file pagina per pagina | Spazio, Q per uscire                 |
| `cut`   | Estrae colonne/campi             | `-d: -f1` campo 1 separato da `:`    |

```bash
# Conta le righe di /etc/passwd
$ wc -l /etc/passwd

# Ultime 5 righe + aggiornamento in tempo reale
$ tail -f -n 5 /var/log/syslog

# Ordina utenti
$ sort /etc/passwd
```

---

### 🔍 Comando `grep`

```bash
$ grep "pattern" file            # cerca pattern nel file
$ grep -i "pattern" file         # case-insensitive
$ grep -r "pattern" directory/   # ricorsivo
$ grep -c "pattern" file         # conta le corrispondenze
$ grep -v "pattern" file         # righe che NON corrispondono
$ grep -E "regex" file           # espressioni regolari estese
```

---

### 🎯 Espressioni Regolari (Regex)

| Metacarattere | Significato                               | Esempio                                  |
| ------------- | ----------------------------------------- | ---------------------------------------- |
| `.`           | Qualsiasi singolo carattere               | `a.b` → aab, axb                         |
| `[abc]`       | Un carattere tra quelli elencati          | `[aeiou]` → vocali                       |
| `[^abc]`      | Qualsiasi tranne quelli elencati          | `[^0-9]` → non cifre                     |
| `[a-z]`       | Intervallo di caratteri                   | —                                        |
| `^`           | Inizio riga                               | `^root` → righe che iniziano con "root"  |
| `$`           | Fine riga                                 | `bash$` → righe che finiscono con "bash" |
| `*`           | Zero o più del precedente                 | `ab*` → a, ab, abb, abbb                 |
| `+`           | Uno o più del precedente (richiede `-E`)  | `ab+` → ab, abb, abbb                    |
| `?`           | Zero o uno del precedente (richiede `-E`) | `ab?` → a, ab                            |
| `\|`          | OR (richiede `-E`)                        | `cat\|dog` → cat o dog                   |

```bash
# Righe che iniziano con "a"
$ grep "^a" file.txt

# Righe che finiscono con "2"
$ grep "2$" file.txt

# Cerca "sun" OPPURE "moon" (regex estese)
$ grep -E "sun|moon" file.txt
```

---

## 3.3 — Transformare Comandi in Script

### 📝 Struttura di uno Script Bash

```bash
#!/bin/bash
# Questo è un commento

# Variabili
nome="Linux"
echo "Benvenuto in $nome!"
```

---

### 🚀 Rendere Eseguibile uno Script

```bash
# 1. Creare lo script
$ echo '#!/bin/bash' > script.sh
$ echo 'echo "Hello World!"' >> script.sh

# 2. Dare i permessi di esecuzione
$ chmod +x script.sh

# 3. Eseguire
$ ./script.sh
```

> ⚠️ `./` è necessario se la directory corrente NON è nel `PATH`

---

### 📋 Concetti Chiave degli Script

| Concetto              | Sintassi             | Esempio                                         |
| --------------------- | -------------------- | ----------------------------------------------- |
| **Shebang**           | `#!/bin/bash`        | Prima riga — indica l'interprete                |
| **Commenti**          | `# testo`            | Ignorati dall'interprete                        |
| **Variabili**         | `var=valore`         | `nome="Mario"`                                  |
| **Accesso variabile** | `$var` o `${var}`    | `echo $nome`                                    |
| **Argomenti**         | `$1`, `$2`, ... `$#` | `$1` = primo argomento, `$#` = numero argomenti |
| **Codice di uscita**  | `$?`                 | `0` = successo, altro = errore                  |

---

### 🔀 Costrutti Condizionali

```bash
#!/bin/bash

if [ $1 -gt 100 ]; then
    echo "Il numero è maggiore di 100"
else
    echo "Il numero è minore o uguale a 100"
fi
```

| Operatore | Significato             |
| --------- | ----------------------- |
| `-eq`     | Uguale (equal)          |
| `-ne`     | Diverso (not equal)     |
| `-gt`     | Maggiore (greater than) |
| `-lt`     | Minore (less than)      |
| `-ge`     | Maggiore o uguale       |
| `-le`     | Minore o uguale         |

---

### 🔄 Cicli For

```bash
#!/bin/bash

# Ciclo su una lista
for nome in Alice Bob Carol; do
    echo "Ciao $nome!"
done

# Ciclo sui file
for file in *.txt; do
    echo "File trovato: $file"
done

# Ciclo sugli argomenti
for arg in "$@"; do
    echo "Argomento: $arg"
done
```
