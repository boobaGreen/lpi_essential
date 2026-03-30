export const extendedContent = {
  terminalCommands: [
    {
      command: "kubectl get pods -n kube-system",
      description: "Come vedi l'elenco dei Pod che compongono il Control Plane (API Server, Etcd) di Kubernetes partendo dall'assunto che si trovino nel namespace di sistema?"
    },
    {
      command: "kubectl create deployment nginx --image=nginx:alpine",
      description: "Tuo manager ti chiede di creare un nuovo Deployment di nome 'nginx' basato esplicitamente sull'immagine 'nginx:alpine'. Il modo più veloce ignorando lo yaml (imperativo) per farlo da console?"
    },
    {
      command: "kubectl expose deployment backend --port=8080 --target-port=80 --type=ClusterIP",
      description: "Genera al volo con kubectl un Service di default interno (ClusterIP) sulla porta 8080, per il tuo deployment 'backend' esposto internamente alla porta 80."
    },
    {
      command: "kubectl scale deployment web-app --replicas=5",
      description: "C'è un picco di traffico e ti serve scalare Orizzontalmente (HPA manuale) il deployment 'web-app' per arrivare istantaneamente a 5 Repliche totali. Che comando lanci?"
    },
    {
      command: "kubectl logs deploy/frontend -c logging-sidecar",
      description: "Il deployment 'frontend' contiene due container. Come visualizzi i log testuali di quello chiamato 'logging-sidecar' bypassando il container dell'app principale?"
    }
  ],
  dragDropMatches: [
    { target: "etcd", match: "Chiave-Valore DataStore Consistente" },
    { target: "kube-apiserver", match: "L'endpoint front-end REST" },
    { target: "kube-scheduler", match: "Assegna i nodi ai nuovi Pod" },
    { target: "kubelet", match: "Demone lavoratore sul singol Nodo" },
    { target: "Service Mesh", match: "Envoy Sidecar Pattern" },
    { target: "ReplicaSet", match: "Garantisce X Pod in funzione" },
    { target: "Helm", match: "Apt/Brew del K8s (Package Manager)" },
    { target: "Prometheus", match: "Scraping di Time-Series Metrics" },
    { target: "Tracciamento (Jaeger)", match: "Ricerca i colli di bottiglia latenza L7" },
    { target: "GitOps", match: "Usa GIT come Sorgente Unica (Pull Model)" }
  ],
  memoryCards: [
    { concept: "ArgoCD / Flux", match: "Tools Leader Graduati per il GitOps" },
    { concept: "Deployments", match: "Eseguono aggiornamenti YAML a cascata" },
    { concept: "Labels & Selectors", match: "Sistema basilare di raggruppamento K8s" },
    { concept: "Service: LoadBalancer", match: "Colloquia tramite API con AWS/GCP" },
    { concept: "Service: ClusterIP", match: "IP Interno privato isolato (Database)" },
    { concept: "Secret", match: "Dati Base64 non Crittografati" },
    { concept: "ConfigMap", match: "Variabili Env staccate dall'immagine" },
    { concept: "CNCF", match: "Cloud Native Computing Foundation" }
  ],
  fillGapSentences: [
    {
      sentence: "In un cluster Kubernetes, quando invii tramite CLI il comando per creare 3 repliche, la tua richiesta viene salvata dallo stato Desiderato direttamente nel modulo persistente chiamato __blank__.",
      blank: "etcd"
    },
    {
      sentence: "Il processo di uccisione Kernel istantanea applicato ai container si verifica quando il processo ha esaurito o superato i suoi Limits di memoria. Esso è comunemente siglato nei logs di Kubernetes come __blank__.",
      blank: "OOMKilled"
    },
    {
      sentence: "L'approccio di difesa della Security CNCF afferma che la corazza esterna invalicabile di base che contiene tutto non è il Container né il Codice, ma lo strato hardware fisico chiamato __blank__.",
      blank: "Cloud"
    },
    {
      sentence: "Per isolare logicamente i gruppi di pod e le risorse all'interno dell'host in multi-tenant, senza installare macchine virtuali aggiuntive, si utilizzano i formidabili __blank__ di Linux.",
      blank: "Namespaces"
    },
    {
      sentence: "Al posto di un noioso server attivo H24 7 su 7, il modello ad eventi e fatturabile per millisecondo si appoggia ad architetture chiamate Serverless o __blank__.",
      blank: "FaaS"
    }
  ],
  trueFalseStatements: [
    {
      statement: "I Secret in Kubernetes sono automaticamente crittografati in totale sicurezza dal sistema prima di essere salvati sul disco hardware del Master Node.",
      isTrue: false,
      explanation: "I Secret base sono solo codificati in formato Base64 (una normalizzazione leggibilissima da chiunque vi abbia accesso in dump DB o JSON), ma NON presentano crittografia AES di base (Encryption-at-Rest deve essere attivata o integrata tramite Vault KMS esterni)."
    },
    {
      statement: "La tecnologia Service Mesh come Istio inietta un container Proxy direttamente nella cartella di esecuzione base del sistema, in mezzo alla rete di tutti i Pod, per gestirli esternamente in blocco L7.",
      isTrue: false,
      explanation: "Usa il 'Sidecar Pattern' (Micro-proxies singoli accanto ad OGNI pod applicativo della rete come un guscio). Non un proxy solo bloccante, ma migliaia di sidecar che si parlano copertamente per la rotta."
    },
    {
      statement: "Un Worker Node tipico contiene l'Agenti Kubelet, Kube-Proxy e un Runtime container.",
      isTrue: true,
      explanation: "Corretto. Ogni singolo nodo opera con Kubelet che riceva da master, e si aggancia a kube-proxy che ne gestisce logiche IP Table."
    },
    {
      statement: "Prometheus utilizza nativamente un meccanismo 'Push' per far sì che i server microservizi gli mandino tutti i loro dati attivi in caso di errori.",
      isTrue: false,
      explanation: "Prometheus funziona concettualmente solo tramite Scraping ciclico di estrazione / Pull Model (legge le sorgenti /metrics dai server ogni N secondi). Sono semmai gli AlertManager logici a valutare le Pull ricevute."
    },
    {
      statement: "Docker engine non è più l'unico standard ed è stato estromesso a sfavore di un'interfaccia neutrale (CRI) nel progetto Graduated di Kubernetes.",
      isTrue: true,
      explanation: "Assolutamente. Dal 2022 K8s non supporta Dockershim. Runtimes conformi a CRI (Containerd, CRI-O) sono oggi i motori predominanti."
    }
  ]
};
