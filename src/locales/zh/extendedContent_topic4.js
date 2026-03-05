export const topic4Extended = {
  "4-1": {
    "title": "选择操作系统",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "操作系统类别"
      },
      {
        "type": "paragraph",
        "text": "操作系统的选择取决于用例。 Linux 为各种场景提供解决方案，从桌面工作站到企业数据中心，从物联网设备到云。"
      },
      {
        "type": "table",
        "headers": [
          "类别",
          "特征",
          "典型分布",
          "使用示例"
        ],
        "rows": [
          [
            "台式机",
            "GUI、多媒体、生产力",
            "Ubuntu、薄荷、费多拉",
            "办公、开发、个人使用"
          ],
          [
            "服务器",
            "无头、24/7 服务、稳定性",
            "RHEL、Ubuntu 服务器、Debian",
            "网络服务器、数据库、电子邮件"
          ],
          [
            "企业",
            "LTS 支持、认证、SLA",
            "RHEL、SLES",
            "银行、医院、政府"
          ],
          [
            "嵌入式",
            "轻量级、具体、实时",
            "Yocto、Buildroot、Android",
            "路由器、物联网、汽车"
          ],
          [
            "容器/云",
            "最小的、不可变的",
            "Alpine、CoreOS、Flatcar",
            "微服务、Kubernetes"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "☁️",
        "text": "云计算和Linux"
      },
      {
        "type": "paragraph",
        "text": "云计算是通过网络按需提供 IT 资源。 Linux 在云中占据主导地位：超过 90% 的公共工作负载在 Linux 内核上运行。"
      },
      {
        "type": "table",
        "headers": [
          "模型",
          "你管理",
          "提供商管理",
          "例子"
        ],
        "rows": [
          [
            "基础设施即服务",
            "操作系统、应用程序、数据",
            "硬件、网络、存储",
            "AWS EC2、Azure 虚拟机"
          ],
          [
            "平台即服务",
            "应用程序、数据",
            "操作系统、运行时、中间件",
            "Heroku，谷歌应用程序引擎"
          ],
          [
            "软件即服务",
            "只是数据",
            "其他一切",
            "Gmail、Salesforce、Office 365"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏗️",
        "text": "虚拟化和容器"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🖥️虚拟机",
          "items": [
            "模拟整个计算机",
            "它有自己的内核操作系统",
            "完全绝缘",
            "重型（GB 内存）",
            "几分钟内启动",
            "虚拟机管理程序：KVM、VMware、VirtualBox"
          ]
        },
        "right": {
          "title": "📦 容器",
          "items": [
            "共享主机的内核",
            "仅应用程序库",
            "进程级隔离",
            "轻量级（MB 内存）",
            "几秒钟内开始",
            "运行时：Docker、Podman、containerd"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试要求您区分 IaaS、PaaS 和 SaaS，以及虚拟化（带有虚拟机管理程序的 VM）和容器化 (Docker)。您还知道 KVM 是本机 Linux 管理程序。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📜",
        "text": "LPI 认证路径"
      },
      {
        "type": "diagram",
        "title": "认证路径",
        "boxes": [
          {
            "label": "Linux Essentials",
            "color": "#10b981",
            "children": [
              "Esame 010-160",
              "1 solo esame",
              "Nessun prerequisito"
            ]
          },
          {
            "label": "LPIC-1",
            "color": "#3b82f6",
            "children": [
              "Esami 101 + 102",
              "Sysadmin base",
              "5 anni validità"
            ]
          },
          {
            "label": "LPIC-2",
            "color": "#f59e0b",
            "children": [
              "Esami 201 + 202",
              "Sysadmin avanzato",
              "Richiede LPIC-1"
            ]
          },
          {
            "label": "LPIC-3",
            "color": "#ef4444",
            "children": [
              "Specialità: Security/Virt/HA",
              "Livello enterprise",
              "Richiede LPIC-2"
            ]
          }
        ]
      }
    ]
  },
  "4-2": {
    "title": "电脑硬件",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🧠",
        "text": "硬件组件和 Linux 命令"
      },
      {
        "type": "paragraph",
        "text": "Linux通过/proc和/sys中的虚拟文件来查看所有硬件。每个组件都有专用的命令来查询它。"
      },
      {
        "type": "table",
        "headers": [
          "成分",
          "命令",
          "虚拟文件",
          "显示信息"
        ],
        "rows": [
          [
            "中央处理器",
            "LSCPU",
            "/proc/cpu信息",
            "型号、核心、速度、缓存"
          ],
          [
            "内存",
            "自由-h",
            "/proc/内存信息",
            "总计、已用、可用、交换"
          ],
          [
            "光盘",
            "LSBLK",
            "/proc/分区",
            "设备、分区、安装"
          ],
          [
            "磁盘空间",
            "df-h",
            "/proc/挂载",
            "文件系统的已用/可用空间"
          ],
          [
            "导演。方面",
            "杜 -sh 目录/",
            "—",
            "目录占用空间"
          ],
          [
            "PCI",
            "lspci",
            "/proc/总线/pci",
            "显卡、网络、控制器"
          ],
          [
            "USB",
            "LSSB",
            "/proc/总线/USB",
            "连接的 USB 设备"
          ],
          [
            "核心",
            "uname -a",
            "/进程/版本",
            "内核版本和架构"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💽",
        "text": "存储：HDD、SSD、NVMe"
      },
      {
        "type": "table",
        "headers": [
          "类型",
          "技术",
          "阅读速度",
          "延迟",
          "价格/GB",
          "期间"
        ],
        "rows": [
          [
            "硬盘",
            "旋转磁板",
            "100-200MB/秒",
            "5-10毫秒",
            "0.02 欧元",
            "机械（磨损）"
          ],
          [
            "SATA固态硬盘",
            "NAND闪存、SATA总线",
            "500-550MB/秒",
            "0.1毫秒",
            "0.08 欧元",
            "电子（书写周期）"
          ],
          [
            "NVMe",
            "NAND闪存、PCIe总线",
            "3-7GB/秒",
            "0.02毫秒",
            "0.10 欧元",
            "电子（更快）"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "RAID——独立磁盘冗余阵列"
      },
      {
        "type": "paragraph",
        "text": "RAID 结合多个物理磁盘以实现冗余（数据保护）和/或性能。"
      },
      {
        "type": "table",
        "headers": [
          "等级",
          "技术",
          "分钟。光盘",
          "冗余",
          "表现",
          "有用容量"
        ],
        "rows": [
          [
            "磁盘阵列0",
            "条纹",
            "2",
            "❌无",
            "⚡ 快速阅读/写作",
            "100%"
          ],
          [
            "磁盘阵列1",
            "镜像",
            "2",
            "✅ 1 盘",
            "⚡ 快速阅读",
            "50%"
          ],
          [
            "磁盘阵列5",
            "条带化+奇偶校验",
            "3",
            "✅ 1 盘",
            "⚡ 快速阅读",
            "(N-1)/否"
          ],
          [
            "磁盘阵列6",
            "条纹 + 2 条领带",
            "4",
            "✅2张光盘",
            "⚡ 快速阅读",
            "(N-2)/N"
          ],
          [
            "磁盘阵列10",
            "镜面+条纹",
            "4",
            "✅ 每面镜子 1 个",
            "⚡⚡ 高潮",
            "50%"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "RAID 不是备份！",
        "content": "RAID 可防止磁盘硬件故障，但不是备份！如果删除文件，该文件将从所有 RAID 磁盘中删除。备份是数据的单独副本。"
      }
    ]
  },
  "4-3": {
    "title": "内核、进程和日志",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🎯",
        "text": "Linux 内核"
      },
      {
        "type": "paragraph",
        "text": "内核是操作系统的心脏。管理 CPU、内存、I/O、网络和设备。 Linux 内核是整体式但模块化的：您可以加载/卸载模块而无需重新启动。"
      },
      {
        "type": "diagram",
        "title": "启动顺序",
        "boxes": [
          {
            "label": "1. BIOS/UEFI",
            "color": "#ef4444",
            "children": [
              "POST hardware",
              "Cerca bootloader"
            ]
          },
          {
            "label": "2. GRUB",
            "color": "#f59e0b",
            "children": [
              "Menu di boot",
              "Carica kernel"
            ]
          },
          {
            "label": "3. Kernel",
            "color": "#10b981",
            "children": [
              "Inizializza hardware",
              "Monta root filesystem"
            ]
          },
          {
            "label": "4. systemd (PID 1)",
            "color": "#3b82f6",
            "children": [
              "Avvia servizi",
              "Target multi-user"
            ]
          }
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "⚙️",
        "text": "流程管理"
      },
      {
        "type": "table",
        "headers": [
          "命令",
          "功能",
          "典型用途"
        ],
        "rows": [
          [
            "辅助键",
            "列出所有进程",
            "运行进程概览"
          ],
          [
            "顶部/顶部",
            "实时监控",
            "请参阅实时 CPU/RAM"
          ],
          [
            "杀死PID",
            "发送信号给进程",
            "礼貌地结束进程"
          ],
          [
            "杀死-9 PID",
            "强制终止 (SIGKILL)",
            "进程被阻塞且无响应"
          ],
          [
            "背景/最终效果",
            "背景/前景",
            "在 bg 和 fg 之间移动进程"
          ],
          [
            "职位",
            "后台进程列表",
            "查看后台运行的内容"
          ],
          [
            "nohup 命令 &",
            "进程在注销后仍然存在",
            "必须继续的命令"
          ],
          [
            "计划名称",
            "按名称查找 PID",
            "寻找具体流程"
          ],
          [
            "删除名称",
            "以名字结尾",
            "按名称而不是 PID 杀死"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "👻",
        "text": "Unix信号"
      },
      {
        "type": "table",
        "headers": [
          "信号",
          "数字",
          "行动",
          "可拦截？"
        ],
        "rows": [
          [
            "信号术语",
            "15",
            "终止（礼貌、清理）",
            "✅ 是的"
          ],
          [
            "信号杀死",
            "9",
            "结束（强制、立即）",
            "❌ 没有"
          ],
          [
            "叹息",
            "1",
            "挂断/重新加载配置",
            "✅ 是的"
          ],
          [
            "信号情报",
            "2",
            "中断（Ctrl+C）",
            "✅ 是的"
          ],
          [
            "停止信号",
            "19",
            "暂停进程",
            "❌ 没有"
          ],
          [
            "信号控制",
            "18",
            "恢复暂停的进程",
            "✅ 是的"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试询问 SIGTERM（15，可拦截）和 SIGKILL（9，不可拦截）之间的区别。始终在 SIGKILL 之前使用 SIGTERM。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "系统日志"
      },
      {
        "type": "table",
        "headers": [
          "文件/命令",
          "内容",
          "格式"
        ],
        "rows": [
          [
            "/var/log/系统日志",
            "一般系统日志",
            "文本（rsyslog）"
          ],
          [
            "/var/log/auth.log",
            "登录、sudo、身份验证",
            "文本"
          ],
          [
            "/var/log/kern.log",
            "内核消息",
            "文本"
          ],
          [
            "/var/日志/dmesg",
            "启动和硬件",
            "环形缓冲区内核"
          ],
          [
            "日志控制",
            "所有日志（systemd 日志）",
            "二进制（系统）"
          ],
          [
            "日志控制 -u nginx",
            "特定服务的日志",
            "按单位过滤"
          ],
          [
            "日志ctl -f",
            "实时跟踪日志",
            "就像尾部-f"
          ]
        ]
      }
    ]
  },
  "4-4": {
    "title": "联网",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "📡",
        "text": "基本网络概念"
      },
      {
        "type": "paragraph",
        "text": "网络上的每个设备都需要一个 IP 地址、一个子网掩码（用于定义本地网络）、一个网关（用于离开网络）和一个 DNS 服务器（用于将名称转换为 IP）。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔢",
        "text": "IPv4 — 地址和子网"
      },
      {
        "type": "paragraph",
        "text": "IPv4 使用 32 位地址，表示为从 0 到 255 的 4 个十进制组（例如 192.168.1.100）。"
      },
      {
        "type": "table",
        "headers": [
          "范围",
          "类型",
          "班级",
          "网络/主机"
        ],
        "rows": [
          [
            "10.0.0.0/8",
            "私人的",
            "到",
            "16M地址"
          ],
          [
            "172.16.0.0/12",
            "私人的",
            "乙",
            "1M地址"
          ],
          [
            "192.168.0.0/16",
            "私人的",
            "C",
            "65K 地址"
          ],
          [
            "127.0.0.0/8",
            "环回",
            "—",
            "本地主机（机器本身）"
          ],
          [
            "0.0.0.0",
            "默认路由",
            "—",
            "所有未指定的地址"
          ],
          [
            "255.255.255.255",
            "播送",
            "—",
            "本地网络中的每个人"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "CIDR 表示法",
        "content": "/24表示前24位是“网络”部分，后8位是“主机”部分。 192.168.1.0/24 = 从 192.168.1.0 到 192.168.1.255 的网络（256 个地址，254 个可用）。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "IPv6"
      },
      {
        "type": "paragraph",
        "text": "IPv6 使用 128 位地址，以十六进制编写（例如 2001:0db8:85a3::8a2e:0370:7334）。修复了 IPv4 耗尽问题（40 亿个地址与 340 个十亿地址）。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔤",
        "text": "DNS 和端口"
      },
      {
        "type": "table",
        "headers": [
          "带来",
          "协议",
          "服务",
          "描述"
        ],
        "rows": [
          [
            "20/21",
            "传输控制协议",
            "文件传输协议",
            "文件传输协议"
          ],
          [
            "22 号",
            "传输控制协议",
            "SSH",
            "安全的远程访问"
          ],
          [
            "23",
            "传输控制协议",
            "远程登录",
            "远程访问不安全"
          ],
          [
            "25",
            "传输控制协议",
            "邮件传输协议",
            "我发送电子邮件"
          ],
          [
            "53",
            "TCP/UDP",
            "域名系统",
            "名称翻译 → IP"
          ],
          [
            "80",
            "传输控制协议",
            "HTTP协议",
            "未加密的网络"
          ],
          [
            "110",
            "传输控制协议",
            "POP3",
            "邮件接收"
          ],
          [
            "143",
            "传输控制协议",
            "IMAP",
            "远程电子邮件管理"
          ],
          [
            "第443章",
            "传输控制协议",
            "HTTPS",
            "加密网络 (TLS)"
          ],
          [
            "3306",
            "传输控制协议",
            "MySQL",
            "MySQL/MariaDB 数据库"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🛠️",
        "text": "网络命令"
      },
      {
        "type": "code",
        "title": "网络诊断命令",
        "prompt": "# 显示接口的IP地址\n$ip地址显示\n\n# 显示路由表\n$ip 路由显示\n\n# 测试连通性\n$ping -c 4 google.com\n\n# 追踪数据包的路径\n$ 跟踪路由 google.com\n\n# 显示监听端口\n$ss-图恩\n\n# DNS 查询\n$ 挖掘 google.com\n$nslookup google.com\n\n# 显示DNS配置\n$猫/etc/resolv.conf",
        "output": ""
      },
      {
        "type": "table",
        "headers": [
          "文件",
          "功能"
        ],
        "rows": [
          [
            "/etc/主机",
            "静态映射名称 → IP（优先于 DNS）"
          ],
          [
            "/etc/resolv.conf",
            "系统 DNS 服务器（名称服务器 8.8.8.8）"
          ],
          [
            "/etc/主机名",
            "机器的主机名"
          ],
          [
            "/etc/nsswitch.conf",
            "名称解析顺序（文件 → dns）"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试要求提供标准端口（22=SSH、80=HTTP、443=HTTPS、53=DNS）和网络配置文件（/etc/resolv.conf、/etc/hosts）。还了解 IPv4（32 位）和 IPv6（128 位）之间的区别。"
      }
    ]
  }
};
