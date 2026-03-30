export const quizzes_en = {
  // Topic 1: Kubernetes Fundamentals (15 questions)
  1: [
    {
      id: "kcna-1-q1",
      question: "Which component of the Kubernetes Control Plane acts as a datastore for the entire cluster's state?",
      options: ["kube-apiserver", "kube-scheduler", "etcd", "kube-controller-manager"],
      correctAnswer: 2,
      explanation: "etcd is a highly available key/value datastore that Kubernetes uses to store all data related to the cluster's state and configuration."
    },
    {
      id: "kcna-1-q2",
      question: "Which Node-level component is responsible for the proper functioning and health of the Containers within a Pod assigned to that Node?",
      options: ["kube-proxy", "kubelet", "containerd", "cloud-controller-manager"],
      correctAnswer: 1,
      explanation: "The kubelet is the agent running on each worker node. It ensures that the containers described in the PodSpecs are running and healthy by communicating with the Container Runtime."
    },
    {
      id: "kcna-1-q3",
      question: "In Kubernetes, how are Pods logically grouped and assigned to Controllers and Services via YAML manifests?",
      options: ["Through Annotations", "Through Taints and Tolerations", "Through IP Rules in Security Groups", "Through Labels and Selectors"],
      correctAnswer: 3,
      explanation: "Labels (key-value tags) and Selectors (which specify which labels to target) are the basic mechanism by which K8s groups resources."
    },
    {
      id: "kcna-1-q4",
      question: "Why is it considered an antipattern to create and run a single 'naked' Pod without any overlying Resource Type?",
      options: ["Because a naked Pod can never have a Service and would not receive traffic.", "Because Pods are ephemeral. Without a controller like a Deployment or ReplicaSet, Kubernetes will never resurrect it on another node in case of failure.", "Because Kubelet prevents orphaned Pods from running for security reasons.", "Because storage (Persistent Volume) cannot be mapped without a Deployment."],
      correctAnswer: 1,
      explanation: "Deployments/ReplicaSets guarantee that the Pod is constantly replicated (High Availability). Single naked Pods die forever upon the first server error."
    },
    {
      id: "kcna-1-q5",
      question: "If you have a Deployment named 'web' and want to scale the number of replicas to 7 using an imperative one-line command, which command do you run?",
      options: ["kubectl set replicas deployment web 7", "kubectl increase pod web --count=7", "kubectl scale deployment web --replicas=7", "kubectl update deployment web size=7"],
      correctAnswer: 2,
      explanation: "The correct command to change the desired state of replicas imperatively is 'kubectl scale deployment <name> --replicas=<num>'."
    },
    {
      id: "kcna-1-q6",
      question: "A Service in Kubernetes creates which type of Access for a group of Pods by default?",
      options: ["NodePort", "ClusterIP", "LoadBalancer", "ExternalName"],
      correctAnswer: 1,
      explanation: "If you do not specify the type in a Service YAML, Kubernetes will automatically assume ClusterIP, which provides an internal IP accessible only from within the cluster itself."
    },
    {
      id: "kcna-1-q7",
      question: "Which pattern is commonly used in a multi-container Pod when you want to add log forwarding functionality without altering the main app's code?",
      options: ["Ambassador Pattern", "InitContainer Pattern", "Sidecar Pattern", "Adapter Pattern"],
      correctAnswer: 2,
      explanation: "The sidecar pattern involves placing a utility container (e.g., a log collector or proxy) alongside the main application container within the same Pod."
    },
    {
      id: "kcna-1-q8",
      question: "Where do you preferably store TLS keys, database API tokens, or passwords within the cluster natively to decouple them from the container image?",
      options: ["In SHA-256 encoded ConfigMaps", "In a CustomResourceDefinition (CRD)", "In a Secret object", "Hand-coded into the Dockerfile ENV"],
      correctAnswer: 2,
      explanation: "K8s Secret objects exist specifically to hold sensitive payloads, which will be stored base64-encoded (or encrypted at rest) to detach passwords from source code."
    },
    {
      id: "kcna-1-q9",
      question: "What is the purpose of the 'kube-system' namespace in K8s?",
      options: ["It is the default environment if a user specifies none.", "It is designed to run untrusted privileged containers of other cloud users.", "It exclusively hosts Control Plane components and vital cluster processes (e.g., coredns, kube-proxy).", "It is an empty space used solely by PersistentVolumes."],
      correctAnswer: 2,
      explanation: "The kube-system namespace is initialized automatically upon bootstrap and protects CoreDNS, etcd, proxies, internal controllers, and infrastructural CNI drivers."
    },
    {
      id: "kcna-1-q10",
      question: "You wish to update your Pods without incurring any user-side downtime. Which native Resource progressively eliminates an obsolete Pod, waits for the new one to start normally, and only then destroys another?",
      options: ["StatefulSet", "Ingress Controller", "ReplicaSet", "Deployment (Rolling Update)"],
      correctAnswer: 3,
      explanation: "Deployments natively implement the Rolling Update Strategy, permitting continuous updates with zero downtime."
    },
    {
      id: "kcna-1-q11",
      question: "Which command is used to visually intercept real-time traffic between your local port 8080 and port 80 of a specific Kubernetes Pod?",
      options: ["kubectl proxy", "kubectl port-forward", "kubectl expose tunnel", "kubelet bind-port"],
      correctAnswer: 1,
      explanation: "'kubectl port-forward' creates a temporary TCP tunnel binding a port on your local machine to a port on a specific Pod or Deployment."
    },
    {
      id: "kcna-1-q12",
      question: "Which component actively executes calls to the cloud provider (AWS/GCP/Azure) should you decide to apply 'type: LoadBalancer' to a Service?",
      options: ["kube-apiserver", "Kubelet", "cloud-controller-manager", "etcd"],
      correctAnswer: 2,
      explanation: "The cloud-controller-manager integrates cloud provider-specific functions; when it reads a Service requesting a load balancer, it connects to the cloud APIs (e.g., AWS EC2 API) to physically provision the infrastructure."
    },
    {
      id: "kcna-1-q13",
      question: "When a node fails and drops unrecoverably offline (Status: NotReady), roughly how long do K8s Controllers wait by default before evicting and rescheduling its Pods onto healthy nodes?",
      options: ["Immediately (1 second)", "Around 5 minutes", "After 24 hours", "Never, they wait for human intervention"],
      correctAnswer: 1,
      explanation: "By default, kube-controller-manager has a 'pod-eviction-timeout' configured to 5 minutes to avoid split-brain scenarios due to momentary network hiccups."
    },
    {
      id: "kcna-1-q14",
      question: "What is the purpose of the CoreDNS component within the standard K8S architecture?",
      options: ["It provides internal name resolution mapping (e.g., 'backend.default.svc.cluster.local') to the dynamic IPs of internal Services.", "It creates names exposed to the Internet using Amazon Route53.", "It prevents cross-site scripting attacks from NodePorts.", "It helps compile text strings to create YAML manifest files."],
      correctAnswer: 0,
      explanation: "CoreDNS acts as the cluster's internal DNS server. Without CoreDNS, Pods would not be able to resolve each other via predictable names."
    },
    {
      id: "kcna-1-q15",
      question: "Annotations in Kubernetes are structurally similar to Labels (key-value pairs). What is their key functional difference?",
      options: ["Annotations are only used to hide encrypted passwords.", "Annotations cannot be used to select objects by the scheduler (not queryable); they only contain long informational metadata for external tools or rollout revisions.", "Annotations alter Ingress network routing weights, labels do not.", "Annotations are strictly reserved for ReplicaSet objects."],
      correctAnswer: 1,
      explanation: "While Labels act as essential identifiers for 'Selectors', Annotations hold large unstructured payloads (like git commits, builder ids) that K8s ignores for object selection."
    }
  ],

  // Topic 2: Container Orchestration (10 questions)
  2: [
    {
      id: "kcna-2-q1",
      question: "Which Container Runtime standard ousted the direct dependency on the Docker daemon (Dockershim) in Kubernetes?",
      options: ["LXC (Linux Containers)", "Container Runtime Interface (CRI)", "Virtual Machine Manager (VMM)", "rkt (Rocket)"],
      correctAnswer: 1,
      explanation: "CRI permits the use of purer, faster, low-level runtimes, free from the heavy superstructures of a full Docker engine. Preeminent CRI-compliant runtimes are containerd and CRI-O."
    },
    {
      id: "kcna-2-q2",
      question: "If a Container's memory (RAM) usage heavily exceeds the 'Limits' parameter established in the PodSpec, what happens at the Worker Node OS level?",
      options: ["The Container's process slows down dramatically without crashing (Memory Throttling).", "It horizontally scales by automatically allocating virtual memory.", "Kube-proxy isolates it from the Service by blocking incoming traffic.", "The Kernel reacts by killing it instantly (OOMKilled) to preserve the host node's integrity."],
      correctAnswer: 3,
      explanation: "Memory (RAM) is an incompressible resource. If it exhausts the real hardware quota granted at the cgroups boundary, the Linux Kernel's OOM Killer intervenes, aborting the process."
    },
    {
      id: "kcna-2-q3",
      question: "Which PodSpec parameter is carefully analyzed by the Scheduler to ensure mathematically pre-allocable physical space exists on the node before scheduling it there?",
      options: ["Liveness Probe", "Tolerations", "Requests", "StorageClass Volume bindings"],
      correctAnswer: 2,
      explanation: "The 'Requests' parameters (e.g., 200m CPU) act as an inalienable contract. The Scheduler mathematically guarantees that pre-allocated slice on the node. If a node's sum of requests yields 100%, no other pod can land there."
    },
    {
      id: "kcna-2-q4",
      question: "What problem does an orchestrator solve via the 'Pod Anti-Affinity' option?",
      options: ["Assigning Pods only to nodes with powerful GPU graphics cards.", "Preventing two or more Pods of the same vital service from being allocated simultaneously on the same node, protecting against a total application outage in case the host hardware explodes.", "Rejecting Kubelet Pod startups if the global OS RAM usage exceeds 80%.", "Automatically migrating DBs to faster NVMe storage upon performance drop."],
      correctAnswer: 1,
      explanation: "Anti-Affinity rules prevent lethal clustering; they force the Scheduler to place Pods of the same group onto geographically (or physically) separate nodes, maximizing High Availability."
    },
    {
      id: "kcna-2-q5",
      question: "In orchestration, typically what triggers the HPA (Horizontal Pod Autoscaler) to increase replicas?",
      options: ["Partial deletion of the Etcd database", "Events deriving from GitOps repository webhooks (Code Push)", "A high spike measured in Metrics usage like CPU / RAM relative to a target threshold (e.g., 80%)", "Continuous 500 errors on the proxy API generated by the Master node"],
      correctAnswer: 2,
      explanation: "The Horizontal Autoscaler continuously polls the metrics-server and increments the replica count of the underlying ReplicaSet to dilute the load if it surpasses the defined target threshold."
    },
    {
      id: "kcna-2-q6",
      question: "What is a 'Taint' applied to a Kubernetes Node?",
      options: ["A hardware firewall generated for that node.", "A repellent mark (e.g., a Stain) causing the Scheduler to 'retreat', defaulting to preventing Pod assignment to that node unless the Pod possesses a specific compensatory 'Toleration'.", "An isolated L4 load balancer on specific hosts.", "A CRI runtime configuration for legacy containers."],
      correctAnswer: 1,
      explanation: "Master nodes (Control plane) are usually 'Tainted' by default. Therefore, the Scheduler refuses to insert application containers to preserve Master energy. Only those with Tolerations for that Taint can bypass it."
    },
    {
      id: "kcna-2-q7",
      question: "Which Probe does the Kubelet use to internally understand if the base container process inside the pod (e.g., Nginx web server) has successfully started up and hasn't hung during boot?",
      options: ["OOM Probe", "Readiness Probe", "Liveness Probe", "Startup Probe"],
      correctAnswer: 3,
      explanation: "The Startup Probe delays the start of other checks for slow-booting apps. The Liveness Probe periodically checks if the app is deadlocked and needs a restart. The Readiness Probe checks if the pod can actually serve TCP/IP traffic."
    },
    {
      id: "kcna-2-q8",
      question: "What structurally happens inside Kubernetes if you explicitly specify CPU Limit parameters for a particular Pod?",
      options: ["Orchestration will employ Linux Control Group (cgroup) technology. If the pod tries to absorb CPU cycles beyond the limit, it will be Throttled (slowed down without crashing), allowing it only the granted millisecond fractions.", "Kubelet will trigger an instant OOM error restart the moment it touches the peak.", "It is converted from a Pod to a ReplicaSet for scaling management.", "The apiserver downgrades its associated priorityClass compared to CoreDNS pods."],
      correctAnswer: 0,
      explanation: "For CPU, OS kernel cgroups enforce throttling. The application process runs slower instead of blocking completely."
    },
    {
      id: "kcna-2-q9",
      question: "Which pattern and architectural component guarantees that a specific Pod is cloned and runs exactly one identical instance for EVERY single physical worker node in the cluster?",
      options: ["DaemonSet", "CronJob", "StatefulSet", "Horizontal Pod Autoscaler"],
      correctAnswer: 0,
      explanation: "A DaemonSet ensures one Pod uniquely runs 1-to-1 per node (if I have 150 active VMs, I'll invariably have 150 log-forwarder agents on each). If a 151st server joins, the Master automatically drops a clone on it."
    },
    {
      id: "kcna-2-q10",
      question: "What specifically is Kustomize within the native K8s orchestration landscape?",
      options: ["A decentralized relational database integrated into etcd.", "A client-side tool (integrated into `kubectl -k`) for customizing YAML manifests declaratively via 'overlays' without resorting to text templating engines (like Helm).", "A specialized volume class in the cloud for AWS Elastic Block Storage CSI.", "A plugin that boots inside the Control Plane to rename Selectors based on node hashes."],
      correctAnswer: 1,
      explanation: "Kustomize is excellent for generating diverse manifests for 'Environments' (Dev, Prod, Staging) through folder-based Patching logic (bases and overlays). It is natively integrated into kubectl v1.14+."
    }
  ],

  // Topic 3: Cloud Native Architecture & CNCF (10 questions)
  3: [
    {
      id: "kcna-3-q1",
      question: "How is an Open Source project cataloged by the CNCF based on the highest level of maturity and extreme reliability (enterprise-ready, massive global adoption)?",
      options: ["Sandbox Project", "Graduated Project", "Incubating Project", "Alpha Project"],
      correctAnswer: 1,
      explanation: "The highest, most mature tier of the standard CNCF stack (e.g., Kubernetes, containerd, CoreDNS, Fluentd, Jaeger) is the 'Graduated' phase."
    },
    {
      id: "kcna-3-q2",
      question: "How does the FaaS (Functions as a Service / Serverless) paradigm primarily differ from standard distributions based explicitly on Microservices and Pod containers?",
      options: ["FaaS always requires a master node and a manually configured proxy node upon every invocation.", "It implements an invisible mechanism and millisecond polling (Scale-to-Zero). It executes business logic fragments triggered by events, completely abstracting any logical concept of pods, OS, or scaling from the developer.", "Serverless is restricted to local execution and cannot touch the cloud.", "Serverless frameworks are restricted strictly to PHP."],
      correctAnswer: 1,
      explanation: "Serverless brutally abstracts Ops operations; the developer writes raw lambda code. When the app sleeps, it is evicted from memory at $0.00 cost, and immediately reappears upon the first HTTP event trigger."
    },
    {
      id: "kcna-3-q3",
      question: "What is a 'Service Mesh' like Istio or Linkerd, and why do we introduce it alongside a container architecture?",
      options: ["A Mesh is a network of physical routers bought by the corporation to interconnect BGP wiring of K8s nodes across city zones.", "A dedicated infrastructure layer sitting as an interceptor amidst all microservices (using automated Proxy Sidecars). It adds reliability, targeted L7 balancing, traceability, and automatic Mutual encryption (mTLS) to flowing cluster traffic, completely unobtrusive to the actual code.", "An integrated etcd replacement by RedHat to accelerate scheduling.", "A Java library compiled alongside JARs."],
      correctAnswer: 1,
      explanation: "The essential mesh concept is to remove Network Security & HTTP Retries/Timeouts from the application developer's hands and delegate it to external 'Data Plane / Control Plane' architecture via Envoy Sidecars."
    },
    {
      id: "kcna-3-q4",
      question: "An undeniable advantage of classical Cloud Native Microservice architectures classified under 'Polyglot Programming' is:",
      options: ["They utilize a single massive centralized Relational Database storage for all modules to save Cloud resources.", "Each isolated component service can ideally be structured differently, employing the absolute best-performing programming Language and Framework suited for that specialized task (E.g., Node.js for Frontend rendering and Go for fast Backend data parsing; communicating fluently via APIs).", "It instantaneously compiles all docker images into a single native C binary for extreme OS Boot speeds.", "It circumvents the necessity to write code comments in English."],
      correctAnswer: 1,
      explanation: "Decoupled Microservice patterns exchange bits using agnostic protocols like HTTP or gRPC; a NodeJS container doesn't care if the API it interacts with originates from a Pod compiled in Python or Rust."
    },
    {
      id: "kcna-3-q5",
      question: "Conceptually, what is a 'PVC' (PersistentVolumeClaim) in the Statefull Data Storage process according to K8S?",
      options: ["A hard drive partition that is permanently and unrecoverably formatted upon temporary pod boot.", "A YAML manifest acting as a formal 'Request/Claim' made by a developer consumer for exclusive storage usage (or multi-host read) of specific performances/size. Kubernetes will dynamically pair (bind) this by scavenging resources from available remote backends or PVs.", "An internal in-memory database utilized merely by Prometheus.", "A security hash utilized for container image snapshots inside registries."],
      correctAnswer: 1,
      explanation: "With a PVC, the user declares 'I want 5Gb of fast generic storage', delegating the real provisioning (dynamic or static PV generation) to the AWS cloud or internal CSI driver."
    },
    {
      id: "kcna-3-q6",
      question: "What does the theoretical 'Twelve-Factor App' architectural document typically state regarding credential or endpoint configurations?",
      options: ["They must be stringently hardcoded in cleartext into the repo codebase (e.g. static class constants in Java) to maximize deployment stability across environments.", "They must be detached from the codebase and entirely managed via Environment Variables so the image construct is created immutably once in CI, and can subsequently be reused across Staging and Prod purely by varying Env Vars at container startup.", "Configuration files cannot exist; only command-line flags passed to the local server Kernel.", "They must be encapsulated in a distinct standalone container isolated in a dark web VPC."],
      correctAnswer: 1,
      explanation: "According to rule #3 of the Heroku manifesto (12-factor), Config must strictly separate from the package script and follow the local Runtime via Env Variables injected upon deployment."
    },
    {
      id: "kcna-3-q7",
      question: "Which CNCF Open Source project is widely considered the de facto standard for the collection, parsing, and high-speed querying of Cloud-Native aggregated Logging?",
      options: ["Fluentd (and Fluent Bit)", "MySQL Server", "Vitess DB Cache", "ReactJS L7-router"],
      correctAnswer: 0,
      explanation: "In the realm of logging formatters (which siphon stdout log texts from node containers, process them, and forward them to targets like ElasticSearch), prevailing CNCF Graduated projects are Fluentd or FluentBit."
    },
    {
      id: "kcna-3-q8",
      question: "What classification does the Helm tool fall under according to the CNCF Kubernetes paradigm?",
      options: ["Container Network Interface CNI.", "An Eulerian Kernel Runtime.", "A Service Mesh Control Plane UI.", "A templating Package Manager that deploys complex, complete applications and their aggregated YAML assets (like databases and agents) as abstract monolithic units called 'Charts'."],
      correctAnswer: 3,
      explanation: "Helm (Graduated Project) immensely simplifies K8s maintenance, reducing 30 manifests into a single installable package via `helm install redis bitnami/redis`, quite analogous to `apt-get` on linux architectures."
    },
    {
      id: "kcna-3-q9",
      question: "What guarantees that standard messages used to describe a Cloud Native diagnostic trace are universally compatible and accepted regardless of the vendor software sold and installed (e.g. Dynatrace, Jaeger, Datadog)?",
      options: ["The LLM Chat-gpt neural network core.", "The OpenTracing framework merged seamlessly with OpenCensus to construct the overarching 'OpenTelemetry' (OTel) project.", "Custom native agents belonging to the Docker Engine CLI.", "The Cloud Native Storage Foundation Interface CSI."],
      correctAnswer: 1,
      explanation: "OpenTelemetry is the CNCF standard that dictates the universal code and logic format for Tracers, Loggers, and Metrics across all modern platforms."
    },
    {
      id: "kcna-3-q10",
      question: "Microservices face a potential devastating cascading failure: If Service B becomes unreasonably slow to respond, it causes Service A to queue all timeout wait requests, reflexively murdering the whole application architecture. Which Service Mesh Pattern interrupts upstream waiting connections with an iron fist based on adjacent continuous failures?",
      options: ["Circuit Breaker Pattern", "Cache L1 CPU Bypass", "Singleton Init Pattern", "CronJob Descheduler"],
      correctAnswer: 0,
      explanation: "The Circuit Breaker pattern trips to prevent chain-reaction traffic avalanches if a remote cluster target fails to respond adequately after N warnings."
    }
  ],

  // Topic 4: Cloud Native Observability (8 questions)
  4: [
    {
      id: "kcna-4-q1",
      question: "What are the three fundamental pillars for diagnosing Cloud-Native ecosystems and Troubleshooting in the OTel Observability ecosystem?",
      options: ["Metrics (Mathematical Data), Logs (Immutable Textual logs), and Traces (Distributed millimeter-accurate temporal tracing).", "Graphical Alarms, Autoscaling Logs, and Webhook DBs.", "Grafana Dashboards, CNI, kubelet process.", "SAST, Oauth2 Tokens, PromQL."],
      correctAnswer: 0,
      explanation: "The 3 pillars of Observability are M.L.T. Inseparable from one another, they illuminate every dark corner of incomprehensible, high-speed distributed microservices."
    },
    {
      id: "kcna-4-q2",
      question: "Prometheus is considered the reigning champion of open-source cloud-native alerting. It is based on which internal formatting Storage Model?",
      options: ["Relational Graph RBMs.", "Time-series Database (Scalar values sampled cyclically, aggregated and strictly associated to Unix timestamps).", "SQL Server Columnar format.", "NoSQL Document Store (JSON blobs format like MongoDB)."],
      correctAnswer: 1,
      explanation: "Prometheus leverages TSDBs, consistently storing samples formatted similarly to `http_requests_total{method='get'} 1056 @timestamp`."
    },
    {
      id: "kcna-4-q3",
      question: "Within the Prometheus context, what does it mean to rely precisely on a PULL Model mechanism (Scraping)?",
      options: ["It signifies that your application containers are not tasked with placing calls toward the Prometheus IP. It is Prometheus (the host server) that proactively queries/pulls via HTTP GET the local /metrics endpoints of resources and Pods registered in the cluster at every tick.", "It means it uses GitOps to force git to send daily log update zips.", "It means the server peacefully waits for HTTPS Push messages from containers generating an alert.", "Prometheus instantly contacts Datadog Cloud extracting limited L7 Pull APIs."],
      correctAnswer: 0,
      explanation: "Prometheus is the controller constantly ringing the bell of the monitored app. Unlike antiquated Push models, if Prometheus staggers and crashes, target app Pods peacefully continue operations without saturating the network bus waiting endlessly on a downed Master DB server loop."
    },
    {
      id: "kcna-4-q4",
      question: "You are attempting to use the OpenTelemetry standard to export to the CNCF tool called Jaeger or Zipkin. What exact sort of diagnostic resource do these utilities produce internally?",
      options: ["Distributed Tracing (Tracing sequentially calculated timeline spans for requests smeared across assorted remote microservices).", "Raw Kernel OS Node raw IOps metrics.", "Webhook push notifications triggered by financial anomalies (FinOps).", "They emit and render raw systemd boot logs."],
      correctAnswer: 0,
      explanation: "Jaeger gathers spans and weaves an overarching end-to-end timeline traversal. It allows an SRE/Dev team to unearth that the '/buy-cart' API taking 8 seconds to load is bottlenecked exactly because of a 7.8-second delay stemming solely inside the SQL Auth Database housed in a remote 'Node Z' container."
    },
    {
      id: "kcna-4-q5",
      question: "The FinOps practice in K8s ecosystems is a crucial talking point often intertwined with OTel tech visibility. What is its main objective?",
      options: ["To apply fiscal VAT taxes automatically via an isolated container traversing the ecommerce server pods.", "To construct analytical visibility spotting massive revenue hemorrhages caused by Cloud Sprawl (Thousands of dollars billed monthly by AWS for scaled, un-utilized orphan cluster pods), thereby empowering Devs and Business teams alike by merging finance and OPS into one DevOps culture.", "To plug crypto-wallets directly into Helm yaml files.", "To unconditionally outlaw horizontal scaling and permanently freeze CI pipelines exclusively on bank holidays depending on timezones."],
      correctAnswer: 1,
      explanation: "FinOps helps surgically slash and accurately calculate the cloud Run-Rate for an isolated single K8s Namespace (understanding who burnt the Azure fee quota, optimizing Tiers, or properly right-sizing Cluster limit requests)."
    },
    {
      id: "kcna-4-q6",
      question: "An obsolete legacy application engineered without standard metric embedding libraries for OTel desperately needs scraping by Prometheus into metrics. What Pattern or accessory tool allows integrating Legacy App metrics straight into PromQL?",
      options: ["Prometheus Exporters (e.g., MySQL Exporter, Redis Exporter, cAdvisor).", "Fluentd Logs parsers.", "ArgoCD Webhooks reverse tunneled nodes.", "Replacing the dockershim engine with pure CRI-O."],
      correctAnswer: 0,
      explanation: "Exporters seamlessly transmute existing naked data into an exposed '/metrics' endpoint in a cleanly formatted TimeSeries ASCII arrangement, permitting Prometheus to scrape it indiscriminately."
    },
    {
      id: "kcna-4-q7",
      question: "Whilst assembling a sturdy Alert Manager blueprint utilizing Prometheus Metrics, you desire alerts for any threshold anomaly. Within the Cloud Native temporal tree database, which dialect do you write your historic, mathematical queries in?",
      options: ["Standard Relational MySQL", "MongoDB Json Aggregation Language", "Regex Regular Expression sed pattern", "PromQL (Prometheus Query Language)"],
      correctAnswer: 3,
      explanation: "PromQL provides potent spatial mathematical aggregators such as rate(), and histogram_quantile(), specifically architected by CNCF and deeply woven natively into Grafana and Alert configs."
    },
    {
      id: "kcna-4-q8",
      question: "What avant-garde Open Source CNCF tool is ordinarily instituted specifically and purely for the native aggregation of 'Logs' (raw textual string payloads)?",
      options: ["Grafana Loki / Promtail / Fluentd", "CoreDNS / Envoy Proxy L7", "Etcd / Kube-api Server", "Helm Repo Manifest Server"],
      correctAnswer: 0,
      explanation: "Projects akin to LOKI and Fluentd are exquisitely focused on managing syslog console arrays (The 2nd 'L' in the MLT observability pillars), digesting JSON formatting stemming from myriad sprawling K8s nodes onto a centralized, metadata-labeled index."
    }
  ],

  // Topic 5: Application Delivery & Security (7 questions)
  5: [
    {
      id: "kcna-5-q1",
      question: "How does the architectural launch technique denoted as 'GitOps' distinguish itself from an orthodox Push-Mode Continuous Delivery pipeline orchestration?",
      options: ["GitOps explicitly forbids automation; a human operator must compile the container via shell prompts.", "Git ascends as the Absolute and Exclusive Source of Truth for the desired cluster state. There are no robots or GitHub Action/Jenkins scripts infiltrating the cluster via pushed external tokens (e.g. `kubectl apply`). Rather, an Operator Controller operates locally IN-CLUSTER waiting for PULL signals by proactively parsing the Git repo and synchronizing perpetually, terminating manual rogue mutations directly in the servers.", "GitOps harnesses Helm Charts but extracts text files from repos, dumping binaries heavily into S3 amazon buckets and exclusively dispersing from therein.", "GitOps necessitates the unrestrained and exclusive employ of Docker Hub alone."],
      correctAnswer: 1,
      explanation: "The pull strategy drift convergence parameter guarantees this. ArgoCD (CNCF Graduated Project) oversees disparities (Drift detection). If an operator carelessly alters an active pod's memory via kubectl bypassing github merged limits, ArgoCD instantaneously murders the rogue edit, forcibly reverting the cluster towards adherence to the steadfast Git master-branch YAML structure."
    },
    {
      id: "kcna-5-q2",
      question: "Under the CNCF's '4 C's' Cloud Native Defense-in-Depth hierarchy, what is the largest, foundational outermost perimeter defensive shell mostly overseen by the Provider Vendor (e.g. AWS / Physical Datacenter)?",
      options: ["The Code layer (Static Java Application anti-overflow SAST bug checks).", "The Cloud layer (meaning the physical infrastructural Data Center, baseline network hardware edge OSI-2 routing rules).", "The Cluster layer (Logical K8S API IAM RBAC auth token restrictions).", "The Container layer (Host Kernel Isolation cgroups and Namespaces AppArmor policies)."],
      correctAnswer: 1,
      explanation: "Pursuant to the 4-C Defense in Depth framework, the Cloud tier safeguards the bricks and walls (AWS VPCs, physical edge firewalls against baseline brutal DDoS). Devs and DevOps operators manage internal clusters and downwards."
    },
    {
      id: "kcna-5-q3",
      question: "What crucial capability is afforded by enforcing 'Network Policies' via YAML inside native K8s namespaces?",
      options: ["An internal algorithm leveraged by the kernel scheduler to allocate calculable RAM/CPU limits.", "Imposition at the OSI 3 / 4 Layer executed via CNI background plugins (like Calico/Cilium), tasked with circumventing intra-communication traffic. They enforce microscopic egress/ingress mapping of Pod A explicitly toward Pod B in a 'Zero-Trust Internal' network ecosystem, blocking all unaccounted prying pods.", "A strict permission curtailment forbidding users from de-provisioning assigned EBS volumes.", "A configuration tuning wildcard CoreDNS records shielding unaddressed public internet traffic routing."],
      correctAnswer: 1,
      explanation: "If a weak frontend pod is hijacked, it must be thwarted from interfacing indiscriminately with the vital backend DB container irrespective of their shared server chassis. Enabling NetworkPolicies explicitly (Deny-All default) shutters access, permanently crippling an attacker trying lateral maneuvers within a multi-tenant microservice pool."
    },
    {
      id: "kcna-5-q4",
      question: "An elementary Prod Cloud Native Security infringement is engaging evasive container tags at Release stage. Why is publishing an image explicitly tagged as `nginx:latest` heavily execrated versus referencing `nginx:1.24.2-alpine@sha256-bd4v...` in tight DevOps K8s delivery chains?",
      options: ["Because the containerd runtime operator purely identifies and parses images tagged internally 'red' for OS compiling constructs.", "Because utilizing 'latest' annihilates traceability parameterization. If the base image is overwritten upstream with a catastrophic vendor-breaking update tomorrow, and one of your pods crashes 6 months later, kubelet 'pull-policy' will re-fetch the novel flawed version. Your local test setup from 6 months ago remains pristine whilst production burns instantly due to untracked divergence.", "The default Kube scheduler outright denies build assignments possessing 'latest' syntax void of validated API tokens.", "The recursive cluster DNS negates IP dynamic balancing for untagged cipher repositories."],
      correctAnswer: 1,
      explanation: "Rigorous image tagging guarantees Immutability and inflexible Versioning, both for Docker images pulled and for declarative Infrastructure as Code continuity records."
    },
    {
      id: "kcna-5-q5",
      question: "Your corporation establishes 'Shift Left' DevSecOps principles targeted at Containers. What procedural option concretely showcases a prototypical implementation action within this philosophy realm?",
      options: ["Shutting down K8s Worker node instances on Friday nights manually using the master prompt.", "Actively counter-attacking offensive internet botnets using cloud nmap terminal scans.", "Infusing adamant unyielding pipeline automations directly inside CI/CD logic paths that rigorously scan a generated Docker build image targeting identified CVE vulnerabilities and frail packages prior to pushing it towards Prod deployment (i.e. if the Java Log4j module discovers an inherent flaw, the Integration CI goes 'red', killing the Release).", "Providing clearance for privileged container access bypassing Admission Security profiles via administration user roles."],
      correctAnswer: 2,
      explanation: "Moving 'Security' steadily to the 'Left' during the lifetime of SDLC operations indicates hunting down security anomalies drastically early in code build progression (Code Section: 4th C); essentially averting catastrophes aggressively earlier rather than panicking in Live-Production environments."
    },
    {
      id: "kcna-5-q6",
      question: "Excluding isolated NetworkPolicies & external OIDC Authentication procedures, which fundamental native K8s Control Plane mechanism ensures robust overarching Security by analyzing WHO is explicitly Permitted to alter, invoke or purely visualize discrete components inside an API call context?",
      options: ["Network Security Default Groups", "Pod Security Guidelines (PSA)", "Role-Based Access Control (RBAC)", "ConfigMap TLS SSL Certificate checks policy lists"],
      correctAnswer: 2,
      explanation: "The mighty RBAC matrix (Roles, ClusterRoles, and matching RoleBindings YAML formats) reigns supreme as the Cluster's primary authorization engine. As an illustration, enforcing 'View API' privileges uniquely over isolated resources prevents an intern from executing a catastrophic delete sweep across unassigned multi-tenant namespaces."
    },
    {
      id: "kcna-5-q7",
      question: "Relating to Application Delivery infrastructure pipelines, what pivotal utility is furnished by a resilient Continuous Integration (CI) configuration midway through the pre-Orchestration lifespan of Cloud Native code?",
      options: ["Unmanned automation covering holistic Unit tests, Quality Assurance feedback loops and the airtight build/packaging of standalone Binaries/Docker Containers confined efficiently to an ephemeral server node (ergo excluding real online deployments).", "An instantaneous reverse-proxy directing inbound internet L7 traffic dynamically via dynamic IPs based routing nodes.", "Acting as local hands-on maintenance mechanism for upgrading Helm dependencies sequentially via shell.", "Providing intrinsic End To End AWS IPSEC encrypted IPS/Storage layers spanning deep cluster PV storage bounds."],
      correctAnswer: 0,
      explanation: "Classic C.I. (Continuous Integration tools e.g., GitHub Actions, Jenkins CI) undertakes the rigorous automated Build/Integration & Syntax linting processes preceding Live deployment. It delivers lightning-fast compilation insights returning code coverage directly to developers guaranteeing seamless package assemblies."
    }
  ]
};

export const allQuizzes_en = Object.values(quizzes_en).flat();
