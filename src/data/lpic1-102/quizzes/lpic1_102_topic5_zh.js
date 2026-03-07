// LPIC-1 102 Quiz Pool — Chinese — Topic 109 (网络基础)

export const lpic1_102_topic5Quizzes_zh = [
  // ─── 109.1 互联网协议基础 (5 题) ───
  {
    id: 'q-lpic1-102-5-001', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "非加密 HTTP 协议默认使用的端口号是多少？",
    options: [
      '21',
      '22',
      '80',
      '443'
    ],
    correct: 2,
    explanation: "80 端口专用于不加密的 HTTP Web 流量。"
  },
  {
    id: 'q-lpic1-102-5-002', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "以下哪个端口是 SSH (Secure Shell) 协议默认使用的？",
    options: ['20', '21', '22', '23'],
    correct: 2,
    explanation: "22 端口是 SSH 进行加密远程访问的标准端口。",
  },
  {
    id: 'q-lpic1-102-5-003', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "标准的 IPv6 地址由多少位二进制组成？",
    options: ['32', '64', '128', '256'],
    correct: 2,
    explanation: "IPv6 使用 128 位地址，极大扩展了 IPv4 (32 位) 已经耗尽的地址空间。",
  },
  {
    id: 'q-lpic1-102-5-004', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "`ping` 工具使用哪个协议来测试网络连通性？",
    options: ['TCP', 'UDP', 'ICMP', 'IGMP'],
    correct: 2,
    explanation: "`ping` 通过发送 ICMP (Internet Control Message Protocol) 的 Echo Request 包来工作。",
  },
  {
    id: 'q-lpic1-102-5-005', lessonId: 'lpic1-102-5-1', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "哪个协议被认为是“无连接”的，且不保证数据包的顺序或可靠交付？",
    options: ['TCP', 'UDP', 'SSH', 'FTP'],
    correct: 1,
    explanation: "UDP (User Datagram Protocol) 是一种轻量级的无连接传输协议。",
  },

  // ─── 109.2 持久化网络配置 (5 题) ───
  {
    id: 'q-lpic1-102-5-006', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "哪个现代命令取代了 `ifconfig`，用于查看和配置网卡的 IP 地址？",
    options: [
      'ip addr',
      'netstat -i',
      'nmcli show',
      'ifup'
    ],
    correct: 0,
    explanation: "iproute2 套件中的 `ip` 命令是现代 Linux 管理网卡的标准选择。"
  },
  {
    id: 'q-lpic1-102-5-007', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "在 Netplan 工具中，网络配置脚本通常使用哪种文件格式编写？",
    options: [
      'XML',
      'JSON',
      'YAML',
      'INI'
    ],
    correct: 2,
    explanation: "Netplan 使用 .yaml 文件来描述静态或动态 IP 路由等配置。"
  },
  {
    id: 'q-lpic1-102-5-008', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "哪个命令可以显示当前 Linux 系统内核的路由表？",
    options: ['ip show route', 'ip route', 'net-route', 'route-view'],
    correct: 1,
    explanation: "`ip route` 命令展示了数据包离开本机的路径转发逻辑。",
  },
  {
    id: 'q-lpic1-102-5-009', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "NetworkManager 的哪个命令行工具常用于管理 Wi-Fi 或有线连接？",
    options: ['nmtui', 'nmcli', 'nm-edit', 'nm-exec'],
    correct: 1,
    explanation: "`nmcli` 是控制 NetworkManager 的主要命令行界面脚本。",
  },
  {
    id: 'q-lpic1-102-5-010', lessonId: 'lpic1-102-5-2', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "在基于旧版 Debian 的系统中，主要编辑哪个文件来进行静态网络接口配置？",
    options: ['/etc/network/interfaces', '/etc/sysconfig/network', '/etc/netconfig', '/etc/interfaces'],
    correct: 0,
    explanation: "/etc/network/interfaces 是 Debian 系列长期使用的核心网络定义文件。",
  },

  // ─── 109.3 基础网络排错 (5 题) ───
  {
    id: 'q-lpic1-102-5-011', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "哪个工具可以展示数据包到达目标主机所经过的所有中间路由器节点？",
    options: [
      'ping',
      'traceroute',
      'route -n',
      'netstat -r'
    ],
    correct: 1,
    explanation: "traceroute 用于追踪包在三层网络中的路径跳转（hops）。"
  },
  {
    id: 'q-lpic1-102-5-012', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "哪个命令可以查看有哪些进程正在监听特定的网络端口？",
    options: [
      'ss -lnp',
      'ps aux',
      'top',
      'ip route'
    ],
    correct: 0,
    explanation: "`ss` (socket statistics) 是现代查看套接字详情的高效工具。",
  },
  {
    id: 'q-lpic1-102-5-013', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "`hostname -i` 命令的输出通常是什么内容？",
    options: [
      "主机的运行时间",
      "本地主机的 IP 地址",
      "宽带连接类型",
      "默认网关的硬件地址"
    ],
    correct: 1,
    explanation: "`-i` 选项让 `hostname` 解析并打印当前主机的内网 IP。",
  },
  {
    id: 'q-lpic1-102-5-014', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "哪个工具可用于显示或修改系统的 ARP (地址解析协议) 缓存表？",
    options: ['arping', 'arp', 'ip neighbor', 'arp 和 ip neighbor 都可以'],
    correct: 3,
    explanation: "经典的 `arp` 和现代的 `ip neighbor` 命令都能管理二层 MAC 地址映射。",
  },
  {
    id: 'q-lpic1-102-5-015', lessonId: 'lpic1-102-5-3', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "如果服务器能够连接局域网，但无法访问互联网，首先应检查哪项配置？",
    options: ["resolv.conf 中的 DNS 设置", "路由表中的默认网关 (Default Gateway)", "/etc/hosts 文件", "网关的 MTU 大小"],
    correct: 1,
    explanation: "默认网关是数据包发往非本地子网的出口。",
  },

  // ─── 109.4 客户端域名解析 (DNS) 配置 (5 题) ───
  {
    id: 'q-lpic1-102-5-016', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'easy', type: 'mcq',
    question: "在向外部 DNS 发起请求前，Linux 首先会尝试在哪个本地文件中查找主机名？",
    options: [
      '/etc/resolv.conf',
      '/etc/hosts',
      '/etc/networks',
      '/etc/dns.conf'
    ],
    correct: 1,
    explanation: "/etc/hosts 提供主机名到 IP 的本地静态映射，通常具有最高优先级。"
  },
  {
    id: 'q-lpic1-102-5-017', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "在 `/etc/resolv.conf` 中，`nameserver` 指令定义了什么？",
    options: [
      "邮件转发服务器的 IP",
      "系统发起域名查询时需联系的 DNS 服务器 IP",
      "本机的完整限定域名 (FQDN)",
      "默认路由器的地址"
    ],
    correct: 1,
    explanation: "该指令指向一个递归 DNS 解析器地址。",
  },
  {
    id: 'q-lpic1-102-5-018', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "哪个文件控制了解析器查找主机名的优先级（例如：先 files 后 dns）？",
    options: [
      '/etc/hosts',
      '/etc/resolv.conf',
      '/etc/nsswitch.conf',
      '/etc/resolv.order'
    ],
    correct: 2,
    explanation: "/etc/nsswitch.conf 控制着名称服务切换的搜索策略。"
  },
  {
    id: 'q-lpic1-102-5-019', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'medium', type: 'mcq',
    question: "哪个命令行工具最常用于深入调试和发起手工 DNS 记录查询？",
    options: ['dig', 'host', 'nslookup', '以上所有命令都可以'],
    correct: 3,
    explanation: "这三者都是常用的 DNS 故障分析工具。",
  },
  {
    id: 'q-lpic1-102-5-020', lessonId: 'lpic1-102-5-4', topicId: 5, difficulty: 'hard', type: 'mcq',
    question: "`/etc/resolv.conf` 中的 `search` 指令有何作用？",
    options: [
      "自动扫描子网段",
      "在解析不完整（未加点）的主机名时，自动尝试补全这些域名后缀",
      "在全网范围内搜索最快的解析服务器",
      "启动 DNS 服务器的同步模式"
    ],
    correct: 1,
    explanation: "search 域允许用户输入短名称（如 server01），解析器会自动尝试补全为 server01.example.com 等进行查找。"
  },
];
