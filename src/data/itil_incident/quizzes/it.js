export const quizzes_it = {
  // Topic 1: Concetti e Terminologia (15 domande)
  1: [
    {
      id: "itil-pim-1-q1",
      question: "In ITIL 4, come viene definito un 'Incidente'?",
      options: [
        "Una richiesta di un utente per un nuovo account",
        "Un'interruzione non pianificata o una riduzione della qualità di un servizio",
        "Un cambiamento programmato a un componente dell'infrastruttura",
        "La causa radice di uno o più errori nel sistema"
      ],
      correctAnswer: 1,
      explanation: "Un incidente è specificamente un'interruzione non pianificata o un degrado della qualità del servizio. Se è pianificato, è un cambiamento (Change)."
    },
    {
      id: "itil-pim-1-q2",
      question: "Qual è l'obiettivo primario della pratica di Incident Management?",
      options: [
        "Identificare la causa radice dei problemi",
        "Gestire il ciclo di vita di tutti i cambiamenti",
        "Ripristinare il normale funzionamento del servizio il più rapidamente possibile",
        "Fornire un punto di contatto unico per tutte le richieste degli utenti"
      ],
      correctAnswer: 2,
      explanation: "L'obiettivo principale è il ripristino rapido del servizio per minimizzare l'impatto negativo sulle attività di business."
    },
    {
      id: "itil-pim-1-q3",
      question: "Cos'è un 'Workaround' secondo ITIL 4?",
      options: [
        "Una soluzione definitiva che elimina la causa radice",
        "Un metodo per aggirare il processo di Incident Management",
        "Una soluzione temporanea che riduce o elimina l'impatto di un incidente",
        "Un aggiornamento hardware programmato"
      ],
      correctAnswer: 2,
      explanation: "Un workaround è una soluzione temporanea usata per ripristinare il servizio quando non è ancora disponibile una risoluzione definitiva."
    },
    {
      id: "itil-pim-1-q4",
      question: "In che modo l'accumulo di workaround non risolti influisce sull'organizzazione?",
      options: [
        "Riduce i costi operativi a lungo termine",
        "Aumenta il debito tecnico e la complessità",
        "Migliora la soddisfazione degli utenti",
        "Elimina la necessità del Problem Management"
      ],
      correctAnswer: 1,
      explanation: "I workaround temporanei che non vengono mai risolti definitivamente portano al debito tecnico, rendendo i sistemi più fragili e difficili da gestire."
    },
    {
      id: "itil-pim-1-q5",
      question: "Quale di questi è un esempio di 'Incidente'?",
      options: [
        "Un utente chiede come resettare la password",
        "L'installazione programmata di una patch di sicurezza",
        "Il server email smette di rispondere improvvisamente",
        "La richiesta di un nuovo monitor per un dipendente"
      ],
      correctAnswer: 2,
      explanation: "Il crash del server email è un'interruzione non pianificata, quindi un incidente. Reset password e nuovo monitor sono richieste di servizio."
    },
    {
      id: "itil-pim-1-q6",
      question: "Qual è la differenza chiave tra Incidente e Problema?",
      options: [
        "L'incidente riguarda il futuro, il problema il passato",
        "L'incidente si concentra sul ripristino, il problema sulla causa radice",
        "Non c'è differenza, sono termini intercambiabili",
        "Gli incidenti sono gestiti solo dal Service Desk"
      ],
      correctAnswer: 1,
      explanation: "L'Incident Management si occupa di 'riparare' velocemente, mentre il Problem Management si occupa di capire 'perché' è successo per evitare che riaccada."
    },
    {
      id: "itil-pim-1-q7",
      question: "Cosa si intende per 'Stato Normale del Servizio'?",
      options: [
        "Il servizio che funziona secondo gli accordi di livello (SLA)",
        "Il servizio durante una finestra di manutenzione",
        "Il servizio quando tutti i server sono spenti",
        "Il servizio con tutti i workaround applicati"
      ],
      correctAnswer: 0,
      explanation: "Lo stato normale è quello definito dai requisiti operativi e dagli SLA concordati con il business."
    },
    {
      id: "itil-pim-1-q8",
      question: "Quale parametro definisce la misura della gravità di un incidente in base all'effetto sul business?",
      options: [
        "Urgenza",
        "Priorità",
        "Impatto",
        "Severità"
      ],
      correctAnswer: 2,
      explanation: "L'Impatto misura quanto l'incidente sia grave per l'organizzazione (es. numero di utenti o processi coinvolti)."
    },
    {
      id: "itil-pim-1-q9",
      question: "Quale parametro indica quanto velocemente l'incidente deve essere risolto?",
      options: [
        "Priorità",
        "Urgenza",
        "Impatto",
        "Timeline"
      ],
      correctAnswer: 1,
      explanation: "L'Urgenza riflette la velocità necessaria per la risoluzione dal punto di vista del business."
    },
    {
      id: "itil-pim-1-q10",
      question: "La 'Priorità' di un incidente è solitamente il risultato di:",
      options: [
        "Urgenza e Costo",
        "Impatto e Urgenza",
        "Numero di ticket aperti",
        "Disponibilità dei tecnici"
      ],
      correctAnswer: 1,
      explanation: "La matrice della priorità incrocia Impatto e Urgenza per determinare l'ordine di gestione degli incidenti."
    },
    {
      id: "itil-pim-1-q11",
      question: "Quale di questi NON è un obiettivo dell'Incident Management?",
      options: [
        "Eliminare la causa radice di un errore",
        "Mantenere la soddisfazione degli utenti",
        "Ripristinare il servizio",
        "Registrare tutti gli incidenti"
      ],
      correctAnswer: 0,
      explanation: "L'eliminazione della causa radice è l'obiettivo del Problem Management, non dell'Incident Management."
    },
    {
      id: "itil-pim-1-q12",
      question: "Cosa si intende per 'Debito Tecnico'?",
      options: [
        "Il costo dell'hardware non ancora pagato",
        "L'effetto a lungo termine di workaround non risolti e soluzioni rapide",
        "Una multa pagata per violazione degli SLA",
        "Il budget assegnato al team di sviluppo"
      ],
      correctAnswer: 1,
      explanation: "Il debito tecnico è l'accumulo di lavoro arretrato e complessità dovuto a scorciatoie prese durante la risoluzione degli incidenti."
    },
    {
      id: "itil-pim-1-q13",
      question: "Qual è la relazione tra Incidente e 'Stato Normale'?",
      options: [
        "Un incidente porta il servizio oltre lo stato normale",
        "Un incidente è una deviazione dallo stato normale del servizio",
        "Lo stato normale è definito solo durante un incidente",
        "Non c'è relazione"
      ],
      correctAnswer: 1,
      explanation: "L'incidente è per definizione una deviazione o un'interruzione di quanto considerato 'funzionamento normale'."
    },
    {
      id: "itil-pim-1-q14",
      question: "Il 'Sintomo' di un problema è solitamente registrato come:",
      options: [
        "Un Cambiamento",
        "Un Incidente",
        "Una Richiesta",
        "Un Rilascio"
      ],
      correctAnswer: 1,
      explanation: "Gli utenti segnalano sintomi, che vengono registrati come incidenti."
    },
    {
      id: "itil-pim-1-q15",
      question: "Cosa definisce se un evento è un Incidente o una Richiesta?",
      options: [
        "Il costo della soluzione",
        "La natura dell'evento (rottura vs nuovo bisogno)",
        "Il tempo impiegato per risolverlo",
        "L'ora del giorno in cui accade"
      ],
      correctAnswer: 1,
      explanation: "L'incidente riguarda un'interruzione/degrado; la richiesta riguarda qualcosa di standard o nuovo richiesto dall'utente."
    }
  ],

  // Topic 2: Practice Success Factors (PSFs) (15 domande)
  2: [
    {
      id: "itil-pim-2-q1",
      question: "Quanti sono i Practice Success Factors (PSFs) definiti per l'Incident Management in ITIL 4?",
      options: ["Due", "Tre", "Quattro", "Cinque"],
      correctAnswer: 1,
      explanation: "I PSF per l'Incident Management sono tre (Ripristino rapido, Gestione Stakeholders, Analisi e Miglioramento)."
    },
    {
      id: "itil-pim-2-q2",
      question: "Qual è l'obiettivo primario del PSF 1 (Ripristino rapido)?",
      options: [
        "Ridurre il numero di telefonate",
        "Assicurare efficacia ed efficienza nel ripristino del servizio",
        "Aumentare il numero di dipendenti",
        "Vendere più servizi"
      ],
      correctAnswer: 1,
      explanation: "Il focus è sulla velocità e precisione del ripristino per minimizzare il downtime."
    },
    {
      id: "itil-pim-2-q3",
      question: "Il PSF 2 (Gestione Stakeholders) si concentra su:",
      options: [
        "Installazione di nuovo hardware",
        "Comunicazione e gestione delle aspettative",
        "Scrittura di codice software",
        "Pulizia dei database"
      ],
      correctAnswer: 1,
      explanation: "La gestione degli stakeholder riguarda il mantenere informate le persone e gestire la loro percezione del servizio."
    },
    {
      id: "itil-pim-2-q4",
      question: "In che modo 'Analisi e Miglioramento' (PSF 3) aiuta l'organizzazione?",
      options: [
        "Identificando opportunità per ottimizzare la pratica e ridurre incidenti futuri",
        "Aumentando la velocità di internet",
        "Riducendo il costo delle licenze software",
        "Eliminando la necessità di fare backup"
      ],
      correctAnswer: 0,
      explanation: "L'analisi dei dati permette di imparare dagli errori e migliorare costantemente il processo."
    },
    {
      id: "itil-pim-2-q5",
      question: "Quale di queste è una componente essenziale della 'Gestione degli Stakeholders'?",
      options: [
        "La riparazione fisica dei cavi",
        "La trasparenza nella comunicazione",
        "L'acquisto di nuovi monitor",
        "La modifica della password di root"
      ],
      correctAnswer: 1,
      explanation: "La trasparenza costruisce fiducia con gli utenti anche durante i disservizi."
    },
    {
      id: "itil-pim-2-q6",
      question: "In quale PSF rientra la definizione dei 'Modelli di Incidente'?",
      options: [
        "Gestione Stakeholders",
        "Ripristino rapido dei servizi",
        "Miglioramento continuo",
        "Problem Management"
      ],
      correctAnswer: 1,
      explanation: "I modelli di incidente sono procedure predefinite che velocizzano il ripristino (PSF 1)."
    },
    {
      id: "itil-pim-2-q7",
      question: "Quale di queste è una metrica tipica per misurare il PSF 1?",
      options: [
        "Numero di nuovi clienti",
        "Mean Time to Repair (MTTR)",
        "Budget speso in marketing",
        "Numero di linee di codice scritte"
      ],
      correctAnswer: 1,
      explanation: "L'MTTR misura il tempo medio necessario per riparare un servizio, riflettendo la velocità di ripristino."
    },
    {
      id: "itil-pim-2-q8",
      question: "Cosa garantisce che l'organizzazione impari dagli incidenti passati?",
      options: [
        "L'archiviazione dei ticket senza analisi",
        "L'integrazione dell'Incident Management con il miglioramento continuo",
        "L'eliminazione dei tecnici responsabili",
        "L'aumento della priorità di tutti gli incidenti"
      ],
      correctAnswer: 1,
      explanation: "Analizzare i dati degli incidenti per identificare trend e aree di debolezza è parte del terzo PSF."
    },
    {
      id: "itil-pim-2-q9",
      question: "Quale azione supporta la trasparenza verso gli utenti durante un incidente critico?",
      options: [
        "Nascondere l'entità del problema per non spaventarli",
        "Pubblicare aggiornamenti regolari su una Service Status Page",
        "Disattivare il centralino del Service Desk",
        "Inviare email solo a risoluzione avvenuta"
      ],
      correctAnswer: 1,
      explanation: "La comunicazione proattiva e trasparente è essenziale per la gestione degli stakeholder (PSF 2)."
    },
    {
      id: "itil-pim-2-q10",
      question: "Il 'First Fix Rate' misura:",
      options: [
        "Quanto velocemente viene aperto il primo ticket del giorno",
        "La percentuale di incidenti risolti al primo contatto dal Service Desk",
        "Il costo della prima riparazione effettuata",
        "Quanti incidenti sono causati dal primo cambiamento dell'anno"
      ],
      correctAnswer: 1,
      explanation: "Un alto First Fix Rate indica un'ottima capacità di ripristino al primo livello di supporto."
    },
    {
      id: "itil-pim-2-q11",
      question: "Il focus sull''Efficacia' nel PSF 1 significa che:",
      options: [
        "L'incidente deve essere risolto correttamente, non solo velocemente",
        "Il tecnico deve essere simpatico",
        "Il costo deve essere il più basso possibile",
        "Tutti i server devono essere sostituiti"
      ],
      correctAnswer: 0,
      explanation: "L'efficacia riguarda il raggiungimento della risoluzione corretta che soddisfa le esigenze del business."
    },
    {
      id: "itil-pim-2-q12",
      question: "In che modo il PSF 2 aiuta a ridurre la frustrazione degli utenti?",
      options: [
        "Promettendo risoluzioni impossibili",
        "Fornendo aggiornamenti accurati e gestendo le aspettative",
        "Regalando gadget aziendali",
        "Spiegando quanto è complicato il lavoro tecnico"
      ],
      correctAnswer: 1,
      explanation: "Sapere cosa sta succedendo riduce l'incertezza e la frustrazione dell'utente."
    },
    {
      id: "itil-pim-2-q13",
      question: "Quale di queste attività è parte del PSF 3?",
      options: [
         "Rifornimento della cancelleria",
         "Revisione post-incidente dei Major Incident",
         "Installazione di condizionatori",
         "Cambio dei loghi aziendali"
      ],
      correctAnswer: 1,
      explanation: "Le PIR (Post-Incident Review) sono fondamentali per analizzare i successi e i fallimenti."
    },
    {
      id: "itil-pim-2-q14",
      question: "Il concetto di 'Shift-Left' è strettamente legato a quale PSF?",
      options: [
        "PSF 1 (Ripristino rapido)",
        "Nessuno di questi",
        "PSF 3 (Analisi)",
        "Cambio di ufficio"
      ],
      correctAnswer: 0,
      explanation: "Spostare la risoluzione verso l'utente o il Service Desk (Shift-Left) accelera drammaticamente il ripristino (PSF 1)."
    },
    {
      id: "itil-pim-2-q15",
      question: "La 'Soddisfazione dell'Utente' è un indicatore chiave per:",
      options: [
        "Tutti i PSF, specialmente il PSF 2",
        "Solo il team marketing",
        "I fornitori di elettricità",
        "Nessuno, conta solo la tecnica"
      ],
      correctAnswer: 0,
      explanation: "Sebbene tutti i PSF contribuiscano, la gestione degli stakeholder monitora direttamente la percezione e la soddisfazione."
    }
  ],

  // Topic 3: Ruoli e Organizzazione (15 domande)
  3: [
    {
      id: "itil-pim-3-q1",
      question: "Chi ha la responsabilità generale del successo della pratica di Incident Management?",
      options: [
        "Il CEO dell'azienda",
        "L'Incident Manager",
        "L'utente che ha aperto il ticket",
        "Il sistemista junior"
      ],
      correctAnswer: 1,
      explanation: "L'Incident Manager è il proprietario del processo e si assicura che venga seguito correttamente."
    },
    {
      id: "itil-pim-3-q2",
      question: "Cosa si intende per 'Swarming'?",
      options: [
        "Un attacco hacker coordinato",
        "Un modello di supporto dove diversi esperti collaborano simultaneamente fin dall'inizio",
        "L'assegnazione sequenziale di un ticket da L1 a L2 a L3",
        "L'invio massivo di email agli utenti"
      ],
      correctAnswer: 1,
      explanation: "Lo swarming sostituisce l'escalation gerarchica con una collaborazione immediata e dinamica tra esperti."
    },
    {
      id: "itil-pim-3-q3",
      question: "Qual è il ruolo del Service Desk nell'Incident Management?",
      options: [
        "Solo pulire l'hardware rotto",
        "Fungere da punto di contatto unico e risolvere incidenti semplici",
        "Sviluppare nuove applicazioni aziendali",
        "Gestire esclusivamente i contratti con i fornitori"
      ],
      correctAnswer: 1,
      explanation: "Il Service Desk è solitamente il primo punto di contatto e risolve la maggior parte degli incidenti standard."
    },
    {
      id: "itil-pim-3-q4",
      question: "Quando deve avvenire l'escalation gerarchica (Functional Escalation)?",
      options: [
        "Ogni volta che viene aperto un ticket",
        "Quando il livello attuale di supporto non ha le competenze o il tempo per risolvere l'incidente",
        "Solo quando l'utente si lamenta",
        "Alla fine della giornata lavorativa"
      ],
      correctAnswer: 1,
      explanation: "L'escalation funzionale avviene quando è necessario coinvolgere team tecnici più specializzati."
    },
    {
      id: "itil-pim-3-q5",
      question: "In che modo l'utente contribuisce all'Incident Management?",
      options: [
        "Riparando i server autonomamente",
        "Fornendo informazioni accurate e tempestive e validando la risoluzione",
        "Pagando una penale per ogni incidente aperto",
        "Decidendo quali tecnologie l'IT deve acquistare"
      ],
      correctAnswer: 1,
      explanation: "La collaborazione dell'utente è vitale per una diagnosi corretta e per confermare che il problema sia sparito."
    },
    {
      id: "itil-pim-3-q6",
      question: "Cosa si intende per supporto di 'Livello 3' (L3)?",
      options: [
        "Il primo contatto telefonico",
        "Esperti interni senior o il supporto del fornitore (Vendor)",
        "Il team di pulizia degli uffici",
        "Gli utenti finali stessi"
      ],
      correctAnswer: 1,
      explanation: "L'L3 rappresenta il massimo livello di specializzazione tecnica, spesso esterno all'organizzazione."
    },
    {
      id: "itil-pim-3-q7",
      question: "L'Incident Manager deve avere autorità per:",
      options: [
        "Licenziare il personale tecnico",
        "Coordinare le risorse di diversi team durante la gestione di un incidente",
        "Riscrivere la strategia di marketing dell'azienda",
        "Ignorare le policy di sicurezza"
      ],
      correctAnswer: 1,
      explanation: "L'Incident Manager deve poter dirigere i vari team tecnici verso la risoluzione comune."
    },
    {
      id: "itil-pim-3-q8",
      question: "Qual è il vantaggio principale del supporto a livelli (Tiered Support)?",
      options: [
        "È più veloce dello swarming per ogni caso",
        "Permette di gestire carichi di lavoro enormi in modo strutturato ed economico",
        "Non richiede alcuna documentazione",
        "Elimina completamente il bisogno di specialisti"
      ],
      correctAnswer: 1,
      explanation: "La struttura a livelli permette di filtrare gli incidenti semplici a basso costo, scalando solo quelli complessi."
    },
    {
      id: "itil-pim-3-q9",
      question: "Cosa accade se manca un Incident Manager dedicato durante un Major Incident?",
      options: [
        "L'incidente si risolve da solo",
        "C'è il rischio di confusione, mancanza di leadership e ritardi nella comunicazione",
        "Tutti i dipendenti ottengono un aumento",
        "Il Service Desk chiude automaticamente tutti i ticket"
      ],
      correctAnswer: 1,
      explanation: "La leadership è critica durante le crisi; senza coordinamento, gli sforzi risultano spesso frammentati."
    },
    {
      id: "itil-pim-3-q10",
      question: "Gli stakeholder esterni possono includere:",
      options: [
        "Solo i dipendenti IT",
        "Fornitori, partner e enti regolatori",
        "Esclusivamente gli azionisti",
        "Nessuno, l'ITIL riguarda solo i processi interni"
      ],
      correctAnswer: 1,
      explanation: "I partner e i fornitori esterni sono spesso parte integrante della risoluzione o della comunicazione."
    },
    {
      id: "itil-pim-3-q11",
      question: "Il 'Major Incident Team' è solitamente:",
      options: [
        "Lo stesso team che pulisce l'ufficio",
        "Un gruppo multidisciplinare convocato appositamente per le crisi",
        "Sempre solo il Service Desk",
        "Esterno all'azienda per legge"
      ],
      correctAnswer: 1,
      explanation: "I Major Incident richiedono competenze diverse che spesso risiedono in team differenti."
    },
    {
      id: "itil-pim-3-q12",
      question: "Una 'Matrice di Escalation' serve a:",
      options: [
        "Capire chi chiamare e quando in base alla priorità dell'incidente",
        "Calcolare i bonus dei dipendenti",
        "Disegnare l'arredamento dell'ufficio",
        "Tenere traccia dei cambi di versione software"
      ],
      correctAnswer: 0,
      explanation: "La matrice definisce i tempi e i responsabili per i passaggi di livello dei ticket."
    },
    {
      id: "itil-pim-3-q13",
      question: "Quale competenza NON è tipicamente richiesta ad un Incident Manager?",
      options: [
        "Leadership",
        "Capacità di programmare in 10 linguaggi diversi",
        "Gestione dello stress",
        "Ottima comunicazione"
      ],
      correctAnswer: 1,
      explanation: "L'Incident Manager è un ruolo gestionale e di coordinamento, non necessariamente di sviluppo software."
    },
    {
      id: "itil-pim-3-q14",
      question: "In che modo l'automazione influisce sui ruoli dell'Incident Management?",
      options: [
        "Elimina completamente il bisogno di esseri umani",
        "Libera i tecnici dai task ripetitivi permettendo loro di concentrarsi su casi complessi",
        "Aumenta il numero di errori manuali",
        "Rende il Service Desk più lento"
      ],
      correctAnswer: 1,
      explanation: "L'automazione gestisce il basso valore aggiunto, potenziando il ruolo umano nei casi critici."
    },
    {
      id: "itil-pim-3-q15",
      question: "Il ruolo di 'Consumer' (Utente/Cliente) in Incident Management è:",
      options: [
        "Passivo: aspettano e non devono fare nulla",
        "Attivo: co-creano valore fornendo dati e validando risoluzioni",
        "Delegato completamente al reparto acquisti",
        "Irrilevante per la risoluzione tecnica"
      ],
      correctAnswer: 1,
      explanation: "ITIL 4 enfatizza la co-creazione del valore: l'utente è parte del processo."
    }
  ],

  // Topic 4: Flussi di Valore e Processi (15 domande)
  4: [
    {
      id: "itil-pim-4-q1",
      question: "Qual è la prima fase del ciclo di vita di un incidente?",
      options: [
        "Risoluzione",
        "Identificazione e Registrazione",
        "Prioritizzazione",
        "Chiusura"
      ],
      correctAnswer: 1,
      explanation: "Tutto comincia con il rilevamento del problema e la sua immediata registrazione nel sistema."
    },
    {
      id: "itil-pim-4-q2",
      question: "Perché la 'Categorizzazione' degli incidenti è importante?",
      options: [
        "Per rendere il database più colorato",
        "Per facilitare il routing corretto e l'analisi dei trend",
        "Per nascondere gli errori dei tecnici",
        "Perché è richiesto dalla legge sulla privacy"
      ],
      correctAnswer: 1,
      explanation: "Sapere se un incidente riguarda il 'Network' o 'l'Email' aiuta a mandarlo al team giusto e a capire quali sistemi sono più fragili."
    },
    {
      id: "itil-pim-4-q3",
      question: "Cos'è un 'Major Incident'?",
      options: [
        "Un incidente che coinvolge il CEO",
        "Un incidente con impatto e urgenza massimi che richiede una procedura speciale",
        "Qualsiasi incidente che duri più di un'ora",
        "Un incidente divertente da risolvere"
      ],
      correctAnswer: 1,
      explanation: "I Major Incident hanno una gravità tale da richiedere l'attivazione di team di crisi e canali di comunicazione dedicati."
    },
    {
      id: "itil-pim-4-q4",
      question: "Quale pratica ITIL si occupa di approvare le modifiche necessarie a risolvere un incidente?",
      options: [
        "Service Desk",
        "Change Enablement",
        "Service Configuration Management",
        "Incident Management stesso"
      ],
      correctAnswer: 1,
      explanation: "Se risolvendo un incidente si deve modificare un server, si deve passare per il processo di Change Enablement (spesso via Emergency Change)."
    },
    {
      id: "itil-pim-4-q5",
      question: "Cosa contiene il 'Configuration Management Database' (CMDB) di utile per l'Incident Management?",
      options: [
        "La lista della spesa dei dipendenti",
        "Le relazioni tra i servizi e i componenti tecnologici (CIs)",
        "Esclusivamente le password degli utenti",
        "I manuali di istruzioni di ogni device"
      ],
      correctAnswer: 1,
      explanation: "Il CMDB permette di capire che se il 'Server X' cade, anche il 'Servizio di Pagamento Y' smetterà di funzionare."
    },
    {
      id: "itil-pim-4-q6",
      question: "Chi deve confermare la chiusura definitiva di un incidente?",
      options: [
        "L'amministratore del database",
        "L'utente o chi ha segnalato l'incidente",
        "L'Incident Manager prima di andare a casa",
        "Il sistema in modo automatico dopo 5 minuti"
      ],
      correctAnswer: 1,
      explanation: "L'incidente è chiuso correttamente solo quando l'utente conferma che il servizio è tornato operativo."
    },
    {
      id: "itil-pim-4-q7",
      question: "La fase di 'Diagnosi e Investigazione' si concentra su:",
      options: [
        "Capire il sintomo e trovare un modo per ripristinare il servizio",
        "Trovare chi ha commesso l'errore per punirlo",
        "Aspettare che l'utente risolva da solo",
        "Cancellare i log per liberare spazio"
      ],
      correctAnswer: 0,
      explanation: "L'obiettivo è la comprensione dei sintomi per applicare un workaround o una soluzione rapida."
    },
    {
      id: "itil-pim-4-q8",
      question: "Cosa si attiva durante un Major Incident?",
      options: [
        "La procedura di licenziamento",
        "Il Major Incident Management team (crisi)",
        "Le vacanze dei manager",
        "Il backup automatico di tutti i PC degli utenti"
      ],
      correctAnswer: 1,
      explanation: "Un Major Incident attiva workflow accelerati e task force dedicate."
    },
    {
      id: "itil-pim-4-q9",
      question: "L'Integrazione tra Incident Management e Monitoring and Event Management serve a:",
      options: [
        "Aumentare il numero di email dei tecnici",
        "Rilevare e aprire automaticamente gli incidenti prima che l'utente se ne accorga",
        "Diminuire la banda della rete",
        "Sostituire completamente l'intervento umano"
      ],
      correctAnswer: 1,
      explanation: "Il monitoraggio automatico permette un approccio proattivo al rilevamento degli incidenti."
    },
    {
      id: "itil-pim-4-q10",
      question: "Un Post-Incident Review (PIR) dovrebbe essere eseguito:",
      options: [
        "Per ogni singolo ticket aperto (anche i più piccoli)",
        "Solo dopo incidenti complessi o maggiori per identificare miglioramenti",
        "A sorpresa ogni sei mesi",
        "Mai, è solo una perdita di tempo"
      ],
      correctAnswer: 1,
      explanation: "I PIR sono riservati a situazioni significative per estrarre il massimo insegnamento senza sovraccaricare il team."
    },
    {
      id: "itil-pim-4-q11",
      question: "L'instradamento di un incidente a un team tecnico specifico si chiama:",
      options: [
        "Functional Escalation",
        "Hierarchical Escalation",
        "Service Request Fulfillment",
        "Hiring"
      ],
      correctAnswer: 0,
      explanation: "L'escalation funzionale sposta il ticket verso competenze tecniche più profonde."
    },
    {
      id: "itil-pim-4-q12",
      question: "Qual è lo scopo principale del 'Logging'?",
      options: [
        "Occupare spazio su disco",
        "Garantire la tracciabilità e la continuità della gestione",
        "Punire il tecnico più lento",
        "Misurare la velocità di digitazione"
      ],
      correctAnswer: 1,
      explanation: "La registrazione (logging) assicura che nessuna informazione vada persa nel passaggio tra team."
    },
    {
      id: "itil-pim-4-q13",
      question: "Incident Management e Service Level Management collaborano per:",
      options: [
        "Definire i target di risoluzione e monitorarne il rispetto",
        "Abbassare gli stipendi",
        "Scegliere il colore dei server",
        "Ignorare le esigenze degli utenti"
      ],
      correctAnswer: 0,
      explanation: "SLM definisce gli SLA (accordi), IM deve rispettarli operativamente."
    },
    {
      id: "itil-pim-4-q14",
      question: "In che modo l'Incident Management contribuisce alla catena del valore (SVS)?",
      options: [
         "Migliorando la disponibilità dei servizi nel tempo",
         "Solo durante la fase di progettazione",
         "Eliminando tutti i costi IT",
         "Vendendo nuovi prodotti"
      ],
      correctAnswer: 0,
      explanation: "Incident Management opera principalmente su 'Deliver and Support' per mantenere il valore operativo."
    },
    {
      id: "itil-pim-4-q15",
      question: "Il termine 'Ownership' di un incidente significa che:",
      options: [
        "Il tecnico possiede fisicamente il server rotto",
        "Qualcuno è responsabile di monitorare l'incidente fino alla sua chiusura, indipendentemente da chi lo risolve",
        "L'utente deve pagare per la riparazione",
        "L'incidente è proprietà privata dell'azienda"
      ],
      correctAnswer: 1,
      explanation: "L'ownership garantisce che il ticket non cada nel dimenticatoio."
    }
  ],

  // Topic 5: Informazione e Tecnologia (15 domande)
  5: [
    {
      id: "itil-pim-5-q1",
      question: "Qual è il ruolo principale di uno strumento ITSM (es. ServiceNow, Jira)?",
      options: [
        "Sostituire la necessità di avere un Incident Manager",
        "Fornire un sistema centralizzato per registrare, tracciare e gestire i ticket",
        "Essere usato solo per scopi amministrativi e fiscali",
        "Monitorare la temperatura delle stanze server"
      ],
      correctAnswer: 1,
      explanation: "Lo strumento ITSM è il repository centrale del workflow dell'incidente."
    },
    {
      id: "itil-pim-5-q2",
      question: "Cosa si intende per 'ChatOps'?",
      options: [
        "Parlare dei propri gatti in chat durante il lavoro",
        "Risolvere incidenti tramite integrazioni tra chat di gruppo e strumenti di automazione/monitoring",
        "Disabilitare le chat per evitare distrazioni",
        "Usare solo robot per parlare con gli utenti"
      ],
      correctAnswer: 1,
      explanation: "ChatOps permette di eseguire script o visualizzare stati di sistema direttamente dalla chat room del team di supporto."
    },
    {
      id: "itil-pim-5-q3",
      question: "In che modo l'automazione può aiutare il Service Desk?",
      options: [
        "Prendendo decisioni strategiche per l'azienda",
        "Gestendo task ripetitivi come il reset password o l'invio di notifiche di aggiornamento",
        "Riducendo lo stipendio dei dipendenti",
        "Impedendo agli utenti di chiamare"
      ],
      correctAnswer: 1,
      explanation: "L'automazione libera l'essere umano dai lavori a scarso valore aggiunto."
    },
    {
      id: "itil-pim-5-q4",
      question: "Cos'è una 'Known Error Database' (KEDB)?",
      options: [
        "Un database segreto degli hacker",
        "Una libreria di problemi noti e dei relativi workaround",
        "La lista dei tecnici meno bravi",
        "Un catalogo di nuovi prodotti hardware"
      ],
      correctAnswer: 1,
      explanation: "La KEDB permette a tutti di consultare soluzioni già testate per incidenti ricorrenti."
    },
    {
      id: "itil-pim-5-q5",
      question: "Perché è utile l'integrazione tra ITSM e CMDB?",
      options: [
        "Perché rende il software più costoso",
        "Per visualizzare l'impatto di un incidente sui componenti correlati e i servizi dipendenti",
        "Per formattare automaticamente i dischi fissi",
        "Per inviare spam agli stakeholder"
      ],
      correctAnswer: 1,
      explanation: "La vista topologica del CMDB aiuta a mappare la gravità dell'incidente."
    },
    {
      id: "itil-pim-5-q6",
      question: "Un portale di 'Self-Service' efficace dovrebbe offrire:",
      options: [
        "Solo il numero di telefono dell'amministratore delegato",
        "Accesso a Knowledge Base, stato dei servizi e possibilità di risolvere autonomamente problemi comuni",
        "Contenuti pubblicitari",
        "L'accesso a tutti i database aziendali senza protezione"
      ],
      correctAnswer: 1,
      explanation: "Il self-service abilita l'utente e riduce il carico sul Service Desk."
    },
    {
      id: "itil-pim-5-q7",
      question: "Cosa si intende per 'SLA Trigger' in uno strumento di ticketing?",
      options: [
        "Un tasto per cancellare il contratto con l'utente",
        "Un alert automatico che scatta quando un incidente si avvicina alla scadenza dei tempi concordati",
        "Un virus informatico",
        "Un aumento automatico del budget"
      ],
      correctAnswer: 1,
      explanation: "I trigger assicurano che i tempi di risoluzione siano rispettati o scalati in tempo."
    },
    {
      id: "itil-pim-5-q8",
      question: "L'uso dell'Intelligenza Artificiale (AI) nell'Incident Management può servire a:",
      options: [
        "Identificare trend e suggerire risoluzioni basate su milioni di dati storici",
        "Sostituire completamente gli amministratori di rete",
        "Ridurre la sicurezza delle password",
        "Scrivere email divertenti agli utenti"
      ],
      correctAnswer: 0,
      explanation: "L'AI eccelle nel pattern recognition e nel clustering di incidenti simili."
    },
    {
      id: "itil-pim-5-q9",
      question: "Qual è il rischio principale di non avere uno strumento tecnologico integrato?",
      options: [
        "Che i dipendenti siano troppi felici",
        "Silos di informazioni, duplicazione degli sforzi e perdita di dati storici",
        "Un aumento immediato delle vendite",
        "Nessuno, la tecnologia è opzionale"
      ],
      correctAnswer: 1,
      explanation: "Senza centralizzazione, le conoscenze restano isolate e gli incidenti si gestiscono in modo inefficiente."
    },
    {
      id: "itil-pim-5-q10",
      question: "Gli strumenti di 'Monitoraggio' inviano ad un sistema ITSM:",
      options: [
        "Foto dell'ufficio",
        "Segnali (Eventi) che possono essere filtrati e convertiti automaticamente in incidenti",
        "La lista dei siti web visitati dai dipendenti",
        "Solo segnali di errore fatale"
      ],
      correctAnswer: 1,
      explanation: "Non tutti gli eventi sono incidenti; il filtraggio è fondamentale per evitare il rumore operativo."
    },
    {
      id: "itil-pim-5-q11",
      question: "Il 'Remote Control' software permette ai tecnici di:",
      options: [
        "Controllare il computer dell'utente a distanza per diagnosi e fix",
        "Accendere le luci dell'ufficio",
        "Sostituire l'utente nel suo lavoro giornaliero",
        "Giocare ai videogame sui server"
      ],
      correctAnswer: 0,
      explanation: "La teleassistenza è uno strumento chiave per il Service Desk."
    },
    {
      id: "itil-pim-5-q12",
      question: "I tool di 'DashBoard' in un Service Desk servono a:",
      options: [
        "Vedere le foto del profilo degli utenti",
        "Visualizzare in tempo reale KPI come backlogs, MTTR e carichi di lavoro",
        "Nascondere i dati ai manager",
        "Disegnare grafici a caso per impressionare i clienti"
      ],
      correctAnswer: 1,
      explanation: "La visibilità del carico di lavoro permette una gestione dinamica delle priorità."
    },
    {
      id: "itil-pim-5-q13",
      question: "In ITIL 4, 'Informazione e Tecnologia' è:",
      options: [
        "Solo il software di ticketing",
        "Una delle quattro dimensioni della gestione dei servizi",
        "Qualcosa che l' Incident Manager può ignorare",
        "Un costo da tagliare"
      ],
      correctAnswer: 1,
      explanation: "La tecnologia deve essere bilanciata con le altre dimensioni (Organizzazioni, Partner, Flussi)."
    },
    {
      id: "itil-pim-5-q14",
      question: "Il termine 'Machine Learning' applicato agli incidenti serve a:",
      options: [
        "Insegnare ai server come non rompersi mai",
        "Migliorare la precisione della categorizzazione automatica nel tempo",
        "Sostituire l'uso del cervello umano",
        "Inviare email a tutti i dipendenti contemporaneamente"
      ],
      correctAnswer: 1,
      explanation: "Il ML impara dai dati storici per automatizzare task complessi come il routing."
    },
    {
      id: "itil-pim-5-q15",
      question: "Un sistema di 'On-Call Management' tecnologico serve a:",
      options: [
        "Svegliare i tecnici a caso di notte",
        "Garantire che la persona giusta sia reperibile per Major Incident fuori orario",
        "Controllare quante ore dormono i dipendenti",
        "Rispondere alle chiamate di telemarketing"
      ],
      correctAnswer: 1,
      explanation: "La reperibilità tecnologica assicura il rispetto degli SLA anche H24."
    }
  ]
};

export const allQuizzes_it = [
  ...quizzes_it[1],
  ...quizzes_it[2],
  ...quizzes_it[3],
  ...quizzes_it[4],
  ...quizzes_it[5]
];
