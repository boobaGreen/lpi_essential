export const kcnaLessonContent = {
  // ==========================================
  // TOPIC 1: KUBERNETES FUNDAMENTALS
  // ==========================================
  'kcna-1-1': {
    content: `
# Architettura Kubernetes

Kubernetes è un sistema open-source per l'automazione del deployment, dello scaling e della gestione di applicazioni containerizzate. L'architettura del cluster è divisa in due macro-componenti: il **Control Plane** (nodo master) e i **Worker Nodes** (i nodi operativi).

## Componenti del Control Plane
Il Control Plane prende le decisioni globali sul cluster (come lo scheduling) e rileva/risponde agli eventi (es. fa partire un nuovo Pod quando il numero di repliche scende sotto la soglia).

- **kube-apiserver**: Il front-end del control plane. Espone le API Kubernetes. Tutti gli altri componenti (inclusi strumenti CLI come \`kubectl\`) comunicano con il cluster attraverso l'API Server. È progettato per scalare orizzontalmente.
- **etcd**: Uno store chiave-valore altamente disponibile e consistente, usato come data store di appoggio per tutti i dati di stato e di configurazione del cluster.
- **kube-scheduler**: Osserva i pod appena creati che non hanno ancora un nodo assegnato e ne seleziona uno su cui eseguirli. Le decisioni di scheduling tengono conto dei requisiti di risorse, dei vincoli hardware/software, di \`affinity\` e \`anti-affinity\`.
- **kube-controller-manager**: Esegue i processi dei *controller*. Ogni controller cerca di portare lo stato corrente del cluster verso lo stato desiderato (es. Node controller, Replication controller, Endpoints controller).
- **cloud-controller-manager**: Incorpora la logica di controllo specifica del cloud provider, permettendo al cluster K8s di integrarsi direttamente con le API del provider (es. per richiedere Load Balancer).

## Componenti dei Worker Node
Questi componenti girano su ogni nodo, mantenendo l'esecuzione dei pod e fornendo il runtime environment di Kubernetes.

- **kubelet**: Un agente che gira in ogni nodo del cluster. Si assicura che i container descritti nei PodSpecs stiano funzionando correttamente.
- **kube-proxy**: Un proxy di rete eseguito su ogni nodo del cluster. Gestisce la parte di networking e applica le policy (iptables/IPVS) necessarie per i \`Service\` di Kubernetes.
- **Container Runtime**: Il software che esegue effettivamente i container. Kubernetes supporta \`containerd\`, \`CRI-O\` e altre implementazioni della \`Kubernetes CRI (Container Runtime Interface)\`. Docker d è stato ufficialmente rimosso da K8s 1.24.

---

### Riepilogo concettuale
*In un approccio dichiarativo, l'utente comunica al kube-apiserver lo **Stato Desiderato** (es. "Voglio 3 repliche del container nginx"). L'apiserver salva l'informazione in **etcd**. I controller manager (che ascoltano i cambiamenti dell'API) vedono che lo stato effettivo è diverso (0 repliche). Il controller chiede la creazione dei pod. Lo scheduler vede pod orfani e li assegna ai nodi. Le **kubelet** sui vari nodi vedono che i pod gli sono stati assegnati e istruiscono il Container Runtime per scaricare le immagini e farle partire.*
`
  },
  'kcna-1-2': {
    content: `
# Pods e Containers

## Che cos'è un Container?
Un container è un pacchetto software standardizzato che racchiude il codice e tutte le sue dipendenze (librerie, runtime) affinché l'applicazione possa girare in modo rapido e affidabile da un ambiente all'altro. I container condividono il kernel del sistema operativo host ma isolano i processi (utilizzando Namespace e cgroups di Linux).

## Che cos'è un Pod?
In Kubernetes, i container non vengono mai lanciati da soli e nudi. Vengono incapsulati in un oggetto K8s chiamato **Pod**.
Il Pod è **l'unità di base deployabile** più piccola in Kubernetes.

- Un pod può contenere uno o più container (pattern *Multi-container*).
- I container in un Pod condividono lo **stesso spazio di rete** e lo stesso indirizzo IP.
- Condividono anche lo spazio di **Storage** (possono montare gli stessi volumi condivisi).
- Hanno lo stesso ciclo di vita: vengono creati e distrutti insieme e girano sempre sullo **stesso Worker Node**.

### Pattern Architetturali dei Pod Multi-container
I pod multi-container non sono la norma per microservizi, di solito, è 1 Container = 1 Pod. Tuttavia, ci sono scenari (o pattern) specifici:
1. **Sidecar Pattern**: Aumentare o estendere la funzionalità del container principale senza modificarlo. (Es: Il container principale server file HTTP, un sidecar container scarica i file che il main server servirà, sincronizzandoli da un repository git).
2. **Ambassador Pattern**: Rappresenta un proxy che il container principale usa per connettersi a database esterni con connessioni complicate.
3. **Adapter Pattern**: Standardizza l'output del container principale. Ottimo per formattare i log affinché un sistema centrale di monitoring sia in grado di assorbirli in un formato unico.

### Esempio dichiarativo di un Pod (YAML)
\`\`\`yaml
apiVersion: v1
kind: Pod
metadata:
  name: nginx-pod
  labels:
    app: website
spec:
  containers:
  - name: nginx-container
    image: nginx:latest
    ports:
    - containerPort: 80
\`\`\`
`
  },
  'kcna-1-3': {
    content: `
# API, Labels, Selector e Namespaces

Kubernetes è un sistema API-driven. Ogni richiesta, interna o esterna (tramite \`kubectl\`), passa per le REST API del kube-apiserver.

## Risorse K8s
In Kubernetes, ci sono diversi Tipi di risorse base. Queste comprendono:
- **Pod**
- **ReplicaSet / Deployment**
- **Service**
- **Namespaces**
- **ConfigMap / Secret**

## Labels e Selectors
Poiché in un cluster Kubernetes possono esistere centinaia se non migliaia di Pod e altri componenti, è facilissimo perdere traccia di a chi appartiene cosa.

- **Labels (Etichette)**: Coppie chiave-valore allegate agli oggetti (es. \`app: front-end\`, \`env: production\`). Le label identificano attributi di un oggetto.
- **Selectors**: I selettori di label sono la base concettuale che unisce le funzionalità di Kubernetes. Permettono di "selezionare" tutti gli oggetti che presentano particolari label. 

Ad esempio, un **Service** K8s (il load balancer nativo) instraderà il traffico verso tutti i Pod che presentano l'etichetta \`app=web\`. Senza label, i controller non saprebbero su quali pod agire.

## Namespaces
I **Namespaces** forniscono un meccanismo per isolare gruppi di risorse all'interno di un singolo cluster. 

Se crei due cluster separati per Sviluppo e Produzione sei costretto a pagare molto. Se usi lo stesso cluster, potresti accidentalmente eliminare pod di produzione pensando fosse l'ambiente di Dev. I *Namespaces* permettono un partizionamento virtuale.

Namespaces standard creati automaticamente alla nascita di un cluster:
- **default**: Lo spazio in cui agisci se non specifichi niente.
- **kube-system**: I componenti di base di K8s (il control plane).
- **kube-public**: Area riservata (molto poco usata) e leggibile da chiunque senza autenticazione.
- **kube-node-lease**: Contiene oggetti per tracciare e mandare gli heartbeat dei worker node.

*Nota:* Alcune risorse, come **Node** o **PersistentVolume**, esistono a livello di cluster, quindi *non* hanno un namespace. (Le \`PersistentVolumeClaim\` invece ce l'hanno).
`
  },
  'kcna-1-4': {
    content: `
# Workloads: ReplicaSet e Deployment

Lanciare manualmente i pod singoli è un enorme errore. I Pod sono **ephemeri** (vivono poco). Se un Pod muore o il nodo su cui risiedeva si brucia, Kubernetes non resusciterà mai un Pod orfano per tua volontà. 
Per avere **Affidabilità e High Availability (HA)**, si utilizzano i *Supervisori di carico (Workloads Controller)*.

## ReplicaSet
Garantisce che il numero di repliche di uno specifico pod sia costantemente in esecuzione, sempre (in ogni istante).
- Se un nodo cade e 2 pod muoiono, il ReplicaSet si accorgerà che il current state è 1, ma il desired è 3. Ne spawnerà 2 in un altro nodo.
- Identifica i pod di cui tener traccia usando i **Selectors**.

## Deployment
Un **Deployment** fornisce aggiornamenti dichiarativi per Pods e ReplicaSets. In termini tecnici:
Tu non crei *mai* manualmente un ReplicaSet, crei un Deployment. Il Deployment gestisce automaticamente un ReplicaSet sottostante e ti fornisce funzioni avanzatissime.

### Deployment vs ReplicaSet
Perché preferire sempre il Deployment?
1. **Rolling Updates (Aggiornamenti a cascata)**: Se decidi di aggiornare l'immagine di un container (es: da \`v1.0\` a \`v2.0\`), il deployment avvierà il processo con Zero Downtime. Distruggerà un pod alla volta e creerà il pod nuovo, testandolo. Solo quando il nuovo è OK, passerà ad aggiornare un altro pod.
2. **Rollback**: Se l'aggiornamento fallisce, puoi usare \`kubectl rollout undo deployment my-app\` per tornare al precedente ReplicaSet in sicurezza (i ReplicaSet scartati dal deployment vengono conservati inerti per questo scopo).
3. **Scaling automatico o manuale**: Scala a infinite repliche i tuoi web server.
`
  },
  'kcna-1-5': {
    content: `
# ConfigMap e Secret

Per mantenere le applicazioni cloud native **studiate secondo i principi dei 12-factor app**, la configurazione deve essere strettamente e sempre disaccoppiata dall'immagine del container. Non vuoi dover ricompilare un'immagine Docker solo per cambiare il nome del Database URL.

## ConfigMap
K8s usa le **ConfigMap** per immagazzinare dati di configurazione non sensibili sotto forma di stringhe o file di configurazione in testo chiaro.

I dati vengono consumati dai Pod in due mani:
1. **Come variabili d'ambiente (ENV)**
2. **Come file mappati in volumi montati** all'interno dei container del pod.

## Secret
Funzionano esattamente come le ConfigMap, ma con un design speciale per conservare piccoli payload contenenti password, token TLS o chiavi SSH.
- A differenza della ConfigMap, le *Secret* K8s di base sono codificate in **Base64**.
- Attenzione: Essere codificati in base64 **non significa essere cifrati o sicuri!** Chiunque abbia accesso alla lettura in quel namespace o nell'Etcd può decodificarli in 1 secondo (una vera encryption richiede sistemi addizionali come KMS, HashiCorp Vault, ecc).
- I Secret non vengono scritti mai fisicamente sul disco dei nodi. Quando un Pod li monta come file o ENV, vengono mantenuti nella \`tmpfs\` (in ram volatile) del nodo kubelet e vengono distrutti all'estinzione del pod.
`
  },
  'kcna-1-6': {
    content: `
# Networking e Service

In K8s, i Pod ottengono indirizzi IP dinamici che cambiano costantemente quando vengono uccisi o rigenerati ai successivi aggiornamenti. Sarebbe impossibile per "Frontend" comunicare con "Backend" se Backend cambiasse IP ogni settimana. 

**I Service** fungono da front-end o load balancer interno permanente per un insieme di Pod.
Il Service fornisce un **IP e un nome DNS statico**.

## Tipi di Service
Questi sono i fondamentali che dovresti conoscere alla perfezione per il KCNA:

1. **ClusterIP (Default):**
   - Espone il Service su un indirizzo IP interno del cluster che *non fa accedere* la risorsa da fuori. Il database e i backend devono usare servizi solo ClusterIP.
2. **NodePort:**
   - Espone il Service garantendo agli utenti esterni connessioni tramite l'IP del \`Node\` e una determinata porta alta statica (range 30000 - 32767). Utile in dev/ambiente locale, ma sconsigliato in prod perché apre porte dirette in cluster.
3. **LoadBalancer:**
   - Un NodePort evoluto. Oltre a generare il NodePort, fa richiesta asincrona all'infrastruttura sottostante (es: AWS, GCP) di generare un Elastic Load Balancer (ELB) vero e proprio assegnandogli un IP Pubblico che convoglierà il traffico verso le sue porte.

## Ingress (Non è un Service puro)
L'Ingress Controller non è un oggetto di tipo "Service", bensì agisce a livello applicativo (L7 HTTP/S). Un **Ingress** regola regole di routing HTTP in modo da dirottare il traffico a svariati \`Service\` basandosi sull'URL o i domini (es: \`/api\` va al servizio backend, l'URL base alla webapp front end).
`
  },

  // ==========================================
  // TOPIC 2: CONTAINER ORCHESTRATION
  // ==========================================
  'kcna-2-1': {
    content: `
# Container Fundamentals & Runtimes

L'architettura moderna non esisterebbe senza i container. La separazione concettuale è:
1. Un **Virtual Machine** ipervisora un PC completo emulando l'hardware e installando un SO Intero (decine di GB).
2. Un **Container** condivide il kernel della vera macchina host e incapsula solo lo userspace (pochi MB). Questo lo rende infinitamente più veloce.

In K8s originario, Docker era l'unico motore supportato. Oggi, Kubernetes supporta lo standard **CRI** (Container Runtime Interface).

## La CRI (Container Runtime Interface)
Kubernetes non "esegue" i container, istruisce i runtime compatibili CRI. I Runtime sono i programmi come:
- **containerd**: Originariamente il motore sotto Docker, ora estratto e open source CNCF, molto veloce, leggerissimo e usato come default assoluto.
- **CRI-O**: Variante ottimizzata direttamente per e solo K8s (una creatura specialmente associata a piattaforme come RedHat OpenShift).

Il vecchio motore "Docker" \`dockershim\` creava grossi ritardi e appesantimenti architetturali inutili. È morto in favore della purezza del Runtime CRI come *containerd*.
`
  },
  'kcna-2-2': {
    content: `
# Concetti di Container Orchestration

Quando hai 5 container manuali puoi usare \`docker run\`. Quando ne hai 5.000, su 50 server, ti serve un Orchestratore.
Kubernetes è il leader di mercato e si batte con l'obsoleto Docker Swarm.

Il ruolo dell'orchestratore di container risiede in funzioni primarie:
- **Scheduling**: Decisione automatizzata di "quale nodo ha abbastanza CPU e RAM per far girare questo software pesante in questo momento?" Lo *scheduler* incrocia la lista di nodi scarichi, controlla i filtri \`Taints\` e i desideri di anti-affinità (non mettere due istanze dello stesso processo web sullo stesso nodo fisico, in caso di cortocircuito hardware, fallirebbero entrambe).
- **Self-Healing (Auto-guarigione)**: Nessun sysadmin deve intervenire alle 3 del mattino. Se un demone kubelet si accorge del non funzionamento di un pod, K8s distruggerà e forzerà la ri-creazione dal template salvato, finché la LivenessProbe o *lo stato effettivo* sarà di nuovo aderente allo *stato desiderato* (Etcd).
- **Scaling Orizzontale (HPA)**: Se il carico di connesioni web aumenta o la CPU del nodo brucia, l'orchestratore comanda i Deployment di duplicare il setup, lanciando 10 nuovi pod identici nei 5 secondi successivi. (In contrasto allo *scaling Verticale* - aumentare la RAM spegnendo la macchina server).
`
  },
  'kcna-2-3': {
    content: `
# Risorse: Limits & Requests

Kubernetes deve garantire continuità in piattaforme che girano multi-tenant (centinaia di progetti diversi sullo stesso computer). 
Senza limiti un solo Pod programmato in Python contenente un bug leak in loop può saturare le CPU di un'intera macchina cloud Enterprise e bloccare tutti gli altri pod vicini, scatenando un disastro ("Noisy Neighbor Problem").

K8s gestisce questo tramite **Requests & Limits**, definiti ai singoli container dei pod in notazione CPU o MiB.

## Requests (Richieste)
\`requests: CPU 500m (mezza cpu), memory 256Mi\`
- **Cos'è**: La promessa che lo Scheduler K8s ti fa: "Garantisco a questo container di avere risorse esclusive pari a 500m e 256MiB RAM". Se c'è spazio nel nodo, K8s assegna. Se nessun nodo ha queste specs e sono saturi, lo Scheduler non metterà mai giù il container (non si fida, perciò il pod resterà \`Pending\` per sempre finché non aggiungi server fisici).

## Limits
\`limits: CPU 1000m (1 core), memory 512Mi\`
- **Cos'è**: Il Container potrebbe usare il suo limite soft allocato o chiedere extra performance (magari per gestire chiamate db pesanti isolate). I *Limits* impattano fisicamente nel kernel linux "cgroups". 
- Se un container tenta di superare il **Limit CPU**, le CPU non andranno in affanno. Kernel e cgroups *limiteranno le performance dell'assegnazione ("Throttling")*. Il pod girerà semplicemente lentissimo (Throttle)
- Se un container tenta di allocare più memoria del **Limit RAM**, non esiste un RAM-Throttle. Il nodo si incazza e interviene brutalmente il **Kernel OOM (Out of Memory) KIller**. K8s ucciderà senza chiederlo ed eviscererà subito il container (CrashLoopBackOff). 
`
  },

  // ==========================================
  // TOPIC 3: CLOUD NATIVE ARCHITECTURE
  // ==========================================
  'kcna-3-1': {
    content: `
# CNCF Landscape

La **Cloud Native Computing Foundation (CNCF)** è un progetto della Linux Foundation fondato per promuovere il paradigma cloud native. 
Kubernetes è stato il primo progetto "graduato" della CNCF (donato originariamente da Google).

CNCF organizza i progetti open source in 3 livelli di maturità:
1. **Sandbox**: Progetti sperimentali e nuove idee (early-stage). Non consigliati per produzione senza un'attenta valutazione.
2. **Incubating**: Progetti usati in produzione da un numero misurabile e verificabile di aziende, con un team di maintainer in crescita e standard di affidabilità validi. (Es: gRPC, prima di diventare graduated).
3. **Graduated**: Progetti "bulletproof" (antiproiettile), diffusi a livello globale, maturi e considerati standard di settore per le infrastrutture enterprise. (Es: Kubernetes, Prometheus, Envoy, Helm, containerd, CoreDNS, Fluentd, Jaeger, Vitess, TiKV).
`
  },
  'kcna-3-2': {
    content: `
# Dalla Monolitica ai Microservizi

L'architettura *Cloud Native* si posa sul concetto fondamentale del design a **Microservizi** (Spesso formalizzati nelle [12-Factor Apps](https://12factor.net/)).

## Vantaggi dei Microservizi:
- **Scalabilità indipendente**: Se il login server è sovraccarico, ma il server del carrello acquisti è inattivo, lo scheduler di Kubernetes clonerà (scalerà in orizzontale) solo il login server, risparmiando risorse (impossibile in un'app monolitica).
- **Agnosticismo tecnologico (Polyglot programming)**: Il team di intelligenza artificiale sviluppa il servizio X in Python. Il team backend sviluppa il servizio Y nell'iper-veloce Go, mentre il front-end crea Z in Node.js. Poiché le funzioni comunicano tramite chiamate API REST/gRPC generiche standard via rete su Service mesh, non sanno in che linguaggio è l'altra app.
- **Sicurezza isolata (Blast Radius)**: Se un hacker buca e prende il dominio o causa un memory leak crash sul servizio "recensioni utente", cade solo la sezione recensioni. L'e-commerce continua a far transare denaro.

## Svantaggi
- La complessità infrastrutturale della rete e del bilanciamento esplode (Da qui l'invenzione di K8s e Service Mesh).
- Difficoltà assoluta nel fare debugging e troubleshooting manuale (Si rende necessaria perciò l'"Observability" avanzata distribuita).
`
  },
  'kcna-3-3': {
    content: `
# Serverless e FaaS (Function as a Service)

Il modello "Serverless" si inserisce nel panorama cloud native fornendo agli sviluppatori astrattismi totali. Non esiste concetto di container, immagine o pod sul lato utente.
- **FaaS**: Si esegue logica business pure. Scrivi una singola "funzione" (es in javascript \`exports.handler = async (event) => ...\`) e la piazzi nel cloud (es: AWS Lambda, OpenFaaS, Knative su K8s).
- Viene richiamata solo a seguito di *Eventi* discreti e asincroni (un utente ha fatto un upload su S3, il DB si è aggiornato, un Webhook ha suonato).
- Il pricing non si basa sulle ore in cui il server è stato acceso e idle (Zero Idle Cost). Paghi i millisecondi esatti di durata computazionale della funzione. "Scale to zero" significa che se l'app riceve 0 traffico per giorni, hai 0 pod/processi attivi.
`
  },
  'kcna-3-4': {
    content: `
# Service Mesh

Le chiamate di rete tra le dozzine di microservizi portano a gravi latenze non volute, colli di bottiglia e un incubo per la sicurezza "Zero-Trust".
Il **Service Mesh** (Rete di Servizi) - di cui progetti leader **Graduated** sono *Istio* e *Linkerd* - è un layer infrastrutturale dedicato che si occupa della comunicazione da Servizio-a-Servizio in modo rapido, sicuro, ed estraneo al codice applicativo.

## Architettura del Service Mesh
Si divide tipicamente in:
- **Control Plane**: Inietta le policy di sicurezza, amministra i certificati e la rotta del traffico globalmente (l'amministratore del mesh). 
- **Data Plane (Envoy Sidecars)**: Un micro-proxy intelligente superveloce (es: Envoy proxy) che l'orchestratore "attacca" automaticamente (Sidecar pattern) ad ogni singolo pod applicativo esistente e futuro nel cluster. 
  - Questa magia permette che l'applicazione stessa comunichi sulla \`localhost\` pensando di parlare con il database, mentre il proxy *Sidecar* intercetta pacchetti in uscita dall'IP interno, li crittografa in TLS mutuo autenticato (**mTLS**) e li viaggia in totale segretezza verso l'altro sidecar del servizio ricevente.
`
  },
  'kcna-3-5': {
    content: `
# Storage Concept in Kubernetes

## Volume
Nella concettualità vanilla del pod, lo storage interno al container muore col riavvio del processo.
Il **Volume** Kubernetes risiede a livello di Pod (vive per tutta la durata del pod anche se i container restartano) ma *viene distrutto per sempre* alla distruzione fisica del pod dal nodo. Utile per cache temporanee e passaggi di stato tra multi-container.

## Persistent Volumes (PV) e Persistent Volume Claim (PVC)
Il Cloud Native e la persistence si appoggiano ai driver CSI (Container Storage Interface).
Per non violare l'approccio dichiarativo e isolato:
- **L'amministratore infrastruttura (o il Cloud Provider)** definisce o ha interi Terabyte di spazio remoto "a riposo" (es. NFS Server, Amazon EBS/EFS, Google Persistent Disk) pronti, chiamati **Persistent Volumes (PV)**.
- **Lo sviluppatore** non sa che tecnologia di backend hardware c'è; produce nei suoi YAML manifest uno stralcio d'intenzione chiamato **Persistent Volume Claim (PVC)**: "Ho bisogno di un pezzo di disco di 5 Gigabyte per salvare la mia cartella PostgreSQL permanentemente, e voglio che sia veloce".
- Kubernetes collega automaticamente (binding) la Claim di 5 GB dell'utente al PV reale o genera dinamicamente un PV assecondandone i driver e le grandezze.

Quando il pod viene distrutto e ucciso, lo storage sottoscritto dalla PVC permane in eterno sul disco di rete.
`
  },

  // ==========================================
  // TOPIC 4: CLOUD NATIVE OBSERVABILITY
  // ==========================================
  'kcna-4-1': {
    content: `
# I 3 Piloni dell'Observability 

Se un utente segnala "Il sito è lento", in un'app monolitica controlli i file log e hai finito in 30 secondi.
In un'ecosistema composto da 50 microservizi che sputano bit, non hai idea in che strato esatto di un container transitorio si stia generando il collo di bottiglia.

Mentre il "Monitoring" ti avverte che qualcosa sta per andare a fuoco spingendo allarmi rossi, l'"Observability" ti aiuta attivamente a **diagnosticare esattamente *perché* sta bruciando e *soluzionarlo***.

Si basa su 3 formati chiave di telemetria standardizzata nativa (OpenTelemetry):
1. **Metrics (Metriche)**: Dati numerici aggregati prodotti temporalmente per analizzare comportamenti continui. Formano la dashboard. ("Richieste HTTP andate in 500 al secondo, % di RAM usata").
2. **Logs (Log Testuali)**: Messaggi stringa dettagliati immutabili emessi dalle app in specifici momenti ("Errore FATAL: L'IP 192.. ha fornito password falsa al DB postgres"). Generalmente standardizzati in formati neutri come JSON per essere facilmente reindirizzati tramite *Fluentd/Promtail* e visualizzati su un Hub tipo *Kibana* o *Grafana Loki*. 
3. **Tracing (Tracciamento Distribuito)**: Uno "Span" temporale lungo l'intero cammino. Il frontend chiama l'API Utenti (10ms) -> L'API Utenti controlla Auth Oauth2 (500ms) -> Auth Oauth2 esegue query (90ms). Se la dashboard mostra 600ms e un lag rosso, con il sistema di *Distributed Tracing (come Jaeger / Zipkin CNCF)*, un operatore vede una linea del tempo millimetrica per risalire esattamente al pod Auth che impiega troppo tempo in Oauth2.
`
  },
  'kcna-4-2': {
    content: `
# Prometheus (Monitoring)

Un progetto CNCF Graduated (il secondo mai donato dopo Kubernetes). Il re incontrastato e lo standard *de-facto* dell'industria Cloud per il Monitoring cloud-native.
- Basato sul modello di estrazione (Pull Model / **Scraping**): Prometheus visita continuamente un file terminale esposto dall'app via web (es. pod-server:9090/metrics), tirando via centinaia di numeri aggiornati ogni decina di secondi ed archiviandoli internamente come *"Time Series DB"*.
- Gli sviluppatori instrumentano le proprie App (in Java, Go o JS) con librerie "Prometheus Client API" o espongono vecchi servizi classici incapsulati in **Prometheus Exporters** (es. NodeExporter, KubeStateMetrics).
- Interrogabile e analizzabile internamente e matematicamente con un fortissimo linguaggio funzionale: **PromQL** (*Prometheus Query Language*).

L'interfaccia grafica e dashboarding prediletta in ecosistema Prometheus è da decenni **Grafana**. 
Grafana interroga ciclicamente le sorgenti in PromQL disegnando i grafici animati tipicamente accattivanti che vedi ovunque.
`
  },
  'kcna-4-3': {
    content: `
# Cost Management (FinOps)

L'introduzione dei cloud virtuali (elastic scaler infiniti) ha abbattuto i costi esagerati per acquistare interi capannoni di Hardware costoso e non utilizzato.
Però un team cloud native, se in scalabilità orizzontale perpetua senza controlli rigidi automatizzati, brucia migliaia e decine di migliaia di dollari in costi al minuto (Cloud Sprawl).

**FinOps** (Finance + DevOps) è una disciplina culturale e tecnica, volta all'ottimizzazione del valore.
Si basa sull'avere perfetta visibilità (spesso tracciata e attribuita a centro di spese, tramite Kubernetes Labels ai namespace, così da sapere al centesimo quale team e quale namespace ha bruciato quel costo).
Strumenti open source come **OpenCost** e **Kubecost** forniscono misurazioni dettagliate per nodi virtuali cloud o macchine di calcolo affinché tu possa scalare "in basso" o ottimizzare per abbattere le speculazioni su server inutilizzati.
`
  },

  // ==========================================
  // TOPIC 5: APPLICATION DELIVERY E SECURITY
  // ==========================================
  'kcna-5-1': {
    content: `
# Application Delivery & CI/CD Pipelines

Sull'onda Dev-Ops, gli sviluppatori rilasciano il codice cloud non caricandolo dal pc di casa al container via ssh (Antipattern puro e da ergastolo).

## Continuous Integration (CI) e Continuous Delivery (CD)
Le pipeline CI/CD (es. Jenkins, GitLab CI, GitHub Actions) sono i guardrail della qualità e del rilascio software:
1. Sviluppatore A salva nuovo codice app e committa in \`master\`.
2. Il sistema CI riceve l'evento webhook e crea un server effimero, esegue i test unitari e di copertura. Solo e soltanto se passano, compila il file nel docker engine \`docker build\`.
3. Il container nuovo di pack è marchiato rigidamente da un tag \`v2.5.0\`, e mandato nel Cloud Registry aziendale sicuro.
4. CD (Automazione e rilascio): Il codice o la macchina notifica lo schedulatore Kubernetes di aggiornare il deployment \`my-app\` all'immagine \`v2.5.0\`. Il deployment esegue un *rolling deployment*.
`
  },
  'kcna-5-2': {
    content: `
# GitOps: Paradigma moderno del deployment (K8s)

**GitOps** è un sottoinsieme, un avanzatissimo step ideologico parallelo del CD e prende tutto ciò che serve ad una buona implementazione Kubernetes integrandolo come logica primaria.  (Progetti Graduated e famosissimi CNCF: **ArgoCD**, **Flux**)

In pipeline classiche, GitHub/Gitlab lancia lo YAML nel cluster (*Push* strategy). Questo è pericoloso per via di credenziali master Kubernetes conservate nei file C.I.
**La Filosofia di GitOps è Pull Strategy**:
- L'intera, e dico "Intera" architettura Kubernetes, è descritta riga per riga su uno o due Repo Git testuali (Il famoso Infrastructure as Code / Config as Code).
- **Git** diventa la *"Singola Sorgente di Verità" (Single Source of Truth)*. Il sistema di controllo versioni detiene la verità immacolata su cosa *dovrebbe essere* il server cluster.
- All'interno dello stesso ambiente cluster gira permanentemente *ArgoCD* o *Flux*. Questo demone legge e ascolta il repository Git.  
- Appena uno sviluppatore committa (cambiano l'immagine da 1.0 a 2.0 in Git) o uno scossone nel cluster distrugge mezza configurazione, **L'operatore GitOps** vede una disparità/disallineamento tra Git (che recita \`reps: 3\`) e il server locale (che risponde "ci sono 2 pod e di cui uno difettoso"). Il demone interverrà tirando la modifica senza alcun input, auto-cancellando server/applicazioni e riportando la configurazione locale *esattamente* allo stato del repository Git.

È l'evoluzione più potente del Control Theory di K8S portata al design strutturale intero del multi-data server.
`
  },
  'kcna-5-3': {
    content: `
# Cloud Native Security (I 4 Livelli / The 4 C's)

Il modello base teorico che CNCF insegna. E' il principio di Defense-in-Depth tradotto nel mondo a container. 

Le **4 C** sono strati in cui devi fortificare l'ambiente. Se buchi l'esterno, non buchi l'interno:
1. **Cloud (o Data Center / Server fisico)**: In un ambiente enterprise spesso è il provider (AWS, GCP) che copre la parte di firewall globali e reti hardware fisiche e protezioni attacchi anti-ddos base aziendali.
2. **Cluster (Kubernetes in the middle)**: Lo strato orchestativo in cui risiedono i processi (API Server e etcd Kubelet). Qui intervengono pesantemente due metodologie esaminate: Oidc per il login e le regole di autenticazione e permesso **Role Based Access Control (RBAC)** (L'utente Marco ha ruolo *Admin* ? Nel namespace test? Può eliminare i Pod? O solo listarvi e leggerli per debbugarli "View"). Inoltre, si blocca il traffico inter-pod inutile tramite le *NetworkPolicy* asseverate dalle CNI.
3. **Container**: I limiti di Container stessi (isolamento cgroup e namespace kernel). Una feature primaria di security per Kubernetes (su un Pod/namespace), al fine di impedire violazioni del kernel nodo, è **Pod Security Admission (che ha rimpiazzato le PodSecurityPolicies PSP deprecate in K8s 1.25)** ed usare software per scannerizzare i container prima del via, rifiutando l'esecuzione su macchine produttive di immagini docker marcate come "Eseguibili Root" (Tutti i container devono essere lanciati come utente declassato locale \`nobody\` all'interno).
4. **Code (Il Codice sorgente e Librerie App)**: Responsabilità diretta Dev-Sec-Ops. Static Code Analysis (SAST), Software Composition Analysis, Dependency Scanning nei pipeline CI. Se l'app log-4-j scritta in java fa remote execution espositiva via api HTTP, il Kernel protetto dal Container non riesce ad auto guarirti. L'attacco hacker viene servito tramite i canali port 80 regolamentari e K8s ubbidirà.
`
  }
};
