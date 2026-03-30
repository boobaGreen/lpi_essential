export const kcnaLessonContent = {
  // ==========================================
  // TOPIC 1: KUBERNETES FUNDAMENTALS
  // ==========================================
  'kcna-1-1': {
    content: `
# Kubernetes Architecture

Kubernetes is an open-source system for automating deployment, scaling, and management of containerized applications. The cluster architecture is divided into two macro-components: the **Control Plane** (master node) and the **Worker Nodes** (operational nodes).

## Control Plane Components
The Control Plane makes global decisions about the cluster (like scheduling) and detects/responds to cluster events (e.g., starting up a new Pod when a deployment's replicas field is unsatisfied).

- **kube-apiserver**: The frontend of the control plane. It exposes the Kubernetes API. All other components (including CLI tools like \`kubectl\`) communicate with the cluster through the API Server. It is designed to scale horizontally.
- **etcd**: A highly available and consistent key-value store used as Kubernetes' backing store for all cluster data and state.
- **kube-scheduler**: Watches for newly created Pods with no assigned node, and selects a node for them to run on. Scheduling decisions take into account resource requirements, hardware/software constraints, \`affinity\` and \`anti-affinity\` specifications.
- **kube-controller-manager**: Runs *controller* processes. Each controller tries to move the current cluster state closer to the desired state (e.g., Node controller, Replication controller, Endpoints controller).
- **cloud-controller-manager**: Embeds cloud-specific control logic, linking the K8s cluster directly into your cloud provider's API (e.g., for requesting external Load Balancers).

## Worker Node Components
These components run on every node, maintaining running pods and providing the Kubernetes runtime environment.

- **kubelet**: An agent that runs on each node in the cluster. It makes sure that containers described in PodSpecs are running and healthy.
- **kube-proxy**: A network proxy running on each node. It maintains network rules (iptables/IPVS) on nodes, enabling Kubernetes \`Services\` networking logic.
- **Container Runtime**: The software responsible for running containers. Kubernetes supports \`containerd\`, \`CRI-O\` and any implementation of the \`Kubernetes CRI (Container Runtime Interface)\`. Docker d was officially deprecated in K8s 1.24.

---

### Conceptual Summary
*In a declarative approach, the user tells the kube-apiserver the **Desired State** (e.g., "I want 3 replicas of the nginx container"). The API server saves this in **etcd**. The controller managers see the actual state is 0 replicas, and request the creation of pods. The scheduler sees orphan pods and assigns them to nodes. The **kubelets** on the respective nodes see they have assigned pods and instruct the Container Runtime to download images and execute them.*
`
  },
  'kcna-1-2': {
    content: `
# Pods and Containers

## What is a Container?
A container is a standard unit of software that packages up code and all its dependencies so the application runs quickly and reliably from one computing environment to another. Containers share the host OS kernel but isolate processes (using Linux Namespaces and cgroups).

## What is a Pod?
In Kubernetes, containers are never run naked. They are encapsulated in a K8s object called a **Pod**.
A Pod is the **smallest deployable computing unit** in Kubernetes.

- A pod can contain one or multiple containers (*Multi-container pattern*).
- Containers in a Pod share the **same network namespace** and IP address.
- They also share **Storage** space (they can mount the same shared volumes).
- They have the same lifecycle: they are created and destroyed together and always run on the **same Worker Node**.

### Multi-container Pod Architectural Patterns
Multi-container pods are not the norm; usually, it's 1 Container = 1 Pod. However, specific scenarios use patterns:
1. **Sidecar Pattern**: Augmenting or extending the main container's functionality without changing it. (Example: Main container serves HTTP files, sidecar periodically pulls files from a git repository to the shared volume).
2. **Ambassador Pattern**: A proxy the main container uses to connect to external databases with complex connections.
3. **Adapter Pattern**: Standardizes the main container's output. Great for formatting logs so a central monitoring system can ingest them in a uniform format.

### Declarative Pod Example (YAML)
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
# APIs, Labels, Selectors, and Namespaces

Kubernetes is API-driven. Every request, internal or external (via \`kubectl\`), goes through the kube-apiserver REST APIs.

## K8s Resources
In Kubernetes, there are several basic resource types. These include:
- **Pod**
- **ReplicaSet / Deployment**
- **Service**
- **Namespaces**
- **ConfigMap / Secret**

## Labels and Selectors
Since thousands of Pods can exist in a cluster, K8s needs a way to track ownership.

- **Labels**: Key-value pairs attached to objects (e.g., \`app: front-end\`, \`env: production\`). Labels identify attributes of an object.
- **Selectors**: The core grouping primitive. They allow you to "select" all objects that match specific labels.

For example, a K8s **Service** routes traffic to all Pods matching the \`app=web\` label. Without labels, controllers wouldn't know which pods to manage.

## Namespaces
**Namespaces** provide a mechanism for isolating groups of resources within a single cluster.

Instead of running separate costly clusters for Dev and Prod, you use Namespaces for virtual partitioning.

Standard namespaces automatically created:
- **default**: The default workspace if none is specified.
- **kube-system**: Core K8s components (control plane).
- **kube-public**: Mostly reserved and readable by anyone without authentication.
- **kube-node-lease**: Holds lease objects for node heartbeats.

*Note:* Certain resources, like **Node** or **PersistentVolume**, exist cluster-wide and *do not* belong to a namespace.
`
  },
  'kcna-1-4': {
    content: `
# Workloads: ReplicaSet and Deployment

Starting individual pods manually is an antipattern. Pods are **ephemeral**. If a Pod dies or its node burns, K8s will NOT revive the orphan pod.
For **Reliability and High Availability (HA)**, we use *Workload Controllers*.

## ReplicaSet
Guarantees that a specified number of pod replicas are running at any given time.
- If a node crashes and 2 pods die, the ReplicaSet notices the current state is 1, but desired is 3. It will spawn 2 more on a healthy node.
- It identifies which pods to track using **Selectors**.

## Deployment
A **Deployment** provides declarative updates for Pods and ReplicaSets.
You should almost *never* manually create a ReplicaSet. You create a Deployment, which automatically manages a ReplicaSet underneath while adding advanced features.

### Deployment vs ReplicaSet Features:
1. **Rolling Updates**: If you update a container image (\`v1.0\` to \`v2.0\`), the deployment performs a Zero-Downtime rollout. It destroys one pod, creates a new one, tests it, and proceeds to the next.
2. **Rollback**: If the rollout fails, you can run \`kubectl rollout undo deployment\` to safely revert to the previous ReplicaSet state.
3. **Scaling**: Effortlessly scale your web servers horizontally.
`
  },
  'kcna-1-5': {
    content: `
# ConfigMap and Secret

To keep cloud-native applications compliant with **12-factor app principles**, configuration must be decoupled from the container image.

## ConfigMap
K8s uses **ConfigMaps** to store non-confidential configuration data as plain text strings or config files.

Data is consumed by Pods usually in two ways:
1. **As Environment Variables (ENV)**
2. **As files mapped into mounted volumes** inside the container.

## Secret
Secrets work exactly like ConfigMaps but are designed to hold sensitive payloads like passwords, TLS tokens, or SSH keys.
- Unlike ConfigMaps, base *Secrets* are **Base64 encoded**.
- Warning: Base64 encoding is **NOT encryption!** Anyone with read access in that namespace or Etcd can decode it easily. (True encryption requires KMS or HashiCorp Vault).
- Secrets are never written physically to node disks. When a Pod mounts them, they reside in \`tmpfs\` (RAM) on the node and vanish when the pod is deleted.
`
  },
  'kcna-1-6': {
    content: `
# Networking and Service

Pods get dynamic IP addresses that constantly change when they die and respawn. A Frontend couldn't talk to a Backend if the Backend's IP kept changing.

**Services** act as a permanent internal load balancer or frontend for a set of Pods, providing a **static IP and DNS name**.

## Service Types
Crucial for KCNA:

1. **ClusterIP (Default):**
   - Exposes the Service on an internal cluster IP. Reachable ONLY from within the cluster. Used for databases and internal backends.
2. **NodePort:**
   - Exposes the Service via a static high port (range 30000 - 32767) on each Node's IP. Good for local testing, generally avoided in Prod due to security exposing direct cluster ports.
3. **LoadBalancer:**
   - An evolution of NodePort. It provisions a real external Elastic Load Balancer (ELB) using the underlying cloud infrastructure (AWS/GCP), giving it a Public IP.

## Ingress
An Ingress Controller is not a pure "Service" object. It acts at the application layer (L7 HTTP/S). An **Ingress** defines HTTP routing rules to direct traffic to various internal \`Services\` based on URL paths or domain names (e.g., \`/api\` goes to the backend service).
`
  },

  // ==========================================
  // TOPIC 2: CONTAINER ORCHESTRATION
  // ==========================================
  'kcna-2-1': {
    content: `
# Container Fundamentals & Runtimes

Modern architecture relies heavily on containers.
1. A **Virtual Machine** emulates full hardware and runs a complete heavyweight OS.
2. A **Container** shares the host kernel and isolates only the userspace natively, making it extremely lightweight and fast.

## The CRI (Container Runtime Interface)
Kubernetes doesn't "run" containers; it instructs CRI-compatible runtimes. Runtimes include:
- **containerd**: The engine originally underneath Docker, extracted as a CNCF open-source project. Extremely fast and the absolute default today.
- **CRI-O**: A variant optimized exclusively for K8s (often associated with RedHat OpenShift).

The legacy ` + '`' + `dockershim` + '`' + ` engine bridging Docker was officially removed to embrace pure CRI lightweight runtimes like *containerd*.
`
  },
  'kcna-2-2': {
    content: `
# Container Orchestration Concepts

When managing 5,000 containers across 50 servers, you need an Orchestrator. Kubernetes is the undisputed market leader.

Primary orchestration roles:
- **Scheduling**: The automated decision of "which node has enough CPU/RAM to run this software?". The scheduler checks unscheduled pods, filters nodes based on \`Taints\` and anti-affinity rules, and assigns them.
- **Self-Healing**: A core feature. If a kubelet notices a pod failing its LivenessProbe, K8s destroys and forces re-creation from the template until the *actual state* matches the *desired state*.
- **Horizontal Scaling (HPA)**: If web traffic spikes and node CPU burns, the orchestrator tells Deployments to duplicate the setup, launching new identical pods in seconds.
`
  },
  'kcna-2-3': {
    content: `
# Resources: Limits & Requests

In multi-tenant clusters, K8s must ensure continuity without letting one buggy Pod hog all node resources (the "Noisy Neighbor Problem").
This is handled via **Requests & Limits**.

## Requests
\`requests: CPU 500m, memory 256Mi\`
- **What it is**: The scheduler's promise: "I guarantee this container will have exclusive access to exactly 500m CPU and 256Mi RAM." If no node has this available, the pod stays \`Pending\` forever.

## Limits
\`limits: CPU 1000m, memory 512Mi\`
- **What it is**: The absolute hard cap. Enforced by Linux \`cgroups\`.
- If a container surpasses the **CPU Limit**, it gets **Throttled**. It won't crash, it just runs extremely slow.
- If a container attempts to surpass the **RAM Limit**, there is no throttling. The host intervenes brutally, and the **Kernel OOM (Out of Memory) Killer** instantly terminates the pod (CrashLoopBackOff).
`
  },

  // ==========================================
  // TOPIC 3: CLOUD NATIVE ARCHITECTURE
  // ==========================================
  'kcna-3-1': {
    content: `
# CNCF Landscape

The **Cloud Native Computing Foundation (CNCF)** is a Linux Foundation project building sustainable ecosystems for cloud native software.

CNCF organizes open-source projects into 3 maturity levels:
1. **Sandbox**: Experimental and early-stage projects. Not recommended for production without deep evaluation.
2. **Incubating**: Used successfully in production by a verifiable number of companies, possessing a growing team of maintainers.
3. **Graduated**: "Bulletproof" projects, globally adopted, mature, and considered enterprise industry standards (e.g., Kubernetes, Prometheus, Envoy, Helm, containerd).
`
  },
  'kcna-3-2': {
    content: `
# From Monolith to Microservices

Cloud Native architecture relies heavily on **Microservices** design (often formalized in the [12-Factor Apps](https://12factor.net/)).

## Advantages:
- **Independent Scalability**: If the login module is overloaded, K8s scales only the login server horizontally, saving resources.
- **Polyglot Programming**: Different teams can use different optimal languages (Python for AI, Go for Backend, Node for Frontend). They communicate via standard REST/gRPC API calls.
- **Isolated Blast Radius**: If a memory leak crashes the "User Reviews" microservice, only the reviews go down. The e-commerce checkout loop continues to process money.

## Disadvantages
- Extreme network complexity and load balancing challenges (hence K8s and Service Mesh).
- Hard to debug manually (hence the need for advanced Distributed Observability).
`
  },
  'kcna-3-3': {
    content: `
# Serverless and FaaS

Serverless provides developers with total abstraction. There is no concept of a container, image, or pod on the user end.
- **FaaS (Function as a Service)**: You write pure business logic (a single "function") and deploy it (AWS Lambda, OpenFaaS).
- It executes strictly reacting to asynchronous *Events* (an upload to S3, a DB update, a Webhook).
- Pricing isn't based on idle server hours. You pay for the exact milliseconds of computation. "Scale to zero" means if traffic drops to nil, zero pods/processes run.
`
  },
  'kcna-3-4': {
    content: `
# Service Mesh

Network calls across dozens of microservices create unwanted latency, bottlenecks, and "Zero-Trust" security nightmares.
A **Service Mesh** (with Graduated leaders like *Istio* and *Linkerd*) is a dedicated infrastructure layer handling Service-to-Service communication securely and quickly, entirely isolated from application code.

## Mesh Architecture:
- **Control Plane**: Injects security policies, administers certificates, and global traffic routing.
- **Data Plane (Envoy Sidecars)**: A superfast micro-proxy automatically attached (Sidecar pattern) to every applicative pod.
  - The application thinks it's talking to \`localhost\`, while the sidecar proxy intercepts outgoing packets, encrypts them in **mTLS** (Mutual TLS), and sends them securely to the destination service's sidecar proxy.
`
  },
  'kcna-3-5': {
    content: `
# Storage Concept in Kubernetes

## Volume
Normally, storage inside a container dies on restart. A K8s **Volume** resides at the Pod level (survives container restarts) but *is destroyed permanently* when the pod is deleted. Useful for caching and multi-container hand-offs.

## Persistent Volumes (PV) and PVCs
Cloud Native persistence relies on CSI (Container Storage Interface) drivers.
- **The Admin (or Cloud)** provisions terabytes of network storage (NFS, AWS EBS) called **Persistent Volumes (PV)**.
- **The Developer** writes a declarative **Persistent Volume Claim (PVC)**: "I need 5GB of fast storage for Postgres".
- Kubernetes binds the user's 5GB PVC to a real PV dynamically.

When the pod dies, the storage claimed by the PVC persists securely on the network disk.
`
  },

  // ==========================================
  // TOPIC 4: CLOUD NATIVE OBSERVABILITY
  // ==========================================
  'kcna-4-1': {
    content: `
# The 3 Pillars of Observability

In a monolith, fixing a "slow site" means checking 1 log file. In a 50-microservice ecosystem, tracking the bottleneck is impossible without tools.
While "Monitoring" alerts you that things are failing, "Observability" actively helps you diagnose *why* it's failing.

It relies on 3 telemetry formats (OpenTelemetry standard):
1. **Metrics**: Aggregated numerical data over time (e.g., "500 HTTP requests per second").
2. **Logs**: Detailed immutable text strings emitted by apps ("FATAL Error: bad password"). Centralized via *Fluentd/Promtail* and viewed on *Kibana/Loki*.
3. **Tracing (Distributed)**: A temporal "Span" across the journey. Frontend -> Users API (10ms) -> Auth (500ms) -> DB (90ms). Distributed Tracing (like CNCF Jaeger) gives operators a millimeter-perfect timeline to see exactly which pod caused the lag.
`
  },
  'kcna-4-2': {
    content: `
# Prometheus (Monitoring)

A CNCF Graduated project and the de-facto standard for Cloud monitoring.
- Utilizes a Pull Model (**Scraping**): Prometheus continuously visits exposed endpoints (e.g., /metrics) on apps, pulling hundreds of updated numbers and storing them as a *"Time Series DB"*.
- Legacy apps are instrumented using **Prometheus Exporters** (e.g., NodeExporter).
- Queried using its powerful functional language: **PromQL**.

The preferred visualization interface is **Grafana**, which polls PromQL sources to draw stunning dynamic dashboards.
`
  },
  'kcna-4-3': {
    content: `
# Cost Management (FinOps)

Infinite elastic scalers ended the need to buy unused warehouse servers. However, unchecked cloud-native scaling burns thousands of dollars a minute (Cloud Sprawl).

**FinOps** (Finance + DevOps) optimizes value without sacrificing speed.
It requires perfect visibility—often tracked by Kubernetes granular Labels attached to Namespaces to pinpoint exactly which team burned what budget. Open source tools like **OpenCost** help analyze where to perform automated scaling-down.
`
  },

  // ==========================================
  // TOPIC 5: APPLICATION DELIVERY & SECURITY
  // ==========================================
  'kcna-5-1': {
    content: `
# CI/CD Pipelines

Developers shouldn't upload code from local PCs directly to production servers via SSH.

## Continuous Integration (CI) and Continuous Delivery (CD)
CI/CD pipelines (Jenkins, GitHub Actions) are the guardrails of software releases:
1. Developer pushes code to \`master\`.
2. CI server runs unit/coverage tests automatically. If they pass, it builds the Docker image.
3. The new image is tagged (\`v2.5.0\`) and pushed to a secure Cloud Registry.
4. CD mechanism updates the K8s deployment YAML, triggering a safe *rolling deployment*.
`
  },
  'kcna-5-2': {
    content: `
# GitOps: Modern Deployment Paradigm

**GitOps** is the ideological evolution of CD. (CNCF Graduated projects: **ArgoCD**, **Flux**)

Classic pipelines "Push" YAML into the cluster, which is risky for credential management.
**GitOps enforces a Pull Strategy**:
- The *entire* Kubernetes architecture is described declaratively in a Git repo (Infrastructure as Code).
- **Git** is the *"Single Source of Truth"*.
- *ArgoCD* or *Flux* runs permanently inside the cluster. It constantly listens to the Git repository.
- If an operator pushes a change to Git, or if a cluster admin accidentally deletes a pod locally, the GitOps daemon detects the drift. It intervenes, automatically mirroring the cluster to match the exact state of the Git repository.
`
  },
  'kcna-5-3': {
    content: `
# Cloud Native Security (The 4 C's)

CNCF teaches the 4 C's as a Defense-in-Depth model:
1. **Cloud (Data Center)**: The underlying infrastructure (AWS/GCP), physical security, and edge firewalls.
2. **Cluster**: The orchestration layer. Securing the API server, implementing **RBAC (Role-Based Access Control)** to limit who can read/edit what namespace, and restricting pod-to-pod traffic via NetworkPolicies.
3. **Container**: Limiting the container itself. A vital K8s framework is **Pod Security Admission**, dropping privileges and refusing to run Docker images logged as root.
4. **Code**: Static Code Analysis and dependency scanning in CI pipelines. If your Java app holds a remote execution vulnerability, K8s can't stop the hacker from exploiting port 80.
`
  }
};
