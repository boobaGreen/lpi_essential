export const memoryGameData = [
  // Termini e Definizioni
  { command: 'Incidente', description: 'Interruzione non pianificata di un servizio' },
  { command: 'Workaround', description: 'Soluzione temporanea per ripristinare il servizio' },
  { command: 'Problema', description: 'Causa radice di uno o più incidenti' },
  { command: 'Debito Tecnico', description: 'Costo di soluzioni temporanee non risolte' },
  { command: 'Impatto', description: 'Misura della gravità dell\'effetto sul business' },
  { command: 'Urgenza', description: 'Velocità necessaria per la risoluzione' },
  { command: 'Priorità', description: 'Ordine in cui l\'incidente viene gestito' },
  { command: 'Major Incident', description: 'Incidente con impatto e urgenza massimi' },
  { command: 'Swarming', description: 'Collaborazione immediata di diversi esperti' },
  { command: 'Service Desk', description: 'Punto di contatto unico per gli utenti' },
  { command: 'KEDB', description: 'Database degli errori noti e workaround' },
  { command: 'MTTR', description: 'Tempo medio di ripristino del servizio' },
  { command: 'SLA', description: 'Accordo sul livello di servizio concordato' },
  { command: 'Escalation', description: 'Trasferimento dell\'incidente a un team superiore' },
  { command: 'Post-Incident Review', description: 'Analisi post-evento per il miglioramento' },
]

export const trueFalseData = [
  { text: 'Un incidente è sempre causato da un errore umano.', answer: false, explanation: 'No, può essere causato da guasti hardware, software o cause esterne.', difficulty: 1 },
  { text: 'L\'obiettivo principale dell\'Incident Management è trovare la causa radice.', answer: false, explanation: 'L\'obiettivo è ripristinare il servizio rapidamente. Trovare la causa è compito del Problem Management.', difficulty: 1 },
  { text: 'Un workaround può diventare una soluzione permanente se documentato.', answer: true, explanation: 'Sì, se risolve l\'impatto in modo accettabile e definitivo.', difficulty: 1 },
  { text: 'Lo "swarming" prevede che gli incidenti passino sequenzialmente da L1 a L2.', answer: false, explanation: 'Lo swarming prevede la collaborazione simultanea fin dall\'inizio.', difficulty: 2 },
  { text: 'La priorità di un incidente è data da Impatto x Urgenza.', answer: true, explanation: 'Esatto, la matrice di priorità incrocia questi due fattori.', difficulty: 1 },
  { text: 'Il Service Desk è una pratica, non solo un team.', answer: true, explanation: 'In ITIL 4, il Service Desk è sia una funzione che una pratica.', difficulty: 2 },
  { text: 'Tutti gli incidenti devono avere una Post-Incident Review.', answer: false, explanation: 'Solitamente si fa solo per Major Incidents o incidenti complessi.', difficulty: 2 },
  { text: 'La categorizzazione serve a instradare l\'incidente al team corretto.', answer: true, explanation: 'Corretto, aiuta il routing e l\'analisi dei trend.', difficulty: 1 },
  { text: 'Un incidente "Major" richiede procedure di gestione separate.', answer: true, explanation: 'Sì, richiede team di crisi e workflow accelerati.', difficulty: 1 },
  { text: 'Il debito tecnico diminuisce a ogni workaround applicato.', answer: false, explanation: 'Al contrario, l\'accumulo di workaround non risolti aumenta il debito tecnico.', difficulty: 2 },
]

export const terminalChallengeData = [
  { prompt: 'Qual è l\'acronimo per identificare la causa di uno o più incidenti?', answer: 'Problem', hints: ['P...', 'Gestito dopo l\'incidente'], accept: ['Problem', 'Problema'], difficulty: 1 },
  { prompt: 'Soluzione temporanea per ripristinare un servizio degradato?', answer: 'Workaround', hints: ['W...', 'Non è definitiva'], accept: ['Workaround'], difficulty: 1 },
  { prompt: 'Punto di contatto unico per la segnalazione di incidenti?', answer: 'Service Desk', hints: ['S... D...', 'Il primo livello'], accept: ['Service Desk'], difficulty: 1 },
  { prompt: 'Acronimo del database degli errori noti?', answer: 'KEDB', hints: ['K... E... D... B...'], accept: ['KEDB'], difficulty: 2 },
  { prompt: 'Modello di collaborazione dinamica senza escalation lineare?', answer: 'Swarming', hints: ['S...', 'Come uno sciame'], accept: ['Swarming'], difficulty: 2 },
  { prompt: 'Parametro che indica la velocità necessaria di risoluzione?', answer: 'Urgenza', hints: ['U...', 'Business timeline'], accept: ['Urgenza'], difficulty: 1 },
  { prompt: 'Tempo medio per ripristinare un componente o servizio?', answer: 'MTTR', hints: ['Mean Time To...'], accept: ['MTTR'], difficulty: 2 },
  { prompt: 'Documento che definisce i tempi di risposta concordati?', answer: 'SLA', hints: ['S... L... A...'], accept: ['SLA'], difficulty: 1 },
]

export const dragDropData = [
  {
    title: 'Ruoli e Funzioni',
    pairs: [
      { left: 'Incident Manager', right: 'Responsabile del processo' },
      { left: 'Service Desk', right: 'Primo contatto con l\'utente' },
      { left: 'L3 Support', right: 'Esperti senior o vendor' },
      { left: 'User', right: 'Segnala il problema' },
      { left: 'Crisis Team', right: 'Gestisce Major Incidents' },
    ],
    difficulty: 1,
  },
  {
    title: 'Fasi del Ciclo di Vita',
    pairs: [
      { left: 'Logging', right: 'Registrazione iniziale' },
      { left: 'Categorizzazione', right: 'Classificazione del tipo' },
      { left: 'Prioritizzazione', right: 'Definizione dell\'urgenza' },
      { left: 'Diagnosi', right: 'Investigazione del sintomo' },
      { left: 'Chiusura', right: 'Conferma dell\'utente' },
    ],
    difficulty: 2,
  },
]

export const fillGapData = [
  { prompt: 'Un _____ è un\'interruzione non pianificata di un servizio.', answer: 'incidente', hint: 'Termine base', difficulty: 1 },
  { prompt: 'Il _____ tecnico aumenta se i workaround non vengono risolti.', answer: 'debito', hint: 'Metafora finanziaria', difficulty: 2 },
  { prompt: 'L\'obiettivo è ripristinare il servizio il più _____ possibile.', answer: 'rapidamente', hint: 'Questione di tempo', difficulty: 1 },
  { prompt: 'La priorità è determinata da _____ e urgenza.', answer: 'impatto', hint: 'Gravità', difficulty: 1 },
  { prompt: 'Lo _____ permette di evitare l\'escalation gerarchica.', answer: 'swarming', hint: 'Modello "sciame"', difficulty: 3 },
]
