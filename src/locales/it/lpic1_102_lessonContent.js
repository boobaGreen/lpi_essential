export const lpic1_102_lessonContent = {
  // --- TOPIC 105: SHELLS AND SHELL SCRIPTING ---
  '105.1': {
    title: "Personalizzare l'Ambiente Shell",
    content: `
Personalizzare l'ambiente shell permette di ottimizzare il flusso di lavoro. I file di configurazione principali sono caricati all'avvio della shell.

### File di Configurazione (Bash)
- **/etc/profile**: Configurazione globale per tutti gli utenti (login shell).
- **/etc/bash.bashrc**: Configurazione globale (non-login interactive shell).
- **~/.bash_profile**, **~/.bash_login**, **~/.profile**: Configurazioni specifiche per l'utente (login shell). Bash cerca questi file in ordine e carica il primo che trova.
- **~/.bashrc**: Il file più usato per alias e variabili personali (non-login interactive shell).
- **~/.bash_logout**: Eseguito alla chiusura della sessione di login.

### Variabili d'Ambiente e Alias
- **export**: Rende una variabile disponibile ai processi figli.
- **PATH**: Definisce le directory dove la shell cerca gli eseguibili.
- **alias**: Crea scorciatoie per comandi complessi (es. \`alias ll='ls -la'\`).
- **function**: Permette di definire sequenze di comandi riutilizzabili con parametri.

### Skeleton Directory
- **/etc/skel/**: Contiene i file di default che vengono copiati nella home dei nuovi utenti al momento della creazione (es. \`.bashrc\`, \`.profile\`).
    `
  },
  '105.2': {
    title: "Personalizzare o Scrivere Script Semplici",
    content: `
Lo shell scripting automatizza attività ripetitive.

### Struttura di uno Script
- **Shebang (#!)**: La prima riga indica l'interprete (es. \`#!/bin/bash\`).
- **Permessi**: Lo script deve essere eseguibile (\`chmod +x script.sh\`).

### Costrutti Fondamentali
- **Variabili**: Assegnazione senza spazi (\`VAR="valore"\`), accesso con \`$\` (\`$VAR\`).
- **Argomenti**: \`$1, $2, ...\` sono i parametri passati allo script; \`$#\` è il numero di argomenti.
- **Test e Condizioni**: \`if [ condizione ]; then ... fi\`.
- **Cicli**: \`for\`, \`while\`, \`until\`.
- **Sostituzione di comando**: \`$(comando)\` o \` \`comando\` \` per catturare l'output.

### Operatori Logici
- **&&**: Esegue il secondo comando solo se il primo ha successo (exit code 0).
- **||**: Esegue il secondo comando solo se il primo fallisce.
    `
  },
  // --- TOPIC 106: USER INTERFACES AND DESKTOPS ---
  '106.1': {
    title: "Installare e Configurare X11",
    content: `
X Window System (X11) è il framework di base per le interfacce grafiche su Linux.

### Architettura X11
- **X Server**: Gestisce l'hardware (display, mouse, tastiera).
- **X Client**: L'applicazione grafica (es. un browser).
- **Protocollo di Rete**: X11 è network-transparent (il client può girare su un host diverso dal server).

### Configurazione
- **/etc/X11/xorg.conf**: File di configurazione storico (ora spesso automatico).
- **/etc/X11/xorg.conf.d/**: Directory per configurazioni modulari moderne.
- **Xdmx**: Permette di unire più display in uno solo.
- **Wayland**: Il successore moderno di X11, più sicuro e semplice, ma meno orientato alla rete nativa.

### Utility
- **xdpyinfo**: Mostra informazioni sul server X corrente.
- **xhost**: Controlla quali utenti/host possono accedere al server X.
- **DISPLAY**: Variabile d'ambiente che indica dove inviare l'output grafico (es. \`localhost:0.0\`).
    `
  },
  '106.2': {
    title: "Desktop Grafici",
    content: `
I Desktop Environment (DE) forniscono un'esperienza utente completa.

### Componenti comuni
- **Window Manager (WM)**: Gestisce il posizionamento e i bordi delle finestre (es. Mutter, KWin, Openbox).
- **Display Manager (DM)**: Gestisce il login grafico (es. GDM, SDDM, LightDM).

### Desktop Popolari
- **GNOME**: Moderno, focalizzato sulla semplicità. Usa GTK.
- **KDE Plasma**: Altamente personalizzabile. Usa Qt.
- **XFCE / LXQt**: Leggeri, ideali per hardware datato.

### Remote Desktop
- **VNC (Virtual Network Computing)**: Protocollo per desktop remoto multipiattaforma.
- **SPICE**: Protocollo usato spesso in ambienti di virtualizzazione (KVM).
- **Xrdp**: Implementazione open source di RDP (Remote Desktop Protocol).
    `
  },
  '106.3': {
    title: "Accessibilità",
    content: `
Linux offre strumenti per rendere il sistema utilizzabile da persone con disabilità.

### Tecnologie Assistive
- **Lettori di Schermo**: Orca (per GNOME).
- **Ingranditori/Lenti**: Screen Magnifier.
- **Tastiere a Schermo**: GOK, Onboard.

### Temi e Contrasto
- Supporto per temi ad alto contrasto e caratteri grandi.
- **Sticky Keys**: Permette di premere i tasti modificatori (Shift, Ctrl) in sequenza invece che simultaneamente.
- **Slow Keys**: Il tasto deve essere premuto per un certo tempo prima di essere accettato.
- **Bounce Keys**: Ignora pressioni rapide ripetute dello stesso tasto.
    `
  },
  // --- TOPIC 107: ADMINISTRATIVE TASKS ---
  '107.1': {
    title: "Gestire Account Utenti e Gruppi",
    content: `
La gestione degli utenti è fondamentale per la sicurezza e l'organizzazione del sistema.

### File Utenti e Gruppi
- **/etc/passwd**: Contiene informazioni sugli account utenti (UID, GID, home, shell).
- **/etc/group**: Contiene informazioni sui gruppi e i loro membri.
- **/etc/shadow**: Memorizza gli hash delle password e le informazioni sulla scadenza (leggibile solo da root).
- **/etc/gshadow**: Versione sicura per le password dei gruppi.

### Comandi di Gestione
- **useradd / userdel / usermod**: Crea, elimina o modifica utenti.
- **groupadd / groupdel / groupmod**: Gestisce i gruppi.
- **passwd**: Cambia la password dell'utente.
- **chage**: Gestisce i parametri di invecchiamento della password (es. \`chage -M 90 utente\`).
- **id**: Mostra UID e GID dell'utente corrente o specificato.
    `
  },
  '107.2': {
    title: "Automazione (Cron e Systemd Timers)",
    content: `
L'automazione permette di eseguire script a orari prestabiliti.

### Cron
- **crontab -e**: Edita la tabella cron dell'utente.
- **Formato crontab**: \`min ora giorno mese g_sett comando\`.
- **/etc/cron.allow** e **/etc/cron.deny**: Controllano chi può usare cron.

### Systemd Timers
- Alternativa moderna a cron, integrata con systemd.
- Richiede due file: un file **.service** (cosa eseguire) e un file **.timer** (quando eseguirlo).
- **systemctl list-timers**: Mostra i timer attivi nel sistema.

### At
- **at**: Esegue un comando una sola volta in futuro (es. \`at 14:00 tomorrow\`).
- **atq**: Visualizza la coda dei job in attesa.
- **atrm**: Rimuove un job dalla coda.
    `
  },
  '107.3': {
    title: "Localizzazione e Internazionalizzazione",
    content: `
Configurare il sistema per diverse lingue e fusi orari.

### Variabili Locale
- **LANG**: Variabile principale per la lingua (es. \`it_IT.UTF-8\`).
- **LC_ALL**: Sovrascrive tutte le altre impostazioni di locale.
- **locale**: Comando per visualizzare le impostazioni correnti.

### Fuso Orario (Timezone)
- **/etc/timezone**: Indica il fuso orario corrente.
- **/etc/localtime**: Link simbolico al file del fuso orario in \`/usr/share/zoneinfo/\`.
- **timedatectl**: Strumento moderno per gestire ora, data e fuso orario.
    `
  },
  // --- TOPIC 108: ESSENTIAL SYSTEM SERVICES ---
  '108.1': {
    title: "Mantenere il Tempo di Sistema",
    content: `
Il tempo preciso è essenziale per i log, la sicurezza (certificati) e i file system di rete.

### Orologi
- **System Clock**: Gestito dal kernel (Software).
- **Hardware Clock (RTC)**: Orologio su chip alimentato a batteria (Hardware).
- **hwclock**: Query e settaggio dell'orologio hardware.

### Network Time Protocol (NTP)
- **NTP**: Protocollo per sincronizzare l'ora via rete.
- **ntpd**: Demone NTP tradizionale.
- **chrony**: Alternativa moderna e veloce, ottima per sistemi spesso offline.
- **timedatectl set-ntp true**: Abilita la sincronizzazione automatica tramite systemd-timesyncd.
    `
  },
  '108.2': {
    title: "Logging di Sistema",
    content: `
I log permettono di monitorare lo stato del sistema e risolvere problemi.

### Syslog
- **rsyslog**: Implementazione comune di syslog.
- **/etc/rsyslog.conf**: File di configurazione.
- **/var/log/**: Directory contenente i file di log (es: \`messages\`, \`auth.log\`, \`syslog\`).
- **logrotate**: Utility per ruotare, comprimere e rimuovere i vecchi log per risparmiare spazio.

### Systemd Journal
- **journald**: Raccoglie i log in formato binario (indicizzato, veloce).
- **journalctl**: Comando per leggere i log.
- **journalctl -u service**: Log di un servizio specifico.
- **journalctl -p err**: Mostra solo errori (priority).
- **/etc/systemd/journald.conf**: Configurazione della persistenza.
    `
  },
  '108.3': {
    title: "Fondamenti MTA (E-mail)",
    content: `
Linux usa i Mail Transfer Agent (MTA) per inviare notifiche e messaggi tra utenti o processi.

### MTA Comuni
- **Postfix**: Moderno, sicuro e facile da configurare.
- **Sendmail**: Lo standard storico, configurazione complessa (m4).
- **Exim**: MTA di default su Debian, flessibile.

### Comandi e File
- **mailq**: Visualizza la coda dei messaggi in uscita.
- **newaliases**: Rigenera il database degli alias in \`/etc/aliases\`.
- **~/.forward**: Permette all'utente di inoltrare le proprie e-mail.
- **SMTP**: Protocollo usato per il trasferimento (Porta 25).
    `
  },
  '108.4': {
    title: "Gestire Stampanti e Stampa",
    content: `
Il sistema di stampa standard su Linux è CUPS.

### CUPS (Common Unix Printing System)
- **Interfaccia Web**: Gestibile via browser su \`localhost:631\`.
- **/etc/cups/**: Directory di configurazione.

### Comandi di Stampa (Line Printer)
- **lp**: Invia un file alla stampante.
- **lpq**: Visualizza lo stato della coda di stampa.
- **lprm**: Rimuove un lavoro dalla coda.
- **lpc**: Controllo amministrativo delle stampanti.
    `
  },
  // --- TOPIC 109: NETWORKING FUNDAMENTALS ---
  '109.1': {
    title: "Fondamenti dei Protocolli Internet",
    content: `
Capire come i dati viaggiano sulla rete tramite il protocollo TCP/IP.

### Indirizzamento IP
- **IPv4**: Indirizzi a 32 bit (es. \`192.168.1.1\`). Divisi in classi (A, B, C) o gestiti tramite CIDR.
- **IPv6**: Indirizzi a 128 bit (es. \`2001:db8::1\`), progettati per superare la carenza di indirizzi IPv4.
- **Maschera di Sottorete (Subnet Mask)**: Determina quale parte dell'indirizzo identifica la rete e quale l'host.

### Protocolli Comuni
- **TCP**: Orientato alla connessione, garantisce la consegna (es. HTTP, SSH).
- **UDP**: Non orientato alla connessione, veloce (es. DNS, Streaming).
- **ICMP**: Usato per messaggi di controllo e diagnostica (es. ping).
    `
  },
  '109.2': {
    title: "Configurazione di Rete Persistente",
    content: `
Come rendere le impostazioni di rete permanenti dopo il riavvio.

### Metodi di Configurazione
- **NetworkManager**: Lo standard sulle distribuzioni desktop (usa \`nmcli\` e \`nmtui\`).
- **Netplan**: Usato su Ubuntu/Debian moderne (configurazione in YAML).
- **/etc/network/interfaces**: Metodo tradizionale Debian (ifupdown).
- **Scripts ifcfg**: Metodo tradizionale Red Hat/CentOS (\`/etc/sysconfig/network-scripts/\`).

### Comandi
- **ifup / ifdown**: Attiva o disattiva un'interfaccia basata sulla configurazione.
- **ip addr**: Mostra gli indirizzi assegnati (moderno).
- **ifconfig**: Mostra interfacce (deprecato).
    `
  },
  '109.3': {
    title: "Risoluzione Problemi di Rete",
    content: `
Strumenti per diagnosticare connettività e servizi.

### Diagnostica Base
- **ping**: Verifica la raggiungibilità di un host via ICMP.
- **traceroute**: Mostra il percorso dei pacchetti verso la destinazione.
- **mtr**: Combina ping e traceroute per un'analisi real-time.

### Stato delle Porte e Connessioni
- **netstat**: Mostra connessioni, tabelle di routing, statistiche (deprecato).
- **ss**: Sostituto moderno e veloce di netstat.
- **lsof -i**: Mostra i file di rete aperti (e i processi associati).
- **dig / host**: Interroga i server DNS per risolvere nomi di dominio.
    `
  },
  '109.4': {
    title: "Configurazione DNS Client",
    content: `
Il DNS traduce nomi (google.com) in indirizzi IP.

### File Chiave
- **/etc/resolv.conf**: Specifica i server DNS (nameserver) e i domini di ricerca. Spesso gestito da \`systemd-resolved\`.
- **/etc/hosts**: Database locale statico per mappare nomi a IP (priorità sul DNS).
- **/etc/nsswitch.conf**: Definisce l'ordine di ricerca per i nomi (es. \`hosts: files dns\`).

### Comandi DNS
- **getent hosts [nome]**: Interroga il database di sistema per un nome host.
- **systemd-resolve --status**: Stato del risolutore moderno.
    `
  },
  // --- TOPIC 110: SECURITY ---
  '110.1': {
    title: "Compiti di Amministrazione Sicurezza",
    content: `
La sicurezza del sistema richiede verifiche periodiche sui permessi e sugli accessi.

### Permessi Speciali
- **SUID (4xxx)**: Il file viene eseguito con i privilegi del proprietario (solitamente root).
- **SGID (2xxx)**: Il file viene eseguito con i privilegi del gruppo.
- **Sticky Bit (1xxx)**: Impedisce l'eliminazione di file agli utenti che non ne sono i proprietari (usato in \`/tmp\`).
- **Trovare file SUID**: \`find / -perm /4000\`.

### Gestione Accessi Privilegiati
- **sudo**: Permette a utenti fidati di eseguire comandi come root.
- **/etc/sudoers**: File di configurazione (modificabile tramite \`visudo\`).
- **ulimit**: Limita l'uso delle risorse di sistema (es. memoria, numero di processi) per gli utenti.
    `
  },
  '110.2': {
    title: "Configurare la Sicurezza del Host",
    content: `
Ridurre la superficie di attacco disabilitando servizi non necessari e restringendo gli accessi.

### Servizi e Porte
- Identificare i servizi in ascolto con \`ss -tulpn\`.
- Disabilitare i servizi inutilizzati: \`systemctl disable --now servizio\`.

### Restrizioni di Rete
- **TCP Wrappers**: Forniscono controllo d'accesso base tramite \`/etc/hosts.allow\` e \`/etc/hosts.deny\`.
- **xinetd**: Un "super-servizio" che può gestire l'accesso e il logging per altri servizi meno sicuri.
- **Shadow Passwords**: Assicurarsi che \`/etc/passwd\` usi shadow passwords (indicato da 'x').
    `
  },
  '110.3': {
    title: "Proteggere i Dati con la Cifratura",
    content: `
L'uso della crittografia protegge i dati durante la trasmissione e a riposo.

### SSH (Secure Shell)
- **/etc/ssh/sshd_config**: Configurazione del server SSH (es. \`PermitRootLogin no\`).
- **ssh-keygen**: Genera coppie di chiavi (pubblica/privata).
- **ssh-agent**: Gestisce le chiavi private in memoria per non dover digitare la passphrase ogni volta.

### GnuPG (GPG)
- Usato per cifrare file e firmare e-mail.
- **gpg -c file**: Cifratura simmetrica.
- **gpg --gen-key**: Genera una coppia di chiavi GPG.
- **gpg --encrypt**: Cifra un file per un destinatario specifico usando la sua chiave pubblica.
    `
  }
};





