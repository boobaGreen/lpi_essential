export const topic4Quizzes = [
  {
    "lessonId": "4-1",
    "question": "哪种类型的操作系统旨在确保长期正常运行和支持？",
    "options": [
      "消费者",
      "企业",
      "嵌入式",
      "移动的"
    ],
    "correct": 1,
    "explanation": "企业系统（例如 RHEL、SLES）提供长期支持和高可靠性。"
  },
  {
    "lessonId": "4-1",
    "question": "世界上大多数超级计算机使用哪种操作系统？",
    "options": [
      "Windows服务器",
      "macOS",
      "Linux",
      "自由BSD"
    ],
    "correct": 2,
    "explanation": "TOP500排名中90%以上的超级计算机都使用Linux。"
  },
  {
    "lessonId": "4-1",
    "question": "IaaS 意味着：",
    "options": [
      "互联网即服务",
      "基础设施即服务",
      "集成即服务",
      "接口即服务"
    ],
    "correct": 1,
    "explanation": "IaaS = 基础设施即服务。提供虚拟机、存储、网络（例如AWS EC2）。"
  },
  {
    "lessonId": "4-1",
    "question": "PaaS 提供：",
    "options": [
      "仅硬件",
      "开发及运行平台",
      "仅网络",
      "仅存储"
    ],
    "correct": 1,
    "explanation": "PaaS = 平台即服务。提供开发环境（例如Heroku、Google App Engine）。"
  },
  {
    "lessonId": "4-1",
    "question": "SaaS 是：",
    "options": [
      "可通过浏览器访问的软件",
      "只有一个操作系统",
      "专用硬件",
      "网络的一种类型"
    ],
    "correct": 0,
    "explanation": "SaaS = 软件即服务。用户通过浏览器（例如 Gmail、Salesforce）使用该软件。"
  },
  {
    "lessonId": "4-1",
    "question": "RHEL 是以下缩写：",
    "options": [
      "红帽企业 Linux",
      "红帽基本 Linux",
      "红帽扩展 Linux",
      "红帽嵌入式 Linux"
    ],
    "correct": 0,
    "explanation": "RHEL = Red Hat Enterprise Linux，具有商业支持的企业发行版。"
  },
  {
    "lessonId": "4-1",
    "question": "LPIC-1 认证要求：",
    "options": [
      "只是一场考试",
      "两次考试（101 和 102）",
      "三门考试",
      "没有考试"
    ],
    "correct": 1,
    "explanation": "LPIC-1 需要通过 101 和 102 考试。"
  },
  {
    "lessonId": "4-1",
    "question": "哪种技术允许您在一台计算机上运行多个操作系统？",
    "options": [
      "集装箱化",
      "虚拟化",
      "仿真",
      "汇编"
    ],
    "correct": 1,
    "explanation": "虚拟化（KVM、VMware、VirtualBox）允许您在一台主机上运行多个操作系统。"
  },
  {
    "lessonId": "4-1",
    "question": "Docker 使用：",
    "options": [
      "虚拟机",
      "容器",
      "模拟器",
      "裸机"
    ],
    "correct": 1,
    "explanation": "Docker 使用容器：共享主机内核的隔离环境。"
  },
  {
    "lessonId": "4-1",
    "question": "Kubernetes 用于：",
    "options": [
      "网页开发",
      "容器编排",
      "数据库管理",
      "文字编辑"
    ],
    "correct": 1,
    "explanation": "Kubernetes (K8s) 大规模编排和管理容器。"
  },
  {
    "lessonId": "4-1",
    "question": "KVM是：",
    "options": [
      "一名编辑",
      "Linux 虚拟机管理程序",
      "一个文件系统",
      "一个网络协议"
    ],
    "correct": 1,
    "explanation": "KVM（基于内核的虚拟机）是集成到 Linux 内核中的虚拟机管理程序。"
  },
  {
    "lessonId": "4-2",
    "question": "哪种类型的存储具有移动机械部件？",
    "options": [
      "固态硬盘",
      "NVMe",
      "硬盘",
      "内存"
    ],
    "correct": 2,
    "explanation": "HDD（硬盘驱动器）具有旋转磁盘和机械头。"
  },
  {
    "lessonId": "4-2",
    "question": "哪个 RAID 级别提供镜像？",
    "options": [
      "磁盘阵列0",
      "磁盘阵列1",
      "磁盘阵列5",
      "磁盘阵列10"
    ],
    "correct": 1,
    "explanation": "RAID 1 在两个磁盘上创建相同的数据副本（镜像）。"
  },
  {
    "lessonId": "4-2",
    "question": "RAID 0 提供：",
    "options": [
      "冗余",
      "仅速度（条带化）",
      "平等",
      "镜面+条纹"
    ],
    "correct": 1,
    "explanation": "RAID 0 将数据分布在多个磁盘上以提高速度，但没有冗余。"
  },
  {
    "lessonId": "4-2",
    "question": "哪个命令显示 CPU 信息？",
    "options": [
      "CPU信息",
      "LSCPU",
      "显示CPU",
      "猫/CPU"
    ],
    "correct": 1,
    "explanation": "lscpu 显示详细的 CPU 信息。"
  },
  {
    "lessonId": "4-2",
    "question": "free -h 显示：",
    "options": [
      "磁盘空间",
      "可用和已用 RAM 内存",
      "打开文件",
      "流程"
    ],
    "correct": 1,
    "explanation": "free 显示 RAM 和交换内存的使用情况。 -h = 人类可读的格式。"
  },
  {
    "lessonId": "4-2",
    "question": "lsblk 显示：",
    "options": [
      "流程",
      "块设备（磁盘）",
      "文本文件",
      "用户"
    ],
    "correct": 1,
    "explanation": "lsblk（列表块设备）显示磁盘和分区。"
  },
  {
    "lessonId": "4-2",
    "question": "df -h 显示：",
    "options": [
      "内存",
      "已挂载文件系统的磁盘空间",
      "重复文件",
      "网络设备"
    ],
    "correct": 1,
    "explanation": "df（磁盘空闲）显示已安装文件系统上的已用空间和可用空间。"
  },
  {
    "lessonId": "4-2",
    "question": "NVMe 通过以下方式连接：",
    "options": [
      "SATA",
      "USB",
      "PCIe",
      "外国直接投资"
    ],
    "correct": 2,
    "explanation": "NVMe（非易失性内存 Express）使用 PCIe 总线来实现更高的速度。"
  },
  {
    "lessonId": "4-2",
    "question": "lspci 显示：",
    "options": [
      "USB设备",
      "PCI/PCIe 设备",
      "系统文件",
      "流程"
    ],
    "correct": 1,
    "explanation": "lspci 列出连接到 PCI/PCIe 总线的设备。"
  },
  {
    "lessonId": "4-2",
    "question": "lsusb 显示：",
    "options": [
      "PCI设备",
      "连接的 USB 设备",
      "打开文件",
      "目录"
    ],
    "correct": 1,
    "explanation": "lsusb 列出连接到系统的 USB 设备。"
  },
  {
    "lessonId": "4-2",
    "question": "RAID 5 结合了：",
    "options": [
      "仅镜像",
      "具有分布式奇偶校验的条带化",
      "仅限平价",
      "仅条纹"
    ],
    "correct": 1,
    "explanation": "RAID 5 将数据和奇偶校验分布在至少 3 个磁盘上。允许丢失 1 个磁盘。"
  },
  {
    "lessonId": "4-3",
    "question": "Linux内核位于哪个目录？",
    "options": [
      "/核心",
      "/启动",
      "/系统",
      "/进程"
    ],
    "correct": 1,
    "explanation": "Linux 内核 (vmlinuz) 位于 /boot 目录中。"
  },
  {
    "lessonId": "4-3",
    "question": "哪个命令实时显示正在运行的进程？",
    "options": [
      "附注",
      "LS",
      "顶部",
      "猫/过程"
    ],
    "correct": 2,
    "explanation": "顶部实时显示持续更新的流程。"
  },
  {
    "lessonId": "4-3",
    "question": "什么信号用于强制终止进程？",
    "options": [
      "信号术语 (15)",
      "叹息 (1)",
      "信号杀死 (9)",
      "信号停止 (19)"
    ],
    "correct": 2,
    "explanation": "SIGKILL (kill -9) 强制终止进程。"
  },
  {
    "lessonId": "4-3",
    "question": "系统是：",
    "options": [
      "文本编辑器",
      "PID 为 1 的初始化系统",
      "一个文件系统",
      "一个网络协议"
    ],
    "correct": 1,
    "explanation": "systemd 是默认的初始化系统。这是第一个进程（PID 1）。"
  },
  {
    "lessonId": "4-3",
    "question": "SIGTERM (15) 与 SIGKILL (9) 不同：",
    "options": [
      "无法杀死进程",
      "可以被进程拦截",
      "它更强大",
      "它不存在"
    ],
    "correct": 1,
    "explanation": "SIGTERM 是“友善的”：进程可以拦截它并在终止之前进行清理。"
  },
  {
    "lessonId": "4-3",
    "question": "ps 辅助显示：",
    "options": [
      "仅用户进程",
      "所有用户的所有进程",
      "只有守护进程",
      "仅根进程"
    ],
    "correct": 1,
    "explanation": "ps aux 显示所有进程（a=所有用户，u=用户格式，x=甚至没有终端）。"
  },
  {
    "lessonId": "4-3",
    "question": "& 在命令末尾将其发送到：",
    "options": [
      "一楼",
      "背景",
      "一个文件",
      "另一位用户"
    ],
    "correct": 1,
    "explanation": "& 在后台运行命令，返回终端的控制权。"
  },
  {
    "lessonId": "4-3",
    "question": "GRUB 是：",
    "options": [
      "一个文件系统",
      "引导加载程序",
      "一个内核",
      "一个守护进程"
    ],
    "correct": 1,
    "explanation": "GRUB（Grand Unified Bootloader）在启动时加载 Linux 内核。"
  },
  {
    "lessonId": "4-3",
    "question": "init/systemd 的 PID 为：",
    "options": [
      "0",
      "1",
      "-1",
      "100"
    ],
    "correct": 1,
    "explanation": "init/systemd 始终是 PID 为 1 的进程，是所有其他进程的父进程。"
  },
  {
    "lessonId": "4-3",
    "question": "/proc 是：",
    "options": [
      "磁盘上的目录",
      "具有进程信息的虚拟文件系统",
      "日志目录",
      "一个分区"
    ],
    "correct": 1,
    "explanation": "/proc 是一个虚拟文件系统，公开内核和进程信息。"
  },
  {
    "lessonId": "4-3",
    "question": "守护进程通常以以下方式结束：",
    "options": [
      "“是的”",
      "“d”",
      "“x”",
      "“r”"
    ],
    "correct": 1,
    "explanation": "守护进程的名称以“d”结尾：sshd、httpd、crond、systemd。"
  },
  {
    "lessonId": "4-4",
    "question": "哪个 IP 范围是私有的（不可在 Internet 上路由）？",
    "options": [
      "8.8.8.0/24",
      "192.168.0.0/16",
      "200.100.0.0/16",
      "1.1.1.0/24"
    ],
    "correct": 1,
    "explanation": "192.168.0.0/16 是私有 IP 范围 (RFC 1918)。"
  },
  {
    "lessonId": "4-4",
    "question": "哪个文件包含 DNS 服务器配置？",
    "options": [
      "/etc/主机",
      "/etc/resolv.conf",
      "/etc/dns.conf",
      "/etc/网络"
    ],
    "correct": 1,
    "explanation": "/etc/resolv.conf 包含系统使用的 DNS 服务器。"
  },
  {
    "lessonId": "4-4",
    "question": "SSH协议默认使用哪个端口？",
    "options": [
      "21",
      "22 号",
      "80",
      "第443章"
    ],
    "correct": 1,
    "explanation": "SSH 使用端口 22。FTP=21、HTTP=80、HTTPS=443。"
  },
  {
    "lessonId": "4-4",
    "question": "“ip addr”命令显示：",
    "options": [
      "域名系统",
      "接口的IP地址",
      "门打开了",
      "网络进程"
    ],
    "correct": 1,
    "explanation": "ip addr（或 ip a）显示网络接口上配置的 IP 地址。"
  },
  {
    "lessonId": "4-4",
    "question": "/etc/hosts 用于：",
    "options": [
      "配置DNS",
      "将名称映射到本地 IP",
      "配置防火墙",
      "列出服务器"
    ],
    "correct": 1,
    "explanation": "/etc/hosts 允许您在不使用 DNS 的情况下定义名称 → IP 映射。"
  },
  {
    "lessonId": "4-4",
    "question": "HTTPS 使用哪个端口？",
    "options": [
      "22 号",
      "80",
      "第443章",
      "8080"
    ],
    "correct": 2,
    "explanation": "HTTPS 使用端口 443。HTTP 使用 80。"
  },
  {
    "lessonId": "4-4",
    "question": "DNS 翻译：",
    "options": [
      "IP 到 MAC",
      "IP 地址中的域名",
      "服务门",
      "群组中的用户"
    ],
    "correct": 1,
    "explanation": "DNS（域名系统）将名称 (google.com) 转换为 IP 地址。"
  },
  {
    "lessonId": "4-4",
    "question": "IPv6 使用以下地址：",
    "options": [
      "32位",
      "64位",
      "128位",
      "256位"
    ],
    "correct": 2,
    "explanation": "IPv6 使用 128 位地址，而 IPv4 使用 32 位地址。"
  },
  {
    "lessonId": "4-4",
    "question": "“ping”命令检查：",
    "options": [
      "磁盘的速度",
      "网络上主机的可达性",
      "记忆",
      "中央处理器"
    ],
    "correct": 1,
    "explanation": "ping 发送 ICMP 数据包来检查主机是否可达。"
  },
  {
    "lessonId": "4-4",
    "question": "ss 或 netstat 显示：",
    "options": [
      "打开文件",
      "网络连接和端口",
      "流程",
      "分区"
    ],
    "correct": 1,
    "explanation": "ss（套接字统计信息）显示网络连接和侦听端口。"
  },
  {
    "lessonId": "4-4",
    "question": "10.0.0.0/8 是一个范围：",
    "options": [
      "民众",
      "私人的",
      "保留组播",
      "环回"
    ],
    "correct": 1,
    "explanation": "10.0.0.0/8 是 3 个 RFC 1918 私有范围之一（以及 172.16.0.0/12 和 192.168.0.0/16）。"
  },
  {
    "lessonId": "4-2",
    "question": "Linux 中的交换充当：",
    "options": [
      "自动备份",
      "虚拟磁盘内存",
      "日志空间",
      "DNS缓存"
    ],
    "correct": 1,
    "explanation": "交换空间是在 RAM 已满时用作 RAM 扩展的磁盘空间。"
  },
  {
    "lessonId": "4-3",
    "question": "日志控制显示：",
    "options": [
      "系统文件",
      "systemd 日志日志",
      "分区",
      "流程"
    ],
    "correct": 1,
    "explanation": "Journalctl 查询 systemd 的日志以查看系统日志。"
  },
  {
    "lessonId": "4-3",
    "question": "“主机名”命令显示：",
    "options": [
      "当前用户",
      "机器名称",
      "内核版本",
      "IP地址"
    ],
    "correct": 1,
    "explanation": "hostname 显示或设置系统主机名。"
  },
  {
    "lessonId": "4-3",
    "question": "screen 和 tmux 是：",
    "options": [
      "文本编辑器",
      "终端复用器",
      "网络经理",
      "文件管理器"
    ],
    "correct": 1,
    "explanation": "screen 和 tmux 允许您拥有多个终端会话并保持它们处于活动状态。"
  },
  {
    "lessonId": "4-3",
    "question": "systemctl status nginx 显示：",
    "options": [
      "源代码",
      "nginx服务的状态",
      "配置",
      "门打开了"
    ],
    "correct": 1,
    "explanation": "systemctl status 显示服务是否处于活动状态、其最近的日志和 PID。"
  },
  {
    "lessonId": "4-2",
    "question": "“uptime”命令显示：",
    "options": [
      "磁盘空间",
      "系统已开启多长时间",
      "网络速度",
      "温度"
    ],
    "correct": 1,
    "explanation": "正常运行时间显示系统正常运行时间、用户数量和平均负载。"
  },
  {
    "lessonId": "4-3",
    "question": "处于状态 S（睡眠）的进程是：",
    "options": [
      "使用CPU",
      "等待事件（I/O、信号）",
      "精加工",
      "错误的"
    ],
    "correct": 1,
    "explanation": "S = 可中断睡眠。该进程等待事件作为输入 I/O。"
  },
  {
    "lessonId": "4-3",
    "question": "lsmod 显示：",
    "options": [
      "加载内核模块",
      "分区",
      "日志文件",
      "已安装的软件包"
    ],
    "correct": 0,
    "explanation": "lsmod 列出当前加载到内存中的内核模块。"
  },
  {
    "lessonId": "4-4",
    "question": "环回地址为：",
    "options": [
      "10.0.0.1",
      "192.168.1.1",
      "127.0.0.1",
      "255.255.255.255"
    ],
    "correct": 2,
    "explanation": "127.0.0.1是环回地址（localhost），用于与自己通信。"
  },
  {
    "lessonId": "4-4",
    "question": "“挖掘”命令用于：",
    "options": [
      "挖掘文件",
      "DNS 查询",
      "硬件诊断",
      "管理磁盘"
    ],
    "correct": 1,
    "explanation": "dig（Domain Information Groper）执行 DNS 查询来解析域名。"
  }
];
