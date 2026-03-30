export const quizzes_it = {
  // Topic 1: Kubernetes Fundamentals (28 domande - 46%)
  1: [
    {
      id: "kcna-1-q1",
      question: "Quale componente del Control Plane di Kubernetes funge da datastore per l'intero stato del cluster?",
      options: ["kube-apiserver", "kube-scheduler", "etcd", "kube-controller-manager"],
      correctAnswer: 2,
      explanation: "etcd è un datastore chiave/valore altamente disponibile che Kubernetes utilizza per memorizzare tutti i dati relativi allo stato e alla configurazione del cluster."
    },
    {
      id: "kcna-1-q2",
      question: "Qual è la componente Node-level responsabile del corretto funzionamento e della salute dei Container all'interno di un Pod assegnato a quel Nodo?",
      options: ["kube-proxy", "kubelet", "containerd", "cloud-controller-manager"],
      correctAnswer: 1,
      explanation: "La kubelet è l'agente che gira su ogni worker node. Assicura che i container descritti nei PodSpecs siano in esecuzione e sani comunicando col Container Runtime."
    },
    {
      id: "kcna-1-q3",
      question: "In Kubernetes, come vengono raggruppati logicamente i Pod e assegnati ai Controller e Service tramite i manifest YAML?",
      options: ["Attraverso Annotations (Annotazioni)", "Attraverso Taints e Tolerations", "Attraverso IP Rules nei Security Group", "Attraverso Labels e Selectors"],
      correctAnswer: 3,
      explanation: "Labels (etichette chiave-valore) e Selectors (che specificano quali label individuare) sono il meccanismo di base tramite cui K8s raggruppa le risorse."
    },
    {
      id: "kcna-1-q4",
      question: "Perché è considerato un Antipattern creare e mandare in esecuzione un Pod singolo in modo 'naked' (nudo) senza alcun Resource Type sovrastante?",
      options: ["Perché un Pod naked non può mai avere un Service e non riceverebbe traffico.", "Perché i Pod sono effimeri. Senza un controller come un Deployment o ReplicaSet, Kubernetes non lo resusciterà mai su un altro nodo in caso di rottura.", "Perché Kubelet impedisce per motivi di sicurezza a Pod orfani di essere eseguiti.", "Perché lo storage (Persistent Volume) non può essere mappato senza un Deployment."],
      correctAnswer: 1,
      explanation: "I Deployment/ReplicaSet garantiscono che il Pod sia costantemente ripristinato (High Availability). I Pod singoli eseguiti direttamente muoiono per sempre al primo errore del server."
    },
    {
      id: "kcna-1-q5",
      question: "Se hai un Deployment chiamato 'web' e desideri scalare il numero di repliche a 7 utilizzando un comando imperativo in una singola riga, quale comando esegui?",
      options: ["kubectl set replicas deployment web 7", "kubectl increase pod web --count=7", "kubectl scale deployment web --replicas=7", "kubectl update deployment web size=7"],
      correctAnswer: 2,
      explanation: "Il comando corretto per variare lo stato desiderato delle repliche di un deployment in modo imperativo è 'kubectl scale deployment <name> --replicas=<num>'."
    },
    {
      id: "kcna-1-q6",
      question: "Un Service in Kubernetes crea per impostazione predefinita quale tipologia di Accesso per un gruppo di Pod?",
      options: ["NodePort", "ClusterIP", "LoadBalancer", "ExternalName"],
      correctAnswer: 1,
      explanation: "Se non specifichi il type nello YAML di un Service, Kubernetes sceglierà automaticamente ClusterIP, che fornisce un IP interno accessibile unicamente da dentro il cluster stesso."
    },
    {
      id: "kcna-1-q7",
      question: "Quale pattern si utilizza comunemente in un Pod con multipli container quando vuoi aggiungere una funzionalità di log forwarding senza alterare il codice dell'app principale?",
      options: ["Ambassador Pattern", "InitContainer Pattern", "Sidecar Pattern", "Adapter Pattern"],
      correctAnswer: 2,
      explanation: "Il sidecar pattern prevede di affiancare un container di utilità (es. un raccoglitore log o un proxy metriche) all'interno dello stesso Pod del container applicativo principale."
    },
    {
      id: "kcna-1-q8",
      question: "Dove memorizzi preferibilmente chiavi TLS, token di database API o password all'interno del cluster Kubernetes in modo nativo per disaccoppiarli dall'immagine container?",
      options: ["Nelle ConfigMap codificate in SHA-256", "In un CustomResourceDefinition (CRD)", "In un oggetto Secret", "Codificate a mano nel Dockerfile ENV"],
      correctAnswer: 2,
      explanation: "Gli oggetti SecretK8s servono proprio a contenere payload sensibili, che verranno conservati codificati in base64 (o crittografati a riposo se configurato) per distaccare le password dal codice sorgente."
    },
    {
      id: "kcna-1-q9",
      question: "Qual è lo scopo del namespace 'kube-system' in K8s?",
      options: ["È l'ambiente predefinito se un utente non specifica un namespace.", "È progettato per avviare container privilegiati untrusted di altri utenti cloud.", "Ospita esclusivamente i componenti del Control Plane e processi vitali del cluster (es. coredns, kube-proxy).", "È uno spazio vuoto adoperato esclusivamente dai PersistentVolumes."],
      correctAnswer: 2,
      explanation: "Il namespace kube-system viene inizializzato in automatico al momento del bootstrap e protegge CoreDNS, etcd, proxy, controller interni e driver CNI infrastrutturali."
    },
    {
      id: "kcna-1-q10",
      question: "Desideri aggiornare i tuoi Pod senza incorrere in alcun Downtime lato utente. Quale Risorsa nativa si occupa di eliminare progressivamente un Pod obsoleto, attendere che il nuovo si avvii regolarmente, e solo poi distruggerne un altro?",
      options: ["StatefulSet", "Ingress Controller", "ReplicaSet", "Deployment (Rolling Update)"],
      correctAnswer: 3,
      explanation: "I Deployment implementano nativamente la Rolling Update Strategy (aggiornamenti a cascata) che permette aggiornamenti continui a downtime nullo."
    },
    {
      id: "kcna-1-q11",
      question: "Quale comando è usato per intercettare dal terminale il traffico in tempo reale fra la tua porta locale 8080 e la porta 80 di un pod Kubernetes?",
      options: ["kubectl proxy", "kubectl port-forward", "kubectl expose tunnel", "kubelet bind-port"],
      correctAnswer: 1,
      explanation: "'kubectl port-forward' crea un tunnel temporaneo (TCP forwarding) vincolando una porta del localhost della tua macchina verso una porta su un Pod specifico o Deployment."
    },
    {
      id: "kcna-1-q12",
      question: "Quale componente esegue attivamente le chiamate al cloud provider (AWS/GCP/Azure) qualora decidi di applicare a un Service l'opzione 'type: LoadBalancer'?",
      options: ["kube-apiserver", "Kubelet", "cloud-controller-manager", "etcd"],
      correctAnswer: 2,
      explanation: "Il cloud-controller-manager integra funzioni specifiche per un fornitore Cloud; quando esso legge un Service che chiede un bilanciatore, si collegherà alle API cloud (es: AWS EC2 API) per ottenere e pagare fisicamente l'infrastruttura LoadBalancer."
    },
    {
      id: "kcna-1-q13",
      question: "Quando un nodo cade (Node Failure) ed esce irrimediabilmente offline dal cluster (Status: NotReady), dopo quanto tempo circa i Controller K8s decidono, di default, di evincere e riprogrammare i Pod su altri nodi sani?",
      options: ["Immediatamente (1 secondo)", "Circa 5 minuti", "Dopo 24 ore", "Mai, attendono l'intervento umano"],
      correctAnswer: 1,
      explanation: "Di default, kube-controller-manager ha un timeout di evizione 'pod-eviction-timeout' configurato a 5 minuti per evitare lo split-brain dovuto a momentanee disconnessioni di rete."
    },
    {
      id: "kcna-1-q14",
      question: "Qual è lo scopo del componente CoreDNS all'interno dell'architettura K8S standard?",
      options: ["Fornisce risoluzione dei nomi (es. 'backend.default.svc.cluster.local') mappandoli agli IP dinamici dei Service interni.", "Crea nomi esposti in Internet usando Route53 di Amazon.", "Previene gli attacchi cross-site scripting dai NodePort.", "Serve a compilare stringhe di testo per creare file manifesto YAML."],
      correctAnswer: 0,
      explanation: "CoreDNS (A CNCF graduated project) funge da server DNS interno al cluster. Senza CoreDNS o Kube-DNS, i Pod all'interno del cluster non avrebbero le registrazioni necessarie per raggiungersi vicendevolmente mediante nomi anziché indirizzi IP effimeri."
    },
    {
      id: "kcna-1-q15",
      question: "Le Annotations in Kubernetes sono strutturalmente simili alle Labels (coppie chiave-valore). Qual è la loro differenza funzionale chiave?",
      options: ["Le annotazioni sono usate solo per nascondere password crittografate.", "Le annotazioni non possono essere selezionate dal kube-scheduler (non sono queryable), servono solo a contenere metadata informativi lunghi per tool esterni o revisioni.", "Le annotazioni modificano il peso di distribuzione di rete Ingress, le label no.", "Le annotazioni sono riservate esclusivamente agli oggetti di tipo ReplicaSet."],
      correctAnswer: 1,
      explanation: "Mentre le Labels codificano tratti identificativi essenziali per i 'Selectors', le Annotations racchiudono enormi payloads non strutturati (come commit git, builder id) che K8s ignora per le selezioni logiche."
    },
    {
      id: "kcna-1-q16",
      question: "Che cos'è esattamente un Ingress in Kubernetes?",
      options: ["Un Service di tipo LoadBalancer che lavora a livello 4 (TCP/UDP).", "Un oggetto API che gestisce l'accesso esterno ai servizi nel cluster, operando tipicamente a livello 7 (HTTP/HTTPS) gestendo host virtuali e path-based routing.", "Un comando per iniettare traffico malevolo e testare la resilienza.", "Il firewall di default installato su ogni nodo Worker."],
      correctAnswer: 1,
      explanation: "L'Ingress non è un Service, bensì una regola di routing L7 (HTTP) applicata all'Ingress Controller, permettendoti di far convogliare traffico verso multipli Service usando un solo IP esposto, discriminando per dominio URL o path."
    },
    {
      id: "kcna-1-q17",
      question: "Qual è il rapporto degli indirizzi IP tra i Container all'interno dello stesso identico Pod?",
      options: ["Ogni container ha il proprio IP privato distinto sulla rete VPC.", "I container nello stesso Pod condividono lo stesso indirizzo IP e lo stesso spazio di porte (network namespace), quindi comunicano tra loro via 'localhost'.", "Non possono comunicare tra di loro se non tramite un Service esterno ClusterIP.", "Condividono l'IP ma non possono esporre porte multiple."],
      correctAnswer: 1,
      explanation: "Il namespace di rete è generato a livello di Pod. Tutti i container racchiusi in un Pod condividono 'localhost'; se il Container A espone la porta 80 e il Container B la 8080, A contatterà B su localhost:8080."
    },
    {
      id: "kcna-1-q18",
      question: "A livello di CLI, cos'è e a cosa serve il file `kubeconfig`?",
      options: ["Avvia la configurazione del sistema operativo del worker node.", "È uno script bash che compila i sorgenti del kube-apiserver.", "È un file di configurazione client-side utilizzato da `kubectl` per autenticarsi all'API Server e determinare a quale cluster (e context) connettersi.", "È il file interno che Kubelet usa per parlare con containerd."],
      correctAnswer: 2,
      explanation: "Il file `~/.kube/config` contiene i dettagli dei Cluster, degli Utenti (certificati TLS o token) e dei Context (l'accoppiamento utente-cluster-namespace) per permettere a kubectl di comunicare validamente."
    },
    {
      id: "kcna-1-q19",
      question: "Cosa descrive meglio l'uso di Minikube, Kind o K3s nel contesto Kubernetes?",
      options: ["Sono distribuzioni cloud-native usate per cluster multi-regione su scala globale enterprise.", "Strumenti CLI per cancellare massivamente pod orfani.", "Versioni alleggerite di Kubernetes utilizzate tipicamente per eseguire cluster single-node su macchine locali (laptop) a scopo di sviluppo e test.", "Driver storage CSI per la virtualizzazione dei dischi NVMe."],
      correctAnswer: 2,
      explanation: "Minikube, Kind (Kubernetes In Docker) o k3s/MicroK8s sono soluzioni ottimali per avere cluster K8s in locale consumando un quantitativo ridottissimo di risorse (CPU/RAM)."
    },
    {
      id: "kcna-1-q20",
      question: "Se hai bisogno di eseguire il backup completo e lo snapshot dello stato del configurazione del cluster, di quale componente devi estrarre i dati?",
      options: ["kube-apiserver", "Kubelet logs", "etcd", "Root Filesystem del Worker Node"],
      correctAnswer: 2,
      explanation: "Essendo etcd il datastore in cui Kubernetes salva interamente lo stato dichiarativo (le tue definizioni di secret, pod, deploy, configmap), un backup completo di etcd (snapshot) è l'equivalente di backuppare il cluster intero."
    },
    {
      id: "kcna-1-q21",
      question: "Cosa rappresenta la Risorsa K8s 'CronJob' rispetto a un semplice 'Job'?",
      options: ["CronJob viene eseguito all'infinito senza mai bloccarsi o morire (come un Deployment).", "Il CronJob permette di specificare una programmazione temporale ricorrente (stile cron di Linux: * * * * *) per avviare Job in modo ripetuto ad orari precisi.", "Il CronJob esegue processi che richiedono Storage permanente.", "Il CronJob assegna risorse GPU predeterminate."],
      correctAnswer: 1,
      explanation: "Un Job è un operazione 'one-shot' (avvia un container, fa un task, esce con successo e termina). Un CronJob fa la stessa cosa ma triggera un Job seguendo un calendario (es. ogni notte a mezzanotte)."
    },
    {
      id: "kcna-1-q22",
      question: "Come agisce la logica dichiarativa in K8s (Desired State vs Actual State) governata dal Control Plane?",
      options: ["L'utente dice all'API Server *cosa* vuole (es. 5 repliche). I Controller osservano costantemente la differenza tra lo stato richiesto (Desired) e la realtà del cluster (Actual), e prendono attivamente provvedimenti per azzerare la divergenza.", "L'utente fornisce una serie di passi imperativi in bash (1. crea Pod, 2. controlla se esiste, 3. ripeti 5 volte).", "Il Worker node invia email al Sysadmin se scende sotto le repliche per richiedere autorizzazione manuale d'avvio.", "Se etcd cade K8s si adatta per funzionare staticamente dalla cache in 'Actual State' perpetuo."],
      correctAnswer: 0,
      explanation: "Il Kube-Controller-Manager è il vigile della logica Control-Loop (Control Theory): Desiderato vs Attuale. Se sono differenti, comanda le correzioni."
    },
    {
      id: "kcna-1-q23",
      question: "Cos'è una Custom Resource Definition (CRD) in Kubernetes?",
      options: ["Un firewall hardware aggiuntivo installato nei datacenter.", "Un'estensione naturale delle API di base di Kubernetes, che ti permette di creare e salvare oggetti e Controller personalizzati non nativi (es. Certificate, Issuer, KafkaCluster).", "Un comando cli in YAML per disattivare i namespace.", "Un metodo esecutivo che converte K8s in Docker Swarm."],
      correctAnswer: 1,
      explanation: "Il CRD permette l'estensibilità di K8s. Puoi dire all'API Server di iniziare a comprendere oggetti inesistenti come `kind: DatabasePostgres`, il quale verrà poi interpretato da un Custom Controller (Operator Pattern)."
    },
    {
      id: "kcna-1-q24",
      question: "Seleziona l'affermazione veritiera riguardo i Pod Multi-container.",
      options: ["I vari container non possono per nessun motivo condividere cartelle o file a disco.", "Tutti i container avranno un Indirizzo IP privato a sé stante e comunicano mediante ARP.", "Devono essere tutti container compilati col medesimo linguaggio di programmazione OS.", "Possono condividere lo stato montando gli stessi Volumi di Storage (es. un container scrive un file html in /var/www, il secondo lo legge in esecuzione)."],
      correctAnswer: 3,
      explanation: "Condividendo namespace di Rete e Storage, i processi dentro un Pod Multi-container possono comunicare via IPC locale (Localhost) oppure leggendo le stesse cartelle passate come EmptyDir Volumes."
    },
    {
      id: "kcna-1-q25",
      question: "Come assicura l'orchestratore K8S che le password nei file Secret non finiscano involontariamente stampate a schermo da console o su Hard Disk non formattati?",
      options: ["I Secret non sono mai crittografati ma vengono scritti sui dischi rigidi crittografati con algoritmi TLS.", "Di default K8s li monta dentro ai Pod non come file fisici ma in tmpfs (Memoria RAM del nodo - RAM-backed file system) in modo che i dati bypassino lo storage residente locale.", "I Secret sono resi illeggibili a chiunque non possieda la chiave privata SSH.", "Usa un protocollo FTP protetto e transitorio."],
      correctAnswer: 1,
      explanation: "Kubelet monta fisicamente i blocchi Secret (Volume mount) come 'tmpfs'. Quando il pod viene distrutto o si chiude, la memoria ram evapora assicurando che nessun rimasuglio resista sullo storage del server host."
    },
    {
      id: "kcna-1-q26",
      question: "Qual è un uso errato per una ConfigMap?",
      options: ["Salvare il file di configurazione 'nginx.conf' o 'redis.conf'.", "Memorizzare le URL generiche dell'ambiente di staging per le chiamate API frontend.", "Configurare un intero script shell leggero per l'esecuzione del demone.", "Immagazzinare decine di chiavi private RSA e API Keys AWS sensibili."],
      correctAnswer: 3,
      explanation: "La ConfigMap non ha alcuna protezione RBAC di separazione sicura per il testo, mostrandolo in testo semplice (clear-text). I file sensibili (RSA/AWS Keys) devono essere salvati categoricamente nell'oggetto 'Secret'."
    },
    {
      id: "kcna-1-q27",
      question: "Se elimini accidentalmente o volontariamente il Pod di un Deployment in esecuzione correttamente tramite `kubectl delete pod my-app-xyz`, cosa succede?",
      options: ["Il sito web genererà un errore 404 permanente e il deployment viene considerato Corrupted (Corrotto).", "Nulla, i processi applicativi all'interno non muoiono perché sopravvivono in background al container.", "Il ReplicaSet sottostante gestito dal Deployment noterà immediatamente che c'è 1 replica in meno del Desired State e accenderà un nuovo Pod per rimpiazzarlo in pochi secondi.", "Il Control Plane cancella il Deployment per allinearlo al nuovo stato effettivo dei suoi Pod."],
      correctAnswer: 2,
      explanation: "È il vero potere della self-healing: il ReplicaSet agirà all'istante (Control Loop) riclonando un Pod per mantenere le, ad esempio, 3 repliche impostate."
    },
    {
      id: "kcna-1-q28",
      question: "Che succede se si configura un 'DaemonSet' ma sono assenti regole di toleration e sono attivi 'Taint' restrittivi sui nodi Master (Control Plane)?",
      options: ["Il DaemonSet forza il posizionamento e accende pod anche sul Master per bypass della regola.", "Il DaemonSet espanderà pod cloni esclusivamente sui Worker node liberi da macchie (Taint), ignorando i Master e non spawnando nulla lì sopra.", "Genera un CrashLoopBackoff.", "Disconnette la Kubelet del Master."],
      correctAnswer: 1,
      explanation: "Lo Scheduler valuta comunque i Taints e le Tolerations anche per i DaemonSet. Senza tolleranze specifiche, il master sarà preservato."
    }
  ],

  // Topic 2: Container Orchestration (13 domande - 22%)
  2: [
    {
      id: "kcna-2-q1",
      question: "Quale standard di Container Runtime ha estromesso la dipendenza diretta al demone Docker in Kubernetes (Dockershim)?",
      options: ["LXC (Linux Containers)", "Container Runtime Interface (CRI)", "Virtual Machine Manager (VMM)", "rkt (Rocket)"],
      correctAnswer: 1,
      explanation: "La CRI permette l'utilizzo di runtime più puri, veloci e di basso livello, liberi dalle sovrastrutture pesanti di un intero engine Docker. Esempi di runtime conformi CRI sono containerd e CRI-O."
    },
    {
      id: "kcna-2-q2",
      question: "Se l'uso della memoria (RAM) di un Container supera pesantemente il parametro di 'Limits' stabilito nel Pod Spec, cosa accade a livello di OS Worker Node?",
      options: ["Il processo del Container rallenta vertiginosamente senza arrestarsi (Memory Throttling).", "Scalerà verticalmente allocando automaticamente memoria virtuale aggiuntiva.", "Kube-proxy lo isolerà dal Service bloccandone il traffico in entrata.", "Il Kernel reagisce uccidendolo all'istante (OOMKilled) per preservare l'integrità del nodo host."],
      correctAnswer: 3,
      explanation: "La memoria (RAM) è una risorsa incompressibile. Se si esaurisce la reale aliquota hardware concessagli al confine crgroups, il l'OOM Killer del Kernel interviene abortendo il processo."
    },
    {
      id: "kcna-2-q3",
      question: "Qual parametro del PodSpec viene analizzato attentamente dallo Scheduler per assicurarsi che esista spazio fisico matematicamente pre-allocabile sul nodo prima di potervelo schedulare sopra?",
      options: ["Liveness Probe", "Tolerations", "Requests (risorse richieste)", "StorageClass Volume bindings"],
      correctAnswer: 2,
      explanation: "I parametri 'Requests' (es. 200m CPU) fungono da contratto inalienabile. Lo Schedulatore garantisce matematicamente quella fetta pre-allocata sul nodo selezionato."
    },
    {
      id: "kcna-2-q4",
      question: "Che problema risolve un orchestratore mediante l'opzione 'Pod Anti-Affinity'?",
      options: ["Assegnare Pod solo su nodi con schede grafiche GPU potenti.", "Impedire che due o più Pod dello stesso servizio vitale vengano allocati simultaneamente sul medesimo nodo, per prevenire un outage totale dell'applicazione in caso di guasto hardware host.", "Rifiutare l'avvio in Kubelet dei Pod se l'uso della RAM globale supera l'80%.", "Spostare automaticamente i DB verso storage più veloce NVMe al calo prestazionale."],
      correctAnswer: 1,
      explanation: "Le regole di Anti-Affinità evitano l'assembramento letale; forzano lo Scheduler a posare i Pod dello stesso gruppo in nodi geograficamente (o fisicamente) separati, massimizzando l'HA."
    },
    {
      id: "kcna-2-q5",
      question: "In ambito orchestration, l'HPA (Horizontal Pod Autoscaler) aumenta le repliche in risposta a cosa, tipicamente?",
      options: ["Cancellazione parziale del database Etcd", "Eventi derivanti dai webhook del repository GitOps (Push Code)", "Un alto picco misurato nell'uso di Metriche come CPU / RAM rispetto ad una soglia target (es. 80%)", "Errori 500 continui sull'API proxy generati dal nodo Master"],
      correctAnswer: 2,
      explanation: "L'Autoscaler Orizzontale analizza continuamente la metrics-server e incrementa il numero repliche del ReplicaSet sottostante per diluire il carico se questo sorpassa la soglia di sforzo."
    },
    {
      id: "kcna-2-q6",
      question: "Cos'è un 'Taint' applicato a un Nodo Kubernetes?",
      options: ["Un firewall hardware generato per quel nodo.", "Una marchiatura repellente (es: Macchia) che causa il 'ritiro' dello Schedulatore, impedendo per default l'assegnazione di Pod a quel nodo, salvo che il Pod non possegca una specifica 'Toleration' compensativa.", "Un bilanciatore L4 isolato su host specifici.", "Una configurazione di runtime CRI per container legacy."],
      correctAnswer: 1,
      explanation: "I nodi Master (Control plane) sono usualmente 'Tainted' di fabbrica. Per questo lo Schedulatore si rifiuta di inserirvi container, preservandone le risorse essenziali."
    },
    {
      id: "kcna-2-q7",
      question: "Di quale Probe si serve la Kubelet per capire internamente se il processo base del container (es. Web server Nginx) si è avviato con successo e non riscontra un freeze critico durante la marcia, decidendo eventualmente di riavviarlo?",
      options: ["OOM Probe", "Readiness Probe", "Liveness Probe", "Startup Probe"],
      correctAnswer: 2,
      explanation: "La Liveness Probe è la sonda di sopravvivenza. Se fallisce ripetutamente, il kubelet considera il container malfunzionante e ne ordina la terminazione e il riavvio rigenerativo."
    },
    {
      id: "kcna-2-q8",
      question: "Che succede strutturalmente dentro a Kubernetes se specifichi esplicitamente parametri di Limit CPU per un particolare Pod?",
      options: ["L'orchestrazione userà la Linux Control Group (cgroup) technology. Se il pod cerca di assorbire cicli CPU oltre al limit imposto, sarà Throttled (Rallentato senza alcun Crash) permettendogli solo le frazioni di millisecondo concesse.", "Kubelet avvierà un riavvio istantaneo OOM error non appena toccherà l'apice imposto.", "Viene convertito da Pod a ReplicaSet per la gestione dello scaling.", "L'apiserver modifica il priorityClass associato abbassandolo di grado rispetto i pod CoreDNS."],
      correctAnswer: 0,
      explanation: "Per la CPU, i cgroups nel kernel dell'OS impongono il throttling. Il processo app rulla più lento anziché bloccarsi del tutto."
    },
    {
      id: "kcna-2-q9",
      question: "Quale pattern e componente architetturale si usa tipicamente per garantire che un determinato Pod venga clonato ed esegua una e una sola istanza identica per OGNUNO dei worker node fisici facenti parte del cluster?",
      options: ["DaemonSet", "CronJob", "StatefulSet", "Horizontal Pod Autoscaler"],
      correctAnswer: 0,
      explanation: "Il DaemonSet assicura all'amministratore che un Pod sia operativo fisicamente 1-to-1 rispetto ai nodi totali (se ho 150 VM attive, avrò magicamente 150 agenti, ottimo per driver o metriche)."
    },
    {
      id: "kcna-2-q10",
      question: "Considerato il runtime execution in Open Container Initiative (OCI), cosa definisce tale standard?",
      options: ["Solo la sintassi YAML per Helm charts.", "Le specifiche formali e neutrali del formato dell'Immagine (Image Spec) e del runtime (Runtime Spec) per creare container agnostici rispetto al vendor (sia per Docker che per Podman/Crio).", "I permessi LDAP d'autenticazione.", "Le metriche CAdvisor obbligatorie da inviare a Prometheus."],
      correctAnswer: 1,
      explanation: "OCI fu stabilita per avere formato d'immagine unitario. Un'immagine compilata su Docker.app può girare perfettamente su containerd, Podman o buildah per merito della Image Specification OCI."
    },
    {
      id: "kcna-2-q11",
      question: "Cosa si intende per 'Image Tag' in un deployment architetturale container?",
      options: ["Un etichetta HTTP header generata dall'API Gateway k8s.", "L'identificativo esatto della versione dell'immagine del container (Es: `nginx:1.24-alpine`). Garantisce di puntare sempre a un'impronta OS binaria esatta nel tempo.", "La password privata codificata del developer.", "L'identificativo univoco hardware di assegnazione IP sulla subrete CNI."],
      correctAnswer: 1,
      explanation: "Le tag limitano la regressione. Si sconsiglia vivamente l'uso di tag fluttuanti `:latest` in produzione poichè causano divergenze incontrollate nelle re-pulling future dell'immagine."
    },
    {
      id: "kcna-2-q12",
      question: "Nel contesto Orchestration, perché viene preferito lo 'StatefulSet' per applicazioni come Database Master-Slave (es. MongoDB) anziché un classico 'Deployment'?",
      options: ["Perché scala dinamicamente in base al traffico.", "Perché lo StatefulSet fornisce nomi deterministici prevedibili, instradamento rete fisso e garantisce gli ordinamenti d'avvio seriali, vitale per agganciamenti DB stabili ad un disco fisso VolumeClaim nel tempo.", "Perché distrugge i pod molto più in fretta senza attendere il SigTerm.", "Perché usa memoria RAM e mai il disco permanente PV."],
      correctAnswer: 1,
      explanation: "I pod di StatefulSet hanno nomi identificabili prevedibili (es. web-0, web-1) e se un pod muore, il rimpiazzo acquisisce identico nome e identico aggancio PVC (disco fisso), mantenendo lo 'Stato' integro."
    },
    {
      id: "kcna-2-q13",
      question: "Che ruolo ha il 'Container Registry' (es. Docker Hub, Harbor, Amazon ECR)?",
      options: ["Una libreria statica Linux che il Kubelet richiama per avviare il processo app web locale (Webserver).", "Un archivio (Repository) remoto e centralizzato adoperato per ospitare, mantenere versionate e distribuire fisicamente le Immagini Container pronte all'uso. I worker nodi lo scaricano da lì all'accensione del pod.", "Il Database etcd del Master Node dove vive Kubernetes API.", "Un server Prometheus esterno a pagamento."],
      correctAnswer: 1,
      explanation: "Il registry è la grande 'libreria' da cui il runtime di qualsiasi nodo Kubernetes preleva (Pull) il pacchetto binario dell'immagine compilata in CI, e lo estrae sul suo file system."
    }
  ],

  // Topic 3: Cloud Native Architecture & CNCF (10 domande - 16%)
  3: [
    {
      id: "kcna-3-q1",
      question: "Come viene catalogato un progetto Open Source dalla CNCF in base al livello di maturità e affidabilità estrema (enterprise-ready e adozione globale massiccia)?",
      options: ["Sandbox Project", "Graduated Project", "Incubating Project", "Alpha Project"],
      correctAnswer: 1,
      explanation: "Il livello più alto e maturo dello stack CNCF standard (come Kubernetes, containerd, CoreDNS, Fluentd, Jaeger) è l'ambito 'Graduated'."
    },
    {
      id: "kcna-3-q2",
      question: "In cosa si differenzia principalmente l'estrazione FaaS (Functions as a Service / Serverless) dalle distribuzioni classiche basate esplicitamente a Microservizi e Containers in Pod?",
      options: ["FaaS necessita un master node e un proxy node configurato manualmente su ogni invocazione.", "Prevede un meccanismo invisibile e fatturazione al millisecondo (Scale-to-Zero). Esegue frammenti business logic innescato da trigger/eventi, astraendo integralmente qualsiasi concetto logico di pod, sistema operativo o scaling da parte dello sviluppatore.", "Serverless è limitato all'esecuzione locale non in cloud.", "I serverless sono limitati al framework PHP."],
      correctAnswer: 1,
      explanation: "Il Serverless astrae brutalmente le operazioni Ops; il developer scrive codice lambda grezzo. Quando l'app dorme viene estirpata da memoria a costo 0.00$ e riappare al primo evento di chiamata http."
    },
    {
      id: "kcna-3-q3",
      question: "Cos'è un 'Service Mesh' come Istio o Linkerd e perché lo introduciamo a fianco di un'architettura a container?",
      options: ["Un Mesh è una rete di router fisici acquistati dalla corporazione nel datacenter per interconnettere cablaggi BGP dei nodi K8s in zone diverse della città.", "Un layer infrastrutturale dedicato che si immette come intercettore in mezzo a tutti i microservizi (usando Proxy Sidecars automatizzati). Aggiunge affidabilità, bilanciamento mirato L7, tracciabilità e crittografia Mutua automatica (mTLS) al traffico che defluisce in un cluster, in maniera completamente non instrusiva rispetto al codice vero e proprio.", "Un rimpiazzo di etcd integrato da RedHat per velocizzare lo scheduling.", "Una libreria Java che si compila assieme ai JAR."],
      correctAnswer: 1,
      explanation: "Il concetto essenziale del mesh è togliere la palla della Sicurezza Rete & Riprove/Timeout HTTP dalle mani dello sviluppatore applicativo e delegarla all'infrastruttura di controllo 'Data Plane / Control Plane' esterna, via Envoy Sidecars."
    },
    {
      id: "kcna-3-q4",
      question: "Un vantaggio innegabile delle architetture Cloud Native a microservizi classificate come 'Polyglot Programming' è:",
      options: ["Usano un unico grande storage di Database Relazionale Centralizzato a strati per tutti i moduli per risparmiare tempo query e risorse Cloud.", "Ogni servizio componente isolato può essere strutturato idealmente in modo differente, impiegando per ciascun problema specializzato il Linguaggio di programmazione e Framework più performante al compito (Es: Node.js per il rendering Frontend e Go per il parsing Data backend; in dialogo costante tra loro via API indipendentemente dal vendor).", "Compila istantaneamente tutte le immagini docker in un file binario unico nativo in C per la velocità di Boot OS.", "Evita di dover scrivere codice in inglese."],
      correctAnswer: 1,
      explanation: "I pattern disaccoppiati Microservices scambiano bit usando protocolli neutri standard come HTTP o gRPC; un container NodeJS non ha idea di interagire con un API processata da un contenitore compilato in Python o C++."
    },
    {
      id: "kcna-3-q5",
      question: "Cos'è concettualmente una 'PVC' (PersistentVolumeClaim) nel processo di Data Storage Statefull secondo K8S?",
      options: ["Una partizione del disco rigido che viene permanentemente e irrimediabilmente formattata all'avvio temporaneo del pod.", "Un manifest YAML. Agisce come la 'Richiesta/Prescrizione' formale fatta da un utente developer consumatore di archiviazione per ottenere l'uso esclusivo (o di lettura multi-host) su disco di specifiche performance/dimensione, il quale Kube accoppierà dinamicamente (binding) scavando da risorse su backend remoti disponibili o PV.", "Un database interno in memoria usato solo da Prometheus.", "Una sigla di sicurezza per lo snapshot d'immagine container usato nei container registries."],
      correctAnswer: 1,
      explanation: "Con la PVC l'user dichiara 'voglio 5Gb generici veloci', delegando al cloud AWS o al driver CSI interno la provvigione (se dinamica) reale del PV d'abbinare."
    },
    {
      id: "kcna-3-q6",
      question: "Cosa dichiara tipicamente il documento architetturale teorico dei 'Twelve-Factor App' riguardo la configurazione di credenziali o endpoint?",
      options: ["Vanno rigorosamente cablati testualmente nel codice del repo in chiaro (es costanti static class Java) per massimizzare le stabilità dei deployment tra un ambiente e l'altro.", "Vanno staccati dal codice e gestiti unicamente da Variabili d'Ambiente, affinché la build dell'immagine sia creata immutabile una volta sola in CI e possa perciò essere riciclata senza ricompilazione sia a livello Staging che Prod variando solo le Environment Vars all'avvio container.", "Non possono esistere file di configurazione, solo flag in riga di comando passate ai Kernel Linux del server locale.", "Devono essere incapsulati in un container separato."],
      correctAnswer: 1,
      explanation: "Secondo la regola n. 3 del manifesto di Heroku(12-factor), la Conf deve distaccarsi dal package e seguire rigorosamente il Runtime locale tramite Variabili Env iniettate in tempo di deploy."
    },
    {
      id: "kcna-3-q7",
      question: "Qual è un progetto Open Source della CNCF ampiamente considerato come lo sfidante di facto per la raccolta, l'analisi vettoriale e l'interrogazione ad altissima velocità di Logging aggregato Cloud-Native?",
      options: ["Fluentd (ed Fluent Bit)", "MySQL Server", "Vitess DB Cache", "ReactJS L7-router"],
      correctAnswer: 0,
      explanation: "In ambito logging formatters (che prelevano std/out stdout text dei var log dai container nodi, la processano, e reindirizzano a destinazioni come ElasticSearch) progetti eccellenti stabiliti e in Graduated CNCF status sono ad esempio Fluentd o FluentBit."
    },
    {
      id: "kcna-3-q8",
      question: "A quale tipologia appartiene lo strumento Helm secondo la concezione CNCF nel mondo K8s?",
      options: ["Container Network Interface CNI.", "Runtime Kernel euleriano.", "Un Service Mesh Control Plane UI.", "Un Package Manager templare che distribuisce applicazioni complesse complete e i loro asset YAML (come database ed agenti) aggregate in unità monolitiche astratte chiamate 'Charts'."],
      correctAnswer: 3,
      explanation: "Helm (Graduated Project) semplifica immensamente la manutenzione riducendo 30 manifest in 1 singolo modulo grafico installabile via `helm install redis-server bitnami/redis` un po' come `apt-get` su Debian."
    },
    {
      id: "kcna-3-q9",
      question: "Cosa garantisce che lo schema di rilascio e i messaggi standard per descrivere una trace diagnostica di Cloud Native siano universalmente compatibili ed accettati indipendentemente dai software dei vendor venduti e installati (Dynatrace, Jaeger, Datadog)?",
      options: ["La rete neurale LLM Chat-gpt.", "Il framework OpenTracing fuso assieme ad OpenCensus per creare il progetto onnicomprensivo 'OpenTelemetry' (OTel).", "Gli agenti Custom nativi di Docker Engine CLI.", "La Cloud Native Storage Foundation Interface CSI."],
      correctAnswer: 1,
      explanation: "OpenTelemetry detta il formato universale di logica per Tracer, Logger e Metriche."
    },
    {
      id: "kcna-3-q10",
      question: "Nei Microservizi esiste un potenziale e devastante fallimento 'esponenziale' (Cascading Failure): Se Servizio B diviene insensatamente troppo lento a rispondere, accumula tutte le richieste aperte in Servizio A che lo attendeva in timeout, uccidendo di riflesso tutta l'architettura originaria. Che Pattern Service Mesh previene ciò e interrompe le connessioni in attesa a monte chiudondole col pugno duro in base ai fallimenti continui avvertiti in vicinanza?",
      options: ["Circuit Breaker Pattern", "Cache L1 CPU Bypass", "Singleton Init Pattern", "CronJob Descheduler"],
      correctAnswer: 0,
      explanation: "Il Circuit breaker (Salvavita) scatta per evitare valanghe e cortocircuiti a catena nell'eventualità un anello isolato del cluster non sia più reattivo a una chiamata TCP sincrona dopo N avvertimenti."
    }
  ],

  // Topic 4: Cloud Native Observability (5 domande - 8%)
  4: [
    {
      id: "kcna-4-q1",
      question: "Quali sono i tre fondamentali pilastri per diagnosticare Cloud-Native ed il Troubleshooting in ecosistema Observability OTel?",
      options: ["Metrics (Dati Matematici), Logs (Log Testuali immutabili) e Traces (Tracciamento temporale millimetrico Distributed).", "Allarmi Grafici, Autoscaling Logs e Webhook DB.", "Dashboard Grafana, CNI, kubelet process.", "SAST, Oauth2 Tokens, PromQL."],
      correctAnswer: 0,
      explanation: "I 3 pilastri dell'Observability sono M.L.T. Indivisibili fra loro, coprono ogni lato oscuro di microservizi incomprensibili distribuiti alla rotta di collo."
    },
    {
      id: "kcna-4-q2",
      question: "Nel contesto Prometheus, che significa esattamente dire che si appoggia ad un meccanismo in 'PULL Model (Scraping)'?",
      options: ["Significa che le tue App applicative non sono invogliare ad effettuare telefonate verso l'IP di Prometheus. È Prometheus (server host principale) che interroga/tira attivamente con HTTP GET l'endpoint locale /metrics delle risorse e dei Pod registrati in cluster ad ogni tick.", "Significa che usa GitOps per farsi mandare da git gli zip di aggiornamento dei logs giornalieri.", "Significa che il server aspetta pacifico messaggi in Push sul canale HTTPS dai container che generano un alert.", "Prometheus contatta istantaneamente Datadog Cloud ed estrae Pull API limitati L7."],
      correctAnswer: 0,
      explanation: "È il controllore che suona al campanello della app controllata in modo continuo. A differenza dell'antico Push model, se Prometheus stravolto cade, i target app/K8s pod continuano tranquilli ad operare non saturando i bus di rete attendendo il server DB master in timeout loops."
    },
    {
      id: "kcna-4-q3",
      question: "Stai per usare lo standard OpenTelemetry per esportare uno strumento chiamato Jaeger o Zipkin CNCF. Che tipo esatto di risorsa diagnostica producono questi applicativi all'interno?",
      options: ["Distributed Tracing (Tracing distribuito, spans temporali calcolati in sequenza per richieste spalmate attraverso vari e disparati microservizi remoti).", "Metriche di IOps OS Node grezzi.", "Notifiche push Webhook basate su anomalie finanziare (FinOps).", "Creano log grezzi di boot systemd."],
      correctAnswer: 0,
      explanation: "Jaeger raccoglie gli span e ne tesse la vita end-to-end. Permette a SRE / Dev Teams di analizzare quanto una intera transazione (es. Login + Profilo + Immagini) abbia impiegato fra vari proxy."
    },
    {
      id: "kcna-4-q4",
      question: "La pratica FinOps in ecosistemi K8s è un tema cruciale ed avvolge l'utilizzo e visibilità di tecnologie OTel. Cosa si prefigge?",
      options: ["Applicare le tasse IVA fiscali in automatico con un container isolato sui pod di ecommerce nel server.", "Creare visibilità analitica per identificare macroscopiche emorragie di fatturato generato da Cloud Sprawl (Migliaia di Euro sborsati mensilmente ad AWS per Cluster/Nodi server scalati con orfani inutilizzati), responsabilizzando sia dev che business teams unendo finanza e ops in un unico contesto DevOps.", "Aggiungere wallets crittovalute dentro ai file yaml Helm.", "Vietare le scale orizzontali e bloccare definitivamente le pipeline CI durante i giorni festivi in base ai fusi orari bancari."],
      correctAnswer: 1,
      explanation: "Il FinOps aiuta a tagliare e calcolare accuratamente il Run-Rate cloud per singola Namespace isolato K8s (capendo chi spende per container over-provisionati)."
    },
    {
      id: "kcna-4-q5",
      question: "Costruendo un robusto piano di Alert Manager tramite i Metrics Prometheus, vuoi essere avvisato ogni qualvolta vi è un'anomalia. Che linguaggio scrivi per effettuare query storiche matematiche nel database ad alberi temporali Cloud Native?",
      options: ["MySQL Standard Relazionale", "MongoDB Aggregation Json Language NoSQL", "Regex Regular Expression sed pattern", "PromQL (Prometheus Query Language)"],
      correctAnswer: 3,
      explanation: "PromQL fornisce aggregazioni robuste e matematiche spaziali come rate(), histogram_quantile() ideate specificamente da CNCF e integrate profondamente nativamente nelle ui metric Grafana e Alert."
    }
  ],

  // Topic 5: Application Delivery & Security (5 domande - 8%)  (Faremo 4 domande per completare esattamente 60: 28+13+10+5+4)
  5: [
    {
      id: "kcna-5-q1",
      question: "Come si distingue la tecnica di rilascio architetturale nota come 'GitOps' da un tipico Deployment a pipeline Continuous Delivery e Continuous Integration passata Push-Mode?",
      options: ["Con GitOps è espressamente vietato l'automatismo. L'umano deve compilare un container via shell prompt.", "Git diventa l'Assoluta ed Esclusiva Source of Truth del target desiderato. Non ci sono robot o script in GitHub Action e Jenkins C.I che iniettano ed eseguono comandi da remonto (es. kubectl apply) esposti a compromissioni di token. È un Controller Operator che gira in locale IN cluster che aspetta segnali PULL leggendo attivamente il Git Rep e sincronizzandosi su base costante alle pull requests merge, uccidendo variazioni manuali in cluster.", "GitOps si avvale dell'uso di Helm Charts ma rimuove i file testuali dalla repo salvando il binario .zip su S3 Amazon cloud e distribuendo da li alla Prod.", "In GitOps è obbliogatorio l'uso spregiudicato esclusivo di Docker hub."],
      correctAnswer: 1,
      explanation: "La pull strategy e la convergenza. ArgoCD (o Flux), un progetto Graduated CNCF, osserva differenze (Drift detection). Se uno sviluppatore modifica manualmente la risorsa via kubectl scavalcando i processi revisionati github, ArgoCD cancella la mod del worker portando la piattaforma coercitivamente alle direttive salvate strict in Git master-branch YAML Files."
    },
    {
      id: "kcna-5-q2",
      question: "Nel modello di Sicurezza Cloud Native insegnato (le famose '4 C's'), qual è il livello difensivo più largo di base di cui è solitamente preposto e incaricato responsabile il Vendor fornitore (AWS/Datacenter)?",
      options: ["Il livello Code (Secure Code analysis anti buffer overflow in java app).", "Il livello Cloud (ovvero il Data Center infrastrutturale fisico e la rete server OSI-2 perimetrale base).", "Il livello Cluster (Sicurezza logica IAM di K8S RBAC token Auth).", "Il livello Container (Isolamento Root e Kernel Namespaces cgroups)."],
      correctAnswer: 1,
      explanation: "Secondo il modello 4-C Defense in Depth: l'infrastruttura Cloud garantisce i muri (AWS VPC, Security groups HW edge, firewall Hardware), le porte serrate proteggendo K8s server da minaccie brutali DDOs in base. Il dev e DevOps configurano invece il restante."
    },
    {
      id: "kcna-5-q3",
      question: "Che cos'è la funzionalità cruciale nota come 'Network Policy' applicabile mediante le regole yaml nei namespaces k8s?",
      options: ["Un algoritmo usato internamente dal kernel scheduler per misurare limit di RAM e CPU limits per calcolare l'assegnazione.", "Regole a livello di Livello OSI 3 / 4 implementate di background dai plugin CNI (Calico/Cilium) atte a circoscrivere e gestire l'intra-comunicazione di traffico Microservizi esibendolo attraverso l'autorizzazione granulare ingress/egress di Pod A verso Pod B in un ecosistema di fiducia 'Zero-Trust Internal'.", "Una restrizione di permesso d'utente a disattivare volumi EBS assegnati tramite policy Identity Access.", "Un settaggio per impostare coreDNS con record wildcard per domini extra www non risolti su internet pubblico."],
      correctAnswer: 1,
      explanation: "Se un frontend pod è bucato non deve parlare al database backend container a prescindere dal server condiviso. Applicando le regole di blocco Deny-All NetworkPolicies un hacker viene blindato non potendo spostarsi lateralmente tra microservizi isolati."
    },
    {
      id: "kcna-5-q4",
      question: "La tua azienda applica il principio di Security Dev-Sec-Ops 'Shift Left' sui Container. Quale opzione rappresenta concretamente l'azione tecnica tipica da compiere in quest'ottica?",
      options: ["Spegnere istanze i nodi Worker di Venerdi in orario non di ufficio manuale in console.", "Contrattaccare le botnet malevoli di internet con scan nmap attivi via terminal server cloud.", "Includere automazioni rigide all'interno della Pipeline CI/CD che scannerizzano l'immagine Docker creata per le vulnerabilità e i bug Software CVE prima di salvarla assiduamente in un Image Registry da inviare alla Prod (se il file java libreria SpringBoot è vetusto log4j e vulnerabile, la pipeline va in rosso e arresta l'Application Delivery).", "Consentire container privilegiati tramite Pod Security Admission bypassando il security contest per i ruoli applicati ad utenza admin."],
      correctAnswer: 2,
      explanation: "'Spingere a Sinistra' nell'arco temporaneo di vita dell'SDLC significa trovare difetti di sicurezza subito all'inizio del processo di Continuous Integration build (la 4a C : CODE Sec), molto prima di finire accanendosi invano nel disperato momento della produzione online."
    }
  ]
};

export const allQuizzes_it = Object.values(quizzes_it).flat();
