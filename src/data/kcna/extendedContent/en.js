export const extendedContent = {
  terminalCommands: [
    {
      command: "kubectl get pods -n kube-system",
      description: "How do you view the list of Pods that make up the Kubernetes Control Plane (API Server, Etcd) assuming they are in the system namespace?"
    },
    {
      command: "kubectl create deployment nginx --image=nginx:alpine",
      description: "Your manager asks you to create a new Deployment named 'nginx' explicitly based on the 'nginx:alpine' image. What's the fastest imperative way from the console ignoring YAML?"
    },
    {
      command: "kubectl expose deployment backend --port=8080 --target-port=80 --type=ClusterIP",
      description: "Generate on the fly with kubectl a default internal Service (ClusterIP) on port 8080, for your 'backend' deployment internally exposed on port 80."
    },
    {
      command: "kubectl scale deployment web-app --replicas=5",
      description: "There's a traffic spike and you need to Horizontally scale (manual HPA) the 'web-app' deployment to instantly reach 5 total Replicas. What command do you run?"
    },
    {
      command: "kubectl logs deploy/frontend -c logging-sidecar",
      description: "The 'frontend' deployment contains two containers. How do you view the text logs of the one named 'logging-sidecar', bypassing the main app container?"
    }
  ],
  dragDropMatches: [
    { target: "etcd", match: "Consistent Key-Value DataStore" },
    { target: "kube-apiserver", match: "The REST Front-end endpoint" },
    { target: "kube-scheduler", match: "Assigns nodes to new Pods" },
    { target: "kubelet", match: "Worker daemon on each Node" },
    { target: "Service Mesh", match: "Envoy Sidecar Pattern" },
    { target: "ReplicaSet", match: "Guarantees X Pods are running" },
    { target: "Helm", match: "Apt/Brew of K8s (Package Manager)" },
    { target: "Prometheus", match: "Scrapes Time-Series Metrics" },
    { target: "Tracing (Jaeger)", match: "Searches for L7 latency bottlenecks" },
    { target: "GitOps", match: "Uses GIT as Single Source (Pull Model)" }
  ],
  memoryCards: [
    { concept: "ArgoCD / Flux", match: "Graduated Leader Tools for GitOps" },
    { concept: "Deployments", match: "Perform cascading YAML rollouts" },
    { concept: "Labels & Selectors", match: "Basic K8s grouping system" },
    { concept: "Service: LoadBalancer", match: "Communicates via API with AWS/GCP" },
    { concept: "Service: ClusterIP", match: "Isolated private Internal IP (DBs)" },
    { concept: "Secret", match: "Unencrypted Base64 Data" },
    { concept: "ConfigMap", match: "Env Variables detached from Image" },
    { concept: "CNCF", match: "Cloud Native Computing Foundation" }
  ],
  fillGapSentences: [
    {
      sentence: "In a Kubernetes cluster, when you send a CLI command to create 3 replicas, your request is directly saved as Desired State in the persistent module called __blank__.",
      blank: "etcd"
    },
    {
      sentence: "The instantaneous Kernel kill process applied to containers occurs when the process exhausts or exceeds its memory Limits. It is commonly logged in Kubernetes as __blank__.",
      blank: "OOMKilled"
    },
    {
      sentence: "The CNCF Security defense approach states that the foundational impenetrable outer shell containing everything is not the Container nor the Code, but the physical hardware layer called __blank__.",
      blank: "Cloud"
    },
    {
      sentence: "To logically isolate groups of pods and resources within a multi-tenant host cluster, without installing additional virtual machines, the formidable Linux __blank__ are used.",
      blank: "Namespaces"
    },
    {
      sentence: "Instead of a tedious server active 24/7, the event-driven and millisecond-billed model relies on architectures called Serverless or __blank__.",
      blank: "FaaS"
    }
  ],
  trueFalseStatements: [
    {
      statement: "Secrets in Kubernetes are automatically encrypted in total safety by the system before being saved on the Master Node's hardware disk.",
      isTrue: false,
      explanation: "Base Secrets are only encoded in Base64 (a highly readable normalization for anyone with DB/JSON dump access), but DO NOT present baseline AES encryption (Encryption-at-Rest must be activated or integrated via external KMS Vaults)."
    },
    {
      statement: "Service Mesh technology like Istio injects a Proxy container directly into the base execution folder of the system, amidst the network of all Pods, to manage them externally as an L7 whole.",
      isTrue: false,
      explanation: "It uses the 'Sidecar Pattern' (Single micro-proxies alongside EVERY application pod in the network acting like a shell). Not a single blocking proxy, but thousands of sidecars talking coverlty for routing."
    },
    {
      statement: "A typical Worker Node contains the Kubelet Agent, Kube-Proxy, and a Container Runtime.",
      isTrue: true,
      explanation: "Correct. Every single node operates with a Kubelet receiving instructions from the master, and attaches to a kube-proxy handling IP Table logic."
    },
    {
      statement: "Prometheus natively uses a 'Push' mechanism to force microservice servers to send all their active data to it in case of errors.",
      isTrue: false,
      explanation: "Prometheus conceptually works ONLY via cyclic Scraping extraction / Pull Model (it reads /metrics sources from servers every N seconds). It is the logical AlertManagers that evaluate the received Pulls."
    },
    {
      statement: "The Docker engine is no longer the sole standard and has been deprecated in favor of a neutral interface (CRI) in the Graduated Kubernetes project.",
      isTrue: true,
      explanation: "Absolutely. Since 2022 K8s does not support Dockershim. CRI-compliant Runtimes (Containerd, CRI-O) are the predominant engines today."
    }
  ]
};
