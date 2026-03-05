# 📗 Topic 1 — La Comunità Linux e una Carriera nell'Open Source

---

## 1.1 — Evoluzione di Linux e Sistemi Operativi Popolari

### 🕰️ Storia di Linux

| Anno | Evento                                                |
| ---- | ----------------------------------------------------- |
| 1969 | Sviluppo di **Unix** ai Laboratori AT&T               |
| 1991 | **Linus Torvalds** avvia lo sviluppo del kernel Linux |
| 1993 | Nasce il progetto **Debian** (Ian Murdock)            |
| 1994 | Nasce **Red Hat Linux** e **SUSE Linux**              |
| 2003 | Red Hat Linux → **Red Hat Enterprise Linux (RHEL)**   |
| 2004 | Nasce **Ubuntu** (Mark Shuttleworth)                  |
| 2005 | Google acquisisce **Android Inc.**                    |
| 2019 | **IBM** acquisisce Red Hat                            |

> ⚠️ **Linux NON contiene codice Unix** — è un progetto indipendente ispirato a Unix.

---

### 🏢 Famiglie di Distribuzioni

```
                    Distribuzioni Linux
                          │
          ┌───────────────┼───────────────┐
          │               │               │
     Famiglia         Famiglia       Famiglia
      Debian          Red Hat         SUSE
          │               │               │
    ┌─────┤          ┌────┤          ┌────┤
    │     │          │    │          │    │
 Debian  Ubuntu    RHEL Fedora    SLES openSUSE
          │               │
       Linux Mint       CentOS
```

| Famiglia    | Formato Pacchetti | Gestori Pacchetti        | Distribuzioni Principali   |
| ----------- | ----------------- | ------------------------ | -------------------------- |
| **Debian**  | `.deb`            | `dpkg`, `apt-get`, `apt` | Debian, Ubuntu, Linux Mint |
| **Red Hat** | `.rpm`            | `rpm`, `yum`, `dnf`      | RHEL, Fedora, CentOS       |
| **SUSE**    | `.rpm`            | `rpm`, `zypper`          | SLES, openSUSE             |

---

### 📱 Sistemi Integrati (Embedded)

| Sistema          | Descrizione                                          | Utilizzo                        |
| ---------------- | ---------------------------------------------------- | ------------------------------- |
| **Android**      | SO mobile basato su kernel Linux modificato (Google) | Smartphone, tablet, TV, orologi |
| **Raspbian**     | Distribuzione Debian per Raspberry Pi                | IoT, didattica, prototipi       |
| **Raspberry Pi** | Computer a basso costo con GPIO                      | Progetti fai-da-te, formazione  |

> 💡 Android è **open source** (AOSP) ma include componenti proprietari Google (Play Store, Maps, etc.)

---

### ☁️ Linux e il Cloud

| Concetto             | Descrizione                                                         |
| -------------------- | ------------------------------------------------------------------- |
| **Cloud Computing**  | Gestione standardizzata di risorse informatiche (AWS, GCP, Azure)   |
| **IaaS**             | Infrastructure as a Service — VM fornite in pochi minuti            |
| **Quota di mercato** | Linux gestisce il **90%** del carico di lavoro della cloud pubblica |

---

## 1.2 — Principali Applicazioni Open Source

### 📦 Gestione Pacchetti — Riepilogo

| Famiglia    | Installare          | Rimuovere          | Cercare            |
| ----------- | ------------------- | ------------------ | ------------------ |
| **Debian**  | `apt install <pkg>` | `apt remove <pkg>` | `apt search <pkg>` |
| **Red Hat** | `dnf install <pkg>` | `dnf remove <pkg>` | `dnf search <pkg>` |

> `dpkg` e `rpm` operano su singoli file; `apt`/`dnf` gestiscono **dipendenze** automaticamente.

---

### 🖥️ Applicazioni Principali per Categoria

| Categoria         | Applicazioni                                                 |
| ----------------- | ------------------------------------------------------------ |
| **Suite Ufficio** | LibreOffice (Writer, Calc, Impress, Draw), Apache OpenOffice |
| **Browser Web**   | Mozilla Firefox, Google Chrome / Chromium                    |
| **Email**         | Mozilla Thunderbird                                          |
| **Multimedia**    | Audacity (audio), GIMP (immagini), VLC, Blender (3D)         |
| **Server Web**    | Apache, Nginx, lighttpd                                      |
| **Database**      | MariaDB (ex MySQL), PostgreSQL                               |
| **File Sharing**  | Samba (Windows), NFS (Unix/Linux), ownCloud/Nextcloud        |

---

### 💻 Linguaggi di Programmazione

| Linguaggio     | Tipo                   | Utilizzo Principale                             |
| -------------- | ---------------------- | ----------------------------------------------- |
| **C**          | Compilato              | Kernel, SO, driver, sistemi ad alte prestazioni |
| **Java**       | Compilato/Interpretato | Applicazioni portabili, enterprise              |
| **JavaScript** | Interpretato           | Web (frontend + backend con Node.js)            |
| **Python**     | Interpretato           | Data science, scripting, automazione            |
| **Perl**       | Interpretato           | Elaborazione testi, espressioni regolari        |
| **Bash**       | Interpretato (shell)   | Scripting di sistema, automazione               |

