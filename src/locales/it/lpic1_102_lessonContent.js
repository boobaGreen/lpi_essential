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
  }
};


