export const quizzes_en = {
  1: [
    {
      id: "kcna-1-q1",
      question: "Which component of the Kubernetes Control Plane acts as a datastore for the entire cluster's state?",
      options: [
        "kube-apiserver",
        "kube-scheduler",
        "etcd",
        "kube-controller-manager"
      ],
      correctAnswer: 2,
      explanation: "etcd is a highly available key/value datastore that Kubernetes uses to store all data related to the cluster's state and configuration."
    },
    {
      id: "kcna-1-q2",
      question: "Which Node-level component is responsible for the proper functioning and health of the Containers within a Pod assigned to that Node?",
      options: [
        "kube-proxy",
        "kubelet",
        "containerd",
        "cloud-controller-manager"
      ],
      correctAnswer: 1,
      explanation: "The kubelet is the agent running on each worker node. It ensures that the containers described in the PodSpecs are running and healthy by communicating with the Container Runtime."
    },
    {
      id: "kcna-1-q3",
      question: "In Kubernetes, how are Pods logically grouped and assigned to Controllers and Services via YAML manifests?",
      options: [
        "Through Annotations",
        "Through Taints and Tolerations",
        "Through IP Rules in Security Groups",
        "Through Labels and Selectors"
      ],
      correctAnswer: 3,
      explanation: "Labels (key-value tags) and Selectors (which specify which labels to target) are the basic mechanism by which K8s groups resources and understands to which target load balancers or ReplicaSet rules apply."
    },
    {
      id: "kcna-1-q4",
      question: "You are deploying microservices. Why is it considered an antipattern to create and run a single 'naked' Pod without any overlying Resource Type?",
      options: [
        "Because a naked Pod can never have a Service and would not receive traffic.",
        "Because Pods are ephemeral. Without a controller like a Deployment or ReplicaSet, if the Pod dies, Kubernetes will never resurrect it on another node.",
        "Because Kubelet prevents orphaned Pods from running on the runtime for security reasons.",
        "Because storage (Persistent Volume) cannot be mapped without a Deployment."
      ],
      correctAnswer: 1,
      explanation: "Deployments/ReplicaSets guarantee that the Pod is constantly replicated (High Availability). Single naked Pods die forever upon the first server error without being recreated."
    }
  ],
  2: [
    {
      id: "kcna-2-q1",
      question: "In the transition to lightweight Cloud Native, which Container Runtime standard officially ousted and replaced the heavy reliance on the Docker daemon (dockershim) in Kubernetes?",
      options: [
        "LXC (Linux Containers)",
        "Container Runtime Interface (CRI) via pure runtimes like containerd or CRI-O",
        "Virtual Machine Manager (VMM)",
        "rkt (Rocket)"
      ],
      correctAnswer: 1,
      explanation: "Starting from v1.24, Kubernetes only supports the abstract CRI standard. The most popular CRI runtimes (and absolute global defaults) are containerd or CRI-O."
    },
    {
      id: "kcna-2-q2",
      question: "What problem does a Container orchestrator solve by applying 'Anti-Affinity' rules?",
      options: [
        "It prevents containers requiring GPUs from being scheduled on CPU-Only nodes.",
        "It prevents two identical Pods of a critical deployment from landing on the same physical node, preventing a total outage in the event that the hardware node catches fire.",
        "It allows kube-proxy to redirect http calls only outside the subnet to mitigate DDoS attacks.",
        "It increases the CPU allocated to the Container Runtime (CRI-O) when it is under stress."
      ],
      correctAnswer: 1,
      explanation: "Anti-Affinity tells the Scheduler: 'Do not place my Pod_2 on Node_A if Pod_1 is already on Node_A', ensuring true high availability and hardware fault tolerance."
    },
    {
      id: "kcna-2-q3",
      question: "In the resource management of a Kubernetes Pod, what is the consequence for a container that breaches the parameter defined by 'Limits' related to Memory (RAM)?",
      options: [
        "It gets progressively slowed down by limiting CPU clock cycles (Memory Throttling).",
        "Instant horizontal scaling is triggered to lighten the load.",
        "The resource notices nothing, but Kubernetes sends a Warning to the API Server.",
        "It gets brutally terminated (OOMKilled) by the base kernel to protect the rest of the server node."
      ],
      correctAnswer: 3,
      explanation: "Since there is no physical means to slow down or queue reckless use of RAM once the maximum limit is breached, the Linux OOM (Out Of Memory) Killer annihilates the entire container process to save the host OS."
    },
    {
      id: "kcna-2-q4",
      question: "You are setting a container that needs a certain amount of CPU not to crash on startup and to be registered. How do you indicate to the Scheduler that the pod must absolutely land where this specific compute window is available?",
      options: [
        "Using 'resources.requests: CPU'.",
        "Defining HPA (Horizontal Pod Autoscaler).",
        "Increasing the NodePort level.",
        "Exclusively using etcd annotations and labels."
      ],
      correctAnswer: 0,
      explanation: "'Requests' ask the Kubernetes node scheduler for guarantees, ensuring the minimum necessary hardware specifications before placing a pod."
    }
  ],
  3: [
    {
      id: "kcna-3-q1",
      question: "How is an Open Source project cataloged by the CNCF based on the highest level of maturity and extreme reliability (enterprise-ready, massive global adoption)?",
      options: [
        "Sandbox Project",
        "Graduated Project",
        "Incubating Project",
        "Alpha Project"
      ],
      correctAnswer: 1,
      explanation: "The highest level (such as Kubernetes, Prometheus or Envoy) is Graduated. It indicates the pinnacle of community trust with extensive bases of use in production."
    },
    {
      id: "kcna-3-q2",
      question: "How does Serverless/FaaS (Functions as a Service) primarily differ from standard Container deployments (Microservices)?",
      options: [
        "It always requires a pre-allocatable virtual machine.",
        "It is less scalable than horizontal containers.",
        "It involves exact millisecond billing (Scale-to-Zero) and executes business code only in response to events (event-driven), completely abstracting the OS or container infrastructure from the developer.",
        "Serverless functions cannot interact with the Cloud provider's databases."
      ],
      correctAnswer: 2,
      explanation: "FaaS abstracts everything and scales costs to zero (does not run 'idle' 24/7). It is driven solely by Event Triggers and billed per timed fraction in milliseconds of processing (e.g., Lambda, OpenFaaS)."
    },
    {
      id: "kcna-3-q3",
      question: "What is intended conceptually by the 'Sidecar' pattern implemented by a Service Mesh (e.g. Istio)?",
      options: [
        "It connects nodes residing in physically remote regions bypassing BGP routes.",
        "It adds Sidecar Proxies alongside each application Pod. This enables security (mTLS), balancing, and automated visibility for microservices, without requiring any changes to or importing into their source code.",
        "It provides IT with a suite of Cloud machines to replicate Legacy Oracle databases.",
        "It builds Continuous Integration pipelines in Gitlab and Github (CI)."
      ],
      correctAnswer: 1,
      explanation: "A service mesh uses Proxy sidecars (local Data Plane pattern) to intercept the App's traffic. It encrypts via mTLS, routes, or forces timeouts on that network packet, hiding all the logical severity from the application stack."
    },
    {
      id: "kcna-3-q4",
      question: "To what classification does the Helm tool belong according to the CNCF standard?",
      options: [
        "Package Manager / App Definition Tool for Kubernetes applications.",
        "Eventual Monitoring for Databases.",
        "Service Mesh Control Plane.",
        "Standard Network CNI for Kubernetes."
      ],
      correctAnswer: 0,
      explanation: "Helm is the standard CNCF Graduated Kubernetes 'Package Manager' (analogous to 'apt' / 'brew'). It clusters endless YAMLs into a file called a Chart, allowing a single, simplified deployment execution with external variables."
    }
  ],
  4: [
    {
      id: "kcna-4-q1",
      question: "What are the three fundamental consolidated pillars of Cloud Native Observability?",
      options: [
        "Logstash, Prometheus, Graphana",
        "Alerting, Notification, Auto-healing",
        "Cloud Firewall, Network Policy, VPN",
        "Metrics, Logs, and Traces (Distributed Tracing)"
      ],
      correctAnswer: 3,
      explanation: "The three primary PILLARS supported by OpenTelemetry and the cloud-native methodology. Metrics identify general mathematical problems, Logs provide textual answers, and Traces reveal the step-by-step path of L7 requests among dozens of micro-apps."
    },
    {
      id: "kcna-4-q2",
      question: "Which statement about the 'Prometheus' project is FALSE in a modern paradigm?",
      options: [
        "Prometheus obtains data by executing a 'Pull' model (Scraping), visiting configured HTTP targets, and pulling Time-Series responses.",
        "Its internal functional and mathematical expression language to extract graphs and alerts from servers is called 'PromQL'.",
        "Prometheus is a distributed textual Logging tool comparable to Kibana.",
        "For systems that do not native emit data in its base format, metric translators called 'Prometheus Exporters' (e.g. NodeExporter, cAdvisor) exist."
      ],
      correctAnswer: 2,
      explanation: "Prometheus relies explicitly ONLY on METRICS (temporal values and counters, e.g. ram='3000Mb, requests=402'). It does NOT analyze textual/narrative string Logs (a task reserved for agents like Fluentd or Promtail)."
    },
    {
      id: "kcna-4-q3",
      question: "You are about to use the OpenTelemetry standard to export to a tool called Jaeger or Zipkin. What exact type of diagnostic resource do these applications produce within Observability?",
      options: [
        "Kernel CPU Metrics",
        "Raw SystemD logs of the Worker Node",
        "Distributed Tracing (Tracing spans of network paths and calculation across microservices)",
        "Push notifications based on financial anomalies (FinOps)"
      ],
      correctAnswer: 2,
      explanation: "Jaeger is the CNCF leader software to collect Traces (end-to-end timelines), empowering an SRE engineer to establish which specific MySQL query, inside an extensive 6-microservice lifecycle, caused lag for a VIP user at that specific millisecond."
    },
    {
      id: "kcna-4-q4",
      question: "What is advocated by the practice and community known as 'FinOps' within Cloud Native and DevOps environments?",
      options: [
        "Adding payment algorithms and crypto-wallets inside K8s pods.",
        "Promoting a widespread culture of optimal tracking and management shared between programmers and admins to reduce cloud 'Sprawl' (ghost calculation costs and waste for vacant servers active inside public cloud providers).",
        "Replacing the Finance department with AI.",
        "To convert the use of OpenTelemetry from open source to commercial."
      ],
      correctAnswer: 1,
      explanation: "FinOps merges finance and operations management, providing DevOps the granularly tagged visibility in namespaces needed to urge shutting down unused older servers, stopping huge dollar hemorrhages to various AWS/Azure Clouds."
    }
  ],
  5: [
    {
      id: "kcna-5-q1",
      question: "What best describes the basic architectural principle of the 'GitOps' approach for Kubernetes?",
      options: [
        "You manually compile only by rigorously pushing code onto remote corporate nodes via the shell.",
        "Release pipelines act with a 'Pull' strategy. The entire infrastructure (IaaC) exists in the Git repository as Absolute Truth; in-cluster agents continually self-synchronize by detecting and overriding any manual or spurious drift in actual servers, reverting it to the GIT-documented state.",
        "Programmers must place their master secret passwords inside the public Github repository so the Gitlab CI can dive into the Production cluster.",
        "Inside the GitHub/Gitlab CI YAML, 'kubectl apply' is instructed towards the authorized remote cluster API (Classic Push Strategy)."
      ],
      correctAnswer: 1,
      explanation: "The GitOps approach (known by ArgoCD/Flux 100% Pull Model) removes release tokens from CD and mandates that all deployment enforcement comes from reading the git repo as the Single Source of Truth (SOT)."
    },
    {
      id: "kcna-5-q2",
      question: "In the 4 C's Cloud Native Security model (taught by CNCF), what is the first and largest physical level of scope encasing all defenses?",
      options: [
        "Code (App Vulnerabilities/SAST)",
        "Cloud (or physical Corporate Data Center)",
        "Cluster (K8s API Server/RBAC)",
        "Container (Kernel Namespaces/AppArmor)"
      ],
      correctAnswer: 1,
      explanation: "The 4 C's in cloud-native security operate as defensive matryoshka dolls. The foundational, outermost impenetrable bubble containing the hardware server and physical anti-DDoS equipment is called the Cloud (or co-location Center)."
    },
    {
      id: "kcna-5-q3",
      question: "What boundary do 'Network Policies' in a Kubernetes cluster establish to prevent lateral security threats?",
      options: [
        "To the type of Cloud Active Directory IAM Role.",
        "Limitations regarding the use of the ISCSI Persistent Volume for intruding worker nodes.",
        "To OSI Layer 3 / Layer 4 network traffic. They constrain inter-node pinging authorizations by only allowing it between an exact, validated list of Pods (in namespace X label Y) while completely blocking off all the rest of the cluster's default traffic via 'Default Deny'.",
        "To limiting profiles of the Root Container (Pod Security Admission Control)."
      ],
      correctAnswer: 2,
      explanation: "Often dubbed 'Zero-Trust Internal'. Without a Network Policy, any Pod talks to any pod in the K8s Datacenter. With NetworkPolicies (CNI firewall based), lateral breaches are prevented, such as when a compromised Front End site is subsequently blocked trying to query an Internal DB."
    },
    {
      id: "kcna-5-q4",
      question: "What is a prominent approach for Security Code Pipelines in CI (Continuous Integration / SAST) to defect potential zero-day vulnerabilities *before* they land mapped inside a Prod orchestrated cluster?",
      options: [
        "Running Windows Antivirus on Kubernetes worker nodes to analyze operations.",
        "Authorizing executions as Root (UID 0) if the app resides inside containerd or crio engines.",
        "Injecting an OOM Killer analyzer inside the Load Balancer Service to mitigate harmful files pushed via HTTP REST along the user client interface.",
        "Integrating rigorous Software Composition Analysis tests and vulnerability Image Scanning onto the Container Engine build immediately pre-repo delivery (e.g. Prod cluster/Registry), stopping it from commencing if flawed libraries like Log4j CVEs are baked in."
      ],
      correctAnswer: 3,
      explanation: "Known as Shift-Left Security. It is imperative to check compiled images (container image scanning) via bug scanners highlighting outdated libraries early within the integration system (This forms the base of the 4th and final C: Code)."
    }
  ]
};

export const allQuizzes_en = Object.values(quizzes_en).flat();
