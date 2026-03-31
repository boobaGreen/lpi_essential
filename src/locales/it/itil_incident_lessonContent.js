export const itilIncidentLessonContent = {
  // ==========================================
  // TOPIC 1: CONCETTI E TERMINOLOGIA
  // ==========================================
  'itil-pim-1-1': {
    content: `
# Cos'è un Incidente?

In ITIL 4, un **incidente** è definito come:
> "Un'interruzione non pianificata di un servizio o una riduzione della qualità di un servizio."

## Punti Chiave:
- **Non Pianificato**: Se un server viene spento per manutenzione programmata, non è un incidente (è un Change). Se si rompe improvvisamente, lo è.
- **Riduzione della Qualità**: Anche se il servizio "funziona", ma è lentissimo o instabile, è considerato un incidente.
- **Impatto sul Valore**: Gli incidenti distruggono il valore per gli utenti e l'organizzazione.

## Classificazione:
- **Impatto**: La misura della gravità di un incidente (es. quanti utenti sono coinvolti?).
- **Urgenza**: La misura di quanto velocemente l'organizzazione deve agire.
- **Priorità**: Il risultato di Impatto x Urgenza (es. P1 = Critico, P4 = Basso).

## Approfondimento per l'Esame
All'esame ITIL 4 Practitioner, è fondamentale ricordare che **non tutti gli eventi sono incidenti**. La distinzione tra "evento", "incidente" e "problema" è un classico trabocchetto. Un incidente è un evento che *influisce negativamente* sul servizio.

## Riassunto
L'Incident Management serve a ripristinare il servizio il prima possibile. Non si occupa di capire "perché" è successo (quello è il Problem Management).
`
  },
  'itil-pim-1-2': {
    content: `
# Workaround e Debito Tecnico

Un **Workaround** (soluzione temporanea) è una soluzione che riduce o elimina l'impatto di un incidente o di un problema per il quale non è ancora disponibile una risoluzione definitiva.

## Caratteristiche del Workaround:
- **Velocità**: L'obiettivo è ripristinare il servizio il prima possibile.
- **Temporaneità**: Spesso non risolve la causa radice (che è compito del Problem Management).
- **Documentazione**: Ogni workaround deve essere registrato nella *Known Error Database (KEDB)*.

## Debito Tecnico:
L'uso eccessivo di workaround senza mai risolvere le cause radice accumula **debito tecnico**.
- Aumenta la complessità del sistema.
- Aumenta la probabilità di incidenti futuri.
- Rende più difficile la manutenzione.

## Approfondimento per l'Esame
Il workaround può essere applicato sia durante la gestione di un incidente (per ripristinare subito) che durante la gestione di un problema (in attesa di un fix definitivo). Se un workaround diventa "standard" e non viene rimosso, il debito tecnico cresce esponenzialmente.

## Riassunto
Il workaround è l'arma principale dell'Incident Management per battere il tempo. La KEDB è lo scudo che permette di condividere queste armi tra i vari team.
`
  },
  'itil-pim-1-3': {
    content: `
# Incidenti vs Service Requests

È fondamentale distinguere tra un incidente e una richiesta di servizio per instradare correttamente il lavoro.

| Caratteristica | Incidente | Richiesta di Servizio |
| :--- | :--- | :--- |
| **Natura** | Qualcosa si è rotto o degradato. | Qualcosa di nuovo o standard è richiesto. |
| **Obiettivo** | Ripristinare lo stato normale. | Soddisfare un bisogno dell'utente. |
| **Esempio** | "Non riesco a stampare." | "Voglio una nuova stampante." |
| **Workflow** | Spesso richiede diagnosi e investigazione. | Segue una procedura predefinita (Request Fulfillment). |

## Approfondimento per l'Esame
Ricorda: **Il reset della password è un'eccezione.** Sebbene possa sembrare un'interruzione (non posso più lavorare), ITIL lo classifica solitamente come **Service Request** se segue una procedura automatizzata e predefinita. Tuttavia, se il sistema di autenticazione cade per tutti, è un **Incidente**.

## Riassunto
Incidenti = "Fix it". Service Requests = "I want it". Confonderli spreca risorse preziose (gli esperti di incidenti non dovrebbero fare installazioni standard).
`
  },

  // ==========================================
  // TOPIC 2: PRACTICE SUCCESS FACTORS (PSFs)
  // ==========================================
  'itil-pim-2-1': {
    content: `
# PSF 1: Ripristino Rapido

Il primo fattore di successo (PSF) si concentra sull'efficienza operativa del ripristino.

## Obiettivi:
- **Minimizzare il Downtime**: Ridurre il tempo tra la scoperta dell'incidente e il ripristino.
- **Qualità del Ripristino**: Assicurarsi che la soluzione sia sicura.
- **Efficacia**: Utilizzare le risorse giuste per l'incidente giusto.

## Approfondimento per l'Esame
La velocità non deve sacrificare la sicurezza. Un ripristino rapido che causa un altro incidente immediato non è efficace. I "Modelli di Incidente" (Incident Models) sono lo strumento chiave per questo PSF: procedure pre-approvate per casi noti.

## Riassunto
PSF 1 = Velocità + Precisione. Si misura tipicamente con l'MTTR (Mean Time To Repair).
`
  },
  'itil-pim-2-2': {
    content: `
# PSF 2: Gestione Stakeholders

La gestione degli incidenti riguarda anche la percezione delle persone.

## Stakeholders Coinvolti:
- **Utenti**: Coloro che subiscono l'interruzione.
- **Clienti**: Business owners.
- **Team Tecnici**: Coloro che risolvono.
- **Management**: Visibilità e decisioni.

## Approfondimento per l'Esame
La "Soddisfazione dell'Utente" è la metrica regina qui. Anche se risolvi un incidente in 5 minuti, se l'utente non sapeva cosa stava succedendo, la sua percezione sarà negativa. La trasparenza (Status Pages) è fondamentale.

## Riassunto
PSF 2 = Comunicazione + Empatia. Non basta riparare il server, bisogna rassicurare chi lo usa.
`
  },
  'itil-pim-2-3': {
    content: `
# PSF 3: Analisi e Miglioramento

Ogni incidente è una lezione gratuita (anche se costosa).

## Ciclo di Miglioramento:
1. **Post-Incident Review (PIR)**: Analisi post-mortem.
2. **Identificazione dei Problemi**: Analisi trend.
3. **Miglioramento Processi**: Update manuali.

## Approfondimento per l'Esame
La differenza tra Incident e Problem Management è sottile qui. L'Incident Management analizza i dati per migliorare *se stesso* (il processo di risposta), mentre il Problem Management analizza i dati per migliorare il *servizio IT* (il software/hardware).

## Riassunto
PSF 3 = Apprendimento. Chi non analizza i propri incidenti è destinato a risolverli all'infinito.
`
  },

  // ==========================================
  // TOPIC 3: RUOLI E ORGANIZZAZIONE
  // ==========================================
  'itil-pim-3-1': {
    content: `
# L'Incident Manager

Il punto di riferimento per l'intera pratica.

## Responsabilità:
- **Supervisione**: Controllo che i ticket avanzino.
- **Escalation**: Decidere il passaggio ai "piani alti".
- **Reporting**: Performance mensili.

## Approfondimento per l'Esame
L'Incident Manager non deve essere un "mago del codice", ma un "mago del coordinamento". Durante una crisi, la sua voce deve essere quella che guida i vari team tecnici verso un unico obiettivo.

## Riassunto
L'Incident Manager è l'arbitro del processo. Si assicura che si giochino le regole e che il tempo non scada.
`
  },
  'itil-pim-3-2': {
    content: `
# Swarming vs Tiered Support

Due filosofie diverse di collaborazione.

## Tiered Support (Livelli):
Organizzazione gerarchica (L1, L2, L3). Ottima per l'efficienza dei costi su grandi volumi.

## Swarming (Collaborazione):
Focus immediato di esperti multidisciplinari. Ottima per velocità e incidenti complessi/nuovi.

## Approfondimento per l'Esame
ITIL 4 focalizza molto sullo **Swarming** come evoluzione moderna. Evita il "ping-pong" dei ticket tra team diversi, aumentando la condivisione della conoscenza. Tuttavia, all'esame, sappi che entrambi possono coesistere.

## Riassunto
Tiered = Catena di montaggio. Swarming = Task force. Scegli quella giusta in base all'impatto.
`
  },
  'itil-pim-3-3': {
    content: `
# Il Ruolo degli Utenti e il Service Desk

I partner della risoluzione.

## Self-Help (Shift-Left):
Dare agli utenti gli strumenti per risolversi i problemi da soli (Knowledge Base, Portali).

## Approfondimento per l'Esame
Il **Service Desk** è il "cuore" operativo. Ma l'utente è colui che *co-crea* il valore della risoluzione. Senza il feedback dell'utente, non puoi mai essere sicuro che l'incidente sia davvero chiuso.

## Riassunto
Shift-Left = Empowerment dell'utente. Meno chiamate al Service Desk, utenti più felici e risoluzioni istantanee.
`
  },

  // ==========================================
  // TOPIC 4: FLUSSI DI VALORE E PROCESSI
  // ==========================================
  'itil-pim-4-1': {
    content: `
# Ciclo di Vita dell'Incidente

Dal sintomo alla chiusura.

1. **Logging**: Registrare.
2. **Categorizzazione**: Definire il "cosa".
3. **Prioritizzazione**: Definire il "quando".
4. **Risoluzione**: Fix o Workaround.
5. **Chiusura**: Validazione utente.

## Approfondimento per l'Esame
Attenzione alla **Priorità**. È sempre data da Impatto (Business risk) x Urgenza (Time need). Se un manager chiede di alzare la priorità "perché sì", l'Incident Manager deve saper difendere la matrice oggettiva.

## Riassunto
Un processo senza registrazione è un caos. Un processo senza priorità è un naufragio.
`
  },
  'itil-pim-4-2': {
    content: `
# Integrazione con Change e Problem

Nessuna pratica è un'isola.

- **Problem**: Trova la causa, riduce gli incidenti futuri.
- **Change**: Permette modifiche sicure durante la risoluzione (Emergency Changes).

## Approfondimento per l'Esame
I **Cambiamenti di Emergenza** sono cruciali. Seguono un workflow accelerato ma mantengono rigore documentale. Risolvere un incidente "crackando" il sistema senza un Change registrato è un rischio enorme per la stabilità.

## Riassunto
Incident cura il paziente. Problem fa l'autopsia per i posteri. Change è il chirurgo che opera.
`
  },
  'itil-pim-4-3': {
    content: `
# Major Incidents (MIM)

L'allarme rosso aziendale.

## Caratteristiche:
- MIM Team dedicato.
- Procedura accelerata.
- Comunicazione costante (ogni 15-30 min).

## Approfondimento per l'Esame
Per un Major Incident, la Post-Incident Review è **obbligatoria**, non opzionale. È qui che si decidono gli investimenti per prevenire disastri simili in futuro.

## Riassunto
Major Incident = Crisi. Richiede una leadership forte e la sospensione delle attività ordinarie della task force coinvolta.
`
  },

  // ==========================================
  // TOPIC 5: INFORMAZIONE E TECNOLOGIA
  // ==========================================
  'itil-pim-5-1': {
    content: `
# Strumenti ITSM e CMDB

Il sistema nervoso della pratica.

## ITSM Tool:
Centralizza ticket, SLA, workflow. (es. ServiceNow, Jira).

## CMDB:
Mappa i pezzi del puzzle (CIs) e le loro relazioni.

## Approfondimento per l'Esame
Il CMDB trasforma l'Incident Management da "cieco" a "veggente". Sapere che un database rotto spegne anche il sito e-commerce permette di assegnare la priorità P1 istantaneamente invece di aspettare le lamentele dei clienti.

## Riassunto
ITSM registra cosa succede. CMDB spiega perché ci dovrebbe importare.
`
  },
  'itil-pim-5-2': {
    content: `
# Automazione e Self-Healing

Il futuro è oggi.

- **Self-Healing**: Script che riavviano servizi crashati automaticamente.
- **Monitoring Integration**: Il monitor apre il ticket prima dell'utente.

## Approfondimento per l'Esame
L'automazione riduce l'errore umano e l'MTTR. Tuttavia, sistemi troppo complessi di automazione senza supervisione possono causare "tempeste di incidenti" se configurati male (noise).

## Riassunto
Automazione = Forza lavoro instancabile. Rileva, analizza e fixa mentre noi dormiamo.
`
  },
  'itil-pim-5-3': {
    content: `
# Collaborazione e ChatOps

Comunicare alla velocità della luce.

- **Slack/Teams Integration**: Notifiche real-time.
- **Bridge Lines**: Chiamate aperte per i Major Incidents.

## Approfondimento per l'Esame
**ChatOps** non è solo "parlare", è "agire". Eseguire comodi di diagnostica direttamente dall'interfaccia di chat è il gold standard moderno per la velocità di risposta.

## Riassunto
La collaborazione batte l'isolamento. Uno strumento di chat integrato vale più di mille email perse.
`
  },
};
