export const topic1Extended = {
  "1-1": {
    "title": "Linux 和操作系统的演变",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🏛️",
        "text": "从起源：Unix 和革命"
      },
      {
        "type": "timeline",
        "events": [
          {
            "year": "1969",
            "title": "Unix诞生",
            "desc": "Dennis Ritchie e Ken Thompson creano Unix ai Bell Labs di AT&T. Scritto in C, un linguaggio portabile, Unix diventa il riferimento per i sistemi operativi."
          },
          {
            "year": "1983",
            "title": "GNU计划",
            "desc": "Richard Stallman lancia il progetto GNU per creare un sistema operativo completamente libero. Nasce la Free Software Foundation (FSF) nel 1985."
          },
          {
            "year": "1987",
            "title": "迷你克斯",
            "desc": "Andrew Tanenbaum crea Minix per scopi didattici. Sarà l'ispirazione diretta per Linus Torvalds."
          },
          {
            "year": "1991",
            "title": "Linux！",
            "desc": "Linus Torvalds, studente finlandese di 21 anni, posta su comp.os.minix: \"Sto facendo un sistema operativo libero, solo un hobby, non sarà grande e professionale come GNU\". Nasce il kernel Linux 0.01."
          },
          {
            "year": "1992",
            "title": "GPL许可证",
            "desc": "Il kernel Linux adotta la licenza GPL v2, diventando ufficialmente software libero."
          },
          {
            "year": "2004",
            "title": "乌班图",
            "desc": "Mark Shuttleworth fonda Canonical e rilascia Ubuntu, rendendo Linux accessibile a tutti."
          },
          {
            "year": "Oggi",
            "title": "Linux 无处不在",
            "desc": "Oltre il 90% dei server cloud, 100% dei supercomputer TOP500, miliardi di dispositivi Android. Linux è il kernel più usato al mondo."
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Linux 与 GNU/Linux",
        "content": "从技术上讲，“Linux”只是内核。完整的系统称为 GNU/Linux，因为它包含 GNU 实用程序（gcc、bash、coreutils）。然而，在通常的用法中，“Linux”是指整个操作系统。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "发行家族"
      },
      {
        "type": "paragraph",
        "text": "Linux 发行版是一个完整的系统，由以下部分组成：Linux 内核 + GNU 实用程序 + 包管理器 + 选定的软件 + 默认配置。有数百个发行版，根据谱系和包管理器组织成“系列”。"
      },
      {
        "type": "diagram",
        "title": "家谱",
        "boxes": [
          {
            "label": "Debian",
            "color": "#e11d48",
            "children": [
              "Ubuntu",
              "Linux Mint",
              "Kali Linux",
              "Raspbian"
            ]
          },
          {
            "label": "Red Hat",
            "color": "#f59e0b",
            "children": [
              "RHEL",
              "Fedora",
              "CentOS Stream",
              "Rocky Linux"
            ]
          },
          {
            "label": "SUSE",
            "color": "#10b981",
            "children": [
              "SLES",
              "openSUSE Leap",
              "openSUSE Tumbleweed"
            ]
          },
          {
            "label": "Indipendenti",
            "color": "#8b5cf6",
            "children": [
              "Arch Linux",
              "Gentoo",
              "Slackware"
            ]
          }
        ]
      },
      {
        "type": "table",
        "headers": [
          "分配",
          "基本的",
          "套餐",
          "发布",
          "典型用途"
        ],
        "rows": [
          [
            "乌班图",
            "德班",
            "apt/.deb",
            "固定（6 个月）",
            "桌面、云、服务器"
          ],
          [
            "软呢帽",
            "红帽",
            "dnf / .rpm",
            "固定（6 个月）",
            "开发，桌面"
          ],
          [
            "RHEL",
            "红帽",
            "百胜/dnf / .rpm",
            "长期支持（10 年）",
            "企业、生产"
          ],
          [
            "ArchLinux",
            "独立的",
            "吃豆人",
            "滚动发布",
            "经验丰富的用户"
          ],
          [
            "开放SUSE",
            "苏世",
            "zypper / .rpm",
            "混合",
            "桌面、企业"
          ],
          [
            "德班",
            "原来的",
            "apt/.deb",
            "固定（~2 年）",
            "服务器、稳定性"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "在 LPI 考试中，您将被要求识别发行版系列、它们的包管理器（.deb 与 .rpm）以及固定版本 (Ubuntu) 和滚动版本 (Arch) 之间的差异。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📱",
        "text": "嵌入式和云世界中的 Linux"
      },
      {
        "type": "paragraph",
        "text": "Linux 不仅仅适用于服务器和桌面。 Linux 内核是数十亿设备的核心：Android 智能手机、智能电视、路由器、汽车信息娱乐系统、物联网设备、无人机，甚至火星上的毅力号漫游车都使用 Linux 处理器！"
      },
      {
        "type": "table",
        "headers": [
          "部门",
          "例子",
          "为什么选择Linux？"
        ],
        "rows": [
          [
            "智能手机",
            "Android（超过 3 亿台设备）",
            "可编辑内核，免费许可证"
          ],
          [
            "云",
            "AWS、Azure、GCP",
            "90% 以上的云工作负载使用 Linux"
          ],
          [
            "超级计算机",
            "TOP500",
            "100%上榜的超级计算机"
          ],
          [
            "物联网",
            "树莓派，智能家居",
            "轻量级、可定制、免费"
          ],
          [
            "汽车",
            "特斯拉、奥迪",
            "实时、可靠、可定制"
          ]
        ]
      },
      {
        "type": "story",
        "title": "场景：为什么云喜欢 Linux",
        "text": "假设您是一家初创公司的首席技术官。您需要为云中的 100 台服务器选择操作系统。 Windows Server 的许可证费用约为每台服务器每年 500 美元。使用Linux？零许可成本、完全控制、庞大的支持社区，并且您可以使用 Bash 脚本自动化一切。这就是 90% 的云使用 Linux 的原因。"
      }
    ]
  },
  "1-2": {
    "title": "开源应用程序",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "满足各种需求的开源软件"
      },
      {
        "type": "paragraph",
        "text": "开源世界为几乎所有商业软件提供了免费且强大的替代品。了解这些应用程序对于 LPI 考试和 Linux 职业生涯至关重要。"
      },
      {
        "type": "table",
        "headers": [
          "类别",
          "开源",
          "专有同等产品"
        ],
        "rows": [
          [
            "办公套房",
            "自由办公室",
            "微软办公软件"
          ],
          [
            "网络浏览器",
            "火狐、铬",
            "Chrome、Edge、Safari"
          ],
          [
            "图像编辑器",
            "GIMP",
            "Adobe Photoshop"
          ],
          [
            "3D建模",
            "混合器",
            "玛雅，3ds Max"
          ],
          [
            "视频编辑器",
            "Kdenlive、OpenShot",
            "Adobe 首映"
          ],
          [
            "音频编辑器",
            "大胆",
            "Adobe 试镜"
          ],
          [
            "电子邮件客户端",
            "雷鸟",
            "前景"
          ],
          [
            "矢量图形",
            "墨景",
            "Adobe 插画师"
          ]
        ]
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🌐",
        "text": "服务器应用程序"
      },
      {
        "type": "paragraph",
        "text": "Linux 统治着服务器世界。开源服务器软件处理着世界上大部分的互联网流量。"
      },
      {
        "type": "table",
        "headers": [
          "功能",
          "软件",
          "描述"
        ],
        "rows": [
          [
            "网络服务器",
            "阿帕奇 HTTP 服务器",
            "历史上最常用的网络服务器"
          ],
          [
            "网络服务器",
            "nginx",
            "高性能、反向代理"
          ],
          [
            "数据库",
            "玛丽亚数据库/MySQL",
            "最流行的关系数据库"
          ],
          [
            "数据库",
            "PostgreSQL",
            "企业级数据库"
          ],
          [
            "文件共享",
            "桑巴舞",
            "与 Windows 客户端共享 (SMB/CIFS)"
          ],
          [
            "文件共享",
            "网络文件系统",
            "原生 Unix/Linux 共享"
          ],
          [
            "电子邮件",
            "后缀/鸽舍",
            "MTA 和 IMAP/POP3 服务器"
          ],
          [
            "域名系统",
            "绑定",
            "参考 DNS 服务器"
          ],
          [
            "容器",
            "码头工人",
            "集装箱平台"
          ],
          [
            "编排",
            "库伯内斯",
            "大规模容器编排"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试要求了解桌面和服务器的主要开源应用程序，以及区分编译型（C、C++）和解释型（Python、Bash、JavaScript）软件的能力。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💻",
        "text": "编程语言"
      },
      {
        "type": "comparison",
        "left": {
          "title": "已填写",
          "items": [
            "C / C++ — 最高性能",
            "编译成机器码",
            "生成的程序是一个二进制文件",
            "您需要针对每个平台重新编译"
          ]
        },
        "right": {
          "title": "解释",
          "items": [
            "Python、Perl、Ruby — 多才多艺",
            "一行一行完成",
            "他们需要安装口译员",
            "无需修改即可在平台之间移植"
          ]
        }
      },
      {
        "type": "infobox",
        "variant": "note",
        "title": "Java是一个特例",
        "content": "Java被编译成字节码（.class），然后由JVM（Java虚拟机）执行。它既不是纯粹编译的也不是解释的。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📦",
        "text": "包管理"
      },
      {
        "type": "paragraph",
        "text": "包管理器是 Linux 上软件维护的核心。它们安装、更新和删除软件，同时自动管理依赖项。"
      },
      {
        "type": "table",
        "headers": [
          "家庭",
          "格式",
          "低级工具",
          "高级工具"
        ],
        "rows": [
          [
            "Debian/Ubuntu",
            ".deb",
            "包装袋",
            "apt / apt-get"
          ],
          [
            "红帽/软呢帽",
            ".rpm",
            "转速",
            "百胜 / dnf"
          ],
          [
            "苏世",
            ".rpm",
            "转速",
            "齐普"
          ],
          [
            "拱",
            ".pkg.tar.zst",
            "吃豆人",
            "吃豆人"
          ]
        ]
      },
      {
        "type": "code",
        "title": "包管理示例",
        "prompt": "# Debian/Ubuntu\n$ sudo apt update && sudo apt install nginx\n\n# 红帽/软呢帽\n$ sudo dnf 安装 nginx\n\n# 苏塞\n$ sudo zypper 安装 nginx",
        "output": ""
      }
    ]
  },
  "1-3": {
    "title": "开源软件和许可证",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🗽",
        "text": "自由软件的 4 项自由"
      },
      {
        "type": "paragraph",
        "text": "Richard Stallman 定义了 4 个基本自由，使软件变得“自由”（自由是自由，而不是“自由”）。这些自由是整个开源运动的哲学基础。"
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Libertà 0",
            "desc": "Usare il programma per qualsiasi scopo, senza restrizioni"
          },
          {
            "term": "Libertà 1",
            "desc": "Studiare come funziona e adattarlo alle proprie necessità (richiede accesso al codice sorgente)"
          },
          {
            "term": "Libertà 2",
            "desc": "Ridistribuire copie per aiutare altri"
          },
          {
            "term": "Libertà 3",
            "desc": "Migliorare il programma e distribuire le modifiche alla community"
          }
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "title": "“免费”并不意味着“免费”",
        "content": "“自由软件”指的是自由，而不是价格。您可以出售免费软件！源代码必须可用，但您可以要求分发、支持或定制方面的补偿。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "📋",
        "text": "开源许可证比较"
      },
      {
        "type": "comparison",
        "left": {
          "title": "🔒 Copyleft（GPL、AGPL）",
          "items": [
            "衍生品必须保持相同的许可证",
            "修改后的代码必须保持开源",
            "GPL：最常用（Linux内核）",
            "AGPL：将 Copyleft 扩展到 Web/SaaS 服务",
            "LGPL：允许与专有代码链接"
          ]
        },
        "right": {
          "title": "🔓 宽容（MIT、BSD、Apache）",
          "items": [
            "衍生品可以成为专有的",
            "限制很少：只需引用作者",
            "MIT：最简单、最短",
            "BSD：与MIT类似，学术渊源",
            "Apache 2.0：包括专利授权"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "执照",
          "类型",
          "版权保留？",
          "商业用途",
          "例子"
        ],
        "rows": [
          [
            "通用公共许可证 v3",
            "强版权",
            "是的",
            "是的",
            "Linux 内核、GCC"
          ],
          [
            "LGPL",
            "弱版权",
            "部分的",
            "是的",
            "glibc、Qt"
          ],
          [
            "AGPL",
            "网络版权",
            "是（+ SaaS）",
            "是的",
            "MongoDB（旧）"
          ],
          [
            "麻省理工学院",
            "宽容的",
            "不",
            "是的",
            "jQuery、Node.js"
          ],
          [
            "阿帕奇2.0",
            "宽容的",
            "不",
            "是的",
            "安卓、库伯内斯"
          ],
          [
            "BSD",
            "宽容的",
            "不",
            "是的",
            "FreeBSD、nginx"
          ],
          [
            "知识共享",
            "它有所不同",
            "选修的",
            "视情况而定",
            "文档、媒体"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "exam",
        "content": "LPI 考试要求您区分 Copyleft (GPL) 和宽容型（MIT、BSD、Apache）许可证。请记住：GPL = 衍生品必须保持 GPL。 MIT/BSD = 衍生品可以成为专有的。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "💼",
        "text": "开源商业模式"
      },
      {
        "type": "paragraph",
        "text": "与普遍看法相反，公司可以通过开源赚钱。以下是主要型号："
      },
      {
        "type": "list",
        "items": [
          {
            "term": "Supporto e Sottoscrizioni",
            "desc": "Red Hat vende supporto enterprise per RHEL. Il codice è libero, il servizio no."
          },
          {
            "term": "Dual Licensing",
            "desc": "Lo stesso software con licenza GPL (gratis) e commerciale (a pagamento per chi non vuole il copyleft)."
          },
          {
            "term": "SaaS",
            "desc": "Offri il software come servizio cloud (GitHub, GitLab)."
          },
          {
            "term": "Open Core",
            "desc": "Core open source + funzionalità premium proprietarie."
          },
          {
            "term": "Consulenza e Formazione",
            "desc": "Certificazioni LPI, RHCSA, corsi di formazione."
          }
        ]
      },
      {
        "type": "story",
        "title": "场景：红帽——从初创公司到价值 340 亿美元",
        "text": "Red Hat 诞生于 1993 年，以盒装方式分发 Linux。模式：软件是免费的，但公司支付支持、认证更新和法律保证的费用。 2019年，IBM以340亿美元收购红帽，证明开源可以创造巨大价值。"
      }
    ]
  },
  "1-4": {
    "title": "ICT 和 Linux 技能",
    "sections": [
      {
        "type": "heading",
        "level": 2,
        "emoji": "🖥️",
        "text": "桌面环境"
      },
      {
        "type": "paragraph",
        "text": "Linux 提供了多种桌面环境。与 Windows 和 macOS 只有一个桌面不同，在 Linux 上您可以选择自己的桌面！"
      },
      {
        "type": "table",
        "headers": [
          "台式机",
          "工具包",
          "哲学",
          "最低内存",
          "典型分布"
        ],
        "rows": [
          [
            "侏儒",
            "GTK",
            "简约、现代",
            "1GB",
            "乌班图、费多拉"
          ],
          [
            "KDE等离子",
            "数量",
            "全面定制",
            "1GB",
            "库班图、openSUSE"
          ],
          [
            "XFCE",
            "GTK",
            "轻便、高效",
            "256MB",
            "曼扎罗·Xubuntu"
          ],
          [
            "LXDE/LXQt",
            "GTK/Qt",
            "超轻",
            "128MB",
            "卢本图"
          ],
          [
            "肉桂",
            "GTK",
            "传统、用户友好",
            "512MB",
            "Linux薄荷"
          ],
          [
            "伴侣",
            "GTK",
            "GNOME 2 的分叉",
            "512MB",
            "乌班图伴侣"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "tip",
        "content": "如果您的 PC 很旧，XFCE 或 LXQt 是完美的。如果您想要最大程度的定制，请选择 KDE Plasma。如果您喜欢简单性，GNOME 是理想的选择。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔒",
        "text": "隐私和在线安全"
      },
      {
        "type": "paragraph",
        "text": "在数字时代，保护您的隐私和安全至关重要。 Linux 提供了强大的数据保护工具。"
      },
      {
        "type": "table",
        "headers": [
          "威胁",
          "他做什么的",
          "如何保护自己"
        ],
        "rows": [
          [
            "第三方 cookie",
            "他们跟踪不同站点之间的导航",
            "在浏览器中阻止它们，使用扩展程序 (uBlock Origin)"
          ],
          [
            "网络跟踪器",
            "他们分析用户的习惯",
            "使用具有增强跟踪保护功能的 Firefox"
          ],
          [
            "中间人",
            "拦截未加密的数据",
            "检查 HTTPS（挂锁），使用 VPN"
          ],
          [
            "网络钓鱼",
            "用于窃取凭据的虚假网站",
            "检查网址，不要点击可疑链接"
          ]
        ]
      },
      {
        "type": "infobox",
        "variant": "warning",
        "title": "私密浏览≠匿名",
        "content": "“隐身浏览”不会让您匿名！您的 ISP、公司和网站仍然可以看到流量。仅隐藏当地历史。为了真正的匿名，你需要 Tor。"
      },
      {
        "type": "heading",
        "level": 2,
        "emoji": "🔑",
        "text": "密码学"
      },
      {
        "type": "paragraph",
        "text": "加密对于保护传输中和静态的数据至关重要。 Linux 支持不同级别的加密。"
      },
      {
        "type": "comparison",
        "left": {
          "title": "对称加密",
          "items": [
            "只需一把密钥即可加密和解密",
            "速度快，用于大量数据",
            "问题：如何共享密钥？",
            "算法：AES、ChaCha20"
          ]
        },
        "right": {
          "title": "非对称加密",
          "items": [
            "两把钥匙：公钥+私钥",
            "公开加密，私有解密",
            "解决分配问题",
            "算法：RSA、Ed25519"
          ]
        }
      },
      {
        "type": "table",
        "headers": [
          "乐器",
          "保护",
          "它是如何运作的"
        ],
        "rows": [
          [
            "传输层安全/SSL",
            "网络连接 (HTTPS)",
            "加密浏览器和服务器之间的流量"
          ],
          [
            "SSH",
            "远程连接",
            "用于远程管理的加密隧道"
          ],
          [
            "GnuPG (GPG)",
            "文件、电子邮件、数字签名",
            "非对称加密、信任网"
          ],
          [
            "dm-crypt/LUKS",
            "整张专辑",
            "Linux 中的全盘加密"
          ],
          [
            "OpenVPN/WireGuard",
            "网络流量",
            "用于安全连接的 VPN"
          ]
        ]
      },
      {
        "type": "code",
        "title": "使用 GPG 加密文件",
        "prompt": "# 生成密钥对\n$ gpg --gen-key\n\n# 为收件人加密文件\n$ gpg --加密 --recipient user@email.com file.txt\n\n# 解密\n$ gpg --解密 file.txt.gpg > file.txt",
        "output": ""
      }
    ]
  }
};