> **Compilato** = codice sorgente → binario eseguibile (veloce)  
> **Interpretato** = interprete legge ed esegue a ogni avvio (portabile)

---

## 1.3 — Software Open Source e Licenze

### 🔓 Le 4 Libertà del Software Libero (FSF)

| #     | Libertà       | Descrizione                                 |
| ----- | ------------- | ------------------------------------------- |
| **0** | Eseguire      | Usare il programma per qualsiasi scopo      |
| **1** | Studiare      | Accesso al codice sorgente per modificarlo  |
| **2** | Ridistribuire | Condividere copie con altri                 |
| **3** | Migliorare    | Distribuire copie delle versioni modificate |

---

### 📜 Licenze Principali

```
                    Licenze Software
                          │
            ┌─────────────┼─────────────┐
            │                           │
        Copyleft                   Permissive
     (virale/reciproca)          (non virale)
            │                           │
     ┌──────┤                    ┌──────┤
     │      │                    │      │
    GPL    LGPL               BSD    MIT
    AGPL   FDL             Apache 2.0
```

| Licenza                   | Tipo            | Caratteristica Chiave                    |
| ------------------------- | --------------- | ---------------------------------------- |
| **GPL** (v2, v3)          | Copyleft forte  | Codice derivato DEVE restare GPL         |
| **LGPL**                  | Copyleft debole | Permette linking con codice proprietario |
| **AGPL**                  | Copyleft forte  | Estende GPL al software-as-a-service     |
| **FDL**                   | Copyleft        | Per la documentazione                    |
| **Apache 2.0**            | Permissive      | Concessione esplicita di brevetti        |
| **MIT**                   | Permissive      | Molto breve e permissiva                 |
| **BSD**                   | Permissive      | Simile a MIT                             |
| **CC** (Creative Commons) | Varie           | Per contenuti non-software               |

> ⚠️ **Copyleft** = il codice derivato deve mantenere la stessa licenza (detto "virale")  
> ⚠️ **Permissive** = poche restrizioni, il codice derivato può essere anche proprietario

---

### 💰 Modelli di Business Open Source

| Modello                     | Esempio                               |
| --------------------------- | ------------------------------------- |
| **Supporto professionale**  | Red Hat, Canonical                    |
| **Doppia licenza**          | ownCloud (GPL + Business Edition)     |
| **SaaS**                    | Software come servizio basato su FOSS |
| **Crowdfunding**            | Kickstarter per progetti open source  |
| **Certificazioni**          | LPI, Red Hat (RHCE), etc.             |
| **Sviluppo su commissione** | Estensioni personalizzate             |

---

## 1.4 — Competenze ICT e Lavoro con Linux

### 🖥️ Ambienti Desktop

| Desktop       | Toolkit  | Filosofia                              |
| ------------- | -------- | -------------------------------------- |
| **GNOME**     | GTK (C)  | Semplicità (KISS), applicazioni snelle |
| **KDE**       | Qt (C++) | Personalizzazione, molte opzioni       |
| **XFCE**      | GTK      | Leggero, basso consumo risorse         |
| **LXDE/LXQt** | GTK/Qt   | Ultraleggero                           |

> Accesso al terminale: **Emulatore grafico** (GNOME Terminal, Konsole) oppure **TTY** (`Ctrl+Alt+F1..F7`)

---

### 🔐 Privacy e Sicurezza su Internet

| Minaccia                   | Descrizione                                               | Soluzione                          |
| -------------------------- | --------------------------------------------------------- | ---------------------------------- |
| **Cookie di tracciamento** | Cookie di terze parti che tracciano la navigazione        | Bloccare cookie terze parti        |
| **DNT (Do Not Track)**     | Impostazione browser — **NON garantisce** protezione      | Solo una richiesta, non un obbligo |
| **Navigazione privata**    | Non salva cronologia locale, **NON** nasconde il traffico | Usare VPN/Tor per anonimato reale  |

---

### 🔒 Crittografia

| Tecnologia          | Scopo                                           | Dettagli                                                         |
| ------------------- | ----------------------------------------------- | ---------------------------------------------------------------- |
| **TLS/SSL**         | Protocollo di sicurezza per connessioni di rete | HTTPS = HTTP + TLS. Cerca il 🔒 nel browser                      |
| **GnuPG (GPG)**     | Crittografia e firma di file/email              | Chiave pubblica (crittare) + Chiave privata (decrittare/firmare) |
| **dm-crypt / LUKS** | Crittografia disco                              | Protegge dati su disco/partizione                                |

> 🔑 **Crittografia asimmetrica**: chiave pubblica per crittare → chiave privata per decrittare
