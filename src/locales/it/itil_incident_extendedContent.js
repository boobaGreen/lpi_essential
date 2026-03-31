export const itilIncidentExtendedContent = {
  'itil-pim-1-1': {
    memoryCards: [
      { concept: "Incidente", match: "Interruzione non pianificata del servizio" },
      { concept: "Servizio", match: "Mezzo per co-creare valore" },
      { concept: "Stato Normale", match: "Funzionamento secondo SLA" },
      { concept: "Change", match: "Interruzione pianificata e approvata" }
    ],
    trueFalseStatements: [
      {
        statement: "Un incidente è solo quando un server smette di funzionare del tutto.",
        isTrue: false,
        explanation: "No, anche una riduzione della qualità o lentezza è un incidente."
      },
      {
        statement: "Un'interruzione pianificata per manutenzione è un incidente.",
        isTrue: false,
        explanation: "No, le attività pianificate sono gestire dal Change Enablement."
      }
    ]
  },
  'itil-pim-1-2': {
    memoryCards: [
      { concept: "Workaround", match: "Soluzione temporanea (non definitiva)" },
      { concept: "KEDB", match: "Known Error Database" },
      { concept: "Debito Tecnico", match: "Accumulo di workaround non risolti" },
      { concept: "Problem Management", match: "Ricerca della causa radice" }
    ],
    fillGapSentences: [
      {
        sentence: "L'uso massiccio di workaround temporanei senza mai applicare fix definitivi causa il pericoloso __blank__.",
        blank: "debito tecnico"
      }
    ]
  },
  'itil-pim-3-2': {
    dragDropMatches: [
      { target: "Swarming", match: "Collaborazione simultanea di esperti" },
      { target: "Tiered Support", match: "Passaggio gerarchico L1 -> L2 -> L3" },
      { target: "Service Desk", match: "Primo punto di contatto unico" },
      { target: "Vendor", match: "Supporto esterno di terzo livello" }
    ]
  },
  'itil-pim-4-1': {
    memoryCards: [
      { concept: "Logging", match: "Registrazione obbligatoria del ticket" },
      { concept: "Categorizzazione", match: "Classificazione corretta del tipo" },
      { concept: "Prioritizzazione", match: "Impatto x Urgenza" },
      { concept: "Chiusura", match: "Conferma finale dell'utente" }
    ]
  },
  'itil-pim-5-1': {
    memoryCards: [
      { concept: "ITSM Tool", match: "Software per la gestione dei ticket" },
      { concept: "CMDB", match: "Mappa delle relazioni tra i componenti (CI)" },
      { concept: "SLA Tracker", match: "Monitoraggio dei tempi di risposta" },
      { concept: "Knowledge Base", match: "Articoli e FAQ per la risoluzione" }
    ]
  }
};
