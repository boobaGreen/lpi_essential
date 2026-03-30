export const kcna_topics = [
  {
    id: 1,
    icon: '☸️',
    color: 'neon-blue',
    weight: '46', // Kubernetes Fundamentals makes up 46% of KCNA
    title: 'Kubernetes Fundamentals',
    subtitle: 'Architecture, Pods, Nodes, Control Plane, Namespaces',
    description: 'Core concepts of Kubernetes architecture. Control plane, worker nodes, basic concepts such as Pods and Namespaces.',
    lessons: [
      { id: 'kcna-1-1', title: 'Kubernetes Architecture', subtitle: 'Control Plane and Worker Nodes' },
      { id: 'kcna-1-2', title: 'Pods and Containers', subtitle: 'The smallest unit of computation in K8s' },
      { id: 'kcna-1-3', title: 'API and Namespaces', subtitle: 'Interacting with the cluster and isolating workloads' },
      { id: 'kcna-1-4', title: 'Workloads (Deployment & ReplicaSet)', subtitle: 'Managing and scaling applications' },
      { id: 'kcna-1-5', title: 'ConfigMap and Secret', subtitle: 'Configuration and sensitive data management' },
      { id: 'kcna-1-6', title: 'Networking and Service', subtitle: 'App exposition and discovery' },
    ],
  },
  {
    id: 2,
    icon: '🚢',
    color: 'neon-green',
    weight: '22', // Container Orchestration 22%
    title: 'Container Orchestration',
    subtitle: 'Containers, Runtimes, Security, Scaling',
    description: 'The container lifecycle and how K8s orchestrates them, monitoring health, limits, and lifecycles.',
    lessons: [
      { id: 'kcna-2-1', title: 'Container Fundamentals', subtitle: 'Difference between VMs, Containers, and Runtimes (containerd, CRI-O)' },
      { id: 'kcna-2-2', title: 'Container Orchestration Concepts', subtitle: 'The role of the orchestrator (Scheduling, Scaling, Healing)' },
      { id: 'kcna-2-3', title: 'Resources and Limits', subtitle: 'CPU and Memory limits/requests' },
    ],
  },
  {
    id: 3,
    icon: '☁️',
    color: 'neon-purple',
    weight: '16', // Cloud Native Architecture 16%
    title: 'Cloud Native Architecture',
    subtitle: 'Microservices, Service Mesh, GitOps',
    description: 'Cloud native architectural patterns, CNCF, and modern standards for application development.',
    lessons: [
      { id: 'kcna-3-1', title: 'CNCF Landscape', subtitle: 'What is the Cloud Native Computing Foundation (CNCF)?' },
      { id: 'kcna-3-2', title: 'Microservices', subtitle: 'From monoliths to microservices architectures' },
      { id: 'kcna-3-3', title: 'Serverless and FaaS', subtitle: 'Event-driven execution models' },
      { id: 'kcna-3-4', title: 'Service Mesh', subtitle: 'Advanced traffic management and security (Istio/Linkerd)' },
      { id: 'kcna-3-5', title: 'Storage Concepts', subtitle: 'Volumes, PersistentVolume (PV), and PersistentVolumeClaim (PVC)' },
    ],
  },
  {
    id: 4,
    icon: '📊',
    color: 'neon-orange',
    weight: '8', // Cloud Native Observability 8%
    title: 'Cloud Native Observability',
    subtitle: 'Prometheus, Logs, Metrics, Tracing',
    description: 'Advanced monitoring of cluster and application states using industry standards like Prometheus and OpenTelemetry.',
    lessons: [
      { id: 'kcna-4-1', title: 'Pillars of Observability', subtitle: 'Metrics, Logging, and Tracing' },
      { id: 'kcna-4-2', title: 'Prometheus and Grafana', subtitle: 'Time-series metrics scraping and dashboarding' },
      { id: 'kcna-4-3', title: 'Cost Management', subtitle: 'FinOps and managing costs in the Cloud' },
    ],
  },
  {
    id: 5,
    icon: '🛡️',
    color: 'neon-pink',
    weight: '8', // Application Delivery & DevSecOps 8%
    title: 'App Delivery & Security',
    subtitle: 'CI/CD, GitOps, Cloud Native Security',
    description: 'Software release methodologies and security principles in the containerized world.',
    lessons: [
      { id: 'kcna-5-1', title: 'Application Delivery (CI/CD)', subtitle: 'Automating builds and releases' },
      { id: 'kcna-5-2', title: 'GitOps', subtitle: 'Declarative infrastructure (Flux, ArgoCD)' },
      { id: 'kcna-5-3', title: 'Security Basics', subtitle: 'RBAC, Policies, and basic security concepts' },
    ],
  },
]
