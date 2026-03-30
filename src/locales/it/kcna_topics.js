export const kcna_topics = [
  {
    id: 1,
    icon: '☸️',
    color: 'neon-blue',
    weight: '46', // Kubernetes Fundamentals makes up 46% of KCNA
    title: 'Kubernetes Fundamentals',
    subtitle: 'Architettura, Pods, Nodi, Control Plane, Namespaces',
    description: 'Concetti fondamentali dell\'architettura Kubernetes. Control plane, worker nodes, concetti di base come Pods e Namespaces.',
    lessons: [
      { id: 'kcna-1-1', title: 'Architettura Kubernetes', subtitle: 'Control Plane e Worker Nodes' },
      { id: 'kcna-1-2', title: 'Pods e Containers', subtitle: 'L\'unità minima di elaborazione in K8s' },
      { id: 'kcna-1-3', title: 'API e Namespaces', subtitle: 'Interagire con il cluster e isolare i workload' },
      { id: 'kcna-1-4', title: 'Workloads (Deployment & ReplicaSet)', subtitle: 'Gestione e scaling delle applicazioni' },
      { id: 'kcna-1-5', title: 'ConfigMap e Secret', subtitle: 'Gestione delle configurazioni e dati sensibili' },
      { id: 'kcna-1-6', title: 'Networking e Service', subtitle: 'Esposizione e discovery delle applicazioni' },
    ],
  },
  {
    id: 2,
    icon: '🚢',
    color: 'neon-green',
    weight: '22', // Container Orchestration 22%
    title: 'Container Orchestration',
    subtitle: 'Container, Runtime, Sicurezza, Scaling',
    description: 'Il ciclo di vita dei container e come K8s li orchestra, monitorando salute, limiti e cicli di vita.',
    lessons: [
      { id: 'kcna-2-1', title: 'Container Fundamentals', subtitle: 'Differenza tra VM, Container e Runtime (containerd, CRI-O)' },
      { id: 'kcna-2-2', title: 'Container Orchestration Concepts', subtitle: 'Il ruolo dell\'orchestratore (Scheduling, Scaling, Healing)' },
      { id: 'kcna-2-3', title: 'Risorse e Limits', subtitle: 'CPU e Memoria limit/requests' },
    ],
  },
  {
    id: 3,
    icon: '☁️',
    color: 'neon-purple',
    weight: '16', // Cloud Native Architecture 16%
    title: 'Cloud Native Architecture',
    subtitle: 'Microservices, Service Mesh, GitOps',
    description: 'Pattern architetturali cloud native, la CNCF e gli standard moderni per lo sviluppo applicativo.',
    lessons: [
      { id: 'kcna-3-1', title: 'CNC Landscape', subtitle: 'Cos\'è la Cloud Native Computing Foundation (CNCF)' },
      { id: 'kcna-3-2', title: 'Microservizi', subtitle: 'Dal monolite all\'architettura a microservizi' },
      { id: 'kcna-3-3', title: 'Serverless e FaaS', subtitle: 'Modelli di esecuzione event-driven' },
      { id: 'kcna-3-4', title: 'Service Mesh', subtitle: 'Gestione avanzata del traffico e sicurezza (Istio/Linkerd)' },
      { id: 'kcna-3-5', title: 'Storage Concept', subtitle: 'Volume, PersistentVolume (PV) e PersistentVolumeClaim (PVC)' },
    ],
  },
  {
    id: 4,
    icon: '📊',
    color: 'neon-orange',
    weight: '8', // Cloud Native Observability 8%
    title: 'Cloud Native Observability',
    subtitle: 'Prometheus, Logs, Metrics, Tracing',
    description: 'Monitoraggio avanzato dello stato del cluster e delle applicazioni utilizzando standard industriali come Prometheus e OpenTelemetry.',
    lessons: [
      { id: 'kcna-4-1', title: 'I Pillar dell\'Osservabilità', subtitle: 'Metrics, Logging e Tracing' },
      { id: 'kcna-4-2', title: 'Prometheus e Grafana', subtitle: 'Scraping delle metriche time-series e dashboarding' },
      { id: 'kcna-4-3', title: 'Cost Management', subtitle: 'FinOps e gestione dei costi nel Cloud' },
    ],
  },
  {
    id: 5,
    icon: '🛡️',
    color: 'neon-pink',
    weight: '8', // Application Delivery & DevSecOps 8%
    title: 'App Delivery & Security',
    subtitle: 'CI/CD, GitOps, Sicurezza Cloud Native',
    description: 'Metodologie di rilascio del software e principi di sicurezza nel mondo containerizzato.',
    lessons: [
      { id: 'kcna-5-1', title: 'Application Delivery (CI/CD)', subtitle: 'Automazione delle build e dei rilasci' },
      { id: 'kcna-5-2', title: 'GitOps', subtitle: 'Infrastruttura dichiarativa (Flux, ArgoCD)' },
      { id: 'kcna-5-3', title: 'Security Basics', subtitle: 'RBAC, Policy e concetti di base per la sicurezza' },
    ],
  },
]
